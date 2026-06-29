import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown, MapPin, Clock, Wallet, Train, AlertTriangle, Lightbulb,
  Package, Camera, ExternalLink, CheckCircle2, Circle, Bed, Utensils,
  Mountain, Waves, Tent, Footprints, Compass, Calendar, CloudRain
} from "lucide-react";
import { itinerary } from "../../data/itinerary";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { STORAGE_KEYS } from "../../data/trip";
import { formatCurrency } from "../../utils/currency";
import { filterBySearch } from "../../utils/helpers";
import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";
import SearchBar from "../common/SearchBar";
import Badge from "../common/Badge";
import Button from "../common/Button";

// Helper to choose the best icon for the day based on details
function getDayIcon(day) {
  const title = day.title.toLowerCase();
  const mode = day.travelMode.toLowerCase();
  
  if (title.includes("rafting") || mode.includes("raft")) return Waves;
  if (title.includes("trek") || title.includes("chandrashila") || title.includes("swami") || title.includes("rudranath")) return Mountain;
  if (title.includes("camp") || day.stay.toLowerCase().includes("camping") || day.stay.toLowerCase().includes("tent")) return Tent;
  if (mode.includes("train")) return Train;
  if (mode.includes("bus") || mode.includes("jeep")) return Compass;
  if (day.trekDistance !== "0 km") return Footprints;
  return MapPin;
}

