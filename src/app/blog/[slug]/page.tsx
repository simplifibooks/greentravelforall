// C:\Users\wjohnson\Documents\GreenTravel Website FIles\greentravelforall\src\app\blog\[slug]\page.tsx

import { notFound } from "next/navigation";

const posts = {
  "eco-travel-hacks": {
    title: "10 Sustainable Travel Hacks That Save Money",
    content: (
      <>
        <p>
          Traveling sustainably doesn't mean you have to spend more. Here are 10 hacks to lower your carbon footprint *and* your expenses:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Use a <a href="https://amzn.to/43yUj1F" className="text-green-700 underline" target="_blank">collapsible water bottle</a> to avoid plastic waste.</li>
          <li>Book <a href="https://www.viator.com/?pid=P00253863&mcid=42383&medium=link&medium_version=selector&campaign=GreenTravelforALL" target="_blank" className="text-green-700 underline">local Viator tours</a> instead of chain excursions.</li>
          <li>Pack <a href="https://amzn.to/4kgrNcA" className="text-green-700 underline" target="_blank">eco-friendly travel toiletries</a>.</li>
        </ul>
      </>
    )
  },
  "green-cities-2025": {
    title: "Top 5 Eco-Friendly Cities You Can Visit in 2025",
    content: (
      <>
        <p>Looking for your next low-impact getaway? These cities are known for their green infrastructure and inclusive policies:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Amsterdam</li>
          <li>Vancouver</li>
          <li>Ljubljana</li>
          <li>Reykjavik</li>
          <li>Oslo</li>
        </ul>
        <p>Travel light with this <a href="https://amzn.to/3Sp361b" target="_blank" className="text-green-700 underline">eco-conscious daypack</a>.</p>
      </>
    )
  },
  "carbon-offset-guide": {
    title: "The Ultimate Guide to Carbon Offsetting Your Vacation",
    content: (
      <>
        <p>Carbon offsetting lets you balance out emissions from flights, road trips, and accommodations. Here’s how:</p>
        <ol className="list-decimal pl-6 space-y-1">
          <li>Calculate your emissions (tons of CO₂)</li>
          <li>Select a certified offset provider (Gold Standard or VCS)</li>
          <li>Choose a project: reforestation, solar, etc.</li>
        </ol>
        <p>Need a sustainable water filter for long-haul trips? Try the <a href="https://amzn.to/4keLq4v" target="_blank" className="text-green-700 underline">LifeStraw</a>.</p>
      </>
    )
  },
  "accessible-travel": {
    title: "Accessible Travel: How to Explore the World Without Barriers",
    content: (
      <>
        <p>Travel should be inclusive. Here are tips and resources to ensure your trip is barrier-free:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Use booking tools like <a href="https://www.viator.com/?pid=P00253863&mcid=42383&medium=link&medium_version=selector&campaign=GreenTravelforALL" target="_blank" className="text-green-700 underline">Viator’s accessible filters</a></li>
          <li>Pack a <a href="https://amzn.to/3Fx2WSx" target="_blank" className="text-green-700 underline">foldable travel mug</a> for convenience</li>
        </ul>
      </>
    )
  },
  "what-is-green-travel": {
    title: "Why 'Green Travel' Is More Than Just a Buzzword",
    content: (
      <>
        <p>Green travel emphasizes sustainability, respect for locals, and long-term impact. It's not about being perfect—it's about being intentional.</p>
        <p>Our favorite starter kit? This <a href="https://amzn.to/4kfvX4h" target="_blank" className="text-green-700 underline">eco-friendly backpack</a>.</p>
      </>
    )
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts];
  if (!post) return notFound();

  return (
    <article className="space-y-6">
      <h1 className="text-3xl font-bold text-green-800">{post.title}</h1>
      <div className="text-gray-700 space-y-4">{post.content}</div>
    </article>
  );
}