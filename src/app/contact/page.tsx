'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch('https://formspree.io/f/mgeglwqa', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: data,
    });

    if (response.ok) {
      setStatus('Message sent successfully!');
      form.reset();
    } else {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green-800 mb-6">Contact Us</h1>
      <p className="mb-8 text-gray-700">
        Have questions or suggestions? We&apos;d love to hear from you!
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
          <input
            required
            name="name"
            type="text"
            className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
          <input
            required
            name="email"
            type="email"
            className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Message</label>
          <textarea
            required
            name="message"
            rows={5}
            className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition"
        >
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-sm text-gray-600">{status}</p>}
    </main>
  );
}