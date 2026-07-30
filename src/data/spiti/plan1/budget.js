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
      description: "Delhi-Manali Volvo AC bus round trip + Hero Xpulse 200 rental (3 Days) + Xpulse Fuel + Scooty rental & fuel in Manali (2 Days)",
      subItems: [
        { name: "Delhi-Manali Volvo Bus Round Trip (₹600 each way)", price: data.transportFares.volvoRoundTrip },
        { name: "Hero Xpulse 200 Bike Rental (3 Days Spiti, split by 2)", price: data.transportFares.xpulseRentalPerPerson },
        { name: "Hero Xpulse 200 Fuel (Spiti ~800 km)", price: data.transportFares.xpulseFuelPerPerson },
        { name: "Manali Scooty Rental (2 Days, split by 2)", price: data.transportFares.scootyRentalPerPerson },
        { name: "Manali Scooty Fuel (2 Days local riding)", price: data.transportFares.scootyFuelPerPerson }
      ]
    },
    { 
      id: "accommodation", 
      label: "Accommodation", 
      amount: data.accommodationCategory, 
      color: "#10B981", 
      icon: "Bed", 
      description: "Old Manali hotels (2 Nights) + Kaza Spiti Homestay with meals (2 Nights)",
      subItems: [
        { name: "Manali Hotel/Homestay (2 Nights @ ₹750/person)", price: 1500 },
        { name: "Kaza Spiti Homestay with meals (2 Nights @ ₹850/person)", price: 1700 }
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
      description: "Green Fee permit, entry fees, and emergency cash buffer",
      subItems: [
        { name: "Green Permit & Entry Fees", price: data.calcDefaults.permits },
        { name: "Emergency Buffer", price: data.calcDefaults.emergency }
      ]
    }
  ],
  dailyEstimate: [
    { day: 1, amount: 1850, label: "Delhi → Manali Arrival & 1st Day Scooty Exploration" },
    { day: 2, amount: 2200, label: "Manali → Atal Tunnel → Kunzum Pass → Kaza (Xpulse Day 1)" },
    { day: 3, amount: 1200, label: "Kaza → Key → Chicham → Hikkim → Komic → Langza (Xpulse Day 2)" },
    { day: 4, amount: 2100, label: "Kaza → Chandratal Lake → Manali (Xpulse Day 3 Return)" },
    { day: 5, amount: 1650, label: "Manali 2nd Day Scooty & Evening Volvo Bus to Delhi" },
    { day: 6, amount: 150, label: "Arrival in Delhi" }
  ],
  calculatorDefaults: data.calcDefaults,
};

export const stayOptions = [
  {
    id: 1,
    destination: "Old Manali Guesthouse",
    name: "Old Manali Guesthouse",
    image: "/mountain_clay_peak.png",
    budget: 750,
    mid: 1200,
    premium: 2000,
    gmvnn: false,
    camping: false,
    hostel: true,
    facilities: ["Free WiFi", "Hot water geyser", "Bike parking"],
    pros: ["Close to Hadimba temple and cafes", "Rider friendly atmosphere"],
    cons: ["Narrow lanes near Old Manali bridge"],
    tips: "Book guest house in Old Manali for peaceful nights",
    rating: 4.5,
    mapLink: "https://maps.google.com/?q=Old+Manali",
    type: "Hotel",
    pricePerNight: 750,
    location: "Old Manali",
    hotels: [
      { name: "Old Manali Backpacker Hostel / Guesthouse", price: 750 },
      { name: "Riverside Lodge Old Manali", price: 1200 }
    ]
  },
  {
    id: 2,
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
    hotels: [
      { name: "Kaza Traditional Spiti Homestay (with meals)", price: 850 },
      { name: "Sakya Abode Guest House", price: 1400 }
    ]
  }
];
