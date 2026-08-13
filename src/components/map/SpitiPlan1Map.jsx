import { useEffect, useRef, useState } from "react";
import Container from "../layout/Container";
import { Mountain, MapPin, Navigation, Info, ZoomIn, ZoomOut, Locate } from "lucide-react";

// Spiti Plan 1 route waypoints with real GPS coordinates
const PLAN1_WAYPOINTS = [
  { id: 1,  name: "Sonipat",               lat: 28.9931, lng: 77.0151, alt: "220m",    type: "start",   date: "20 Aug Night", color: "#6366F1", desc: "Starting point — board Volvo AC bus directly to Manali", dist: "0 km" },
  { id: 2,  name: "Manali (Refuel Point)", lat: 32.2432, lng: 77.1892, alt: "2,050m",  type: "town",    date: "21 Aug 8 AM", color: "#F59E0B", desc: "Arrive, pick up RE Himalayan, fill tank to 100% capacity, ride to Kaza", isFuelStation: true, dist: "530 km" },
  { id: 3,  name: "Atal Tunnel (North Portal)", lat: 32.3638, lng: 77.0802, alt: "3,050m", type: "landmark", date: "21 Aug 10:45 AM", color: "#F59E0B", desc: "9 km tunnel — entry into Lahaul Valley", dist: "30 km" },
  { id: 4,  name: "Gramphu / Chhatru",    lat: 32.4498, lng: 77.0350, alt: "3,150m",  type: "junction",date: "21 Aug 11:30 AM", color: "#EF4444", desc: "No network zone begins here", dist: "25 km" },
  { id: 5,  name: "Batal",                 lat: 32.3852, lng: 77.6021, alt: "3,960m",  type: "rest",    date: "21 Aug 12:30 PM", color: "#EF4444", desc: "Chacha-Chachi Dhaba — famous lunch stop", dist: "65 km" },
  { id: 6,  name: "Kunzum Pass",           lat: 32.4578, lng: 77.6298, alt: "4,551m",  type: "pass",    date: "21 Aug 2:00 PM", color: "#EF4444", desc: "Highest point — 14,931 ft. Visit Kunzum Mata temple", dist: "12 km" },
  { id: 7,  name: "Losar",                 lat: 32.4728, lng: 77.7192, alt: "4,080m",  type: "village", date: "21 Aug 3:00 PM", color: "#10B981", desc: "First village in Spiti Valley", dist: "18 km" },
  { id: 8,  name: "Kaza Base (Refuel Point)", lat: 32.2258, lng: 78.0710, alt: "3,800m",  type: "town",    date: "21 Aug 5:30 PM", color: "#10B981", desc: "3-night base camp. Refuel at the Kaza Indian Oil pump (only fuel station in Spiti Valley)", isFuelStation: true, dist: "50 km" },
  { id: 9,  name: "Key Monastery",         lat: 32.3038, lng: 78.0127, alt: "4,166m",  type: "monastery",date: "22 Aug 8:30 AM", color: "#8B5CF6", desc: "1,000-year-old Gelugpa monastery on a cliff", dist: "14 km" },
  { id: 10, name: "Chicham Bridge",        lat: 32.3421, lng: 78.0012, alt: "4,140m",  type: "landmark",date: "22 Aug 11:00 AM", color: "#8B5CF6", desc: "Asia's highest suspension bridge (13,596 ft)", dist: "8 km" },
  { id: 11, name: "Hikkim",               lat: 32.2871, lng: 78.0498, alt: "4,440m",  type: "village", date: "22 Aug 1:30 PM", color: "#8B5CF6", desc: "World's Highest Post Office — 14,567 ft", dist: "22 km" },
  { id: 12, name: "Komic",                lat: 32.2761, lng: 78.0621, alt: "4,587m",  type: "village", date: "22 Aug 3:00 PM", color: "#8B5CF6", desc: "World's highest motorable village — 15,027 ft", dist: "4 km" },
  { id: 13, name: "Langza",               lat: 32.2511, lng: 78.0821, alt: "4,400m",  type: "village", date: "22 Aug 3:30 PM", color: "#8B5CF6", desc: "Giant Buddha statue facing Chau Chau Kang Nilda peak", dist: "8 km" },
  { id: 14, name: "Khab Confluence",      lat: 31.8150, lng: 78.6300, alt: "2,500m",  type: "junction",date: "23 Aug 9:30 AM", color: "#FF5533", desc: "Confluence of Spiti and Sutlej rivers", dist: "120 km" },
  { id: 15, name: "Shipki La Pass",       lat: 31.8122, lng: 78.7428, alt: "3,930m",  type: "pass",    date: "23 Aug 10:30 AM", color: "#FF5533", desc: "India-China border pass (Closes at 2:00 PM)", dist: "22 km" },
  { id: 16, name: "Tabo Monastery",       lat: 32.0953, lng: 78.3812, alt: "3,280m",  type: "monastery",date: "23 Aug 1:00 PM", color: "#FF5533", desc: "UNESCO mud temples and ancient paintings", dist: "48 km" },
  { id: 17, name: "Dhankar Monastery",    lat: 32.1281, lng: 78.2136, alt: "3,890m",  type: "monastery",date: "23 Aug 4:30 PM", color: "#FF5533", desc: "Spectacular fort monastery perched on clay cliffs", dist: "32 km" },
  { id: 18, name: "Manali (Return)",       lat: 32.2432, lng: 77.1892, alt: "2,050m",  type: "town",    date: "24 Aug 1:30 PM", color: "#F59E0B", desc: "Return RE Himalayan, refuel if returning with full tank, board overnight Volvo", dist: "200 km" },
  { id: 19, name: "Sonipat (Return)",      lat: 28.9931, lng: 77.0151, alt: "220m",    type: "city",    date: "25 Aug 7 AM", color: "#6366F1", desc: "Arrive directly back at Sonipat bypass", dist: "530 km" },
];

