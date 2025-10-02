import Image from "next/image";
import Link from "next/link";
import SearchBar from "./search-bar";
import { Bell, Home, ShoppingCart } from "lucide-react";
import ShoppingCartIcon from "./shopping-cart-icon";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between p-4 border-b border-gray-200">
      <Link href="/" className="flex items-center">
        {/* <Image
          src="/logo.png"
          alt="Logo"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        /> */}
        <p className="hidden md:block text-3xl font-medium tracking-wider">
          Vexa
        </p>
      </Link>
      <div className="flex items-center gap-6">
        <SearchBar />
        <Link href="/">
          <Home className="w-4 h-4 text-gray-300" />
        </Link>
        <Bell className="w-4 h-4 text-gray-300" />
        <ShoppingCartIcon />
        <Link href="/login">Sign In</Link>
      </div>
    </nav>
  );
}
