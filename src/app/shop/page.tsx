import Link from "next/link";

const products = [
  { id: "classic-tee", name: "Classic Tee", colors: ["Off White", "Black", "Sand"], price: 48, description: "Signature B logo. Built Different." },
  { id: "oversized", name: "Oversized Fit", colors: ["Black", "Charcoal"], price: 52, description: "Relaxed fit with large back logo." },
  { id: "metallic-dress", name: "Metallic Dress", colors: ["Teal"], price: 128, description: "Shiny metallic fabric with embossed logo. Heritage meets tomorrow." },
  { id: "sculpt", name: "Sculpt Collection", colors: ["Black", "Teal"], price: 98, description: "Modest. Active. Premium. Functional pockets and embroidered logo." },
];

export default function Shop() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Shop</h1>
      <p className="text-slate-600 mb-10">All pieces. Colors available as shown.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p) => (
          <Link key={p.id} href={`/product/${p.id}`} className="border rounded-xl overflow-hidden hover:shadow-lg transition">
            <div className="aspect-[4/5] bg-gradient-to-br from-cyan-100 to-teal-200 flex items-center justify-center">
              <span className="text-4xl font-black text-teal-600/30">B</span>
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold">{p.name}</h2>
              <p className="text-sm text-slate-500 mt-1">{p.description}</p>
              <div className="flex gap-2 mt-3">
                {p.colors.map((c) => (
                  <span key={c} className="text-xs bg-slate-100 px-2 py-1 rounded">{c}</span>
                ))}
              </div>
              <p className="mt-4 font-bold">${p.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}