const TYPE_CONFIG = {
  start:    { color: "#6366F1", bg: "#EEF2FF", label: "Start" },
  city:     { color: "#6366F1", bg: "#EEF2FF", label: "City" },
  town:     { color: "#F59E0B", bg: "#FEF3C7", label: "Town" },
  landmark: { color: "#F59E0B", bg: "#FEF3C7", label: "Landmark" },
  junction: { color: "#EF4444", bg: "#FEE2E2", label: "Junction" },
  rest:     { color: "#EF4444", bg: "#FEE2E2", label: "Rest Stop" },
  pass:     { color: "#EF4444", bg: "#FEE2E2", label: "Pass" },
  village:  { color: "#8B5CF6", bg: "#F5F3FF", label: "Village" },
  monastery:{ color: "#8B5CF6", bg: "#F5F3FF", label: "Monastery" },
  lake:     { color: "#0EA5E9", bg: "#E0F2FE", label: "Lake" },
};

// Day groupings for the legend
const DAY_COLORS = [
  { label: "20 Aug — Sonipat Boarding",        color: "#6366F1" },
  { label: "21 Aug — Manali → Kaza",           color: "#F59E0B" },
  { label: "22 Aug — High Villages Circuit",   color: "#8B5CF6" },
  { label: "23 Aug — Shipki La & UNESCO Stops",color: "#FF5533" },
  { label: "24-25 Aug — Return to Sonipat",    color: "#6366F1" },
];

