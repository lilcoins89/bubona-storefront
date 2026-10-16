"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const list = JSON.parse(localStorage.getItem("bubona-emails") || "[]");
    list.push(email);
    localStorage.setItem("bubona-emails", JSON.stringify(list));
    setDone(true);
  };

  if (done) {
    return <p className="text-teal-600 font-medium">You’re on the list. Drop alerts coming soon.</p>;
  }

  return (
    <form onSubmit={submit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
      <input
        type="email"
        required
        placeholder="Email for drop alerts"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 border rounded-lg px-4 py-3 text-sm"
      />
      <button type="submit" className="bg-slate-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-slate-800">
        Notify Me
      </button>
    </form>
  );
}