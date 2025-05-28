// C:\Users\wjohnson\Documents\GreenTravel Website FIles\greentravelforall\src\app\page.tsx
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
          <a href="/blog" className="bg-green-700 text-white px-6 py-2 rounded-xl hover:bg-green-800">
            Explore Blog
          </a>
          <a href="/contact" className="border border-green-700 text-green-700 px-6 py-2 rounded-xl hover:bg-green-100">
            Contact Us
          </a>
        </div>
      </section>

      <section>
        <img
          src="/hero-green-travel.jpg"
          alt="Eco-conscious traveler overlooking a scenic view"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </section>
    </div>
  );
}