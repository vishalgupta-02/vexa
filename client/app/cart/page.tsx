"use client";

import PaymentForm from "@/components/payment-form";
import ShippingForm from "@/components/shipping-form";
import { CartItemsType } from "@/types/types";
import { ArrowRight, Trash2Icon, X } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const steps = [
  {
    id: 1,
    title: "Shopping Cart",
  },
  {
    id: 2,
    title: "Shipping Information",
  },
  {
    id: 3,
    title: "Payment Details",
  },
];

// Temporary
const cartItems: CartItemsType = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
    quantity: 1,
    selectedSize: "m",
    selectedColor: "gray",
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
    quantity: 1,
    selectedSize: "s",
    selectedColor: "green",
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
    quantity: 1,
    selectedSize: "l",
    selectedColor: "black",
  },
];

export default function CartPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [shippingForm, setShippingForm] = React.useState(null);

  const activeStep = parseInt(searchParams.get("step") || "1");

  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-12">
      {/* Title */}
      <h1 className="text-3xl font-medium">Your Shopping Cart</h1>
      {/* Steps */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex items-center gap-2 border-b-2 pb-2 ${
              step.id === activeStep ? "border-gray-200" : "border-gray-950"
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full bg-white text-slate-950 flex items-center justify-center p-4 ${
                step.id === activeStep ? "font-medium" : "font-normal"
              }`}
            >
              {step.id}
            </div>
            <p
              className={`text-md font-medium ${
                step.id === activeStep ? "text-gray-50" : "text-gray-400"
              }`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>
      {/* Steps & Details */}
      <div className="w-full flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-7/12 shadow-md shadow-white border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          {activeStep === 1 ? (
            cartItems.length > 0 ? (
              <div className="flex flex-col gap-4">
                {cartItems.map((item) => (
                  // Single Item
                  <div
                    key={item.id}
                    className="flex justify-between items-center"
                  >
                    <div className="flex gap-8">
                      <div className="relative w-32 h-32 bg-gray-50 p-4 rounded-lg overflow-hidden">
                        <Image
                          src={item.images[item.selectedColor]}
                          alt={item.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      {/* Item Details */}
                      <div className="flex flex-col justify-between">
                        <div className="flex flex-col gap-1">
                          <p className="text-md font-medium">{item.name}</p>
                          <p className="text-sm text-gray-500">
                            Quantity: {item.quantity}
                          </p>
                          <p className="text-sm text-gray-500">
                            Size:{" "}
                            <span className="uppercase">
                              {item.selectedSize}
                            </span>
                          </p>
                          <p className="text-sm text-gray-500">
                            Color:{" "}
                            <span className="capitalize">
                              {item.selectedColor}
                            </span>
                          </p>
                        </div>
                        <p className="font-medium">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <button className="w-8 h-8 text-red-600 bg-red-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-200 transition-colors">
                      <Trash2Icon className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              "Your cart is empty"
            )
          ) : activeStep === 2 ? (
            <ShippingForm />
          ) : activeStep === 3 && shippingForm ? (
            <PaymentForm />
          ) : (
            <p className="text-md text-slate-500 flex items-center justify-center">
              <X className="mr-1 w-4 h-4 text-red-400" />
              Fill out the shipping form first to continue
            </p>
          )}
        </div>
        {/* Cart Summary */}
        <div className="w-full lg:w-5/12 shadow-md shadow-white border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8 h-max">
          <h2 className="font-semibold">Cart Details</h2>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between text-sm">
              <p className="text-gray-400">Subtotal</p>
              <p className="font-medium">
                $
                {cartItems
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-400">Discount(10%)</p>
              <p className="font-medium">
                $
                {(
                  cartItems.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  ) * 0.1
                ).toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-400">Shipping Fee</p>
              <p className="font-medium">$10.00</p>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between">
              <p className="text-gray-100 font-semibold">Total:</p>
              <p className="font-medium">
                $
                {cartItems
                  .reduce(
                    (acc, item) =>
                      acc +
                      item.price * item.quantity +
                      10 -
                      item.price * item.quantity * 0.1,
                    0
                  )
                  .toFixed(2)}
              </p>
            </div>
          </div>
          {activeStep === 1 && (
            <button
              onClick={() => router.push("/cart?step=2", { scroll: false })}
              className="w-full bg-gray-100 text-gray-800 p-2 rounded-lg cursor-pointer flex items-center justify-center hover:bg-white/75 hover:text-black transition-colors"
            >
              Continue
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