export default function SpitiInteractiveMap() {
  const mapRef = useRef(null);
  const leafletMapRef = useRef(null);
  const markersRef = useRef([]);
  const [selected, setSelected] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (leafletMapRef.current) return;

    // Dynamically import leaflet CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);

    import("leaflet").then((L) => {
      const Leaflet = L.default || L;

      // Center the map around Spiti Valley
      const map = Leaflet.map(mapRef.current, {
        center: [32.1, 77.8],
        zoom: 8,
        zoomControl: false,
      });

      // OpenStreetMap tiles (free, no API key)
      Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map);

      // Draw route polyline — main route
      const mainRouteCoords = [1, 2, 3, 4, 5, 6, 7, 8].map(
        (id) => { const w = PLAN1_WAYPOINTS.find(p => p.id === id); return [w.lat, w.lng]; }
      );
      Leaflet.polyline(mainRouteCoords, {
        color: "#F59E0B", weight: 4, opacity: 0.9, dashArray: null
      }).addTo(map);

      // Kaza circuit branch (Day 2)
      const circuitCoords = [8, 9, 10, 11, 12, 13, 8].map(
        (id) => { const w = PLAN1_WAYPOINTS.find(p => p.id === id); return [w.lat, w.lng]; }
      );
      Leaflet.polyline(circuitCoords, {
        color: "#8B5CF6", weight: 3, opacity: 0.85, dashArray: "8 5"
      }).addTo(map);

      // Kaza → Shipki La → Tabo → Dhankar → Kaza (Day 3)
      const borderCoords = [8, 14, 15, 16, 17, 8].map(
        (id) => { const w = PLAN1_WAYPOINTS.find(p => p.id === id); return [w.lat, w.lng]; }
      );
      Leaflet.polyline(borderCoords, {
        color: "#FF5533", weight: 3, opacity: 0.85, dashArray: "6 4"
      }).addTo(map);

      // Kaza → Manali (Return)
      const returnCoords = [8, 18].map(
        (id) => { const w = PLAN1_WAYPOINTS.find(p => p.id === id); return [w.lat, w.lng]; }
      );
      Leaflet.polyline(returnCoords, {
        color: "#F59E0B", weight: 3, opacity: 0.85, dashArray: "8 5"
      }).addTo(map);

      // Manali → Sonipat return line
      const delhiLine = [18, 19].map(
        (id) => { const w = PLAN1_WAYPOINTS.find(p => p.id === id); return [w.lat, w.lng]; }
      );
      Leaflet.polyline(delhiLine, {
        color: "#6366F1", weight: 2, opacity: 0.6, dashArray: "4 8"
      }).addTo(map);

      // Add markers
      PLAN1_WAYPOINTS.forEach((wp) => {
        const cfg = TYPE_CONFIG[wp.type] || TYPE_CONFIG.town;
        const isKey = [2, 6, 8, 9, 15, 16, 17].includes(wp.id);
        const size = isKey ? 14 : 10;

        const htmlContent = wp.isFuelStation
          ? `<div style="
              width:22px; height:22px;
              background:#EF4444;
              border: 2px solid white;
              border-radius:50%;
              box-shadow: 0 2px 6px rgba(0,0,0,0.35);
              cursor:pointer;
              display:flex;
              align-items:center;
              justify-content:center;
              font-size:11px;
            ">⛽</div>`
          : `<div style="
              width:${size}px; height:${size}px;
              background:${cfg.color};
              border: 2.5px solid white;
              border-radius:50%;
              box-shadow: 0 2px 6px rgba(0,0,0,0.35);
              cursor:pointer;
            "></div>`;

        const icon = Leaflet.divIcon({
          className: "",
          html: htmlContent,
          iconSize: wp.isFuelStation ? [22, 22] : [size, size],
          iconAnchor: wp.isFuelStation ? [11, 11] : [size / 2, size / 2],
        });

        const marker = Leaflet.marker([wp.lat, wp.lng], { icon })
          .addTo(map)
          .bindTooltip(`<strong>${wp.name}</strong><br/><span style="color:#888;font-size:11px">${wp.alt} · ${wp.date}</span>`, {
            permanent: false,
            direction: "top",
            offset: [0, -8],
          });

        marker.on("click", () => setSelected(wp));
        markersRef.current.push(marker);
      });

      leafletMapRef.current = map;
      setMapLoaded(true);
    });

    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, []);

  const flyTo = (wp) => {
    if (leafletMapRef.current) {
      leafletMapRef.current.flyTo([wp.lat, wp.lng], 12, { animate: true, duration: 1.2 });
    }
    setSelected(wp);
  };

  const resetView = () => {
    if (leafletMapRef.current) {
      leafletMapRef.current.flyTo([32.1, 77.8], 8, { animate: true, duration: 1.2 });
    }
    setSelected(null);
  };

  return (
    <section id="routemap" className="scroll-mt-20">
      {/* Header */}
      <div className="bg-[#F5F0E8] py-8 border-b border-black/8">
        <Container>
          <p className="text-[9px] font-black font-mono uppercase tracking-widest text-amber-600 mb-1">Route Map</p>
          <h2 className="text-3xl font-black uppercase tracking-tight mb-2 text-black" style={{ fontFamily: "'Anton', sans-serif" }}>
            Spiti Valley Route
          </h2>
          <p className="text-xs text-slate-500 max-w-xl">
            Interactive route map — 20 Aug (Sonipat) → 25 Aug (Delhi). Click any marker or waypoint card to explore.
          </p>

          {/* Day legend */}
          <div className="flex flex-wrap gap-4 mt-5">
            {DAY_COLORS.map(d => (
              <div key={d.label} className="flex items-center gap-1.5">
                <div className="w-8 h-1 rounded-full" style={{ backgroundColor: d.color }} />
                <span className="text-[10px] font-mono text-slate-500">{d.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Map + Sidebar */}
      <div className="flex flex-col lg:flex-row" style={{ height: "600px" }}>
        {/* Leaflet Map */}
        <div className="relative flex-1">
          <div ref={mapRef} style={{ width: "100%", height: "100%" }} />

          {!mapLoaded && (
            <div className="absolute inset-0 bg-[#F5F0E8] flex items-center justify-center">
              <div className="text-center">
                <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                <p className="text-xs font-mono text-slate-500">Loading map…</p>
              </div>
            </div>
          )}

          {/* Zoom controls */}
          <div className="absolute top-4 right-4 z-[999] flex flex-col gap-1">
            <button
              onClick={() => leafletMapRef.current?.zoomIn()}
              className="w-9 h-9 bg-white rounded-xl shadow-md flex items-center justify-center hover:bg-slate-50 border border-black/10"
            >
              <ZoomIn size={15} className="text-slate-600" />
            </button>
            <button
              onClick={() => leafletMapRef.current?.zoomOut()}
              className="w-9 h-9 bg-white rounded-xl shadow-md flex items-center justify-center hover:bg-slate-50 border border-black/10"
            >
              <ZoomOut size={15} className="text-slate-600" />
            </button>
            <button
              onClick={resetView}
              className="w-9 h-9 bg-white rounded-xl shadow-md flex items-center justify-center hover:bg-slate-50 border border-black/10 mt-1"
              title="Reset view"
            >
              <Locate size={15} className="text-slate-600" />
            </button>
          </div>
        </div>

        {/* Sidebar — waypoint list */}
        <div className="w-full lg:w-72 bg-[#F5F0E8] border-t lg:border-t-0 lg:border-l border-black/8 overflow-y-auto">
          <div className="p-4">
            <p className="text-[9px] font-black font-mono uppercase tracking-widest text-slate-400 mb-3">Waypoints · {PLAN1_WAYPOINTS.length} Stops</p>
            <div className="space-y-1">
              {PLAN1_WAYPOINTS.map((wp, idx) => {
                const cfg = TYPE_CONFIG[wp.type] || TYPE_CONFIG.town;
                const isActive = selected?.id === wp.id;
                return (
                  <div key={wp.id} className="relative">
                    {idx > 0 && (
                      <div className="flex items-center pl-7 py-0.5 gap-1 text-[9px] font-black font-mono text-slate-400">
                        <span className="w-1 border-l-2 border-black/10 border-dashed h-3 mr-1" />
                        <span>↓ {wp.dist}</span>
                      </div>
                    )}
                    <button
                      onClick={() => flyTo(wp)}
                      className={`w-full text-left px-3 py-2.5 rounded-[14px] transition-all flex items-center gap-3 group ${
                        isActive
                          ? "bg-black text-white"
                          : "bg-white/60 hover:bg-white border border-transparent hover:border-black/10"
                      }`}
                    >
                      <div
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: isActive ? "white" : cfg.color }}
                      />
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs font-bold truncate ${isActive ? "text-white" : "text-black"} flex items-center gap-1.5`}>
                          {wp.name}
                          {wp.isFuelStation && <span className="text-[10px] shrink-0" title="Fuel Station">⛽</span>}
                        </p>
                        <p className={`text-[9px] font-mono truncate ${isActive ? "text-white/60" : "text-slate-400"}`}>
                          {wp.date} · {wp.alt}
                        </p>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Selected place detail bar */}
      {selected && (
        <div className="bg-black text-white px-6 py-4">
          <Container>
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: TYPE_CONFIG[selected.type]?.bg }}
                >
                  <MapPin size={16} style={{ color: TYPE_CONFIG[selected.type]?.color }} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="font-extrabold text-sm">{selected.name}</h3>
                    <span
                      className="text-[9px] font-black font-mono uppercase px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: TYPE_CONFIG[selected.type]?.color + "33", color: TYPE_CONFIG[selected.type]?.color }}
                    >
                      {TYPE_CONFIG[selected.type]?.label}
                    </span>
                  </div>
                  <p className="text-[11px] text-white/60">{selected.date} · {selected.alt}</p>
                  <p className="text-xs text-white/80 mt-1">{selected.desc}</p>
                </div>
              </div>
              <button onClick={() => setSelected(null)} className="text-white/40 hover:text-white text-lg leading-none shrink-0">×</button>
            </div>
          </Container>
        </div>
      )}
    </section>
  );
}
