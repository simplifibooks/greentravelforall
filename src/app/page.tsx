import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-green-800">
          Welcome to Green Travel For All 🌍
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Discover sustainable, accessible, and inclusive ways to explore the world — while giving back to the planet and people along the way.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <Link href="/blog" className="bg-green-700 text-white px-6 py-2 rounded-xl hover:bg-green-800">
            Explore Blog
          </Link>
          <Link href="/contact" className="border border-green-700 text-green-700 px-6 py-2 rounded-xl hover:bg-green-100">
            Contact Us
          </Link>
        </div>
      </section>

      <section>
        <Image
          src="/hero-green-travel.jpg"
          alt="Eco-conscious traveler overlooking a scenic view"
          width={1200}
          height={600}
          className="w-full h-auto rounded-xl shadow-md"
        />
      </section>
    </div>
  );
}