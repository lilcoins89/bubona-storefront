export default function About() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">About Bubona</h1>
      <p className="text-lg text-slate-600 leading-relaxed">
        Bubona is a clothing brand founded, funded, and developed on Solana. Inspired by the Bags.fm model, we launched a token so the community can support the brand through trading volume. Creator royalties from every trade help fund product development, drops, and growth.
      </p>
      <p className="mt-4 text-lg text-slate-600 leading-relaxed">
        Heritage meets tomorrow. Signature pieces with the cyan glass B logo. From classic tees to metallic statement dresses and modest activewear.
      </p>
      <div className="mt-10 p-6 bg-teal-50 rounded-xl border border-teal-100">
        <h2 className="font-semibold text-teal-800">Funded on Solana</h2>
        <p className="mt-2 text-sm text-teal-700">Token live on Bags.fm. Holders become part of the brand story.</p>
      </div>
    </main>
  );
}