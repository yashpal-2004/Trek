import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mountain, Home, Waves, MapPin, Tent, Route, Star, Info, Landmark } from "lucide-react";
import Container from "../layout/Container";
import { routeWaypoints, routeStats, typeConfig } from "../../data/annapurna/routeMap";

const LUCIDE_MAP = {
  city: Home, town: Home, border: MapPin, lake: Waves, trailhead: MapPin,
  village: Home, camp: Tent, basecamp: Tent, summit: Mountain, natural: Waves
};

const DISPLAY_CATS = ["All", "Expedition Peak", "Base Camp", "Lakeside", "Village", "Camp", "Trailhead", "Border Stop"];

// SVG coordinate helpers
// Alt range: 84m (Gorakhpur) → 4130m (Annapurna Base Camp) | range = 4046m
// x: 80 → 1140 (1060px) over 2000 km total
// y: 310 → 30 (280px)
const MIN_ALT = 84;
const MAX_ALT = 4130;
const ALT_RANGE = MAX_ALT - MIN_ALT;
const MAX_DIST = 2000;

const toSVG = (dist, alt) => ({
  x: 80 + (dist / MAX_DIST) * 1060,
  y: 310 - ((alt - MIN_ALT) / ALT_RANGE) * 280
});

// Route sequence
const MAIN_ROUTE_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const getWpById = (id) => routeWaypoints.find(w => w.id === id);

