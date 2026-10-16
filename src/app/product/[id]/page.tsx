import { notFound } from "next/navigation";

const products: Record<string, any> = {
  "classic-tee": { name: "Classic Tee", price: 48, colors: ["Off White", "Black", "Sand"], desc: "Signature B logo on premium cotton. Built Different. Bigger dreams. Higher standards." },
  "oversized": { name: "Oversized Fit", price: 52, colors: ["Black", "Charcoal"], desc: "Relaxed oversized fit. Large back print." },
  "metallic-dress": { name: "Metallic Dress", price: 128, colors: ["Teal"], desc: "Shiny metallic teal fabric with raised glass-like logo. Statement piece." },
  "sculpt": { name: "Sculpt Collection", price: 98, colors: ["Black", "Teal"], desc: "Modest activewear. Embroidered logo, functional pockets, premium stretch." },
};

export default function Product({ params }: { params: { id: string } }) {
  const product = products[params.id];
  if (!product) notFound();

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="aspect-square bg-gradient-to-br from-teal-100 to-cyan-200 rounded-2xl flex items-center justify-center">
          <span className="text-9xl font-black text-teal-600/20">B</span>
        </div>
        <div>
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-3xl font-semibold mt-4">${product.price}</p>
          <p className="mt-6 text-slate-600">{product.desc}</p>
          <div className="mt-6">
            <p className="font-medium mb-2">Available Colors</p>
            <div className="flex gap-2">
              {product.colors.map((c: string) => (
                <button key={c} className="px-4 py-2 border rounded-full text-sm hover:bg-teal-50">{c}</button>
              ))}
            </div>
          </div>
          <button className="mt-8 w-full bg-slate-900 text-white py-4 rounded-lg font-medium hover:bg-slate-800">
            Add to Cart — Checkout via Shopify + Solana Pay
          </button>
          <p className="text-xs text-slate-400 mt-3 text-center">Payments in USDC via Solana Pay. Token holders get perks.</p>
        </div>
      </div>
    </main>
  );
}