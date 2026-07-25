import { ladakhAmounts } from "../amounts";
const data = ladakhAmounts.plan1;

export const budget = {
  total: data.budgetTotal,
  perPerson: true,
  currency: "INR",
  categories: [
    { 
      id: "transport", 
      label: "Transportation & Fuel", 
      amount: data.transportCategory, 
      color: "#2563EB", 
      icon: "Bus", 
      description: "Self scooty fuel (2850 km @ ~35 km/l) + engine oil changes & Inner Line Permits",
      subItems: [
        { name: "Scooty Petrol / Fuel (Hisar-Ladakh-Hisar)", price: 7500 },
        { name: "Engine Oil & Pre-trip Servicing", price: 1000 }
      ]
    },
    { 
      id: "accommodation", 
      label: "Accommodation", 
      amount: data.accommodationCategory, 
      color: "#10B981", 
      icon: "Bed", 
      description: "Budget hotels, homestays & Pangong/Nubra camps (shared room)",
      subItems: [
        { name: "Patnitop / Srinagar / Kargil Hotels (3 Nights)", price: 1700 },
        { name: "Leh Budget Guest House (3 Nights)", price: 1800 },
        { name: "Nubra Homestay & Pangong Lake Camp (2 Nights)", price: 1500 },
        { name: "Jispa Camp & Manali Hotel (2 Nights)", price: 1200 }
      ]
    },
    { 
      id: "food", 
      label: "Food & Meals", 
      amount: data.foodCategory, 
      color: "#F59E0B", 
      icon: "Utensils", 
      description: "Highway dhabas, Leh Tibetan cafes, and camp meals (12 days)",
      subItems: [
        { name: "Daily meals, tea breaks & snacks (₹330/day)", price: 4000 }
      ]
    },
  ],
  dailyEstimate: [
    { day: 1, amount: 1200, label: "Hisar → Patnitop (Fuel & Hotel)" },
    { day: 2, amount: 900, label: "Patnitop → Srinagar (Dal Lake walk & Stay)" },
    { day: 3, amount: 1300, label: "Srinagar → Zoji La → Kargil (Fuel & Stay)" },
    { day: 4, amount: 1400, label: "Kargil → Lamayuru → Leh (Fuel & Stay)" },
    { day: 5, amount: 600, label: "Leh Rest & Acclimatization (Cafe & Permits)" },
    { day: 6, amount: 1800, label: "Leh → Khardung La → Hunder (Fuel & Homestay)" },
    { day: 7, amount: 2000, label: "Nubra → Shyok → Pangong Tso (Fuel & Lake Camp)" },
    { day: 8, amount: 1400, label: "Pangong → Chang La → Leh (Fuel & Stay)" },
    { day: 9, amount: 2500, label: "Leh → Tanglang La → Sarchu → Jispa (Fuel & Camp)" },
    { day: 10, amount: 1400, label: "Jispa → Atal Tunnel → Manali (Fuel & Hotel)" },
    { day: 11, amount: 800, label: "Manali Local Exploration & Maintenance Check" },
    { day: 12, amount: 1200, label: "Manali → Chandigarh → Hisar (Return Fuel)" },
  ],
  calculatorDefaults: data.calcDefaults,
};

export const stayOptions = [
  {
    id: 1,
    destination: "Leh Budget Guest Houses",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=800&q=80",
    budget: data.stays.leh.budget,
    mid: data.stays.leh.mid,
    premium: data.stays.leh.premium,
    gmvnn: false,
    camping: false,
    hostel: true,
    facilities: ["Hot water geyser", "Free WiFi", "Secure Scooty Parking"],
    pros: ["Walking distance to Leh Main Bazaar", "Rider friendly hosts"],
    cons: ["Water supply relies on solar in early morning"],
    tips: "Choose guest houses in Changspa road for quieter stays with greenery",
    rating: 4.7,
    mapLink: "https://maps.google.com/?q=Leh+Ladakh",
    hotels: [
      { name: "Jangsphe Guest House", price: 600, offline: true },
      { name: "Oriental Guest House", price: 800, offline: true }
    ]
  },
  {
    id: 2,
    destination: "Nubra Valley (Hunder) Homestays",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    budget: data.stays.nubra.budget,
    mid: data.stays.nubra.mid,
    premium: data.stays.nubra.premium,
    gmvnn: false,
    camping: true,
    hostel: false,
    facilities: ["Home cooked Ladakhi meals", "Organic garden", "Bucket hot water"],
    pros: ["Close to Hunder Sand Dunes", "Warm hospitable local families"],
    cons: ["BSNL only connectivity"],
    tips: "Visit the sand dunes during sunset for Bactrian camel rides",
    rating: 4.8,
    mapLink: "https://maps.google.com/?q=Hunder+Nubra",
    hotels: [
      { name: "Habib Homestay Hunder", price: 700, offline: true }
    ]
  }
];
