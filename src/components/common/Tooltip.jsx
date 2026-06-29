import { cn } from "../../utils/helpers";

export default function Tooltip({ children, text, className }) {
  return (
    <span className={cn("relative group inline-flex", className)}>
      {children}
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-text rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
        {text}
      </span>
    </span>
  );
}
