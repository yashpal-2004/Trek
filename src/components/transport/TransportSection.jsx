import React, { useState } from "react";
import { Train, Bus, Footprints, Waves, Car, Copy, ExternalLink, ArrowRight, Check } from "lucide-react";
import { transport, transportModes } from "../../data/transport";
import { formatCurrency } from "../../utils/currency";
import { filterBySearch, copyToClipboard } from "../../utils/helpers";
import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";

const modeIcons = { 
  Train, 
  Bus, 
  Trek: Footprints, 
  Raft: Waves, 
  Auto: Car, 
  "Shared Jeep": Car 
};

function TransportCard({ item }) {
  const Icon = modeIcons[item.mode] || Bus;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = `${item.from} → ${item.to} | ${item.mode} | ${item.duration} | ${formatCurrency(item.fare)}`;
    const ok = await copyToClipboard(text);
    if (ok) { 
      setCopied(true); 
      setTimeout(() => setCopied(false), 2000); 
    }
  };

  return (
    <div 
      className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[24px] p-6 hover:bg-white hover:border-black/20 hover:shadow-[0_10px_35px_rgba(0,0,0,0.03)] transition-all duration-300 relative flex flex-col justify-between"
    >
      {/* Boarding Pass Aesthetic Top Bar */}
      <div>
        <div className="flex items-center justify-between mb-4 border-b border-black/5 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center text-black/70">
              <Icon size={16} />
            </div>
            <span className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest leading-none">Transit Pass</span>
          </div>
          <span className="text-[10px] font-extrabold uppercase font-mono tracking-wider bg-black/5 px-2.5 py-1 rounded-md">
            {item.mode}
          </span>
        </div>

        {/* Route Headers */}
        <div className="flex items-center gap-3 mb-4">
          <div className="min-w-0">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1">From</p>
            <p className="text-sm font-extrabold text-black/90 truncate">{item.from}</p>
          </div>
          <ArrowRight size={16} className="text-slate-300 shrink-0 mt-3" />
          <div className="min-w-0">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1">To</p>
            <p className="text-sm font-extrabold text-black/90 truncate">{item.to}</p>
          </div>
        </div>

        {/* Boarding Details Grid */}
        <div className="grid grid-cols-2 gap-4 bg-white border border-black/5 rounded-2xl p-4 text-xs shadow-sm">
          <div>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1">Distance</p>
            <p className="font-extrabold text-black/80">{item.distance}</p>
          </div>
          <div>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1">Duration</p>
            <p className="font-extrabold text-black/80">{item.duration}</p>
          </div>
          <div className="pt-2 border-t border-black/5">
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1">Est. Fare</p>
            <p className="font-black text-sm text-black leading-none">{formatCurrency(item.fare)}</p>
          </div>
          <div className="pt-2 border-t border-black/5">
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1">Budget Option</p>
            <p className="font-black text-sm text-slate-500 leading-none">{formatCurrency(item.cheapest)}</p>
          </div>
        </div>

        {/* Alternative Route & Notes */}
        {(item.alternative || item.notes || item.frequency) && (
          <div className="mt-4 pt-3 border-t border-black/5 space-y-1.5 text-[11px] text-slate-500 font-medium">
            {item.alternative && <p><span className="font-bold text-slate-400 uppercase text-[9px] tracking-wider block">Alt Route</span>{item.alternative}</p>}
            {item.frequency && <p><span className="font-bold text-slate-400 uppercase text-[9px] tracking-wider block">Frequency</span>{item.frequency}</p>}
            {item.notes && <p className="italic text-slate-400 leading-relaxed">"{item.notes}"</p>}
          </div>
        )}
      </div>

      {/* Action Controls */}
      <div className="flex gap-2 mt-6 pt-4 border-t border-black/5">
        <button 
          onClick={handleCopy}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border border-black/10 hover:bg-black/5 bg-white transition-all cursor-pointer select-none"
        >
          {copied ? <Check size={13} className="text-green-600" /> : <Copy size={13} />}
          {copied ? "Copied" : "Copy Details"}
        </button>
        <button 
          onClick={() => window.open(`https://maps.google.com/?q=${item.from}+to+${item.to}`, "_blank")}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-black text-white hover:bg-black/90 transition-all cursor-pointer"
        >
          <ExternalLink size={13} />
          Maps
        </button>
      </div>
    </div>
  );
}

export default function TransportSection() {
  const [search, setSearch] = useState("");
  const [modeFilter, setModeFilter] = useState("All");

  let filtered = filterBySearch(transport, search, ["from", "to", "mode", "notes"]);
  if (modeFilter !== "All") filtered = filtered.filter((t) => t.mode === modeFilter);

  return (
    <section id="transport" className="py-20 md:py-28 bg-[#f2efe9] scroll-mt-20">
      <Container>
        <SectionTitle 
          label="Getting Around" 
          title="Transport Guide" 
          description="Complete transit passes, fares, and alternative route plans for every stop." 
        />
        
        {/* Filters Panel */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 max-w-6xl mx-auto no-print">
          {/* Custom Search Box */}
          <div className="w-full md:max-w-xs">
            <input
              type="text"
              placeholder="Search transit lines..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-black/10 bg-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-black/5 text-sm"
            />
          </div>

          {/* Mode Pill Badges */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
            {transportModes.map((mode) => (
              <button
                key={mode}
                onClick={() => setModeFilter(mode)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  modeFilter === mode 
                    ? "bg-black text-white border-black" 
                    : "bg-white/60 text-slate-500 border-black/5 hover:bg-white hover:text-black"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Boarding Passes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filtered.map((item) => (
            <TransportCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
