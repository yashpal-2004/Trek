import { ladakhAmounts } from "../amounts";
const data = ladakhAmounts.plan2;

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
      description: "Self scooty fuel (2850 km) + high pass fuel reserve & Inner Line Permits",
      subItems: [
        { name: "Scooty Petrol / Fuel (Hisar-Manali-Leh-Hisar)", price: 7900 },
        { name: "Engine Oil & Pre-trip Servicing", price: 1000 }
      ]
    },
    { 
      id: "accommodation", 
      label: "Accommodation", 
      amount: data.accommodationCategory, 
      color: "#10B981", 
      icon: "Bed", 
      description: "Jispa camps, Leh guest houses & Srinagar hotels",
      subItems: [
        { name: "Manali Hotel & Jispa Camp (2 Nights)", price: 1200 },
        { name: "Leh Budget Guest House (3 Nights)", price: 1800 },
        { name: "Nubra & Pangong Tso Camps (2 Nights)", price: 1500 },
        { name: "Kargil & Srinagar Hotels (3 Nights)", price: 1700 }
      ]
    },
    { 
      id: "food", 
      label: "Food & Meals", 
      amount: data.foodCategory, 
      color: "#F59E0B", 
      icon: "Utensils", 
      description: "High pass dhabas, momos & daily meals (12 days)",
      subItems: [
        { name: "Daily meals, tea breaks & snacks (₹330/day)", price: 4000 }
      ]
    },
  ],
  dailyEstimate: [
    { day: 1, amount: 1400, label: "Hisar → Chandigarh → Manali (Fuel & Hotel)" },
    { day: 2, amount: 1800, label: "Manali → Atal Tunnel → Jispa (Fuel & Camp)" },
    { day: 3, amount: 2400, label: "Jispa → Baralacha La → Tanglang La → Leh (Fuel & Stay)" },
    { day: 4, amount: 600, label: "Leh Rest & Acclimatization (Inner Line Permits)" },
    { day: 5, amount: 1800, label: "Leh → Khardung La → Hunder (Fuel & Homestay)" },
    { day: 6, amount: 2000, label: "Nubra → Shyok → Pangong Tso (Fuel & Lake Camp)" },
    { day: 7, amount: 1400, label: "Pangong → Chang La → Leh (Fuel & Stay)" },
    { day: 8, amount: 1400, label: "Leh → Lamayuru → Kargil (Fuel & Stay)" },
    { day: 9, amount: 1300, label: "Kargil → Zoji La → Srinagar (Fuel & Stay)" },
    { day: 10, amount: 900, label: "Srinagar Shikara Ride & Dal Lake Rest" },
    { day: 11, amount: 1300, label: "Srinagar → Jammu / Patnitop (Fuel & Hotel)" },
    { day: 12, amount: 1200, label: "Patnitop → Hisar (Return Fuel)" },
  ],
  calculatorDefaults: data.calcDefaults,
};

export const stayOptions = [
  {
    id: 1,
    destination: "Jispa Riverside Tents",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
    budget: data.stays.jispa.budget,
    mid: data.stays.jispa.mid,
    premium: data.stays.jispa.premium,
    gmvnn: false,
    camping: true,
    hostel: false,
    facilities: ["Attached washrooms", "Campfire", "Hot dinner included"],
    pros: ["Stunning views along Bhaga river", "Good acclimatization stop before high passes"],
    cons: ["Cold nights near riverbed"],
    tips: "Book camps near Bhaga bridge for proper parking & hot meals",
    rating: 4.6,
    mapLink: "https://maps.google.com/?q=Jispa+Lahaul",
    hotels: [
      { name: "Jispa Journeys Camps", price: 700, offline: true }
    ]
  },
  {
    id: 2,
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
      { name: "Jangsphe Guest House", price: 600, offline: true }
    ]
  }
];
