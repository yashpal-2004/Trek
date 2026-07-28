import { spitiAmounts } from "../amounts";
const data = spitiAmounts.plan2;

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
      description: "Delhi-Manali Volvo AC bus round trip + 2 Hero Xpulse 200 rentals (3 Days) + Xpulse Fuel + 2 Scooties rental & fuel in Manali (2 Days)",
      subItems: [
        { name: "Delhi-Manali Volvo Bus Round Trip (₹600 each way)", price: data.transportFares.volvoRoundTrip },
        { name: "Hero Xpulse 200 Bike Rental (3 Days Spiti, split by 4 across 2 bikes)", price: data.transportFares.xpulseRentalPerPerson },
        { name: "Hero Xpulse 200 Fuel (Spiti ~450 km)", price: data.transportFares.xpulseFuelPerPerson },
        { name: "Manali Scooty Rental (2 Days, split by 4 across 2 scooties)", price: data.transportFares.scootyRentalPerPerson },
        { name: "Manali Scooty Fuel (2 Days local riding)", price: data.transportFares.scootyFuelPerPerson }
      ]
    },
    { 
      id: "accommodation", 
      label: "Accommodation", 
      amount: data.accommodationCategory, 
      color: "#10B981", 
      icon: "Bed", 
      description: "Old Manali quad room (2 Nights) + Kaza quad homestay with meals (2 Nights)",
      subItems: [
        { name: "Manali Quad Hotel Room (2 Nights @ ₹600/person)", price: 1200 },
        { name: "Kaza Quad Homestay with meals (2 Nights @ ₹700/person)", price: 1400 }
      ]
    },
    { 
      id: "food", 
      label: "Food & Meals", 
      amount: data.foodCategory, 
      color: "#F59E0B", 
      icon: "Utensils", 
      description: "Highway dhabas, Old Manali cafes, and homestay meals (5 days @ ₹350/day)",
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
      description: "Shared Green Fee permit, entry fees, and emergency cash buffer",
      subItems: [
        { name: "Green Permit & Entry Fees (Shared)", price: 100 },
        { name: "Emergency Buffer", price: 200 }
      ]
    }
  ],
  dailyEstimate: [
    { day: 1, amount: 1700, label: "Delhi → Manali Arrival & 1st Day Scooty Exploration" },
    { day: 2, amount: 2050, label: "Manali → Atal Tunnel → Kunzum Pass → Kaza (Xpulse Day 1)" },
    { day: 3, amount: 1050, label: "Kaza → Key → Chicham → Hikkim → Komic → Langza (Xpulse Day 2)" },
    { day: 4, amount: 1950, label: "Kaza → Chandratal Lake → Manali (Xpulse Day 3 Return)" },
    { day: 5, amount: 1500, label: "Manali 2nd Day Scooty & Evening Volvo Bus to Delhi" },
    { day: 6, amount: 150, label: "Arrival in Delhi" }
  ],
  calculatorDefaults: data.calcDefaults,
};

export const stayOptions = [
  {
    id: 1,
    destination: "Old Manali Quad Suite",
    name: "Old Manali Quad Suite",
    image: "/mountain_clay_peak.png",
    budget: 600,
    mid: 1000,
    premium: 1800,
    gmvnn: false,
    camping: false,
    hostel: true,
    facilities: ["Free WiFi", "4-bed room", "Hot water geyser"],
    pros: ["Quad-sharing savings for 4 friends", "Spacious room with balcony"],
    cons: ["Shared bathroom in budget category"],
    tips: "Book family suite or quad room in advance for group discount",
    rating: 4.6,
    mapLink: "https://maps.google.com/?q=Old+Manali",
    type: "Hotel",
    pricePerNight: 600,
    location: "Old Manali",
    hotels: [
      { name: "Old Manali 4-Sharing Quad Room", price: 600 },
      { name: "Family Suite Old Manali", price: 1000 }
    ]
  },
  {
    id: 2,
    destination: "Kaza 4-Bed Homestay",
    name: "Kaza 4-Bed Homestay",
    image: "/mountain_clay_peak.png",
    budget: 700,
    mid: 1200,
    premium: 2000,
    gmvnn: false,
    camping: false,
    hostel: false,
    facilities: ["Quad bedding", "Home cooked meals", "Solar water"],
    pros: ["Shared quad room homestay savings", "Includes breakfast & dinner"],
    cons: ["Limited electrical charging outlets per room"],
    tips: "Carry a multi-plug adapter for charging 4 phones/power banks simultaneously",
    rating: 4.8,
    mapLink: "https://maps.google.com/?q=Kaza",
    type: "Homestay",
    pricePerNight: 700,
    location: "Kaza",
    hotels: [
      { name: "Kaza 4-Bed Quad Spiti Homestay (with meals)", price: 700 },
      { name: "Trekking Homestay Kaza", price: 1200 }
    ]
  }
];
