import { cn } from "../../utils/helpers";

export function StatCard({ icon: Icon, label, value, description, prefix, suffix, className }) {
  return (
    <div
      className={cn(
        "group bg-card rounded-[18px] border border-border p-6 shadow-sm",
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/20",
        className
      )}
    >
      {Icon && (
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
          <Icon size={20} className="text-primary" />
        </div>
      )}
      <p className="text-sm text-secondary font-medium">{label}</p>
      <p className="text-2xl font-bold text-text mt-1">
        {prefix}{value}{suffix}
      </p>
      {description && <p className="text-xs text-secondary mt-2">{description}</p>}
    </div>
  );
}

export default StatCard;
