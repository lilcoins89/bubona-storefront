import Link from "next/link";
import Image from "next/image";
import EmailCapture from "@/components/EmailCapture";

const media = {
  video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/v24044gl0000da3kmpfog65j03g1oo50-6GnVLctmAKDWaP2kyVxJ9GXmCNEIeC.mp4",
  dress: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0514-K1psSWjHGe0XqRXEt3bcSG6c7Cxt8f.jpeg",
  detail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0510-V1JYUU9d04U3K8pDZLK79pG7t0Bm4u.jpeg",
  sculpt: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0515-NcMhMAI6qU3W68G8yGelA5EfYKlhhD.jpeg",
  collection: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3299E1E3-117F-48D7-84DD-3E5235D731A7-uQCKoy401VUPaERSJNOdiXK1rUEn7m.png",
  tee: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17401996-909B-4465-8551-D7C2F654EAA0-KiLgR9LadJFw3sThwq61lq7VbfbozN.png",
};

const featured = [
  { id: "classic-tee", name: "Classic Tee", detail: "Off white / Signature mark", price: "$48", image: media.collection },
  { id: "oversized", name: "Oversized Fit", detail: "Black / Heavyweight cotton", price: "$52", image: media.sculpt },
  { id: "metallic-dress", name: "Metallic Dress", detail: "Teal / Limited edition", price: "$128", image: media.dress },
  { id: "sculpt", name: "Sculpt Collection", detail: "Black / Performance stretch", price: "$98", image: media.sculpt },
];

export default function Home() {
  return (
    <main>
      <section className="bg-[#0b1112] px-5 py-8 text-white md:px-8 md:py-12">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#111a1b] lg:grid-cols-[1fr_0.85fr]">
          <div className="flex flex-col justify-between p-8 md:p-14">
            <div><p className="mb-8 text-[11px] font-bold uppercase tracking-[0.3em] text-[#57d4d0]">Bubona / Studio 01</p><h1 className="max-w-xl text-6xl font-semibold leading-[.9] tracking-[-.07em] md:text-8xl">Built <span className="font-serif font-normal italic text-[#57d4d0]">different.</span></h1><p className="mt-8 max-w-md text-base leading-7 text-white/60">Small-batch pieces for a life in motion. A considered wardrobe with a signature mark.</p></div>
            <div className="mt-14 flex flex-wrap gap-3"><Link href="/shop" className="rounded-full bg-[#57d4d0] px-6 py-3 text-sm font-semibold text-[#0b1112] transition hover:bg-white">Shop the collection <span aria-hidden="true">↗</span></Link><Link href="/lookbook" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:border-white/50">Explore the lookbook</Link></div>
          </div>
          <div className="relative min-h-[480px] overflow-hidden bg-[#08717b]"><video className="absolute inset-0 size-full object-cover object-top opacity-90" autoPlay muted loop playsInline preload="none" poster={media.dress} aria-label="Bubona signature teal collection video"><source src={media.video} type="video/mp4" /></video><div className="absolute inset-0 bg-gradient-to-t from-[#0b1112]/70 via-transparent to-transparent" /><div className="absolute bottom-7 left-7 right-7 flex items-end justify-between text-xs uppercase tracking-[0.2em]"><span>Signature dress<br /><span className="text-white/60">Teal / 01 of 50</span></span><span className="rounded-full border border-white/30 px-3 py-2">Limited</span></div></div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#57d4d0] px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-[#0b1112]">Solana Pay accepted · Worldwide shipping · Small-batch releases</section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"><div className="mb-10 flex items-end justify-between gap-4"><div><p className="text-[11px] font-bold uppercase tracking-[0.24em] text-teal-700">The current edit / 01</p><h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">New arrivals</h2></div><Link href="/shop" className="text-sm font-semibold underline underline-offset-4">View all ↗</Link></div><div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-6">{featured.map((item) => <Link key={item.id} href={`/product/${item.id}`} className="group"><div className="relative aspect-[3/4] overflow-hidden rounded-[1.25rem] bg-slate-100"><Image src={item.image} alt={item.name} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" /><span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest">New</span></div><h3 className="mt-4 text-sm font-semibold">{item.name}</h3><p className="mt-1 text-xs text-slate-500">{item.detail}</p><p className="mt-2 text-sm font-medium">{item.price}</p></Link>)}</div></section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 pb-20 md:grid-cols-2 md:px-8 md:pb-28"><div className="relative min-h-[420px] overflow-hidden rounded-[1.5rem] bg-slate-900"><Image src={media.sculpt} alt="Bubona performance collection in a gym" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-80" /><div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent p-7 text-white"><p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#57d4d0]">Designed to move</p><h2 className="mt-2 text-3xl font-semibold">The Sculpt Series</h2><Link href="/shop" className="mt-5 text-sm font-semibold underline underline-offset-4">Discover the fit ↗</Link></div></div><div className="flex min-h-[420px] flex-col justify-between rounded-[1.5rem] bg-[#e8f4f2] p-8 md:p-10"><div><p className="text-[10px] font-bold uppercase tracking-[0.24em] text-teal-700">The Bubona standard</p><h2 className="mt-5 max-w-md text-4xl font-semibold leading-none tracking-[-0.05em]">Good design is felt before it&apos;s seen.</h2></div><p className="max-w-sm text-sm leading-6 text-slate-600">Responsible materials, deliberate silhouettes, and details that reward a closer look. Every release is made in small quantities and built to last.</p></div></section>

      <section className="border-y border-black/10 bg-white px-5 py-20 text-center md:py-24"><p className="text-[11px] font-bold uppercase tracking-[0.24em] text-teal-700">Stay in the loop</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Drop alerts, not noise.</h2><p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">Be first to know about new pieces, limited colorways, and community releases.</p><div className="mx-auto mt-7 max-w-md"><EmailCapture /></div></section>
    </main>
  );
}
