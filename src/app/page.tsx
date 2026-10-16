import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-cyan-50 to-teal-50 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm tracking-widest text-teal-700 uppercase mb-4">Independent Graphic Goods / Est. 2026</p>
          <h1 className="text-6xl md:text-8xl font-black leading-none text-slate-900">
            WEAR<br />YOUR<br /><span className="italic font-serif text-teal-600">story.</span>
          </h1>
          <p className="mt-6 text-xl text-slate-600 max-w-xl mx-auto">
            Original pieces with a signature mark, made for your everyday adventures. Funded and developed on Solana.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop" className="bg-slate-900 text-white px-8 py-4 rounded font-medium hover:bg-slate-800">
              SHOP THE COLLECTION →
            </Link>
            <Link href="/about" className="border border-slate-300 px-8 py-4 rounded font-medium hover:bg-white">
              EXPLORE THE STORY
          </Link>
          </div>
        </div>
      </section>

      {/* Solana Pay Badge */}
      <section className="py-8 px-4 bg-slate-900 text-white text-center">
        <p className="text-sm tracking-widest text-teal-400">PAY WITH SOLANA PAY</p>
        <p className="mt-2 text-lg">Checkout in USDC. Instant. Low fees. Built for crypto buyers.</p>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Classic Tee", color: "Off White", price: "$48" },
            { name: "Oversized Fit", color: "Black", price: "$52" },
            { name: "Metallic Dress", color: "Teal", price: "$128" },
            { name: "Sculpt Set", color: "Teal / Black", price: "$98" },
          ].map((p) => (
            <Link key={p.name} href="/shop" className="group">
              <div className="aspect-[3/4] bg-slate-200 rounded-lg overflow-hidden mb-3">
                <div className="w-full h-full bg-gradient-to-br from-teal-100 to-cyan-200 flex items-center justify-center text-slate-400">
                  Product Image
                </div>
              </div>
              <h3 className="font-medium">{p.name}</h3>
              <p className="text-sm text-slate-500">{p.color}</p>
              <p className="font-semibold mt-1">{p.price}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Email Capture */}
      <section className="py-16 px-4 bg-white border-t">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">Get drop alerts</h2>
          <p className="text-slate-500 mb-6 text-sm">Be first to know when new pieces and limited colorways drop.</p>
          <EmailCapture />
        </div>
      </section>
    </main>
  );
}