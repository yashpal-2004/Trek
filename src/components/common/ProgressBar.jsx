import { cn } from "../../utils/helpers";

export default function ProgressBar({ value, max = 100, label, showPercent = true, color = "primary", className }) {
  const percent = Math.min(100, Math.round((value / max) * 100));

  const colorMap = {
    primary: "bg-primary",
    accent: "bg-accent",
    warning: "bg-warning",
    danger: "bg-danger",
  };

  return (
    <div className={cn("w-full", className)}>
      {(label || showPercent) && (
        <div className="flex justify-between items-center mb-2">
          {label && <span className="text-sm font-medium text-text">{label}</span>}
          {showPercent && <span className="text-sm text-secondary">{percent}%</span>}
        </div>
      )}
      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={cn("h-full rounded-full transition-all duration-700 ease-out", colorMap[color])}
          style={{ width: `${percent}%` }}
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}
