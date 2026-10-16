"use client";

import { useState } from "react";

type Item = { name: string; cost: number; price: number; stock: number };

const initial: Item[] = [
  { name: "Classic Tee", cost: 12, price: 48, stock: 50 },
  { name: "Oversized Fit", cost: 14, price: 52, stock: 40 },
  { name: "Metallic Dress", cost: 38, price: 128, stock: 20 },
  { name: "Sculpt Set", cost: 28, price: 98, stock: 30 },
];

export default function Ops() {
  const [items, setItems] = useState<Item[]>(initial);

  const update = (i: number, field: keyof Item, value: string) => {
    const next = [...items];
    next[i] = { ...next[i], [field]: field === "name" ? value : Number(value) || 0 };
    setItems(next);
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Inventory & Margins</h1>
      <p className="text-slate-500 text-sm mb-8">Simple internal tracker. Data stays in your browser for now.</p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-2 text-left">Product</th>
              <th className="p-2">Cost</th>
              <th className="p-2">Price</th>
              <th className="p-2">Stock</th>
              <th className="p-2">Margin %</th>
              <th className="p-2">Profit / unit</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => {
              const margin = item.price ? ((item.price - item.cost) / item.price) * 100 : 0;
              const profit = item.price - item.cost;
              return (
                <tr key={i} className="border-t">
                  <td className="p-2"><input className="border rounded px-2 py-1 w-full" value={item.name} onChange={(e) => update(i, "name", e.target.value)} /></td>
                  <td className="p-2"><input type="number" className="border rounded px-2 py-1 w-20" value={item.cost} onChange={(e) => update(i, "cost", e.target.value)} /></td>
                  <td className="p-2"><input type="number" className="border rounded px-2 py-1 w-20" value={item.price} onChange={(e) => update(i, "price", e.target.value)} /></td>
                  <td className="p-2"><input type="number" className="border rounded px-2 py-1 w-20" value={item.stock} onChange={(e) => update(i, "stock", e.target.value)} /></td>
                  <td className="p-2 text-center font-medium">{margin.toFixed(0)}%</td>
                  <td className="p-2 text-center">${profit.toFixed(0)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-xs text-slate-400">This is a browser-only tool for early planning. Export to spreadsheet when ready for production inventory.</p>
    </main>
  );
}