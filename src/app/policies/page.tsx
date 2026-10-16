export default function Policies() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Shipping & Returns</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Shipping</h2>
        <ul className="space-y-2 text-slate-600">
          <li>• Orders ship within 3–5 business days after payment confirmation.</li>
          <li>• Standard shipping: 5–10 business days (US & most international).</li>
          <li>• Tracking number sent by email once shipped.</li>
          <li>• Free shipping on orders over $100.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Returns</h2>
        <ul className="space-y-2 text-slate-600">
          <li>• 14-day return window from delivery date.</li>
          <li>• Items must be unworn, unwashed, with tags attached.</li>
          <li>• Buyer pays return shipping unless item is defective.</li>
          <li>• Refunds issued to original payment method within 5–7 business days after inspection.</li>
          <li>• Final sale items (marked as such) cannot be returned.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Payments</h2>
        <p className="text-slate-600">
          We accept credit/debit cards via Shopify and USDC via Solana Pay. Token holders may qualify for discounts (coming soon).
        </p>
      </section>
    </main>
  );
}