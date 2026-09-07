import { useEffect, useRef, useState } from "react";
import Container from "../layout/Container";
import { MapPin, Navigation, Info, ZoomIn, ZoomOut, Locate, Calendar, Route } from "lucide-react";

// Real GPS waypoints for Varanasi trip
const VARANASI_WAYPOINTS = [
  { id: 1,  name: "Delhi (NDLS / DLI)",              lat: 28.6139, lng: 77.2090, alt: "214m", type: "start", date: "Sun 11:30 PM", color: "#4F46E5", desc: "Starting point — Board Amrit Bharat Express train (00:05 AM)", dist: "0 km" },
  { id: 2,  name: "Varanasi Junction (BSB)",          lat: 25.3262, lng: 82.9866, alt: "81m",  type: "station",date: "Mon 12:00 PM", color: "#2563EB", desc: "Arrival at Varanasi railway station. Auto/Rickshaw to Ramaya Homestay.", dist: "780 km" },
  { id: 15, name: "Ramaya Homestay (Base Stay)",     lat: 25.320478, lng: 83.014451, alt: "81m", type: "stay",  date: "Base Homestay",color: "#8B5CF6", desc: "Ramaya Homestay base stay — Excellent location near Kal Bhairav & Kashi Vishwanath Dham!", dist: "781 km" },
  { id: 3,  name: "Kal Bhairav Mandir",               lat: 25.3190, lng: 83.0118, alt: "81m",  type: "temple", date: "Mon 01:30 PM", color: "#F97316", desc: "Kotwal of Kashi — Traditional mandatory blessings before entering Kashi (Just 200m from Ramaya Homestay!).", dist: "783 km" },
  { id: 4,  name: "Kashi Vishwanath Temple",          lat: 25.3109, lng: 83.0107, alt: "81m",  type: "temple", date: "Mon 03:00 PM", color: "#F97316", desc: "Holiest Shiva Jyotirlinga & grand Kashi Vishwanath Dham Corridor.", dist: "785 km" },
  { id: 5,  name: "Lalita Ghat & Nepali Temple",      lat: 25.3113, lng: 83.0125, alt: "81m",  type: "ghat",   date: "Mon 04:30 PM", color: "#10B981", desc: "Corridor Exit to Ganges riverbank & wooden Kathmandu-style Pagoda temple.", dist: "786 km" },
  { id: 6,  name: "Manikarnika Ghat",                 lat: 25.3108, lng: 83.0138, alt: "81m",  type: "ghat",   date: "Mon 05:15 PM", color: "#10B981", desc: "Sacred eternal cremation ghat of Kashi.", dist: "787 km" },
  { id: 7,  name: "Dashashwamedh Ghat",               lat: 25.3069, lng: 83.0104, alt: "81m",  type: "ghat",   date: "Mon 06:45 PM", color: "#EAB308", desc: "Grand Evening Ganga Aarti ceremony viewed from boat.", dist: "788 km" },
  { id: 8,  name: "Lalita Ghat 3D Laser Light Show", lat: 25.3113, lng: 83.0125, alt: "81m",  type: "show",   date: "Mon 07:30 PM", color: "#EC4899", desc: "FREE 3D Laser Projection Mapping show on Vishwanath Corridor facade.", dist: "789 km" },
  { id: 9,  name: "Assi Ghat Subah-e-Banaras",        lat: 25.2905, lng: 83.0064, alt: "81m",  type: "ghat",   date: "Tue 05:30 AM", color: "#10B981", desc: "05:30 AM Morning classical music, Vedic chants & sunrise boat ride across 84 ghats.", dist: "792 km" },
  { id: 10, name: "Shree Durga Mata Mandir",          lat: 25.2858, lng: 82.9998, alt: "81m",  type: "temple", date: "Tue 09:30 AM", color: "#F97316", desc: "Vibrant 18th-century red-stone Durga Kund Temple.", dist: "795 km" },
  { id: 11, name: "BHU New Vishwanath Temple (VT)",   lat: 25.2677, lng: 82.9913, alt: "81m",  type: "temple", date: "Tue 10:30 AM", color: "#F97316", desc: "Lush green university campus & Asia's tallest temple tower (VT cold coffee!).", dist: "798 km" },
  { id: 12, name: "Namo Ghat Sunset",                 lat: 25.3282, lng: 83.0315, alt: "81m",  type: "ghat",   date: "Tue 05:00 PM", color: "#10B981", desc: "Modern riverfront & giant illuminated Namaste sculptures at sunset.", dist: "808 km" },
  { id: 13, name: "Banaras Station (BNRS)",           lat: 25.2954, lng: 82.9678, alt: "81m",  type: "station",date: "Wed 11:30 AM", color: "#2563EB", desc: "Board Kashi V Nath Exp return train at 1:30 PM.", dist: "815 km" },
  { id: 14, name: "New Delhi Return (NDLS)",          lat: 28.6139, lng: 77.2090, alt: "214m", type: "start",   date: "Thu 05:45 AM", color: "#4F46E5", desc: "Arrive back in Delhi at 05:45 AM.", dist: "1600 km" },
];

