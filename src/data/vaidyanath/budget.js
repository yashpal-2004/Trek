import { vaidyanathAmounts } from "./amounts";

export const budget = {
  total: vaidyanathAmounts.plan1.total,
  perPerson: vaidyanathAmounts.plan1.total,
  categories: [
    {
      id: "transport",
      label: "Transport & Intercity Transit",
      amount: vaidyanathAmounts.plan1.transport,
      icon: "Train",
      color: "from-blue-500 to-cyan-600",
      subItems: [
        { name: "Delhi - Jasidih Sleeper Train (Round)", cost: 1200 },
        { name: "Jasidih - Deoghar Auto / E-Rickshaw", cost: 300 },
        { name: "Local Sightseeing (Trikut & Tapovan)", cost: 300 }
      ]
    },
    {
      id: "stay",
      label: "Accommodation & Dharamshala",
      amount: vaidyanathAmounts.plan1.stay,
      icon: "Home",
      color: "from-purple-500 to-indigo-600",
      subItems: [
        { name: "1 Night Dharamshala / Hotel near Temple", cost: 1200 }
      ]
    },
    {
      id: "food",
      label: "Food & Deoghar Peda Prasad",
      amount: vaidyanathAmounts.plan1.food,
      icon: "Utensils",
      color: "from-amber-500 to-orange-600",
      subItems: [
        { name: "Satvik Meals & Breakfast (3 Days)", cost: 700 },
        { name: "Famous Deoghar Peda & Tea", cost: 300 }
      ]
    },
    {
      id: "pooja",
      label: "Pooja & Temple Offerings",
      amount: vaidyanathAmounts.plan1.pooja,
      icon: "Sparkles",
      color: "from-emerald-500 to-teal-600",
      subItems: [
        { name: "Gangajal, Belpatra & Pooja Samagri", cost: 500 }
      ]
    },
    {
      id: "buffer",
      label: "Emergency & Miscellaneous Buffer",
      amount: vaidyanathAmounts.plan1.buffer,
      icon: "ShieldAlert",
      color: "from-rose-500 to-pink-600",
      subItems: [
        { name: "Unforeseen Expenses / Water / Auto", cost: 500 }
      ]
    }
  ]
};
