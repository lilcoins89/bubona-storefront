"use client";

import { notFound } from "next/navigation";
import { useState, useEffect } from "react";

const products: Record<string, any> = {
  "classic-tee": { name: "Classic Tee", price: 48, colors: ["Off White", "Black", "Sand"], sizes: ["S", "M", "L", "XL"], desc: "Signature B logo on premium cotton. Built Different. Bigger dreams. Higher standards.", image: "/products/classic-tee.jpg" },
  "oversized": { name: "Oversized Fit", price: 52, colors: ["Black", "Charcoal"], sizes: ["S", "M", "L", "XL"], desc: "Relaxed oversized fit. Large back print.", image: "/products/oversized.jpg" },
  "metallic-dress": { name: "Metallic Dress", price: 128, colors: ["Teal"], sizes: ["XS", "S", "M", "L"], desc: "Shiny metallic teal fabric with raised glass-like logo. Statement piece.", image: "/products/metallic-dress.jpg" },
  "sculpt": { name: "Sculpt Collection", price: 98, colors: ["Black", "Teal"], sizes: ["S", "M", "L"], desc: "Modest activewear. Embroidered logo, functional pockets, premium stretch.", image: "/products/sculpt.jpg" },
};

export default function Product({ params }: { params: { id: string } }) {
  const product = products[params.id];
  if (!product) notFound();

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [cartCount, setCartCount] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("bubona-cart") || "[]");
    setCartCount(cart.length);
  }, []);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("bubona-cart") || "[]");
    cart.push({ id: params.id, name: product.name, price: product.price, color: selectedColor, size: selectedSize });
    localStorage.setItem("bubona-cart", JSON.stringify(cart));
    setCartCount(cart.length);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="aspect-square bg-gradient-to-br from-teal-100 to-cyan-200 rounded-2xl flex items-center justify-center overflow-hidden">
          <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">Product Image</div>
        </div>
        <div>
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-3xl font-semibold mt-4">${product.price}</p>
          <p className="mt-6 text-slate-600">{product.desc}</p>

          <div className="mt-6">
            <p className="font-medium mb-2">Color</p>
            <div className="flex gap-2">
              {product.colors.map((c: string) => (
                <button
                  key={c}
                  onClick={() => setSelectedColor(c)}
                  className={`px-4 py-2 border rounded-full text-sm ${selectedColor === c ? "bg-teal-600 text-white border-teal-600" : "hover:bg-teal-50"}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <p className="font-medium mb-2">Size</p>
            <div className="flex gap-2">
              {product.sizes.map((s: string) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`w-12 h-12 border rounded-lg text-sm font-medium ${selectedSize === s ? "bg-slate-900 text-white border-slate-900" : "hover:bg-slate-100"}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={addToCart}
            className="mt-8 w-full bg-slate-900 text-white py-4 rounded-lg font-medium hover:bg-slate-800 disabled:opacity-70"
          >
            {added ? "Added to Cart!" : `Add to Cart — $${product.price}`}
          </button>
          <p className="text-xs text-slate-400 mt-3 text-center">
            Cart: {cartCount} item{cartCount !== 1 ? "s" : ""} • Checkout via Shopify + Solana Pay
          </p>
        </div>
      </div>
    </main>
  );
}