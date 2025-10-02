import ProductList from "@/components/product-list";
import Image from "next/image";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) {
  const category = (await searchParams).category;
  return (
    <div className="">
      <div className="relative aspect-[3/1] my-12">
        <Image src="/featured.png" alt="Featured" fill />
      </div>
      <ProductList category={category} params="homepage" />
    </div>
  );
}
