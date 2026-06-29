import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Landing() {
  const plans = [
    {
      id: "plan1",
      title: "Plan 1",
      duration: "2 Jul – 10 Jul",
      features: "Rudranath Trek + Chandrashila + Rishikesh Rafting",
      path: "/plan1",
    },
    {
      id: "plan2",
      title: "Plan 2",
      duration: "2 Jul – 10 Jul",
      features: "Himalayan Sandbox (Customizable)",
      path: "/plan2",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f2efe9] text-black selection:bg-black/10 flex flex-col justify-between relative overflow-hidden font-sans">
      
      {/* Header */}
      <header className="w-full py-8 px-6 md:px-12 flex justify-between items-center z-20">
        <a href="/" className="font-extrabold text-xl tracking-tight uppercase hover:opacity-75 transition-opacity">
          Trek.
        </a>
        <div className="flex gap-8 text-xs font-semibold uppercase tracking-widest text-black/75">
          <a href="/plan1" className="hover:text-black transition-colors">Plan 1</a>
          <a href="/plan2" className="hover:text-black transition-colors">Plan 2</a>
          <a href="https://github.com/yashpal-2004/Trek" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Github</a>
        </div>
      </header>

      {/* Main Hero Visual Area */}
      <main className="flex-grow flex flex-col justify-center items-center relative py-12 md:py-24 px-6 z-10">
        
        {/* Large Textured Peak Image - Antler style placement */}
        <div className="absolute w-[80%] md:w-[60%] lg:w-[45%] max-w-[650px] aspect-square flex items-center justify-center select-none pointer-events-none opacity-90 transition-transform duration-700 hover:scale-105">
          <img 
            src="/mountain_clay_peak.png" 
            alt="Mountain Clay Peak" 
            className="w-full h-full object-contain mix-blend-multiply"
          />
        </div>

        {/* Overlaid Editorial Typography */}
        <div className="text-center select-none pointer-events-none z-20 leading-[0.85] tracking-tight uppercase mix-blend-difference invert">
          <h1 
            className="text-[12vw] sm:text-[10vw] md:text-[9vw] font-black"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            WE'RE OBSESSED
          </h1>
          <h1 
            className="text-[12vw] sm:text-[10vw] md:text-[9vw] font-black mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            WITH THE PEAKS
          </h1>
        </div>

        {/* Minimal Selection Portal Overlay */}
        <div className="mt-16 w-full max-w-xl z-30 flex flex-col sm:flex-row gap-4 px-4">
          {plans.map((plan) => (
            <a
              key={plan.id}
              href={plan.path}
              className="flex-1 bg-white/70 hover:bg-white border border-black/5 hover:border-black/30 rounded-2xl p-6 backdrop-blur-md shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold font-mono tracking-wider text-black/55 uppercase">{plan.duration}</span>
                  <ArrowUpRight size={18} className="text-black/45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <h3 className="text-lg font-extrabold tracking-tight text-black mb-1">{plan.title}</h3>
                <p className="text-xs text-black/65 leading-relaxed">{plan.features}</p>
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center text-[10px] font-semibold uppercase tracking-widest text-black/45 z-20">
        <span>© 2026 Trek Expedition Studio.</span>
        <span className="mt-2 sm:mt-0">Garhwal Himalayas, Uttarakhand, India.</span>
      </footer>
    </div>
  );
}
