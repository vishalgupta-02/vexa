"use client";

import useCartStore from "@/store/cartStore";
import { ProductType } from "@/types/types";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

export default function ProductInteraction({
  product,
  selectedSize,
  selectedColor,
}: {
  product: ProductType;
  selectedSize: string;
  selectedColor: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [quantity, setQuantity] = React.useState(1);

  const { addToCart } = useCartStore();

  const handleTypeChange = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleQuantityChange = (type: "increment" | "decrement") => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else {
      setQuantity((prev) => Math.max(prev - 1, 1));
    }
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity, selectedSize, selectedColor });
    toast.success("Item added to cart!");
  };

  return (
    <div className="flex flex-col gap-4 mt-4">
      {/* Size Selector */}
      <div className="flex flex-col gap-2 text-xs">
        <span className="text-gray-500">Size</span>
        <div className="flex items-center gap-2">
          {product.sizes.map((size) => (
            <div
              className={`cursor-pointer border-1 ${
                selectedSize === size ? "border-gray-600" : "border-gray-300"
              }`}
              key={size}
              onClick={() => handleTypeChange("size", size)}
            >
              <div
                className={`w-6 h-6 text-center flex items-center justify-center ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {size.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Color Selector */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Color</span>
        <div className="flex items-center gap-2">
          {product.colors.map((color) => (
            <div
              className={`cursor-pointer border-1 ${
                selectedColor === color ? "border-gray-800" : "border-white"
              }`}
              key={color}
              onClick={() => handleTypeChange("color", color)}
            >
              <div className={`w-6 h-6`} style={{ backgroundColor: color }} />
            </div>
          ))}
        </div>
      </div>
      {/* Quantity Selector */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Quantity</span>
        <div className="flex items-center gap-3">
          <button
            className="cursor-pointer border-1 border-gray-800 p-1"
            onClick={() => handleQuantityChange("decrement")}
          >
            <Minus className="h-4 w-4 text-gray-200" />
          </button>
          <span>{quantity}</span>
          <button
            className="cursor-pointer border-1 border-gray-800 p-1"
            onClick={() => handleQuantityChange("increment")}
          >
            <Plus className="h-4 w-4 text-gray-200" />
          </button>
        </div>
      </div>
      {/* Buttons */}
      <button
        onClick={handleAddToCart}
        className="w-full bg-zinc-950 text-white p-2 rounded-lg shadow-lg cursor-pointer flex items-center justify-center hover:bg-white hover:text-black hover:ring hover:ring-white transition-colors"
      >
        <Plus className="inline-block mr-2 w-5 h-5" />
        Add to Cart
      </button>
      <button className="w-full bg-gray-200 text-black p-2 rounded-lg shadow-lg cursor-pointer flex items-center justify-center hover:bg-black/75 hover:text-white hover:ring hover:ring-white transition-colors">
        <ShoppingCart className="inline-block mr-2 w-5 h-5" />
        Buy This Item
      </button>
    </div>
  );
}
