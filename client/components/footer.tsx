import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0 bg-zinc-700 p-8 rounded-lg">
      <div className="flex flex-col items-center md:items-start gap-2">
        <Link href="/" className="flex items-center">
          {/* <Image src="/logo.png" alt="Logo" width={36} height={36} /> */}
          <p className="hidden md:block text-3xl font-medium tracking-wider">
            Vexa
          </p>
        </Link>
        <p className="text-md text-zinc-500">&copy; 2023 Vexa.</p>
        <p className="text-md text-zinc-500">All rights reserved.</p>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-md text-amber-100">Links</p>
        <Link href="/" className="hover:text-white">
          Home
        </Link>
        <Link href="/contact" className="hover:text-white">
          Contact
        </Link>
        <Link href="/terms" className="hover:text-white">
          Terms of Service
        </Link>
        <Link href="/privacy" className="hover:text-white">
          Privacy Policy
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-md text-amber-100">Products</p>
        <Link href="/" className="hover:text-white">
          All Products
        </Link>
        <Link href="/contact" className="hover:text-white">
          New Arrivals
        </Link>
        <Link href="/terms" className="hover:text-white">
          Best Sellers
        </Link>
        <Link href="/privacy" className="hover:text-white">
          Sale
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-md text-amber-100">Company</p>
        <Link href="/about" className="hover:text-white">
          About
        </Link>
        <Link href="/contact" className="hover:text-white">
          Contact
        </Link>
        <Link href="/blogs" className="hover:text-white">
          Blog
        </Link>
        <Link href="/affiliate" className="hover:text-white">
          Affiliate Program
        </Link>
      </div>
    </div>
  );
}
