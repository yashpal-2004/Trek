import { binsarAmounts } from "./amounts";

export const budget = {
  total: binsarAmounts.budgetTotal,
  perPerson: true,
  currency: "INR",
  categories: [
    {
      id: "transport",
      label: "General Train & Shared Taxis",
      amount: binsarAmounts.transportCategory,
      color: "#2563EB",
      icon: "Train",
      description: "Indian Railways General Unreserved Ticket (Old Delhi -> Kathgodam ₹110 round trip) + Shared local jeeps via Almora (₹160 round trip)",
      subItems: [
        { name: "Delhi-Kathgodam Unreserved General Train Ticket (Round Trip)", price: binsarAmounts.transportFares.generalTrainDelhiKathgodam * 2 },
        { name: "Kathgodam-Almora Shared Jeep / Local Bus (Round Trip)", price: binsarAmounts.transportFares.sharedJeepKathgodamAlmora * 2 },
        { name: "Almora-Binsar Ayarpani Shared Jeep / Taxi (Round Trip)", price: binsarAmounts.transportFares.sharedJeepAlmoraBinsar * 2 }
      ]
    },
    {
      id: "accommodation",
      label: "Village Homestay / Dorm Bed",
      amount: binsarAmounts.accommodationCategory,
      color: "#10B981",
      icon: "Bed",
      description: "2 Nights stay at ultra-budget local village homestay / dorm near Ayarpani gate",
      subItems: [
        { name: "Budget Village Homestay / Shared Dorm (2 Nights @ ₹250/night)", price: binsarAmounts.accommodationCategory }
      ]
    },
    {
      id: "food",
      label: "Local Dhaba Meals & Tea",
      amount: binsarAmounts.foodCategory,
      color: "#F59E0B",
      icon: "Utensils",
      description: "Simple dhaba thalis, roti, dal, tea & maggi",
      subItems: [
        { name: "3 Days Local Dhaba Meals (₹180/day avg)", price: binsarAmounts.foodCategory }
      ]
    },
    {
      id: "emergency",
      label: "Permits & Sanctuary Entry",
      amount: binsarAmounts.emergencyCategory,
      color: "#8B5CF6",
      icon: "Ticket",
      description: "Binsar Wildlife Sanctuary official forest entry permit ticket",
      subItems: [
        { name: "Sanctuary Entry Permit Fee", price: 200 }
      ]
    }
  ],
  dailyEstimate: [
    { day: 0, amount: 110, label: "Day 0 Night — General unreserved train ticket to Kathgodam" },
    { day: 1, amount: 650, label: "Day 1 — Shared jeeps to Binsar, village homestay check-in & temple hike" },
    { day: 2, amount: 550, label: "Day 2 — Binsar Sanctuary Zero Point trek & local dhaba meals" },
    { day: 3, amount: 540, label: "Day 3 — Return shared jeep to Kathgodam, unreserved train back home" }
  ],
  calculatorDefaults: binsarAmounts.calcDefaults,
};

export const stayOptions = [
  {
    id: 1,
    destination: "Binsar Sanctuary Gate / Ayarpani",
    name: "Kumaon Village Homestay & Shared Dorm",
    image: "/mountain_clay_peak.png",
    budget: 250,
    mid: 500,
    premium: 1000,
    gmvnn: false,
    camping: true,
    hostel: true,
    facilities: ["Home-cooked Kumaoni meals", "Solar hot water bucket", "Pine forest valley view"],
    pros: ["Ultra-budget option (₹250/night dorm bed)", "Walking distance to Binsar sanctuary entry gate"],
    cons: ["Basic offline homestay - spot booking/phone call required", "Power cuts common in forest areas"],
    tips: "Arrive before 4 PM or call local host in Ayarpani ahead to confirm bed availability.",
    rating: 4.6,
    mapLink: "https://maps.google.com/?q=Ayarpani+Binsar",
    type: "Homestay / Dorm",
    pricePerNight: 250,
    location: "Ayarpani Gate",
    nights: 2,
    hotels: [
      { name: "Village Dorm Bed / Shared Room (per night)", price: 250 },
      { name: "Private Solo Room (per night)", price: 500 }
    ]
  },
  {
    id: 2,
    destination: "Dharanaula / Bus Stand, Almora",
    name: "Hotel Savoy / Dharanaula Budget Lodge",
    image: "/mountain_clay_peak.png",
    budget: 450,
    mid: 750,
    premium: 1200,
    gmvnn: false,
    camping: false,
    hostel: false,
    facilities: ["Clean bed & attached bath", "Hot water on request", "Near shared jeep stand"],
    pros: ["Exact match for ₹400–₹500 budget", "Direct shared jeeps to Binsar/Ayarpani right outside"],
    cons: ["Town market location, not inside quiet pine forest"],
    tips: "Walk in directly at Dharanaula jeep stand to get non-online negotiable offline rates.",
    rating: 4.2,
    mapLink: "https://maps.google.com/?q=Dharanaula+Almora",
    type: "Budget Lodge",
    pricePerNight: 450,
    location: "Dharanaula, Almora",
    nights: 2,
    hotels: [
      { name: "Basic Solo Single Room", price: 450 },
      { name: "Standard Double Room", price: 750 }
    ]
  },
  {
    id: 3,
    destination: "Ayarpani / Binsar Road",
    name: "Mehta Homestay & Guest House",
    image: "/mountain_clay_peak.png",
    budget: 1100,
    mid: 1500,
    premium: 2200,
    gmvnn: false,
    camping: false,
    hostel: false,
    facilities: ["Hot Kumaoni meals", "Private bathroom", "Valley view balcony"],
    pros: ["Scenic location right on Binsar access road", "Local host guidance for Zero Point hike"],
    cons: ["Higher than ₹500 base target limit"],
    tips: "Ideal if traveling in a pair to split private room cost.",
    rating: 4.5,
    mapLink: "https://maps.google.com/?q=Mehta+Homestay+Binsar",
    type: "Homestay",
    pricePerNight: 1100,
    location: "Ayarpani",
    nights: 2,
    hotels: [
      { name: "Standard Solo Room", price: 1100 },
      { name: "Double Mountain View Room", price: 1500 }
    ]
  }
];
