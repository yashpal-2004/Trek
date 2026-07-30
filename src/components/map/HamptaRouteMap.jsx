import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mountain, Home, Waves, MapPin, Tent, Route, Star, Info, Landmark } from "lucide-react";
import Container from "../layout/Container";
import { routeWaypoints, routeStats, typeConfig } from "../../data/hampta/routeMap";

const LUCIDE_MAP = {
  city: Home, town: Home, trailhead: MapPin, camp: Tent,
  meadow: Mountain, pass: Mountain, junction: Route,
  lake: Waves, landmark: Landmark
};

const DISPLAY_CATS = ["All", "Mountain Pass", "Camp", "Lake", "Trailhead", "Meadow", "Town / Hub", "Junction"];

// SVG coordinate helpers
// Alt range: 215m (Delhi) → 4270m (Hampta Pass) | range = 4055m
// x: 80 → 1140 (1060px) over 1095 km total
// y: 310 → 30 (280px)
const MIN_ALT = 215;
const MAX_ALT = 4270;
const ALT_RANGE = MAX_ALT - MIN_ALT;
const MAX_DIST = 1095;

const toSVG = (dist, alt) => ({
  x: 80 + (dist / MAX_DIST) * 1060,
  y: 310 - ((alt - MIN_ALT) / ALT_RANGE) * 280
});

// Main route — the linear crossover journey
const MAIN_ROUTE_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13];
// Chandra Tal side trip from Chatru
const CHANDRAL_BRANCH_IDS = [9, 10, 9];  // out & back (we'll draw as a spur)

const getWpById = (id) => routeWaypoints.find(w => w.id === id);

const makePathD = (ids) =>
  ids.map((id, i) => {
    const w = getWpById(id);
    if (!w) return "";
    const { x, y } = toSVG(w.distance, w.altitude);
    return `${i === 0 ? "M" : "L"} ${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");

const MAIN_PATH = makePathD(MAIN_ROUTE_IDS);

// Chandra Tal spur — from Chatru point up to the lake and back
const chatru = getWpById(9);
const chandral = getWpById(10);
const chatruPt = toSVG(chatru.distance, chatru.altitude);
const chandralPt = toSVG(chandral.distance, chandral.altitude);
const CHANDRAL_PATH = `M ${chatruPt.x.toFixed(1)},${chatruPt.y.toFixed(1)} L ${chandralPt.x.toFixed(1)},${chandralPt.y.toFixed(1)}`;

// Fill under main path
const FILL_PATH = MAIN_PATH +
  ` L ${toSVG(1095, 215).x.toFixed(1)},310 L ${toSVG(0, 215).x.toFixed(1)},310 Z`;

const LABEL_POINTS = [
  { id: 1,  label: "Delhi" },
  { id: 2,  label: "Manali" },
  { id: 3,  label: "Jobra\n2,980m" },
  { id: 7,  label: "Hampta Pass\n4,270m" },
  { id: 9,  label: "Chatru" },
  { id: 10, label: "Chandra Tal\n4,250m" },
  { id: 13, label: "Delhi\n(Return)" }
];

const altLines = [215, 1000, 2000, 3000, 4000, 4270];

export default function HamptaRouteMap() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? routeWaypoints
    : routeWaypoints.filter(w => typeConfig[w.type]?.label === filter);

  return (
    <section id="routemap" className="scroll-mt-20">
      {/* ─── Header ─── */}
      <div className="bg-[#F5F0E8] py-10 border-b border-black/8">
        <Container>
          <p className="text-[9px] font-black font-mono uppercase tracking-widest text-red-600 mb-1">Route Map</p>
          <h2 className="text-3xl font-black uppercase tracking-tight mb-2 text-black" style={{ fontFamily: "'Anton', sans-serif" }}>
            Hampta Pass Crossover Trek
          </h2>
          <p className="text-xs text-slate-500 max-w-xl">
            5-day crossover from lush green Kullu Valley to the stark lunar landscape of Lahaul — Delhi to Delhi circuit via Manali and Chandra Tal.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-6">
            {[
              { label: "Trek Distance",  value: routeStats.totalDistance },
              { label: "Peak Altitude",  value: routeStats.peakAltitude },
              { label: "Duration",       value: `${routeStats.days} Days` },
              { label: "Crossover",      value: routeStats.crossover },
              { label: "Chandra Tal",    value: routeStats.chandralTal },
              { label: "Passes",         value: `${routeStats.passes} Passes` },
            ].map(s => (
              <div key={s.label}>
                <p className="text-[9px] font-mono uppercase text-slate-400 tracking-widest">{s.label}</p>
                <p className="text-sm font-black text-red-600">{s.value}</p>
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
              <linearGradient id="hamptaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#DC2626" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#DC2626" stopOpacity="0.03" />
              </linearGradient>
              <filter id="hamptaGlow">
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
                    {alt === 215 ? "215m" : alt === 4270 ? "4,270m" : `${(alt / 1000).toFixed(0)}K`}
                  </text>
                </g>
              );
            })}

            {/* Kullu / Lahaul region label */}
            {(() => {
              const passWp = getWpById(7);
              const passX = toSVG(passWp.distance, passWp.altitude).x;
              return (
                <>
                  <text x={passX - 25} y="18" textAnchor="end" fill="#16A34A" fillOpacity="0.65" fontSize="8" fontFamily="monospace" fontWeight="bold">KULLU VALLEY ▶</text>
                  <text x={passX + 25} y="18" textAnchor="start" fill="#D97706" fillOpacity="0.65" fontSize="8" fontFamily="monospace" fontWeight="bold">◀ LAHAUL (SPITI SIDE)</text>
                  <line x1={passX} y1="22" x2={passX} y2="308" stroke="black" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="3 5" />
                </>
              );
            })()}

            {/* Fill under main route */}
            <path d={FILL_PATH} fill="url(#hamptaGrad)" />

            {/* Chandra Tal spur */}
            <path d={CHANDRAL_PATH} fill="none" stroke="#0EA5E9" strokeWidth="2"
              strokeDasharray="5 4" strokeOpacity="0.85" />

            {/* Main route line */}
            <path d={MAIN_PATH} fill="none" stroke="#DC2626" strokeWidth="2.5"
              strokeLinejoin="round" strokeLinecap="round" filter="url(#hamptaGlow)" />

            {/* Main route dots */}
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

            {/* Chandra Tal dot */}
            <g>
              <circle cx={chandralPt.x} cy={chandralPt.y} r="7" fill="#0EA5E9" fillOpacity="0.2" />
              <circle cx={chandralPt.x} cy={chandralPt.y} r="4" fill="#0EA5E9" stroke="white" strokeWidth="1.5" />
            </g>

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
              <rect width="260" height="28" rx="6" fill="white" fillOpacity="0.7" />
              {[
                { color: "#DC2626", label: "Trek Route",   dash: false },
                { color: "#0EA5E9", label: "Chandra Tal",  dash: true  },
              ].map(({ color, label, dash }, i) => (
                <g key={label} transform={`translate(${12 + i * 122}, 14)`}>
                  <line x1="0" y1="0" x2="16" y2="0" stroke={color} strokeWidth="2"
                    strokeDasharray={dash ? "4 3" : "none"} />
                  <text x="20" y="4" fill="black" fillOpacity="0.55" fontSize="8" fontFamily="monospace">{label}</text>
                </g>
              ))}
            </g>

            {/* Distance axis */}
            {[0, 200, 400, 600, 800, 1000, 1095].map(d => {
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
