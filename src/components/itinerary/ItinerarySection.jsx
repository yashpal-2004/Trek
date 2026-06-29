import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown, MapPin, Clock, Wallet, Train, AlertTriangle, Lightbulb,
  CheckCircle2, Circle, Bed, Utensils, Mountain, Waves, Tent, Footprints,
  Compass, Calendar, CloudRain, Search
} from "lucide-react";
import { itinerary } from "../../data/itinerary";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { STORAGE_KEYS } from "../../data/trip";
import { formatCurrency } from "../../utils/currency";
import { filterBySearch } from "../../utils/helpers";
import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";
import Badge from "../common/Badge";

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
  const formattedDayNum = String(day.id).padStart(2, "0");

  return (
    <div 
      className={cn(
        "rounded-[24px] border transition-all duration-300 overflow-hidden",
        isOpen 
          ? "bg-white border-black/20 shadow-[0_10px_30px_rgba(0,0,0,0.03)]" 
          : "bg-white/60 border-black/10 hover:border-black/20"
      )}
    >
      {/* Header Panel */}
      <div className="flex items-center justify-between p-5 md:p-6 gap-4">
        {/* Toggle Complete Checkbox */}
        <button
          type="button"
          onClick={onToggleComplete}
          className="shrink-0 text-slate-400 hover:text-black transition-colors"
          aria-label={isCompleted ? "Mark incomplete" : "Mark complete"}
        >
          {isCompleted ? (
            <CheckCircle2 size={24} className="text-black fill-black/5" />
          ) : (
            <Circle size={24} className="text-black/15" />
          )}
        </button>

        {/* Content Toggle Button */}
        <button
          type="button"
          onClick={onToggle}
          className="flex-1 min-w-0 text-left flex items-center gap-4 cursor-pointer"
          aria-expanded={isOpen}
        >
          {/* Large Anton Day Number */}
          <div 
            className="text-4xl md:text-5xl font-black text-black/15 tracking-tighter shrink-0 select-none"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            {formattedDayNum}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-[10px] font-bold font-mono tracking-wider text-slate-400 uppercase bg-black/5 px-2 py-0.5 rounded-md">
                {day.date} · {day.weekday}
              </span>
              {isCompleted && <span className="text-[10px] font-bold font-mono bg-black text-white px-2 py-0.5 rounded-md">Completed</span>}
            </div>
            
            <h3 className="font-extrabold text-base md:text-lg text-black/90 hover:text-black transition-colors">
              {day.title}
            </h3>

            {/* Quick Summary Badges */}
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-slate-500 font-semibold">
              <span className="flex items-center gap-1.5"><Compass size={13} />{day.travelMode}</span>
              <span className="flex items-center gap-1.5"><Clock size={13} />{day.travelTime}</span>
              <span className="flex items-center gap-1.5"><Wallet size={13} />{day.estimatedCost === 0 ? "Free" : formatCurrency(day.estimatedCost)}</span>
            </div>
          </div>
        </button>

        {/* Accordion Arrow */}
        <button
          onClick={onToggle}
          className={cn(
            "w-9 h-9 rounded-xl border border-black/10 flex items-center justify-center hover:bg-black/5 transition-all shrink-0",
            isOpen ? "rotate-180 bg-black/5" : "bg-transparent"
          )}
        >
          <ChevronDown size={16} />
        </button>
      </div>

      {/* Expanded Body details */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-black/5"
          >
            <div className="p-6 md:p-8 bg-black/[0.01] space-y-6">
              
              {/* Overview text */}
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {day.overview}
              </p>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: "Distance", value: day.distance, icon: Compass },
                  { label: "Trek", value: day.trekDistance, icon: Footprints },
                  { label: "Altitude", value: day.highestAltitude, icon: Mountain },
                  { label: "Weather", value: day.weather, icon: CloudRain },
                ].map(({ label, value, icon: StatIcon }) => (
                  <div key={label} className="bg-white border border-black/5 rounded-2xl p-4 shadow-sm flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-black/5 flex items-center justify-center text-black/60 shrink-0">
                      <StatIcon size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider leading-none mb-1">{label}</p>
                      <p className="text-sm font-extrabold text-black/85 leading-none">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Staggered Content Row (Left Timeline, Right Stay info) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Timeline Box */}
                <div className="bg-white border border-black/5 rounded-2xl p-5 md:p-6 shadow-sm">
                  <h4 className="font-extrabold text-sm text-black mb-5 flex items-center gap-2 border-b border-black/5 pb-3">
                    <Clock size={16} /> Today's Timeline
                  </h4>
                  <div className="relative pl-5 border-l border-black/10 space-y-5 ml-1">
                    {day.activities.map((act, i) => (
                      <div key={i} className="relative">
                        {/* Timeline Node Ring */}
                        <span className="absolute -left-[25px] top-1 w-2.5 h-2.5 rounded-full border border-white bg-black ring-4 ring-black/5" />
                        
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1.5">
                          <span className="text-[10px] font-bold font-mono text-slate-500 bg-black/5 px-2 py-0.5 rounded-md inline-block w-fit">{act.time}</span>
                          <div className="flex-1">
                            <p className="text-sm font-bold text-black/85">{act.title}</p>
                            {act.description && <p className="text-xs text-slate-500 mt-0.5 leading-relaxed font-medium">{act.description}</p>}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Logistics Box (Stay & Food & Warnings) */}
                <div className="space-y-4">
                  
                  {/* Stay & Food Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white border border-black/5 rounded-2xl p-5 shadow-sm flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-black/5 flex items-center justify-center text-black/60 shrink-0">
                        <Bed size={18} />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Stay Option</h5>
                        <p className="text-sm font-extrabold text-black/85 leading-snug">{day.stay}</p>
                        <p className="text-[10px] text-slate-400 font-mono mt-0.5">Budget: {day.stayCost === 0 ? "Free" : formatCurrency(day.stayCost)}</p>
                      </div>
                    </div>

                    <div className="bg-white border border-black/5 rounded-2xl p-5 shadow-sm flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-black/5 flex items-center justify-center text-black/60 shrink-0">
                        <Utensils size={18} />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Food Stops</h5>
                        <p className="text-sm font-extrabold text-black/85 leading-snug">{day.food}</p>
                        <p className="text-[10px] text-slate-400 font-mono mt-0.5">Meals: {day.foodCost === 0 ? "Free" : formatCurrency(day.foodCost)}</p>
                      </div>
                    </div>
                  </div>

                  {/* Pro Tip or Warnings Banner */}
                  {(day.tips?.length > 0 || day.warnings?.length > 0) && (
                    <div className="bg-white border border-black/5 rounded-2xl p-5 shadow-sm space-y-3">
                      {day.warnings?.length > 0 && (
                        <div className="flex gap-3">
                          <AlertTriangle size={18} className="text-red-500 shrink-0 mt-0.5" />
                          <div>
                            <h5 className="text-xs font-bold text-red-600 uppercase tracking-wider">Advisory Warnings</h5>
                            <ul className="list-disc pl-4 text-xs text-slate-500 font-medium mt-1 space-y-1">
                              {day.warnings.map((w, idx) => <li key={idx}>{w}</li>)}
                            </ul>
                          </div>
                        </div>
                      )}
                      
                      {day.tips?.length > 0 && (
                        <div className="flex gap-3 pt-2 border-t border-black/5">
                          <Lightbulb size={18} className="text-amber-500 shrink-0 mt-0.5" />
                          <div>
                            <h5 className="text-xs font-bold text-amber-600 uppercase tracking-wider">Local Pro Tips</h5>
                            <ul className="list-disc pl-4 text-xs text-slate-500 font-medium mt-1 space-y-1">
                              {day.tips.map((t, idx) => <li key={idx}>{t}</li>)}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                </div>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ItinerarySection() {
  const [completedDays, setCompletedDays] = useLocalStorage(STORAGE_KEYS.completedDays, []);
  const [search, setSearch] = useState("");
  const [openDays, setOpenDays] = useState([1]); // First day open by default

  const toggleDay = (dayId) => {
    setOpenDays((prev) =>
      prev.includes(dayId) ? prev.filter((id) => id !== dayId) : [...prev, dayId]
    );
  };

  const toggleComplete = (dayId) => {
    setCompletedDays((prev) =>
      prev.includes(dayId) ? prev.filter((id) => id !== dayId) : [...prev, dayId]
    );
  };

  const expandAll = () => setOpenDays(itinerary.map((d) => d.id));
  const collapseAll = () => setOpenDays([]);

  const filteredItinerary = filterBySearch(itinerary, search, [
    "title", "overview", "travelMode", "stay", "food"
  ]);

  return (
    <section id="itinerary" className="py-20 md:py-28 bg-[#f2efe9] scroll-mt-20">
      <Container>
        <SectionTitle
          label="Expedition Path"
          title="Complete Itinerary"
          description="A day-by-day blueprint of activities, elevations, and transits."
        />

        {/* Filter controls */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8 max-w-4xl mx-auto no-print">
          
          {/* Custom Search Input */}
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search itinerary (destinations, modes, stay)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-black/10 bg-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-black/5"
            />
          </div>

          <div className="flex gap-2 w-full sm:w-auto shrink-0 justify-end">
            <button
              onClick={expandAll}
              className="px-4 py-2 rounded-xl border border-black/10 bg-white hover:bg-black/5 text-xs font-bold transition-all"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-4 py-2 rounded-xl border border-black/10 bg-white hover:bg-black/5 text-xs font-bold transition-all"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Days List Stack */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {filteredItinerary.length === 0 ? (
            <div className="text-center py-16 bg-white/50 border border-black/10 rounded-[24px]">
              <Calendar size={48} className="mx-auto text-slate-400 mb-4" />
              <p className="text-slate-500 font-medium">No days match your search filters.</p>
            </div>
          ) : (
            filteredItinerary.map((day) => (
              <DayCard
                key={day.id}
                day={day}
                isOpen={openDays.includes(day.id)}
                onToggle={() => toggleDay(day.id)}
                isCompleted={completedDays.includes(day.id)}
                onToggleComplete={() => toggleComplete(day.id)}
              />
            ))
          )}
        </div>
      </Container>
    </section>
  );
}

// Custom simple classnames helper
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
