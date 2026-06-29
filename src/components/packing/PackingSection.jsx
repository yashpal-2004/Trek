import { useState } from "react";
import { motion } from "framer-motion";
import { getIcon } from "../../utils/icons";
import { packing } from "../../data/packing";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { STORAGE_KEYS } from "../../data/trip";
import Container from "../layout/Container";
import { CheckCircle2, Circle, Package } from "lucide-react";

export default function PackingSection() {
  const [checked, setChecked] = useLocalStorage(STORAGE_KEYS.packingChecklist, {});
  const allItems = packing.flatMap((cat) => cat.items);
  const checkedCount = allItems.filter((item) => checked[item.id]).length;
  const totalCount = allItems.length;
  const pct = totalCount > 0 ? Math.round((checkedCount / totalCount) * 100) : 0;
  const isComplete = checkedCount === totalCount;

  const toggle = (id) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const toggleCategory = (category) => {
    const catItems = category.items;
    const allChecked = catItems.every((item) => checked[item.id]);
    const updates = {};
    catItems.forEach((item) => { updates[item.id] = !allChecked; });
    setChecked((prev) => ({ ...prev, ...updates }));
  };

  return (
    <section id="packing" className="py-10 scroll-mt-20">
      <Container>
        {/* Header + Progress */}
        <div className="mb-8">
          <p className="text-[9px] font-black font-mono uppercase tracking-widest text-slate-400">Prepare</p>
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4" style={{ fontFamily: "'Anton', sans-serif" }}>
            Packing Checklist
          </h2>

          {/* Big progress block */}
          <div className="bg-black text-white rounded-[24px] p-6 flex items-center gap-6">
            <div className="relative w-16 h-16 shrink-0">
              <svg viewBox="0 0 36 36" className="w-16 h-16 -rotate-90">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="white" strokeOpacity="0.12" strokeWidth="3" />
                <circle
                  cx="18" cy="18" r="15.9" fill="none" stroke="white" strokeWidth="3"
                  strokeDasharray={`${pct} ${100 - pct}`}
                  strokeLinecap="round"
                  className="transition-all duration-700"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-black">{pct}%</span>
            </div>
            <div className="flex-1">
              <p className="font-extrabold text-xl">{checkedCount} <span className="text-white/40 font-medium text-base">/ {totalCount}</span></p>
              <p className="text-white/50 text-xs mt-0.5">items packed</p>
              {isComplete && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-emerald-400 text-xs font-bold mt-1">
                  All packed! You're ready for the expedition.
                </motion.p>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {packing.map((category) => {
            const Icon = getIcon(category.icon, Package);
            const catChecked = category.items.filter((i) => checked[i.id]).length;
            const catPct = Math.round((catChecked / category.items.length) * 100);

            return (
              <div key={category.category} className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[24px] p-5 hover:border-black/20 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-black/5 flex items-center justify-center">
                      <Icon size={14} className="text-black/60" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-xs uppercase tracking-tight">{category.category}</h3>
                      <p className="text-[10px] text-slate-400">{catChecked}/{category.items.length} packed</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleCategory(category)}
                    className="text-[9px] font-black font-mono uppercase text-slate-400 hover:text-black transition-colors"
                  >
                    {catChecked === category.items.length ? "Uncheck All" : "Check All"}
                  </button>
                </div>

                {/* Mini progress bar */}
                <div className="h-1 bg-black/5 rounded-full mb-4 overflow-hidden">
                  <div
                    className="h-full bg-black rounded-full transition-all duration-500"
                    style={{ width: `${catPct}%` }}
                  />
                </div>

                <ul className="space-y-2">
                  {category.items.map((item) => {
                    const done = !!checked[item.id];
                    return (
                      <li key={item.id}>
                        <label className="flex items-center gap-2.5 cursor-pointer group">
                          <span className="shrink-0">
                            {done
                              ? <CheckCircle2 size={16} className="text-emerald-500" />
                              : <Circle size={16} className="text-slate-300 group-hover:text-slate-400 transition-colors" />
                            }
                          </span>
                          <input type="checkbox" checked={done} onChange={() => toggle(item.id)} className="sr-only" />
                          <span className={`text-xs font-medium flex-1 ${done ? "line-through text-slate-400" : "text-slate-700"}`}>
                            {item.name}
                          </span>
                          {item.essential && (
                            <span className="text-[8px] font-black font-mono uppercase bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded shrink-0">
                              Essential
                            </span>
                          )}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
