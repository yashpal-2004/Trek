import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Landing() {
  const plans = [
    {
      id: "plan1",
      title: "Plan 1",
      duration: "2 Jul – 10 Jul",
      features: "Rudranath Trek + Chandrashila + Rishikesh",
      path: "/plan1",
    },
    {
      id: "plan2",
      title: "Plan 2",
      duration: "3 Jul – 9 Jul",
      features: "General Train + Direct Sagar Village + Rishikesh",
      path: "/plan2",
    },
  ];

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#f2efe9] text-black selection:bg-black/10 flex flex-col justify-between relative font-sans">
      
      {/* Header */}
      <header className="w-full py-6 px-6 md:px-12 flex justify-between items-center z-30">
        <a href="/" className="font-extrabold text-xl tracking-tight uppercase hover:opacity-75 transition-opacity">
          Trek.
        </a>
      </header>

      {/* Main Hero Visual Area */}
      <main className="flex-grow flex flex-col justify-center items-center relative px-6 z-10 overflow-hidden">
        
        {/* Large Textured Peak Image - Behind the text */}
        <div className="absolute w-[80%] md:w-[50%] lg:w-[40%] max-w-[500px] aspect-square flex items-center justify-center select-none pointer-events-none opacity-85 z-10">
          <img 
            src="/mountain_clay_peak.png" 
            alt="Mountain Clay Peak" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Overlaid Editorial Typography - Semi-Transparent Black */}
        <div className="text-center select-none pointer-events-none z-20 leading-[0.85] tracking-tight uppercase text-black/90 opacity-[0.92]">
          <h1 
            className="text-[12vw] sm:text-[9vw] md:text-[8vw] font-black"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            WE'RE OBSESSED
          </h1>
          <h1 
            className="text-[12vw] sm:text-[9vw] md:text-[8vw] font-black mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            WITH THE PEAKS
          </h1>
        </div>


        {/* Minimal Selection Portal Overlay */}
        <div className="mt-8 w-full max-w-xl z-30 flex flex-col sm:flex-row gap-4 px-4">
          {plans.map((plan) => (
            <a
              key={plan.id}
              href={plan.path}
              className="flex-1 bg-white/70 hover:bg-white border border-black/5 hover:border-black/30 rounded-2xl p-5 backdrop-blur-md shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold font-mono tracking-wider text-black/55 uppercase">{plan.duration}</span>
                  <ArrowUpRight size={16} className="text-black/45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <h3 className="text-md font-extrabold tracking-tight text-black mb-1">{plan.title}</h3>
                <p className="text-[11px] text-black/65 leading-relaxed">{plan.features}</p>
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center text-[10px] font-semibold uppercase tracking-widest text-black/45 z-30">
        <span>© 2026 Trek Expedition Studio.</span>
        <span className="mt-2 sm:mt-0">Garhwal Himalayas, Uttarakhand, India.</span>
      </footer>
    </div>
  );
}
