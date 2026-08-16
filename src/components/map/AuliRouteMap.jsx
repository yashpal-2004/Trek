import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Landmark, Home, MapPin, Route, Star, Info } from "lucide-react";
import Container from "../layout/Container";
import { routeWaypoints, routeStats, typeConfig } from "../../data/auli/routeMap";

const LUCIDE_MAP = {
  city: Home,
  landmark: Landmark,
  town: Home,
};

const DISPLAY_CATS = ["All", "Start / End", "Transit Hub", "Hotel Stay", "Ski Slopes", "Meadows"];

export default function AuliRouteMap() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? routeWaypoints
    : routeWaypoints.filter(w => typeConfig[w.type]?.label === filter || w.category === filter);

  // Dynamic calculations
  const altitudes = routeWaypoints.map(w => w.altitude);
  const distances = routeWaypoints.map(w => w.distance);
  const minAltitude = Math.min(...altitudes, 200);
  const maxAltitude = Math.max(...altitudes, 3200);
  const altitudeRange = maxAltitude - minAltitude || 1;
  const maxDistance = Math.max(...distances, 1);

  const toSVG = (dist, alt) => ({
    x: 80 + (dist / maxDistance) * 1040,
    y: 280 - ((alt - minAltitude) / altitudeRange) * 200
  });

  const getWpById = (id) => routeWaypoints.find(w => w.id === id);

  const MAIN_ROUTE_IDS = routeWaypoints.map(w => w.id);

  const makePathD = (ids) =>
    ids.map((id, i) => {
      const w = getWpById(id);
      if (!w) return "";
      const { x, y } = toSVG(w.distance, w.altitude);
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(" ");

  const MAIN_PATH = makePathD(MAIN_ROUTE_IDS);

  const MAIN_POINTS = MAIN_ROUTE_IDS.map(id => {
    const w = getWpById(id);
    return toSVG(w.distance, w.altitude);
  });

  const [activeWp, setActiveWp] = useState(routeWaypoints[3]);

  return (
    <section id="routemap" className="border-b border-black/8 py-16 scroll-mt-16 bg-white overflow-hidden">
      {/* ─── Header ─── */}
      <div className="pb-12 border-b border-black/5 bg-[#FCFAF6]">
        <Container>
          <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest mb-2.5">
            <Route size={14} />
            <span>Interactive Route Map & Elevation Profile</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight mb-3">AULI SNOW & SKI ROAD MAP</h2>
          <p className="text-xs text-slate-500 max-w-xl">
            Watch the elevation climb from Sonipat (220m) up to the high alpine ski slopes of Auli (2,750m) and the pristine snow meadows of Gorson Bugyal (3,050m).
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-6">
            {[
              { label: "Total Distance", value: routeStats.totalDistance },
              { label: "Max Altitude", value: routeStats.peakAltitude },
              { label: "Duration",      value: "5 Days" },
              { label: "Transit Type",  value: "Bus + Cabs + Ropeway" },
              { label: "Region",        value: "Garhwal, Uttarakhand" },
              { label: "Ski Slopes",     value: "Auli Slopes" },
            ].map(s => (
              <div key={s.label}>
                <p className="text-[9px] font-mono uppercase text-slate-400 tracking-widest">{s.label}</p>
                <p className="text-sm font-black text-blue-600">{s.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ─── Elevation Profile SVG ─── */}
      <div className="bg-[#FCFAF6] overflow-x-auto border-b border-black/8">
        <div className="min-w-[700px]">
          <svg viewBox="0 0 1200 340" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ height: "240px" }}>
            <defs>
              <linearGradient id="auGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0.02" />
              </linearGradient>
            </defs>

            {/* Grid Lines */}
            {[220, 1000, 1875, 2750, 3050].map((alt) => {
              const y = 280 - ((alt - minAltitude) / altitudeRange) * 200;
              return (
                <g key={alt} className="opacity-20">
                  <line x1="60" y1={y} x2="1140" y2={y} stroke="#000" strokeWidth="0.5" strokeDasharray="3,3" />
                  <text x="50" y={y + 3} className="text-[9px] font-mono fill-slate-500 text-right" textAnchor="end">{alt}m</text>
                </g>
              );
            })}

            {/* Filled Area */}
            {MAIN_PATH && (
              <path
                d={`${MAIN_PATH} L ${MAIN_POINTS[MAIN_POINTS.length - 1].x.toFixed(1)},280 L ${MAIN_POINTS[0].x.toFixed(1)},280 Z`}
                fill="url(#auGrad)"
              />
            )}

            {/* Line Path */}
            {MAIN_PATH && (
              <path
                d={MAIN_PATH}
                fill="none"
                stroke="#2563EB"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}

            {/* Waypoint Dots */}
            {routeWaypoints.map((w, idx) => {
              const { x, y } = toSVG(w.distance, w.altitude);
              const isActive = activeWp.id === w.id;
              return (
                <g key={w.id} className="cursor-pointer" onClick={() => setActiveWp(w)}>
                  <circle
                    cx={x}
                    cy={y}
                    r={isActive ? 6 : 4}
                    fill={w.highlight ? "#2563EB" : "#3B82F6"}
                    stroke={isActive ? "#FFF" : "none"}
                    strokeWidth="1.5"
                    className="transition-all duration-300 hover:scale-150"
                  />
                  <text
                    x={x}
                    y={y - 12}
                    textAnchor="middle"
                    className={`text-[9px] font-bold ${isActive ? "fill-blue-600 font-extrabold" : "fill-slate-500"} transition-all`}
                  >
                    {w.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* ─── Interactive Waypoint Details ─── */}
      <Container className="pt-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* List & Filters */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-4">Route Waypoints</h3>
            
            {/* Filter Pill List */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {DISPLAY_CATS.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3 py-1 rounded-full text-[10px] font-black border transition-all ${
                    filter === cat
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-500 border-black/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="space-y-2 max-h-[360px] overflow-y-auto pr-2">
              {filtered.map(w => {
                const WpIcon = LUCIDE_MAP[w.type] || MapPin;
                const isActive = activeWp.id === w.id;
                return (
                  <button
                    key={w.id}
                    onClick={() => setActiveWp(w)}
                    className={`w-full flex items-start text-left p-3 rounded-2xl border transition-all ${
                      isActive
                        ? "bg-blue-50 border-blue-200/50 shadow-sm"
                        : "bg-white hover:bg-slate-50 border-black/5"
                    }`}
                  >
                    <div className={`p-2 rounded-xl mr-3 ${
                      isActive ? "bg-blue-100 text-blue-600" : "bg-slate-50 text-slate-400"
                    }`}>
                      <WpIcon size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-bold">{w.name}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] text-slate-400 font-mono">{w.altLabel}</span>
                        <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-black uppercase tracking-wide scale-90 origin-left">{w.category}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Details Card */}
          <div className="lg:col-span-2 flex flex-col justify-between bg-[#FCFAF6] border border-black/5 rounded-3xl p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeWp.id}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.15 }}
                className="space-y-4"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full">
                      Waypoint #{activeWp.id}
                    </span>
                    <h4 className="text-xl font-black mt-2">{activeWp.name}</h4>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400 font-mono">Distance from Sonipat</p>
                    <p className="text-sm font-black text-slate-800">{activeWp.distance} km</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded-2xl border border-black/5">
                    <p className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">Altitude</p>
                    <p className="text-sm font-bold text-slate-800">{activeWp.altLabel}</p>
                  </div>
                  <div className="bg-white p-3 rounded-2xl border border-black/5">
                    <p className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">Stop Category</p>
                    <p className="text-sm font-bold text-slate-800">{activeWp.category}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed bg-white border border-black/5 p-4 rounded-2xl">
                  {activeWp.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-2 mt-6 pt-4 border-t border-black/5 text-[11px] text-slate-400">
              <Info size={12} className="text-blue-500 shrink-0" />
              <span>Select any waypoint on the elevation profile graph to read description notes.</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
