// C:\Users\wjohnson\Documents\GreenTravel Website FIles\greentravelforall\src\app\blog\page.tsx
import Link from "next/link";

const posts = [
  {
    slug: "eco-travel-hacks",
    title: "10 Sustainable Travel Hacks That Save Money",
    excerpt: "Learn how to save money while traveling green with these actionable eco-travel tips.",
  },
  {
    slug: "green-cities-2025",
    title: "Top 5 Eco-Friendly Cities You Can Visit in 2025",
    excerpt: "Discover five cities leading the way in sustainability — and why they should be on your list.",
  },
  {
    slug: "carbon-offset-guide",
    title: "The Ultimate Guide to Carbon Offsetting Your Vacation",
    excerpt: "Understand what carbon offsets are, how they work, and how to use them to balance your trip.",
  },
  {
    slug: "accessible-travel",
    title: "Accessible Travel: How to Explore the World Without Barriers",
    excerpt: "Traveling with accessibility in mind? Here's how to make it smooth and inclusive.",
  },
  {
    slug: "what-is-green-travel",
    title: "Why 'Green Travel' Is More Than Just a Buzzword",
    excerpt: "Explore the real meaning behind green travel and how it shapes the future of tourism.",
  },
];

export default function BlogIndex() {
  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold text-green-800 text-center">
        Explore Our Latest Blog Posts
      </h1>
      <div className="grid gap-8">
        {posts.map((post) => (
          <div key={post.slug} className="bg-white p-6 rounded-xl shadow-md border border-green-100">
            <h2 className="text-xl font-semibold text-green-700">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-gray-600 mt-2">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-green-700 font-medium mt-2 inline-block hover:underline">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}