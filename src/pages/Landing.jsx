import React, { useState, useEffect, useRef, useMemo } from "react";
import { ArrowUpRight, Calendar, Wallet, Route, MapPin, X, CheckCircle2, Footprints, Compass, Plus, LayoutGrid, Clock, ChevronDown, ChevronUp, Sparkles, Receipt, Star, GitCompareArrows, Check, Archive, Lock, BookOpen, Bookmark, ChevronRight, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../utils/firebase";

import { useFirestore } from "../hooks/useFirestore";
import { yullaAmounts } from "../data/yulla/amounts";
import { ladakhAmounts } from "../data/ladakh/amounts";
import { spitiAmounts } from "../data/spiti/amounts";
import { annapurnaAmounts } from "../data/annapurna/amounts";
import { hemkundAmounts } from "../data/hemkund/amounts";
import { rudranathAmounts } from "../data/rudranath/amounts";
import { madhyamaheshwarAmounts } from "../data/madhyamaheshwar/amounts";
import { kedarkanthaAmounts } from "../data/kedarkantha/amounts";
import { birBillingAmounts as birBillingAmountsPlan1 } from "../data/bir-billing/plan1/amounts";
import { birBillingAmounts as birBillingAmountsPlan2 } from "../data/bir-billing/plan2/amounts";
import { birBillingAmounts as birBillingAmountsPlan3 } from "../data/bir-billing/plan3/amounts";
import { birBillingAmounts as birBillingAmountsPlan4 } from "../data/bir-billing/plan4/amounts";
import { jibhiAmounts as jibhiAmountsPlan1 } from "../data/jibhi/plan1/amounts";
import { jibhiAmounts as jibhiAmountsPlan2 } from "../data/jibhi/plan2/amounts";
import { ujjainAmounts } from "../data/ujjain/amounts";
import { nepalAmounts as nepalAmounts1 } from "../data/nepal/plan1/amounts";
import { nepalAmounts as nepalAmounts2 } from "../data/nepal/plan2/amounts";
import { auliAmounts } from "../data/auli/amounts";
import { kashmirAmounts } from "../data/kashmir/amounts";
import { kashmirPlan2Amounts } from "../data/kashmir/plan2/amounts";
import { budget as budgetShrikhand1 } from "../data/shrikhand/plan1/budget";
import { budget as budgetShrikhand2 } from "../data/shrikhand/plan2/budget";
import { budget as budgetHampta1 } from "../data/hampta/plan1/budget";
import { budget as budgetHampta2 } from "../data/hampta/plan2/budget";
import { completedTrips } from "../data/completedTrips";
import { budget as adiKailashBudget } from "../data/adi-kailash/budget";
import { budget as badrinathBudget } from "../data/badrinath/budget";
import { budget as gangotriBudget } from "../data/gangotri/budget";
import { budget as kailashMansarovarBudget } from "../data/kailash-mansarovar/budget";
import { budget as kalpeshwarBudget } from "../data/kalpeshwar/budget";
import { budget as kinnaurKailashBudget } from "../data/kinnaur-kailash/budget";
import { budget as manimaheshKailashBudget } from "../data/manimahesh-kailash/budget";
import { budget as puriBudget } from "../data/puri/budget";
import { budget as yamunotriBudget } from "../data/yamunotri/budget";
import { budget as varanasiBudget } from "../data/varanasi/budget";
import { somnathNageshwarAmounts } from "../data/somnath-nageshwar/amounts";
import { mallikarjunaRameswaramAmounts } from "../data/mallikarjuna-rameswaram/amounts";
import { vaidyanathAmounts } from "../data/vaidyanath/amounts";
import { maharashtraAmounts } from "../data/trimbakeshwar-bhimashankar-grishneshwar/amounts";

function ExpeditionJournalBook({ completedTrips, setSelectedTrip, actualCosts = {}, completedPlans = [], archivedPlans = [] }) {
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("index");
  const [pageSubTab, setPageSubTab] = useState("photo"); // 'photo' for 1st page, 'details' for turned page

  const colorPalette = [
    "bg-sky-500", "bg-emerald-500", "bg-amber-500", "bg-rose-500",
    "bg-indigo-500", "bg-purple-500", "bg-teal-500", "bg-orange-500"
  ];

  const getTripAmountsData = (trip) => {
    if (trip.id === "spiti") return spitiAmounts?.plan1;
    if (trip.id === "rudranath") return rudranathAmounts?.plan1;
    if (trip.id === "auli") return auliAmounts;
    if (trip.id === "ujjain") return ujjainAmounts;
    if (trip.id === "kashmir") return kashmirAmounts;
    if (trip.id === "nepal-budget") return nepalAmounts1;
    return null;
  };

  const extractDateInfo = (trip) => {
    if (!trip) return { dates: "N/A", monthYear: "COMPLETED", dayDisplay: "LOG", monthDisplay: "JUL", yearDisplay: "2026" };
    
    // Check if dates are defined directly or inside completed map places or plans
    let rawStr = trip.dates || "";
    if (!rawStr && trip.plans?.length) {
      for (const p of trip.plans) {
        if (p.duration && p.duration.includes("(")) {
          rawStr = p.duration;
          break;
        }
      }
      if (!rawStr) rawStr = trip.plans[0]?.duration || trip.stats?.duration || "";
    }
    if (!rawStr) rawStr = trip.stats?.duration || "";

    const parenthesizedMatch = rawStr.match(/\(([^)]+)\)/);
    const dateRangeStr = parenthesizedMatch ? parenthesizedMatch[1] : rawStr;

    const monthsMap = {
      JAN: "JAN", FEB: "FEB", MAR: "MAR", APR: "APR", MAY: "MAY", JUN: "JUN",
      JUL: "JUL", AUG: "AUG", SEP: "SEP", OCT: "OCT", NOV: "NOV", DEC: "DEC"
    };

    const tokens = dateRangeStr.trim().split(/\s+/);
    let foundYear = tokens.find(t => /^\d{4}$/.test(t));
    if (!foundYear) foundYear = "2026";

    let foundMonth = "JUL";
    for (const t of tokens) {
      const clean = t.toUpperCase().replace(/[^A-Z]/g, "");
      if (monthsMap[clean]) {
        foundMonth = monthsMap[clean];
        break;
      }
    }

    const dashParts = dateRangeStr.split(/–|-/).map(s => s.trim());
    let startDay = "";
    let endDay = "";

    if (dashParts.length >= 1) {
      const match1 = dashParts[0].match(/\d+/);
      if (match1) startDay = match1[0];
    }
    if (dashParts.length >= 2) {
      const match2 = dashParts[1].match(/\d+/);
      if (match2) endDay = match2[0];
    }

    let dayDisplay = startDay || "1";
    let datesText = "";

    if (startDay && endDay && startDay !== endDay) {
      datesText = `${startDay}–${endDay} ${foundMonth} ${foundYear}`;
      dayDisplay = `${startDay}–${endDay}`;
    } else if (startDay) {
      datesText = `${startDay} ${foundMonth} ${foundYear}`;
      dayDisplay = startDay;
    } else {
      datesText = `${foundMonth} ${foundYear}`;
      dayDisplay = "LOG";
    }

    const monthNumbers = { JAN: 1, FEB: 2, MAR: 3, APR: 4, MAY: 5, JUN: 6, JUL: 7, AUG: 8, SEP: 9, OCT: 10, NOV: 11, DEC: 12 };
    const yVal = parseInt(foundYear, 10) || 2026;
    const mVal = monthNumbers[foundMonth] || 7;
    const dVal = parseInt(startDay, 10) || 1;

    return {
      dates: datesText,
      monthYear: `${foundMonth} ${foundYear}`,
      dayDisplay: dayDisplay,
      monthDisplay: foundMonth,
      yearDisplay: foundYear,
      timestamp: new Date(yVal, mVal - 1, dVal).getTime()
    };
  };

  // Sort and deduplicate completed trips in reverse chronological order (newest date first)
  const sortedTrips = useMemo(() => {
    const uniqueMap = new Map();
    (completedTrips || []).forEach(trip => {
      if (!trip) return;
      // Deduplicate by ID or main location keyword (spiti, rudranath, amritsar, hisar, mussoorie, manali, jaipur, vrindavan)
      let key = (trip.id || "").toLowerCase().trim();
      const rawTitle = (trip.title || "").toLowerCase();
      if (rawTitle.includes("spiti")) key = "spiti";
      else if (rawTitle.includes("rudranath")) key = "rudranath";
      else if (rawTitle.includes("amritsar")) key = "amritsar";
      else if (rawTitle.includes("hisar")) key = "hisar";
      else if (rawTitle.includes("mussoorie")) key = "mussoorie";
      else if (rawTitle.includes("manali")) key = "manali";
      else if (rawTitle.includes("jaipur")) key = "jaipur";
      else if (rawTitle.includes("vrindavan")) key = "vrindavan";
      else if (!key) key = rawTitle.replace(/[^a-z0-9]/g, "");

      if (key && !uniqueMap.has(key)) {
        uniqueMap.set(key, trip);
      } else if (key && uniqueMap.has(key)) {
        // If the new one has a non-default photo image, prefer it
        const existing = uniqueMap.get(key);
        if ((!existing.image || existing.image === "/mountain_clay_peak.png") && (trip.image && trip.image !== "/mountain_clay_peak.png")) {
          uniqueMap.set(key, trip);
        }
      }
    });
    return Array.from(uniqueMap.values()).sort((a, b) => {
      const timeA = extractDateInfo(a).timestamp;
      const timeB = extractDateInfo(b).timestamp;
      return timeB - timeA; // Descending
    });
  }, [completedTrips]);

  const selectedTrip = sortedTrips[selectedIndex] || sortedTrips[0];

  // If Book is Closed, Render Vintage Scrapbook Travel Journal Cover
  if (!isBookOpen) {
    return (
      <div className="relative w-full h-[720px] md:h-[760px] cursor-pointer group perspective-1000" onClick={() => setIsBookOpen(true)}>
        {/* Outer Frame Container */}
        <div className="w-full h-full bg-[#2a1d15] rounded-[40px] p-3 md:p-5 shadow-2xl font-serif text-slate-800 border-4 border-[#1c130d] flex flex-col justify-between relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.005]">
          
          {/* Main Cover Scrapbook Board */}
          <div className="relative flex-1 w-full bg-[#dfd6c6] rounded-3xl border-2 border-[#5c4431] shadow-2xl flex flex-col justify-between overflow-hidden">
            
            {/* Rich Trip Collage Artwork with Spiti, Rudranath, Amritsar & Jaipur snippets */}
            <img 
              src="/trip_collage_cover.jpg" 
              alt="Yashpal's Travel Expeditions Journal Cover"
              className="absolute inset-0 w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.98] transition-transform duration-700 group-hover:scale-102"
            />

            {/* Custom Typography Overlay Plaque */}
            <div className="relative z-10 my-auto mx-auto w-[65%] md:w-[42%] max-w-sm bg-[#f7f2e7]/95 backdrop-blur-xs p-5 md:p-6 rounded-2xl border-2 border-[#8c745c] shadow-2xl text-center">
              
              {/* Header Title */}
              <div className="border-b border-[#a8947d]/60 pb-2 mb-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8c6b4f] font-bold block mb-1">
                  EXPEDITION SCRAPBOOK
                </span>
                <h1 className="text-2xl md:text-3xl font-serif font-black tracking-tight text-[#3b2716] uppercase leading-tight">
                  Yashpal's Travels
                </h1>
              </div>

              <div className="space-y-1 my-2">
                <p className="text-xs font-serif italic text-[#634832] font-semibold">
                  Spiti • Rudranath • Amritsar • Mussoorie
                </p>
                <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-[#8c6b4f]">
                  <span>VOL. 01</span>
                  <span>•</span>
                  <span>EST. 2026</span>
                </div>
              </div>

              {/* Click to Open Button Badge */}
              <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3b2716] text-[#f7f2e7] text-xs font-mono font-bold tracking-wider group-hover:bg-[#5c4028] transition-all shadow-md animate-pulse">
                <span>OPEN TRAVEL DIARY</span>
                <span>📖</span>
              </div>
            </div>

            {/* Left Spine Crease Shadow overlay */}
            <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none z-20" />
            <div className="absolute top-0 bottom-0 left-8 border-l border-[#5c4431]/60 pointer-events-none z-20" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[720px] md:h-[760px] bg-[#3d2f24] rounded-[40px] p-5 md:p-8 shadow-2xl font-serif text-slate-800 border-4 border-[#2b1f17] flex flex-col justify-between">
      
      {/* Close Cover Bookmark Tag Button */}
      <button
        onClick={() => setIsBookOpen(false)}
        className="absolute -top-1 left-12 md:left-16 z-30 px-3.5 py-1.5 bg-[#4a331e] hover:bg-[#2b1f17] text-[#f7e4c8] text-xs font-mono font-bold rounded-b-xl border-x-2 border-b-2 border-amber-900/60 shadow-lg flex items-center gap-1.5 transition-all transform hover:translate-y-0.5 cursor-pointer"
        title="Fold up and close journal cover"
      >
        <span>📕 Close Cover</span>
      </button>
      
      {/* Outer Journal Book Cover Frame & Metallic Corners */}
      <div className="absolute top-3.5 left-3.5 w-6 h-6 border-t-3 border-l-3 border-amber-600/60 rounded-tl-sm pointer-events-none" />
      <div className="absolute top-3.5 right-3.5 w-6 h-6 border-t-3 border-r-3 border-amber-600/60 rounded-tr-sm pointer-events-none" />
      <div className="absolute bottom-3.5 left-3.5 w-6 h-6 border-b-3 border-l-3 border-amber-600/60 rounded-bl-sm pointer-events-none" />
      <div className="absolute bottom-3.5 right-3.5 w-6 h-6 border-b-3 border-r-3 border-amber-600/60 rounded-br-sm pointer-events-none" />

      {/* Book Container with Right Bookmark Page Tabs */}
      <div className="relative flex-1 flex bg-[#f5f1e8] rounded-3xl border border-black/20 shadow-inner overflow-hidden">
        
        {/* Main 2-Page Paper Content */}
        <div className="flex-1 p-5 md:p-7 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative">
          
          {/* Page Center Binding Stitch Shadow */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-12 bg-gradient-to-r from-black/5 via-black/15 to-black/5 hidden md:block z-20 pointer-events-none border-x border-black/5" />

          {/* PAGE 1: JOURNAL INDEX (LEFT PAGE) */}
          <div className="flex flex-col justify-between border-r-0 md:border-r border-black/10 pr-0 md:pr-5 h-full">
            <div>
              <div className="border-b-2 border-black/15 pb-2 mb-2 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-slate-900 font-serif">
                    Journal Index
                  </h3>
                  <p className="text-xs italic text-slate-500 font-mono">Completed Expeditions Log</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-amber-800/10 flex items-center justify-center text-amber-900 font-mono font-bold text-sm">
                  {sortedTrips.length}
                </div>
              </div>

              <div className="space-y-2.5 max-h-[520px] overflow-y-auto pr-2 custom-scrollbar">
                {sortedTrips.map((trip, idx) => {
                  const isSelected = idx === selectedIndex;
                  const { dates } = extractDateInfo(trip);
                  const accentColor = colorPalette[idx % colorPalette.length];
                  return (
                    <button
                      key={trip.id}
                      onClick={() => {
                        setSelectedIndex(idx);
                        setActiveTab("index");
                        setPageSubTab("photo");
                      }}
                      className={`w-full text-left p-2.5 md:p-3 rounded-2xl border transition-all flex items-center justify-between relative overflow-hidden group shadow-xs ${
                        isSelected
                          ? "bg-[#fff9ed] border-amber-600/60 text-slate-900 ring-2 ring-amber-500/30"
                          : "bg-white/80 border-slate-300/70 hover:bg-white text-slate-700"
                      }`}
                    >
                      {/* Left Number Tag & Image Thumbnail */}
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="text-sm font-bold font-serif w-5 text-center text-slate-600 shrink-0">
                          {idx + 1}
                        </span>

                        <img
                          src={trip.image || "/mountain_clay_peak.png"}
                          alt={trip.title}
                          className="w-10 h-10 md:w-11 md:h-11 rounded-lg border border-black/15 object-cover shrink-0 shadow-xs group-hover:scale-105 transition-transform"
                        />

                        <div className="truncate border-l border-slate-200 pl-2">
                          <p className="text-xs md:text-sm font-bold font-sans truncate text-slate-900 group-hover:text-amber-900 leading-tight">
                            {trip.title}
                          </p>
                          <p className="text-[10px] md:text-xs font-mono text-slate-500 mt-0.5">
                            {dates}
                          </p>
                        </div>
                      </div>

                      {/* Right Tab Bookmark Pill */}
                      <div className="flex items-center gap-1.5 shrink-0 ml-1">
                        <span className="text-xs font-mono font-bold text-slate-700">
                          P.0{idx + 1}
                        </span>
                        <div className={`w-3 h-7 rounded-xs ${accentColor}`} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-2 mt-1 border-t border-black/10 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Vol. 1 • Log Book</span>
              <span>Select entry to view</span>
            </div>
          </div>

          {/* PAGE 2: JOURNAL ENTRY PAGE / PHOTO GALLERY VIEW (RIGHT PAGE) */}
          {selectedTrip && (
            <div className="flex flex-col justify-between pl-0 md:pl-5 relative h-full min-h-0">
              <div className="flex-1 flex flex-col justify-between overflow-y-auto pr-1 custom-scrollbar min-h-0">
                {activeTab === "photos" || activeTab === "gallery" ? (
                  /* Photo Gallery Tab Content */
                  <div className="space-y-3">
                    <div className="border-b-2 border-black/15 pb-2 mb-3 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-amber-800">
                          VISUAL GALLERY
                        </span>
                        <h4 className="text-xl md:text-2xl font-bold font-serif text-slate-900 leading-tight uppercase">
                          Expedition Photos
                        </h4>
                      </div>
                      <span className="text-xs font-mono bg-amber-900/10 text-amber-950 px-2.5 py-1 rounded-full font-bold">
                        {sortedTrips.length} Photos
                      </span>
                    </div>

                    {/* Grid of all Expedition Photos */}
                    <div className="grid grid-cols-2 gap-3 pb-2">
                      {sortedTrips.map((trip, idx) => (
                        <div
                          key={trip.id}
                          onClick={() => {
                            setSelectedIndex(idx);
                            setActiveTab("index");
                          }}
                          className={`group relative bg-white p-2 rounded-xl border transition-all cursor-pointer shadow-xs hover:shadow-md ${
                            selectedIndex === idx
                              ? "border-amber-600 ring-2 ring-amber-500/40"
                              : "border-black/15 hover:border-amber-500/50"
                          }`}
                        >
                          <div className="relative h-28 md:h-32 w-full rounded-lg overflow-hidden bg-slate-900 border border-black/10">
                            <img
                              src={trip.image || "/mountain_clay_peak.png"}
                              alt={trip.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                            <span className="absolute top-1.5 left-1.5 bg-black/60 text-white text-[9px] font-mono px-1.5 py-0.5 rounded font-bold">
                              #{idx + 1}
                            </span>
                          </div>
                          <div className="mt-1.5">
                            <p className="text-xs font-bold font-sans text-slate-900 truncate group-hover:text-amber-900">
                              {trip.title}
                            </p>
                            <p className="text-[10px] font-mono text-slate-500 truncate">
                              📍 {trip.subtitle}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Standard Index Entry View with Page Turnover (Page 1: Photo, Page 2: Details & Expenses) */
                  <div className="h-full flex flex-col justify-between">
                    <div className="flex-1 flex flex-col min-h-0">
                      {/* Entry Header Title & Date Stamp */}
                      <div className="flex items-center justify-between gap-3 border-b-2 border-black/15 pb-2 mb-3">
                        <div className="truncate min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-amber-800">
                              ENTRY #{selectedIndex + 1}
                            </span>
                            <span className="text-[10px] font-mono bg-amber-200/60 text-amber-950 px-2 py-0.5 rounded-md font-bold">
                              {pageSubTab === "photo" ? "Page 1/2 • Photo Cover" : "Page 2/2 • Log & Expenses"}
                            </span>
                          </div>
                          <h4 className="text-lg md:text-2xl font-bold font-serif text-slate-900 leading-tight uppercase truncate mt-0.5">
                            {selectedTrip.title}
                          </h4>
                          <p className="text-xs font-mono text-slate-500 truncate mt-0.5">
                            📍 {selectedTrip.subtitle}
                          </p>
                        </div>

                        {/* Calendar Date Stamp Box */}
                        {(() => {
                          const { dayDisplay, monthDisplay, yearDisplay } = extractDateInfo(selectedTrip);
                          return (
                            <div className="bg-[#e9e3d5] border border-amber-900/30 rounded-2xl p-2 md:p-2.5 text-center shrink-0 shadow-xs min-w-[76px]">
                              <p className="text-[11px] font-mono font-bold uppercase text-amber-900 leading-none">{monthDisplay}</p>
                              <p className="text-base md:text-xl font-bold font-mono text-slate-900 leading-tight my-0.5">{dayDisplay}</p>
                              <p className="text-[10px] font-mono text-slate-500 leading-none">{yearDisplay}</p>
                            </div>
                          );
                        })()}
                      </div>

                      {/* PAGE 1 CONTENT: FEATURED PHOTO ONLY */}
                      {pageSubTab === "photo" ? (
                        <div className="flex-1 flex flex-col my-1 min-h-0">
                          <div className="relative group bg-white p-2.5 md:p-3 rounded-2xl border border-black/15 shadow-lg transform -rotate-1 hover:rotate-0 transition-all duration-300 flex-1 flex flex-col min-h-0">
                            {/* Polaroid Corner Tape Accents */}
                            <div className="absolute -top-3 left-10 w-16 h-5 bg-amber-200/90 backdrop-blur-xs shadow-xs rotate-[-5deg] z-10 border border-amber-300/60 pointer-events-none" />
                            <div className="absolute -top-3 right-10 w-16 h-5 bg-amber-200/90 backdrop-blur-xs shadow-xs rotate-[4deg] z-10 border border-amber-300/60 pointer-events-none" />

                            <div className="relative flex-1 w-full rounded-xl overflow-hidden border border-black/10 bg-slate-900 shadow-inner min-h-0">
                              <img
                                src={selectedTrip.image || "/mountain_clay_peak.png"}
                                alt={selectedTrip.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                              <div className="absolute bottom-3 left-3 right-3 text-white font-mono">
                                <span className="text-[10px] uppercase tracking-widest text-amber-300 font-bold block mb-0.5">
                                  Expedition Snapshot
                                </span>
                                <h5 className="text-base md:text-lg font-serif font-bold text-white drop-shadow-md truncate">
                                  {selectedTrip.title}
                                </h5>
                                <p className="text-xs text-amber-100/90 truncate mt-0.5">
                                  📍 {selectedTrip.subtitle} • {selectedTrip.stats?.duration || "Completed"}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* PAGE 2 CONTENT: ROUTE TIMELINE & EXPENSE BREAKDOWN ONLY */
                        <div className="space-y-3 my-2 animate-fadeIn">
                          {/* Route Timeline Card */}
                          <div className="bg-[#f0ece1] p-3 md:p-4 rounded-2xl border border-black/10 font-sans shadow-xs">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs font-mono font-bold uppercase text-amber-900">Route Timeline</span>
                              <span className="text-[10px] font-mono text-slate-500">📍 {selectedTrip.subtitle}</span>
                            </div>
                            <p className="text-xs md:text-sm font-medium text-slate-800 leading-relaxed mt-1">
                              {selectedTrip.plans?.[0]?.route || selectedTrip.description}
                            </p>
                          </div>

                          {/* Expense Breakdown Table */}
                          <div className="bg-[#fcfaf5] p-4 md:p-5 rounded-2xl border border-black/10 font-sans shadow-xs my-2">
                            <div className="flex items-center justify-between border-b border-black/10 pb-2 mb-3">
                              <span className="text-sm font-bold font-serif uppercase tracking-wider text-slate-900">
                                Itemized Expense Breakdown
                              </span>
                              <span className="text-xs font-mono text-amber-800 font-bold">
                                Vol. 1 Log
                              </span>
                            </div>
                            
                            <div className="space-y-2 text-xs md:text-sm font-mono">
                              {(() => {
                                const standardCategories = {
                                  "Food": 0,
                                  "Transport": 0,
                                  "Accommodation": 0,
                                  "Activities / Misc": 0
                                };

                                if (selectedTrip.expenses && selectedTrip.expenses.length > 0) {
                                  selectedTrip.expenses.forEach(item => {
                                    const cat = (item.category || "").toLowerCase();
                                    const amt = item.amount || 0;
                                    if (cat.includes("food") || cat.includes("snack") || cat.includes("meal") || cat.includes("drink")) {
                                      standardCategories["Food"] += amt;
                                    } else if (cat.includes("transit") || cat.includes("transport") || cat.includes("bus") || cat.includes("car") || cat.includes("cab") || cat.includes("fuel") || cat.includes("scooty") || cat.includes("public")) {
                                      standardCategories["Transport"] += amt;
                                    } else if (cat.includes("stay") || cat.includes("hotel") || cat.includes("accommodation") || cat.includes("hostel")) {
                                      standardCategories["Accommodation"] += amt;
                                    } else {
                                      standardCategories["Activities / Misc"] += amt;
                                    }
                                  });
                                } else {
                                  const amountsData = getTripAmountsData(selectedTrip);
                                  if (amountsData) {
                                    standardCategories["Food"] = amountsData.foodCategory || amountsData.calcDefaults?.food || 0;
                                    standardCategories["Transport"] = amountsData.transportCategory || amountsData.calcDefaults?.transport || 0;
                                    standardCategories["Accommodation"] = amountsData.accommodationCategory || amountsData.calcDefaults?.stay || 0;
                                    standardCategories["Activities / Misc"] = (amountsData.emergencyCategory || amountsData.calcDefaults?.emergency || 0) + (amountsData.calcDefaults?.permits || 0) + (amountsData.calcDefaults?.shopping || 0);
                                  }
                                }

                                return Object.entries(standardCategories).map(([catName, val]) => (
                                  <div key={catName} className="flex justify-between items-center text-slate-700 py-1 border-b border-dashed border-slate-200">
                                    <span className="truncate pr-2 font-serif text-slate-800 text-xs md:text-sm">{catName}</span>
                                    <span className="font-bold text-slate-900 shrink-0 text-xs md:text-sm">₹{val.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
                                  </div>
                                ));
                              })()}
                            </div>

                            <div className="pt-2 mt-2 border-t-2 border-black/15 flex justify-between items-center font-mono text-base md:text-lg font-black text-slate-900">
                              <span>Total Spent</span>
                              {(() => {
                                let finalTotal = selectedTrip.spentTotal;
                                if (finalTotal === undefined || finalTotal === null) {
                                  const donePlan = selectedTrip.plans?.find(p => completedPlans.includes(p.id) && !archivedPlans.includes(p.id));
                                  if (donePlan && actualCosts[donePlan.id]) {
                                    finalTotal = parseFloat(actualCosts[donePlan.id]);
                                  } else {
                                    const amountsData = getTripAmountsData(selectedTrip);
                                    finalTotal = amountsData?.budgetTotal || 0;
                                  }
                                }
                                return (
                                  <span className="text-emerald-800 text-lg md:text-xl font-bold">
                                    ₹{(finalTotal || 0).toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                                  </span>
                                );
                              })()}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Page Controls with Page Flip Switcher (Always Fixed at Bottom) */}
              <div className="pt-2 border-t border-black/10 flex items-center justify-between mt-2 font-mono shrink-0">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setSelectedIndex(prev => Math.max(0, prev - 1));
                      setPageSubTab("photo");
                    }}
                    disabled={selectedIndex === 0}
                    className="w-8 h-8 rounded-lg border border-slate-400 flex items-center justify-center hover:bg-black/5 disabled:opacity-30"
                    title="Previous Trip Entry"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => {
                      setSelectedIndex(prev => Math.min(sortedTrips.length - 1, prev + 1));
                      setPageSubTab("photo");
                    }}
                    disabled={selectedIndex === sortedTrips.length - 1}
                    className="w-8 h-8 rounded-lg border border-slate-400 flex items-center justify-center hover:bg-black/5 disabled:opacity-30"
                    title="Next Trip Entry"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>

                {activeTab === "index" && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setPageSubTab(prev => prev === "photo" ? "details" : "photo")}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase border-2 border-amber-900/40 text-amber-950 hover:bg-amber-900/10 transition-all flex items-center gap-1 shadow-xs bg-[#fdfaf3]"
                    >
                      {pageSubTab === "photo" ? (
                        <>
                          <span>Turn Page (Expenses) 📖</span>
                        </>
                      ) : (
                        <>
                          <span>Front Cover (Photo) 🖼️</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => setSelectedTrip(selectedTrip)}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase bg-amber-900 text-amber-50 hover:bg-amber-950 transition-all flex items-center gap-1 shadow-sm"
                    >
                      <span>Full Log</span>
                      <ArrowUpRight size={9} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT SIDE BOOKMARK TABS (Interactive Book Page Divider Tabs) */}
        <div className="flex flex-col justify-start pt-6 pb-2 pr-1 select-none z-30 space-y-3">
          {[
            { id: "index", label: "INDEX", color: "bg-amber-600" },
            { id: "gallery", label: "GALLERY", color: "bg-emerald-600" },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-2 rounded-r-xl text-[10px] font-mono uppercase font-black tracking-widest border-y border-r transition-all duration-300 cursor-pointer flex items-center justify-center relative group shadow-md ${
                  isActive
                    ? "bg-[#f5f1e8] text-amber-950 border-amber-900/40 translate-x-1.5 shadow-lg ring-1 ring-black/10"
                    : "bg-[#1c130d] text-amber-200/60 hover:text-amber-100 border-black/40 hover:bg-[#2a1d15]"
                }`}
                style={{ writingMode: "vertical-rl" }}
                title={`Switch view to ${tab.label}`}
              >
                <div className={`absolute top-0 bottom-0 left-0 w-1 ${tab.color} rounded-l-xs`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default function Landing() {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [sectionSubFilter, setSectionSubFilter] = useState({
    global: "ready",
    trek: "ready",
    trip: "ready",
    jyotirlinga: "ready",
    "panch-kedar": "ready",
    "panch-kailash": "ready",
    "char-dham": "ready"
  });

  const getSubFilter = (key) => sectionSubFilter[key] || sectionSubFilter.global || "ready";

  const setSubFilterKey = (key, val) => {
    if (key === "global") {
      setSectionSubFilter({
        global: val,
        trek: val,
        trip: val,
        jyotirlinga: val,
        "panch-kedar": val,
        "panch-kailash": val,
        "char-dham": val
      });
    } else {
      setSectionSubFilter(prev => ({ ...prev, [key]: val }));
    }
  };
  const [completedPlans, setCompletedPlans, isLoading] = useFirestore("trek_completed_plans", []);
  const [targetPlans, setTargetPlans] = useFirestore("trek_target_plans", []);
  const [actualCosts, setActualCosts] = useFirestore("trek_actual_costs", {});
  const [archivedPlans, setArchivedPlans] = useFirestore("trek_archived_plans", []);
  const [archivedTrips, setArchivedTrips] = useFirestore("trek_archived_trips", []);
  const [costPromptModal, setCostPromptModal] = useState(null); // { plan, defaultCost }
  const [passcodePromptTripId, setPasscodePromptTripId] = useState(null);
  const [passcodeInput, setPasscodeInput] = useState("");
  const [passcodeError, setPasscodeError] = useState(false);
  const [isLedgerUnlocked, setIsLedgerUnlocked] = useState(false);
  const [inputActualCost, setInputActualCost] = useState("");
  const [activePlanExpenses, setActivePlanExpenses] = useState([]);
  const [activePlanMembers, setActivePlanMembers] = useState([]);

  // Dynamically subscribe to active plan's expenses in Firestore
  useEffect(() => {
    if (!costPromptModal) {
      setActivePlanExpenses([]);
      return;
    }
    const storageKey = getExpenseTrackerKey(costPromptModal.id);
    const docRef = doc(db, "trek_app_data", storageKey);
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setActivePlanExpenses(docSnap.data().data || []);
      } else {
        setActivePlanExpenses([]);
      }
    }, (error) => {
      console.error("Error loading plan expenses:", error);
    });
    return () => unsubscribe();
  }, [costPromptModal]);

  // Dynamically subscribe to active plan's members in Firestore
  useEffect(() => {
    if (!costPromptModal) {
      setActivePlanMembers([]);
      return;
    }
    const parentId = getParentTripId(costPromptModal.id);
    const docRef = doc(db, "trek_app_data", `trek_members_${parentId}`);
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setActivePlanMembers(docSnap.data().data || []);
      } else {
        setActivePlanMembers(getDefaultMembers(parentId));
      }
    }, (error) => {
      console.error("Error loading plan members:", error);
      setActivePlanMembers(getDefaultMembers(parentId));
    });
    return () => unsubscribe();
  }, [costPromptModal]);

  const handleVerifyPasscodeModal = (e) => {
    e.preventDefault();
    if (passcodeInput === "1612") {
      setIsLedgerUnlocked(true);
      setExpandedTripId(passcodePromptTripId);
      setPasscodePromptTripId(null);
      setPasscodeInput("");
      setPasscodeError(false);
    } else {
      setPasscodeError(true);
    }
  };

  const getLedgerCostPerMember = () => {
    if (!activePlanExpenses || activePlanExpenses.length === 0) return {};
    const parentId = getParentTripId(costPromptModal.id);
    
    const breakdown = {};
    activePlanMembers.forEach((m) => {
      breakdown[m] = 0;
    });

    activePlanExpenses.forEach((exp) => {
      if (exp.settleLater) return;
      const amt = Number(exp.amount) || 0;
      const sharers = exp.splitWith || activePlanMembers;
      const activeSharers = sharers.filter((m) => activePlanMembers.includes(m));

      if (activeSharers.length > 0) {
        if (exp.splitType === "unequal" && exp.splitAmounts) {
          activeSharers.forEach((m) => {
            breakdown[m] = (breakdown[m] || 0) + Number(exp.splitAmounts[m] || 0);
          });
        } else {
          const sharePerPerson = amt / sharers.length;
          activeSharers.forEach((m) => {
            breakdown[m] = (breakdown[m] || 0) + sharePerPerson;
          });
        }
      }
    });

    return breakdown;
  };

  // Pre-fill input with Yashpal's ledger cost if no manual cost is set yet
  useEffect(() => {
    if (!costPromptModal) return;
    const memberCosts = getLedgerCostPerMember();
    if (actualCosts[costPromptModal.id] === undefined) {
      const yashpalCost = memberCosts["Yashpal"] !== undefined ? memberCosts["Yashpal"] : (Object.values(memberCosts)[0] || 0);
      setInputActualCost(String(Math.round(yashpalCost)));
    }
  }, [activePlanExpenses, activePlanMembers, costPromptModal]);

  const [activeTab, setActiveTab] = useState("active"); // "active", "done", or "archived"
  const [categoryTab, setCategoryTab] = useState("all"); // "all", "trek", "trip"
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "timeline"
  const [expandedTripId, setExpandedTripId] = useState(null);
  const [sortBy, setSortBy] = useState("money");
  const [compareList, setCompareList] = useState([]);
  const [showCompare, setShowCompare] = useState(false);
  const [comparePlanIdx, setComparePlanIdx] = useState([0, 0]); // plan index for each compared trip

  const handleToggleArchiveTrip = (trip, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const isArchived = archivedTrips.includes(trip.id);
    let updatedArchived;
    if (isArchived) {
      updatedArchived = archivedTrips.filter(tid => tid !== trip.id);
    } else {
      updatedArchived = [...archivedTrips, trip.id];
    }
    setArchivedTrips(updatedArchived);
  };

  const handleToggleArchivePlan = (plan, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const isArchived = archivedPlans.includes(plan.id);
    let updatedArchived;
    if (isArchived) {
      updatedArchived = archivedPlans.filter(pid => pid !== plan.id);
    } else {
      updatedArchived = [...archivedPlans, plan.id];
    }
    setArchivedPlans(updatedArchived);
  };

  const handleToggleTargetPlan = (plan, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!selectedTrip) return;
    const isAlreadyTarget = targetPlans.includes(plan.id);
    const trekPlanIds = selectedTrip.plans.map(p => p.id);
    let updatedTargets = targetPlans.filter(pid => !trekPlanIds.includes(pid));
    if (!isAlreadyTarget) {
      updatedTargets.push(plan.id);
    }
    setTargetPlans(updatedTargets);
  };

  const isTripCompleted = (trip) => {
    if (trip.isCompleted) return true;
    return trip.plans.some(p => completedPlans.includes(p.id));
  };

    const isNotReadyTrip = (trip) => Boolean(
    trip.isComingSoon ||
    trip.comingSoon ||
    trip.stats?.duration === "TBD" ||
    trip.stats?.distance === "TBD" ||
    (trip.plans && trip.plans.length > 0 && trip.plans.every(p => p.duration === "TBD" || p.budget === "TBD"))
  );

  const parseNumericBudget = (str) => {
    if (!str) return 0;
    const match = String(str).match(/₹([0-9,]+)/);
    return match ? parseInt(match[1].replace(/,/g, ""), 10) : 0;
  };

  const getParentTripId = (key) => {
    if (key === 'rudranath-plan1' || key === 'rudranath-plan2' || key === 'plan1' || key === 'plan2') return 'rudranath';
    if (key === 'yulla-plan1' || key === 'yulla-plan2' || key === 'yulla-plan3') return 'yulla';
    if (key === 'ladakh-plan1' || key === 'ladakh-plan2' || key === 'ladakh-plan3' || key === 'ladakh-plan4') return 'ladakh';
    if (key === 'spiti-plan1' || key === 'spiti-plan2' || key === 'spiti-plan3') return 'spiti';
    if (key === 'annapurna-plan1') return 'annapurna';
    if (key === 'hemkund') return 'hemkund';
    if (key === 'shrikhand-plan1' || key === 'shrikhand-plan2') return 'shrikhand-mahadev';
    if (key === 'hampta-plan1' || key === 'hampta-plan2' || key === 'hampta-pass') return 'hampta-pass';
    if (key === 'madhyamaheshwar-plan1' || key === 'madhyamaheshwar-plan2') return 'madhyamaheshwar';
    if (key === 'kedarkantha') return 'kedarkantha';
    if (key === 'bir-billing' || key === 'bir-billing-plan1' || key === 'bir-billing-plan2' || key === 'bir-billing-plan3' || key === 'bir-billing-plan4') return 'bir-billing';
    if (key === 'jibhi-plan1' || key === 'jibhi-plan2') return 'jibhi';
    if (key === 'kashmir' || key === 'kashmir-plan1' || key === 'kashmir-plan2') return 'kashmir';
    return key;
  };

  const getDefaultMembers = (parentTripId) => {
    return parentTripId === "bir-billing"
      ? ["Yashpal", "Vaishnavi", "Adarsh", "Anshika"]
      : ["Yashpal", "Vansh"];
  };

  const getExpenseTrackerKey = (planId) => {
    const keysMap = {
      "yulla-plan3": "expenses-yulla-p3",
      "yulla-plan2": "expenses-yulla",
      "yulla-plan1": "expenses-yulla-p2",
      "ujjain": "expenses-ujjain",
      "spiti-plan3": "expenses-spiti-p3",
      "spiti-plan2": "expenses-spiti-p2",
      "spiti-plan1": "expenses-spiti-p1",
      "sikkim": "expenses-sikkim",
      "madhyamaheshwar-plan2": "expenses-madhyamaheshwar-plan2",
      "madhyamaheshwar-plan1": "expenses-madhyamaheshwar",
      "ladakh-plan4": "expenses-ladakh-p4",
      "ladakh-plan3": "expenses-ladakh-p3",
      "ladakh-plan2": "expenses-ladakh-p2",
      "ladakh-plan1": "expenses-ladakh-p1",
      "kashmir-plan1": "expenses-kashmir",
      "kashmir-plan2": "expenses-kashmir-plan2",
      "kedarkantha": "expenses-kedarkantha",
      "jibhi-plan2": "expenses-jibhi-plan2",
      "jibhi-plan1": "expenses-jibhi-plan1",
      "hemkund": "expenses-hemkund",
      "auli": "expenses-auli",
      "bir-billing-plan3": "expenses-bir-billing-plan3",
      "bir-billing-plan2": "expenses-bir-billing-plan2",
      "bir-billing-plan4": "expenses-bir-billing-plan4",
      "bir-billing-plan1": "expenses-bir-billing",
      "bir-billing": "expenses-bir-billing",
      "annapurna-plan1": "expenses-annapurna-p1",
      "nepal-plan1": "expenses-nepal-p1",
      "nepal-plan2": "expenses-nepal-p2",
    };
    return keysMap[planId] || `expenses-${planId}`;
  };

  const getLedgerCostPerPerson = (planId) => {
    try {
      const storageKey = getExpenseTrackerKey(planId);
      const rawExpenses = localStorage.getItem(storageKey);
      if (!rawExpenses) return null;
      
      const expensesList = JSON.parse(rawExpenses);
      if (!Array.isArray(expensesList) || expensesList.length === 0) return null;
      
      const parentId = getParentTripId(planId);
      const rawMembers = localStorage.getItem(`trek_members_${parentId}`);
      const membersList = rawMembers ? JSON.parse(rawMembers) : getDefaultMembers(parentId);
      
      const activeMembersCount = Array.isArray(membersList) && membersList.length > 0 ? membersList.length : 2;
      
      const total = expensesList
        .filter((e) => !e.settleLater)
        .reduce((sum, e) => sum + (Number(e.amount) || 0), 0);
      
      return Math.round(total / activeMembersCount);
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  const openCostPrompt = (plan, e) => {
    if (e) e.stopPropagation();
    const existing = actualCosts[plan.id];
    const ledgerCost = getLedgerCostPerPerson(plan.id);
    const defaultVal = existing !== undefined ? existing : (ledgerCost !== null ? ledgerCost : parseNumericBudget(plan.budget));
    setInputActualCost(defaultVal ? String(defaultVal) : "");
    setCostPromptModal(plan);
  };

  const handleSaveActualCost = (e) => {
    e.preventDefault();
    if (!costPromptModal) return;
    const planId = costPromptModal.id;
    const numericCost = parseFloat(inputActualCost) || 0;

    const parentTrip = trips.find(t => t.plans.some(p => p.id === planId));
    const tripPlanIds = parentTrip ? parentTrip.plans.map(p => p.id) : [planId];

    const cleanedCompleted = completedPlans.filter(id => !tripPlanIds.includes(id));
    setCompletedPlans([...cleanedCompleted, planId]);

    const updatedCosts = { ...actualCosts, [planId]: numericCost };
    tripPlanIds.forEach(id => {
      if (id !== planId) delete updatedCosts[id];
    });
    setActualCosts(updatedCosts);

    setCostPromptModal(null);
  };

  const handleTogglePlanMark = (plan, e) => {
    if (e) e.stopPropagation();
    const isPlanDone = completedPlans.includes(plan.id);
    if (isPlanDone) {
      setCompletedPlans(completedPlans.filter(id => id !== plan.id));
      const newCosts = { ...actualCosts };
      delete newCosts[plan.id];
      setActualCosts(newCosts);
    } else {
      openCostPrompt(plan, e);
    }
  };

  const formatCurrency = (val) => {
    if (val === undefined || val === null || isNaN(val)) return "₹0";
    const num = Number(val);
    const formatted = num.toLocaleString("en-IN", {
      minimumFractionDigits: num % 1 !== 0 ? 2 : 0,
      maximumFractionDigits: 2,
    });
    return `₹${formatted}`;
  };

  const getCompletedPlansText = (trip) => {
    if (trip.isCompleted && trip.spentTotal !== undefined && trip.spentTotal !== null) {
      return formatCurrency(trip.spentTotal);
    }
    const donePlans = trip.plans.filter(p => completedPlans.includes(p.id));
    if (donePlans.length === 0) return "Done";
    return donePlans.map(p => {
      const actual = actualCosts[p.id];
      if (actual !== undefined && actual !== null && !isNaN(parseFloat(actual))) {
        return formatCurrency(parseFloat(actual));
      }
      return "Done";
    }).join(", ");
  };

  const toggleTripCompleted = (trip, e) => {
    e.stopPropagation();
    const tripPlanIds = trip.plans.map(p => p.id);
    const hasAnyDone = tripPlanIds.some(id => completedPlans.includes(id));

    if (hasAnyDone) {
      const updated = completedPlans.filter(id => !tripPlanIds.includes(id));
      setCompletedPlans(updated);
      const newCosts = { ...actualCosts };
      tripPlanIds.forEach(id => delete newCosts[id]);
      setActualCosts(newCosts);
    } else {
      // Open cost prompt for first plan
      openCostPrompt(trip.plans[0], e);
    }
  };

  const togglePlanCompleted = (planId) => {
    const updated = completedPlans.includes(planId)
      ? completedPlans.filter(id => id !== planId)
      : [...completedPlans, planId];
    setCompletedPlans(updated);
  };

  const trips = [
    {
      id: "rudranath",
      tags: ["panch-kedar"],
      type: "trek",
      typeLabel: "Mountain Trek",
      title: "Rudranath & Tungnath Trek",
      subtitle: "Uttarakhand, India",
      description: "A backpacking trek across the ancient temples and towering peaks of the Garhwal Himalayas.",
      stats: {
        duration: "6–9 Days (Jul 2026)",
        distance: "52–60 km Trek",
        budget: `₹${(rudranathAmounts.plan2.budgetTotal / 1000).toFixed(1)}K–${(rudranathAmounts.plan1.budgetTotal / 1000).toFixed(1)}K`,
      },
      image: "/mountain_clay_peak.png",
      plans: [
        {
          id: "rudranath-plan1",
          title: "Plan 1 (Standard Route)",
          duration: "9 Days (2 Jul – 10 Jul 2026)",
          route: "Hisar → Haridwar → Sagar → Rudranath → Chopta → Kalpeshwar → Rishikesh → Hisar",
          details: "Includes Kalpeshwar (Panch Kedar temple) and a leisure day exploring Rishikesh ghats.",
          budget: `₹${rudranathAmounts.plan1.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/rudranath-plan1",
        },
        {
          id: "rudranath-plan2",
          title: "Plan 2 (Direct Route)",
          duration: "6 Days (3 Jul – 8 Jul 2026)",
          route: "Hisar (3 Jul 5:00 PM) → Haridwar → Sagar → Rudranath → Chopta → Kartik Swami → Hisar (8 Jul 10:00 PM)",
          details: "Fast-paced route departing Hisar 3 Jul 5:00 PM, returning 8 Jul 10:00 PM.",
          budget: `₹${rudranathAmounts.plan2.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/rudranath-plan2",
        },
      ],
    },
    {
      id: "shrikhand-mahadev",
      tags: ["panch-kailash"],
      type: "trek",
      typeLabel: "Mountain Trek",
      title: "Shrikhand Mahadev Trek",
      subtitle: "Himachal Pradesh, India",
      description: "One of India's most challenging high-altitude pilgrimages ascending to a 75ft natural rock Shivling at 17,150 ft in the Kullu Himalayas.",
      stats: {
        duration: "6–7 Days (Jul 2026)",
        distance: "64 km Trek",
        budget: `₹${(budgetShrikhand2.total / 1000).toFixed(1)}K–${(budgetShrikhand1.total / 1000).toFixed(1)}K`,
      },
      image: "/mountain_clay_peak.png",
      plans: [
        {
          id: "shrikhand-plan1",
          title: "Plan 1 (Standard Yatra Route)",
          duration: "15 Jul – 21 Jul 2026 (7 Days)",
          route: "Hisar → Shimla → Rampur → Jaon → Singhad → Thachru → Kali Ghati → Bhim Dwar → Shrikhand Mahadev (5,227m) → Hisar",
          details: "Standard 7-day pilgrimage route with acclimatization stays at Thachru and Bhim Dwar base camp.",
          budget: `₹${budgetShrikhand1.total.toLocaleString("en-IN")} / person`,
          path: "/shrikhand-plan1",
        },
        {
          id: "shrikhand-plan2",
          title: "Plan 2 (Express Direct Route)",
          duration: "16 Jul – 21 Jul 2026 (6 Days)",
          route: "Hisar (15 Jul 10:00 PM) → Rampur → Jaon → Singhad → Kali Ghati → Bhim Dwar → Shrikhand Summit → Jaon → Hisar",
          details: "Fast-paced 6-day direct route departing Hisar late night, bypassing Shimla stay.",
          budget: `₹${budgetShrikhand2.total.toLocaleString("en-IN")} / person`,
          path: "/shrikhand-plan2",
        },
      ],
    },
    {
      id: "hampta-pass",
      type: "trek",
      typeLabel: "Mountain Trek",
      title: "Hampta Pass Crossover Trek",
      subtitle: "Himachal Pradesh, India",
      description: "A spectacular crossover trek passing through dense pine forests and high-altitude alpine meadows to Lahaul's barren desert landscapes.",
      stats: {
        duration: "4–5 Days (Aug 2026)",
        distance: "35 km Trek",
        budget: `₹${(budgetHampta2.total / 1000).toFixed(1)}K–${(budgetHampta1.total / 1000).toFixed(1)}K`,
      },
      image: "/mountain_clay_peak.png",
      plans: [
        {
          id: "hampta-plan1",
          title: "Plan 1 (Standard with Chandra Tal)",
          duration: "10 Aug – 14 Aug 2026 (5 Days)",
          route: "Delhi → Manali → Jobra → Chika → Balu Ka Ghera → Hampta Pass (4,270m) → Shea Goru → Chatru → Chandra Tal Lake → Manali → Delhi",
          details: "Complete 5-day crossover trek including the detour to Chandra Tal high-altitude lake.",
          budget: `₹${budgetHampta1.total.toLocaleString("en-IN")} / person`,
          path: "/hampta-plan1",
        },
        {
          id: "hampta-plan2",
          title: "Plan 2 (Express Route Bypassing Chandra Tal)",
          duration: "10 Aug – 13 Aug 2026 (4 Days)",
          route: "Delhi → Manali → Jobra → Chika → Balu Ka Ghera → Hampta Pass (4,270m) → Shea Goru → Chatru → Manali → Delhi",
          details: "Fast-paced 4-day express route bypassing Chandra Tal detour to fit tight holiday schedules.",
          budget: `₹${budgetHampta2.total.toLocaleString("en-IN")} / person`,
          path: "/hampta-plan2",
        },
      ],
    },
    {
      id: "yulla",
      type: "trek",
      typeLabel: "Trek & Scooty",
      title: "Yulla Kanda Trek & Shimla",
      subtitle: "Himachal Pradesh, India",
      description: "Trek to the highest Krishna Temple in the world in Kinnaur, followed by a 2-day scooty sightseeing exploration in Shimla.",
      stats: {
        duration: "4–5 Days",
        distance: "24 km Trek",
        budget: `₹${(yullaAmounts.plan3.budgetTotal / 1000).toFixed(1)}K–${(yullaAmounts.plan1.budgetTotal / 1000).toFixed(1)}K`,
      },
      image: "/mountain_clay_peak.png",
      plans: [
        {
          id: "yulla-plan1",
          title: "Plan 1 (Continuous Scooty)",
          duration: "5 Days",
          route: "Delhi → Shimla → Yulla Khas (via Scooty) → Yulla Kanda Lake → Yulla Khas → Shimla (via Scooty) → Delhi",
          details: "Adventure budget route renting a scooty in Shimla and riding it all the way to Yulla Khas base village and back.",
          budget: `₹${yullaAmounts.plan2.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/yulla-plan1",
        },
        {
          id: "yulla-plan2",
          title: "Plan 2 (Standard Transit)",
          duration: "5 Days",
          route: "Delhi → Shimla → Tapri → Yulla Khas → Yulla Kanda Lake → Yulla Khas → Shimla (Scooty exploration) → Delhi",
          details: "Self-guided budget route using HRTC buses, village homestays, and a 2-day Shimla scooty exploration at the end.",
          budget: `₹${yullaAmounts.plan1.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/yulla-plan2",
        },
        {
          id: "yulla-plan3",
          title: "Plan 3 (Direct Bus / Budget Trek)",
          duration: "4 Days",
          route: "Delhi → Shimla → Tapri → Yulla Khas → Yulla Kanda Lake → Yulla Khas → Tapri → Shimla → Delhi",
          details: "Pure budget trek using direct HRTC buses and local Bolero jeeps without scooty rental or extra Shimla hotel stays.",
          budget: `₹${yullaAmounts.plan3.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/yulla-plan3",
        }
      ],
    },
    {
      id: "hemkund",
      type: "trek",
      typeLabel: "Alpine Trek",
      title: "Valley of Flowers, Hemkund Sahib & Badrinath Circuit",
      subtitle: "Uttarakhand, India",
      description: "Trek through the UNESCO World Heritage alpine floral meadows and visit the sacred high-altitude Shree Hemkund Sahib Gurudwara.",
      stats: {
        duration: "6–7 Days",
        distance: "38 km Trek",
        budget: `₹${(hemkundAmounts.budgetTotal / 1000).toFixed(1)}K–₹${(hemkundAmounts.plan2BudgetTotal / 1000).toFixed(1)}K`,
      },
      image: "/mountain_clay_peak.png",
      plans: [
        {
          id: "hemkund",
          title: "Plan 1: Standard Trek Plan (Valley + Hemkund)",
          duration: "6 Days",
          route: "Delhi → Haridwar → Govindghat → Ghangaria → Valley of Flowers & Hemkund Sahib → Haridwar → Delhi",
          details: "Complete 6-day self-guided pilgrimage and alpine valley trek starting and ending in Delhi via Haridwar & Govindghat.",
          budget: `₹${hemkundAmounts.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/hemkund",
        },
        {
          id: "hemkund-badrinath",
          title: "Plan 2: Combined Circuit (Valley + Hemkund + Badrinath Dham)",
          duration: "7 Days",
          route: "Delhi → Govindghat → Ghangaria → Valley of Flowers & Hemkund Sahib → Badrinath Dham (25 km Extension) → Haridwar → Delhi",
          details: "Extended 7-day circuit adding Badrinath Temple Darshan, Tapt Kund & Mana Village right after finishing the trek.",
          budget: `₹${hemkundAmounts.plan2BudgetTotal.toLocaleString("en-IN")} / person`,
          path: "/hemkund",
        }
      ],
    },
    {
      id: "annapurna",
      type: "trek",
      typeLabel: "International Alpine Trek",
      title: "Annapurna Base Camp Expedition",
      subtitle: "Nepal Himalayas",
      description: "A high-altitude expedition from Delhi to Annapurna Base Camp (4,130m / 13,549 ft) via Sonauli border, Pokhara, and the Modi Khola valley sanctuary.",
      stats: {
        duration: "10 Days",
        distance: "75 km Trek",
        budget: `₹${(annapurnaAmounts.plan1.budgetTotal / 1000).toFixed(1)}K`,
      },
      image: "/mountain_clay_peak.png",
      plans: [
        {
          id: "annapurna-plan1",
          title: "Ultra-Budget Route (Delhi Round Trip)",
          duration: "10 Days",
          route: "Delhi → Gorakhpur (IRCTC Sleeper) → Sonauli → Bhairahawa → Pokhara (Local Bus) → Nayapul → ABC → Pokhara → Delhi",
          details: "Self-guided ultra-budget overland plan using Sleeper train berths, local buses, teahouses, and Dal Bhat meals.",
          budget: `₹${annapurnaAmounts.plan1.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/annapurna-plan1",
        }
      ],
    },
    {
      id: "spiti",
      type: "trip",
      typeLabel: "Riding Expedition",
      title: "Spiti Valley Expedition",
      subtitle: "Himachal Pradesh, India",
      description: "A high-altitude mountain riding expedition from Delhi via Manali, Atal Tunnel, Kunzum Pass (14,931 ft), Kaza, Key Monastery, Hikkim & Chandratal Lake.",
      stats: {
        duration: "4–6 Days",
        distance: "1430–1500 km Total",
        budget: `₹${(spitiAmounts.plan3.budgetTotal / 1000).toFixed(1)}K–₹${(spitiAmounts.plan1.budgetTotal / 1000).toFixed(1)}K`,
      },
      image: "/mountain_clay_peak.png",
      plans: [
        {
          id: "spiti-plan1",
          title: "Plan 1 (2 Persons Variant)",
          duration: "6 Days (20 Aug – 25 Aug 2026)",
          route: "Sonipat → Manali directly → Kaza (3 Nights Base) → Key, Dhankar & Tabo Monasteries → Shipki La Pass → Manali → Sonipat directly",
          details: "Direct Sonipat-Manali Volvo round-trip + 4-day RE Himalayan bike rental + 3 Nights Kaza homestay base (No Delhi transit, no Chandratal).",
          budget: `₹${spitiAmounts.plan1.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/spiti-plan1",
        },
        {
          id: "spiti-plan2",
          title: "Plan 2 (4 Persons Variant)",
          duration: "6 Days",
          route: "Delhi → Manali → Atal Tunnel → Kaza → Key & High Villages → Chandratal → Manali → Delhi",
          details: "Optimized 4-person group route with 2 Hero Xpulse bikes, 2 Manali scooties, and shared quad stay savings.",
          budget: `₹${spitiAmounts.plan2.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/spiti-plan2",
        },
        {
          id: "spiti-plan3",
          title: "Plan 3 (Express — No Manali Stay)",
          duration: "4 Days",
          route: "Delhi → Manali (Transit) → Kaza → Key & High Villages → Chandratal → Manali → Delhi",
          details: "Express 4-day budget route for 2 riders. Skip Manali hotel stays — ride directly to Kaza on arrival day.",
          budget: `₹${spitiAmounts.plan3.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/spiti-plan3",
        }
      ],
    },
    {
      id: "ladakh",
      type: "trip",
      typeLabel: "Self-Scooty Circuit",
      title: "Ladakh Self-Scooty Circuit",
      subtitle: "Ladakh & Jammu-Kashmir, India",
      description: "An ultimate 12-day self-scooty expedition from Hisar conquering high-altitude passes (Khardung La, Chang La, Zoji La, Baralacha La), Pangong Lake & Nubra Valley.",
      stats: {
        duration: "8-12 Days",
        distance: "1450-2850 km",
        budget: `₹${(ladakhAmounts.plan1.budgetTotal / 1000).toFixed(1)}K–${(ladakhAmounts.plan3.budgetTotal / 1000).toFixed(1)}K`,
      },
      image: "/mountain_clay_peak.png",
      plans: [
        {
          id: "ladakh-plan1",
          title: "Plan 1 (Via Srinagar)",
          duration: "12 Days",
          route: "Hisar → Jammu → Srinagar → Zoji La → Kargil → Leh → Khardung La → Nubra → Pangong → Baralacha La → Manali → Hisar",
          details: "Gradual acclimatization route starting via Srinagar & Zoji La, exploring Leh, Nubra, Pangong, and returning via Manali & Atal Tunnel.",
          budget: `₹${ladakhAmounts.plan1.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/ladakh-plan1",
        },
        {
          id: "ladakh-plan2",
          title: "Plan 2 (Via Manali)",
          duration: "12 Days",
          route: "Hisar → Manali → Atal Tunnel → Jispa → Baralacha La → Leh → Khardung La → Nubra → Pangong → Kargil → Srinagar → Hisar",
          details: "High pass thrill route entering via Manali, Atal Tunnel & Baralacha La, exploring Ladakh, and returning via Zoji La & Srinagar.",
          budget: `₹${ladakhAmounts.plan2.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/ladakh-plan2",
        },
        {
          id: "ladakh-plan3",
          title: "Plan 3 (Flight + Rental Bike + HRTC Bus Return)",
          duration: "8 Days",
          route: "Delhi → Leh (Flight) → Leh local (Rental Bike) → Nubra → Pangong → Leh → Keylong (HRTC Bus) → Delhi",
          details: "Time-saving fly-in adventure: Flight to Leh, rent motorbikes in Ladakh for local valleys, and return budget-friendly via HRTC bus.",
          budget: `₹${ladakhAmounts.plan3.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/ladakh-plan3",
        },
        {
          id: "ladakh-plan4",
          title: "Plan 4 (HRTC Bus Both Ways + Rental Bike)",
          duration: "9 Days",
          route: "Delhi → Keylong (HRTC Bus) → Leh → Leh local sightseeing → Nubra → Pangong → Leh (Rental Bike) → Keylong → Delhi (HRTC Bus)",
          details: "Ultimate pocket-friendly overland circuit: Legendary HRTC Delhi-Leh ordinary bus both ways, 5 nights in Ladakh with a rental bike for Nubra & Pangong valleys.",
          budget: `₹${ladakhAmounts.plan4.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/ladakh-plan4",
        }
      ],
    },
    {
      id: "sikkim",
      type: "trip",
      typeLabel: "Circuit Trip",
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
    {
      id: "madhyamaheshwar",
      tags: ["panch-kedar"],
      type: "trek",
      typeLabel: "Panch Kedar Trek",
      title: "Madhyamaheshwar & Kedarnath Circuit",
      subtitle: "Uttarakhand, India",
      description: "A spiritual and scenic yatra to the high alpine meadows of Madhyamaheshwar, Budha Madhyamaheshwar, and Kedarnath Dham.",
      stats: {
        duration: "5–8 Days",
        distance: "36–68 km Trek",
        budget: `₹${(madhyamaheshwarAmounts.plan1.budgetTotal / 1000).toFixed(1)}K–${(madhyamaheshwarAmounts.plan2.budgetTotal / 1000).toFixed(1)}K`,
      },
      image: "/mountain_clay_peak.png",
      plans: [
        {
          id: "madhyamaheshwar-plan1",
          title: "Plan 1: Madhyamaheshwar & Budha Madhyamaheshwar",
          duration: "5 Days",
          route: "Delhi → Rishikesh → Ukhimath → Ransi → Bantoli → Madhyamaheshwar → Budha Madhyamaheshwar → Ransi → Rishikesh → Delhi",
          details: "Scenic 5-day route climbing to Madhyamaheshwar and Budha Madhyamaheshwar with Chaukhamba sunrise reflections.",
          budget: `₹${madhyamaheshwarAmounts.plan1.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/madhyamaheshwar-plan1",
        },
        {
          id: "madhyamaheshwar-plan2",
          title: "Plan 2: Kedarnath + Madhyamaheshwar Combo Circuit",
          duration: "8 Days",
          route: "Delhi → Rishikesh → Gaurikund → Kedarnath Temple → Ukhimath → Ransi → Madhyamaheshwar → Budha Madmaheshwar → Ransi → Rishikesh → Delhi",
          details: "Extended 8-day dual pilgrimage route combining the holy Kedarnath yatra and serene Madhyamaheshwar trek.",
          budget: `₹${madhyamaheshwarAmounts.plan2.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/madhyamaheshwar-plan2",
        }
      ],
    },
    {
      id: "kedarkantha",
      type: "trek",
      typeLabel: "Winter Snow Trek",
      title: "Kedarkantha Peak Summit",
      subtitle: "Uttarakhand, India",
      description: "A classic winter snow climb in the Garhwal Himalayas up to the 3,810m summit, featuring beautiful snow forest trails and the frozen Juda Ka Talab lake.",
      stats: {
        duration: "5 Days (Jan 2027)",
        distance: "18 km Trek",
        budget: `₹${(kedarkanthaAmounts.budgetTotal / 1000).toFixed(1)}K`,
      },
      image: "/mountain_clay_peak.png",
      plans: [
        {
          id: "kedarkantha",
          title: "Standard Winter Plan (Delhi Round Trip)",
          duration: "5 Days",
          route: "Delhi → Dehradun → Sankri → Juda Ka Talab → Kedarkantha Summit (3,810m) → Hargaon Camp → Sankri → Dehradun → Delhi",
          details: "Acclimatized 5-day summit route designed for solo budget travelers with local camp renting options.",
          budget: `₹${kedarkanthaAmounts.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/kedarkantha",
        }
      ],
    },
    {
      id: "bir-billing",
      type: "trip",
      typeLabel: "Adventure Trip",
      title: "Bir Billing Paragliding",
      subtitle: "Himachal Pradesh, India",
      description: "Experience paragliding at Asia's highest takeoff site, combined with a scenic pine forest trek and local monastery exploration.",
      stats: {
        duration: "4 Days",
        distance: "7 km Trek",
        budget: `₹${(birBillingAmountsPlan2.budgetTotal / 1000).toFixed(1)}K - ₹${(birBillingAmountsPlan1.budgetTotal / 1000).toFixed(1)}K`,
      },
      image: "/mountain_clay_peak.png",
      plans: [
        {
          id: "bir-billing-plan1",
          title: "Couples Plan (Private Rooms & Scooties)",
          duration: "4 Days",
          route: "Sonipat → Bir Colony (Private Stay) → Billing camp via scooter → Return ride to Bir → Sonipat",
          details: "Two couples setup with private double hotel rooms, rented scooties, and shared fuel.",
          budget: `₹${birBillingAmountsPlan1.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/bir-billing-plan1",
        },
        {
          id: "bir-billing-plan2",
          title: "Solo Explorer Plan (Dorms & Scooty - No Flight)",
          duration: "4 Days",
          route: "Sonipat → Bir Colony (Dorm Stay) → Explore villages/waterfalls by scooter → Camp at Billing → Sonipat",
          details: "Designed for solo travelers using hostels and zipping around by scooter. No paragliding.",
          budget: `₹${birBillingAmountsPlan2.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/bir-billing-plan2",
        },
        {
          id: "bir-billing-plan3",
          title: "Solo Flyer Plan (Dorms & Scooty - With Flight)",
          duration: "4 Days",
          route: "Sonipat → Bir Colony (Dorm Stay) → Scooter explore → Cab to Billing camp → Paraglide down to Bir → Sonipat",
          details: "Solo package including hostel beds, 1-day scooter hire, and a tandem paragliding flight.",
          budget: `₹${birBillingAmountsPlan3.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/bir-billing-plan3",
        },
        {
          id: "bir-billing-plan4",
          title: "Group Dharamshala Scooty Plan (4 Pax - Split Cost)",
          duration: "4 Days",
          route: "Sonipat → Dharamshala via bus → Rent 2 Scooties → Ride to Bir base (2 Nights) & Billing → Dharamshala return",
          details: "Four people group renting two scooties directly from Dharamshala. Stay at Bir hotel (MMT booking) for both nights with shared costs split equally.",
          budget: `₹${birBillingAmountsPlan4.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/bir-billing-plan4",
        }
      ],
    },
    {
      id: "jibhi",
      type: "trip",
      typeLabel: "Adventure Trip",
      title: "Jibhi & Tirthan Valley",
      subtitle: "Himachal Pradesh, India",
      description: "Explore the magical Jibhi Valley, hike to holy Serolsar Lake, and admire the majestic 10-story high Chehni Kothi tower temple.",
      stats: {
        duration: "4 Days",
        distance: "5 km Trek",
        budget: `₹${(jibhiAmountsPlan2.budgetTotal / 1000).toFixed(1)}K - ₹${(jibhiAmountsPlan1.budgetTotal / 1000).toFixed(1)}K`,
      },
      image: "/mountain_clay_peak.png",
      plans: [
        {
          id: "jibhi-plan1",
          title: "Couples Plan (Private Rooms & Scooties)",
          duration: "4 Days",
          route: "Sonipat → Aut Tunnel → Jibhi (Private stay) via local bus → Ride scooters to Jalori Pass, Chehni Kothi & Gushaini → Sonipat",
          details: "Two couples setup with cozy double rooms, 2 scooties, local bus transits from Aut tunnel, and shared fuel.",
          budget: `₹${jibhiAmountsPlan1.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/jibhi-plan1",
        },
        {
          id: "jibhi-plan2",
          title: "Solo Explorer Plan (Dorms & Scooty)",
          duration: "4 Days",
          route: "Sonipat → Aut Tunnel → Jibhi (Dorm stay) → Ride scooter to Jalori Pass, Serolsar Lake & Gushaini → Sonipat",
          details: "Perfect solo travel budget utilizing hostel beds, local bus transits, and scooter rental.",
          budget: `₹${jibhiAmountsPlan2.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/jibhi-plan2",
        }
      ],
    },
    {
      id: "nepal",
      type: "trip",
      typeLabel: "International Budget Trip",
      title: "Nepal Budget Tour",
      subtitle: "Kathmandu & Pokhara, Nepal",
      description: "Cheapest international backpacking trip to Nepal from Delhi. Circle the giant Boudhanath Stupa, visit the ancient Pashupatinath Temple, witness the golden Annapurna sunrise from Sarangkot, and boat in Phewa Lake, all on an extreme shoestring budget using trains and local buses.",
      stats: {
        duration: "7 Days",
        distance: "2,320 km Round-Trip",
        budget: `₹${(nepalAmounts1.budgetTotal / 1000).toFixed(1)}K - ₹${(nepalAmounts2.budgetTotal / 1000).toFixed(1)}K`,
      },
      image: "/mountain_clay_peak.png",
      plans: [
        {
          id: "nepal-plan1",
          title: "Sleeper Train & Local Buses Route",
          duration: "7 Days",
          route: "Delhi → Gorakhpur (Sleeper Train) → Sonauli Border (Foot Crossing) → Kathmandu (Overnight Bus) → Pokhara (Tourist Bus) → Sonauli → Gorakhpur → Delhi",
          details: "Cheapest land crossing route utilizing Indian Railways Sleeper Class, local UP roadways buses, and Nepalese overnight tourist coaches with hostel dorm stays.",
          budget: `₹${nepalAmounts1.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/nepal-plan1",
        },
        {
          id: "nepal-plan2",
          title: "Scooty Adventure Plan (1 Scooty Shared between 2)",
          duration: "7 Days",
          route: "Delhi → Gorakhpur → Sonauli Border (Foot Crossing) → Kathmandu (Rent shared Scooty for local touring) → Pokhara (Rent lakeside shared Scooty) → Sonauli → Delhi",
          details: "Cheapest land crossing combined with local freedom: share 1 rental scooty and fuel costs between 2 persons in Nepal.",
          budget: `₹${nepalAmounts2.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/nepal-plan2",
        }
      ],
    },
    {
      id: "ujjain",
      type: "jyotirlinga",
      tags: ["jyotirlinga"],
      typeLabel: "2-Jyotirlinga Circuit",
      title: "MP Circuit: Mahakaleshwar & Omkareshwar",
      subtitle: "Madhya Pradesh, India",
      description: "Cover 2 sacred Jyotirlingas in a single 3-day spiritual circuit — Mahakaleshwar in Ujjain & Omkareshwar on the holy Narmada River island.",
      stats: {
        duration: "3 Days",
        distance: "1,970 km Circuit",
        budget: `₹${(ujjainAmounts.budgetTotal / 1000).toFixed(1)}K`,
      },
      image: "/mountain_clay_peak.png",
      plans: [
        {
          id: "ujjain",
          title: "MP Circuit: Mahakaleshwar & Omkareshwar",
          duration: "3 Days",
          route: "Delhi/Sonipat → Ujjain (Mahakaleshwar & Harsiddhi) → Omkareshwar & Mamleshwar (Narmada River) → Delhi/Sonipat",
          details: "Budget spiritual circuit covering 2 Jyotirlingas with direct sleeper buses, local express transit, and river ghat visits.",
          budget: `₹${ujjainAmounts.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/ujjain-omkareshwar",
        }
      ],
    },
    {
      id: "vaidyanath",
      type: "jyotirlinga",
      tags: ["jyotirlinga"],
      typeLabel: "Jyotirlinga Yatra",
      title: "Baidyanath Jyotirlinga Yatra",
      subtitle: "Deoghar, Jharkhand",
      description: "Sacred pilgrimage to Lord Baidyanath Dham Jyotirlinga & Trikut Pahar.",
      stats: {
        duration: "3 Days",
        distance: "2500 km",
        budget: "₹" + (vaidyanathAmounts.plan1.total / 1000).toFixed(1) + "K"
      },
      image: "/mountain_clay_peak.png",
      plans: [
        {
          id: "vaidyanath-plan1",
          title: "Baidyanath Jyotirlinga Yatra",
          duration: "3 Days / 2 Nights",
          route: "Delhi → Jasidih → Deoghar (Baidyanath Dham) → Trikut Pahar → Delhi",
          details: "Budget train weekend pilgrimage covering Baidyanath Jyotirlinga, Shivganga & Tapovan.",
          budget: "₹" + vaidyanathAmounts.plan1.total.toLocaleString("en-IN") + " / person",
          path: "/vaidyanath"
        }
      ]
    },
    {
      id: "auli",
      type: "trip",
      typeLabel: "Winter Adventure",
      title: "Auli Snow & Skiing",
      subtitle: "Uttarakhand, India",
      description: "Witness pristine snow-covered slopes, enjoy one of Asia's longest ropeway cable cars, learn skiing, and trek to Gorson Bugyal.",
      stats: {
        duration: "5 Days",
        distance: "1,100 km Round-Trip",
        budget: `₹${(auliAmounts.budgetTotal / 1000).toFixed(1)}K`,
      },
      image: "/mountain_clay_peak.png",
      plans: [
        {
          id: "auli",
          title: "Budget Adventure Plan (Ordinary Bus & GMOU Local Bus)",
          duration: "5 Days",
          route: "Sonipat → Rishikesh (Ordinary Bus) → Joshimath (GMOU Local Bus) → Auli slopes (Ropeway) → Gorson Bugyal → Sonipat",
          details: "Winter escape utilizing ordinary roadways bus from Sonipat bypass, state-run mountain buses, and hotel stays in Joshimath.",
          budget: `₹${auliAmounts.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/auli",
        }
      ],
    },
    {
      id: "kashmir",
      type: "trip",
      typeLabel: "Valley Expedition",
      title: "Kashmir Valley Wanderer",
      subtitle: "Jammu & Kashmir, India",
      description: "Enjoy peaceful shikara rides on Dal Lake, stay in traditional wooden houseboats, walk Gulmarg's meadows, and explore Lidder river in Pahalgam.",
      stats: {
        duration: "6 Days",
        distance: "1,700 km Round-Trip",
        budget: `₹${(kashmirAmounts.budgetTotal / 1000).toFixed(1)}K - ₹${(kashmirPlan2Amounts.budgetTotal / 1000).toFixed(1)}K`,
      },
      image: "/mountain_clay_peak.png",
      plans: [
        {
          id: "kashmir-plan1",
          title: "Plan 1: Standard Plan (Train & Shared Cabs)",
          duration: "6 Days",
          route: "Delhi → Jammu (Train) → Banihal (Shared Cab) → Srinagar (Local DEMU Train) → Gulmarg & Pahalgam → Delhi",
          details: "Budget exploration using overnight sleeper train, mountain highway shared cabs, local valley train shuttle, and budget stays.",
          budget: `₹${kashmirAmounts.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/kashmir-plan1",
        },
        {
          id: "kashmir-plan2",
          title: "Plan 2: Self-Ride Plan (Srinagar Bike Rental)",
          duration: "6 Days",
          route: "Delhi → Jammu (Train) → Banihal (Shared Cab) → Srinagar (Local DEMU Train) → Rent RE Himalayan in Srinagar → Gulmarg & Pahalgam → Delhi",
          details: "Self-ride exploration. Rent a Royal Enfield Himalayan in Srinagar to explore local gardens, Gulmarg, and Pahalgam loops freely.",
          budget: `₹${kashmirPlan2Amounts.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/kashmir-plan2",
        }
      ],
    }
  ];

  const rawAllTrips = [...trips, ...completedTrips,
    {
      id: "kalpeshwar",
      type: "panch-kedar",
      typeLabel: "Panch Kedar Yatra",
      title: "Kalpeshwar Temple Yatra",
      subtitle: "Uttarakhand, India",
      tags: ["panch-kedar"],
      description: "Fifth Kedar shrine in Urgam Valley where Lord Shiva's matted hair (Jata) is worshipped.",
      isComingSoon: true,
      stats: { duration: "4 Days", distance: "500 km", budget: "₹" + (kalpeshwarBudget.total / 1000).toFixed(1) + "K" },
      image: "/mountain_clay_peak.png",
      plans: [{ id: "kalpeshwar-plan", title: "Kalpeshwar Darshan Yatra", duration: "4 Days", route: "Rishikesh – Urgam – Kalpeshwar", details: "Serene pilgrimage trek in Urgam Valley.", budget: "₹" + kalpeshwarBudget.total.toLocaleString("en-IN") + " / person", path: "/kalpeshwar" }]
    },
    {
      id: "adi-kailash",
      type: "panch-kailash",
      typeLabel: "Panch Kailash Yatra",
      title: "Adi Kailash & Om Parvat Yatra",
      subtitle: "Uttarakhand, India",
      tags: ["panch-kailash"],
      description: "Sacred pilgrimage to the Chhota Kailash and the natural snow-formed Om Parvat.",
      isComingSoon: true,
      stats: { duration: "7 Days", distance: "1100 km", budget: "₹" + (adiKailashBudget.total / 1000).toFixed(1) + "K" },
      image: "/mountain_clay_peak.png",
      plans: [{ id: "adi-kailash-plan", title: "Adi Kailash & Om Parvat Expedition", duration: "7 Days", route: "Kathgodam – Dharchula – Jolingkong – Adi Kailash", details: "Majestic Himalayan Kailash Yatra.", budget: "₹" + adiKailashBudget.total.toLocaleString("en-IN") + " / person", path: "/adi-kailash" }]
    },
    {
      id: "kinnaur-kailash",
      type: "panch-kailash",
      typeLabel: "Panch Kailash Yatra",
      title: "Kinnaur Kailash Yatra",
      subtitle: "Himachal Pradesh, India",
      tags: ["panch-kailash"],
      description: "High altitude trek to the sacred 79-foot natural rock Shivlingam in Kinnaur.",
      isComingSoon: true,
      stats: { duration: "6 Days", distance: "700 km", budget: "₹" + (kinnaurKailashBudget.total / 1000).toFixed(1) + "K" },
      image: "/mountain_clay_peak.png",
      plans: [{ id: "kinnaur-kailash-plan", title: "Kinnaur Kailash Parikrama Trek", duration: "6 Days", route: "Shimla – Reckong Peo – Tangling – Kinnaur Kailash", details: "Sacred high pass mountain trek.", budget: "₹" + kinnaurKailashBudget.total.toLocaleString("en-IN") + " / person", path: "/kinnaur-kailash" }]
    },
    {
      id: "manimahesh-kailash",
      type: "panch-kailash",
      typeLabel: "Panch Kailash Yatra",
      title: "Manimahesh Kailash Yatra",
      subtitle: "Himachal Pradesh, India",
      tags: ["panch-kailash"],
      description: "Holy pilgrimage trek to Manimahesh Lake at the base of Chamba Kailash Peak.",
      isComingSoon: true,
      stats: { duration: "5 Days", distance: "650 km", budget: "₹" + (manimaheshKailashBudget.total / 1000).toFixed(1) + "K" },
      image: "/mountain_clay_peak.png",
      plans: [{ id: "manimahesh-kailash-plan", title: "Manimahesh Lake Yatra", duration: "5 Days", route: "Pathankot – Chamba – Hadsar – Manimahesh Lake", details: "Holy bath in Manimahesh Lake.", budget: "₹" + manimaheshKailashBudget.total.toLocaleString("en-IN") + " / person", path: "/manimahesh-kailash" }]
    },
    {
      id: "kailash-mansarovar",
      type: "panch-kailash",
      typeLabel: "Panch Kailash Yatra",
      title: "Kailash Mansarovar Yatra",
      subtitle: "Tibet, Himalayas",
      tags: ["panch-kailash"],
      description: "Ultimate spiritual Yatra to Mount Kailash (Abode of Lord Shiva) & Lake Mansarovar.",
      isComingSoon: true,
      stats: { duration: "14 Days", distance: "2500 km", budget: "₹" + (kailashMansarovarBudget.total / 1000).toFixed(1) + "K" },
      image: "/mountain_clay_peak.png",
      plans: [{ id: "kailash-mansarovar-plan", title: "Kailash Mansarovar Parikrama", duration: "14 Days", route: "Kathmandu – Kyirong – Mansarovar – Mount Kailash Kora", details: "Sacred international high altitude expedition.", budget: "₹" + kailashMansarovarBudget.total.toLocaleString("en-IN") + " / person", path: "/kailash-mansarovar" }]
    },
    {
      id: "badrinath",
      type: "char-dham",
      typeLabel: "Char Dham Yatra",
      title: "Badrinath Temple Yatra",
      subtitle: "Uttarakhand, India",
      tags: ["char-dham"],
      description: "Sacred shrine of Lord Vishnu in Garhwal Himalayas.",
      isComingSoon: true,
      stats: { duration: "4 Days", distance: "600 km", budget: "₹" + (badrinathBudget.total / 1000).toFixed(1) + "K" },
      image: "/mountain_clay_peak.png",
      plans: [{ id: "badrinath-plan", title: "Badrinath Darshan", duration: "4 Days", route: "Rishikesh – Joshimath – Badrinath – Mana", details: "Pilgrimage to Badrinath and India's last village Mana.", budget: "₹" + badrinathBudget.total.toLocaleString("en-IN") + " / person", path: "/badrinath" }]
    },
    {
      id: "kedarnath",
      type: "char-dham",
      typeLabel: "Char Dham Yatra",
      title: "Kedarnath Temple Trek",
      subtitle: "Uttarakhand, India",
      tags: ["char-dham"],
      description: "Sacred Shiva shrine at 3584m altitude reached via 16km trek from Gaurikund.",
      isComingSoon: true,
      stats: { duration: "5 Days", distance: "550 km", budget: "₹" + (badrinathBudget.total / 1000).toFixed(1) + "K" },
      image: "/mountain_clay_peak.png",
      plans: [{ id: "kedarnath-plan", title: "Kedarnath Yatra Trek", duration: "5 Days", route: "Rishikesh – Sonprayag – Gaurikund – Kedarnath", details: "High altitude trek to holy Kedarnath shrine.", budget: "₹" + badrinathBudget.total.toLocaleString("en-IN") + " / person", path: "/kedarnath" }]
    },
    {
      id: "gangotri",
      type: "char-dham",
      typeLabel: "Char Dham Yatra",
      title: "Gangotri Temple Yatra",
      subtitle: "Uttarakhand, India",
      tags: ["char-dham"],
      description: "Origin of river Ganga in Uttarkashi, holy shrine of Goddess Ganga.",
      isComingSoon: true,
      stats: { duration: "4 Days", distance: "500 km", budget: "₹" + (gangotriBudget.total / 1000).toFixed(1) + "K" },
      image: "/mountain_clay_peak.png",
      plans: [{ id: "gangotri-plan", title: "Gangotri Dham Yatra", duration: "4 Days", route: "Haridwar – Uttarkashi – Gangotri", details: "Spiritual pilgrimage along Bhagirathi river.", budget: "₹" + gangotriBudget.total.toLocaleString("en-IN") + " / person", path: "/gangotri" }]
    },
    {
      id: "yamunotri",
      type: "char-dham",
      typeLabel: "Char Dham Yatra",
      title: "Yamunotri Temple Yatra",
      subtitle: "Uttarakhand, India",
      tags: ["char-dham"],
      description: "Source of river Yamuna, seat of Goddess Yamuna in the Garhwal Himalayas.",
      isComingSoon: true,
      stats: { duration: "4 Days", distance: "450 km", budget: "₹" + (yamunotriBudget.total / 1000).toFixed(1) + "K" },
      image: "/mountain_clay_peak.png",
      plans: [{ id: "yamunotri-plan", title: "Yamunotri Dham Yatra", duration: "4 Days", route: "Haridwar – Barkot – Janki Chatti – Yamunotri", details: "Sacred trek to Yamunotri shrine.", budget: "₹" + yamunotriBudget.total.toLocaleString("en-IN") + " / person", path: "/yamunotri" }]
    },
    {
      id: "puri",
      type: "char-dham",
      typeLabel: "Char Dham Yatra",
      title: "Jagannath Puri Yatra",
      subtitle: "Odisha, India",
      tags: ["char-dham"],
      description: "Famous Eastern Char Dham temple of Lord Jagannath on the Bay of Bengal coast.",
      isComingSoon: true,
      stats: { duration: "3 Days", distance: "1800 km", budget: "₹" + (puriBudget.total / 1000).toFixed(1) + "K" },
      image: "/mountain_clay_peak.png",
      plans: [{ id: "puri-plan", title: "Jagannath Puri & Konark Yatra", duration: "3 Days", route: "Bhubaneswar – Puri – Konark Sun Temple", details: "Sacred Darshan & Golden Beach stay.", budget: "₹" + puriBudget.total.toLocaleString("en-IN") + " / person", path: "/puri" }]
    },


    {
      id: "varanasi",
      type: "jyotirlinga",
      typeLabel: "Jyotirlinga Yatra",
      title: "Kashi Vishwanath Jyotirlinga Yatra",
      subtitle: "Varanasi, Uttar Pradesh",
      description: "Sacred pilgrimage to Kashi Vishwanath Jyotirlinga along the Ganges in Varanasi.",
      stats: {
        duration: "3 Days",
        distance: "1600 km",
        budget: "₹" + (varanasiBudget.total / 1000).toFixed(1) + "K"
      },
      image: "/mountain_clay_peak.png",
      plans: [
        {
          id: "varanasi-plan",
          title: "Kashi Vishwanath Jyotirlinga Yatra",
          duration: "3 Days",
          route: "Delhi – Varanasi – Sarnath – Delhi",
          details: "Spiritual weekend trip covering Kashi Vishwanath, Ganga Aarti, and Sarnath.",
          budget: "₹" + varanasiBudget.total.toLocaleString("en-IN") + " / person",
          path: "/varanasi"
        }
      ]
    },
    {
      id: "somnath-nageshwar",
      type: "jyotirlinga",
      typeLabel: "2-Jyotirlinga Circuit",
      title: "Gujarat Circuit: Somnath & Nageshwar",
      subtitle: "Gujarat, India",
      description: "Sacred pilgrimage covering Somnath, Nageshwar, Dwarkadhish & Beyt Dwarka.",
      stats: {
        duration: "4 Days",
        distance: "950 km",
        budget: "₹" + (somnathNageshwarAmounts.budgetTotal / 1000).toFixed(1) + "K"
      },
      image: "/mountain_clay_peak.png",
      plans: [
        {
          id: "somnath-nageshwar-plan1",
          title: "Gujarat Circuit: Somnath & Nageshwar",
          duration: "4 Days / 3 Nights",
          route: "Ahmedabad – Somnath – Dwarka (Nageshwar & Beyt Dwarka) – Ahmedabad",
          details: "Complete Gujarat Jyotirlinga circuit with Dwarka coastal drive & evening aarti.",
          budget: "₹" + somnathNageshwarAmounts.budgetTotal.toLocaleString("en-IN") + " / person",
          path: "/somnath-nageshwar"
        }
      ]
    },
    {
      id: "south-jyotirlinga",
      type: "jyotirlinga",
      typeLabel: "2-Jyotirlinga Circuit",
      title: "South Circuit: Mallikarjuna & Rameswaram",
      subtitle: "Andhra Pradesh & Tamil Nadu, India",
      description: "Sacred South India circuit covering Mallikarjuna (Srisailam) & Ramanathaswamy (Rameswaram).",
      stats: {
        duration: "7 Days",
        distance: "4,200 km",
        budget: "₹" + (mallikarjunaRameswaramAmounts.plan1.total / 1000).toFixed(1) + "K"
      },
      image: "/mountain_clay_peak.png",
      plans: [
        {
          id: "mallikarjuna-rameswaram-plan1",
          title: "South Circuit: Mallikarjuna & Rameswaram",
          duration: "7 Days / 6 Nights",
          route: "Delhi → Srisailam (Mallikarjuna) → Madurai → Rameswaram (22 Wells & Dhanushkodi) → Delhi",
          details: "Complete budget South circuit with Nallamala forest drive, Pamban sea bridge & 22 holy wells.",
          budget: "₹" + mallikarjunaRameswaramAmounts.plan1.total.toLocaleString("en-IN") + " / person",
          path: "/mallikarjuna-rameswaram"
        }
      ]
    },
    {
      id: "maharashtra-jyotirlinga",
      type: "jyotirlinga",
      tags: ["jyotirlinga"],
      typeLabel: "3-Jyotirlinga Circuit",
      title: "Maharashtra Circuit: Trimbakeshwar, Grishneshwar & Bhimashankar",
      subtitle: "Maharashtra, India",
      description: "Cover 3 holy Jyotirlingas in a single 5-day spiritual circuit from Delhi — Trimbakeshwar (Nashik), Grishneshwar (Ellora Caves) & Bhimashankar Sanctuary.",
      stats: {
        duration: "5 Days",
        distance: "2,850 km Circuit",
        budget: `₹${(maharashtraAmounts.budgetTotal / 1000).toFixed(1)}K`,
      },
      image: "/mountain_clay_peak.png",
      plans: [
        {
          id: "maharashtra-jyotirlinga",
          title: "Maharashtra Circuit: Trimbakeshwar, Grishneshwar & Bhimashankar",
          duration: "5 Days",
          route: "Delhi/Sonipat → Nashik (Trimbakeshwar) → Sambhaji Nagar (Grishneshwar & Ellora) → Bhimashankar → Pune → Delhi/Sonipat",
          details: "Budget spiritual circuit covering 3 Jyotirlingas from Delhi via direct express trains and MSRTC intercity transit.",
          budget: `₹${maharashtraAmounts.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/trimbakeshwar-bhimashankar-grishneshwar",
        }
      ],
    },

  ];

  // Deduplicate allTrips by title/keyword so completed trip entries override active ones
  const allTrips = useMemo(() => {
    const map = new Map();
    rawAllTrips.forEach(trip => {
      if (!trip) return;
      let key = (trip.id || "").toLowerCase().trim();
      const rawTitle = (trip.title || "").toLowerCase();
      if (rawTitle.includes("spiti")) key = "spiti";
      else if (rawTitle.includes("rudranath")) key = "rudranath";
      else if (rawTitle.includes("amritsar")) key = "amritsar";
      else if (rawTitle.includes("hisar")) key = "hisar";
      else if (rawTitle.includes("mussoorie")) key = "mussoorie";
      else if (rawTitle.includes("manali")) key = "manali";
      else if (rawTitle.includes("jaipur")) key = "jaipur";
      else if (rawTitle.includes("vrindavan")) key = "vrindavan";

      if (!map.has(key) || trip.isCompleted) {
        map.set(key, trip);
      }
    });
    return Array.from(map.values());
  }, [rawAllTrips]);

  const getMinBudget = (trip) => {
    if (!trip.stats || !trip.stats.budget) return 0;
    const cleanStr = String(trip.stats.budget).replace(/,/g, '');
    const matchK = cleanStr.match(/(\d+(?:\.\d+)?)\s*K/i);
    if (matchK) {
      return parseFloat(matchK[1]) * 1000;
    }
    const matchNum = cleanStr.match(/(\d+)/);
    if (matchNum) {
      return parseInt(matchNum[1], 10);
    }
    return 0;
  };

  const getDurationDays = (trip) => {
    if (!trip.stats || !trip.stats.duration) return 0;
    const match = String(trip.stats.duration).match(/(\d+)\s*Day/i);
    return match ? parseInt(match[1], 10) : 0;
  };

  const filteredTrips = allTrips.filter(trip => {
    const isDone = isTripCompleted(trip);
    const isArchived = archivedTrips.includes(trip.id);
    const matchesStatus = activeTab === "archived"
      ? isArchived
      : (!isArchived && (activeTab === "done" ? isDone : !isDone));
    const matchesCategory = categoryTab === "all" || trip.type === categoryTab;
    return matchesStatus && matchesCategory;
  });

  const sortedTrips = [...filteredTrips].sort((a, b) => {
    if (sortBy === "money") return getMinBudget(a) - getMinBudget(b);
    if (sortBy === "days") return getDurationDays(a) - getDurationDays(b);
    return 0;
  });

  const jyotirlingaItems = sortedTrips.filter(t => t.type === "jyotirlinga" || (t.tags && t.tags.includes("jyotirlinga")));
  const panchKedarItems = sortedTrips.filter(t => t.tags && t.tags.includes("panch-kedar"));
  const panchKailashItems = sortedTrips.filter(t => t.tags && t.tags.includes("panch-kailash"));
  const charDhamItems = sortedTrips.filter(t => t.tags && t.tags.includes("char-dham"));

  const isSpecialized = (t) => (t.tags && (t.tags.includes("panch-kedar") || t.tags.includes("jyotirlinga") || t.tags.includes("panch-kailash") || t.tags.includes("char-dham"))) || t.type === "jyotirlinga";
  const trekItems = sortedTrips.filter(t => t.type === "trek" && !isSpecialized(t));
  const tripItems = sortedTrips.filter(t => t.type === "trip" && !isSpecialized(t));

  if (isLoading) {
    return (
      <div className="min-h-screen w-screen bg-[#f2efe9] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-5 h-5 rounded-full border-2 border-black border-t-transparent animate-spin" />
        </div>
      </div>
    );
  }

  const toggleCompare = (trip, e) => {
    e.stopPropagation();
    setCompareList(prev => {
      if (prev.includes(trip.id)) return prev.filter(id => id !== trip.id);
      if (prev.length >= 2) return prev;
      return [...prev, trip.id];
    });
  };

  const renderTripCard = (trip) => {
    const isCompleted = isTripCompleted(trip);
    const isNotReady = isNotReadyTrip(trip);
    const isTrek = trip.type === "trek";
    const targetPlanForTrip = trip.plans ? (trip.plans.length === 1 ? (!archivedPlans.includes(trip.plans[0].id) ? trip.plans[0] : null) : trip.plans.find(p => targetPlans.includes(p.id) && !archivedPlans.includes(p.id))) : null;
    const isInCompare = compareList.includes(trip.id);
    const compareDisabled = compareList.length >= 2 && !isInCompare;

    return (
      <div
        key={trip.id}
        onClick={isNotReady ? (e) => e.stopPropagation() : () => setSelectedTrip(trip)}
        className={`rounded-[32px] p-8 shadow-sm transition-all duration-300 flex flex-col justify-between group relative overflow-hidden border ${
          isNotReady && !isCompleted
            ? "bg-slate-200/60 border-slate-300/80 text-slate-500 opacity-75 backdrop-blur-xs hover:bg-slate-200/90 cursor-not-allowed"
            : isCompleted
            ? "bg-white/60 border-black/10 opacity-90 grayscale-[20%] hover:bg-white hover:-translate-y-1 hover:shadow-lg cursor-pointer"
            : isInCompare
            ? "bg-violet-50/60 border-violet-300 ring-2 ring-violet-200/60 hover:bg-white hover:-translate-y-1 hover:shadow-lg cursor-pointer"
            : "bg-white/60 border-black/10 hover:bg-white hover:-translate-y-1 hover:shadow-lg cursor-pointer"
        }`}
      >
        {isInCompare && (
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-400 rounded-t-[32px]" />
        )}
        <div>
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`inline-flex items-center gap-1 text-[9px] font-extrabold uppercase font-mono px-2 py-0.5 rounded-full ${
                  isTrek ? "bg-emerald-500/10 text-emerald-700" : "bg-sky-500/10 text-sky-700"
                }`}>
                  {isTrek ? <Footprints size={10} /> : <Compass size={10} />}
                  {trip.typeLabel}
                </span>
                <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase flex items-center gap-1">
                  <MapPin size={10} />
                  {trip.subtitle}
                </span>
              </div>

              <h3 className="text-2xl font-black uppercase tracking-tight flex items-center gap-2 flex-wrap" style={{ fontFamily: "'Anton', sans-serif" }}>
                {trip.title}
                {isNotReady && !isCompleted && (
                  <span className="bg-slate-300/80 text-slate-700 text-[10px] font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full normal-case border border-slate-400/40 flex items-center gap-1">
                    <Clock size={10} />
                    Coming Soon
                  </span>
                )}
                {isCompleted && (
                  <span className="bg-emerald-500/10 text-emerald-600 text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full normal-case font-sans">
                    Done ({getCompletedPlansText(trip)})
                  </span>
                )}
                {targetPlanForTrip && !isCompleted && (
                  <span className="bg-amber-500/10 text-amber-700 text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded-full normal-case font-sans border border-amber-500/20 flex items-center gap-1">
                    <Star size={10} className="fill-amber-500 text-amber-500" />
                    Target: {targetPlanForTrip.title.split(" (")[0]}
                  </span>
                )}
              </h3>
            </div>
            
            <div className="flex items-center gap-2">
              {/* Compare Toggle Button */}
              <button
                onClick={(e) => toggleCompare(trip, e)}
                disabled={compareDisabled}
                className={`w-10 h-10 rounded-2xl border flex items-center justify-center transition-all shrink-0 ${
                  isInCompare
                    ? "bg-violet-600 border-violet-700 text-white shadow-md"
                    : compareDisabled
                    ? "border-black/5 bg-black/5 text-slate-300 cursor-not-allowed"
                    : "border-black/10 bg-white hover:bg-violet-50 hover:border-violet-300 text-slate-400 hover:text-violet-600"
                }`}
                title={isInCompare ? "Remove from compare" : compareDisabled ? "Max 2 trips for comparison" : "Add to compare"}
              >
                {isInCompare ? <Check size={15} /> : <GitCompareArrows size={15} />}
              </button>

              {!trip.isCompleted && (
                <button
                  onClick={(e) => toggleTripCompleted(trip, e)}
                  className={`w-10 h-10 rounded-2xl border flex items-center justify-center transition-colors shrink-0 ${
                    isCompleted
                      ? "bg-emerald-500 border-emerald-600 text-white hover:bg-emerald-600"
                      : "border-black/10 bg-white hover:bg-slate-50 text-slate-400 hover:text-slate-600"
                  }`}
                  title={isCompleted ? "Mark Active" : "Mark Done"}
                >
                  <CheckCircle2 size={18} />
                </button>
              )}
              {!isCompleted && (
                <button
                  onClick={(e) => handleToggleArchiveTrip(trip, e)}
                  className={`w-10 h-10 rounded-2xl border flex items-center justify-center transition-all shrink-0 ${
                    archivedTrips.includes(trip.id)
                      ? "bg-slate-700 border-slate-800 text-white shadow-md"
                      : "border-black/10 bg-white hover:bg-slate-50 text-slate-400 hover:text-slate-600"
                  }`}
                  title={archivedTrips.includes(trip.id) ? "Unarchive Trip" : "Archive Trip"}
                >
                  <Archive size={15} />
                </button>
              )}
              <div className="w-10 h-10 rounded-2xl border border-black/10 flex items-center justify-center bg-white group-hover:bg-black group-hover:text-white transition-colors duration-300 shrink-0">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6">
            {trip.description}
          </p>

          {/* Quick Stats Grid */}
          {(() => {
            const completedPlan = isCompleted ? trip.plans.find(p => completedPlans.includes(p.id)) : null;
            if (completedPlan) {
              const actualCostVal = actualCosts[completedPlan.id];
              const actualDaysMatch = completedPlan.duration.match(/(\d+)\s*Days?/i);
              const actualDays = actualDaysMatch ? `${actualDaysMatch[1]} Days` : completedPlan.duration;
              
              const rangeMatch = trip.stats.distance.match(/(\d+)\s*–\s*(\d+)/);
              let actualDistance = trip.stats.distance.replace(/\s*Trek|\s*Total/i, "");
              if (rangeMatch) {
                actualDistance = completedPlan.id.endsWith("-plan1") ? `${rangeMatch[2]} km` : `${rangeMatch[1]} km`;
              }
              if (isTrek) actualDistance += " Trek";

              const formattedBudget = actualCostVal !== undefined 
                ? `₹${actualCostVal.toLocaleString("en-IN")}` 
                : completedPlan.budget.split("/")[0].trim();

              return (
                <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-black/5">
                  <div className="bg-emerald-50 rounded-2xl p-3 text-center border border-emerald-100">
                    <Calendar size={14} className="mx-auto text-emerald-500 mb-1" />
                    <p className="text-[10px] font-black uppercase text-emerald-600">Actual Days</p>
                    <p className="text-xs font-black text-emerald-800 mt-0.5">{actualDays}</p>
                  </div>
                  <div className="bg-emerald-50 rounded-2xl p-3 text-center border border-emerald-100">
                    <Route size={14} className="mx-auto text-emerald-500 mb-1" />
                    <p className="text-[10px] font-black uppercase text-emerald-600">Actual {isTrek ? "Trek" : "Dist"}</p>
                    <p className="text-xs font-black text-emerald-800 mt-0.5">{actualDistance}</p>
                  </div>
                  <div className="bg-emerald-50 rounded-2xl p-3 text-center border border-emerald-100">
                    <Wallet size={14} className="mx-auto text-emerald-500 mb-1" />
                    <p className="text-[10px] font-black uppercase text-emerald-600">Actual Cost</p>
                    <p className="text-xs font-black text-emerald-800 mt-0.5">{formattedBudget}</p>
                  </div>
                </div>
              );
            }

            const displayDuration = targetPlanForTrip ? targetPlanForTrip.duration : trip.stats.duration;
            const displayBudget = targetPlanForTrip ? (targetPlanForTrip.budget.includes("/") ? `₹${(parseNumericBudget(targetPlanForTrip.budget) / 1000).toFixed(1)}K` : targetPlanForTrip.budget) : trip.stats.budget;

            return (
              <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-black/5">
                <div className="bg-black/[0.02] rounded-2xl p-3 text-center">
                  <Calendar size={14} className="mx-auto text-slate-400 mb-1" />
                  <p className="text-[10px] font-black uppercase text-slate-400">Days</p>
                  <p className="text-xs font-black mt-0.5">{displayDuration}</p>
                </div>
                <div className="bg-black/[0.02] rounded-2xl p-3 text-center">
                  <Route size={14} className="mx-auto text-slate-400 mb-1" />
                  <p className="text-[10px] font-black uppercase text-slate-400">{isTrek ? "Trek" : "Distance"}</p>
                  <p className="text-xs font-black mt-0.5">{trip.stats.distance}</p>
                </div>
                <div className="bg-black/[0.02] rounded-2xl p-3 text-center">
                  <Wallet size={14} className="mx-auto text-slate-400 mb-1" />
                  <p className="text-[10px] font-black uppercase text-slate-400">Budget</p>
                  <p className="text-xs font-black mt-0.5">{displayBudget}</p>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    );
  };

  const getTripTimestamp = (trip) => {
    const dur = (trip.plans && trip.plans[0] && trip.plans[0].duration) || trip.stats?.duration || "";
    const months = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
    
    const yearMatch = dur.match(/202[5-9]/);
    const year = yearMatch ? parseInt(yearMatch[0], 10) : 2026;

    let monthIdx = 6;
    for (const [mName, mIdx] of Object.entries(months)) {
      if (dur.toLowerCase().includes(mName)) {
        monthIdx = mIdx;
        break;
      }
    }

    const dayMatch = dur.match(/(\d{1,2})\s*(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);
    const day = dayMatch ? parseInt(dayMatch[1], 10) : 1;

    return new Date(year, monthIdx, day).getTime();
  };

  const renderTimelineView = () => {
    const sorted = [...filteredTrips].sort((a, b) => getTripTimestamp(a) - getTripTimestamp(b));

    // Group trips by year
    const groupedByYear = sorted.reduce((acc, trip) => {
      const dur = (trip.plans && trip.plans[0] && trip.plans[0].duration) || trip.stats?.duration || "";
      const yearMatch = dur.match(/202[5-9]/);
      const year = yearMatch ? yearMatch[0] : "2026";
      if (!acc[year]) acc[year] = [];
      acc[year].push(trip);
      return acc;
    }, {});

    const years = Object.keys(groupedByYear).sort((a, b) => parseInt(a, 10) - parseInt(b, 10));

    return (
      <div className="space-y-12 my-6">
        {years.map((year) => {
          const yearTrips = groupedByYear[year];
          const yearTotalSpent = yearTrips.reduce((sum, t) => {
            if (isTripCompleted(t)) {
              if (t.spentTotal !== undefined && t.spentTotal !== null) return sum + t.spentTotal;
              const donePlan = t.plans?.find(p => completedPlans.includes(p.id));
              if (donePlan) {
                const val = actualCosts[donePlan.id];
                const numericVal = (val !== undefined && val !== null && !isNaN(parseFloat(val))) ? parseFloat(val) : parseNumericBudget(donePlan.budget);
                return sum + numericVal;
              }
            }
            return sum;
          }, 0);

          return (
            <div key={year} className="space-y-6">
              {/* Year Section Divider Banner */}
              <div className="flex items-center gap-3 border-b border-black/10 pb-3">
                <div className="flex items-center gap-2 bg-black text-white px-3.5 py-1.5 rounded-2xl text-xs font-mono font-black uppercase tracking-wider shadow-md">
                  <Calendar size={13} />
                  <span>{year} Expedition Timeline</span>
                </div>
                <div className="text-[11px] font-mono font-bold text-slate-500 bg-white/80 border border-black/10 px-3 py-1 rounded-xl shadow-xs">
                  {yearTrips.length} Adventure{yearTrips.length === 1 ? "" : "s"}
                  {yearTotalSpent > 0 && ` • Spent: ${formatCurrency(yearTotalSpent)}`}
                </div>
              </div>

              {/* Vertical Timeline Items Stem */}
              <div className="relative pl-6 md:pl-8 space-y-7 before:absolute before:left-3.5 before:-translate-x-1/2 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-black/30 before:via-black/15 before:to-transparent">
                {yearTrips.map((trip) => {
                  const isCompleted = isTripCompleted(trip);
                  const isTrek = trip.type === "trek";
                  const isExpanded = expandedTripId === trip.id;
                  const targetPlanForTrip = trip.plans ? (trip.plans.length === 1 ? (!archivedPlans.includes(trip.plans[0].id) ? trip.plans[0] : null) : trip.plans.find(p => targetPlans.includes(p.id) && !archivedPlans.includes(p.id))) : null;

                  return (
                    <motion.div
                      key={trip.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative group"
                    >
                      {/* Interactive Node Bullet Marker */}
                      <div
                        className={`absolute -left-6 md:-left-8 top-5 w-7 h-7 rounded-2xl border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-115 z-10 shadow-sm ${
                          isCompleted
                            ? "border-emerald-600 bg-emerald-500 text-white shadow-emerald-500/20"
                            : "border-black/20 bg-white text-slate-500"
                        }`}
                      >
                        {isTrek ? <Footprints size={13} /> : <Compass size={13} />}
                      </div>

                      {/* Timeline Entry Card */}
                      <div className="bg-white/80 hover:bg-white border border-black/10 hover:border-black/25 rounded-3xl p-6 md:p-7 shadow-sm hover:shadow-xl transition-all duration-300 backdrop-blur-md">
                        
                        {/* Top Card Row */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                          <div className="space-y-2 flex-1 cursor-pointer" onClick={() => setSelectedTrip(trip)}>
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className={`inline-flex items-center gap-1 text-[9px] font-extrabold uppercase font-mono px-2.5 py-0.5 rounded-full ${
                                isTrek ? "bg-emerald-500/10 text-emerald-700 border border-emerald-500/20" : "bg-sky-500/10 text-sky-700 border border-sky-500/20"
                              }`}>
                                {isTrek ? <Footprints size={10} /> : <Compass size={10} />}
                                {trip.typeLabel}
                              </span>
                              <span className="text-[10px] font-mono font-bold tracking-wider text-slate-500 uppercase flex items-center gap-1 bg-black/5 px-2.5 py-0.5 rounded-full">
                                <MapPin size={10} />
                                {trip.subtitle}
                              </span>
                              <span className="text-[10px] font-mono font-black text-slate-700 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
                                {isCompleted ? (() => {
                                  const donePlan = trip.plans.find(p => completedPlans.includes(p.id));
                                  return donePlan ? donePlan.duration : trip.stats.duration;
                                })() : trip.stats.duration}
                              </span>
                            </div>

                            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight hover:text-emerald-700 transition-colors flex items-center flex-wrap gap-2" style={{ fontFamily: "'Anton', sans-serif" }}>
                              {trip.title}
                              {isCompleted && (
                                <span className="bg-emerald-500/10 text-emerald-600 text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded-full normal-case font-sans border border-emerald-500/20">
                                  Done ({getCompletedPlansText(trip)})
                                </span>
                              )}
                              {targetPlanForTrip && !isCompleted && (
                                <span className="bg-amber-500/10 text-amber-700 text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded-full normal-case font-sans border border-amber-500/20 flex items-center gap-1">
                                  <Star size={10} className="fill-amber-500 text-amber-500" />
                                  Target: {targetPlanForTrip.title.split(" (")[0]}
                                </span>
                              )}
                            </h3>

                            <p className="text-xs text-slate-500 font-medium line-clamp-2 leading-relaxed">
                              {trip.description}
                            </p>
                          </div>

                          {/* Right Side Stats & Actions */}
                          <div className="flex md:flex-col items-center md:items-end justify-between w-full md:w-auto shrink-0 border-t md:border-t-0 border-black/5 pt-4 md:pt-0 gap-3">
                            {isCompleted ? (
                              <div className="text-left md:text-right">
                                <span className="text-[9px] font-bold font-mono text-emerald-600 uppercase tracking-wider block">Total Spent</span>
                                <span className="text-xl font-black text-emerald-700 font-mono">
                                  {trip.spentTotal !== undefined && trip.spentTotal !== null ? formatCurrency(trip.spentTotal) : getCompletedPlansText(trip)}
                                </span>
                              </div>
                            ) : (
                              <div className="text-left md:text-right">
                                <span className="text-[9px] font-bold font-mono text-slate-400 uppercase tracking-wider block">Est. Budget</span>
                                <span className="text-xl font-black text-black font-mono">{trip.stats.budget}</span>
                              </div>
                            )}

                            <div className="flex items-center gap-2">
                              {/* Quick Expense Drawer Toggle for Completed Trips */}
                              {isCompleted && (
                                (() => {
                                  const donePlanForTrip = trip.plans.find(p => completedPlans.includes(p.id));
                                  if (!donePlanForTrip) return null;
                                  return (
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        if (!isExpanded && !isLedgerUnlocked) {
                                          setPasscodePromptTripId(trip.id);
                                          setPasscodeInput("");
                                          setPasscodeError(false);
                                        } else {
                                          setExpandedTripId(isExpanded ? null : trip.id);
                                        }
                                      }}
                                      className={`px-3 py-1.5 rounded-2xl text-[11px] font-black uppercase font-mono tracking-wider border transition-all flex items-center gap-1.5 ${
                                        isExpanded
                                          ? "bg-black text-white border-black shadow-sm"
                                          : "bg-white/80 hover:bg-white text-slate-700 border-black/15 hover:border-black/30"
                                      }`}
                                      title="Quick Expense Breakdown"
                                    >
                                      <Receipt size={13} />
                                      <span>Expense Breakdown</span>
                                      {isExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                                    </button>
                                  );
                                })()
                              )}

                              {!isCompleted && (
                                <button
                                  onClick={(e) => handleToggleArchiveTrip(trip, e)}
                                  className={`w-9 h-9 rounded-2xl border flex items-center justify-center transition-all shrink-0 ${
                                    archivedTrips.includes(trip.id)
                                      ? "bg-slate-700 border-slate-800 text-white shadow-md"
                                      : "border-black/15 bg-white hover:bg-slate-50 text-slate-400 hover:text-slate-600"
                                  }`}
                                  title={archivedTrips.includes(trip.id) ? "Unarchive Trip" : "Archive Trip"}
                                >
                                  <Archive size={14} />
                                </button>
                              )}
                              {/* Open Full Itinerary Modal */}
                              <button
                                onClick={() => setSelectedTrip(trip)}
                                className="w-9 h-9 rounded-2xl border border-black/15 flex items-center justify-center bg-white hover:bg-black hover:text-white transition-all duration-300 shadow-xs"
                                title="View Itinerary Modal"
                              >
                                <ArrowUpRight size={16} />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Interactive Inline Expense Breakdown Tray */}
                        <AnimatePresence>
                          {isExpanded && (
                            (() => {
                              const donePlanForTrip = trip.plans.find(p => completedPlans.includes(p.id));
                              if (!donePlanForTrip) return null;
                              return (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.25 }}
                                  className="overflow-hidden border-t border-black/10 mt-5 pt-4"
                                >
                                  <TripExpenseBreakdown planId={donePlanForTrip.id} />
                                </motion.div>
                              );
                            })()
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const completedTripsList = allTrips.filter(t => isTripCompleted(t) && !archivedTrips.includes(t.id));
  const totalSpent = completedTripsList.reduce((sum, trip) => {
    if (trip.spentTotal !== undefined && trip.spentTotal !== null) return sum + trip.spentTotal;
    const donePlan = trip.plans.find(p => completedPlans.includes(p.id) && !archivedPlans.includes(p.id));
    if (!donePlan) return sum;
    const val = actualCosts[donePlan.id];
    return sum + (val !== undefined && val !== null && !isNaN(parseFloat(val)) ? parseFloat(val) : parseNumericBudget(donePlan.budget));
  }, 0);

  const parseBudgetRange = (str) => {
    if (!str) return { min: 0, max: 0 };
    const matches = String(str).match(/₹([0-9,]+)/g);
    if (!matches || matches.length === 0) return { min: 0, max: 0 };
    const nums = matches.map(m => parseInt(m.replace(/[^0-9]/g, ""), 10));
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    return { min, max };
  };

  const getTripBudgetBounds = (trip) => {
    if (!trip.plans || trip.plans.length === 0) {
      return parseBudgetRange(trip.stats?.budget);
    }
    const activePlans = trip.plans.filter(plan => !archivedPlans.includes(plan.id));
    if (activePlans.length === 0) return { min: 0, max: 0 };

    // 1. If an explicit TARGET plan is selected for this trip, use its budget for both min and max
    const targetPlan = activePlans.find(p => targetPlans.includes(p.id));
    if (targetPlan) {
      return parseBudgetRange(targetPlan.budget);
    }

    // 2. If NO target plan is explicitly selected, calculate min and max across all available plans
    let minBudget = Infinity;
    let maxBudget = -Infinity;
    activePlans.forEach(plan => {
      const bounds = parseBudgetRange(plan.budget);
      if (bounds.min > 0 && bounds.min < minBudget) minBudget = bounds.min;
      if (bounds.max > maxBudget) maxBudget = bounds.max;
    });

    if (minBudget === Infinity) {
      return parseBudgetRange(trip.stats?.budget);
    }

    return { min: minBudget, max: maxBudget };
  };

  const parseDaysRange = (str) => {
    if (!str) return { min: 0, max: 0 };
    const cleanStr = String(str);
    const daysMatch = cleanStr.match(/(\d+(?:\s*[-–—]\s*\d+)?)\s*days?/i);
    if (daysMatch && daysMatch[1]) {
      const nums = daysMatch[1].match(/\d+/g).map(n => parseInt(n, 10)).filter(n => !isNaN(n));
      if (nums.length > 0) return { min: Math.min(...nums), max: Math.max(...nums) };
    }
    const leadingMatch = cleanStr.match(/^(\d+(?:\s*[-–—]\s*\d+)?)/);
    if (leadingMatch && leadingMatch[1]) {
      const nums = leadingMatch[1].match(/\d+/g).map(n => parseInt(n, 10)).filter(n => !isNaN(n));
      if (nums.length > 0) return { min: Math.min(...nums), max: Math.max(...nums) };
    }
    return { min: 0, max: 0 };
  };

  const getTripDaysBounds = (trip) => {
    if (!trip.plans || trip.plans.length === 0) {
      return parseDaysRange(trip.stats?.duration);
    }
    const activePlans = trip.plans.filter(plan => !archivedPlans.includes(plan.id));
    if (activePlans.length === 0) return { min: 0, max: 0 };

    const targetPlan = activePlans.find(p => targetPlans.includes(p.id));
    if (targetPlan) {
      return parseDaysRange(targetPlan.duration);
    }

    let minDays = Infinity;
    let maxDays = -Infinity;
    activePlans.forEach(plan => {
      const bounds = parseDaysRange(plan.duration);
      if (bounds.min > 0 && bounds.min < minDays) minDays = bounds.min;
      if (bounds.max > maxDays) maxDays = bounds.max;
    });

    if (minDays === Infinity) {
      return parseDaysRange(trip.stats?.duration);
    }

    return { min: minDays, max: maxDays };
  };

  const completedTreksCount = completedTripsList.filter(t => t.type === "trek").length;
  const completedRoadTripsCount = completedTripsList.filter(t => t.type === "trip").length;
  const completedYatrasCount = completedTripsList.filter(t => t.type === "jyotirlinga" || (t.tags && t.tags.includes("jyotirlinga"))).length;
  const completedDaysTotal = completedTripsList.reduce((sum, trip) => {
    const { max } = getTripDaysBounds(trip);
    return sum + max;
  }, 0);

  const activeTrips = trips.filter(t => !isTripCompleted(t) && !archivedTrips.includes(t.id));
  const activeTreksList = activeTrips.filter(t => t.type === "trek");
  const activeRoadTripsList = activeTrips.filter(t => t.type === "trip");
  const activeTreksCount = activeTreksList.length;
  const activeRoadTripsCount = activeRoadTripsList.length;

  const upcomingTreksRange = activeTreksList.reduce((acc, trip) => {
    const { min, max } = getTripBudgetBounds(trip);
    return { min: acc.min + min, max: acc.max + max };
  }, { min: 0, max: 0 });

  const upcomingRoadTripsRange = activeRoadTripsList.reduce((acc, trip) => {
    const { min, max } = getTripBudgetBounds(trip);
    return { min: acc.min + min, max: acc.max + max };
  }, { min: 0, max: 0 });

  const upcomingDaysRange = activeTrips.reduce((acc, trip) => {
    const { min, max } = getTripDaysBounds(trip);
    return { min: acc.min + min, max: acc.max + max };
  }, { min: 0, max: 0 });

  const archivedTripsList = allTrips.filter(t => archivedTrips.includes(t.id));
  const archivedTreksCount = archivedTripsList.filter(t => t.type === "trek").length;
  const archivedRoadTripsCount = archivedTripsList.filter(t => t.type === "trip").length;
  const archivedYatrasCount = archivedTripsList.filter(t => t.type === "jyotirlinga" || (t.tags && t.tags.includes("jyotirlinga"))).length;
  const archivedRange = archivedTripsList.reduce((acc, trip) => {
    let min = Infinity;
    let max = -Infinity;
    (trip.plans || []).forEach(plan => {
      const bounds = parseBudgetRange(plan.budget);
      if (bounds.min > 0 && bounds.min < min) min = bounds.min;
      if (bounds.max > max) max = bounds.max;
    });
    if (min === Infinity) min = 0;
    if (max === -Infinity) max = min;
    return { min: acc.min + min, max: acc.max + max };
  }, { min: 0, max: 0 });

  const archivedDaysRange = archivedTripsList.reduce((acc, trip) => {
    let min = Infinity;
    let max = -Infinity;
    (trip.plans || []).forEach(plan => {
      const bounds = parseDaysRange(plan.duration);
      if (bounds.min > 0 && bounds.min < min) min = bounds.min;
      if (bounds.max > max) max = bounds.max;
    });
    if (min === Infinity) {
      const bounds = parseDaysRange(trip.stats?.duration);
      min = bounds.min;
      max = bounds.max;
    }
    if (min === Infinity) min = 0;
    if (max === -Infinity) max = min;
    return { min: acc.min + min, max: acc.max + max };
  }, { min: 0, max: 0 });

  const jyotirlingaTripsList = allTrips.filter(t => !isTripCompleted(t) && !archivedTrips.includes(t.id) && (t.type === "jyotirlinga" || (t.tags && t.tags.includes("jyotirlinga"))));
  const jyotirlingaCount = jyotirlingaTripsList.length;
  const jyotirlingaRange = jyotirlingaTripsList.reduce((acc, trip) => {
    const { min, max } = getTripBudgetBounds(trip);
    return { min: acc.min + min, max: acc.max + max };
  }, { min: 0, max: 0 });

  const jyotirlingaDaysRange = jyotirlingaTripsList.reduce((acc, trip) => {
    const { min, max } = getTripDaysBounds(trip);
    return { min: acc.min + min, max: acc.max + max };
  }, { min: 0, max: 0 });

  const kedarKailashTripsList = allTrips.filter(t => !isTripCompleted(t) && !archivedTrips.includes(t.id) && (t.type === "panch-kedar" || t.type === "panch-kailash" || (t.tags && (t.tags.includes("panch-kedar") || t.tags.includes("panch-kailash")))));
  const kedarCount = jyotirlingaTripsList ? allTrips.filter(t => !isTripCompleted(t) && !archivedTrips.includes(t.id) && (t.type === "panch-kedar" || t.tags?.includes("panch-kedar"))).length : 0;
  const kailashCount = allTrips.filter(t => !isTripCompleted(t) && !archivedTrips.includes(t.id) && (t.type === "panch-kailash" || t.tags?.includes("panch-kailash"))).length;
  const kedarKailashRange = kedarKailashTripsList.reduce((acc, trip) => {
    const { min, max } = getTripBudgetBounds(trip);
    return { min: acc.min + min, max: acc.max + max };
  }, { min: 0, max: 0 });

  const kedarKailashDaysRange = kedarKailashTripsList.reduce((acc, trip) => {
    const { min, max } = getTripDaysBounds(trip);
    return { min: acc.min + min, max: acc.max + max };
  }, { min: 0, max: 0 });

  const charDhamTripsList = allTrips.filter(t => !isTripCompleted(t) && !archivedTrips.includes(t.id) && (t.type === "char-dham" || (t.tags && t.tags.includes("char-dham"))));
  const dhamCount = charDhamTripsList.length;
  const charDhamRange = charDhamTripsList.reduce((acc, trip) => {
    const { min, max } = getTripBudgetBounds(trip);
    return { min: acc.min + min, max: acc.max + max };
  }, { min: 0, max: 0 });

  const charDhamDaysRange = charDhamTripsList.reduce((acc, trip) => {
    const { min, max } = getTripDaysBounds(trip);
    return { min: acc.min + min, max: acc.max + max };
  }, { min: 0, max: 0 });

  
  const grandTotalEst = {
    min: totalSpent + upcomingTreksRange.min + upcomingRoadTripsRange.min + jyotirlingaRange.min + kedarKailashRange.min + charDhamRange.min,
    max: totalSpent + upcomingTreksRange.max + upcomingRoadTripsRange.max + jyotirlingaRange.max + kedarKailashRange.max + charDhamRange.max
  };

  const grandTotalDaysEst = {
    min: completedDaysTotal + upcomingDaysRange.min + jyotirlingaDaysRange.min + kedarKailashDaysRange.min + charDhamDaysRange.min,
    max: completedDaysTotal + upcomingDaysRange.max + jyotirlingaDaysRange.max + kedarKailashDaysRange.max + charDhamDaysRange.max
  };

  return (
    <div className="min-h-screen w-screen bg-[#f2efe9] text-black selection:bg-black/10 flex flex-col justify-between relative font-sans">
      
      {/* Header */}
      <header className="w-full py-4 px-6 md:px-12 flex justify-between items-center z-30">
        <a href="/" className="font-extrabold text-xl tracking-tight uppercase hover:opacity-75 transition-opacity flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-black"></span>
          Treks & Expeditions
        </a>
        <a
          href="/wardrobe"
          className="px-4 py-2 rounded-xl text-xs font-mono font-black uppercase tracking-wider bg-black text-white hover:bg-black/85 transition-all shadow-sm"
        >
          My Wardrobe
        </a>
      </header>

      {/* Hero Showcase Section: Expedition Journal Book */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-2 pb-8 px-2 md:px-8 bg-gradient-to-b from-[#f2efe9] via-[#e8e4dc] to-[#f2efe9] border-b border-black/10">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-6">
          <div className="text-center space-y-1 max-w-2xl">
            <span className="text-xs font-black font-mono tracking-widest text-amber-900 uppercase bg-amber-900/10 px-3 py-1 rounded-full border border-amber-900/20">
              Expedition Journal • Vol. 1
            </span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-slate-900 mt-2" style={{ fontFamily: "'Anton', sans-serif" }}>
              Treks & Expeditions Journal
            </h1>
            <p className="text-sm md:text-base font-serif italic text-slate-600">
              Flip through completed journey logs, date stamps, route timelines & itemized expense breakdowns.
            </p>
          </div>

          {/* Full-width Centered Journal Book (Grand Scale) */}
          <div className="w-full max-w-6xl shadow-2xl rounded-[40px] overflow-hidden">
            <ExpeditionJournalBook
              completedTrips={completedTripsList}
              setSelectedTrip={setSelectedTrip}
              actualCosts={actualCosts}
              completedPlans={completedPlans}
              archivedPlans={archivedPlans}
            />
          </div>

          {/* Scroll Down Prompt Button */}
          <a
            href="#dashboard-section"
            className="group flex flex-col items-center gap-1 mt-2 text-slate-500 hover:text-black transition-all cursor-pointer"
          >
            <span className="text-[10px] font-black font-mono uppercase tracking-widest group-hover:translate-y-0.5 transition-transform">
              Explore All Adventures Below
            </span>
            <div className="w-8 h-8 rounded-full border border-black/15 bg-white flex items-center justify-center shadow-xs group-hover:border-black group-hover:bg-black group-hover:text-white transition-all animate-bounce">
              <ChevronDown size={16} />
            </div>
          </a>
        </div>
      </section>

      {/* Main Content Dashboard - Full Width Layout */}
      <main id="dashboard-section" className="flex-grow flex flex-col justify-start pt-8 pb-12 px-6 md:px-12 lg:px-16 w-full z-10">
        
        {/* Title & Category Financial Summary Cards */}
        <div className="mb-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-black/5 pb-4">
            <div>
              <span className="text-[10px] font-black font-mono tracking-widest text-slate-400 uppercase">Adventure Portal</span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mt-1" style={{ fontFamily: "'Anton', sans-serif" }}>
                Select Your Adventure
              </h2>
              <p className="text-slate-500 font-medium text-sm mt-1.5 leading-relaxed">
                Explore Himalayan alpine treks, road trips, 12 Jyotirlingas, Panch Kedar, Panch Kailash, and Char Dham pilgrimages with full itineraries and budget breakdowns.
              </p>
            </div>

            {/* Total Financial Summary Pills */}
            <div className="flex flex-wrap items-center gap-2 shrink-0 self-start md:self-auto bg-black/5 p-1.5 rounded-3xl border border-black/5">
              {/* Capsule 1: Total Spent */}
              <div className="flex items-center gap-2 bg-emerald-600 text-white px-3 py-1.5 rounded-2xl shadow-xs">
                <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-white text-[9px] font-black">
                  ₹
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-[8px] font-black uppercase tracking-wider text-emerald-100 font-mono">Total Spent</span>
                    <span className="text-[8px] font-black bg-white/20 px-1 py-0.2 rounded-md font-mono">8 Done</span>
                  </div>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-xs font-black font-mono tracking-tight">₹{Math.round(totalSpent).toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>

              {/* Capsule 2: Planned Est. Budget */}
              <div className="flex items-center gap-2 bg-slate-900 text-white px-3 py-1.5 rounded-2xl shadow-xs">
                <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[9px] font-black border border-emerald-500/30">
                  ₹
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-[8px] font-black uppercase tracking-wider text-slate-400 font-mono">Planned Est.</span>
                    <span className="text-[8px] font-black bg-white/10 text-emerald-400 px-1 py-0.2 rounded-md font-mono">36 Routes</span>
                  </div>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-xs font-black font-mono text-emerald-400 tracking-tight">
                      {Math.round(upcomingTreksRange.min + upcomingRoadTripsRange.min + jyotirlingaRange.min + kedarKailashRange.min + charDhamRange.min) === Math.round(upcomingTreksRange.max + upcomingRoadTripsRange.max + jyotirlingaRange.max + kedarKailashRange.max + charDhamRange.max)
                        ? `₹${Math.round(upcomingTreksRange.min + upcomingRoadTripsRange.min + jyotirlingaRange.min + kedarKailashRange.min + charDhamRange.min).toLocaleString("en-IN")}`
                        : `₹${Math.round(upcomingTreksRange.min + upcomingRoadTripsRange.min + jyotirlingaRange.min + kedarKailashRange.min + charDhamRange.min).toLocaleString("en-IN")}–${Math.round(upcomingTreksRange.max + upcomingRoadTripsRange.max + jyotirlingaRange.max + kedarKailashRange.max + charDhamRange.max).toLocaleString("en-IN")}`}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Summary Stat Badges */}
          <div className="flex flex-col gap-3">
            {/* Top Row: General & Expedition Summaries (2 cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              {/* Card 1: Combined Upcoming Treks & Road Trips Est. */}
              <div className="bg-white/80 backdrop-blur-md border border-emerald-500/30 rounded-2xl p-3 shadow-sm flex flex-col justify-between">
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  <span className="text-[9px] font-black font-mono text-emerald-700 uppercase tracking-wider">Upcoming Treks & Road Trips</span>
                </div>
                <p className="text-base font-black text-black font-mono leading-snug">
                  {upcomingTreksRange.min + upcomingRoadTripsRange.min === upcomingTreksRange.max + upcomingRoadTripsRange.max ? (
                    `₹${(upcomingTreksRange.min + upcomingRoadTripsRange.min).toLocaleString("en-IN")}`
                  ) : (
                    `₹${(upcomingTreksRange.min + upcomingRoadTripsRange.min).toLocaleString("en-IN")} – ₹${(upcomingTreksRange.max + upcomingRoadTripsRange.max).toLocaleString("en-IN")}`
                  )}
                </p>
                <p className="text-[9px] font-bold text-emerald-700/80 mt-0.5 font-mono whitespace-nowrap">
                  {activeTreksCount} Treks • {activeRoadTripsCount} Trips • {upcomingDaysRange.min === upcomingDaysRange.max ? `${upcomingDaysRange.min} Days` : `${upcomingDaysRange.min}–${upcomingDaysRange.max} Days`}
                </p>
              </div>

              {/* Card 2: Archived Est. */}
              <div className="bg-white/80 backdrop-blur-md border border-black/10 rounded-2xl p-3 shadow-sm flex flex-col justify-between">
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-2 h-2 rounded-full bg-slate-500" />
                  <span className="text-[9px] font-black font-mono text-slate-400 uppercase tracking-wider">Archived Est.</span>
                </div>
                <p className="text-base font-black text-black font-mono leading-snug">
                  {archivedRange.min === archivedRange.max ? (
                    `₹${archivedRange.min.toLocaleString("en-IN")}`
                  ) : (
                    `₹${archivedRange.min.toLocaleString("en-IN")} – ₹${archivedRange.max.toLocaleString("en-IN")}`
                  )}
                </p>
                <p className="text-[9px] font-bold text-slate-400 mt-0.5 font-mono whitespace-nowrap">
                  {archivedTreksCount} Treks • {archivedRoadTripsCount} Trips • {archivedDaysRange.min === archivedDaysRange.max ? `${archivedDaysRange.min} Days` : `${archivedDaysRange.min}–${archivedDaysRange.max} Days`}
                </p>
              </div>
            </div>

            {/* Bottom Row: Spiritual Yatras (3 cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
              {/* Card 5: Jyotirlinga Est. */}
              <div className="bg-white/80 backdrop-blur-md border border-amber-500/30 rounded-2xl p-3 shadow-sm flex flex-col justify-between">
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
                  <span className="text-[9px] font-black font-mono text-amber-700 uppercase tracking-wider">Jyotirlinga Est.</span>
                </div>
                <p className="text-sm font-black text-black font-mono leading-snug">
                  {jyotirlingaRange.min === jyotirlingaRange.max ? (
                    `₹${jyotirlingaRange.min.toLocaleString("en-IN")}`
                  ) : (
                    `₹${jyotirlingaRange.min.toLocaleString("en-IN")} – ₹${jyotirlingaRange.max.toLocaleString("en-IN")}`
                  )}
                </p>
                <p className="text-[9px] font-bold text-amber-700/80 mt-0.5 font-mono whitespace-nowrap">
                  {jyotirlingaCount} Shrines • {jyotirlingaDaysRange.min === jyotirlingaDaysRange.max ? `${jyotirlingaDaysRange.min} Days` : `${jyotirlingaDaysRange.min}–${jyotirlingaDaysRange.max} Days`}
                </p>
              </div>

              {/* Card 6: Kedar & Kailash */}
              <div className="bg-white/80 backdrop-blur-md border border-purple-500/30 rounded-2xl p-3 shadow-sm flex flex-col justify-between">
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
                  <span className="text-[9px] font-black font-mono text-purple-700 uppercase tracking-wider">Kedar & Kailash</span>
                </div>
                <p className="text-sm font-black text-black font-mono leading-snug">
                  {kedarKailashRange.min === kedarKailashRange.max ? (
                    `₹${kedarKailashRange.min.toLocaleString("en-IN")}`
                  ) : (
                    `₹${kedarKailashRange.min.toLocaleString("en-IN")} – ₹${kedarKailashRange.max.toLocaleString("en-IN")}`
                  )}
                </p>
                <p className="text-[9px] font-bold text-purple-700/80 mt-0.5 font-mono whitespace-nowrap">
                  {kedarCount} Kedar • {kailashCount} Kailash • {kedarKailashDaysRange.min === kedarKailashDaysRange.max ? `${kedarKailashDaysRange.min} Days` : `${kedarKailashDaysRange.min}–${kedarKailashDaysRange.max} Days`}
                </p>
              </div>

              {/* Card 7: Char Dham Est. */}
              <div className="bg-white/80 backdrop-blur-md border border-red-500/30 rounded-2xl p-3 shadow-sm flex flex-col justify-between">
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                  <span className="text-[9px] font-black font-mono text-red-700 uppercase tracking-wider">Char Dham Est.</span>
                </div>
                <p className="text-sm font-black text-black font-mono leading-snug">
                  {charDhamRange.min === charDhamRange.max ? (
                    `₹${charDhamRange.min.toLocaleString("en-IN")}`
                  ) : (
                    `₹${charDhamRange.min.toLocaleString("en-IN")} – ₹${charDhamRange.max.toLocaleString("en-IN")}`
                  )}
                </p>
                <p className="text-[9px] font-bold text-red-700/80 mt-0.5 font-mono whitespace-nowrap">
                  {dhamCount} Shrines • {charDhamDaysRange.min === charDhamDaysRange.max ? `${charDhamDaysRange.min} Days` : `${charDhamDaysRange.min}–${charDhamDaysRange.max} Days`}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Map showing completed places */}
        <CompletedTripsMap completedPlans={completedPlans} archivedTrips={archivedTrips} />

        {/* Filter Toolbar: Row 1 = Category Tabs, Row 2 = Status & Controls */}
        <div id="adventures-section" className="space-y-4 mb-10 border-b border-black/10 pb-6">
          {/* Row 1: Category Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setCategoryTab("all")}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                categoryTab === "all"
                  ? "bg-black text-white shadow-md"
                  : "bg-white/70 hover:bg-white border border-black/10 text-slate-600"
              }`}
            >
              All Adventures ({allTrips.filter(t => activeTab === "done" ? isTripCompleted(t) : !isTripCompleted(t)).length})
            </button>

            <button
              onClick={() => setCategoryTab("trek")}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                categoryTab === "trek"
                  ? "bg-emerald-600 text-white shadow-md"
                  : "bg-white/70 hover:bg-white border border-black/10 text-slate-600"
              }`}
            >
              <Footprints size={13} />
              Mountain Treks ({allTrips.filter(t => t.type === "trek" && (activeTab === "done" ? isTripCompleted(t) : !isTripCompleted(t))).length})
            </button>

            <button
              onClick={() => setCategoryTab("trip")}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                categoryTab === "trip"
                  ? "bg-sky-600 text-white shadow-md"
                  : "bg-white/70 hover:bg-white border border-black/10 text-slate-600"
              }`}
            >
              <Compass size={13} />
              Road Trips ({allTrips.filter(t => t.type === "trip" && (activeTab === "done" ? isTripCompleted(t) : !isTripCompleted(t))).length})
            </button>

            <button
              onClick={() => setCategoryTab("jyotirlinga")}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                categoryTab === "jyotirlinga"
                  ? "bg-amber-600 text-white shadow-md"
                  : "bg-white/70 hover:bg-white border border-black/10 text-slate-600"
              }`}
            >
              <Sparkles size={13} />
              Jyotirlingas ({allTrips.filter(t => (t.type === "jyotirlinga" || t.tags?.includes("jyotirlinga")) && (activeTab === "done" ? isTripCompleted(t) : !isTripCompleted(t))).length})
            </button>

            <button
              onClick={() => setCategoryTab("panch-kedar")}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                categoryTab === "panch-kedar"
                  ? "bg-orange-600 text-white shadow-md"
                  : "bg-white/70 hover:bg-white border border-black/10 text-slate-600"
              }`}
            >
              <Sparkles size={13} />
              5 Kedar ({allTrips.filter(t => (t.type === "panch-kedar" || t.tags?.includes("panch-kedar")) && (activeTab === "done" ? isTripCompleted(t) : !isTripCompleted(t))).length})
            </button>

            <button
              onClick={() => setCategoryTab("panch-kailash")}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                categoryTab === "panch-kailash"
                  ? "bg-purple-600 text-white shadow-md"
                  : "bg-white/70 hover:bg-white border border-black/10 text-slate-600"
              }`}
            >
              <Sparkles size={13} />
              5 Kailash ({allTrips.filter(t => (t.type === "panch-kailash" || t.tags?.includes("panch-kailash")) && (activeTab === "done" ? isTripCompleted(t) : !isTripCompleted(t))).length})
            </button>

            <button
              onClick={() => setCategoryTab("char-dham")}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                categoryTab === "char-dham"
                  ? "bg-red-600 text-white shadow-md"
                  : "bg-white/70 hover:bg-white border border-black/10 text-slate-600"
              }`}
            >
              <Sparkles size={13} />
              4 Dham ({allTrips.filter(t => (t.type === "char-dham" || t.tags?.includes("char-dham")) && (activeTab === "done" ? isTripCompleted(t) : !isTripCompleted(t))).length})
            </button>
          </div>

          {/* Row 2: Controls, Status & Readiness Sub-Filters */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-black/5">
            {/* Left Control Groups: Status + Readiness */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Status Selector (Active vs Done vs Archived) */}
              <div className="flex gap-1.5 bg-black/5 p-1 rounded-2xl shrink-0">
                <button
                  onClick={() => setActiveTab("active")}
                  className={`px-3 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all ${
                    activeTab === "active"
                      ? "bg-white text-black shadow-sm"
                      : "text-slate-500 hover:text-black"
                  }`}
                >
                  Active
                </button>
                <button
                  onClick={() => setActiveTab("done")}
                  className={`px-3 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all ${
                    activeTab === "done"
                      ? "bg-white text-black shadow-sm"
                      : "text-slate-500 hover:text-black"
                  }`}
                >
                  Done
                </button>
                <button
                  onClick={() => setActiveTab("archived")}
                  className={`px-3 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all ${
                    activeTab === "archived"
                      ? "bg-white text-black shadow-sm"
                      : "text-slate-500 hover:text-black"
                  }`}
                >
                  Archived
                </button>
              </div>

              {/* Sub-Filter Selector (All vs Ready vs Coming Soon) */}
              <div className="flex gap-1 bg-black/5 p-1 rounded-2xl shrink-0">
                <button
                  onClick={() => setSubFilterKey("global", "all")}
                  className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${
                    getSubFilter("global") === "all"
                      ? "bg-white text-black shadow-sm"
                      : "text-slate-500 hover:text-black"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setSubFilterKey("global", "ready")}
                  className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-1 ${
                    getSubFilter("global") === "ready"
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "text-slate-500 hover:text-black"
                  }`}
                >
                  <CheckCircle2 size={11} /> Ready
                </button>
                <button
                  onClick={() => setSubFilterKey("global", "coming-soon")}
                  className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-1 ${
                    getSubFilter("global") === "coming-soon"
                      ? "bg-slate-700 text-white shadow-sm"
                      : "text-slate-500 hover:text-black"
                  }`}
                >
                  <Clock size={11} /> Coming Soon
                </button>
              </div>
            </div>

            {/* Right Control Groups: Sort + View Mode */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Sort Controls */}
              {viewMode === "grid" && (
                <div className="flex bg-black/5 p-1 rounded-2xl">
                  <button
                    onClick={() => setSortBy("money")}
                    className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-1 ${
                      sortBy === "money"
                        ? "bg-white text-black shadow-sm"
                        : "text-slate-500 hover:text-black"
                    }`}
                    title="Sort by Money"
                  >
                    <Wallet size={12} /> Money
                  </button>
                  <button
                    onClick={() => setSortBy("days")}
                    className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-1 ${
                      sortBy === "days"
                        ? "bg-white text-black shadow-sm"
                        : "text-slate-500 hover:text-black"
                    }`}
                    title="Sort by Duration"
                  >
                    <Calendar size={12} /> Days
                  </button>
                </div>
              )}

              {/* View Mode Switcher */}
              <div className="flex gap-1 bg-black/5 p-1 rounded-2xl">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded-xl transition-all ${
                    viewMode === "grid"
                      ? "bg-white text-black shadow-sm"
                      : "text-slate-400 hover:text-black"
                  }`}
                  title="Grid View"
                >
                  <LayoutGrid size={15} />
                </button>
                <button
                  onClick={() => setViewMode("timeline")}
                  className={`p-1.5 rounded-xl transition-all ${
                    viewMode === "timeline"
                      ? "bg-white text-black shadow-sm"
                      : "text-slate-400 hover:text-black"
                  }`}
                  title="Timeline View"
                >
                  <Clock size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section: Separated display when 'all' is selected */}
        {viewMode === "timeline" ? (
          renderTimelineView()
        ) : categoryTab === "all" ? (
          <div className="space-y-12">
            {/* Section 1: Mountain Treks */}
            {trekItems.length > 0 && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 border-b border-black/5 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-700">
                    <Footprints size={16} />
                  </div>
                  <div>
                    <h2 className="text-xl font-black uppercase tracking-tight" style={{ fontFamily: "'Anton', sans-serif" }}>
                      Himalayan Mountain Treks
                    </h2>
                    <p className="text-xs text-slate-500 font-medium">Foot trails, high passes, and sacred temple treks</p>
                  </div>
                    </div>
                    <div className="flex items-center gap-1 bg-black/5 p-1 rounded-2xl self-start sm:self-auto shrink-0">
                      <button
                        onClick={() => setSubFilterKey("trek", "all")}
                        className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${
                          getSubFilter("trek") === "all" ? "bg-white text-black shadow-xs" : "text-slate-500 hover:text-black"
                        }`}
                      >
                        All ({trekItems.length})
                      </button>
                      <button
                        onClick={() => setSubFilterKey("trek", "ready")}
                        className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-1 ${
                          getSubFilter("trek") === "ready" ? "bg-emerald-600 text-white shadow-xs" : "text-slate-500 hover:text-black"
                        }`}
                      >
                        <CheckCircle2 size={10} /> Ready ({trekItems.filter(t => !isNotReadyTrip(t)).length})
                      </button>
                      <button
                        onClick={() => setSubFilterKey("trek", "coming-soon")}
                        className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-1 ${
                          getSubFilter("trek") === "coming-soon" ? "bg-slate-700 text-white shadow-xs" : "text-slate-500 hover:text-black"
                        }`}
                      >
                        <Clock size={10} /> Coming Soon ({trekItems.filter(t => isNotReadyTrip(t)).length})
                      </button>
                    </div>
                  </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  {(() => {
                    const filteredList = trekItems.filter(t => getSubFilter("trek") === "ready" ? !isNotReadyTrip(t) : getSubFilter("trek") === "coming-soon" ? isNotReadyTrip(t) : true);
                    if (filteredList.length === 0) {
                      return (
                        <div className="border border-dashed border-black/10 rounded-2xl p-6 text-center bg-white/40 col-span-2">
                          <Compass size={20} className="mx-auto text-slate-300 mb-1.5" />
                          <p className="text-xs font-black uppercase tracking-wide text-slate-600">
                            No {getSubFilter("trek") === "ready" ? "Ready" : "Coming Soon"} Routes
                          </p>
                          <p className="text-[11px] text-slate-400 mt-0.5">
                            {getSubFilter("trek") === "ready"
                              ? "All routes in this category are currently under development (Coming Soon)."
                              : "All routes in this category are fully ready and available!"}
                          </p>
                        </div>
                      );
                    }
                    return filteredList.map(renderTripCard);
                  })()}
                </div>
              </div>
            )}

            {/* Section 2: Road Trips & Expeditions */}
            {tripItems.length > 0 && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 border-b border-black/5 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-700">
                    <Compass size={16} />
                  </div>
                  <div>
                    <h2 className="text-xl font-black uppercase tracking-tight" style={{ fontFamily: "'Anton', sans-serif" }}>
                      Road Trips & Expeditions
                    </h2>
                    <p className="text-xs text-slate-500 font-medium">Self-scooty circuits, bike rentals, and high-pass riding routes</p>
                  </div>
                    </div>
                    <div className="flex items-center gap-1 bg-black/5 p-1 rounded-2xl self-start sm:self-auto shrink-0">
                      <button
                        onClick={() => setSubFilterKey("trip", "all")}
                        className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${
                          getSubFilter("trip") === "all" ? "bg-white text-black shadow-xs" : "text-slate-500 hover:text-black"
                        }`}
                      >
                        All ({tripItems.length})
                      </button>
                      <button
                        onClick={() => setSubFilterKey("trip", "ready")}
                        className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-1 ${
                          getSubFilter("trip") === "ready" ? "bg-emerald-600 text-white shadow-xs" : "text-slate-500 hover:text-black"
                        }`}
                      >
                        <CheckCircle2 size={10} /> Ready ({tripItems.filter(t => !isNotReadyTrip(t)).length})
                      </button>
                      <button
                        onClick={() => setSubFilterKey("trip", "coming-soon")}
                        className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-1 ${
                          getSubFilter("trip") === "coming-soon" ? "bg-slate-700 text-white shadow-xs" : "text-slate-500 hover:text-black"
                        }`}
                      >
                        <Clock size={10} /> Coming Soon ({tripItems.filter(t => isNotReadyTrip(t)).length})
                      </button>
                    </div>
                  </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  {(() => {
                    const filteredList = tripItems.filter(t => getSubFilter("trip") === "ready" ? !isNotReadyTrip(t) : getSubFilter("trip") === "coming-soon" ? isNotReadyTrip(t) : true);
                    if (filteredList.length === 0) {
                      return (
                        <div className="border border-dashed border-black/10 rounded-2xl p-6 text-center bg-white/40 col-span-2">
                          <Compass size={20} className="mx-auto text-slate-300 mb-1.5" />
                          <p className="text-xs font-black uppercase tracking-wide text-slate-600">
                            No {getSubFilter("trip") === "ready" ? "Ready" : "Coming Soon"} Routes
                          </p>
                          <p className="text-[11px] text-slate-400 mt-0.5">
                            {getSubFilter("trip") === "ready"
                              ? "All routes in this category are currently under development (Coming Soon)."
                              : "All routes in this category are fully ready and available!"}
                          </p>
                        </div>
                      );
                    }
                    return filteredList.map(renderTripCard);
                  })()}
                </div>
              </div>
            )}

            {/* Section 3: Jyotirlinga Yatras */}
            {jyotirlingaItems.length > 0 && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 border-b border-black/5 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-700">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <h2 className="text-xl font-black uppercase tracking-tight" style={{ fontFamily: "'Anton', sans-serif" }}>
                      Jyotirlinga Yatras
                    </h2>
                    <p className="text-xs text-slate-500 font-medium">Sacred pilgrimages to the 12 Jyotirlinga shrines</p>
                  </div>
                    </div>
                    <div className="flex items-center gap-1 bg-black/5 p-1 rounded-2xl self-start sm:self-auto shrink-0">
                      <button
                        onClick={() => setSubFilterKey("jyotirlinga", "all")}
                        className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${
                          getSubFilter("jyotirlinga") === "all" ? "bg-white text-black shadow-xs" : "text-slate-500 hover:text-black"
                        }`}
                      >
                        All ({jyotirlingaItems.length})
                      </button>
                      <button
                        onClick={() => setSubFilterKey("jyotirlinga", "ready")}
                        className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-1 ${
                          getSubFilter("jyotirlinga") === "ready" ? "bg-emerald-600 text-white shadow-xs" : "text-slate-500 hover:text-black"
                        }`}
                      >
                        <CheckCircle2 size={10} /> Ready ({jyotirlingaItems.filter(t => !isNotReadyTrip(t)).length})
                      </button>
                      <button
                        onClick={() => setSubFilterKey("jyotirlinga", "coming-soon")}
                        className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-1 ${
                          getSubFilter("jyotirlinga") === "coming-soon" ? "bg-slate-700 text-white shadow-xs" : "text-slate-500 hover:text-black"
                        }`}
                      >
                        <Clock size={10} /> Coming Soon ({jyotirlingaItems.filter(t => isNotReadyTrip(t)).length})
                      </button>
                    </div>
                  </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  {(() => {
                    const filteredList = jyotirlingaItems.filter(t => getSubFilter("jyotirlinga") === "ready" ? !isNotReadyTrip(t) : getSubFilter("jyotirlinga") === "coming-soon" ? isNotReadyTrip(t) : true);
                    if (filteredList.length === 0) {
                      return (
                        <div className="border border-dashed border-black/10 rounded-2xl p-6 text-center bg-white/40 col-span-2">
                          <Compass size={20} className="mx-auto text-slate-300 mb-1.5" />
                          <p className="text-xs font-black uppercase tracking-wide text-slate-600">
                            No {getSubFilter("jyotirlinga") === "ready" ? "Ready" : "Coming Soon"} Routes
                          </p>
                          <p className="text-[11px] text-slate-400 mt-0.5">
                            {getSubFilter("jyotirlinga") === "ready"
                              ? "All routes in this category are currently under development (Coming Soon)."
                              : "All routes in this category are fully ready and available!"}
                          </p>
                        </div>
                      );
                    }
                    return filteredList.map(renderTripCard);
                  })()}
                </div>
              </div>
            )}

            {/* Section 4: Panch Kedar Shrines */}
            {panchKedarItems.length > 0 && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 border-b border-black/5 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-700">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <h2 className="text-xl font-black uppercase tracking-tight" style={{ fontFamily: "'Anton', sans-serif" }}>
                      Panch Kedar Shrines
                    </h2>
                    <p className="text-xs text-slate-500 font-medium">The five sacred Shiva temples in Garhwal Himalayas</p>
                  </div>
                    </div>
                    <div className="flex items-center gap-1 bg-black/5 p-1 rounded-2xl self-start sm:self-auto shrink-0">
                      <button
                        onClick={() => setSubFilterKey("panch-kedar", "all")}
                        className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${
                          getSubFilter("panch-kedar") === "all" ? "bg-white text-black shadow-xs" : "text-slate-500 hover:text-black"
                        }`}
                      >
                        All ({panchKedarItems.length})
                      </button>
                      <button
                        onClick={() => setSubFilterKey("panch-kedar", "ready")}
                        className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-1 ${
                          getSubFilter("panch-kedar") === "ready" ? "bg-emerald-600 text-white shadow-xs" : "text-slate-500 hover:text-black"
                        }`}
                      >
                        <CheckCircle2 size={10} /> Ready ({panchKedarItems.filter(t => !isNotReadyTrip(t)).length})
                      </button>
                      <button
                        onClick={() => setSubFilterKey("panch-kedar", "coming-soon")}
                        className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-1 ${
                          getSubFilter("panch-kedar") === "coming-soon" ? "bg-slate-700 text-white shadow-xs" : "text-slate-500 hover:text-black"
                        }`}
                      >
                        <Clock size={10} /> Coming Soon ({panchKedarItems.filter(t => isNotReadyTrip(t)).length})
                      </button>
                    </div>
                  </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  {(() => {
                    const filteredList = panchKedarItems.filter(t => getSubFilter("panch-kedar") === "ready" ? !isNotReadyTrip(t) : getSubFilter("panch-kedar") === "coming-soon" ? isNotReadyTrip(t) : true);
                    if (filteredList.length === 0) {
                      return (
                        <div className="border border-dashed border-black/10 rounded-2xl p-6 text-center bg-white/40 col-span-2">
                          <Compass size={20} className="mx-auto text-slate-300 mb-1.5" />
                          <p className="text-xs font-black uppercase tracking-wide text-slate-600">
                            No {getSubFilter("panch-kedar") === "ready" ? "Ready" : "Coming Soon"} Routes
                          </p>
                          <p className="text-[11px] text-slate-400 mt-0.5">
                            {getSubFilter("panch-kedar") === "ready"
                              ? "All routes in this category are currently under development (Coming Soon)."
                              : "All routes in this category are fully ready and available!"}
                          </p>
                        </div>
                      );
                    }
                    return filteredList.map(renderTripCard);
                  })()}
                </div>
              </div>
            )}

            {/* Section 5: Panch Kailash Expeditions */}
            {panchKailashItems.length > 0 && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 border-b border-black/5 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-700">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <h2 className="text-xl font-black uppercase tracking-tight" style={{ fontFamily: "'Anton', sans-serif" }}>
                      Panch Kailash Expeditions
                    </h2>
                    <p className="text-xs text-slate-500 font-medium">Sacred high-altitude pilgrimages to the 5 Holy Kailash Peaks</p>
                  </div>
                    </div>
                    <div className="flex items-center gap-1 bg-black/5 p-1 rounded-2xl self-start sm:self-auto shrink-0">
                      <button
                        onClick={() => setSubFilterKey("panch-kailash", "all")}
                        className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${
                          getSubFilter("panch-kailash") === "all" ? "bg-white text-black shadow-xs" : "text-slate-500 hover:text-black"
                        }`}
                      >
                        All ({panchKailashItems.length})
                      </button>
                      <button
                        onClick={() => setSubFilterKey("panch-kailash", "ready")}
                        className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-1 ${
                          getSubFilter("panch-kailash") === "ready" ? "bg-emerald-600 text-white shadow-xs" : "text-slate-500 hover:text-black"
                        }`}
                      >
                        <CheckCircle2 size={10} /> Ready ({panchKailashItems.filter(t => !isNotReadyTrip(t)).length})
                      </button>
                      <button
                        onClick={() => setSubFilterKey("panch-kailash", "coming-soon")}
                        className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-1 ${
                          getSubFilter("panch-kailash") === "coming-soon" ? "bg-slate-700 text-white shadow-xs" : "text-slate-500 hover:text-black"
                        }`}
                      >
                        <Clock size={10} /> Coming Soon ({panchKailashItems.filter(t => isNotReadyTrip(t)).length})
                      </button>
                    </div>
                  </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  {(() => {
                    const filteredList = panchKailashItems.filter(t => getSubFilter("panch-kailash") === "ready" ? !isNotReadyTrip(t) : getSubFilter("panch-kailash") === "coming-soon" ? isNotReadyTrip(t) : true);
                    if (filteredList.length === 0) {
                      return (
                        <div className="border border-dashed border-black/10 rounded-2xl p-6 text-center bg-white/40 col-span-2">
                          <Compass size={20} className="mx-auto text-slate-300 mb-1.5" />
                          <p className="text-xs font-black uppercase tracking-wide text-slate-600">
                            No {getSubFilter("panch-kailash") === "ready" ? "Ready" : "Coming Soon"} Routes
                          </p>
                          <p className="text-[11px] text-slate-400 mt-0.5">
                            {getSubFilter("panch-kailash") === "ready"
                              ? "All routes in this category are currently under development (Coming Soon)."
                              : "All routes in this category are fully ready and available!"}
                          </p>
                        </div>
                      );
                    }
                    return filteredList.map(renderTripCard);
                  })()}
                </div>
              </div>
            )}

            {/* Section 6: Char Dham Pilgrimages */}
            {charDhamItems.length > 0 && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 border-b border-black/5 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-red-500/10 flex items-center justify-center text-red-700">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <h2 className="text-xl font-black uppercase tracking-tight" style={{ fontFamily: "'Anton', sans-serif" }}>
                      Char Dham Pilgrimages
                    </h2>
                    <p className="text-xs text-slate-500 font-medium">Holy Char Dham shrines across Uttarakhand and India</p>
                  </div>
                    </div>
                    <div className="flex items-center gap-1 bg-black/5 p-1 rounded-2xl self-start sm:self-auto shrink-0">
                      <button
                        onClick={() => setSubFilterKey("char-dham", "all")}
                        className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${
                          getSubFilter("char-dham") === "all" ? "bg-white text-black shadow-xs" : "text-slate-500 hover:text-black"
                        }`}
                      >
                        All ({charDhamItems.length})
                      </button>
                      <button
                        onClick={() => setSubFilterKey("char-dham", "ready")}
                        className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-1 ${
                          getSubFilter("char-dham") === "ready" ? "bg-emerald-600 text-white shadow-xs" : "text-slate-500 hover:text-black"
                        }`}
                      >
                        <CheckCircle2 size={10} /> Ready ({charDhamItems.filter(t => !isNotReadyTrip(t)).length})
                      </button>
                      <button
                        onClick={() => setSubFilterKey("char-dham", "coming-soon")}
                        className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-1 ${
                          getSubFilter("char-dham") === "coming-soon" ? "bg-slate-700 text-white shadow-xs" : "text-slate-500 hover:text-black"
                        }`}
                      >
                        <Clock size={10} /> Coming Soon ({charDhamItems.filter(t => isNotReadyTrip(t)).length})
                      </button>
                    </div>
                  </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  {(() => {
                    const filteredList = charDhamItems.filter(t => getSubFilter("char-dham") === "ready" ? !isNotReadyTrip(t) : getSubFilter("char-dham") === "coming-soon" ? isNotReadyTrip(t) : true);
                    if (filteredList.length === 0) {
                      return (
                        <div className="border border-dashed border-black/10 rounded-2xl p-6 text-center bg-white/40 col-span-2">
                          <Compass size={20} className="mx-auto text-slate-300 mb-1.5" />
                          <p className="text-xs font-black uppercase tracking-wide text-slate-600">
                            No {getSubFilter("char-dham") === "ready" ? "Ready" : "Coming Soon"} Routes
                          </p>
                          <p className="text-[11px] text-slate-400 mt-0.5">
                            {getSubFilter("char-dham") === "ready"
                              ? "All routes in this category are currently under development (Coming Soon)."
                              : "All routes in this category are fully ready and available!"}
                          </p>
                        </div>
                      );
                    }
                    return filteredList.map(renderTripCard);
                  })()}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Filtered view for specific category */
          <div>
            <div className="flex items-center gap-2 mb-6 border-b border-black/5 pb-3">
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                categoryTab === "trek" ? "bg-emerald-500/10 text-emerald-700" : categoryTab === "jyotirlinga" ? "bg-amber-500/10 text-amber-700" : "bg-sky-500/10 text-sky-700"
              }`}>
                {categoryTab === "trek" ? <Footprints size={16} /> : categoryTab === "jyotirlinga" ? <Sparkles size={16} /> : <Compass size={16} />}
              </div>
              <div>
                <h2 className="text-xl font-black uppercase tracking-tight" style={{ fontFamily: "'Anton', sans-serif" }}>
                  {categoryTab === "trek" ? "Himalayan Mountain Treks" : categoryTab === "jyotirlinga" ? "Jyotirlinga Yatras" : categoryTab === "panch-kedar" ? "Panch Kedar Shrines" : categoryTab === "panch-kailash" ? "Panch Kailash Expeditions" : categoryTab === "char-dham" ? "Char Dham Pilgrimages" : "Road Trips & Expeditions"}
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  {categoryTab === "trek" ? "Foot trails, high passes, and sacred temple treks" : categoryTab === "jyotirlinga" ? "Sacred pilgrimages to the 12 Jyotirlinga shrines" : categoryTab === "panch-kedar" ? "The five sacred Shiva temples in Garhwal Himalayas" : categoryTab === "panch-kailash" ? "Sacred high-altitude pilgrimages to the 5 Holy Kailash Peaks" : categoryTab === "char-dham" ? "Holy Char Dham shrines across Uttarakhand and India" : "Self-scooty circuits, bike rentals, and high-pass riding routes"}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {sortedTrips.map(renderTripCard)}
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredTrips.length === 0 && (
          <div className="border-2 border-dashed border-black/10 rounded-[32px] p-12 text-center py-16">
            <Compass size={32} className="mx-auto text-slate-300 mb-3" />
            <h4 className="font-extrabold text-base text-slate-700">No Adventures Found</h4>
            <p className="text-xs text-slate-400 max-w-xs mx-auto mt-1 leading-relaxed">
              No routes match the selected category and status filters.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full py-6 px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center text-[10px] font-semibold uppercase tracking-widest text-black/45 z-30 border-t border-black/5 mt-12 gap-3">
        <span>© 2026 Trip Expedition Studio.</span>
        <a
          href="https://indtrails.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-black/70 hover:text-black font-bold normal-case text-xs transition-colors bg-white/80 hover:bg-white border border-black/10 px-3.5 py-1.5 rounded-xl shadow-xs"
        >
          <span>indtrails.vercel.app</span>
          <ArrowUpRight size={13} />
        </a>
        <span>Premium Adventure Travel Planner.</span>
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
                <div className="flex items-center gap-2 mb-1">
                  <span className={`inline-flex items-center gap-1 text-[9px] font-extrabold uppercase font-mono px-2 py-0.5 rounded-full ${
                    selectedTrip.type === "trek" ? "bg-emerald-500/10 text-emerald-700" : "bg-sky-500/10 text-sky-700"
                  }`}>
                    {selectedTrip.type === "trek" ? <Footprints size={10} /> : <Compass size={10} />}
                    {selectedTrip.typeLabel}
                  </span>
                  <span className="text-[10px] font-black font-mono tracking-widest text-slate-400 uppercase">{selectedTrip.subtitle}</span>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mt-0.5" style={{ fontFamily: "'Anton', sans-serif" }}>
                  {selectedTrip.isCompleted ? `${selectedTrip.title} Breakdown` : "Select Plan Version"}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  {selectedTrip.isCompleted
                    ? `Completed ${selectedTrip.stats.duration} Trip • Total Spent: ₹${(selectedTrip.spentTotal || 0).toLocaleString("en-IN", { minimumFractionDigits: 2 })} / person`
                    : "Choose the travel plan variant that matches your timeline and budget constraints."}
                </p>
              </div>

              {/* Plan Options Stack */}
              <div className="space-y-4">
                  {selectedTrip.plans.map((plan) => {
                    const isPlanCompleted = completedPlans.includes(plan.id);
                    const isPlanTarget = selectedTrip.plans.length === 1 ? true : targetPlans.includes(plan.id);
                    const isPlanArchived = archivedPlans.includes(plan.id);
                    return (
                      <div
                        key={plan.id}
                        className={`relative bg-white hover:bg-white/80 border rounded-2xl p-5 transition-all shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group ${
                          isPlanArchived
                            ? "opacity-50 saturate-50 border-dashed border-black/20"
                            : isPlanCompleted
                              ? "border-emerald-500/35 bg-emerald-500/[0.01]"
                              : isPlanTarget
                                ? "border-amber-500/40 bg-amber-500/[0.01] ring-1 ring-amber-500/20"
                                : "border-black/5 hover:border-black/25"
                        }`}
                      >
                        <a
                          href={plan.path}
                          className="flex-1 min-w-0"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="font-extrabold text-sm text-black flex items-center gap-1.5">
                                {plan.title}
                                {isPlanArchived && (
                                  <span className="bg-slate-500/15 text-slate-600 text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full font-sans uppercase">
                                    Archived
                                  </span>
                                )}
                                {isPlanCompleted && (
                                  <span className="bg-emerald-500/10 text-emerald-600 text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full font-sans uppercase">
                                    Completed
                                  </span>
                                )}
                                {isPlanTarget && !isPlanCompleted && !isPlanArchived && (
                                  <span className="bg-amber-500/10 text-amber-600 text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full font-sans uppercase border border-amber-500/25 flex items-center gap-0.5">
                                    <Star size={9} className="fill-amber-500 text-amber-500" /> Target
                                  </span>
                                )}
                              </h4>
                              <span className="text-[9px] font-bold font-mono tracking-wide text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                                {plan.duration}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-500 font-medium line-clamp-1">{plan.route}</p>
                            <p className="text-[11px] text-slate-400 font-medium leading-relaxed">{plan.details}</p>
                          </div>
                        </a>
                        
                        <div className="flex items-center gap-3 self-stretch sm:self-auto justify-between border-t sm:border-t-0 border-black/5 pt-3 sm:pt-0 shrink-0">
                          <div className="text-right">
                            {isPlanCompleted && actualCosts[plan.id] !== undefined ? (
                              <>
                                <span className="text-[9px] font-bold font-mono text-emerald-600 uppercase tracking-widest block leading-none">Spent / Person</span>
                                <span className="text-sm font-black text-emerald-700 leading-none mt-1 inline-block">
                                  ₹{actualCosts[plan.id].toLocaleString("en-IN")}
                                </span>
                              </>
                            ) : (
                              <>
                                <span className="text-[9px] font-bold font-mono text-slate-400 uppercase tracking-widest block leading-none">Est. Cost</span>
                                <span className="text-sm font-black text-black leading-none mt-1 inline-block">{plan.budget}</span>
                              </>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-2">
                            {!selectedTrip.isCompleted && (
                              <>
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    handleToggleArchivePlan(plan, e);
                                  }}
                                  className={`w-8 h-8 rounded-xl border flex items-center justify-center transition-colors shrink-0 ${
                                    isPlanArchived
                                      ? "bg-slate-700 border-slate-800 text-white hover:bg-slate-800"
                                      : "border-black/10 bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-600"
                                  }`}
                                  title={isPlanArchived ? "Unarchive Plan" : "Archive Plan"}
                                >
                                  <Archive size={14} />
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    handleToggleTargetPlan(plan, e);
                                  }}
                                  disabled={isPlanArchived}
                                  className={`w-8 h-8 rounded-xl border flex items-center justify-center transition-colors shrink-0 ${
                                    isPlanTarget
                                      ? "bg-amber-500 border-amber-600 text-white hover:bg-amber-600"
                                      : isPlanArchived
                                        ? "border-black/5 bg-black/5 text-slate-300 cursor-not-allowed"
                                        : "border-black/10 bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-600"
                                  }`}
                                  title={isPlanTarget ? "Remove Target Plan" : "Set as Target Plan"}
                                >
                                  <Star size={14} className={isPlanTarget ? "fill-white" : ""} />
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    handleTogglePlanMark(plan, e);
                                  }}
                                  disabled={isPlanArchived}
                                  className={`w-8 h-8 rounded-xl border flex items-center justify-center transition-colors shrink-0 ${
                                    isPlanCompleted
                                      ? "bg-emerald-500 border-emerald-600 text-white hover:bg-emerald-600"
                                      : isPlanArchived
                                        ? "border-black/5 bg-black/5 text-slate-300 cursor-not-allowed"
                                        : "border-black/10 bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-600"
                                  }`}
                                  title={isPlanCompleted ? "Edit Actual Cost / Unmark" : "Mark Done & Enter Actual Cost"}
                                >
                                  <CheckCircle2 size={14} />
                                </button>
                              </>
                            )}
                            <a
                              href={plan.path}
                              className="w-8 h-8 rounded-xl border border-black/10 flex items-center justify-center bg-slate-50 group-hover:bg-black group-hover:text-white transition-colors shrink-0"
                            >
                              <ArrowUpRight size={14} />
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>

              {/* Itemized Expenses Breakdown Table if available */}
              {selectedTrip.expenses && selectedTrip.expenses.length > 0 && (
                <div className="mt-6 border-t border-black/10 pt-5">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-extrabold text-xs text-black uppercase tracking-wider">Itemized Expense Breakdown</h4>
                    <span className="text-[10px] font-black font-mono bg-black/5 text-slate-600 px-2.5 py-1 rounded-full uppercase">
                      {selectedTrip.stats.duration}
                    </span>
                  </div>
                  <div className="bg-white rounded-2xl border border-black/5 p-4 overflow-x-auto shadow-sm">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-black/10 text-slate-400 font-bold uppercase text-[9px] tracking-wider">
                          <th className="py-2 px-2">Category</th>
                          <th className="py-2 px-2">Description / Route</th>
                          <th className="py-2 px-2 text-right">Amount (₹)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-black/5 font-medium text-slate-700">
                        {selectedTrip.expenses.map((item, idx) => (
                          <tr key={idx} className="hover:bg-black/[0.02]">
                            <td className="py-2.5 px-2 font-bold text-black">{item.category}</td>
                            <td className="py-2.5 px-2 text-slate-600">{item.description}</td>
                            <td className="py-2.5 px-2 text-right font-mono font-bold text-black">
                              ₹{item.amount.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="border-t-2 border-black/15 font-black text-xs text-black">
                          <td colSpan={2} className="py-3 px-2 uppercase tracking-wider">Total Expenditure</td>
                          <td className="py-3 px-2 text-right font-mono text-sm text-emerald-700">
                            ₹{selectedTrip.spentTotal ? selectedTrip.spentTotal.toLocaleString("en-IN", { minimumFractionDigits: 2 }) : selectedTrip.expenses.reduce((s, i) => s + i.amount, 0).toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Actual Spent Cost Input Modal Overlay */}
      <AnimatePresence>
        {costPromptModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0" onClick={() => setCostPromptModal(null)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-[#f2efe9] rounded-[32px] border border-black/10 p-6 md:p-8 max-w-md w-full shadow-2xl relative z-10"
            >
              <button
                onClick={() => setCostPromptModal(null)}
                className="absolute right-6 top-6 w-8 h-8 rounded-xl border border-black/10 flex items-center justify-center bg-white hover:bg-black/5 transition-colors"
              >
                <X size={14} />
              </button>

              <div className="mb-6">
                <span className="text-[10px] font-black font-mono tracking-widest text-slate-400 uppercase">Trip Expenditure</span>
                <h3 className="text-xl font-black uppercase tracking-tight mt-0.5" style={{ fontFamily: "'Anton', sans-serif" }}>
                  Record Actual Cost
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Enter the exact per-person amount spent on <strong className="text-black">{costPromptModal.title}</strong>.
                </p>
              </div>

              <form onSubmit={handleSaveActualCost} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Actual Spent per Person (₹)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-extrabold text-slate-400">₹</span>
                    <input
                      type="number"
                      required
                      step="1"
                      placeholder="e.g. 9100"
                      value={inputActualCost}
                      onChange={(e) => setInputActualCost(e.target.value)}
                      className="w-full pl-8 pr-4 py-3 rounded-xl border border-black/10 bg-white font-extrabold text-sm focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                  <p className="text-[10px] text-slate-400 font-medium">Estimated budget reference: {costPromptModal.budget}</p>
                  
                  {Object.keys(getLedgerCostPerMember()).length === 0 && (
                    <p className="text-[9px] text-slate-400 font-bold mt-1">
                      ℹ️ No ledger expenses recorded for this trip yet
                    </p>
                  )}
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={(e) => handleTogglePlanMark(costPromptModal, e)}
                    className="flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-wider bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition-colors cursor-pointer"
                  >
                    Unmark / Remove
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-wider bg-black text-white hover:bg-black/80 transition-colors shadow-md cursor-pointer"
                  >
                    Save & Mark Done
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Passcode Protection Modal for completed trips breakdown */}
      <AnimatePresence>
        {passcodePromptTripId !== null && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0" onClick={() => setPasscodePromptTripId(null)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-[32px] border border-black/10 p-7 max-w-sm w-full shadow-2xl relative z-10 overflow-hidden text-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setPasscodePromptTripId(null)}
                className="absolute right-4 top-4 w-8 h-8 rounded-xl border border-black/10 flex items-center justify-center bg-white hover:bg-black/5 transition-colors"
              >
                <X size={14} />
              </button>

              <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center mx-auto mb-4 text-black mt-2">
                <Lock size={20} />
              </div>

              <h3 className="font-extrabold text-lg uppercase tracking-tight">Enter Passcode</h3>
              <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed mb-5">
                Please enter the security code to view the itemized ledger breakdown.
              </p>

              <form onSubmit={handleVerifyPasscodeModal} className="space-y-4">
                <div className="space-y-1">
                  <input
                    type="password"
                    required
                    placeholder="Security Code"
                    value={passcodeInput}
                    onChange={(e) => { setPasscodeInput(e.target.value); setPasscodeError(false); }}
                    className={`w-full px-4 py-3 rounded-xl border text-center font-mono font-black text-lg focus:outline-none transition-colors ${
                      passcodeError 
                        ? "border-red-300 focus:border-red-500 bg-red-50/50" 
                        : "border-black/10 focus:border-black bg-white"
                    }`}
                  />
                  {passcodeError && (
                    <p className="text-[10px] text-red-600 font-bold mt-1">
                      ❌ Incorrect security passcode
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-xs font-black uppercase tracking-wider bg-black text-white hover:bg-black/85 transition-colors shadow-md cursor-pointer"
                >
                  Verify Access
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Compare Bar */}
      <AnimatePresence>
        {compareList.length > 0 && !showCompare && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 bg-black text-white px-5 py-3 rounded-[28px] shadow-2xl shadow-black/30"
          >
            <GitCompareArrows size={16} className="text-violet-400 shrink-0" />
            <span className="text-xs font-black uppercase tracking-wider whitespace-nowrap">
              {compareList.length === 1 ? "Select 1 more to compare" : "2 trips ready"}
            </span>
            {compareList.length === 2 && (
              <button
                onClick={() => { setComparePlanIdx([0, 0]); setShowCompare(true); }}
                className="bg-violet-500 hover:bg-violet-400 text-white text-[11px] font-black uppercase tracking-wider px-4 py-2 rounded-2xl transition-colors whitespace-nowrap"
              >
                Compare Now
              </button>
            )}
            <button
              onClick={() => setCompareList([])}
              className="w-7 h-7 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors shrink-0"
              title="Clear"
            >
              <X size={13} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Comparison Modal */}
      <AnimatePresence>
        {showCompare && compareList.length === 2 && (() => {
          const tripA = allTrips.find(t => t.id === compareList[0]);
          const tripB = allTrips.find(t => t.id === compareList[1]);
          if (!tripA || !tripB) return null;

          const planA = tripA.plans[comparePlanIdx[0]] || tripA.plans[0];
          const planB = tripB.plans[comparePlanIdx[1]] || tripB.plans[0];

          const parsePlanBudget = (budgetStr) => {
            if (!budgetStr) return 0;
            const m = String(budgetStr).replace(/,/g, "").match(/(\d+)/);
            return m ? parseInt(m[1], 10) : 0;
          };

          const parsePlanDuration = (durStr) => {
            if (!durStr) return 0;
            const m = String(durStr).match(/(\d+)\s*Day/i);
            return m ? parseInt(m[1], 10) : 0;
          };

          const rows = [
            { label: "Type", icon: <Footprints size={13} />, a: tripA.typeLabel, b: tripB.typeLabel },
            { label: "Location", icon: <MapPin size={13} />, a: tripA.subtitle, b: tripB.subtitle },
            {
              label: "Duration", icon: <Calendar size={13} />,
              a: planA.duration, b: planB.duration,
              highlight: (va, vb) => {
                const da = parsePlanDuration(va);
                const db = parsePlanDuration(vb);
                if (!da || !db || da === db) return null;
                return da < db ? "a" : "b";
              },
              highlightLabel: "Shorter",
            },
            { label: "Distance", icon: <Route size={13} />, a: tripA.stats.distance, b: tripB.stats.distance },
            {
              label: "Plan Budget", icon: <Wallet size={13} />,
              a: planA.budget, b: planB.budget,
              highlight: (va, vb) => {
                const ma = parsePlanBudget(va);
                const mb = parsePlanBudget(vb);
                if (!ma || !mb || ma === mb) return null;
                return ma < mb ? "a" : "b";
              },
              highlightLabel: "Cheaper",
            },
            {
              label: "Route", icon: <Route size={13} />,
              a: planA.route, b: planB.route,
            },
            {
              label: "Details", icon: <Sparkles size={13} />,
              a: planA.details, b: planB.details,
            },
          ];

          const accentA = "violet";
          const accentB = "sky";

          return (
            <motion.div
              key="compare-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setShowCompare(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 16 }}
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
                onClick={e => e.stopPropagation()}
                className="bg-[#f2efe9] w-full max-w-3xl rounded-[32px] max-h-[88vh] flex flex-col shadow-2xl overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-center justify-between px-8 pt-7 pb-5 border-b border-black/10 shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-2xl bg-violet-500/10 flex items-center justify-center">
                      <GitCompareArrows size={17} className="text-violet-600" />
                    </div>
                    <div>
                      <p className="text-[9px] font-black font-mono uppercase tracking-widest text-slate-400">Side by Side</p>
                      <h2 className="text-lg font-black uppercase tracking-tight leading-none" style={{ fontFamily: "'Anton', sans-serif" }}>Trip Comparison</h2>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowCompare(false)}
                    className="w-8 h-8 rounded-2xl border border-black/10 flex items-center justify-center bg-white hover:bg-black/5 transition-colors"
                  >
                    <X size={13} />
                  </button>
                </div>

                {/* Trip headers + Plan Selectors — fixed height, no scroll */}
                <div className="grid grid-cols-2 gap-3 px-8 pt-5 pb-4 shrink-0">
                  {[tripA, tripB].map((trip, i) => {
                    const selectedIdx = comparePlanIdx[i];
                    return (
                      <div key={trip.id} className={`rounded-2xl px-4 py-3.5 border ${
                        i === 0 ? "bg-violet-50 border-violet-200" : "bg-sky-50 border-sky-200"
                      }`}>
                        {/* Trip label + title row */}
                        <div className="flex items-start gap-2 mb-2.5">
                          <span className={`text-[9px] font-extrabold uppercase font-mono px-1.5 py-0.5 rounded-lg shrink-0 mt-0.5 ${
                            i === 0 ? "bg-violet-500/15 text-violet-700" : "bg-sky-500/15 text-sky-700"
                          }`}>
                            {i === 0 ? "A" : "B"}
                          </span>
                          <div>
                            <h3 className="text-sm font-black uppercase tracking-tight leading-tight" style={{ fontFamily: "'Anton', sans-serif" }}>
                              {trip.title}
                            </h3>
                            <p className="text-[10px] text-slate-500 font-medium leading-none mt-0.5">{trip.subtitle}</p>
                          </div>
                        </div>

                        {/* Plan Selector — compact numbered pills */}
                        {trip.plans.length > 1 && (
                          <div className="flex flex-wrap gap-1.5">
                            {trip.plans.map((plan, pIdx) => {
                              // Short label: strip parenthetical, truncate to ~14 chars
                              const shortLabel = plan.title.replace(/\s*\(.*?\)\s*/g, "").trim();
                              const label = shortLabel.length > 16 ? shortLabel.slice(0, 15) + "…" : shortLabel;
                              return (
                                <button
                                  key={plan.id}
                                  onClick={() => {
                                    const next = [...comparePlanIdx];
                                    next[i] = pIdx;
                                    setComparePlanIdx(next);
                                  }}
                                  title={plan.title}
                                  className={`text-[9px] font-black uppercase tracking-wider px-2 py-1 rounded-lg transition-all border whitespace-nowrap ${
                                    selectedIdx === pIdx
                                      ? i === 0
                                        ? "bg-violet-600 text-white border-violet-700"
                                        : "bg-sky-600 text-white border-sky-700"
                                      : "bg-white/80 text-slate-500 border-black/10 hover:border-black/25 hover:text-black"
                                  }`}
                                >
                                  {label}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Comparison Rows — scrollable */}
                <div className="overflow-y-auto flex-1 px-8 pb-8">
                  <div className="space-y-1.5">
                    {rows.map((row, idx) => {
                      const winnerSide = row.highlight ? row.highlight(row.a, row.b) : null;
                      return (
                        <div key={idx} className="grid grid-cols-[1fr_72px_1fr] gap-2 items-stretch">
                          {/* Left (A) */}
                          <div className={`rounded-2xl px-4 py-3 border flex flex-col justify-center items-end ${
                            winnerSide === "a" ? "bg-emerald-50 border-emerald-200" : "bg-white/70 border-black/[0.07]"
                          }`}>
                            {winnerSide === "a" && (
                              <span className="text-[8px] font-extrabold text-emerald-600 uppercase tracking-wider mb-0.5">{row.highlightLabel}</span>
                            )}
                            <p className="text-xs font-bold text-black leading-snug text-right">{row.a || "—"}</p>
                          </div>

                          {/* Center label */}
                          <div className="flex flex-col items-center justify-center text-center">
                            <div className="w-7 h-7 rounded-xl bg-black/5 flex items-center justify-center text-slate-500 mb-1">
                              {row.icon}
                            </div>
                            <p className="text-[8px] font-black uppercase tracking-wider text-slate-400 leading-tight">{row.label}</p>
                          </div>

                          {/* Right (B) */}
                          <div className={`rounded-2xl px-4 py-3 border flex flex-col justify-center items-start ${
                            winnerSide === "b" ? "bg-emerald-50 border-emerald-200" : "bg-white/70 border-black/[0.07]"
                          }`}>
                            {winnerSide === "b" && (
                              <span className="text-[8px] font-extrabold text-emerald-600 uppercase tracking-wider mb-0.5">{row.highlightLabel}</span>
                            )}
                            <p className="text-xs font-bold text-black leading-snug">{row.b || "—"}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-5 border-t border-black/10 mt-5">
                    {[tripA, tripB].map((trip, i) => (
                      <button
                        key={trip.id}
                        onClick={() => { setShowCompare(false); setSelectedTrip(trip); }}
                        className={`py-3 rounded-2xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${
                          i === 0
                            ? "bg-violet-600 hover:bg-violet-700 text-white"
                            : "bg-sky-600 hover:bg-sky-700 text-white"
                        }`}
                      >
                        <ArrowUpRight size={14} />
                        View {trip.title.split(" ")[0]} Plans
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </div>
  );
}

const TripExpenseBreakdown = ({ planId }) => {
  const [expenses, setExpenses] = useState([]);
  const [membersList, setMembersList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!planId) return;
    const storageKey = getExpenseTrackerKey(planId);
    const docRef = doc(db, "trek_app_data", storageKey);
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setExpenses(docSnap.data().data || []);
      }
      setLoading(false);
    }, (error) => {
      console.error("Error loading plan expenses:", error);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [planId]);

  useEffect(() => {
    if (!planId) return;
    const parentId = getParentTripId(planId);
    const docRef = doc(db, "trek_app_data", `trek_members_${parentId}`);
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setMembersList(docSnap.data().data || []);
      } else {
        setMembersList(getDefaultMembers(parentId));
      }
    }, (error) => {
      setMembersList(getDefaultMembers(parentId));
    });
    return () => unsubscribe();
  }, [planId]);

  const getParentTripId = (key) => {
    if (key === 'rudranath-plan1' || key === 'rudranath-plan2' || key === 'plan1' || key === 'plan2') return 'rudranath';
    if (key === 'yulla-plan1' || key === 'yulla-plan2' || key === 'yulla-plan3') return 'yulla';
    if (key === 'ladakh-plan1' || key === 'ladakh-plan2' || key === 'ladakh-plan3' || key === 'ladakh-plan4') return 'ladakh';
    if (key === 'spiti-plan1' || key === 'spiti-plan2' || key === 'spiti-plan3') return 'spiti';
    if (key === 'annapurna-plan1') return 'annapurna';
    if (key === 'hemkund') return 'hemkund';
    if (key === 'shrikhand-plan1' || key === 'shrikhand-plan2') return 'shrikhand-mahadev';
    if (key === 'hampta-plan1' || key === 'hampta-plan2' || key === 'hampta-pass') return 'hampta-pass';
    if (key === 'madhyamaheshwar-plan1' || key === 'madhyamaheshwar-plan2') return 'madhyamaheshwar';
    if (key === 'kedarkantha') return 'kedarkantha';
    if (key === 'bir-billing' || key === 'bir-billing-plan1' || key === 'bir-billing-plan2' || key === 'bir-billing-plan3' || key === 'bir-billing-plan4') return 'bir-billing';
    if (key === 'jibhi-plan1' || key === 'jibhi-plan2') return 'jibhi';
    if (key === 'kashmir' || key === 'kashmir-plan1' || key === 'kashmir-plan2') return 'kashmir';
    return key;
  };

  const getDefaultMembers = (parentTripId) => {
    return parentTripId === "bir-billing"
      ? ["Yashpal", "Vaishnavi", "Adarsh", "Anshika"]
      : ["Yashpal", "Vansh"];
  };

  const getExpenseTrackerKey = (planId) => {
    const keysMap = {
      "yulla-plan3": "expenses-yulla-p3",
      "yulla-plan2": "expenses-yulla",
      "yulla-plan1": "expenses-yulla-p2",
      "ujjain": "expenses-ujjain",
      "spiti-plan3": "expenses-spiti-p3",
      "spiti-plan2": "expenses-spiti-p2",
      "spiti-plan1": "expenses-spiti-p1",
      "sikkim": "expenses-sikkim",
      "madhyamaheshwar-plan2": "expenses-madhyamaheshwar-plan2",
      "madhyamaheshwar-plan1": "expenses-madhyamaheshwar",
      "ladakh-plan4": "expenses-ladakh-p4",
      "ladakh-plan3": "expenses-ladakh-p3",
      "ladakh-plan2": "expenses-ladakh-p2",
      "ladakh-plan1": "expenses-ladakh-p1",
      "kashmir-plan1": "expenses-kashmir",
      "kashmir-plan2": "expenses-kashmir-plan2",
      "kedarkantha": "expenses-kedarkantha",
      "jibhi-plan2": "expenses-jibhi-plan2",
      "jibhi-plan1": "expenses-jibhi-plan1",
      "hemkund": "expenses-hemkund",
      "auli": "expenses-auli",
      "bir-billing-plan3": "expenses-bir-billing-plan3",
      "bir-billing-plan2": "expenses-bir-billing-plan2",
      "bir-billing-plan4": "expenses-bir-billing-plan4",
      "bir-billing-plan1": "expenses-bir-billing",
      "bir-billing": "expenses-bir-billing",
      "annapurna-plan1": "expenses-annapurna-p1",
    };
    return keysMap[planId] || `expenses-${planId}`;
  };

  if (loading) {
    return <p className="text-[10px] text-slate-400 font-mono animate-pulse">Loading actual expenses...</p>;
  }

  // Calculate Yashpal's category breakdown
  const breakdown = {};
  const activeMembers = membersList.length > 0 ? membersList : ["Yashpal", "Vansh"];
  
  expenses.forEach((exp) => {
    if (exp.settleLater) return;
    const amt = Number(exp.amount) || 0;
    const sharers = exp.splitWith || activeMembers;
    const cat = exp.category || "Other";
    const activeSharers = sharers.filter((m) => activeMembers.includes(m));

    if (activeSharers.length > 0 && activeSharers.includes("Yashpal")) {
      let yashpalShare = 0;
      if (exp.splitType === "unequal" && exp.splitAmounts) {
        yashpalShare = Number(exp.splitAmounts["Yashpal"] || 0);
      } else {
        yashpalShare = amt / sharers.length;
      }
      breakdown[cat] = (breakdown[cat] || 0) + yashpalShare;
    }
  });

  const totalSpent = Object.values(breakdown).reduce((sum, v) => sum + v, 0);

  if (totalSpent === 0) {
    return <p className="text-[10px] text-slate-400 italic">No ledger expenses recorded for Yashpal on this trip</p>;
  }

  const categoryColors = {
    Transport: { dot: "bg-blue-500", text: "text-blue-700" },
    Accommodation: { dot: "bg-emerald-500", text: "text-emerald-700" },
    Food: { dot: "bg-amber-500", text: "text-amber-700" },
    Rafting: { dot: "bg-purple-500", text: "text-purple-700" },
    Emergency: { dot: "bg-red-500", text: "text-red-700" },
    Shopping: { dot: "bg-pink-500", text: "text-pink-700" },
    Other: { dot: "bg-slate-500", text: "text-slate-700" }
  };

  const formatCurrency = (val) => {
    if (val === undefined || val === null || isNaN(val)) return "₹0";
    const num = Number(val);
    const formatted = num.toLocaleString("en-IN", {
      minimumFractionDigits: num % 1 !== 0 ? 2 : 0,
      maximumFractionDigits: 2,
    });
    return `₹${formatted}`;
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between border-b border-black/5 pb-2">
        <span className="text-[10px] font-black font-mono uppercase tracking-widest text-slate-400 flex items-center gap-1">
          <Receipt size={11} /> Yashpal's Ledger Breakdown
        </span>
        <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
          Total Share: {formatCurrency(Math.round(totalSpent))}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
        {Object.entries(breakdown).map(([cat, val]) => {
          const colors = categoryColors[cat] || categoryColors.Other;
          return (
            <div
              key={cat}
              className="bg-white border border-black/5 hover:border-black/15 rounded-2xl p-3.5 transition-all shadow-xs"
            >
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                <span className="text-[9px] font-black font-mono uppercase text-slate-400 block truncate">
                  {cat}
                </span>
              </div>
              <span className="text-base font-black font-mono text-black block">
                {formatCurrency(Math.round(val))}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export function CompletedTripsMap({ completedPlans = [], archivedTrips = [] }) {
  const mapRef = useRef(null);
  const leafletMapRef = useRef(null);
  const leafletInstanceRef = useRef(null);
  const markersRef = useRef([]);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapFilter, setMapFilter] = useState("visited");

  const places = [
    // Completed
    { id: "amritsar", name: "Amritsar Trip", city: "Amritsar, Punjab", coords: [31.6340, 74.8723], dates: "7 Nov – 9 Nov 2025", spent: "₹1,570.05", staticCompleted: true, state: "Punjab" },
    { id: "hisar", name: "Hisar Trip", city: "Hisar, Haryana", coords: [29.1492, 75.7217], dates: "31 Oct – 3 Nov 2025", spent: "₹5,164", staticCompleted: true, state: "Haryana" },
    { id: "mussoorie-dehradun", name: "Mussoorie, Landour & Tehri", city: "Mussoorie, Uttarakhand", coords: [30.4598, 78.0796], dates: "23 Jan – 26 Jan 2026", spent: "₹8,637", staticCompleted: true, state: "Uttarakhand" },
    { id: "manali-sissu-circuit", name: "Manali, Kasol & Sissu Circuit", city: "Manali, Himachal Pradesh", coords: [32.2396, 77.1887], dates: "26 Nov – 1 Dec 2025", spent: "₹4,192.50", staticCompleted: true, state: "Himachal Pradesh" },
    { id: "jaipur-heritage", name: "Jaipur Heritage Trip", city: "Jaipur, Rajasthan", coords: [26.9124, 75.7873], dates: "9 Jan – 12 Jan 2026", spent: "₹5,631.50", staticCompleted: true, state: "Rajasthan" },
    { id: "vrindavan-family", name: "Vrindavan Pilgrimage", city: "Vrindavan, Uttar Pradesh", coords: [27.5650, 77.7008], dates: "10 Jul – 11 Jul 2026", spent: "₹0", staticCompleted: true, state: "Uttar Pradesh" },
    { id: "rudranath", name: "Rudranath & Tungnath Trek", city: "Rudranath, Uttarakhand", coords: [30.5284, 79.3175], dates: "3 Jul – 8 Jul 2026", spent: "₹6,352", planIds: ["rudranath-plan1", "rudranath-plan2"], state: "Uttarakhand" },
    { id: "spiti", name: "Spiti Valley Expedition", city: "Kaza, Himachal Pradesh", coords: [32.2276, 78.0710], dates: "20 Aug – 25 Aug 2026", spent: "₹9,964", planIds: ["spiti-plan1", "spiti-plan2", "spiti-plan3"], state: "Himachal Pradesh" },

    // Upcoming / Potential Archived
    { id: "hemkund", name: "Valley of Flowers & Hemkund Sahib", city: "Hemkund, Uttarakhand", coords: [30.6925, 79.5897], dates: "6 Days", budget: "₹6.5K", planIds: ["hemkund"], state: "Uttarakhand" },
    { id: "annapurna", name: "Annapurna Base Camp Expedition", city: "Nepal Himalayas", coords: [28.5300, 83.8780], dates: "10 Days", budget: "₹15.2K", planIds: ["annapurna-plan1"], state: "Nepal" },
    { id: "ladakh", name: "Ladakh Self-Scooty Circuit", city: "Leh, Ladakh", coords: [34.1526, 77.5771], dates: "8-12 Days", budget: "₹16.5K", planIds: ["ladakh-plan1", "ladakh-plan2", "ladakh-plan3", "ladakh-plan4"], state: "Ladakh" },
    { id: "sikkim", name: "Sikkim Expedition", city: "Gangtok, Sikkim", coords: [27.3314, 88.6138], dates: "7 Days", budget: "₹6.9K", planIds: ["sikkim-std"], state: "Sikkim" },
    { id: "madhyamaheshwar", name: "Madhyamaheshwar Trek", city: "Ukhimath, Uttarakhand", coords: [30.6280, 79.2190], dates: "5–8 Days", budget: "₹4.8K", planIds: ["madhyamaheshwar-plan1", "madhyamaheshwar-plan2"], state: "Uttarakhand" },
    { id: "kedarkantha", name: "Kedarkantha Peak Summit", city: "Sankri, Uttarakhand", coords: [31.0227, 78.1812], dates: "5 Days (Jan 2027)", budget: "₹5.6K", planIds: ["kedarkantha"], state: "Uttarakhand" },
    { id: "bir-billing", name: "Bir Billing Paragliding", city: "Bir Billing, Himachal Pradesh", coords: [32.0427, 76.7225], dates: "4 Days", budget: "₹4.5K", planIds: ["bir-billing-plan1", "bir-billing-plan2", "bir-billing-plan3", "bir-billing-plan4"], state: "Himachal Pradesh" },
    { id: "jibhi", name: "Jibhi & Tirthan Valley", city: "Jibhi, Himachal Pradesh", coords: [31.6371, 77.3463], dates: "4 Days", budget: "₹3.7K", planIds: ["jibhi-plan1", "jibhi-plan2"], state: "Himachal Pradesh" },
    { id: "ujjain", name: "Ujjain Mahakal Darshan", city: "Ujjain, Madhya Pradesh", coords: [23.1760, 75.7885], dates: "3 Days", budget: "₹3.9K", planIds: ["ujjain"], state: "Madhya Pradesh" },
    { id: "auli", name: "Auli Snow & Skiing", city: "Joshimath, Uttarakhand", coords: [30.5284, 79.5694], dates: "5 Days", budget: "₹5.3K", planIds: ["auli"], state: "Uttarakhand" },
    { id: "kashmir", name: "Kashmir Valley Wanderer", city: "Srinagar, Kashmir", coords: [34.0837, 74.7973], dates: "6 Days", budget: "₹6.4K", planIds: ["kashmir-plan1", "kashmir-plan2"], state: "Jammu & Kashmir" },
    { id: "nepal-budget", name: "Nepal Budget Tour", city: "Kathmandu & Pokhara, Nepal", coords: [27.7172, 85.3240], dates: "7 Days", budget: "₹7.2K", planIds: ["nepal-plan1", "nepal-plan2"], state: "Nepal" },
    { id: "shrikhand-mahadev", name: "Shrikhand Dev Trek", city: "Rampur, Himachal Pradesh", coords: [31.3916, 77.6433], dates: "6 Days", budget: "₹5.8K", planIds: ["shrikhand-mahadev-plan1", "shrikhand-mahadev-plan2"], state: "Himachal Pradesh" },
    { id: "hampta-pass", name: "Hampta Pass Trek", city: "Manali, Himachal Pradesh", coords: [32.2274, 77.3486], dates: "5 Days", budget: "₹5.5K", planIds: ["hampta-plan1", "hampta-plan2"], state: "Himachal Pradesh" },

    // Sacred Yatras & Pilgrimages
    { id: "somnath", name: "Somnath Jyotirlinga Yatra", city: "Prabhas Patan, Gujarat", coords: [20.8880, 70.4012], dates: "3 Days", budget: "₹3.8K", isYatra: true, state: "Gujarat" },
    { id: "mallikarjuna", name: "Mallikarjuna Jyotirlinga Yatra", city: "Srisailam, Andhra Pradesh", coords: [16.0746, 78.8687], dates: "3 Days", budget: "₹4.1K", isYatra: true, state: "Andhra Pradesh" },
    { id: "mahakaleshwar", name: "Mahakaleshwar Jyotirlinga Yatra", city: "Ujjain, Madhya Pradesh", coords: [23.1827, 75.7578], dates: "3 Days", budget: "₹3.9K", isYatra: true, state: "Madhya Pradesh" },
    { id: "omkareshwar", name: "Omkareshwar Jyotirlinga Yatra", city: "Khandwa, Madhya Pradesh", coords: [22.2467, 76.1511], dates: "2 Days", budget: "₹3.5K", isYatra: true, state: "Madhya Pradesh" },
    { id: "kedarnath", name: "Kedarnath Dham Yatra", city: "Rudraprayag, Uttarakhand", coords: [30.7352, 79.0669], dates: "5 Days", budget: "₹7.5K", isYatra: true, state: "Uttarakhand" },
    { id: "bhimashankar", name: "Bhimashankar Jyotirlinga Yatra", city: "Pune, Maharashtra", coords: [19.0720, 73.5358], dates: "3 Days", budget: "₹4.2K", isYatra: true, state: "Maharashtra" },
    { id: "trimbakeshwar", name: "Trimbakeshwar Jyotirlinga Yatra", city: "Nashik, Maharashtra", coords: [19.9320, 73.5306], dates: "3 Days", budget: "₹4.0K", isYatra: true, state: "Maharashtra" },
    { id: "vaidyanath", name: "Baidyanath Jyotirlinga Yatra", city: "Deoghar, Jharkhand", coords: [24.4925, 86.6997], dates: "3 Days", budget: "₹4.5K", isYatra: true, state: "Jharkhand" },
    { id: "nageshwar", name: "Nageshwar Jyotirlinga Yatra", city: "Dwarka, Gujarat", coords: [22.3364, 69.0850], dates: "2 Days", budget: "₹3.6K", isYatra: true, state: "Gujarat" },
    { id: "ramanathaswamy", name: "Rameshwaram Jyotirlinga Yatra", city: "Rameswaram, Tamil Nadu", coords: [9.2881, 79.3174], dates: "4 Days", budget: "₹5.9K", isYatra: true, state: "Tamil Nadu" },
    { id: "grishneshwar", name: "Grishneshwar Jyotirlinga Yatra", city: "Ellora, Maharashtra", coords: [20.0268, 75.1685], dates: "2 Days", budget: "₹3.7K", isYatra: true, state: "Maharashtra" },
    { id: "varanasi", name: "Kashi Vishwanath Yatra", city: "Varanasi, Uttar Pradesh", coords: [25.3109, 83.0107], dates: "3 Days", budget: "₹3.87K", isYatra: true, state: "Uttar Pradesh" },
    { id: "kalpeshwar", name: "Kalpeshwar Kalpganga Yatra", city: "Urgam Valley, Uttarakhand", coords: [30.5650, 79.4350], dates: "4 Days", budget: "₹4.2K", isYatra: true, state: "Uttarakhand" },
    { id: "adi-kailash", name: "Adi Kailash & Om Parvat Yatra", city: "Pithoragarh, Uttarakhand", coords: [30.3200, 80.6000], dates: "8 Days", budget: "₹18.5K", isYatra: true, state: "Uttarakhand" },
    { id: "kinnaur-kailash", name: "Kinnaur Kailash Parikrama Yatra", city: "Recong Peo, Himachal Pradesh", coords: [31.5300, 78.3800], dates: "7 Days", budget: "₹9.2K", isYatra: true, state: "Himachal Pradesh" },
    { id: "manimahesh-kailash", name: "Manimahesh Kailash Yatra", city: "Bharmour, Himachal Pradesh", coords: [32.3900, 76.6400], dates: "6 Days", budget: "₹6.8K", isYatra: true, state: "Himachal Pradesh" },
    { id: "kailash-mansarovar", name: "Holy Kailash Mansarovar Yatra", city: "Tibet, China", coords: [31.0667, 81.3125], dates: "14 Days", budget: "₹45.0K", isYatra: true, state: "Tibet" },
    { id: "badrinath", name: "Badrinath Dham Yatra", city: "Chamoli, Uttarakhand", coords: [30.7433, 79.4938], dates: "4 Days", budget: "₹6.8K", isYatra: true, state: "Uttarakhand" },
    { id: "gangotri", name: "Gangotri Dham Yatra", city: "Uttarkashi, Uttarakhand", coords: [30.9947, 78.9398], dates: "4 Days", budget: "₹5.5K", isYatra: true, state: "Uttarakhand" },
    { id: "yamunotri", name: "Yamunotri Dham Yatra", city: "Uttarkashi, Uttarakhand", coords: [31.0140, 78.4599], dates: "4 Days", budget: "₹5.2K", isYatra: true, state: "Uttarakhand" },
    { id: "puri", name: "Jagannath Puri Dham Yatra", city: "Puri, Odisha", coords: [19.8135, 85.8312], dates: "3 Days", budget: "₹6.0K", isYatra: true, state: "Odisha" },
    { id: "dwarka", name: "Dwarkadhish Dham Yatra", city: "Dwarka, Gujarat", coords: [22.2442, 68.9685], dates: "3 Days", budget: "₹7.5K", isYatra: true, state: "Gujarat" },

    // Visited Spots / Checkpoints
    { id: "atal-tunnel", name: "Atal Tunnel", city: "Lahaul & Spiti, HP", coords: [32.3638, 77.0802], dates: "Visited Checkpoint", isSpot: true, state: "Himachal Pradesh" },
    { id: "dehradun", name: "Dehradun", city: "Uttarakhand", coords: [30.3165, 78.0322], dates: "Visited Checkpoint", isSpot: true, state: "Uttarakhand" },
    { id: "delhi", name: "Delhi", city: "National Capital Region", coords: [28.6139, 77.2090], dates: "Visited Checkpoint", isSpot: true, state: "Delhi" },
    { id: "elante-mall", name: "Elante Mall", city: "Chandigarh", coords: [30.7061, 76.8013], dates: "Visited Checkpoint", isSpot: true, state: "Chandigarh" },
    { id: "golden-temple", name: "Golden Temple Amritsar", city: "Amritsar, Punjab", coords: [31.6200, 74.8765], dates: "Visited Checkpoint", isSpot: true, state: "Punjab" },
    { id: "haridwar", name: "Haridwar", city: "Uttarakhand", coords: [29.9457, 78.1642], dates: "Visited Checkpoint", isSpot: true, state: "Uttarakhand" },
    { id: "hawa-mahal", name: "Hawa Mahal", city: "Jaipur, Rajasthan", coords: [26.9239, 75.8267], dates: "Visited Checkpoint", isSpot: true, state: "Rajasthan" },
    { id: "kalpana-chawla", name: "Kalpana Chawla Planetarium & Museum", city: "Kurukshetra, Haryana", coords: [29.9678, 76.8202], dates: "Visited Checkpoint", isSpot: true, state: "Haryana" },
    { id: "kasol", name: "Kasol", city: "Parvati Valley, HP", coords: [32.0098, 77.3150], dates: "Visited Checkpoint", isSpot: true, state: "Himachal Pradesh" },
    { id: "kullu", name: "Kullu", city: "Himachal Pradesh", coords: [31.9579, 77.1095], dates: "Visited Checkpoint", isSpot: true, state: "Himachal Pradesh" },
    { id: "lahaul-valley", name: "Lahaul Valley", city: "Himachal Pradesh", coords: [32.5534, 77.2281], dates: "Visited Checkpoint", isSpot: true, state: "Himachal Pradesh" },
    { id: "landour", name: "Landour", city: "Mussoorie, Uttarakhand", coords: [30.4560, 78.0930], dates: "Visited Checkpoint", isSpot: true, state: "Uttarakhand" },
    { id: "nandgaon", name: "Nandgaon", city: "Uttar Pradesh", coords: [27.7126, 77.3879], dates: "Visited Checkpoint", isSpot: true, state: "Uttar Pradesh" },
    { id: "rishikesh-laxman-jhula", name: "Rishikesh Laxman Jhula", city: "Uttarakhand", coords: [30.1299, 78.3297], dates: "Visited Checkpoint", isSpot: true, state: "Uttarakhand" },
    { id: "rock-garden", name: "Rock Garden Chandigarh", city: "Chandigarh", coords: [30.7525, 76.8012], dates: "Visited Checkpoint", isSpot: true, state: "Chandigarh" },
    { id: "sagar-village", name: "Sagar Village", city: "Uttarakhand", coords: [30.5185, 79.2825], dates: "Visited Checkpoint", isSpot: true, state: "Uttarakhand" },
    { id: "salasar-balaji", name: "Salasar Balaji", city: "Rajasthan", coords: [27.7311, 74.7214], dates: "Visited Checkpoint", isSpot: true, state: "Rajasthan" },
    { id: "sethan-valley", name: "Sethan Valley", city: "Manali, HP", coords: [32.2220, 77.2340], dates: "Visited Checkpoint", isSpot: true, state: "Himachal Pradesh" },
    { id: "shimla-mall-road", name: "Shimla Mall Road", city: "Himachal Pradesh", coords: [31.1042, 77.1738], dates: "Visited Checkpoint", isSpot: true, state: "Himachal Pradesh" },
    { id: "sujangarh", name: "Sujangarh", city: "Rajasthan", coords: [27.7001, 74.4716], dates: "Visited Checkpoint", isSpot: true, state: "Rajasthan" },
    { id: "ujjain-mahakal", name: "Ujjain Mahakaleshwar Mandir", city: "Madhya Pradesh", coords: [23.1827, 75.7578], dates: "Visited Checkpoint", isSpot: true, state: "Madhya Pradesh" },
    { id: "vaishno-devi", name: "Vaishno Devi Temple", city: "Katra, J&K", coords: [33.0308, 74.9490], dates: "Visited Checkpoint", isSpot: true, state: "Jammu & Kashmir" },
    { id: "zakir-hussain", name: "Zakir Hussain Rose Garden", city: "Chandigarh", coords: [30.7460, 76.7825], dates: "Visited Checkpoint", isSpot: true, state: "Chandigarh" },
    { id: "chandrashila-summit", name: "Chandrashila Summit Trek", city: "Chopta, Uttarakhand", coords: [30.5015, 79.2272], dates: "Visited Checkpoint", isSpot: true, state: "Uttarakhand" },
    { id: "rudranath-spot", name: "Rudranath", city: "Uttarakhand", coords: [30.5284, 79.3175], dates: "Visited Checkpoint", isSpot: true, state: "Uttarakhand" },
    { id: "tungnath-chopta", name: "Tungnath Chopta", city: "Uttarakhand", coords: [30.4883, 79.2155], dates: "Visited Checkpoint", isSpot: true, state: "Uttarakhand" },
  ];

  const getPlaceStatus = (p) => {
    if (p.isSpot) return "spot";
    if (p.isYatra) return "yatra";
    if (archivedTrips.includes(p.id)) return "archived";
    if (p.staticCompleted) return "completed";
    if (p.planIds && p.planIds.some(id => completedPlans.includes(id))) return "completed";
    return "upcoming";
  };

  const visitedStates = Array.from(new Set(
    places
      .filter(p => {
        const status = getPlaceStatus(p);
        return (status === "completed" || status === "spot") && p.state && p.state !== "Nepal";
      })
      .map(p => p.state)
  ));
  const statesCount = visitedStates.length;

  const visitedCountries = Array.from(new Set(
    places
      .filter(p => {
        const status = getPlaceStatus(p);
        return (status === "completed" || status === "spot") && p.state === "Nepal";
      })
      .map(p => "Nepal")
  ));
  const countriesCount = visitedCountries.length;

  useEffect(() => {
    if (leafletMapRef.current) return;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);

    import("leaflet").then((L) => {
      const Leaflet = L.default || L;
      window.L = Leaflet;
      leafletInstanceRef.current = Leaflet;

      const map = Leaflet.map(mapRef.current, {
        center: [29.8, 77.0],
        zoom: 6,
        zoomControl: false,
      });

      Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map);

      Leaflet.control.zoom({ position: "bottomright" }).addTo(map);

      leafletMapRef.current = map;
      setMapLoaded(true);
    });
  }, []);

  // Update markers dynamically when map loads or filters change
  useEffect(() => {
    if (!leafletMapRef.current || !mapLoaded) return;

    // Clear old markers
    markersRef.current.forEach(m => m.remove());
    markersRef.current = [];

    const L = leafletInstanceRef.current || window.L;
    if (!L) return;

    const filteredPlaces = places.filter(p => {
      const status = getPlaceStatus(p);
      if (mapFilter === "visited") return status === "completed" || status === "spot";
      if (mapFilter === "all") return true;
      return status === mapFilter;
    });

    filteredPlaces.forEach((p) => {
      const status = getPlaceStatus(p);

      let pingColor = "bg-sky-500/35";
      let pinBg = "bg-sky-600";
      let pinBorderColor = "rgba(14, 165, 233, 0.4)";
      let pinIconSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16.2 7.8-2 4.9-4.9 2-4.9-2 2-4.9"/></svg>';

      if (status === "yatra") {
        pingColor = "bg-amber-500/40";
        pinBg = "bg-amber-600";
        pinBorderColor = "rgba(217, 119, 6, 0.5)";
        pinIconSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>';
      } else if (status === "yatra") {
        badgeHtml = `<span style="display: inline-block; font-size: 9px; font-weight: 900; background: #fffbe6; border: 1px solid #fef3c7; color: #b45309; padding: 2px 8px; border-radius: 8px; font-family: monospace;">Sacred Yatra (Est: ${p.budget})</span>`;
      } else if (status === "completed") {
        pingColor = "bg-emerald-500/35";
        pinBg = "bg-emerald-600";
        pinBorderColor = "rgba(16, 185, 129, 0.4)";
        pinIconSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
      } else if (status === "archived") {
        pingColor = "bg-slate-400/30";
        pinBg = "bg-slate-500";
        pinBorderColor = "rgba(100, 116, 139, 0.4)";
        pinIconSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></svg>';
      } else if (status === "yatra") {
        badgeHtml = `<span style="display: inline-block; font-size: 9px; font-weight: 900; background: #fffbe6; border: 1px solid #fef3c7; color: #b45309; padding: 2px 8px; border-radius: 8px; font-family: monospace;">Sacred Yatra (Est: ${p.budget})</span>`;
      } else if (status === "spot") {
        pingColor = "bg-amber-500/35";
        pinBg = "bg-amber-600";
        pinBorderColor = "rgba(245, 158, 11, 0.4)";
        pinIconSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/></svg>';
      }

      const pinHtml = `
        <div class="relative flex items-center justify-center">
          <span class="absolute w-6 h-6 rounded-full ${pingColor} animate-ping"></span>
          <div class="relative w-7 h-7 rounded-xl ${pinBg} border border-white text-white flex items-center justify-center shadow-lg" style="box-shadow: 0 4px 10px ${pinBorderColor};">
            ${pinIconSvg}
          </div>
        </div>
      `;

      const customIcon = L.divIcon({
        html: pinHtml,
        className: "custom-div-icon",
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      });

      let badgeHtml = "";
      if (status === "completed") {
        badgeHtml = `<span style="display: inline-block; font-size: 9px; font-weight: 900; background: #ecfdf5; border: 1px solid #a7f3d0; color: #047857; padding: 2px 8px; border-radius: 8px; font-family: monospace;">Done (${p.spent})</span>`;
      } else if (status === "archived") {
        badgeHtml = `<span style="display: inline-block; font-size: 9px; font-weight: 900; background: #f1f5f9; border: 1px solid #cbd5e1; color: #475569; padding: 2px 8px; border-radius: 8px; font-family: monospace;">Archived</span>`;
      } else if (status === "spot") {
        badgeHtml = `<span style="display: inline-block; font-size: 9px; font-weight: 900; background: #fffbeb; border: 1px solid #fde68a; color: #b45309; padding: 2px 8px; border-radius: 8px; font-family: monospace;">Visited Spot</span>`;
      } else {
        badgeHtml = `<span style="display: inline-block; font-size: 9px; font-weight: 900; background: #f0f9ff; border: 1px solid #bae6fd; color: #0369a1; padding: 2px 8px; border-radius: 8px; font-family: monospace;">Upcoming (Est: ${p.budget})</span>`;
      }

      const popupContent = `
        <div style="font-family: system-ui, sans-serif; padding: 2px;">
          <p style="margin: 0; font-size: 8px; font-weight: 800; text-transform: uppercase; color: #94a3b8; letter-spacing: 0.05em;">${p.city}</p>
          <h4 style="margin: 3px 0 1px 0; font-size: 12px; font-weight: 900; color: #000; text-transform: uppercase; line-height: 1.2;">${p.name}</h4>
          <p style="margin: 0 0 6px 0; font-size: 10px; font-weight: 500; color: #64748b;">${p.dates}</p>
          ${badgeHtml}
        </div>
      `;

      const marker = L.marker(p.coords, { icon: customIcon })
        .addTo(leafletMapRef.current)
        .bindPopup(popupContent, { maxWidth: 220 });

      markersRef.current.push(marker);
    });

    // Auto-fit to bounds of visible places
    if (filteredPlaces.length > 0) {
      const bounds = L.latLngBounds(filteredPlaces.map(p => p.coords));
      leafletMapRef.current.fitBounds(bounds, { padding: [45, 45] });
    }
  }, [completedPlans, archivedTrips, mapLoaded, mapFilter]);

  return (
    <div className="mb-10">
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 mb-4 border-b border-black/5 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-700 font-bold">
            <Compass size={16} />
          </div>
          <div>
            <h2 className="text-xl font-black uppercase tracking-tight" style={{ fontFamily: "'Anton', sans-serif" }}>
              My Travel Map
            </h2>
            <p className="text-xs text-slate-500 font-medium">Completed, upcoming, and archived expeditions across India & Nepal</p>
          </div>
        </div>

        {/* Filters and Legend */}
        <div className="flex flex-wrap items-center gap-2.5 w-full xl:w-auto">
          {/* States counter badge */}
          <div className="flex items-center gap-1.5 bg-emerald-700 text-white px-3.5 py-1.5 rounded-full text-[10px] font-mono font-black uppercase tracking-wide shadow-xs hover:bg-emerald-800 transition-colors">
            <Compass size={12} className="animate-spin-slow" />
            <span>
              {statesCount} States & UTs
              {countriesCount > 0 ? " & " + countriesCount + " Country" : ""} Visited
            </span>
          </div>

          {/* Status Filters Bar */}
          <div className="flex items-center bg-black/5 p-1 rounded-full border border-black/5">
            {["visited", "all", "completed", "upcoming", "archived", "spot", "yatra"].map((mode) => (
              <button
                key={mode}
                onClick={() => setMapFilter(mode)}
                className={`px-3 py-1 rounded-full text-[9px] font-black uppercase font-mono tracking-wider transition-all cursor-pointer ${
                  mapFilter === mode
                    ? "bg-slate-900 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-black/5"
                }`}
              >
                {mode === "spot" ? "spots" : mode === "yatra" ? "yatras" : mode}
              </button>
            ))}
          </div>

          {/* Counts Legend Pill Bar */}
          <div className="flex flex-wrap items-center gap-2.5 bg-black/5 p-1 rounded-full border border-black/5 text-[9px] font-mono font-black uppercase">
            <div className="flex items-center gap-1.5 bg-white/90 px-2.5 py-1 rounded-full shadow-2xs border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-600 ring-2 ring-emerald-600/20" />
              <span className="text-slate-700">Completed <span className="text-emerald-700">({places.filter(p => getPlaceStatus(p) === "completed").length})</span></span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/90 px-2.5 py-1 rounded-full shadow-2xs border border-sky-500/20">
              <span className="w-2 h-2 rounded-full bg-sky-600 ring-2 ring-sky-600/20" />
              <span className="text-slate-700">Upcoming <span className="text-sky-700">({places.filter(p => getPlaceStatus(p) === "upcoming").length})</span></span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/90 px-2.5 py-1 rounded-full shadow-2xs border border-slate-500/20">
              <span className="w-2 h-2 rounded-full bg-slate-500 ring-2 ring-slate-500/20" />
              <span className="text-slate-700">Archived <span className="text-slate-700">({places.filter(p => getPlaceStatus(p) === "archived").length})</span></span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/90 px-2.5 py-1 rounded-full shadow-2xs border border-amber-500/20">
              <span className="w-2 h-2 rounded-full bg-amber-500 ring-2 ring-amber-500/20" />
              <span className="text-slate-700">Spots <span className="text-amber-700">({places.filter(p => getPlaceStatus(p) === "spot").length})</span></span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/90 px-2.5 py-1 rounded-full shadow-2xs border border-purple-500/20">
              <span className="w-2 h-2 rounded-full bg-purple-600 ring-2 ring-purple-600/20" />
              <span className="text-slate-700">Yatras <span className="text-purple-700">({places.filter(p => p.isYatra).length})</span></span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-white/70 backdrop-blur-md border border-black/10 rounded-[32px] p-4 shadow-sm overflow-hidden h-[480px] w-full">
        <div ref={mapRef} className="w-full h-full rounded-[24px] overflow-hidden z-10" />
      </div>
    </div>
  );
}

