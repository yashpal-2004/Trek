import { cn } from "../../utils/helpers";

const variants = {
  primary: "bg-primary text-white hover:bg-blue-700 shadow-sm hover:shadow-md",
  secondary: "bg-white text-text border border-border hover:bg-gray-50 shadow-sm",
  outline: "border-2 border-primary text-primary hover:bg-primary/5",
  ghost: "text-secondary hover:text-primary hover:bg-primary/5",
  danger: "bg-danger text-white hover:bg-red-600",
  accent: "bg-accent text-white hover:bg-emerald-600",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm gap-1.5",
  md: "px-5 py-2.5 text-[15px] gap-2",
  lg: "px-7 py-3.5 text-base gap-2.5",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconRight: IconRight,
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium rounded-[14px] transition-all duration-200",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "hover:-translate-y-0.5 active:translate-y-0",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {Icon && <Icon size={size === "sm" ? 16 : 18} />}
      {children}
      {IconRight && <IconRight size={size === "sm" ? 16 : 18} />}
    </button>
  );
}
