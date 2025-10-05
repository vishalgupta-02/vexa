import ProductInteraction from "@/components/product-interaction";
import { ProductType } from "@/types/types";
import Image from "next/image";

// Temporary data
const product: ProductType = {
  id: 1,
  name: "Adidas CoreFit T-Shirt",
  shortDescription:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  description:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  price: 39.9,
  sizes: ["s", "m", "l", "xl"],
  colors: ["gray", "purple", "green"],
  images: {
    gray: "/products/1g.png",
    purple: "/products/1p.png",
    green: "/products/1gr.png",
  },
};

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}) => {
  //TODO: Fetch product data based on id from params if needed
  // Temporary using static product data
  return {
    title: product.name,
    description: product.shortDescription,
  };
};

export default async function ProductPage({
  searchParams,
  params,
}: {
  searchParams: Promise<{ color: string; size: string }>;
  params: Promise<{ id: string }>;
}) {
  const { size, color } = await searchParams;

  const selectedSize = (size || product.sizes[0]) as string;
  const selectedColor = (color || product.colors[0]) as string;

  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
      {/* Image Details */}
      <div className="w-full lg:w-5/12 relative aspect-[2/3]">
        <Image
          src={product.images[selectedColor]}
          alt={product.name}
          fill
          className="object-contain rounded-md"
        />
      </div>
      {/* Product Details */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-3xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.shortDescription}</p>
        <h2 className="text-3xl font-normal">${product.price.toFixed(2)}</h2>
        {/* Interactions */}
        <ProductInteraction
          product={product}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
        />
        {/* Card Info */}
        <div className="flex items-center gap-2 mt-4">
          <Image
            src="/klarna.png"
            alt="Card Payment"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/cards.png"
            alt="Card Payment"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/stripe.png"
            alt="Card Payment"
            width={50}
            height={25}
            className="rounded-md"
          />
        </div>
        <p className="text-gray-500 text-xs">
          All transactions are secure and encrypted. We don't store any credit
          card information.
        </p>
      </div>
    </div>
  );
}
