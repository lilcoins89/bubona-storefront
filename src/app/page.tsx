import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";

const featured = [
  { id: "classic-tee", name: "Classic Tee", detail: "Off White / Signature mark", price: "$48", tone: "from-stone-200 via-stone-100 to-teal-100" },
  { id: "oversized", name: "Oversized Fit", detail: "Black / Heavyweight cotton", price: "$52", tone: "from-slate-900 via-slate-800 to-teal-950" },
  { id: "metallic-dress", name: "Metallic Dress", detail: "Teal / Limited edition", price: "$128", tone: "from-teal-300 via-cyan-200 to-slate-100" },
  { id: "sculpt", name: "Sculpt Collection", detail: "Black / Performance stretch", price: "$98", tone: "from-slate-950 via-teal-950 to-slate-700" },
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white md:py-36">
        <div className="absolute -right-32 top-8 size-96 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-teal-300">Independent graphic goods · Est. 2026</p>
          <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_.85fr]">
            <div>
              <h1 className="max-w-4xl text-6xl font-black uppercase leading-[.84] tracking-[-.07em] md:text-9xl">Wear your <span className="font-serif font-normal italic text-teal-300">story.</span></h1>
              <p className="mt-8 max-w-lg text-base leading-7 text-slate-300 md:text-lg">Original pieces with a signature mark. Built for everyday adventures, funded by the people who wear them.</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/shop" className="rounded-full bg-teal-400 px-7 py-4 text-sm font-bold text-slate-950 transition hover:bg-teal-300">Shop the collection <span aria-hidden="true">→</span></Link>
                <Link href="/lookbook" className="rounded-full border border-white/25 px-7 py-4 text-sm font-bold transition hover:bg-white/10">View lookbook</Link>
              </div>
            </div>
            <div className="border-l border-white/15 pl-6 text-sm text-slate-400 lg:mb-2">
              <p className="font-semibold uppercase tracking-[0.2em] text-teal-300">The Bubona standard</p>
              <p className="mt-5 max-w-xs leading-6">Small-batch releases. Considered materials. A transparent path from community to collection.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-teal-400 px-5 py-5 text-center text-sm font-bold uppercase tracking-[0.16em] text-slate-950">Checkout in USDC with Solana Pay · Low fees · Instant settlement</section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <div className="mb-10 flex items-end justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-700">The current edit</p><h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">New arrivals</h2></div><Link href="/shop" className="text-sm font-bold underline underline-offset-4">Shop all</Link></div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-6">
          {featured.map((item) => <Link key={item.id} href={`/product/${item.id}`} className="group"><div className={`relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br ${item.tone}`}><span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-800">New</span><span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-8xl font-black text-white/20 transition duration-500 group-hover:scale-110">B</span></div><h3 className="mt-4 font-bold">{item.name}</h3><p className="mt-1 text-xs text-slate-500">{item.detail}</p><p className="mt-2 font-semibold">{item.price}</p></Link>)}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-20 text-center"><p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-700">Stay in the loop</p><h2 className="mt-3 text-3xl font-black">Drop alerts, not noise.</h2><p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">Be first to know about new pieces, limited colorways, and community releases.</p><div className="mx-auto mt-7 max-w-md"><EmailCapture /></div></section>
    </main>
  );
}
