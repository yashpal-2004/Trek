import { moonPeakAmounts } from "./amounts";

export const budget = {
  total: moonPeakAmounts.budgetTotal,
  perPerson: true,
  currency: "INR",
  categories: [
    {
      id: "transport",
      label: "General Train & HRTC Local Buses",
      amount: moonPeakAmounts.transportCategory,
      color: "#2563EB",
      icon: "Train",
      description: "Old Delhi -> Pathankot Unreserved General Express Train + HRTC Local Bus to Dharamshala + Shared Auto to Dharamkot",
      subItems: [
        { name: "Delhi-Pathankot Unreserved General Train Ticket (Round Trip)", price: moonPeakAmounts.transportFares.generalTrainDelhiPathankot * 2 },
        { name: "Pathankot-Dharamshala HRTC Ordinary Bus (Round Trip)", price: moonPeakAmounts.transportFares.hrtcBusPathankotDharamshala * 2 },
        { name: "Dharamshala-Dharamkot Shared Auto / Local Bus (Round Trip)", price: moonPeakAmounts.transportFares.localTaxiDharamshalaMcLeod * 2 }
      ]
    },
    {
      id: "accommodation",
      label: "Alpine Tents & Homestay Dorms",
      amount: moonPeakAmounts.accommodationCategory,
      color: "#10B981",
      icon: "Bed",
      description: "3 Nights camping / tent stay at Triund, Laka Got & Dharamkot hostel dorm",
      subItems: [
        { name: "Dharamkot Hosteller/Homestay Dorm (1 Night)", price: 250 },
        { name: "Triund / Laka Alpine Tent Rental (2 Nights @ ₹250/night shared)", price: 500 }
      ]
    },
    {
      id: "food",
      label: "Trail Dhabas, Maggi & Roti-Dal",
      amount: moonPeakAmounts.foodCategory,
      color: "#F59E0B",
      icon: "Utensils",
      description: "Simple dhaba thalis, maggi, tea & trek energy snacks across 4 days",
      subItems: [
        { name: "4 Days Trail Meals (₹275/day avg)", price: moonPeakAmounts.foodCategory }
      ]
    },
    {
      id: "emergency",
      label: "Sanctuary Permit & Buffer",
      amount: moonPeakAmounts.emergencyCategory,
      color: "#EF4444",
      icon: "ShieldAlert",
      description: "Forest trek permit fee + emergency cash buffer",
      subItems: [
        { name: "Local Forest Permit / Trail Entry Fee", price: 150 },
        { name: "Emergency Buffer", price: 150 }
      ]
    }
  ],
  dailyEstimate: [
    { day: 0, amount: 180, label: "Day 0 Night — Unreserved general train from Old Delhi to Pathankot" },
    { day: 1, amount: 670, label: "Day 1 — HRTC bus to Dharamshala, auto to Dharamkot, trek to Triund" },
    { day: 2, amount: 550, label: "Day 2 — Trek Triund to Laka Got meadow, base camp setup" },
    { day: 3, amount: 950, label: "Day 3 — Early summit push to Moon Peak (4,650m) via Lahesh Cave, return to Laka" },
    { day: 4, amount: 600, label: "Day 4 — Descend to Dharamkot, HRTC bus to Pathankot, unreserved train back to Delhi" }
  ],
  calculatorDefaults: moonPeakAmounts.calcDefaults,
};

export const stayOptions = [
  {
    id: 1,
    destination: "Dharamkot / McLeod Ganj",
    name: "Backpacker Hostel & Forest Homestay",
    image: "/mountain_clay_peak.png",
    budget: 250,
    mid: 600,
    premium: 1500,
    gmvnn: false,
    camping: true,
    hostel: true,
    facilities: ["Wi-Fi in village cafés", "Hot water bucket", "Shared dorm beds"],
    pros: ["Cheapest base before summit trek (₹250/night dorm bed)", "Direct access to Galu Temple trailhead"],
    cons: ["Requires walking uphill with heavy backpack from taxi stand"],
    tips: "Stay near Gallu Devi temple in Dharamkot to start trek early in the morning.",
    rating: 4.7,
    mapLink: "https://maps.google.com/?q=Dharamkot+McLeod+Ganj",
    type: "Hostel / Homestay",
    pricePerNight: 250,
    location: "Dharamkot",
    nights: 1,
    hotels: [
      { name: "Backpacker Dorm Bed (per night)", price: 250 },
      { name: "Basic Private Solo Room (per night)", price: 600 }
    ]
  },
  {
    id: 2,
    destination: "Triund & Laka Got Camps",
    name: "High Alpine Tents & Cave Base",
    image: "/mountain_clay_peak.png",
    budget: 250,
    mid: 500,
    premium: 1000,
    gmvnn: false,
    camping: true,
    hostel: false,
    facilities: ["Sleeping bags & foam mats", "Warm dhaba meals", "Spring water"],
    pros: ["Unmatched Himalayan views of Dhauladhar wall", "Ideal staging ground for Moon Peak summit push"],
    cons: ["Sub-zero night temperatures near glacier", "No electricity or phone network past Triund"],
    tips: "Rent sleeping bag rated for -5°C at Laka Got before summit push.",
    rating: 4.8,
    mapLink: "https://maps.google.com/?q=Laka+Glacier+Triund",
    type: "Alpine Tents",
    pricePerNight: 250,
    location: "Laka Got",
    nights: 2,
    hotels: [
      { name: "Shared Alpine Tent Bed (per night)", price: 250 },
      { name: "Private 2-Person Dome Tent (per night)", price: 500 }
    ]
  }
];
