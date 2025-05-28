import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <main className="prose max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-green-800">{post.title}</h1>
      <article className="text-gray-800">
        {post.content
          .replace(/’/g, "&rsquo;")
          .replace(/'/g, "&#39;")
          .split("\n")
          .map((para, idx) => (
            <p key={idx} dangerouslySetInnerHTML={{ __html: para }} />
          ))}
      </article>

      {post.links?.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-green-700">Useful Resources</h2>
          <ul className="list-disc list-inside space-y-1">
            {post.links.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 underline hover:text-green-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
