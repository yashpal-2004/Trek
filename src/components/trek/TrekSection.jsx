import { useState } from "react";
import { Mountain, Clock, TrendingUp, Droplets, Tent, Utensils, AlertTriangle, ExternalLink, CheckCircle2, Circle, Search } from "lucide-react";
import { treks, trekDifficulties } from "../../data/treks";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { STORAGE_KEYS } from "../../data/trip";
import { filterBySearch } from "../../utils/helpers";
import Container from "../layout/Container";

const diffStyle = {
  Easy:     { bg: "bg-emerald-100", text: "text-emerald-700" },
  Moderate: { bg: "bg-amber-100",   text: "text-amber-700"   },
  Hard:     { bg: "bg-red-100",     text: "text-red-600"     },
};

function TrekCard({ trek, isCompleted, onToggleComplete }) {
  const diff = diffStyle[trek.difficulty] || { bg: "bg-slate-100", text: "text-slate-600" };
  return (
    <div className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[24px] overflow-hidden hover:border-black/20 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col">
      <div className="relative h-44 select-none shrink-0">
        <img src={trek.image} alt={trek.name} loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
        <div className="absolute bottom-4 left-4 right-14">
          <h3 className="text-base font-black text-white uppercase leading-tight" style={{ fontFamily: "'Anton', sans-serif" }}>
            {trek.name}
          </h3>
        </div>
        <span className={`absolute top-4 left-4 text-[9px] font-black font-mono uppercase px-2 py-0.5 rounded-md ${diff.bg} ${diff.text}`}>
          {trek.difficulty}
        </span>
        <button
          onClick={() => onToggleComplete(trek.id)}
          className="absolute top-3 right-3 p-1.5 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-colors"
        >
          {isCompleted
            ? <CheckCircle2 size={18} className="text-emerald-400" />
            : <Circle size={18} className="text-white/70" />
          }
        </button>
      </div>

      <div className="p-5 flex flex-col flex-1 gap-4">
        <p className="text-xs text-slate-500 leading-relaxed">{trek.description}</p>

        <div className="grid grid-cols-2 gap-2">
          {[
            { icon: Mountain,   label: trek.distance },
            { icon: Clock,      label: trek.duration },
            { icon: TrendingUp, label: trek.elevation },
            { icon: Droplets,   label: trek.waterSources ? "Water available" : "Carry water" },
          ].map(({ icon: Icon, label }, i) => (
            <div key={i} className="flex items-center gap-1.5 text-[11px] font-medium text-slate-600 bg-black/[0.03] px-2.5 py-2 rounded-xl">
              <Icon size={12} className="text-slate-400 shrink-0" />{label}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {trek.camping && (
            <span className="inline-flex items-center gap-1 text-[9px] font-black font-mono uppercase bg-amber-100 text-amber-700 px-2 py-0.5 rounded-md">
              <Tent size={10} /> Camping
            </span>
          )}
          {trek.foodAvailable && (
            <span className="inline-flex items-center gap-1 text-[9px] font-black font-mono uppercase bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md">
              <Utensils size={10} /> {trek.foodAvailable}
            </span>
          )}
        </div>

        {trek.warnings?.length > 0 && (
          <div className="bg-red-50 border border-red-100 rounded-2xl p-3.5">
            <p className="text-[9px] font-black font-mono uppercase text-red-500 flex items-center gap-1 mb-1.5">
              <AlertTriangle size={10} /> Warnings
            </p>
            <ul className="space-y-1 text-[11px] text-red-700">
              {trek.warnings.slice(0, 2).map((w, i) => <li key={i}>— {w}</li>)}
            </ul>
          </div>
        )}

        <button
          onClick={() => window.open(trek.mapLink, "_blank")}
          className="mt-auto w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-white border border-black/10 hover:bg-black/5 transition-all"
        >
          <ExternalLink size={12} /> View Full Guide
        </button>
      </div>
    </div>
  );
}

export default function TrekSection() {
  const [search, setSearch] = useState("");
  const [diffFilter, setDiffFilter] = useState("All");
  const [completedTreks, setCompletedTreks] = useLocalStorage(STORAGE_KEYS.completedTreks, []);

  let filtered = filterBySearch(treks, search, ["name", "description", "difficulty"]);
  if (diffFilter !== "All") filtered = filtered.filter((t) => t.difficulty === diffFilter);

  const toggleComplete = (id) =>
    setCompletedTreks((prev) => prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]);

  return (
    <section id="treks" className="py-10 scroll-mt-20">
      <Container>
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
          <div className="flex-1">
            <p className="text-[9px] font-black font-mono uppercase tracking-widest text-slate-400">Trek Guides</p>
            <h2 className="text-2xl font-black uppercase tracking-tight" style={{ fontFamily: "'Anton', sans-serif" }}>
              All Treks
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search treks..."
                className="pl-8 pr-4 py-2 rounded-xl border border-black/10 bg-white/70 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-black/5 w-48"
              />
            </div>
            <div className="flex gap-1">
              {trekDifficulties.map((d) => (
                <button
                  key={d}
                  onClick={() => setDiffFilter(d)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${diffFilter === d ? "bg-black text-white border-black" : "bg-white/60 border-black/10 text-slate-500 hover:bg-white hover:text-black"}`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((trek) => (
            <TrekCard
              key={trek.id}
              trek={trek}
              isCompleted={completedTreks.includes(trek.id)}
              onToggleComplete={toggleComplete}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
