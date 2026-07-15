import React, { useState } from "react";
import { Bed, Star, MapPin, ExternalLink, Tent, Building, Check, AlertTriangle, Plus, Trash2, X } from "lucide-react";
import { stayOptions } from "../../data/budget";
import { formatCurrency } from "../../utils/currency";
import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";
import { useFirestore } from "../../hooks/useFirestore";
import { getActiveTripKey, getParentTripId } from "../../data/proxyHelper";

export default function StaySection() {
  const activeKey = getActiveTripKey();
  const parentTripId = getParentTripId();
  const [customHotels, setCustomHotels] = useFirestore("trek_custom_hotels", {});
  const [activeModalStay, setActiveModalStay] = useState(null);

  // Form State
  const [newHotelName, setNewHotelName] = useState("");
  const [newHotelPrice, setNewHotelPrice] = useState("");
  const [newHotelLink, setNewHotelLink] = useState("");
  const [isOffline, setIsOffline] = useState(false);

  const handleAddHotel = (e) => {
    e.preventDefault();
    if (!newHotelName.trim() || !activeModalStay) return;

    const stayKey = `${parentTripId}_${activeModalStay.id}`;
    const newHotel = {
      name: newHotelName,
      price: newHotelPrice ? parseFloat(newHotelPrice) : 0,
      link: isOffline ? "" : newHotelLink,
      offline: isOffline,
      isCustom: true
    };

    const currentList = customHotels[stayKey] || [];
    const updated = {
      ...customHotels,
      [stayKey]: [...currentList, newHotel]
    };

    setCustomHotels(updated);
    
    // Reset Form
    setNewHotelName("");
    setNewHotelPrice("");
    setNewHotelLink("");
    setIsOffline(false);
    setActiveModalStay(null);
  };

  const handleDeleteHotel = (stayId, hotelName) => {
    const stayKey = `${parentTripId}_${stayId}`;
    const currentList = customHotels[stayKey] || [];
    const updatedList = currentList.filter(h => h.name !== hotelName);

    const updated = {
      ...customHotels,
      [stayKey]: updatedList
    };
    setCustomHotels(updated);
  };
  return (
    <section id="stay" className="py-12 bg-[#f2efe9]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {stayOptions.map((stay) => {
            const stayKey = `${parentTripId}_${stay.id}`;
            const staticHotels = stay.hotels || [];
            const addedHotels = customHotels[stayKey] || [];
            const allHotels = [...staticHotels, ...addedHotels];

            return (
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
                  {/* Recommended Stays & Booking Links */}
                  <div className="border-t border-black/5 pt-4 space-y-2">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Available Stays & Booking</p>
                    <div className="space-y-2">
                      {allHotels.map((hotel, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-white/50 border border-black/5 rounded-xl p-3 text-xs font-semibold">
                          <div>
                            <p className="text-black font-extrabold flex items-center gap-1.5">
                              {hotel.name}
                              {hotel.isCustom && (
                                <span className="text-[8px] bg-amber-500/10 text-amber-700 px-1.5 py-0.5 rounded-full font-bold uppercase normal-case font-sans">
                                  Custom
                                </span>
                              )}
                            </p>
                            <p className="text-[10px] text-slate-500 font-medium">
                              {hotel.price > 0 ? `${formatCurrency(hotel.price)}/night` : (hotel.price === 0 ? "Free / Donation" : "Package Stay")}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            {hotel.offline ? (
                              <span className="text-[9px] font-bold font-mono uppercase bg-slate-100 text-slate-600 px-2 py-1 rounded">
                                Offline Booking
                              </span>
                            ) : (
                              <a
                                href={hotel.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[9px] font-bold font-mono uppercase bg-black hover:bg-black/80 text-white px-2.5 py-1 rounded transition-colors"
                              >
                                Book Online <ExternalLink size={10} />
                              </a>
                            )}
                            {hotel.isCustom && (
                              <button
                                onClick={() => handleDeleteHotel(stay.id, hotel.name)}
                                className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1.5 rounded-lg transition-colors cursor-pointer"
                                title="Delete Custom Hotel"
                              >
                                <Trash2 size={12} />
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                      
                      <button
                        onClick={() => setActiveModalStay(stay)}
                        className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider bg-black/5 hover:bg-black/10 border border-dashed border-black/15 text-slate-700 transition-all cursor-pointer mt-2"
                      >
                        <Plus size={12} /> Add Custom Hotel/Link
                      </button>
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
            );
          })}
        </div>
      </Container>

      {/* Modal Form */}
      {activeModalStay && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0" onClick={() => setActiveModalStay(null)} />
          <div className="bg-[#f2efe9] rounded-[28px] border border-black/10 p-6 md:p-8 max-w-md w-full shadow-2xl relative z-10">
            <button
              onClick={() => setActiveModalStay(null)}
              className="absolute right-6 top-6 w-8 h-8 rounded-xl border border-black/10 flex items-center justify-center bg-white hover:bg-black/5 transition-colors cursor-pointer"
            >
              <X size={14} />
            </button>
            <h3 className="text-xl font-black uppercase tracking-tight mb-4" style={{ fontFamily: "'Anton', sans-serif" }}>
              Add Hotel: {activeModalStay.destination}
            </h3>
            <form onSubmit={handleAddHotel} className="space-y-4 text-xs font-semibold">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Hotel Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Hotel Snow Crest"
                  value={newHotelName}
                  onChange={(e) => setNewHotelName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Price per Night (₹)</label>
                <input
                  type="number"
                  placeholder="e.g. 1200"
                  value={newHotelPrice}
                  onChange={(e) => setNewHotelPrice(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div className="flex items-center gap-2 py-1 select-none">
                <input
                  type="checkbox"
                  id="offline-stay-booking"
                  checked={isOffline}
                  onChange={(e) => setIsOffline(e.target.checked)}
                  className="rounded border-black/10 accent-black w-4 h-4 cursor-pointer"
                />
                <label htmlFor="offline-stay-booking" className="text-[11px] text-slate-700 cursor-pointer">
                  Offline booking only (no website link)
                </label>
              </div>
              {!isOffline && (
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Booking Website URL</label>
                  <input
                    type="url"
                    required={!isOffline}
                    placeholder="https://..."
                    value={newHotelLink}
                    onChange={(e) => setNewHotelLink(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              )}
              <button
                type="submit"
                className="w-full py-3 rounded-xl text-xs font-black uppercase tracking-wider bg-black hover:bg-black/90 text-white transition-all cursor-pointer mt-2"
              >
                Save Hotel
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
