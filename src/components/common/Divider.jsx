import { cn } from "../../utils/helpers";

export default function Divider({ className }) {
  return <hr className={cn("border-0 h-px bg-border", className)} />;
}
