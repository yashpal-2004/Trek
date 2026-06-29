import React from "react";
import { Compass, Calendar, ArrowRight, Wallet, MapPin, Sparkles } from "lucide-react";

export default function Landing() {
  const plans = [
    {
      id: "plan1",
      title: "Plan 1",
      subtitle: "9-Day Himalayan Expedition",
      description: "Includes Rudranath Trek, Tungnath, Chandrashila, Kartik Swami, and Rishikesh River Rafting on return.",
      duration: "2 Jul – 10 Jul",
      budget: "₹9.9K",
      path: "/plan1",
      badge: "Popular",
    },
    {
      id: "plan2",
      title: "Plan 2",
      subtitle: "Himalayan Expedition (Customizable)",
      description: "A replica of the main expedition plan to customize, tweak routes, or modify dates as you go.",
      duration: "2 Jul – 10 Jul",
      budget: "₹9.9K",
      path: "/plan2",
      badge: "Sandbox",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between selection:bg-primary/30 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="border-b border-white/5 py-6 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
              <Compass size={18} className="text-white animate-spin-slow" />
            </div>
            <span className="font-bold tracking-tight text-lg bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Garhwal Portal</span>
          </div>
          <span className="text-xs text-slate-500 font-mono tracking-wider uppercase bg-white/5 px-3 py-1.5 rounded-full border border-white/5">v1.1.0</span>
        </div>
      </header>

      {/* Hero / Portal Selection */}
      <main className="max-w-5xl mx-auto px-6 py-12 md:py-24 flex flex-col items-center justify-center flex-grow text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-semibold mb-6 animate-pulse">
          <Sparkles size={14} />
          Choose Your Expedition Plan
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent leading-tight max-w-3xl">
          Uttarakhand Garhwal Adventure Portal
        </h1>
        
        <p className="text-slate-400 text-lg max-w-2xl mb-16 leading-relaxed">
          Select one of the interactive planning dashboards below. Both feature full budget calculators, day-by-day maps, packing guides, and expense trackers.
        </p>

        {/* Plan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl text-left">
          {plans.map((plan) => (
            <a
              key={plan.id}
              href={plan.path}
              className="group bg-slate-900/60 hover:bg-slate-900 border border-white/5 hover:border-primary/30 rounded-3xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-primary/5 flex flex-col justify-between"
            >
              {/* Highlight gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/20 transition-all duration-300">
                    <Compass size={22} className="text-slate-300 group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-xs font-bold font-mono text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 uppercase tracking-wider">
                    {plan.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{plan.title}</h3>
                <h4 className="text-sm font-semibold text-slate-300 mb-4">{plan.subtitle}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">{plan.description}</p>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Calendar size={14} className="text-primary" />
                    <span>{plan.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Wallet size={14} className="text-accent" />
                    <span>{plan.budget}</span>
                  </div>
                </div>
                
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <ArrowRight size={16} className="text-slate-300 group-hover:text-white transition-colors" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-xs text-slate-600">
        <p>© 2026 Garhwal Expedition Planner. Built with premium design standards.</p>
      </footer>
    </div>
  );
}