const makePathD = (ids) =>
  ids.map((id, i) => {
    const w = getWpById(id);
    if (!w) return "";
    const { x, y } = toSVG(w.distance, w.altitude);
    return `${i === 0 ? "M" : "L"} ${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");

const MAIN_PATH = makePathD(MAIN_ROUTE_IDS);

// Fill area below main path
const FILL_PATH = MAIN_PATH +
  ` L ${toSVG(MAX_DIST, MIN_ALT).x.toFixed(1)},310 L ${toSVG(0, MIN_ALT).x.toFixed(1)},310 Z`;

const LABEL_POINTS = [
  { id: 1, label: "Delhi" },
  { id: 3, label: "Sonauli Border" },
  { id: 4, label: "Pokhara Lakeside" },
  { id: 7, label: "Chhomrong\n2,170m" },
  { id: 10, label: "ABC Peak\n4,130m" },
  { id: 13, label: "Delhi\n(Return)" }
];

const altLines = [84, 1000, 2000, 3000, 4130];

export default function AnnapurnaRouteMap() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? routeWaypoints
    : routeWaypoints.filter(w => typeConfig[w.type]?.label === filter);

  return (
    <section id="routemap" className="scroll-mt-20">
      {/* ─── Header ─── */}
      <div className="bg-[#F5F0E8] py-10 border-b border-black/8">
        <Container>
          <p className="text-[9px] font-black font-mono uppercase tracking-widest text-emerald-600 mb-1">Route Map</p>
          <h2 className="text-3xl font-black uppercase tracking-tight mb-2 text-black" style={{ fontFamily: "'Anton', sans-serif" }}>
            Annapurna Base Camp Expedition
          </h2>
          <p className="text-xs text-slate-500 max-w-xl">
            10-day self-guided overland expedition from Delhi crossing Sonauli border, passing through Lakeside Pokhara and climbing deep into the Annapurna Sanctuary.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-6">
            {[
              { label: "Trek Distance", value: routeStats.totalDistance },
              { label: "Peak Altitude", value: routeStats.peakAltitude },
              { label: "Duration",      value: `${routeStats.days} Days` },
              { label: "Nepal Border",   value: routeStats.borderCross },
              { label: "Permits Needed", value: routeStats.permitCost },
              { label: "Stops",          value: `${routeStats.totalWaypoints} Waypoints` },
            ].map(s => (
              <div key={s.label}>
                <p className="text-[9px] font-mono uppercase text-slate-400 tracking-widest">{s.label}</p>
                <p className="text-sm font-black text-emerald-600">{s.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ─── Altitude Profile SVG ─── */}
      <div className="bg-[#F5F0E8] overflow-x-auto border-b border-black/8">
        <div className="min-w-[700px]">
          <svg viewBox="0 0 1200 360" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ height: "280px" }}>
            <defs>
              <linearGradient id="abcGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#059669" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#059669" stopOpacity="0.03" />
              </linearGradient>
              <filter id="abcGlow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            {/* Grid lines */}
            {altLines.map(alt => {
              const y = 310 - ((alt - MIN_ALT) / ALT_RANGE) * 280;
              return (
                <g key={alt}>
                  <line x1="80" y1={y} x2="1140" y2={y}
                    stroke="black" strokeOpacity="0.07" strokeWidth="1" strokeDasharray="4 6" />
                  <text x="72" y={y + 4} textAnchor="end"
                    fill="black" fillOpacity="0.35" fontSize="9" fontFamily="monospace">
                    {alt === 84 ? "84m" : alt === 4130 ? "4,130m" : `${(alt / 1000).toFixed(0)}K`}
                  </text>
                </g>
              );
            })}

            {/* Fill under route */}
            <path d={FILL_PATH} fill="url(#abcGrad)" />

            {/* Main route line */}
            <path d={MAIN_PATH} fill="none" stroke="#059669" strokeWidth="2.5"
              strokeLinejoin="round" strokeLinecap="round" filter="url(#abcGlow)" />

            {/* Dots */}
            {MAIN_ROUTE_IDS.map(id => {
              const w = getWpById(id);
              if (!w) return null;
              const { x, y } = toSVG(w.distance, w.altitude);
              const cfg = typeConfig[w.type] || typeConfig.city;
              return (
                <g key={id}>
                  {w.highlight && <circle cx={x} cy={y} r="7" fill={cfg.color} fillOpacity="0.18" />}
                  <circle cx={x} cy={y} r={w.highlight ? 4 : 3} fill={cfg.color} stroke="white" strokeWidth="1.5" />
                </g>
              );
            })}

            {/* Key labels */}
            {LABEL_POINTS.map(({ id, label }) => {
              const w = getWpById(id);
              const { x, y } = toSVG(w.distance, w.altitude);
              const lines = label.split("\n");
              const above = y < 180;
              const lx = id === 13 ? Math.min(x, 1125) : x;
              return (
                <g key={id}>
                  <line x1={lx} y1={above ? y + 6 : y - 6} x2={lx} y2={above ? y + 22 : y - 22}
                    stroke="black" strokeOpacity="0.2" strokeWidth="1" />
                  {lines.map((line, i) => (
                    <text key={i} x={lx} y={above ? y + 30 + i * 11 : y - 25 + i * 11}
                      textAnchor="middle" fill="black" fillOpacity="0.6"
                      fontSize="9" fontFamily="monospace" fontWeight="bold">
                      {line}
                    </text>
                  ))}
                </g>
              );
            })}

            {/* Legend */}
            <g transform="translate(88, 30)">
              <rect width="170" height="28" rx="6" fill="white" fillOpacity="0.7" />
              <g transform="translate(12, 14)">
                <line x1="0" y1="0" x2="16" y2="0" stroke="#059669" strokeWidth="2" />
                <text x="20" y="4" fill="black" fillOpacity="0.55" fontSize="8" fontFamily="monospace">Overland Expedition Loop</text>
              </g>
            </g>

            {/* Distance axis */}
            {[0, 400, 800, 1200, 1600, 2000].map(d => {
              const x = 80 + (d / MAX_DIST) * 1060;
              return (
                <text key={d} x={x} y="328" textAnchor="middle"
                  fill="black" fillOpacity="0.3" fontSize="9" fontFamily="monospace">
                  {d} km
                </text>
              );
            })}
          </svg>
        </div>
      </div>

      {/* ─── Waypoints Grid ─── */}
      <div className="bg-[#F5F0E8] py-10">
        <Container>
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {DISPLAY_CATS.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[10px] font-black font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border transition-all ${
                  filter === cat
                    ? "bg-black text-white border-black"
                    : "bg-white text-slate-500 border-slate-200 hover:border-slate-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((wp, idx) => {
                const cfg = typeConfig[wp.type] || typeConfig.city;
                const Icon = LUCIDE_MAP[wp.type] || MapPin;
                return (
                  <motion.div
                    key={wp.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: idx * 0.02 }}
                    className="bg-white/80 backdrop-blur border border-black/8 rounded-[20px] p-5 hover:border-black/20 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                          style={{ backgroundColor: cfg.bg }}>
                          <Icon size={15} style={{ color: cfg.color }} />
                        </div>
                        <div>
                          <h3 className="font-extrabold text-sm leading-tight text-black">{wp.name}</h3>
                          <p className="text-[9px] font-black font-mono uppercase tracking-wider mt-0.5"
                            style={{ color: cfg.color }}>
                            {cfg.label}
                          </p>
                        </div>
                      </div>
                      {wp.highlight && (
                        <div className="shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                          <Star size={11} className="text-amber-500 fill-amber-500" />
                        </div>
                      )}
                    </div>

                    <div className="flex gap-3 mb-3">
                      <span className="text-[10px] font-black font-mono bg-black/5 px-2 py-1 rounded-lg">
                        ↑ {wp.altLabel}
                      </span>
                      <span className="text-[10px] font-black font-mono bg-black/5 px-2 py-1 rounded-lg">
                        ⬤ {wp.distance} km
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-500 leading-relaxed">{wp.description}</p>

                    {wp.note && (
                      <div className="mt-3 flex items-start gap-1.5">
                        <Info size={10} className="text-slate-400 mt-0.5 shrink-0" />
                        <p className="text-[10px] font-mono text-slate-400 italic">{wp.note}</p>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </Container>
      </div>
    </section>
  );
}
