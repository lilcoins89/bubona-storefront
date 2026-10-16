"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="bg-slate-50 text-slate-900">
        <main className="max-w-xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Critical error</h1>
          <p className="text-slate-600 mb-8">Something broke at the root level.</p>
          <button
            onClick={reset}
            className="bg-slate-900 text-white px-6 py-3 rounded-lg font-medium"
          >
            Reload
          </button>
        </main>
      </body>
    </html>
  );
}