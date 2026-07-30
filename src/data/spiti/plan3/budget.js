import { spitiAmounts } from "../amounts";
const data = spitiAmounts.plan3;

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
      description: "Delhi-Manali Volvo AC bus round trip + Hero Xpulse 200 rental (3 Days) + Xpulse Fuel. (No scooty rental or Manali local transit)",
      subItems: [
        { name: "Delhi-Manali Volvo Bus Round Trip (₹600 each way)", price: data.transportFares.volvoRoundTrip },
        { name: "Hero Xpulse 200 Bike Rental (3 Days Spiti, split by 2)", price: data.transportFares.xpulseRentalPerPerson },
        { name: "Hero Xpulse 200 Fuel (Spiti ~800 km)", price: data.transportFares.xpulseFuelPerPerson }
      ]
    },
    { 
      id: "accommodation", 
      label: "Accommodation", 
      amount: data.accommodationCategory, 
      color: "#10B981", 
      icon: "Bed", 
      description: "Homestays in Kaza / Tabo villages. No hotel stay in Manali.",
      subItems: [
        { name: "Kaza / Tabo Homestay (2 Nights)", price: 1700 }
      ]
    },
    { 
      id: "food", 
      label: "Food & Meals", 
      amount: data.foodCategory, 
      color: "#F59E0B", 
      icon: "Utensils", 
      description: "Highway dhabas and homestay meals (3 days @ ₹350/day)",
      subItems: [
        { name: "3 Days Meals & Snacks (₹350/day per person)", price: 1050 }
      ]
    },
    { 
      id: "emergency", 
      label: "Permits & Buffer", 
      amount: data.emergencyCategory, 
      color: "#EF4444", 
      icon: "ShieldAlert", 
      description: "Green Fee permit, entry fees, and emergency cash buffer",
      subItems: [
        { name: "Green Permit & Entry Fees", price: data.calcDefaults.permits },
        { name: "Emergency Buffer", price: data.calcDefaults.emergency }
      ]
    }
  ],
  dailyEstimate: [
    { day: 1, amount: 2050, label: "Delhi → Manali Arrival, immediate Xpulse pick up & ride to Kaza" },
    { day: 2, amount: 1200, label: "Kaza → Key → Chicham → Hikkim → Komic → Langza (Xpulse Day 2)" },
    { day: 3, amount: 3900, label: "Kaza → Chandratal Lake → Manali (Return Xpulse, board evening Volvo to Delhi)" },
    { day: 4, amount: 150, label: "Arrival in Delhi" }
  ],
  calculatorDefaults: data.calcDefaults,
};

export const stayOptions = [
  {
    id: 1,
    destination: "Kaza Homestays",
    name: "Kaza Local Homestay",
    image: "/mountain_clay_peak.png",
    budget: 600,
    mid: 850,
    premium: 1800,
    gmvnn: false,
    camping: false,
    hostel: false,
    facilities: ["Traditional wooden heating", "Local home-cooked food", "Thick blankets"],
    pros: ["Experience Spitian hospitality", "Warm cozy rooms"],
    cons: ["Shared basic toilets", "No running hot water"],
    tips: "Always carry cash as online payments rarely work in Kaza.",
    rating: 4.9,
    mapLink: "https://maps.google.com/?q=Kaza",
    hotels: [
      { name: "Kaza Homestay (Direct Booking)", price: data.stays.kaza.homestayPrice, offline: true }
    ]
  }
];
