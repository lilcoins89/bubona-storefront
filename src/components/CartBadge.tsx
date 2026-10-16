"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CartBadge() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const update = () => {
      const cart = JSON.parse(localStorage.getItem("bubona-cart") || "[]");
      setCount(cart.length);
    };
    update();
    window.addEventListener("storage", update);
    const interval = setInterval(update, 1000);
    return () => {
      window.removeEventListener("storage", update);
      clearInterval(interval);
    };
  }, []);

  return (
    <Link href="/cart" className="relative hover:text-teal-600">
      Cart
      {count > 0 && (
        <span className="absolute -top-2 -right-3 bg-teal-600 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {count}
        </span>
      )}
    </Link>
  );
}