export default function Transparency() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Royalty Transparency</h1>
      <p className="text-slate-600 mb-8">
        Every trade of the $BUBONA token on Bags.fm generates creator royalties. Those funds go back into the brand.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        <div className="border rounded-xl p-6">
          <p className="text-sm text-slate-500">Lifetime Trading Volume</p>
          <p className="text-3xl font-bold mt-1">$0</p>
          <p className="text-xs text-slate-400 mt-1">Updates after launch</p>
        </div>
        <div className="border rounded-xl p-6">
          <p className="text-sm text-slate-500">Royalties Reinvested</p>
          <p className="text-3xl font-bold mt-1">$0</p>
          <p className="text-xs text-slate-400 mt-1">Product development & inventory</p>
        </div>
      </div>

      <div className="bg-teal-50 border border-teal-100 rounded-xl p-6">
        <h2 className="font-semibold text-teal-800 mb-2">How royalties are used</h2>
        <ul className="text-sm text-teal-700 space-y-1">
          <li>• Product samples and first production runs</li>
          <li>• Inventory for drops</li>
          <li>• Packaging and photography</li>
          <li>• Community rewards and early-access drops</li>
        </ul>
      </div>

      <p className="mt-8 text-sm text-slate-400">
        Figures will be updated regularly once the token is live on Bags.fm. Full on-chain transparency.
      </p>
    </main>
  );
}