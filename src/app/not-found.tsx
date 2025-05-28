export default function NotFound() {
  return (
    <div className="text-center space-y-6 py-20">
      <h1 className="text-5xl font-bold text-green-800">404</h1>
      <p className="text-lg text-gray-700">Oops! That page doesn't exist.</p>
      <a href="/" className="text-green-700 underline">Return Home</a>
    </div>
  );
}