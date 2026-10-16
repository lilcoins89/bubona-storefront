export default function Lookbook() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Lookbook</h1>
      <p className="text-slate-600 mb-10">Signature pieces. Cyan glass identity. Real product photos coming with samples.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { title: "Classic Tee", note: "Off-white with bold B mark", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17401996-909B-4465-8551-D7C2F654EAA0-KiLgR9LadJFw3sThwq61lq7VbfbozN.png" },
          { title: "Metallic Dress", note: "Shiny teal with raised glass logo", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0514-K1psSWjHGe0XqRXEt3bcSG6c7Cxt8f.jpeg" },
          { title: "Sculpt Collection", note: "Modest activewear in black & teal", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/33B6F54A-5201-41D1-9B97-A4327A7C019E-7u6DE7tHuuY2kgnZPqZixZrmPbdjKx.png" },
          { title: "Oversized Back Print", note: "Large statement logo", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3299E1E3-117F-48D7-84DD-3E5235D731A7-uQCKoy401VUPaERSJNOdiXK1rUEn7m.png" },
        ].map((item) => (
          <div key={item.title} className="border rounded-2xl overflow-hidden">
            <div className="aspect-[4/5] bg-slate-100 overflow-hidden">
              <img src={item.image} alt={item.title} className="size-full object-cover" />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-sm text-slate-500 mt-1">{item.note}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-10 text-sm text-slate-500 text-center">Built for movement. Designed with intention. Made in small batches.</p>
    </main>
  );
}
