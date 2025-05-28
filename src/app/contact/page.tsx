export default function ContactPage() {
  return (
    <section className="max-w-xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-green-800">Contact Us</h1>
      <p>
        Have a question, tip, or idea? We'd love to hear from you. Fill out the form below and we’ll get back to you soon.
      </p>
      <form
        action="https://formspree.io/f/xoqgkgjg"
        method="POST"
        className="space-y-4"
      >
        <div>
          <label className="block font-medium text-sm text-gray-700">Name</label>
          <input type="text" name="name" required className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block font-medium text-sm text-gray-700">Email</label>
          <input type="email" name="email" required className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block font-medium text-sm text-gray-700">Message</label>
          <textarea name="message" rows={4} required className="w-full p-2 border rounded-md"></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}