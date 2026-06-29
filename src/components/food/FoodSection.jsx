import { getIcon } from "../../utils/icons";
import { Utensils, Leaf, Zap } from "lucide-react";
import { foodGuide } from "../../data/food";
import { formatCurrency } from "../../utils/currency";
import Container from "../layout/Container";

export default function FoodSection() {
  return (
    <section id="food" className="py-10 scroll-mt-20">
      <Container>
        {/* Header */}
        <div className="mb-8">
          <p className="text-[9px] font-black font-mono uppercase tracking-widest text-slate-400">Dining Guide</p>
          <h2 className="text-2xl font-black uppercase tracking-tight" style={{ fontFamily: "'Anton', sans-serif" }}>
            Food Guide
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Daily estimate: <span className="font-bold text-black">{formatCurrency(foodGuide.dailyEstimate.min)}–{formatCurrency(foodGuide.dailyEstimate.max)}</span> per person.
          </p>
        </div>

        {/* Meal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {foodGuide.meals.map((meal) => {
            const Icon = getIcon(meal.icon, Utensils);
            return (
              <div key={meal.type} className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[24px] p-6 hover:border-black/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-8 rounded-xl bg-black/5 flex items-center justify-center">
                    <Icon size={15} className="text-black/60" />
                  </div>
                  <h3 className="font-extrabold text-sm uppercase tracking-tight">{meal.type}</h3>
                </div>
                <ul className="space-y-3">
                  {meal.items.map((item, i) => (
                    <li key={i} className="flex justify-between items-start pb-3 border-b border-black/5 last:border-0 last:pb-0">
                      <div>
                        <p className="font-bold text-sm">{item.dish}</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">{item.place}</p>
                      </div>
                      <span className="font-black text-sm shrink-0 ml-4">{formatCurrency(item.cost)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Local Specialties + Protein side by side */}
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[24px] p-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center">
                <Leaf size={14} className="text-amber-600" />
              </div>
              <h3 className="font-extrabold text-sm uppercase tracking-tight">Local Specialties</h3>
            </div>
            <ul className="space-y-4">
              {foodGuide.localSpecialties.map((s, i) => (
                <li key={i} className="pb-4 border-b border-black/5 last:border-0 last:pb-0">
                  <p className="font-bold text-sm">{s.name}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5 mb-1.5">{s.description}</p>
                  <span className="text-[9px] font-black font-mono uppercase bg-amber-50 text-amber-700 px-2 py-0.5 rounded-md">{s.cost}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[24px] p-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center">
                <Zap size={14} className="text-blue-600" />
              </div>
              <h3 className="font-extrabold text-sm uppercase tracking-tight">Protein Sources</h3>
            </div>
            <ul className="space-y-2 mb-6">
              {foodGuide.proteinSources.map((p, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />{p}
                </li>
              ))}
            </ul>
            <div className="border-t border-black/5 pt-5">
              <p className="text-[9px] font-black font-mono uppercase tracking-widest text-slate-400 mb-3">Pro Tips</p>
              <ul className="space-y-2">
                {foodGuide.tips.map((t, i) => (
                  <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                    <span className="font-black text-black/40 shrink-0">{String(i + 1).padStart(2, "0")}.</span>{t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
