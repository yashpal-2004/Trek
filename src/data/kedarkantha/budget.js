import { kedarkanthaAmounts } from "./amounts";
const data = kedarkanthaAmounts;

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
      description: "Delhi-Dehradun train/bus + Dehradun-Sankri shared jeep round trip",
      subItems: [
        { name: "Delhi → Dehradun (AC Bus / Train Round Trip)", price: 800 },
        { name: "Dehradun → Sankri Shared Jeep Round Trip", price: 800 }
      ]
    },
    { 
      id: "accommodation", 
      label: "Accommodation", 
      amount: data.accommodationCategory, 
      color: "#10B981", 
      icon: "Bed", 
      description: "Homestays in Sankri + pre-pitched tents at Juda Ka Talab & Hargaon",
      subItems: [
        { name: "Sankri Homestay / Zostel (2 Nights, shared)", price: 800 },
        { name: "Juda Ka Talab tent hire (1 Night, incl. bag)", price: 1000 },
        { name: "Hargaon Camp tent hire (1 Night, incl. bag)", price: 1000 }
      ]
    },
    { 
      id: "food", 
      label: "Food & Meals", 
      amount: data.foodCategory, 
      color: "#F59E0B", 
      icon: "Utensils", 
      description: "Simple hot local meals, tea stops and trail snacks (₹350/day)",
      subItems: [
        { name: "Daily mountain meals & hot tea (₹350/day for 5 days)", price: 1750 }
      ]
    },
  ],
  dailyEstimate: [
    { day: 1, amount: 1600, label: "Delhi → Dehradun → Sankri Transit" },
    { day: 2, amount: 1350, label: "Sankri → Juda Ka Talab Climb (Trek 4 km)" },
    { day: 3, amount: 1350, label: "Juda Ka Talab → Summit (3,810m) → Hargaon" },
    { day: 4, amount: 1250, label: "Hargaon → Sankri descent → Dehradun Drive" },
    { day: 5, amount: 600, label: "Dehradun Sightseeing & Overnight return to Delhi" },
  ],
  calculatorDefaults: data.calcDefaults,
};

export const stayOptions = [
  {
    id: 1,
    destination: "Sankri Base Village",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    budget: data.stays.sankri.budget,
    mid: data.stays.sankri.mid,
    premium: data.stays.sankri.premium,
    gmvnn: false,
    camping: false,
    hostel: true,
    facilities: ["Wi-Fi (limited)", "Hot running water", "Cafe menu", "Warm rooms"],
    pros: ["Very clean and comfy", "Great social vibes at Zostel"],
    cons: ["Sells out fast in peak winter season"],
    tips: "Ensure pre-booking at least 1 month in advance for December/January trips.",
    rating: 4.8,
    mapLink: "https://maps.google.com/?q=Sankri",
    hotels: [
      { name: "Zostel Sankri", price: 499, offline: false },
      { name: "Wild Orchard Homestay", price: 600, offline: true }
    ]
  },
  {
    id: 2,
    destination: "Juda Ka Talab Camp",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
    budget: data.stays.judaKaTalab.budget,
    mid: data.stays.judaKaTalab.mid,
    premium: data.stays.judaKaTalab.premium,
    gmvnn: false,
    camping: true,
    hostel: false,
    facilities: ["Pre-pitched tents", "Sleeping bag + liner", "Kitchen tent meals"],
    pros: ["Frozen lake views", "Surrounded by pine forest canopy"],
    cons: ["Sub-zero nights", "Dry pit toilets only"],
    tips: "Rent double-insulated sleeping bags and use hand warmers inside.",
    rating: 4.6,
    mapLink: "https://maps.google.com/?q=Juda+Ka+Talab",
    hotels: [
      { name: "Local Dhaba Tent Rental", price: 1000, offline: true }
    ]
  }
];
