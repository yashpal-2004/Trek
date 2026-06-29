import { motion } from "framer-motion";
import { useIntersection } from "../../hooks/useIntersection";
import { cn } from "../../utils/helpers";

export default function SectionTitle({ label, title, description, action, className, id }) {
  const { ref, inView } = useIntersection();

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={cn("mb-12", className)}
    >
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          {label && (
            <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">{label}</p>
          )}
          <h2 className="text-3xl md:text-4xl font-bold text-text tracking-tight">{title}</h2>
          {description && <p className="mt-3 text-secondary text-base max-w-2xl">{description}</p>}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
      <div className="mt-6 h-px bg-gradient-to-r from-border via-border to-transparent" />
    </motion.div>
  );
}
