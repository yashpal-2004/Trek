import React from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Wallet, Activity, TrendingUp, Route, ChevronDown, Map, Download } from "lucide-react";
import { trip } from "../../data/trip";
import { scrollToSection } from "../../utils/helpers";
import Button from "../common/Button";
import Card from "../common/Card";

const heroCards = [
  { icon: Calendar, label: "Duration", value: trip.duration },
  { icon: Users, label: "People", value: `${trip.people} Travelers` },
  { icon: Wallet, label: "Budget", value: `₹${trip.budgetMin / 1000}K–${trip.budgetMax / 1000}K` },
  { icon: Activity, label: "Difficulty", value: trip.difficulty },
  { icon: TrendingUp, label: "Altitude", value: trip.highestAltitude },
  { icon: Route, label: "Trek Distance", value: trip.totalTrekDistance },
];

export default function Hero() {
  const isPlan2 = typeof window !== "undefined" && window.location.pathname.includes("plan2");
  const subtitleText = isPlan2 
    ? "General coach transit, direct Sagar Village approach, and standard Himalayan treks."
    : "Sleeper coach transit, transit rest breaks, and classic Himalayan treks.";

  return (
    <section className="relative min-h-screen bg-[#f2efe9] text-black overflow-hidden flex flex-col justify-between py-12">
      {/* Mountain Illustration Layer */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <img
          src="/mountain_clay_peak.png"
          alt="Garhwal Mountain Peak"
          className="w-full max-w-[650px] object-contain opacity-75 md:opacity-85 translate-y-[-10%] md:translate-y-[-5%]"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10 text-center pt-24 my-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-black/5 border border-black/10 text-xs font-bold font-mono tracking-wider uppercase mb-6">
            {trip.duration} · Uttarakhand Expedition
          </span>
          
          <h1 
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-black tracking-tighter leading-none mb-6 uppercase text-black/90 select-none"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            {isPlan2 ? "PLAN TWO" : "PLAN ONE"}
          </h1>
          
          <p className="text-base md:text-lg text-slate-600 max-w-xl mx-auto mb-10 font-medium">
            {subtitleText}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => scrollToSection("itinerary")}
              className="inline-flex items-center gap-2 bg-black hover:bg-black/90 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all shadow-md hover:scale-102"
            >
              <Map size={16} />
              View Itinerary
            </button>
            <button
              onClick={() => scrollToSection("budget")}
              className="inline-flex items-center gap-2 bg-white hover:bg-black/5 text-black text-sm font-semibold px-6 py-3 rounded-xl border border-black/15 transition-all shadow-sm hover:scale-102"
            >
              Explore Budget
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-black/40 flex justify-center mt-4 cursor-pointer"
        onClick={() => scrollToSection("overview")}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
