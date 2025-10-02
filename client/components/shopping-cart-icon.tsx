"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function ShoppingCartIcon() {
  return (
    <Link href="/cart" className="relative inline-block">
      <ShoppingCart className="w-4 h-4 text-gray-300" />
      <span className="absolute -top-2 -right-2 bg-white text-zinc-950 text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
        0
      </span>
    </Link>
  );
}
