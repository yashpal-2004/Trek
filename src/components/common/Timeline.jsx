import { motion } from "framer-motion";
import { getIcon } from "../../utils/icons";
import { useIntersection } from "../../hooks/useIntersection";
import { cn } from "../../utils/helpers";
import { ArrowRight, MapPin, Compass, Train, Waves, Mountain, Footprints, Calendar, Clock } from "lucide-react";

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
      className={cn("w-full px-4 py-8 select-none", className)}
    >
      <div className="flex flex-wrap justify-center items-center gap-y-8 md:gap-y-12 gap-x-4 w-full">
        {items.map((item, index) => {
          const NodeIcon = getIcon(item.icon, MapPin);
          const isLast = index === items.length - 1;
          
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
                className="w-full max-w-md md:w-64 rounded-[24px] border border-black/10 p-5 shadow-sm md:p-6 bg-white/70 backdrop-blur-md hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_10px_35px_rgba(0,0,0,0.02)] transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[9px] font-bold font-mono tracking-wider bg-black/5 border border-black/5 px-2 py-0.5 rounded-md uppercase text-slate-500">
                        Step {index + 1}
                      </span>
                      {item.day && (
                        <span className="text-[10px] font-extrabold uppercase font-mono tracking-wider text-slate-400">
                          Day {item.day}
                        </span>
                      )}
                    </div>
                    <h3 className="font-extrabold text-base text-black/90 leading-snug md:h-12 md:whitespace-normal md:line-clamp-2">
                      {item.location}
                    </h3>
                  </div>

                  <div className="w-9 h-9 rounded-xl bg-black/5 flex items-center justify-center shrink-0 text-black/70">
                    <NodeIcon size={18} />
                  </div>
                </div>

                {/* Subtext info pills */}
                <div className="flex flex-col gap-2 mt-4 pt-3 border-t border-black/5">
                  {item.date && (
                    <div className="text-[10px] font-black font-mono tracking-wide text-black/80 flex items-center gap-1">
                      <Calendar size={12} className="text-slate-400 shrink-0 mr-0.5" />
                      <span>{item.date}</span>
                    </div>
                  )}
                  {(item.arrTime || item.depTime) && (
                    <div className="text-[10px] font-bold font-mono text-slate-500 space-y-0.5">
                      {item.arrTime && (
                        <div className="flex items-center gap-1">
                          <Clock size={11} className="text-slate-400 shrink-0" />
                          <span>Arr: {item.arrTime}</span>
                        </div>
                      )}
                      {item.depTime && (
                        <div className="flex items-center gap-1">
                          <Clock size={11} className="text-slate-400 shrink-0" />
                          <span>Dep: {item.depTime}</span>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-1.5 mt-0.5">
                    <span className="text-[9px] font-extrabold font-mono tracking-wide bg-white border border-black/5 px-2 py-0.5 rounded-md text-slate-500 flex items-center gap-1">
                      <Mountain size={10} className="text-slate-400" />
                      {item.altitude}
                    </span>
                    {item.distance !== "0 km" && (
                      <span className="text-[9px] font-extrabold font-mono tracking-wide bg-white border border-black/5 px-2 py-0.5 rounded-md text-slate-500 flex items-center gap-1">
                        <Compass size={10} className="text-slate-400" />
                        {item.distance}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Dotted Connection with Arrow (Vertical on mobile, Horizontal on desktop) */}
              {!isLast && nextItem && (
                <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-20 h-12 md:h-auto my-2 md:my-0 select-none relative shrink-0">
                  {/* Dotted Line */}
                  <div className="w-0.5 h-12 md:w-20 md:h-0.5 border-dashed border-l-2 md:border-l-0 md:border-t-2 border-black/15" />
                  
                  {/* Transport pill badge */}
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: index * 0.03 + 0.05 }}
                    className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 flex items-center gap-1 bg-black shadow-sm px-2.5 py-1 rounded-full text-[9px] font-bold font-mono text-white whitespace-nowrap"
                  >
                    <NextTransIcon size={10} className="shrink-0 text-white" />
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