const TYPE_CONFIG = {
  start:   { color: "#4F46E5", bg: "#EEF2FF", label: "Delhi Start / Return" },
  stay:    { color: "#8B5CF6", bg: "#F5F3FF", label: "Ramaya Homestay" },
  station: { color: "#2563EB", bg: "#DBEAFE", label: "Railway Station" },
  temple:  { color: "#F97316", bg: "#FFEDD5", label: "Sacred Temple" },
  ghat:    { color: "#10B981", bg: "#D1FAE5", label: "Ganga Ghat" },
  show:    { color: "#EC4899", bg: "#FCE7F3", label: "Laser Light Show" },
};

const LEGEND_ITEMS = [
  { label: "Delhi ↔ Varanasi Transit", color: "#4F46E5" },
  { label: "Day 1: Bhairav, Corridor, Ghats & Light Show", color: "#F97316" },
  { label: "Day 2: Sunrise Assi, Durga Kund, BHU & Namo Ghat", color: "#10B981" },
];

export default function VaranasiRouteMap() {
  const mapRef = useRef(null);
  const leafletMapRef = useRef(null);
  const markersRef = useRef([]);
  const [selected, setSelected] = useState(VARANASI_WAYPOINTS[3]); // Kashi Vishwanath default
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

      // Center map around Varanasi City & Ghats
      const map = Leaflet.map(mapRef.current, {
        center: [25.305, 83.01],
        zoom: 13,
        zoomControl: false,
      });

      // OpenStreetMap tiles
      Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map);

      // Day 1 Ghats & Temples Route Polyline (Orange)
      const day1Coords = [2, 3, 4, 5, 6, 7, 8].map(id => {
        const w = VARANASI_WAYPOINTS.find(p => p.id === id);
        return [w.lat, w.lng];
      });
      Leaflet.polyline(day1Coords, {
        color: "#F97316", weight: 4, opacity: 0.9
      }).addTo(map);

      // Day 2 Assi, Durga Kund, BHU & Namo Ghat Route Polyline (Green)
      const day2Coords = [9, 10, 11, 12].map(id => {
        const w = VARANASI_WAYPOINTS.find(p => p.id === id);
        return [w.lat, w.lng];
      });
      Leaflet.polyline(day2Coords, {
        color: "#10B981", weight: 4, opacity: 0.9, dashArray: "6 4"
      }).addTo(map);

      // Add markers for all waypoints
      VARANASI_WAYPOINTS.forEach((wp) => {
        if (wp.id === 1 || wp.id === 14) return; // Skip Delhi markers on city zoom

        const cfg = TYPE_CONFIG[wp.type] || TYPE_CONFIG.ghat;
        const isMajor = [3, 4, 7, 8, 9, 11, 12].includes(wp.id);
        const size = isMajor ? 14 : 10;

        const htmlContent = `<div style="
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
          iconSize: [size, size],
          iconAnchor: [size / 2, size / 2],
        });

        const marker = Leaflet.marker([wp.lat, wp.lng], { icon })
          .addTo(map)
          .bindTooltip(`<strong>${wp.name}</strong><br/><span style="color:#888;font-size:11px">${wp.date}</span>`, {
            permanent: false,
            direction: "top",
            offset: [0, -size / 2],
          });

        marker.on("click", () => setSelected(wp));
        markersRef.current.push({ id: wp.id, marker, lat: wp.lat, lng: wp.lng });
      });

      // Fit bounds to include all Varanasi points
      const vnsPoints = VARANASI_WAYPOINTS.filter(w => w.id !== 1 && w.id !== 14).map(w => [w.lat, w.lng]);
      map.fitBounds(vnsPoints, { padding: [40, 40] });

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

  const handleSelect = (wp) => {
    setSelected(wp);
    if (leafletMapRef.current && wp.lat && wp.lng) {
      leafletMapRef.current.flyTo([wp.lat, wp.lng], 15, { duration: 1.2 });
    }
  };

  const handleZoom = (delta) => {
    if (!leafletMapRef.current) return;
    const currentZoom = leafletMapRef.current.getZoom();
    leafletMapRef.current.setZoom(currentZoom + delta);
  };

  const handleReset = () => {
    if (!leafletMapRef.current) return;
    const vnsPoints = VARANASI_WAYPOINTS.filter(w => w.id !== 1 && w.id !== 14).map(w => [w.lat, w.lng]);
    leafletMapRef.current.fitBounds(vnsPoints, { padding: [40, 40] });
    setSelected(VARANASI_WAYPOINTS[3]);
  };

  return (
    <section id="routemap" className="border-b border-black/8 py-16 scroll-mt-16 bg-[#FAF8F5]">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-orange-500/10 text-orange-700 text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full border border-orange-500/20 flex items-center gap-1.5">
                <Route size={13} /> Interactive Leaflet Map
              </span>
              <span className="text-slate-500 text-xs font-mono">Real GPS Waypoints</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-slate-900" style={{ fontFamily: "'Anton', sans-serif" }}>
              Kashi Heritage Interactive Route Map
            </h2>
            <p className="text-slate-500 text-sm font-medium mt-1">
              Explore temples, ghats, light show, and transit points across Varanasi
            </p>
          </div>

          {/* Legend Items */}
          <div className="flex flex-wrap items-center gap-3 bg-white p-3 rounded-2xl border border-black/8 shadow-xs">
            {LEGEND_ITEMS.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-mono font-medium text-slate-700">
                <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Map Container Box */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Main Leaflet Map View */}
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden border border-black/10 shadow-sm bg-slate-100 h-[480px]">
            <div ref={mapRef} className="w-full h-full z-0" />

            {/* Map Controls Floating Overlay */}
            <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 bg-white/90 backdrop-blur-md p-1.5 rounded-2xl border border-black/10 shadow-md">
              <button
                onClick={() => handleZoom(1)}
                className="p-2 rounded-xl text-slate-700 hover:bg-black/5 transition-colors"
                title="Zoom In"
              >
                <ZoomIn size={18} />
              </button>
              <button
                onClick={() => handleZoom(-1)}
                className="p-2 rounded-xl text-slate-700 hover:bg-black/5 transition-colors"
                title="Zoom Out"
              >
                <ZoomOut size={18} />
              </button>
              <button
                onClick={handleReset}
                className="p-2 rounded-xl text-slate-700 hover:bg-black/5 transition-colors border-t border-black/5"
                title="Fit Route"
              >
                <Locate size={18} />
              </button>
            </div>
          </div>

          {/* Sidebar Waypoint Selector & Detail Card */}
          <div className="space-y-4">
            <div className="bg-white border border-black/10 rounded-3xl p-6 shadow-sm">
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                Select Waypoint ({VARANASI_WAYPOINTS.length - 2} Locations)
              </div>
              <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                {VARANASI_WAYPOINTS.filter(w => w.id !== 1 && w.id !== 14).map((wp) => {
                  const isSel = selected?.id === wp.id;
                  const cfg = TYPE_CONFIG[wp.type] || TYPE_CONFIG.ghat;
                  return (
                    <button
                      key={wp.id}
                      onClick={() => handleSelect(wp)}
                      className={`w-full text-left p-3 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                        isSel
                          ? "bg-orange-50 border-orange-300 ring-2 ring-orange-200/60"
                          : "bg-slate-50/70 border-black/5 hover:bg-slate-100"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-2.5 h-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: cfg.color }}
                        />
                        <span className={`text-xs font-bold ${isSel ? "text-orange-900 font-extrabold" : "text-slate-800"}`}>
                          {wp.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 shrink-0">{wp.date}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Selected Card Info */}
            {selected && (
              <div className="bg-white border border-orange-200 rounded-3xl p-6 shadow-md relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500" />
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
                    {selected.date}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">{selected.dist}</span>
                </div>
                <h3 className="text-xl font-black uppercase text-slate-900 tracking-tight" style={{ fontFamily: "'Anton', sans-serif" }}>
                  {selected.name}
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed mt-2">
                  {selected.desc}
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
