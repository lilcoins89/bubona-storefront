"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="max-w-xl mx-auto px-4 py-20 text-center">
      <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
      <p className="text-slate-600 mb-8">
        We hit an unexpected error. Please try again.
      </p>
      <button
        onClick={reset}
        className="bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800"
      >
        Try again
      </button>
    </main>
  );
}