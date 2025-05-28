import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";
import Link from "next/link";


export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <main className="space-y-8">
      <h1 className="text-3xl font-bold text-green-800">{post.title}</h1>
      <div className="prose max-w-none prose-green">
        {post.content
          .replace(/’/g, "&rsquo;")
          .split("\n")
          .map((paragraph, idx) => (
            <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
      </div>

      {post.links?.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-green-700 mb-2">Useful Resources</h2>
          <ul className="list-disc list-inside space-y-2">
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
        </div>
      )}
    </main>
  );
}