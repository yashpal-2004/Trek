import { auliAmounts } from "./amounts";

export const budget = {
  total: auliAmounts.budgetTotal,
  perPerson: true,
  currency: "INR",
  categories: [
    {
      id: "transport",
      label: "Transportation & Ropeway",
      amount: auliAmounts.transportCategory,
      color: "#2563EB",
      icon: "Bus",
      description: "Ordinary Bus/Train ticket + Local GMOU Bus to Joshimath + Joshimath-Auli Ropeway tickets",
      subItems: [
        { name: "Sonipat-Rishikesh Ordinary Bus Round Trip", price: auliAmounts.transportFares.ordinaryBusRoundTrip },
        { name: "Rishikesh-Joshimath GMOU Local Bus Round Trip", price: auliAmounts.transportFares.localBusRoundTrip },
        { name: "Joshimath-Auli Cable Car (Ropeway) Ticket", price: auliAmounts.transportFares.ropewayRoundTrip }
      ]
    },
    {
      id: "accommodation",
      label: "Accommodation",
      amount: auliAmounts.accommodationCategory,
      color: "#10B981",
      icon: "Bed",
      description: "Double sharing hotel in Joshimath (3 Nights)",
      subItems: [
        { name: "Joshimath Hotel Stay (3 Nights @ ₹500/night per person)", price: auliAmounts.accommodationCategory }
      ]
    },
    {
      id: "food",
      label: "Food & Meals",
      amount: auliAmounts.foodCategory,
      color: "#F59E0B",
      icon: "Utensils",
      description: "Daily breakfast, local lunch thalis, and dinners",
      subItems: [
        { name: "4 Days Meals (₹300/day per person)", price: auliAmounts.foodCategory }
      ]
    },
    {
      id: "emergency",
      label: "Winter Rentals & Buffer",
      amount: auliAmounts.emergencyCategory,
      color: "#EF4444",
      icon: "ShieldAlert",
      description: "Ski equipment hire, snow boot rentals, and emergency cash",
      subItems: [
        { name: "Snow boots & ski rental (1 Day)", price: 400 },
        { name: "Emergency cash buffer", price: 200 }
      ]
    }
  ],
  dailyEstimate: [
    { day: 0, amount: 400, label: "Day 0 Night — Board ordinary/regular bus from Sonipat" },
    { day: 1, amount: 950, label: "Day 1 — GMOU Bus from Rishikesh to Joshimath, check in" },
    { day: 2, amount: 1600, label: "Day 2 — Ropeway to Auli, Skiing slopes explore, return" },
    { day: 3, amount: 1050, label: "Day 3 — Gorson Bugyal snow trek hike, local sightsee" },
    { day: 4, amount: 1100, label: "Day 4 — Travel back to Rishikesh, board night bus" },
    { day: 5, amount: 900, label: "Day 5 Morning — Arrive back in Sonipat" }
  ],
  calculatorDefaults: auliAmounts.calcDefaults,
};

export const stayOptions = [
  {
    id: 1,
    destination: "Joshimath Town",
    name: "Hotel Joshimath Palace",
    image: "/mountain_clay_peak.png",
    budget: 600,
    mid: 1000,
    premium: 2000,
    gmvnn: false,
    camping: false,
    hostel: false,
    facilities: ["Heaters available", "Hot water geysers", "Close to Ropeway Station"],
    pros: ["Very clean and close to cable car starting point", "Stunning views of Elephant peak"],
    cons: ["Slightly busy street during morning hours"],
    tips: "Book ropeway slots in the morning around 8:30 AM to avoid lines.",
    rating: 4.6,
    mapLink: "https://maps.google.com/?q=Joshimath",
    type: "Hotel",
    pricePerNight: 1000,
    location: "Joshimath",
    nights: 3,
    hotels: [
      { name: "Standard Room (double sharing, per night)", price: 1000 },
      { name: "Deluxe Heaters Room", price: 1500 }
    ]
  }
];
