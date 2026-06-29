import { Search, X } from "lucide-react";
import { cn } from "../../utils/helpers";

export default function SearchBar({ value, onChange, placeholder = "Search...", className }) {
  return (
    <div className={cn("relative", className)}>
      <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-11 pr-10 py-3 rounded-[12px] border border-border bg-white text-text placeholder:text-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
        aria-label={placeholder}
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 text-secondary"
          aria-label="Clear search"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
