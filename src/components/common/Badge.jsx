import { cn } from "../../utils/helpers";

const colors = {
  primary: "bg-primary/10 text-primary",
  accent: "bg-accent/10 text-accent",
  warning: "bg-warning/10 text-warning",
  danger: "bg-danger/10 text-danger",
  secondary: "bg-gray-100 text-secondary",
};

export default function Badge({ children, color = "primary", className }) {
  return (
    <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium", colors[color], className)}>
      {children}
    </span>
  );
}
