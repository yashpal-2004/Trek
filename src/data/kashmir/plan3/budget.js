import { kashmirPlan3Amounts } from "./amounts";

export const budget = {
  total: kashmirPlan3Amounts.budgetTotal,
  perPerson: true,
  currency: "INR",
  categories: [
    {
      id: "transport",
      label: "Transportation & Transit",
      amount: kashmirPlan3Amounts.transportCategory,
      color: "#2563EB",
      icon: "Bus",
      description: "Delhi-Jammu General Class Train + JKSRTC Bus to Banihal + DEMU train + Shared local mini-buses",
      subItems: [
        { name: "Delhi-Jammu General Train Round-Trip", price: kashmirPlan3Amounts.transportFares.generalTrainRoundTrip },
        { name: "Jammu-Banihal Bus/Shared Transit Round-Trip", price: kashmirPlan3Amounts.transportFares.jammuBanihalBusCab },
        { name: "Banihal-Srinagar Local DEMU Train Round-Trip", price: kashmirPlan3Amounts.transportFares.valleyDemuTrain },
        { name: "Local shared mini-buses & day-trip transit", price: kashmirPlan3Amounts.transportFares.localSharedTransits }
      ]
    },
    {
      id: "accommodation",
      label: "Accommodation",
      amount: kashmirPlan3Amounts.accommodationCategory,
      color: "#10B981",
      icon: "Bed",
      description: "Srinagar ultra-budget backpacker hostel dormitories / local homestay (4 Nights @ ₹250/night)",
      subItems: [
        { name: "Backpacker Hostel Dormitory (4 Nights)", price: kashmirPlan3Amounts.accommodationCategory }
      ]
    },
    {
      id: "food",
      label: "Food & Meals",
      amount: kashmirPlan3Amounts.foodCategory,
      color: "#F59E0B",
      icon: "Utensils",
      description: "Local Kandur bakeries (Tsot bread & Nun Chai) + Budget local dhabas (₹240/day)",
      subItems: [
        { name: "5 Days Food & Tea (₹240/day per person)", price: kashmirPlan3Amounts.foodCategory }
      ]
    },
    {
      id: "emergency",
      label: "Sightseeing & Activities",
      amount: kashmirPlan3Amounts.emergencyCategory,
      color: "#EF4444",
      icon: "ShieldAlert",
      description: "Shared Shikara ride on Dal Lake + Mughal garden tickets + mandatory J&K SIM",
      subItems: [
        { name: "Shared Shikara Ride (4 people sharing)", price: 200 },
        { name: "Mughal Garden & local entry tickets", price: 200 },
        { name: "Jio Postpaid SIM (J&K Roaming Plan)", price: kashmirPlan3Amounts.transportFares.jioPostpaidSIM }
      ]
    }
  ],
  dailyEstimate: [
    { day: 0, amount: 190, label: "Day 0 Night — Board unreserved general train from Delhi" },
    { day: 1, amount: 950, label: "Day 1 — Bus & DEMU train to Srinagar, check in backpacker hostel" },
    { day: 2, amount: 1100, label: "Day 2 — Shared mini-bus day trip to Gulmarg meadows & walk" },
    { day: 3, amount: 1200, label: "Day 3 — Shared transit day trip to Pahalgam Lidder valley" },
    { day: 4, amount: 800, label: "Day 4 — Explore Srinagar old city & Mughal gardens on foot" },
    { day: 5, amount: 920, label: "Day 5 — DEMU train and bus back to Jammu, board general night train" },
    { day: 6, amount: 190, label: "Day 6 Morning — Arrive back in Delhi" }
  ],
  calculatorDefaults: kashmirPlan3Amounts.calcDefaults,
};

export const stayOptions = [
  {
    id: 1,
    destination: "Srinagar (Khayam / Dalgate)",
    name: "Kashmir Backpacker Hostel Dorms",
    image: "/mountain_clay_peak.png",
    budget: 250,
    mid: 500,
    premium: 1200,
    gmvnn: false,
    camping: false,
    hostel: true,
    facilities: ["Bunk beds", "Hot water showers", "Common lounge", "Wi-Fi"],
    pros: ["Cheapest stay option in Srinagar", "Great for solo travelers & meeting other backpackers"],
    cons: ["Shared bathroom"],
    tips: "Book bunk bed in advance during autumn & spring seasons.",
    rating: 4.6,
    mapLink: "https://maps.google.com/?q=Srinagar+Hostel",
    type: "Hostel",
    pricePerNight: 250,
    location: "Srinagar",
    nights: 4,
    hotels: [
      { name: "Backpacker Bunk Bed", price: 250 }
    ]
  }
];
