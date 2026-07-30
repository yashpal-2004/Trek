import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mountain, Landmark, Home, Waves, MapPin, Tent, Route, Star, Info } from "lucide-react";
import Container from "../layout/Container";
import { routeWaypoints, routeStats, typeConfig } from "../../data/spiti/routeMap";

const LUCIDE_MAP = {
  city: Home, landmark: MapPin, village: Home, junction: Route,
  rest: Tent, pass: Mountain, town: Home, monastery: Landmark,
  valley: Mountain, lake: Waves
};

const ALL_CATEGORIES = ["All", "Mountain Pass", "Town / Hub", "Monastery", "Village", "Landmark", "Lake", "Rest Stop", "Valley", "Junction", "Start / End"];
const DISPLAY_CATS = ["All", "Mountain Pass", "Monastery", "Village", "Landmark", "Lake", "Rest Stop"];

// Pre-computed SVG coordinates for altitude profile
// ViewBox: 0 0 1200 340 | Alt range: 2050-4551 (2501m) | x: 80-1140 (1060px) | y: 310→30
const toSVG = (dist, alt) => ({
  x: 80 + (dist / 800) * 1060,
  y: 310 - ((alt - 2050) / 2501) * 280
});

// Main route (linearized): Manali → Atal → Khoksar → Gramphu → Chhatru → Batal → Kunzum → Losar → Kaza → Chandratal → Return
const MAIN_ROUTE_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 19, 20];
// High villages branch from Kaza
const HIGH_BRANCH_IDS = [9, 10, 11, 12, 13, 14, 15];
// Tabo / Dhankar branch (approximate from Kaza leg)
const TABO_BRANCH_IDS = [9, 16, 17, 18];

const getWpById = (id) => routeWaypoints.find(w => w.id === id);

