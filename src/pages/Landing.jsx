import React, { useState } from "react";
import { ArrowUpRight, Calendar, Wallet, Route, MapPin, X, CheckCircle2, Footprints, Compass, Plus, LayoutGrid, Clock, ChevronDown, ChevronUp, Sparkles, Receipt, Star, GitCompareArrows, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
import { auliAmounts } from "../data/auli/amounts";
import { kashmirAmounts } from "../data/kashmir/amounts";
import { budget as budgetShrikhand1 } from "../data/shrikhand/plan1/budget";
import { budget as budgetShrikhand2 } from "../data/shrikhand/plan2/budget";
import { budget as budgetHampta1 } from "../data/hampta/plan1/budget";
import { budget as budgetHampta2 } from "../data/hampta/plan2/budget";
import { completedTrips } from "../data/completedTrips";

export default function Landing() {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [completedPlans, setCompletedPlans, isLoading] = useFirestore("trek_completed_plans", []);
  const [targetPlans, setTargetPlans] = useFirestore("trek_target_plans", []);
  const [actualCosts, setActualCosts] = useFirestore("trek_actual_costs", {});
  const [costPromptModal, setCostPromptModal] = useState(null); // { plan, defaultCost }
  const [inputActualCost, setInputActualCost] = useState("");
  const [activeTab, setActiveTab] = useState("active"); // "active" or "done"
  const [categoryTab, setCategoryTab] = useState("all"); // "all", "trek", "trip"
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "timeline"
  const [expandedTripId, setExpandedTripId] = useState(null);
  const [sortBy, setSortBy] = useState("money");
  const [compareList, setCompareList] = useState([]);
  const [showCompare, setShowCompare] = useState(false);
  const [comparePlanIdx, setComparePlanIdx] = useState([0, 0]); // plan index for each compared trip

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
        budget: `₹${(rudranathAmounts.plan2.budgetTotal / 1000).toFixed(1)}K–${(rudranathAmounts.plan1.budgetTotal / 1000).toFixed(1)}K`,
      },
      image: "/mountain_clay_peak.png",
      plans: [
        {
          id: "rudranath-plan1",
          title: "Plan 1 (Standard Route)",
          duration: "2 Jul – 10 Jul 2026 (9 Days)",
          route: "Hisar → Haridwar → Sagar → Rudranath → Chopta → Kalpeshwar → Rishikesh → Hisar",
          details: "Includes Kalpeshwar (Panch Kedar temple) and a leisure day exploring Rishikesh ghats.",
          budget: `₹${rudranathAmounts.plan1.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/rudranath-plan1",
        },
        {
          id: "rudranath-plan2",
          title: "Plan 2 (Direct Route)",
          duration: "3 Jul – 8 Jul 2026 (6 Days)",
          route: "Hisar (3 Jul 5:00 PM) → Haridwar → Sagar → Rudranath → Chopta → Kartik Swami → Hisar (8 Jul 10:00 PM)",
          details: "Fast-paced route departing Hisar 3 Jul 5:00 PM, returning 8 Jul 10:00 PM.",
          budget: `₹${rudranathAmounts.plan2.budgetTotal.toLocaleString("en-IN")} / person`,
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
        budget: `₹${(hemkundAmounts.budgetTotal / 1000).toFixed(1)}K`,
      },
      image: "/mountain_clay_peak.png",
      plans: [
        {
          id: "hemkund",
          title: "Standard Plan (Delhi Round Trip)",
          duration: "6 Days",
          route: "Delhi → Haridwar → Govindghat → Ghangaria → Valley of Flowers & Hemkund Sahib → Haridwar → Delhi",
          details: "Complete 6-day self-guided pilgrimage and alpine valley trek starting and ending in Delhi via Haridwar & Govindghat.",
          budget: `₹${hemkundAmounts.budgetTotal.toLocaleString("en-IN")} / person`,
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
          duration: "6 Days",
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
    },
    {
      id: "madhyamaheshwar",
      type: "trek",
      typeLabel: "Mountain Trek",
      title: "Madhyamaheshwar & Budha Madhyamaheshwar",
      subtitle: "Uttarakhand, India",
      description: "A spiritual and scenic yatra to the high alpine meadows and ancient Panch Kedar temple of Madhyamaheshwar, optionally combining it with the sacred Kedarnath shrine.",
      stats: {
        duration: "5–8 Days",
        distance: "36–68 km Trek",
        budget: `₹${(madhyamaheshwarAmounts.plan1.budgetTotal / 1000).toFixed(1)}K–${(madhyamaheshwarAmounts.plan2.budgetTotal / 1000).toFixed(1)}K`,
      },
      image: "/mountain_clay_peak.png",
      plans: [
        {
          id: "madhyamaheshwar-plan1",
          title: "Plan 1 (Standard Delhi Round Trip)",
          duration: "5 Days",
          route: "Delhi → Rishikesh → Ukhimath → Ransi → Bantoli → Madhyamaheshwar → Budha Madhyamaheshwar → Ransi → Rishikesh → Delhi",
          details: "Scenic 5-day route climbing to Madhyamaheshwar and Budha Madhyamaheshwar with Chaukhamba sunrise reflections.",
          budget: `₹${madhyamaheshwarAmounts.plan1.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/madhyamaheshwar-plan1",
        },
        {
          id: "madhyamaheshwar-plan2",
          title: "Plan 2 (Kedarnath Combo Yatra)",
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
      id: "ujjain",
      type: "trip",
      typeLabel: "Spiritual Road Trip",
      title: "Ujjain Mahakal Darshan",
      subtitle: "Madhya Pradesh, India",
      description: "Experience the spiritual vibrations of Mahakaleshwar Jyotirlinga, witness the lighting of oil lamps at Harsiddhi Shaktipeeth, and explore the ancient holy city of Ujjain on a budget weekend trip.",
      stats: {
        duration: "3 Days",
        distance: "1,700 km Round-Trip",
        budget: `₹${(ujjainAmounts.budgetTotal / 1000).toFixed(1)}K`,
      },
      image: "/mountain_clay_peak.png",
      plans: [
        {
          id: "ujjain",
          title: "Standard Bus Plan (AC Sleeper & E-Rickshaws)",
          duration: "3 Days",
          route: "Sonipat → Ujjain (AC Sleeper Bus) → Mahakal Mandir & Lok Corridor → Kal Bhairav & Mangalnath → Sonipat",
          details: "Spiritual weekend escape utilizing direct overnight sleeper coach from Sonipat bypass, local e-rickshaws, and cozy hotel stay.",
          budget: `₹${ujjainAmounts.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/ujjain",
        }
      ],
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
        budget: `₹${(kashmirAmounts.budgetTotal / 1000).toFixed(1)}K`,
      },
      image: "/mountain_clay_peak.png",
      plans: [
        {
          id: "kashmir",
          title: "Standard Valley Plan (Train & Shared Cabs)",
          duration: "6 Days",
          route: "Delhi → Jammu (Train) → Banihal (Shared Cab) → Srinagar (Local DEMU Train) → Gulmarg & Pahalgam → Delhi",
          details: "Budget exploration using overnight sleeper train, mountain highway shared cabs, local valley train shuttle, and budget stays.",
          budget: `₹${kashmirAmounts.budgetTotal.toLocaleString("en-IN")} / person`,
          path: "/kashmir",
        }
      ],
    }
  ];

  const allTrips = [...trips, ...completedTrips];

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
    const matchesStatus = activeTab === "done" ? isDone : !isDone;
    const matchesCategory = categoryTab === "all" || trip.type === categoryTab;
    return matchesStatus && matchesCategory;
  });

  const sortedTrips = [...filteredTrips].sort((a, b) => {
    if (sortBy === "money") return getMinBudget(a) - getMinBudget(b);
    if (sortBy === "days") return getDurationDays(a) - getDurationDays(b);
    return 0;
  });

  const trekItems = sortedTrips.filter(t => t.type === "trek");
  const tripItems = sortedTrips.filter(t => t.type === "trip");

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
    const isTrek = trip.type === "trek";
    const targetPlanForTrip = trip.plans ? (trip.plans.length === 1 ? trip.plans[0] : trip.plans.find(p => targetPlans.includes(p.id))) : null;
    const isInCompare = compareList.includes(trip.id);
    const compareDisabled = compareList.length >= 2 && !isInCompare;

    return (
      <div
        key={trip.id}
        onClick={() => setSelectedTrip(trip)}
        className={`hover:bg-white border hover:border-black/25 rounded-[32px] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between cursor-pointer group relative overflow-hidden ${
          isCompleted ? "opacity-90 grayscale-[20%]" : ""
        } ${
          isInCompare
            ? "bg-violet-50/60 border-violet-300 ring-2 ring-violet-200/60"
            : "bg-white/60 border-black/10"
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

            return (
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
                  const targetPlanForTrip = trip.plans ? (trip.plans.length === 1 ? trip.plans[0] : trip.plans.find(p => targetPlans.includes(p.id))) : null;

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
                  return (
                    <div
                      key={plan.id}
                      className={`relative bg-white hover:bg-white/80 border rounded-2xl p-5 transition-all shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group ${
                        isPlanCompleted
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
                              {isPlanCompleted && (
                                <span className="bg-emerald-500/10 text-emerald-600 text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full font-sans uppercase">
                                  Completed
                                </span>
                              )}
                              {isPlanTarget && !isPlanCompleted && (
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
                                  handleToggleTargetPlan(plan, e);
                                }}
                                className={`w-8 h-8 rounded-xl border flex items-center justify-center transition-colors shrink-0 ${
                                  isPlanTarget
                                    ? "bg-amber-500 border-amber-600 text-white hover:bg-amber-600"
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
                                className={`w-8 h-8 rounded-xl border flex items-center justify-center transition-colors shrink-0 ${
                                  isPlanCompleted
                                    ? "bg-emerald-500 border-emerald-600 text-white hover:bg-emerald-600"
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

