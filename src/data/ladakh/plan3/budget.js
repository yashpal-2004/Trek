import { ladakhAmounts } from "../amounts";
const data = ladakhAmounts.plan3;

export const budget = {
  total: data.budgetTotal,
  perPerson: true,
  currency: "INR",
  categories: [
    { 
      id: "transport", 
      label: "Transportation & Flight", 
      amount: data.transportCategory, 
      color: "#2563EB", 
      icon: "Bus", 
      description: "One-way flight to Leh + Ladakh bike rental (4 days) + bike fuel + return ticket on HRTC Delhi bus",
      subItems: [
        { name: "Delhi to Leh One-Way Flight", price: data.transportFares.oneWayFlightToLeh },
        { name: "Leh Local Bike Rental (4 Days @ ₹1,200/day)", price: data.transportFares.bikeRentalLeh },
        { name: "Motorcycle Petrol / Fuel", price: data.transportFares.bikeFuel },
        { name: "HRTC Leh to Delhi Ordinary Bus", price: data.transportFares.hrtcLehDelhiBus }
      ]
    },
    { 
      id: "accommodation", 
      label: "Accommodation", 
      amount: data.accommodationCategory, 
      color: "#10B981", 
      icon: "Bed", 
      description: "Srinagar houseboat, Leh guesthouses, and homestays in Hunder/Pangong",
      subItems: [
        { name: "Leh Budget Guest House (4 Nights sharing)", price: 2400 },
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
      description: "Daily breakfast, local Tibetan-Ladakhi dinners, and dry fruits snacks",
      subItems: [
        { name: "7 Days Meals (₹400/day per person)", price: data.foodCategory }
      ]
    },
    { 
      id: "emergency", 
      label: "Permits & Activities", 
      amount: data.emergencyCategory, 
      color: "#EF4444", 
      icon: "ShieldAlert", 
      description: "Inner Line Permits, Leh environment fee, activities, and medical backup kits",
      subItems: [
        { name: "Ladakh Inner Line Permit (ILP) & Red Cross fee", price: 1000 },
        { name: "Oxygen cylinder rental & medical kit", price: 500 },
        { name: "Emergency backup cash buffer", price: 1000 }
      ]
    }
  ],
  dailyEstimate: [
    { day: 1, amount: 5000, label: "Day 1 — One-way flight ticket from Delhi to Leh" },
    { day: 2, amount: 800, label: "Day 2 — Complete acclimatization rest in Leh hotel" },
    { day: 3, amount: 2000, label: "Day 3 — Pick up rented bike, ride to Leh local sights" },
    { day: 4, amount: 2300, label: "Day 4 — Ride over Khardung La to Hunder in Nubra" },
    { day: 5, amount: 2500, label: "Day 5 — Ride from Nubra to Pangong Tso camp" },
    { day: 6, amount: 2300, label: "Day 6 — Ride back over Chang La to Leh town" },
    { day: 7, amount: 2200, label: "Day 7 — Board early morning HRTC bus to Keylong" },
    { day: 8, amount: 3400, label: "Day 8 — Continue on HRTC bus to Delhi" }
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