const makePathD = (ids) =>
  ids.map((id, i) => {
    const w = getWpById(id);
    const { x, y } = toSVG(w.distance, w.altitude);
    return `${i === 0 ? "M" : "L"} ${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");

const MAIN_PATH = makePathD(MAIN_ROUTE_IDS);
const HIGH_PATH = makePathD(HIGH_BRANCH_IDS);
const TABO_PATH = makePathD(TABO_BRANCH_IDS);

// Fill area below main path
const FILL_PATH = MAIN_PATH + ` L 1140,310 L 80,310 Z`;

// Key label points on the profile
const LABEL_POINTS = [
  { id: 1, label: "Manali" },
  { id: 2, label: "Atal Tunnel" },
  { id: 7, label: "Kunzum Pass\n4,551m" },
  { id: 9, label: "Kaza" },
  { id: 19, label: "Chandratal" },
  { id: 20, label: "Manali\n(Return)" }
];

export default function SpitiRouteMap() {
  const [filter, setFilter] = useState("All");
  const [hovered, setHovered] = useState(null);

  const filtered = filter === "All"
    ? routeWaypoints
    : routeWaypoints.filter(w => typeConfig[w.type]?.label === filter);

  // Altitude grid lines
  const altLines = [2000, 2500, 3000, 3500, 4000, 4551];

  return (
    <section id="routemap" className="scroll-mt-20">
      {/* ─── Header ─── */}
      <div className="bg-[#F5F0E8] py-10 border-b border-black/8">
        <Container>
          <p className="text-[9px] font-black font-mono uppercase tracking-widest text-amber-600 mb-1">Route Map</p>
          <h2 className="text-3xl font-black uppercase tracking-tight mb-2 text-black" style={{ fontFamily: "'Anton', sans-serif" }}>
            Spiti Valley Route
          </h2>
          <p className="text-xs text-slate-500 max-w-xl">
            Complete ~800 km circuit from Manali covering all major attractions — passes, monasteries, high villages, and glacial lakes.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-6">
            {[
              { label: "Total Distance", value: routeStats.totalDistance },
              { label: "Peak Altitude", value: routeStats.peakAltitude },
              { label: "Waypoints", value: `${routeStats.totalWaypoints} Stops` },
              { label: "Mountain Passes", value: `${routeStats.passes} Pass` },
              { label: "Monasteries", value: `${routeStats.monasteries} Sites` },
              { label: "High Villages", value: `${routeStats.villages} Villages` },
            ].map(s => (
              <div key={s.label}>
                <p className="text-[9px] font-mono uppercase text-slate-400 tracking-widest">{s.label}</p>
                <p className="text-sm font-black text-amber-600">{s.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ─── Altitude Profile SVG ─── */}
      <div className="bg-[#F5F0E8] overflow-x-auto border-y border-black/8">
        <div className="min-w-[700px]">
          <svg viewBox="0 0 1200 360" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ height: "280px" }}>
            <defs>
              <linearGradient id="routeGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D97706" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.04" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            {/* Grid lines */}
            {altLines.map(alt => {
              const y = 310 - ((alt - 2050) / 2501) * 280;
              return (
                <g key={alt}>
                  <line x1="80" y1={y} x2="1140" y2={y} stroke="black" strokeOpacity="0.07" strokeWidth="1" strokeDasharray="4 6" />
                  <text x="72" y={y + 4} textAnchor="end" fill="black" fillOpacity="0.35" fontSize="9" fontFamily="monospace">
                    {alt === 4551 ? "4,551m" : `${(alt / 1000).toFixed(1)}K`}
                  </text>
                </g>
              );
            })}

            {/* Fill under main route */}
            <path d={FILL_PATH} fill="url(#routeGrad)" />

            {/* Tabo branch (subtle) */}
            <path d={TABO_PATH} fill="none" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="5 4" strokeOpacity="0.6" />

            {/* High villages branch */}
            <path d={HIGH_PATH} fill="none" stroke="#059669" strokeWidth="1.5" strokeDasharray="5 4" strokeOpacity="0.7" />

            {/* Main route line */}
            <path d={MAIN_PATH} fill="none" stroke="#D97706" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" filter="url(#glow)" />

            {/* Waypoint dots on main route */}
            {MAIN_ROUTE_IDS.map(id => {
              const w = getWpById(id);
              const { x, y } = toSVG(w.distance, w.altitude);
              const cfg = typeConfig[w.type] || typeConfig.city;
              const isHighlight = w.highlight;
              return (
                <g key={id}>
                  {isHighlight && <circle cx={x} cy={y} r="7" fill={cfg.color} fillOpacity="0.18" />}
                  <circle cx={x} cy={y} r={isHighlight ? 4 : 3} fill={cfg.color} stroke="white" strokeWidth="1.5" />
                </g>
              );
            })}

            {/* High branch dots */}
            {HIGH_BRANCH_IDS.slice(1).map(id => {
              const w = getWpById(id);
              const { x, y } = toSVG(w.distance, w.altitude);
              return <circle key={id} cx={x} cy={y} r="2.5" fill="#059669" stroke="white" strokeWidth="1" opacity="0.9" />;
            })}

            {/* Tabo branch dots */}
            {TABO_BRANCH_IDS.slice(1).map(id => {
              const w = getWpById(id);
              const { x, y } = toSVG(w.distance, w.altitude);
              return <circle key={id} cx={x} cy={y} r="2.5" fill="#8B5CF6" stroke="white" strokeWidth="1" opacity="0.9" />;
            })}

            {/* Key labels */}
            {LABEL_POINTS.map(({ id, label }) => {
              const w = getWpById(id);
              const { x, y } = toSVG(w.distance, w.altitude);
              const lines = label.split("\n");
              const above = y < 160;
              const lx = id === 20 ? Math.min(x, 1120) : x;
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

            {/* Legend inside SVG */}
            <g transform="translate(88, 22)">
              <rect width="280" height="28" rx="6" fill="white" fillOpacity="0.7" />
              {[
                { color: "#D97706", label: "Main Route" },
                { color: "#059669", label: "High Villages" },
                { color: "#8B5CF6", label: "Tabo / Dhankar" },
              ].map(({ color, label }, i) => (
                <g key={label} transform={`translate(${12 + i * 90}, 14)`}>
                  <line x1="0" y1="0" x2="16" y2="0" stroke={color} strokeWidth="2"
                    strokeDasharray={i === 0 ? "none" : "4 3"} />
                  <text x="20" y="4" fill="black" fillOpacity="0.55" fontSize="8" fontFamily="monospace">{label}</text>
                </g>
              ))}
            </g>

            {/* Distance axis */}
            {[0, 200, 400, 600, 800].map(d => {
              const x = 80 + (d / 800) * 1060;
              return (
                <text key={d} x={x} y="328" textAnchor="middle" fill="black" fillOpacity="0.3" fontSize="9" fontFamily="monospace">
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

          {/* Cards grid */}
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
                    className="bg-white/80 backdrop-blur border border-black/8 rounded-[20px] p-5 hover:border-black/20 hover:shadow-sm transition-all group"
                  >
                    {/* Top row */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                          style={{ backgroundColor: cfg.bg }}
                        >
                          <Icon size={15} style={{ color: cfg.color }} />
                        </div>
                        <div>
                          <h3 className="font-extrabold text-sm leading-tight text-black">{wp.name}</h3>
                          <p className="text-[9px] font-black font-mono uppercase tracking-wider mt-0.5" style={{ color: cfg.color }}>
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

                    {/* Altitude & distance */}
                    <div className="flex gap-3 mb-3">
                      <span className="text-[10px] font-black font-mono bg-black/5 px-2 py-1 rounded-lg">
                        ↑ {wp.altLabel}
                      </span>
                      <span className="text-[10px] font-black font-mono bg-black/5 px-2 py-1 rounded-lg">
                        ⬤ {wp.distance} km
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-[11px] text-slate-500 leading-relaxed">{wp.description}</p>

                    {/* Note badge */}
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
