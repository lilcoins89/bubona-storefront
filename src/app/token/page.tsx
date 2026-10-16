export default function Token() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4 text-center">$BUBONA Token</h1>
      <p className="text-xl text-slate-600 mb-8 text-center">Launched on Bags.fm. Every trade funds the brand forever.</p>

      <div className="bg-slate-900 text-white rounded-2xl p-8 text-center mb-10">
        <p className="text-sm tracking-widest text-teal-400">COMING SOON / LIVE ON BAGS.FM</p>
        <h2 className="text-3xl font-bold mt-4">Support the brand. Own the story.</h2>
        <p className="mt-4 text-slate-300">Creator royalties from trading volume go directly to product development, inventory, and community drops.</p>
        <a href="https://bags.fm" target="_blank" className="inline-block mt-6 bg-teal-500 text-black px-8 py-3 rounded font-medium hover:bg-teal-400">
          View on Bags.fm
        </a>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="border rounded-xl p-6">
          <h3 className="font-semibold text-lg">Holder Discount</h3>
          <p className="text-sm text-slate-600 mt-2">Hold a minimum amount of $BUBONA to unlock 10–20% off at checkout. Wallet check coming soon.</p>
        </div>
        <div className="border rounded-xl p-6">
          <h3 className="font-semibold text-lg">Early Access</h3>
          <p className="text-sm text-slate-600 mt-2">Token holders get first access to new drops and limited colorways before public release.</p>
        </div>
        <div className="border rounded-xl p-6 sm:col-span-2">
          <h3 className="font-semibold text-lg">Royalty Transparency</h3>
          <p className="text-sm text-slate-600 mt-2">See exactly how much volume the token has done and how much has been reinvested into products.</p>
          <a href="/transparency" className="inline-block mt-3 text-teal-600 text-sm font-medium">View Transparency Page →</a>
        </div>
      </div>
    </main>
  );
}