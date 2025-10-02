import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="hidden md:flex items-center gap-2 rounded-md ring-1 ring-gray-200 px-2 py-1 shadow-md shadow-gray-200">
      <Search className="w-5 h-5 text-gray-500" />

      <input
        id="search"
        type="text"
        placeholder="Search products..."
        className="text-sm outline-0 p-1"
      />
    </div>
  );
}