function DayCard({ day, isOpen, onToggle, isCompleted, onToggleComplete }) {
  const DayIcon = getDayIcon(day);

  return (
    <div className={`bg-card rounded-[22px] border ${isOpen ? 'border-primary/30 shadow-[0_12px_40px_rgba(37,99,235,0.06)]' : 'border-border shadow-sm'} overflow-hidden transition-all duration-300`}>
      {/* Header section */}
      <div className="w-full flex items-center gap-4 p-5 md:p-6 hover:bg-gray-50/30 transition-colors">
        <button
          type="button"
          onClick={onToggleComplete}
          className="shrink-0 text-secondary hover:text-accent transition-colors"
          aria-label={isCompleted ? "Mark incomplete" : "Mark complete"}
        >
          {isCompleted ? <CheckCircle2 size={24} className="text-accent fill-accent/10" /> : <Circle size={24} className="text-gray-300" />}
        </button>
        
        <button
          type="button"
          onClick={onToggle}
          className="flex-1 min-w-0 text-left flex items-start gap-4"
          aria-expanded={isOpen}
        >
          {/* Day Icon Indicator */}
          <div className={`hidden sm:flex shrink-0 w-12 h-12 rounded-2xl items-center justify-center ${isOpen ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-secondary'} transition-colors duration-300`}>
            <DayIcon size={22} />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <Badge color={isOpen ? "primary" : "secondary"}>{day.date}</Badge>
              <span className="text-xs font-semibold text-secondary uppercase tracking-wider">{day.weekday}</span>
              {isCompleted && <Badge color="accent">Completed</Badge>}
            </div>
            <h3 className="font-bold text-lg md:text-xl text-text hover:text-primary transition-colors">{day.title}</h3>
            
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-3 text-sm text-secondary">
              <span className="flex items-center gap-1.5"><Train size={15} className="text-primary/70" />{day.travelMode}</span>
              <span className="flex items-center gap-1.5"><Clock size={15} className="text-primary/70" />{day.travelTime}</span>
              <span className="flex items-center gap-1.5"><Wallet size={15} className="text-primary/70" />{day.estimatedCost === 0 ? "Free" : formatCurrency(day.estimatedCost)}</span>
            </div>
          </div>
        </button>

        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="ml-2">
          <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center border border-border hover:bg-gray-100 transition-colors">
            <ChevronDown size={18} className="text-secondary shrink-0" />
          </div>
        </motion.div>
      </div>

      {/* Expanded details section */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-8 pb-8 border-t border-border/80 pt-6 bg-gradient-to-b from-gray-50/30 to-white">
              {/* Overview paragraph */}
              <p className="text-secondary leading-relaxed text-[15px] mb-6">{day.overview}</p>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Distance", value: day.distance, color: "from-blue-50 to-indigo-50/50 text-blue-700", icon: Compass },
                  { label: "Trek Distance", value: day.trekDistance, color: "from-emerald-50 to-teal-50/50 text-emerald-700", icon: Footprints },
                  { label: "Altitude", value: day.highestAltitude, color: "from-amber-50 to-orange-50/50 text-amber-700", icon: Mountain },
                  { label: "Weather", value: day.weather, color: "from-purple-50 to-pink-50/50 text-purple-700", icon: CloudRain },
                ].map(({ label, value, color, icon: StatIcon }) => (
                  <div key={label} className={`bg-gradient-to-tr ${color} rounded-2xl p-4 border border-white shadow-[0_2px_8px_rgba(0,0,0,0.01)]`}>
                    <div className="flex items-center gap-2 mb-1.5 opacity-90">
                      <StatIcon size={16} />
                      <p className="text-xs font-semibold uppercase tracking-wider">{label}</p>
                    </div>
                    <p className="text-base font-bold">{value}</p>
                  </div>
                ))}
              </div>

              {/* Schedule / Timeline Section */}
              <div className="bg-white rounded-2xl border border-border p-5 md:p-6 mb-6">
                <h4 className="font-bold text-base text-text mb-5 flex items-center gap-2">
                  <Clock size={18} className="text-primary" /> Today's Timeline
                </h4>
                <div className="relative pl-6 border-l-2 border-primary/20 space-y-6 ml-2">
                  {day.activities.map((act, i) => (
                    <div key={i} className="relative">
                      {/* Timeline dot */}
                      <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 border-white bg-primary shadow-sm ring-4 ring-primary/10" />
                      
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                        <span className="text-xs font-mono font-bold text-primary bg-primary/5 px-2 py-0.5 rounded-md inline-block w-fit">{act.time}</span>
                        <div className="flex-1 mt-1 sm:mt-0">
                          <p className="text-sm font-semibold text-text">{act.title}</p>
                          {act.description && <p className="text-xs text-secondary mt-0.5 leading-relaxed">{act.description}</p>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Logistics Grid (Stay & Food) */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-2xl border border-border p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <Bed size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1">Accommodation</p>
                    <p className="text-sm font-semibold text-text">{day.stay}</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-border p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                    <Utensils size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1">Food Plan</p>
                    <p className="text-sm font-semibold text-text">{day.food}</p>
                  </div>
                </div>
              </div>

              {/* Tips & Warnings Side-by-Side Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {day.warnings?.length > 0 && (
                  <div className="bg-danger/5 border border-danger/20 rounded-2xl p-5">
                    <p className="text-sm font-bold text-danger flex items-center gap-2 mb-3">
                      <AlertTriangle size={18} className="shrink-0" /> Important Warnings
                    </p>
                    <ul className="text-sm text-secondary space-y-2">
                      {day.warnings.map((w, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-danger mt-0.5">•</span>
                          <span className="leading-relaxed">{w}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {day.tips?.length > 0 && (
                  <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5">
                    <p className="text-sm font-bold text-primary flex items-center gap-2 mb-3">
                      <Lightbulb size={18} className="shrink-0" /> Insider Tips
                    </p>
                    <ul className="text-sm text-secondary space-y-2">
                      {day.tips.map((t, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span className="leading-relaxed">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Packing & Photography Tags */}
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                {day.packing?.length > 0 && (
                  <div>
                    <p className="text-xs font-bold text-secondary uppercase tracking-wider flex items-center gap-1.5 mb-2.5">
                      <Package size={14} className="text-primary/70" /> Day Packing
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {day.packing.map((p, i) => <Badge key={i} color="secondary">{p}</Badge>)}
                    </div>
                  </div>
                )}

                {day.photography?.length > 0 && (
                  <div>
                    <p className="text-xs font-bold text-secondary uppercase tracking-wider flex items-center gap-1.5 mb-2.5">
                      <Camera size={14} className="text-accent/70" /> Photo Spots
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {day.photography.map((p, i) => <Badge key={i} color="accent">{p}</Badge>)}
                    </div>
                  </div>
                )}
              </div>

              {/* Map Action Button */}
              {day.mapLink && (
                <div className="pt-2 border-t border-border/60 flex justify-end">
                  <Button variant="outline" size="sm" icon={ExternalLink} onClick={() => window.open(day.mapLink, "_blank")}>
                    Open in Google Maps
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ItinerarySection() {
  const [openId, setOpenId] = useState(1);
  const [search, setSearch] = useState("");
  const [completedDays, setCompletedDays] = useLocalStorage(STORAGE_KEYS.completedDays, []);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleToggleComplete = (id) => {
    setCompletedDays((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

  const filtered = filterBySearch(itinerary, search, ["title", "overview", "travelMode", "stay"]);

  return (
    <section id="itinerary" className="py-20 md:py-28 scroll-mt-20">
      <Container>
        <SectionTitle
          label="Day by Day"
          title="Complete Itinerary"
          description="Detailed schedule for all 10 days of your trek."
        />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <SearchBar value={search} onChange={setSearch} placeholder="Search days, destinations..." className="max-w-md w-full" />
          <div className="text-sm font-medium text-secondary">
            Progress: <span className="text-primary font-bold">{completedDays.length}</span> / {itinerary.length} Days Completed
          </div>
        </div>
        <div className="space-y-5">
          {filtered.length === 0 ? (
            <div className="text-center py-16 bg-card rounded-2xl border border-border">
              <p className="text-secondary font-medium">No days match your search query.</p>
            </div>
          ) : (
            filtered.map((day) => (
              <DayCard
                key={day.id}
                day={day}
                isOpen={openId === day.id}
                onToggle={() => handleToggle(day.id)}
                isCompleted={completedDays.includes(day.id)}
                onToggleComplete={() => handleToggleComplete(day.id)}
              />
            ))
          )}
        </div>
      </Container>
    </section>
  );
}
