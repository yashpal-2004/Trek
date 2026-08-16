import { ladakhAmounts } from "../amounts";
const data = ladakhAmounts.plan4;

export const budget = {
  total: data.budgetTotal,
  perPerson: true,
  currency: "INR",
  categories: [
    { 
      id: "transport", 
      label: "Transportation & Cabs", 
      amount: data.transportCategory, 
      color: "#2563EB", 
      icon: "Bus", 
      description: "HRTC Delhi-Leh round-trip bus tickets + local Ladakh bike rental (4 days) + bike fuel",
      subItems: [
        { name: "Delhi to Leh HRTC Bus ticket", price: data.transportFares.hrtcDelhiLehBus },
        { name: "Leh to Delhi HRTC Bus ticket", price: data.transportFares.hrtcLehDelhiBus },
        { name: "Leh Local Bike Rental (4 Days @ ₹1,200/day)", price: data.transportFares.bikeRentalLeh },
        { name: "Motorcycle Petrol / Fuel", price: data.transportFares.bikeFuel }
      ]
    },
    { 
      id: "accommodation", 
      label: "Accommodation", 
      amount: data.accommodationCategory, 
      color: "#10B981", 
      icon: "Bed", 
      description: "Keylong transit rooms, Leh bazaar guest houses, and shared homestays in Hunder/Pangong",
      subItems: [
        { name: "Leh Budget Guest House (2 Nights sharing)", price: 1200 },
        { name: "Nubra Valley Homestay (1 Night sharing)", price: 800 },
        { name: "Pangong Lake Tents/Camps (1 Night sharing)", price: 1000 },
        { name: "Keylong Transit Hotel (1 Night sharing)", price: 600 }
      ]
    },
    { 
      id: "food", 
      label: "Food & Meals", 
      amount: data.foodCategory, 
      color: "#F59E0B", 
      icon: "Utensils", 
      description: "Daily breakfast, local highway dhabas, and authentic Tibetan tea/soup",
      subItems: [
        { name: "7 Days Meals (₹340/day per person)", price: data.foodCategory }
      ]
    },
    { 
      id: "emergency", 
      label: "Permits & Activities", 
      amount: data.emergencyCategory, 
      color: "#EF4444", 
      icon: "ShieldAlert", 
      description: "Inner Line Permits, Leh municipal fees, and emergency medication backup kits",
      subItems: [
        { name: "Ladakh Inner Line Permit (ILP) & municipal fees", price: 1000 },
        { name: "First-aid oxygen kit & minor activities", price: 500 }
      ]
    }
  ],
  dailyEstimate: [
    { day: 1, amount: 1600, label: "Day 1 — Board Delhi-Leh HRTC bus, travel to Keylong" },
    { day: 2, amount: 1200, label: "Day 2 — Stay in Keylong transit hotel, rest and walk" },
    { day: 3, amount: 2200, label: "Day 3 — Reach Leh, check into guest house (acclimatize)" },
    { day: 4, amount: 1500, label: "Day 4 — Leh local sightseeing: Shanti Stupa, Leh Palace, bazaar" },
    { day: 5, amount: 2600, label: "Day 5 — Rent bike, ride over Khardung La to Nubra Hunder" },
    { day: 6, amount: 2800, label: "Day 6 — Ride from Hunder to Pangong Tso camp" },
    { day: 7, amount: 2600, label: "Day 7 — Ride back over Chang La to Leh, return bike" },
    { day: 8, amount: 2000, label: "Day 8 — Board HRTC return bus, stay Keylong" },
    { day: 9, amount: 1600, label: "Day 9 — Continue bus to Delhi, arrive evening" }
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
    facilities: ["Hot water geyser", "Free WiFi", "Secure Motorcycle Parking"],
    pros: ["Walking distance to Leh Main Bazaar", "Bike-rider friendly hosts"],
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
