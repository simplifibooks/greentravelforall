'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold text-green-800 mb-4">404 — Page Not Found</h1>
      <p className="text-gray-700 mb-6">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="text-white bg-green-700 px-6 py-2 rounded hover:bg-green-800 transition"
      >
        Go Home
      </Link>
    </main>
  );
}