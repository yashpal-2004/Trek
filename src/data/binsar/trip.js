export const trip = {
  title: "Binsar Sanctuary Solo Budget Expedition",
  subtitle: "A 3-day ultra-budget solo escape from Delhi/Sonipat to Binsar Wildlife Sanctuary via General Train & local shared jeeps",
  duration: "3 Days",
  durationDays: 3,
  people: 1,
  budgetMin: 1500,
  budgetMax: 2200,
  difficulty: "Easy / Solo Friendly",
  highestAltitude: "2,420m (Zero Point Binsar)",
  totalDistance: "560 km (Round Trip)",
  totalTrekDistance: "8 km",
  startingPoint: "Delhi / Sonipat",
  endingPoint: "Delhi / Sonipat",
  transport: ["Unreserved General Express Train", "Local Shared Jeep / Maxx", "Forest Nature Trails"],
  theme: "Emerald",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 3, suffix: "", description: "Weekend solo retreat duration", icon: "Calendar" },
  { id: "distance", label: "Total Distance", value: 560, suffix: " KM", description: "Delhi-Kathgodam-Binsar Round Trip", icon: "Route" },
  { id: "budget", label: "Budget", value: 1.85, suffix: "K", prefix: "₹", description: "Total Solo Expedition Cost", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 2420, suffix: " M", description: "Zero Point Sunset Viewpoint", icon: "TrendingUp" },
  { id: "passes", label: "Forest Trails", value: 3, suffix: "", description: "Zero Point, Bineshwar Mahadev, Estate Walk", icon: "MapPin" },
  { id: "destinations", label: "Major Stops", value: 4, suffix: "", description: "Delhi, Kathgodam, Almora, Binsar", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Delhi / Sonipat (Boarding)", altitude: "220m", distance: "0 km", day: 0, date: "Day 0 Night", arrTime: "09:45 PM", depTime: "10:05 PM", transport: "Unreserved General Train to Kathgodam", icon: "Train" },
  { id: 2, location: "Kathgodam Railway Station", altitude: "534m", distance: "280 km", day: 1, date: "Day 1 Morning", arrTime: "05:00 AM", depTime: "05:45 AM", transport: "Local Shared Jeep / Maxx", icon: "Bus" },
  { id: 3, location: "Almora / Binsar Ayarpani", altitude: "1,650m", distance: "375 km", day: 1, date: "Day 1 Morning", arrTime: "10:00 AM", depTime: "—", transport: "Check in Village Homestay", icon: "Home" },
  { id: 4, location: "Zero Point Peak", altitude: "2,420m", distance: "385 km", day: 2, date: "Day 2 Morning", arrTime: "08:00 AM", depTime: "03:00 PM", transport: "Forest Nature Hike", icon: "Compass" },
  { id: 5, location: "Bineshwar Mahadev Temple", altitude: "2,050m", distance: "390 km", day: 2, date: "Day 2 Evening", arrTime: "04:00 PM", depTime: "06:00 PM", transport: "Walking Trail", icon: "MapPin" },
  { id: 6, location: "Kathgodam Departure", altitude: "534m", distance: "470 km", day: 3, date: "Day 3 Afternoon", arrTime: "02:00 PM", depTime: "03:00 PM", transport: "Return Unreserved Train", icon: "Train" },
  { id: 7, location: "Delhi / Sonipat (Return)", altitude: "220m", distance: "560 km", day: 3, date: "Day 3 Night", arrTime: "10:00 PM", depTime: "—", transport: "Arrive Home", icon: "Home" },
];

export const overviewCards = [
  { title: "Zero Point 360° Panorama", value: "300 km Peak View", description: "Unobstructed view of Kedarnath, Trishul, Nanda Devi, Panchachuli & Shivling peaks from Zero Point tower.", icon: "TrendingUp" },
  { title: "Dense Oak & Rhododendron Sanctuary", description: "Walk through pristine Himalayan eco-reserves teeming with over 200 bird species and serene silence.", icon: "MapPin" },
  { title: "Bineshwar Temple Heritage", description: "16th-century King Kalyan Chand's peaceful Shiva temple nestled in sacred pine groves.", icon: "Compass" },
];

export const navLinks = [
  { id: "overview", label: "Overview" },
  { id: "routemap", label: "Map" },
  { id: "itinerary", label: "Itinerary" },
  { id: "transport", label: "Transport" },
  { id: "stay", label: "Stay" },
  { id: "budget", label: "Budget" },
  { id: "expenses", label: "Expenses" },
  { id: "packing", label: "Packing" },
  { id: "resources", label: "Guides" },
];

export const expenseCategories = ["Transport", "Accommodation", "Food", "Permits/Forest Entry", "Shopping", "Other"];

export const STORAGE_KEYS = {
  expenseTracker: "expenses-binsar",
  budgetCalculator: "budget-values-binsar",
  completedTreks: "completed-treks-binsar",
  packingChecklist: "packing-checklist-binsar",
  completedDays: "completed-days-binsar",
};
