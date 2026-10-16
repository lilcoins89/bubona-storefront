"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type CartItem = {
  id: string;
  name: string;
  price: number;
  color: string;
  size: string;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bubona-cart") || "[]");
    setCart(stored);
    setLoaded(true);
  }, []);

  const removeItem = (index: number) => {
    const next = cart.filter((_, i) => i !== index);
    setCart(next);
    localStorage.setItem("bubona-cart", JSON.stringify(next));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("bubona-cart");
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (!loaded) {
    return <main className="max-w-3xl mx-auto px-4 py-16 text-center">Loading cart…</main>;
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl text-slate-500 mb-6">Your cart is empty</p>
          <Link href="/shop" className="bg-slate-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-800">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div key={index} className="flex items-center justify-between border rounded-xl p-4">
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-sm text-slate-500">
                    {item.color} • Size {item.size}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-semibold">${item.price}</span>
                  <button
                    onClick={() => removeItem(index)}
                    className="text-sm text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t pt-6">
            <div className="flex justify-between text-xl font-bold mb-6">
              <span>Total</span>
              <span>${total}</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 bg-slate-900 text-white py-4 rounded-lg font-medium hover:bg-slate-800">
                Checkout with Solana Pay
              </button>
              <button
                onClick={clearCart}
                className="px-6 py-4 border rounded-lg text-sm hover:bg-slate-50"
              >
                Clear Cart
              </button>
            </div>
            <p className="text-xs text-slate-400 mt-4 text-center">
              Checkout will connect to Shopify + Solana Pay (USDC) once products are live in your store.
            </p>
          </div>
        </>
      )}
    </main>
  );
}