import React, { useState } from "react";
import { ArrowUpRight, Calendar, Wallet, Route, MapPin, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Landing() {
  const [selectedTrip, setSelectedTrip] = useState(null);

  const trips = [
    {
      id: "garhwal",
      title: "Rudranath & Tungnath Trek",
      subtitle: "Uttarakhand, India",
      description: "A backpacking trek across the ancient temples and towering peaks of the Garhwal Himalayas.",
      stats: {
        duration: "7–9 Days",
        distance: "52–60 km Trek",
        budget: "₹8.0K–9.5K",
      },
      image: "/mountain_clay_peak.png",
      plans: [
        {
          id: "plan1",
          title: "Plan 1 (Standard Route)",
          duration: "2 Jul – 10 Jul (9 Days)",
          route: "Hisar → Haridwar → Sagar → Rudranath → Chopta → Kalpeshwar → Rishikesh → Hisar",
          details: "Includes Kalpeshwar (Panch Kedar temple) and a leisure day exploring Rishikesh ghats.",
          budget: "₹8,500 – ₹9,500",
          path: "/plan1",
        },
        {
          id: "plan2",
          title: "Plan 2 (Direct Route)",
          duration: "3 Jul – 9 Jul (7 Days)",
          route: "Hisar → Haridwar → Sagar → Rudranath → Chopta → Kartik Swami → Hisar",
          details: "Fast-paced route bypassing Rishikesh stay and going directly back to Hisar.",
          budget: "₹8,000 – ₹8,500",
          path: "/plan2",
        },
      ],
    },
    {
      id: "sikkim",
      title: "Sikkim Expedition",
      subtitle: "Sikkim, India",
      description: "Explore the ancient monasteries of Gangtok, stay in Lachen/Lachung homestays, and visit the sacred Gurudongmar Lake at 17,800 ft.",
      stats: {
        duration: "7 Days",
        distance: "15 km Walk",
        budget: "₹6.9K",
      },
      image: "/mountain_clay_peak.png",
      plans: [
        {
          id: "sikkim-std",
          title: "Standard Budget Route",
          duration: "7 Days",
          route: "Delhi → NJP → Gangtok → Lachen → Gurudongmar → Lachung → Yumthang → Gangtok → NJP → Delhi",
          details: "Shared Sumo package tour (covers North Sikkim transit, homestays, permits, and food).",
          budget: "₹6,900 / person",
          path: "/sikkim",
        }
      ],
    },
  ];

  return (
    <div className="min-h-screen w-screen bg-[#f2efe9] text-black selection:bg-black/10 flex flex-col justify-between relative font-sans">
      
      {/* Header */}
      <header className="w-full py-6 px-6 md:px-12 flex justify-between items-center z-30">
        <a href="/" className="font-extrabold text-xl tracking-tight uppercase hover:opacity-75 transition-opacity flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-black"></span>
          Treks
        </a>
      </header>

      {/* Main Content Dashboard */}
      <main className="flex-grow flex flex-col justify-start py-12 md:py-20 px-6 max-w-5xl mx-auto w-full z-10">
        
        {/* Intro */}
        <div className="mb-12">
          <span className="text-[10px] font-black font-mono tracking-widest text-slate-400 uppercase">Trip Explorer Portal</span>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mt-1" style={{ fontFamily: "'Anton', sans-serif" }}>
            Select Your Adventure
          </h1>
          <p className="text-slate-500 font-medium text-sm mt-2 max-w-md leading-relaxed">
            Browse through curated travel routes and detailed itineraries across different destinations.
          </p>
        </div>

        {/* Trips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {trips.map((trip) => (
            <div
              key={trip.id}
              onClick={() => setSelectedTrip(trip)}
              className="bg-white/60 hover:bg-white border border-black/10 hover:border-black/25 rounded-[32px] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between cursor-pointer group relative overflow-hidden"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase flex items-center gap-1.5">
                      <MapPin size={10} />
                      {trip.subtitle}
                    </span>
                    <h3 className="text-2xl font-black uppercase mt-1 tracking-tight" style={{ fontFamily: "'Anton', sans-serif" }}>
                      {trip.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-2xl border border-black/10 flex items-center justify-center bg-white group-hover:bg-black group-hover:text-white transition-colors duration-300 shrink-0">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6">
                  {trip.description}
                </p>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-black/5">
                  <div className="bg-black/[0.02] rounded-2xl p-3 text-center">
                    <Calendar size={14} className="mx-auto text-slate-400 mb-1" />
                    <p className="text-[10px] font-black uppercase text-slate-400">Days</p>
                    <p className="text-xs font-black mt-0.5">{trip.stats.duration}</p>
                  </div>
                  <div className="bg-black/[0.02] rounded-2xl p-3 text-center">
                    <Route size={14} className="mx-auto text-slate-400 mb-1" />
                    <p className="text-[10px] font-black uppercase text-slate-400">Trek</p>
                    <p className="text-xs font-black mt-0.5">{trip.stats.distance}</p>
                  </div>
                  <div className="bg-black/[0.02] rounded-2xl p-3 text-center">
                    <Wallet size={14} className="mx-auto text-slate-400 mb-1" />
                    <p className="text-[10px] font-black uppercase text-slate-400">Budget</p>
                    <p className="text-xs font-black mt-0.5">{trip.stats.budget}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Placeholder Card for future treks */}
          <div className="border-2 border-dashed border-black/10 rounded-[32px] p-8 flex flex-col justify-center items-center text-center py-16 opacity-60">
            <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center mb-3">
              <Plus size={20} className="text-slate-400" />
            </div>
            <h4 className="font-extrabold text-sm text-slate-700">More Treks Coming Soon</h4>
            <p className="text-xs text-slate-400 max-w-[200px] mt-1 leading-relaxed">
              We are working on adding details for new Himalayan routes.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center text-[10px] font-semibold uppercase tracking-widest text-black/45 z-30">
        <span>© 2026 Trip Expedition Studio.</span>
        <span className="mt-2 sm:mt-0">Premium Adventure Travel Planner.</span>
      </footer>

      {/* Plan Version Selection Modal Overlay */}
      <AnimatePresence>
        {selectedTrip && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0" onClick={() => setSelectedTrip(null)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-[#f2efe9] rounded-[36px] border border-black/10 p-6 md:p-8 max-w-2xl w-full shadow-2xl relative z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedTrip(null)}
                className="absolute right-6 top-6 w-9 h-9 rounded-xl border border-black/10 flex items-center justify-center bg-white hover:bg-black/5 transition-colors"
              >
                <X size={16} />
              </button>

              {/* Modal Header */}
              <div className="mb-6 pr-10">
                <span className="text-[10px] font-black font-mono tracking-widest text-slate-400 uppercase">{selectedTrip.subtitle}</span>
                <h3 className="text-2xl font-black uppercase tracking-tight mt-0.5" style={{ fontFamily: "'Anton', sans-serif" }}>
                  Select Plan Version
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Choose the travel plan variant that matches your timeline and budget constraints.
                </p>
              </div>

              {/* Plan Options Stack */}
              <div className="space-y-4">
                {selectedTrip.plans.map((plan) => (
                  <a
                    key={plan.id}
                    href={plan.path}
                    className="block bg-white hover:bg-white/80 border border-black/5 hover:border-black/25 rounded-2xl p-5 transition-all shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group"
                  >
                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-extrabold text-sm text-black">{plan.title}</h4>
                        <span className="text-[9px] font-bold font-mono tracking-wide text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                          {plan.duration}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 font-medium line-clamp-1">{plan.route}</p>
                      <p className="text-[11px] text-slate-400 font-medium leading-relaxed">{plan.details}</p>
                    </div>
                    
                    <div className="flex items-center gap-3 self-stretch sm:self-auto justify-between border-t sm:border-t-0 border-black/5 pt-3 sm:pt-0 shrink-0">
                      <div className="text-right">
                        <span className="text-[9px] font-bold font-mono text-slate-400 uppercase tracking-widest block leading-none">Est. Cost</span>
                        <span className="text-sm font-black text-black leading-none mt-1 inline-block">{plan.budget}</span>
                      </div>
                      <div className="w-8 h-8 rounded-xl border border-black/10 flex items-center justify-center bg-slate-50 group-hover:bg-black group-hover:text-white transition-colors shrink-0">
                        <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Simple dynamic import icon support helper
import { Plus } from "lucide-react";

