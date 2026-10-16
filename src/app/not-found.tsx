import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-xl mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl font-black text-teal-600 mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-4">Page not found</h2>
      <p className="text-slate-600 mb-8">The page you’re looking for doesn’t exist or has moved.</p>
      <Link
        href="/"
        className="bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800"
      >
        Back to home
      </Link>
    </main>
  );
}