import { kashmirAmounts } from "./amounts";

export const budget = {
  total: kashmirAmounts.budgetTotal,
  perPerson: true,
  currency: "INR",
  categories: [
    {
      id: "transport",
      label: "Transportation & Cabs",
      amount: kashmirAmounts.transportCategory,
      color: "#2563EB",
      icon: "Bus",
      description: "Delhi-Jammu Sleeper Train + Shared cabs to Srinagar/Pahalgam/Gulmarg + local DEMU train",
      subItems: [
        { name: "Delhi-Jammu Train Round-Trip (Sleeper)", price: kashmirAmounts.transportFares.trainRoundTrip },
        { name: "Jammu-Banihal Shared Cab Round-Trip", price: kashmirAmounts.transportFares.jammuBanihalCab },
        { name: "Banihal-Srinagar Local DEMU Train Ticket", price: kashmirAmounts.transportFares.valleyDemuTrain },
        { name: "Srinagar local & Gulmarg/Pahalgam Shared Cabs", price: kashmirAmounts.transportFares.localDayTripsCabs }
      ]
    },
    {
      id: "accommodation",
      label: "Accommodation",
      amount: kashmirAmounts.accommodationCategory,
      color: "#10B981",
      icon: "Bed",
      description: "Houseboat stay (Dal Lake) + Srinagar clean hotel stay (4 Nights)",
      subItems: [
        { name: "Houseboat Stay Dal Lake (1 Night)", price: 800 },
        { name: "Srinagar Budget Hotel Stay (3 Nights)", price: 1600 }
      ]
    },
    {
      id: "food",
      label: "Food & Meals",
      amount: kashmirAmounts.foodCategory,
      color: "#F59E0B",
      icon: "Utensils",
      description: "Daily breakfast, street food snacks, and authentic Kashmiri dinner",
      subItems: [
        { name: "5 Days Meals (₹300/day per person)", price: kashmirAmounts.foodCategory }
      ]
    },
    {
      id: "emergency",
      label: "Sightseeing & Activities",
      amount: kashmirAmounts.emergencyCategory,
      color: "#EF4444",
      icon: "ShieldAlert",
      description: "Dal Lake Shikara rides and entry fees to Mughal gardens",
      subItems: [
        { name: "Shikara Ride (2 Hours double sharing)", price: 400 },
        { name: "Mughal Garden & local entry tickets", price: 200 }
      ]
    }
  ],
  dailyEstimate: [
    { day: 0, amount: 450, label: "Day 0 Night — Board overnight sleeper train from Delhi" },
    { day: 1, amount: 1600, label: "Day 1 — Transit cab & train to Srinagar, check in houseboat" },
    { day: 2, amount: 1900, label: "Day 2 — Day trip to Gulmarg, walk around meadows, return" },
    { day: 3, amount: 1900, label: "Day 3 — Day trip to Pahalgam Lidder river valleys, return" },
    { day: 4, amount: 1200, label: "Day 4 — Mughal Gardens & local Srinagar sites explore" },
    { day: 5, amount: 2000, label: "Day 5 — Travel back to Jammu, board return night train" },
    { day: 6, amount: 450, label: "Day 6 Morning — Arrive back in Delhi" }
  ],
  calculatorDefaults: kashmirAmounts.calcDefaults,
};

export const stayOptions = [
  {
    id: 1,
    destination: "Srinagar (Dal Lake)",
    name: "Golden Flower Houseboat",
    image: "/mountain_clay_peak.png",
    budget: 800,
    mid: 1200,
    premium: 2500,
    gmvnn: false,
    camping: false,
    hostel: false,
    facilities: ["Carpeted rooms", "Hot running water", "Lake views", "Kahwa Tea"],
    pros: ["Authentic floating wooden room experience on Dal Lake", "Quiet section away from loud traffic"],
    cons: ["Requires Shikara boat transfer every time you leave"],
    tips: "Purchase floating market goods only after bargaining closely.",
    rating: 4.8,
    mapLink: "https://maps.google.com/?q=Dal+Lake",
    type: "Houseboat",
    pricePerNight: 1600,
    location: "Srinagar",
    nights: 1,
    hotels: [
      { name: "Standard Houseboat Room", price: 1600 }
    ]
  },
  {
    id: 2,
    destination: "Srinagar (Khayam)",
    name: "Hotel Srinagar Residency",
    image: "/mountain_clay_peak.png",
    budget: 700,
    mid: 1000,
    premium: 2000,
    gmvnn: false,
    camping: false,
    hostel: false,
    facilities: ["Wi-Fi access", "Heaters", "Room Service"],
    pros: ["Close to Srinagar major food streets and parks", "Easy to hail local auto rickshaws"],
    cons: ["No lake view"],
    tips: "Dine at local Khayam chowk for authentic skewers and Tujji.",
    rating: 4.5,
    mapLink: "https://maps.google.com/?q=Srinagar",
    type: "Hotel",
    pricePerNight: 1000,
    location: "Srinagar",
    nights: 3,
    hotels: [
      { name: "Budget Double Bed Room", price: 1000 }
    ]
  }
];
