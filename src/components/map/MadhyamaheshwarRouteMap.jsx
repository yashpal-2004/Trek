import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mountain, Landmark, Home, Waves, MapPin, Tent, Route, Star, Info } from "lucide-react";
import Container from "../layout/Container";
import { routeWaypoints, routeStats, typeConfig } from "../../data/madhyamaheshwar/routeMap";
import { getActiveTripKey } from "../../data/proxyHelper";

const LUCIDE_MAP = {
  city: Home, pilgrim: Waves, town: Home, trailhead: MapPin,
  village: Home, basecamp: Tent, gate: MapPin, valley: Mountain,
  landmark: Landmark, trailstart: Route, gurudwara: Landmark,
  lake: Waves, trailend: Home
};

const DISPLAY_CATS = ["All", "Sacred Site", "Base Camp", "Trailhead", "Landmark", "Town / Hub", "Village"];

const altLines = [215, 1000, 2000, 3000, 3750];

export default function MadhyamaheshwarRouteMap() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? routeWaypoints
    : routeWaypoints.filter(w => typeConfig[w.type]?.label === filter);

  // Dynamic configuration based on Plan 1 or Plan 2
  const activeKey = getActiveTripKey();
  const isPlan2Mode = activeKey === "madhyamaheshwar-plan2";

  const MIN_ALT = 215;
  const MAX_ALT = 3750;
  const ALT_RANGE = MAX_ALT - MIN_ALT;
  const MAX_DIST = isPlan2Mode ? 996 : 934;

  const toSVG = (dist, alt) => ({
    x: 80 + (dist / MAX_DIST) * 1060,
    y: 310 - ((alt - MIN_ALT) / ALT_RANGE) * 280
  });

  const getWpById = (id) => routeWaypoints.find(w => w.id === id);

  const makePathD = (ids) =>
    ids.map((id, i) => {
      const w = getWpById(id);
      if (!w) return "";
      const { x, y } = toSVG(w.distance, w.altitude);
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(" ");

  // Main profile path
  const MAIN_ROUTE_IDS = isPlan2Mode 
    ? [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12] 
    : [1, 2, 3, 4, 5, 6, 7, 8, 10, 11];

  const BUDHA_BRANCH_IDS = [8, 9];

  const MAIN_PATH = makePathD(MAIN_ROUTE_IDS);
  const BUDHA_PATH = makePathD(BUDHA_BRANCH_IDS);

  // Fill area below main path
  const MAIN_POINTS = MAIN_ROUTE_IDS.map(id => {
    const w = getWpById(id);
    return w ? toSVG(w.distance, w.altitude) : { x: 80, y: 310 };
  });
  const LAST = MAIN_POINTS[MAIN_POINTS.length - 1];
  const FIRST = MAIN_POINTS[0];
  const FILL_PATH = MAIN_PATH + ` L ${LAST.x.toFixed(1)},310 L ${FIRST.x.toFixed(1)},310 Z`;

  // Label labels
  const LABEL_POINTS = isPlan2Mode
    ? [
        { id: 1,  label: "Delhi" },
        { id: 4,  label: "Kedarnath\n3,583m" },
        { id: 8,  label: "Madmaheshwar\n3,497m" },
        { id: 9,  label: "Budha Madmaheshwar\n3,750m" },
        { id: 12, label: "Delhi\n(Return)" }
      ]
    : [
        { id: 1,  label: "Delhi" },
        { id: 4,  label: "Ransi" },
        { id: 8,  label: "Madmaheshwar\n3,497m" },
        { id: 9,  label: "Budha Madmaheshwar\n3,750m" },
        { id: 11, label: "Delhi\n(Return)" }
      ];

  const distMarkers = isPlan2Mode ? [0, 200, 450, 750, 996] : [0, 200, 450, 700, 934];

  return (
    <section id="routemap" className="scroll-mt-20">
      {/* ─── Header ─── */}
      <div className="bg-[#F5F0E8] py-10 border-b border-black/8">
        <Container>
          <p className="text-[9px] font-black font-mono uppercase tracking-widest text-emerald-600 mb-1">Route Map</p>
          <h2 className="text-3xl font-black uppercase tracking-tight mb-2 text-black" style={{ fontFamily: "'Anton', sans-serif" }}>
            {isPlan2Mode ? "Kedarnath & Madhyamaheshwar Combo" : "Madhyamaheshwar & Budha Madmaheshwar"}
          </h2>
          <p className="text-xs text-slate-500 max-w-xl">
            {isPlan2Mode 
              ? "8-day dual pilgrimage route combining the holy Kedarnath yatra and serene Madhyamaheshwar trek."
              : "5-day round trek from Delhi — traversing the lush Garhwal Himalayas to the ancient Panch Kedar temple."}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-6">
            {[
              { label: "Trek Distance", value: routeStats.totalDistance },
              { label: "Peak Altitude", value: routeStats.peakAltitude },
              { label: "Duration",      value: `${routeStats.days} Days` },
              { label: "Highest Lake",  value: routeStats.highestLake },
              { label: "Region",        value: routeStats.unescoSite },
              { label: "Key Stops",     value: `${routeStats.totalWaypoints} Waypoints` },
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
              <linearGradient id="madGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.03" />
              </linearGradient>
            </defs>

            {/* Horizontal Altitude Gridlines */}
            {altLines.map(alt => {
              const svgVal = toSVG(0, alt);
              return (
                <g key={alt}>
                  <line x1="80" y1={svgVal.y} x2="1140" y2={svgVal.y} stroke="rgba(0,0,0,0.06)" strokeDasharray="3,3" />
                  <text x="70" y={svgVal.y + 4} textAnchor="end" fontSize="10" fontWeight="bold" fontFamily="monospace" fill="#94A3B8">
                    {alt}m
                  </text>
                </g>
              );
            })}

            {/* Vertical Distance Markers */}
            {distMarkers.map(dist => {
              const svgVal = toSVG(dist, MIN_ALT);
              return (
                <g key={dist}>
                  <line x1={svgVal.x} y1="30" x2={svgVal.x} y2="310" stroke="rgba(0,0,0,0.03)" />
                  <text x={svgVal.x} y="325" textAnchor="middle" fontSize="10" fontWeight="bold" fontFamily="monospace" fill="#94A3B8">
                    {dist} km
                  </text>
                </g>
              );
            })}

            {/* Altitude Profile Area Fill */}
            <path d={FILL_PATH} fill="url(#madGrad)" />

            {/* Main Path Stroke */}
            <path d={MAIN_PATH} fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

            {/* Branches */}
            <path d={BUDHA_PATH} fill="none" stroke="#059669" strokeWidth="2.5" strokeDasharray="4,4" strokeLinecap="round" />

            {/* Highlighted waypoint circles */}
            {routeWaypoints.map(w => {
              const { x, y } = toSVG(w.distance, w.altitude);
              const conf = typeConfig[w.type] || { color: "#6B7280" };
              return (
                <g key={w.id} className="group/dot cursor-pointer">
                  <circle cx={x} cy={y} r="5.5" fill="#FFFFFF" stroke={conf.color} strokeWidth="3" />
                  <circle cx={x} cy={y} r="1.5" fill={conf.color} />
                </g>
              );
            })}

            {/* Named labels above crucial locations */}
            {LABEL_POINTS.map(lbl => {
              const w = getWpById(lbl.id);
              if (!w) return null;
              const { x, y } = toSVG(w.distance, w.altitude);
              const lines = lbl.label.split("\n");
              return (
                <g key={lbl.id}>
                  <line x1={x} y1={y - 8} x2={x} y2={y - 25} stroke="#000000" strokeWidth="0.8" strokeOpacity="0.15" />
                  <text x={x} y={y - 32} textAnchor="middle" fontSize="10" fontWeight="black" fill="#1E293B" className="uppercase tracking-tight">
                    {lines[0]}
                  </text>
                  {lines[1] && (
                    <text x={x} y={y - 22} textAnchor="middle" fontSize="9" fontWeight="bold" fill="#64748B">
                      {lines[1]}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* ─── Filter & Waypoint Cards ─── */}
      <div className="py-10 bg-white">
        <Container>
          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {DISPLAY_CATS.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider transition-all border ${
                  filter === cat
                    ? "bg-black text-white border-black"
                    : "bg-black/[0.02] text-slate-500 border-black/5 hover:border-black/15"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(w => {
              const Icon = LUCIDE_MAP[w.type] || MapPin;
              const conf = typeConfig[w.type] || { color: "#6B7280", bg: "#F3F4F6", label: "Marker" };

              return (
                <div key={w.id} className="border border-black/10 rounded-[28px] p-6 bg-white hover:border-black/25 hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-black font-mono text-slate-400 group-hover:text-black transition-colors">
                        Waypoint #{String(w.id).padStart(2, "0")}
                      </span>
                      <span
                        className="text-[9px] font-extrabold uppercase font-mono px-2 py-0.5 rounded-md"
                        style={{ backgroundColor: conf.bg, color: conf.color }}
                      >
                        {conf.label}
                      </span>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-black/5 shrink-0">
                        <Icon size={16} style={{ color: conf.color }} />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-base uppercase tracking-tight">{w.name}</h4>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1 line-clamp-3">
                          {w.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-black/5 pt-4 mt-6 flex justify-between items-center">
                    <div>
                      <p className="text-[8px] font-black uppercase text-slate-400 font-mono tracking-wider">Altitude</p>
                      <p className="text-xs font-bold text-slate-800 font-mono mt-0.5">{w.altLabel}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[8px] font-black uppercase text-slate-400 font-mono tracking-wider">Distance</p>
                      <p className="text-xs font-bold text-slate-800 font-mono mt-0.5">{w.distance} km</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}
