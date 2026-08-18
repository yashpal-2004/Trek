import { kashmirPlan2Amounts } from "./amounts";

export const budget = {
  total: kashmirPlan2Amounts.budgetTotal,
  perPerson: true,
  currency: "INR",
  categories: [
    {
      id: "transport",
      label: "Transportation & Cabs",
      amount: kashmirPlan2Amounts.transportCategory,
      color: "#2563EB",
      icon: "Bus",
      description: "Delhi-Jammu Sleeper Train + Cabs to Banihal + DEMU train to Srinagar + RE Himalayan rental (split between 2 people) & Fuel",
      subItems: [
        { name: "Delhi-Jammu Train Round-Trip (Sleeper)", price: kashmirPlan2Amounts.transportFares.trainRoundTrip },
        { name: "Jammu-Banihal Shared Cab Round-Trip", price: kashmirPlan2Amounts.transportFares.jammuBanihalCab },
        { name: "Banihal-Srinagar Local DEMU Train Ticket", price: kashmirPlan2Amounts.transportFares.valleyDemuTrain },
        { name: "RE Himalayan Bike Rental (3 Days sharing)", price: kashmirPlan2Amounts.transportFares.bikeRentalPerPerson },
        { name: "Motorcycle Petrol/Fuel (350 km circuit)", price: kashmirPlan2Amounts.transportFares.bikeFuelPerPerson }
      ]
    },
    {
      id: "accommodation",
      label: "Accommodation",
      amount: kashmirPlan2Amounts.accommodationCategory,
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
      amount: kashmirPlan2Amounts.foodCategory,
      color: "#F59E0B",
      icon: "Utensils",
      description: "Daily breakfast, local cafes, and traditional Kashmiri cuisine",
      subItems: [
        { name: "5 Days Meals (₹300/day per person)", price: kashmirPlan2Amounts.foodCategory }
      ]
    },
    {
      id: "emergency",
      label: "Sightseeing & Activities",
      amount: kashmirPlan2Amounts.emergencyCategory,
      color: "#EF4444",
      icon: "ShieldAlert",
      description: "Dal Lake Shikara rides, local garden entry tickets, and mandatory J&K postpaid SIM connection",
      subItems: [
        { name: "Shikara Ride (2 Hours double sharing)", price: 400 },
        { name: "Mughal Garden & local entry tickets", price: 200 },
        { name: "Jio Postpaid SIM (J&K Roaming Plan)", price: kashmirPlan2Amounts.transportFares.jioPostpaidSIM }
      ]
    }
  ],
  dailyEstimate: [
    { day: 0, amount: 450, label: "Day 0 Night — Board overnight sleeper train from Delhi" },
    { day: 1, amount: 1600, label: "Day 1 — Transit to Srinagar, check in houseboat, pick up rental bike" },
    { day: 2, amount: 2050, label: "Day 2 — Self-ride day trip to Gulmarg & Gondola explore" },
    { day: 3, amount: 2150, label: "Day 3 — Self-ride day trip to Pahalgam valley, return" },
    { day: 4, amount: 1200, label: "Day 4 — Explore Srinagar local gardens & old town on motorcycle" },
    { day: 5, amount: 1350, label: "Day 5 — Drop off rental bike, DEMU train and cab back to Jammu, board train" },
    { day: 6, amount: 450, label: "Day 6 Morning — Arrive back in Delhi" }
  ],
  calculatorDefaults: kashmirPlan2Amounts.calcDefaults,
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
