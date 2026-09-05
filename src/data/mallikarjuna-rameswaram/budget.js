import { mallikarjunaRameswaramAmounts } from "./amounts";

export const budget = {
  total: mallikarjunaRameswaramAmounts.plan1.total,
  perPerson: mallikarjunaRameswaramAmounts.plan1.total,
  categories: [
    {
      id: "transport",
      label: "Train & Multi-State Intercity Transit",
      amount: mallikarjunaRameswaramAmounts.plan1.transport,
      icon: "Train",
      color: "from-blue-500 to-cyan-600",
      subItems: [
        { name: "Delhi - AP - TN Sleeper Express Trains", cost: 2600 },
        { name: "Nallamala Ghat Bus & Local Autos", cost: 800 },
        { name: "Dhanushkodi Ocean Jeep Safari", cost: 400 }
      ]
    },
    {
      id: "stay",
      label: "Accommodation (Srisailam & Rameswaram)",
      amount: mallikarjunaRameswaramAmounts.plan1.stay,
      icon: "Home",
      color: "from-purple-500 to-indigo-600",
      subItems: [
        { name: "Srisailam Devasthanam / Ashram Stay (2 Nights)", cost: 1200 },
        { name: "Rameswaram Temple View Hotel (2 Nights)", cost: 1200 }
      ]
    },
    {
      id: "food",
      label: "South Indian Food & Meals",
      amount: mallikarjunaRameswaramAmounts.plan1.food,
      icon: "Utensils",
      color: "from-amber-500 to-orange-600",
      subItems: [
        { name: "Traditional Meals, Dosa, Idli & Filter Coffee (7 Days)", cost: 1800 }
      ]
    },
    {
      id: "pooja",
      label: "22 Well Bathing, Ropeway & Pooja",
      amount: mallikarjunaRameswaramAmounts.plan1.pooja,
      icon: "Sparkles",
      color: "from-emerald-500 to-teal-600",
      subItems: [
        { name: "22 Theertham Ticket & Patalganga Cable Car", cost: 400 },
        { name: "Temple Abhishekam & Prasad", cost: 400 }
      ]
    },
    {
      id: "buffer",
      label: "Emergency & Miscellaneous Buffer",
      amount: mallikarjunaRameswaramAmounts.plan1.buffer,
      icon: "ShieldAlert",
      color: "from-rose-500 to-pink-600",
      subItems: [
        { name: "Unforeseen Expenses / Mineral Water / Snacks", cost: 700 }
      ]
    }
  ]
};
