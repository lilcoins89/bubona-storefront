export default function SizeGuide() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Size Guide</h1>
      <p className="text-slate-600 mb-8">All measurements in inches. Measure yourself and compare to the chart below.</p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 text-left">Size</th>
              <th className="p-3">Chest</th>
              <th className="p-3">Waist</th>
              <th className="p-3">Length</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["XS", "34-36", "28-30", "26"],
              ["S", "36-38", "30-32", "27"],
              ["M", "38-40", "32-34", "28"],
              ["L", "40-42", "34-36", "29"],
              ["XL", "42-44", "36-38", "30"],
            ].map((row) => (
              <tr key={row[0]} className="border-t">
                {row.map((cell) => (
                  <td key={cell} className="p-3 text-center">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 text-sm text-slate-500 space-y-2">
        <p>• Tees and tops: measured flat across chest.</p>
        <p>• Dresses: form-fitting; size down if between sizes.</p>
        <p>• Activewear: stretch fabric; true to size.</p>
        <p className="mt-4">Questions? Email hello@bubona.xyz</p>
      </div>
    </main>
  );
}