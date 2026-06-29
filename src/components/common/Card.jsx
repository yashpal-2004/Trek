import { motion } from "framer-motion";
import { cn } from "../../utils/helpers";

export default function Card({ children, className, hover = true, onClick, ...props }) {
  const Component = hover ? motion.div : "div";
  const motionProps = hover
    ? {
        whileHover: { y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.08)" },
        transition: { duration: 0.2 },
      }
    : {};

  return (
    <Component
      className={cn(
        "bg-card rounded-[18px] border border-border p-6 shadow-sm",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  );
}
