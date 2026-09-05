import { ujjainAmounts } from "./amounts";
const data = ujjainAmounts;

export const budget = {
  total: data.budgetTotal,
  perPerson: true,
  currency: "INR",
  categories: [
    {
      id: "transport",
      label: "Transportation",
      amount: data.transportCategory,
      color: "#2563EB",
      icon: "Bus",
      description: "Delhi/Sonipat round trip AC sleeper bus + Ujjain-Omkareshwar bus & local autos",
      subItems: [
        { name: "Delhi/Sonipat → Ujjain Round Trip AC Sleeper", price: 2400 },
        { name: "Ujjain → Omkareshwar Express Bus/Cab (Round Trip)", price: 500 },
        { name: "Local E-Rickshaw & Boat Transfer", price: 100 }
      ]
    },
    {
      id: "accommodation",
      label: "Accommodation",
      amount: data.accommodationCategory,
      color: "#10B981",
      icon: "Bed",
      description: "AC Hotel room near Mahakaleshwar Temple, Ujjain (1 Night)",
      subItems: [
        { name: "Ujjain Hotel (1 Night double-sharing)", price: 600 }
      ]
    },
    {
      id: "food",
      label: "Food & Meals",
      amount: data.foodCategory,
      color: "#F59E0B",
      icon: "Utensils",
      description: "Malwai Dal Bafla, Poha-Jalebi, Narmada Ghat thali, and highway dhabas",
      subItems: [
        { name: "Meals & snacks across 3 days", price: 1000 }
      ]
    },
    {
      id: "emergency",
      label: "Pooja & Misc Buffer",
      amount: data.emergencyCategory,
      color: "#EF4444",
      icon: "Shield",
      description: "Temple prasad, locker charges, Narmada boat ticket & emergency fund",
      subItems: [
        { name: "Pooja, Prasad & Emergency Buffer", price: 300 }
      ]
    }
  ],
  dailyEstimate: [
    { day: 0, amount: 1350, label: "Sonipat/Delhi → Ujjain (Bus & dinner)" },
    { day: 1, amount: 1450, label: "Ujjain Mahakal Darshan (Hotel, Dal Bafla, Harsiddhi)" },
    { day: 2, amount: 1900, label: "Ujjain → Omkareshwar & Mamleshwar (Bus, boat, return bus)" },
    { day: 3, amount: 100, label: "Arrive Home (Local auto)" }
  ],
  calculatorDefaults: data.calcDefaults,
};

export const stayOptions = [
  {
    id: 1,
    destination: "Ujjain (Near Mahakal Temple)",
    image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=800&q=80",
    budget: data.stays.ujjain.budget,
    mid: data.stays.ujjain.mid,
    premium: data.stays.ujjain.premium,
    gmvnn: false,
    camping: false,
    hostel: true,
    facilities: ["Air Conditioning", "Hot Water", "Walkable to Mahakal Lok", "24hr Check-in"],
    pros: ["Walking distance to Mahakaleshwar Temple", "Easy access to Bhasma Aarti queue"],
    cons: ["Heavy traffic on weekend evenings near temple gates"],
    tips: "Book guest houses inside the Mahakal Marg area so you can easily walk for 3:00 AM Bhasma Aarti.",
    rating: 4.6,
    mapLink: "https://maps.google.com/?q=Mahakaleshwar+Ujjain",
    hotels: [
      { name: "Hotel Mahakal Inn", price: data.stays.ujjain.hotelPrice, offline: true },
      { name: "MPSTC Hotel Shipra Ujjain", price: 1200, offline: true }
    ]
  },
  {
    id: 2,
    destination: "Omkareshwar Narmada Ghat",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    budget: data.stays.omkareshwar.budget,
    mid: data.stays.omkareshwar.mid,
    premium: data.stays.omkareshwar.premium,
    gmvnn: false,
    camping: false,
    hostel: false,
    facilities: ["Narmada River View", "Pure Veg Canteen", "Clean Rooms"],
    pros: ["Peaceful ghat atmosphere", "Close to Omkareshwar temple island"],
    cons: ["Limited high-end luxury hotels"],
    tips: "Dharamshalas near the Narmada Jhula Pul offer clean rooms at very nominal rates.",
    rating: 4.5,
    mapLink: "https://maps.google.com/?q=Omkareshwar+Narmada+Ghat",
    hotels: [
      { name: "Narmada Resort Omkareshwar", price: data.stays.omkareshwar.hotelPrice, offline: true }
    ]
  }
];

export const accommodationBreakdown = [];
