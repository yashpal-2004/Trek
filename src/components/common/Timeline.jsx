import { motion } from "framer-motion";
import { getIcon } from "../../utils/icons";
import { useIntersection } from "../../hooks/useIntersection";
import { cn } from "../../utils/helpers";
import { ArrowDown, ArrowRight, MapPin, Compass, Train, Waves, Mountain, Footprints } from "lucide-react";

function getNodeStyle(location) {
  const loc = location.toLowerCase();
  if (loc.includes("hisar")) return "bg-blue-50/50 border-blue-200 text-blue-800 shadow-blue-50/20";
  if (loc.includes("haridwar") || loc.includes("rishikesh")) return "bg-orange-50/50 border-orange-200 text-orange-800 shadow-orange-50/20";
  if (loc.includes("rafting")) return "bg-sky-50/50 border-sky-200 text-sky-800 shadow-sky-50/20";
  if (loc.includes("rudranath") || loc.includes("tungnath") || loc.includes("chandrashila")) return "bg-emerald-50/50 border-emerald-200 text-emerald-800 shadow-emerald-50/20";
  return "bg-slate-50 border-slate-200 text-slate-800";
}

function getTransportIcon(mode) {
  const m = mode.toLowerCase();
  if (m.includes("train")) return Train;
  if (m.includes("bus") || m.includes("jeep")) return Compass;
  if (m.includes("raft")) return Waves;
  if (m.includes("trek") || m.includes("walk")) return Footprints;
  return ArrowRight;
}

export default function Timeline({ items, className }) {
  const { ref, inView } = useIntersection({ threshold: 0.05 });

  return (
    <div 
      ref={ref} 
      className={cn("w-full px-4 py-8", className)}
    >
      {/* 
        Grid / Wrap layout:
        Mobile: vertical column of cards and down arrows.
        Desktop: flex-wrap layout containing cards and right arrows, wrapping naturally without scrollbars.
      */}
      <div className="flex flex-wrap justify-center items-center gap-y-6 md:gap-y-10 gap-x-4 w-full">
        {items.map((item, index) => {
          const NodeIcon = getIcon(item.icon, MapPin);
          const isLast = index === items.length - 1;
          const nodeColorClass = getNodeStyle(item.location);
          
          const nextItem = !isLast ? items[index + 1] : null;
          const NextTransIcon = nextItem ? getTransportIcon(nextItem.transport) : ArrowRight;

          return (
            <div 
              key={item.id} 
              className="flex flex-col md:flex-row items-center w-full md:w-auto"
            >
              {/* Flowchart Node Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.03, duration: 0.4 }}
                className={cn(
                  "w-full max-w-md md:w-64 rounded-[22px] border p-5 shadow-sm md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md",
                  nodeColorClass
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] uppercase font-bold tracking-wider bg-white px-2 py-0.5 rounded-full border border-border shadow-sm">
                        Step {index + 1}
                      </span>
                      {item.day && (
                        <span className="text-xs font-semibold opacity-85">
                          Day {item.day}
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-base md:text-md text-text leading-snug truncate md:h-12 md:whitespace-normal md:line-clamp-2">
                      {item.location}
                    </h3>
                  </div>

                  <div className="w-9 h-9 rounded-xl bg-white border border-border flex items-center justify-center shrink-0 shadow-sm">
                    <NodeIcon size={18} className="text-primary" />
                  </div>
                </div>

                {/* Subtext info pills */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  <span className="text-[10px] bg-white/80 border border-border px-2 py-0.5 rounded-lg font-medium">
                    {item.altitude}
                  </span>
                  {item.distance !== "0 km" && (
                    <span className="text-[10px] bg-white/80 border border-border px-2 py-0.5 rounded-lg font-medium">
                      {item.distance}
                    </span>
                  )}
                </div>
              </motion.div>

              {/* Dotted Connection with Arrow (Vertical on mobile, Horizontal on desktop) */}
              {!isLast && nextItem && (
                <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-20 h-12 md:h-auto my-1 md:my-0 select-none relative shrink-0">
                  {/* Dotted Line */}
                  <div className="w-0.5 h-12 md:w-20 md:h-0.5 bg-gradient-to-b md:bg-gradient-to-r from-primary/30 to-primary/5 border-dashed border-l-2 md:border-l-0 md:border-t-2 border-primary/30" />
                  
                  {/* Transport pill badge */}
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: index * 0.03 + 0.05 }}
                    className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 flex items-center gap-1 bg-white border border-primary/20 shadow-sm px-2 py-1 rounded-full text-[9px] font-semibold text-primary z-10 whitespace-nowrap"
                  >
                    <NextTransIcon size={10} className="shrink-0 text-primary" />
                    <span>{nextItem.transport}</span>
                  </motion.div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
