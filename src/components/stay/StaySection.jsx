import React from "react";
import { Bed, Star, MapPin, ExternalLink, Tent, Building, Check, AlertTriangle } from "lucide-react";
import { stayOptions } from "../../data/budget";
import { formatCurrency } from "../../utils/currency";
import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";

export default function StaySection() {
  return (
    <section id="stay" className="py-12 bg-[#f2efe9]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {stayOptions.map((stay) => (
            <div 
              key={stay.id} 
              className="bg-white/70 backdrop-blur-md border border-black/10 rounded-[28px] overflow-hidden hover:bg-white hover:border-black/20 hover:shadow-[0_12px_35px_rgba(0,0,0,0.03)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Stay Banner Image */}
              <div>
                <div className="relative h-44 select-none">
                  <img src={stay.image} alt={stay.destination} loading="lazy" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 
                    className="absolute bottom-4 left-5 text-xl font-black text-white uppercase tracking-tight"
                    style={{ fontFamily: "'Anton', sans-serif" }}
                  >
                    {stay.destination}
                  </h3>
                  <div className="absolute top-4 right-5 flex items-center gap-1 bg-white/90 backdrop-blur-md rounded-lg px-2 py-0.5 border border-black/5">
                    <Star size={11} className="text-amber-500 fill-amber-500" />
                    <span className="text-[10px] font-black text-black">{stay.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 space-y-6">
                  {/* Prices Columns */}
                  <div className="grid grid-cols-3 gap-2 text-center bg-white border border-black/5 rounded-2xl p-3.5 shadow-sm">
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Budget</p>
                      <p className="font-extrabold text-sm text-black">{stay.budget ? formatCurrency(stay.budget) : "Free"}</p>
                    </div>
                    <div className="border-x border-black/5">
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Mid</p>
                      <p className="font-extrabold text-sm text-black">{formatCurrency(stay.mid)}</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Premium</p>
                      <p className="font-extrabold text-sm text-black">{formatCurrency(stay.premium)}</p>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {stay.gmvnn && (
                      <span className="inline-flex items-center gap-1 text-[9px] font-bold font-mono uppercase bg-black text-white px-2 py-0.5 rounded-md">
                        <Building size={11} /> GMVN Guest House
                      </span>
                    )}
                    {stay.camping && (
                      <span className="inline-flex items-center gap-1 text-[9px] font-bold font-mono uppercase bg-amber-500 text-black px-2 py-0.5 rounded-md">
                        <Tent size={11} /> Camping Base
                      </span>
                    )}
                    {stay.hostel && (
                      <span className="inline-flex items-center gap-1 text-[9px] font-bold font-mono uppercase bg-blue-600 text-white px-2 py-0.5 rounded-md">
                        <Bed size={11} /> Backpacker Hostel
                      </span>
                    )}
                  </div>

                  {/* Pros & Cons Columns */}
                  <div className="grid md:grid-cols-2 gap-4 text-xs font-medium">
                    <div className="space-y-1.5">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Acclamation Pros</p>
                      <ul className="space-y-1 text-slate-600">
                        {stay.pros.map((p, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <Check size={12} className="text-green-600 shrink-0 mt-0.5" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Drawback Cons</p>
                      <ul className="space-y-1 text-slate-600">
                        {stay.cons.map((c, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <AlertTriangle size={12} className="text-red-500 shrink-0 mt-0.5" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Local Tip */}
                  {stay.tips && (
                    <p className="text-xs text-slate-400 italic leading-relaxed border-t border-black/5 pt-4">
                      "{stay.tips}"
                    </p>
                  )}
                </div>
              </div>

              {/* Open Maps button */}
              <div className="p-6 md:px-8 md:pb-8 pt-0 border-t border-black/5 bg-black/[0.005]">
                <button
                  onClick={() => window.open(stay.mapLink, "_blank")}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-white hover:bg-black/5 text-black border border-black/10 transition-all cursor-pointer shadow-sm"
                >
                  <ExternalLink size={13} />
                  Open in Google Maps
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
