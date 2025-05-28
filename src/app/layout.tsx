import "./globals.css";
import { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";

export const metadata = {
  title: "Green Travel For All",
  description: "Explore sustainable and inclusive travel options around the world.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans bg-green-50 text-gray-800">
        <Head>
          {/* Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-TJMHR0Y7H4"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TJMHR0Y7H4');
              `,
            }}
          />

          {/* Google AdSense */}
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2752828010935393"
            crossOrigin="anonymous"
          ></script>
        </Head>

        <header className="bg-green-700 text-white px-6 py-4 shadow-md">
          <nav className="flex justify-between items-center max-w-6xl mx-auto">
            <Link href="/" className="text-xl font-bold">
              🌿 Green Travel For All
            </Link>
            <ul className="flex space-x-6 text-sm font-medium">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/blog" className="hover:underline">Blog</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
          {children}
        </main>

        <footer className="bg-green-800 text-white text-sm px-6 py-6 mt-12">
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms-of-use" className="hover:underline">Terms of Use</Link>
            <Link href="/disclaimer" className="hover:underline">Affiliate Disclosure</Link>
            <Link href="/blog" className="hover:underline">Blog</Link>
          </div>
          <div className="text-center mt-4">&copy; {new Date().getFullYear()} GreenTravelForAll.org</div>
        </footer>
      </body>
    </html>
  );
}