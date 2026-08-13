import { spitiAmounts } from "../amounts";
const data = spitiAmounts.plan1;

export const budget = {
  total: data.budgetTotal,
  perPerson: true,
  currency: "INR",
  categories: [
    {
      id: "transport",
      label: "Transportation & Rental",
      amount: data.transportCategory,
      color: "#2563EB",
      icon: "Bus",
      description: "Direct Sonipat-Manali Volvo AC bus round trip + Royal Enfield Himalayan rental (4 Days) + Fuel",
      subItems: [
        { name: "Sonipat-Manali Volvo Bus Round Trip (₹550 going, ₹670 return)", price: data.transportFares.volvoRoundTrip },
        { name: "Royal Enfield Himalayan Bike Rental (4 Days)", price: data.transportFares.bikeRentalPerPerson },
        { name: "Himalayan Fuel (Manali + Spiti + Shipki La ~950 km)", price: data.transportFares.bikeFuelPerPerson },
      ]
    },
    {
      id: "accommodation",
      label: "Accommodation",
      amount: data.accommodationCategory,
      color: "#10B981",
      icon: "Bed",
      description: "Kaza Spiti Homestay with meals (3 Nights)",
      subItems: [
        { name: "Kaza Spiti Homestay with meals (3 Nights @ ₹850/person)", price: 2550 }
      ]
    },
    {
      id: "food",
      label: "Food & Meals",
      amount: data.foodCategory,
      color: "#F59E0B",
      icon: "Utensils",
      description: "Highway dhabas, Kaza cafes, and homestay meals (5 days @ ₹350/day)",
      subItems: [
        { name: "5 Days Meals & Snacks (₹350/day per person)", price: 1750 }
      ]
    },
    {
      id: "emergency",
      label: "Permits & Buffer",
      amount: data.emergencyCategory,
      color: "#EF4444",
      icon: "ShieldAlert",
      description: "Green Fee permit, Inner Line Permit for Shipki La, and emergency buffer",
      subItems: [
        { name: "Green Permit & Inner Line Fees", price: data.calcDefaults.permits },
        { name: "Emergency Buffer", price: data.calcDefaults.emergency }
      ]
    }
  ],
  dailyEstimate: [
    { day: 0, amount: 900,  label: "20 Aug — Sonipat → Delhi → Board Volvo Bus to Manali" },
    { day: 1, amount: 2200, label: "21 Aug — Arrive Manali → Pick up Himalayan → Ride to Kaza via Kunzum Pass" },
    { day: 2, amount: 1200, label: "22 Aug — Kaza → Key Monastery → Chicham → Hikkim → Komic → Langza" },
    { day: 3, amount: 1800, label: "23 Aug — Kaza → Dhankar → Tabo → Khab Confluence → Shipki La Pass (China Border)" },
    { day: 4, amount: 1650, label: "24 Aug — Kaza → Losar → Kunzum Pass → Manali → Return Himalayan → Evening Volvo Bus" },
    { day: 5, amount: 200,  label: "25 Aug — Arrive Delhi → Return to Sonipat" },
  ],
  calculatorDefaults: data.calcDefaults,
};

export const stayOptions = [
  {
    id: 1,
    destination: "Kaza Village Homestay",
    name: "Kaza Village Homestay",
    image: "/mountain_clay_peak.png",
    budget: 850,
    mid: 1400,
    premium: 2200,
    gmvnn: false,
    camping: false,
    hostel: false,
    facilities: ["Home cooked local thali", "Solar heated water", "Jio / BSNL 4G"],
    pros: ["Authentic Spitian hospitality", "Warm homestyle dinner included"],
    cons: ["Water supply via buckets during cold mornings"],
    tips: "Hydrate well and enjoy hot barley butter tea with local family",
    rating: 4.7,
    mapLink: "https://maps.google.com/?q=Kaza",
    type: "Homestay",
    pricePerNight: 850,
    location: "Kaza",
    nights: 3,
    hotels: [
      { name: "Kaza Traditional Spiti Homestay (with meals)", price: 850 },
      { name: "Sakya Abode Guest House", price: 1400 }
    ]
  }
];
