import React, { useState } from "react";
import { ArrowUpRight, Calendar, Wallet, Route, MapPin, X, CheckCircle2, Footprints, Compass, Plus, LayoutGrid, Clock, ChevronDown, ChevronUp, Sparkles, Receipt } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useFirestore } from "../hooks/useFirestore";
import { yullaAmounts } from "../data/yulla/amounts";
import { ladakhAmounts } from "../data/ladakh/amounts";
import { spitiAmounts } from "../data/spiti/amounts";
import { annapurnaAmounts } from "../data/annapurna/amounts";
import { completedTrips } from "../data/completedTrips";

export default function Landing() {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [completedPlans, setCompletedPlans, isLoading] = useFirestore("trek_completed_plans", []);
  const [actualCosts, setActualCosts] = useFirestore("trek_actual_costs", {});
  const [costPromptModal, setCostPromptModal] = useState(null); // { plan, defaultCost }
  const [inputActualCost, setInputActualCost] = useState("");
  const [activeTab, setActiveTab] = useState("active"); // "active" or "done"
  const [categoryTab, setCategoryTab] = useState("all"); // "all", "trek", "trip"
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "timeline"
  const [expandedTripId, setExpandedTripId] = useState(null);

  const isTripCompleted = (trip) => {
    if (trip.isCompleted) return true;
    return trip.plans.some(p => completedPlans.includes(p.id));
  };

  const parseNumericBudget = (str) => {
    if (!str) return 0;
    const match = String(str).match(/₹([0-9,]+)/);
    return match ? parseInt(match[1].replace(/,/g, ""), 10) : 0;
  };

  const openCostPrompt = (plan, e) => {
    if (e) e.stopPropagation();
    const existing = actualCosts[plan.id];
    const defaultVal = existing !== undefined ? existing : parseNumericBudget(plan.budget);
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
      type: "trek",
      typeLabel: "Mountain Trek",
      title: "Rudranath & Tungnath Trek",
      subtitle: "Uttarakhand, India",
      description: "A backpacking trek across the ancient temples and towering peaks of the Garhwal Himalayas.",
      stats: {
        duration: "6–9 Days (Jul 2026)",
        distance: "52–60 km Trek",
        budget: "₹8.0K–9.5K",
      },
      image: "/mountain_clay_peak.png",
      plans: [
        {
          id: "rudranath-plan1",
          title: "Plan 1 (Standard Route)",
          duration: "2 Jul – 10 Jul 2026 (9 Days)",
          route: "Hisar → Haridwar → Sagar → Rudranath → Chopta → Kalpeshwar → Rishikesh → Hisar",
          details: "Includes Kalpeshwar (Panch Kedar temple) and a leisure day exploring Rishikesh ghats.",
          budget: "₹8,500 – ₹9,500",
          path: "/rudranath-plan1",
        },
        {
          id: "rudranath-plan2",
          title: "Plan 2 (Direct Route)",
          duration: "3 Jul – 8 Jul 2026 (6 Days)",
          route: "Hisar (3 Jul 5:00 PM) → Haridwar → Sagar → Rudranath → Chopta → Kartik Swami → Hisar (8 Jul 10:00 PM)",
          details: "Fast-paced route departing Hisar 3 Jul 5:00 PM, returning 8 Jul 10:00 PM.",
          budget: "₹8,000 – ₹8,500",
          path: "/rudranath-plan2",
        },
      ],
    },
    {
      id: "shrikhand-mahadev",
      type: "trek",
      typeLabel: "Mountain Trek",
      title: "Shrikhand Mahadev Trek",
      subtitle: "Himachal Pradesh, India",
      description: "One of India's most challenging high-altitude pilgrimages ascending to a 75ft natural rock Shivling at 17,150 ft in the Kullu Himalayas.",
      stats: {
        duration: "6–7 Days (Jul 2026)",
        distance: "64 km Trek",
        budget: "₹6.5K–8.0K",
      },
      image: "/mountain_clay_peak.png",
      plans: [
        {
          id: "shrikhand-plan1",
          title: "Plan 1 (Standard Yatra Route)",
          duration: "15 Jul – 21 Jul 2026 (7 Days)",
          route: "Hisar → Shimla → Rampur → Jaon → Singhad → Thachru → Kali Ghati → Bhim Dwar → Shrikhand Mahadev (5,227m) → Hisar",
          details: "Standard 7-day pilgrimage route with acclimatization stays at Thachru and Bhim Dwar base camp.",
          budget: "₹6,500 – ₹8,000",
          path: "/shrikhand-plan1",
        },
        {
          id: "shrikhand-plan2",
          title: "Plan 2 (Express Direct Route)",
          duration: "16 Jul – 21 Jul 2026 (6 Days)",
          route: "Hisar (15 Jul 10:00 PM) → Rampur → Jaon → Singhad → Kali Ghati → Bhim Dwar → Shrikhand Summit → Jaon → Hisar",
          details: "Fast-paced 6-day direct route departing Hisar late night, bypassing Shimla stay.",
          budget: "₹6,000 – ₹7,200",
          path: "/shrikhand-plan2",
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
        duration: "5 Days",
        distance: "24 km Trek",
        budget: `₹${(yullaAmounts.plan2.budgetTotal / 1000).toFixed(1)}K–${(yullaAmounts.plan1.budgetTotal / 1000).toFixed(1)}K`,
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
        }
      ],
    },
    {
      id: "hemkund",
      type: "trek",
      typeLabel: "Alpine Trek",
      title: "Valley of Flowers & Hemkund Sahib",
      subtitle: "Uttarakhand, India",
      description: "Trek through the UNESCO World Heritage alpine floral meadows and visit the sacred high-altitude Shree Hemkund Sahib Gurudwara.",
      stats: {
        duration: "6 Days",
        distance: "38 km Trek",
        budget: "₹7.8K",
      },
      image: "/mountain_clay_peak.png",
      plans: [
        {
          id: "hemkund",
          title: "Standard Plan (Delhi Round Trip)",
          duration: "6 Days",
          route: "Delhi → Haridwar → Govindghat → Ghangaria → Valley of Flowers & Hemkund Sahib → Haridwar → Delhi",
          details: "Complete 6-day self-guided pilgrimage and alpine valley trek starting and ending in Delhi via Haridwar & Govindghat.",
          budget: "₹7,800 / person",
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
        duration: "6 Days",
        distance: "1150 km Total",
        budget: `₹${(spitiAmounts.plan2.budgetTotal / 1000).toFixed(1)}K–${(spitiAmounts.plan1.budgetTotal / 1000).toFixed(1)}K`,
      },
      image: "/mountain_clay_peak.png",
      plans: [
        {
          id: "spiti-plan1",
          title: "Plan 1 (2 Persons Variant)",
          duration: "6 Days",
          route: "Delhi → Manali → Atal Tunnel → Kaza → Key & High Villages → Chandratal → Manali → Delhi",
          details: "Delhi-Manali Volvo, 3-day Hero Xpulse 200 rental in Spiti & 2-day Scooty rental in Manali for 2 riders.",
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
        duration: "12 Days",
        distance: "2850 km Riding",
        budget: `₹${(ladakhAmounts.plan1.budgetTotal / 1000).toFixed(1)}K–${(ladakhAmounts.plan2.budgetTotal / 1000).toFixed(1)}K`,
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
    }
  ];

  const allTrips = [...trips, ...completedTrips];

  const filteredTrips = allTrips.filter(trip => {
    const isDone = isTripCompleted(trip);
    const matchesStatus = activeTab === "done" ? isDone : !isDone;
    const matchesCategory = categoryTab === "all" || trip.type === categoryTab;
    return matchesStatus && matchesCategory;
  });

  const trekItems = filteredTrips.filter(t => t.type === "trek");
  const tripItems = filteredTrips.filter(t => t.type === "trip");

  if (isLoading) {
    return (
      <div className="min-h-screen w-screen bg-[#f2efe9] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-5 h-5 rounded-full border-2 border-black border-t-transparent animate-spin" />
        </div>
      </div>
    );
  }

  const renderTripCard = (trip) => {
    const isCompleted = isTripCompleted(trip);
    const isTrek = trip.type === "trek";

    return (
      <div
        key={trip.id}
        onClick={() => setSelectedTrip(trip)}
        className={`bg-white/60 hover:bg-white border border-black/10 hover:border-black/25 rounded-[32px] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between cursor-pointer group relative overflow-hidden ${
          isCompleted ? "opacity-90 grayscale-[20%]" : ""
        }`}
      >
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

              <h3 className="text-2xl font-black uppercase tracking-tight flex items-center gap-2" style={{ fontFamily: "'Anton', sans-serif" }}>
                {trip.title}
                {isCompleted && (
                  <span className="bg-emerald-500/10 text-emerald-600 text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full normal-case font-sans">
                    Done ({getCompletedPlansText(trip)})
                  </span>
                )}
              </h3>
            </div>
            
            <div className="flex items-center gap-2">
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
              <div className="w-10 h-10 rounded-2xl border border-black/10 flex items-center justify-center bg-white group-hover:bg-black group-hover:text-white transition-colors duration-300 shrink-0">
                <ArrowUpRight size={18} />
              </div>
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
              <p className="text-[10px] font-black uppercase text-slate-400">{isTrek ? "Trek" : "Distance"}</p>
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
                                {trip.stats.duration}
                              </span>
                            </div>

                            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight hover:text-emerald-700 transition-colors flex items-center flex-wrap gap-2" style={{ fontFamily: "'Anton', sans-serif" }}>
                              {trip.title}
                              {isCompleted && (
                                <span className="bg-emerald-500/10 text-emerald-600 text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded-full normal-case font-sans border border-emerald-500/20">
                                  Done ({getCompletedPlansText(trip)})
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
                              {isCompleted && trip.expenses && trip.expenses.length > 0 && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setExpandedTripId(isExpanded ? null : trip.id);
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
                          {isExpanded && trip.expenses && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden border-t border-black/10 mt-5 pt-4"
                            >
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-[10px] font-black font-mono uppercase tracking-widest text-slate-400 flex items-center gap-1">
                                  <Receipt size={11} /> Itemized Expense Summary
                                </span>
                                <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                                  {trip.expenses.length} Categories
                                </span>
                              </div>

                              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                                {trip.expenses.map((exp, idx) => (
                                  <div
                                    key={idx}
                                    className="bg-black/[0.02] border border-black/5 hover:border-black/15 rounded-2xl p-3 transition-all hover:bg-white"
                                  >
                                    <span className="text-[9px] font-black font-mono uppercase text-slate-400 block truncate">
                                      {exp.category}
                                    </span>
                                    <span className="text-sm font-black font-mono text-black block mt-0.5">
                                      {formatCurrency(exp.amount)}
                                    </span>
                                    <span className="text-[10px] text-slate-500 font-medium line-clamp-1 mt-0.5">
                                      {exp.description}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
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

  const completedTripsList = allTrips.filter(t => isTripCompleted(t));
  const totalSpent = completedTripsList.reduce((sum, trip) => {
    if (trip.spentTotal !== undefined && trip.spentTotal !== null) return sum + trip.spentTotal;
    const donePlan = trip.plans.find(p => completedPlans.includes(p.id));
    if (!donePlan) return sum;
    const val = actualCosts[donePlan.id];
    return sum + (val !== undefined && val !== null && !isNaN(parseFloat(val)) ? parseFloat(val) : parseNumericBudget(donePlan.budget));
  }, 0);

  const completedTreksCount = completedTripsList.filter(t => t.type === "trek").length;
  const completedRoadTripsCount = completedTripsList.filter(t => t.type === "trip").length;

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
    let min = Infinity;
    let max = -Infinity;
    (trip.plans || []).forEach(plan => {
      const bounds = parseBudgetRange(plan.budget);
      if (bounds.min > 0 && bounds.min < min) min = bounds.min;
      if (bounds.max > max) max = bounds.max;
    });
    if (min === Infinity) min = 0;
    if (max === -Infinity) max = min;
    return { min, max };
  };

  const activeTrips = trips.filter(t => !isTripCompleted(t));
  const activeTreksCount = activeTrips.filter(t => t.type === "trek").length;
  const activeRoadTripsCount = activeTrips.filter(t => t.type === "trip").length;
  const upcomingRange = activeTrips.reduce((acc, trip) => {
    const { min, max } = getTripBudgetBounds(trip);
    return { min: acc.min + min, max: acc.max + max };
  }, { min: 0, max: 0 });

  return (
    <div className="min-h-screen w-screen bg-[#f2efe9] text-black selection:bg-black/10 flex flex-col justify-between relative font-sans">
      
      {/* Header */}
      <header className="w-full py-4 px-6 md:px-12 flex justify-between items-center z-30">
        <a href="/" className="font-extrabold text-xl tracking-tight uppercase hover:opacity-75 transition-opacity flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-black"></span>
          Treks & Expeditions
        </a>
      </header>

      {/* Main Content Dashboard */}
      <main className="flex-grow flex flex-col justify-start pt-2 md:pt-4 pb-12 px-6 max-w-5xl mx-auto w-full z-10">
        
        {/* Intro */}
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[10px] font-black font-mono tracking-widest text-slate-400 uppercase">Adventure Portal</span>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mt-1" style={{ fontFamily: "'Anton', sans-serif" }}>
              Select Your Adventure
            </h1>
            <p className="text-slate-500 font-medium text-sm mt-1.5 max-w-md leading-relaxed">
              Explore Himalayan alpine treks or multi-day road riding expeditions with full itineraries and budget breakdowns.
            </p>
          </div>

          {/* Financial Summary Stat Badges */}
          <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0">
            <div className="bg-white/80 backdrop-blur-md border border-emerald-500/20 rounded-2xl p-3.5 min-w-[155px] shadow-sm">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] font-black font-mono text-slate-400 uppercase tracking-wider">Total Spent</span>
              </div>
              <p className="text-xl font-black text-emerald-700 font-mono">₹{totalSpent.toLocaleString("en-IN")}</p>
              <p className="text-[9px] font-bold text-slate-400 mt-0.5 font-mono">
                {completedTreksCount} Trek{completedTreksCount === 1 ? "" : "s"} • {completedRoadTripsCount} Road Trip{completedRoadTripsCount === 1 ? "" : "s"}
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-md border border-black/10 rounded-2xl p-3.5 min-w-[185px] shadow-sm">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="text-[9px] font-black font-mono text-slate-400 uppercase tracking-wider">Upcoming Est.</span>
              </div>
              <p className="text-base sm:text-lg font-black text-black font-mono leading-snug">
                {upcomingRange.min === upcomingRange.max ? (
                  `₹${upcomingRange.min.toLocaleString("en-IN")}`
                ) : (
                  `₹${upcomingRange.min.toLocaleString("en-IN")} – ₹${upcomingRange.max.toLocaleString("en-IN")}`
                )}
              </p>
              <p className="text-[9px] font-bold text-slate-400 mt-0.5 font-mono">
                {activeTreksCount} Trek{activeTreksCount === 1 ? "" : "s"} • {activeRoadTripsCount} Road Trip{activeRoadTripsCount === 1 ? "" : "s"}
              </p>
            </div>
          </div>
        </div>

        {/* Filter Toolbar: Category Filters + Status Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 border-b border-black/10 pb-6">
          {/* Category Selector Tabs */}
          <div className="flex flex-wrap gap-2">
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
          </div>

          <div className="flex items-center gap-3 shrink-0">
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

            {/* Status Selector (Active vs Done) */}
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
                <div className="flex items-center gap-2 mb-6 border-b border-black/5 pb-3">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  {trekItems.map(renderTripCard)}
                </div>
              </div>
            )}

            {/* Section 2: Road Trips & Expeditions */}
            {tripItems.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-6 border-b border-black/5 pb-3">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  {tripItems.map(renderTripCard)}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Filtered view for specific category */
          <div>
            <div className="flex items-center gap-2 mb-6 border-b border-black/5 pb-3">
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                categoryTab === "trek" ? "bg-emerald-500/10 text-emerald-700" : "bg-sky-500/10 text-sky-700"
              }`}>
                {categoryTab === "trek" ? <Footprints size={16} /> : <Compass size={16} />}
              </div>
              <div>
                <h2 className="text-xl font-black uppercase tracking-tight" style={{ fontFamily: "'Anton', sans-serif" }}>
                  {categoryTab === "trek" ? "Himalayan Mountain Treks" : "Road Trips & Expeditions"}
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  {categoryTab === "trek" ? "Foot trails, high passes, and sacred temple treks" : "Self-scooty circuits, bike rentals, and high-pass riding routes"}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {filteredTrips.map(renderTripCard)}
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
                  return (
                    <div
                      key={plan.id}
                      className={`relative bg-white hover:bg-white/80 border rounded-2xl p-5 transition-all shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group ${
                        isPlanCompleted ? "border-emerald-500/35 bg-emerald-500/[0.01]" : "border-black/5 hover:border-black/25"
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
                              {isPlanCompleted && (
                                <span className="bg-emerald-500/10 text-emerald-600 text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full font-sans uppercase">
                                  Completed
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
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleTogglePlanMark(plan, e);
                              }}
                              className={`w-8 h-8 rounded-xl border flex items-center justify-center transition-colors shrink-0 ${
                                isPlanCompleted
                                  ? "bg-emerald-500 border-emerald-600 text-white hover:bg-emerald-600"
                                  : "border-black/10 bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-600"
                              }`}
                              title={isPlanCompleted ? "Edit Actual Cost / Unmark" : "Mark Done & Enter Actual Cost"}
                            >
                              <CheckCircle2 size={14} />
                            </button>
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
    </div>
  );
}
