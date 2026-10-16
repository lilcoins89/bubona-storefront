export default function Lookbook() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Lookbook</h1>
      <p className="text-slate-600 mb-10">Signature pieces. Cyan glass identity. Real product photos coming with samples.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { title: "Classic Tee", note: "Off-white with bold B mark" },
          { title: "Metallic Dress", note: "Shiny teal with raised glass logo" },
          { title: "Sculpt Collection", note: "Modest activewear in black & teal" },
          { title: "Oversized Back Print", note: "Large statement logo" },
        ].map((item) => (
          <div key={item.title} className="border rounded-2xl overflow-hidden">
            <div className="aspect-[4/5] bg-gradient-to-br from-teal-100 to-cyan-200 flex items-center justify-center">
              <span className="text-6xl font-black text-teal-600/30">B</span>
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-sm text-slate-500 mt-1">{item.note}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-10 text-sm text-slate-400 text-center">Lifestyle and on-body shots will replace placeholders once samples arrive.</p>
    </main>
  );
}