export const trip = {
  title: "Sikkim Trip",
  subtitle: "A 7-day budget adventure from Delhi to the high-altitude Gurudongmar Lake and Yumthang Valley",
  duration: "Custom Dates",
  durationDays: 7,
  people: 4,
  budgetMin: 6500,
  budgetMax: 7500,
  difficulty: "Moderate",
  highestAltitude: "5430m (17,800 ft)",
  totalDistance: "1920 km",
  totalTrekDistance: "15 km",
  startingPoint: "Delhi",
  endingPoint: "Delhi",
  transport: ["Train", "Shared Sumo", "Walking"],
  theme: "Light",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 7, suffix: "", description: "Full trip duration", icon: "Calendar" },
  { id: "walking", label: "Walking/Trek", value: 15, suffix: " KM", description: "Short walks in valleys", icon: "Footprints" },
  { id: "budget", label: "Budget", value: 6.9, suffix: "K", prefix: "₹", description: "Per person estimate", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 5430, suffix: " M (17,800 FT)", description: "Gurudongmar Lake", icon: "TrendingUp" },
  { id: "distance", label: "Total Distance", value: 1920, suffix: " KM", description: "Rail & road travel", icon: "Route" },
  { id: "destinations", label: "Destinations", value: 6, suffix: "", description: "Major stops visited", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Delhi", altitude: "215m", distance: "0 km", day: 1, date: "Day 1", arrTime: "04:00 PM", depTime: "05:00 PM", transport: "Sleeper Train", icon: "Train" },
  { id: 2, location: "NJP", altitude: "115m", distance: "1150 km", day: 2, date: "Day 2", arrTime: "09:30 AM", depTime: "11:00 AM", transport: "Shared Sumo", icon: "Compass" },
  { id: 3, location: "Gangtok", altitude: "1650m", distance: "120 km", day: 2, date: "Day 2", arrTime: "03:00 PM", depTime: "08:00 AM (Day 3)", transport: "Shared Tour", icon: "MapPin" },
  { id: 4, location: "Lachen", altitude: "2750m", distance: "110 km", day: 3, date: "Day 3", arrTime: "04:30 PM", depTime: "04:30 AM (Day 4)", transport: "Package Sumo", icon: "Home" },
  { id: 5, location: "Gurudongmar Lake", altitude: "5430m", distance: "70 km", day: 4, date: "Day 4", arrTime: "08:30 AM", depTime: "09:30 AM", transport: "Package Sumo", icon: "TrendingUp" },
  { id: 6, location: "Lachung", altitude: "2900m", distance: "120 km", day: 4, date: "Day 4", arrTime: "04:30 PM", depTime: "07:00 AM (Day 5)", transport: "Package Sumo", icon: "Home" },
  { id: 7, location: "Yumthang Valley", altitude: "3560m", distance: "25 km", day: 5, date: "Day 5", arrTime: "08:30 AM", depTime: "10:30 AM", transport: "Package Sumo", icon: "Mountain" },
  { id: 8, location: "Delhi", altitude: "215m", distance: "1270 km", day: 7, date: "Day 7", arrTime: "06:00 PM", depTime: "—", transport: "Sleeper Train", icon: "Train" },
];

export const overviewCards = [
  { title: "Gurudongmar Lake", value: "17,800 ft", description: "One of the highest lakes in the world, surrounded by sacred glaciated peaks.", icon: "TrendingUp" },
  { title: "Yumthang Valley", value: "Valley of Flowers", description: "A gorgeous alpine meadow filled with hot springs, pine forests, and rhododendrons.", icon: "Mountain" },
  { title: "Sikkim Shared Package", value: "Optimized Grouping", description: "North Sikkim shared package (₹3,800/person) covers Lachen, Lachung, stay, and food.", icon: "Wallet" },
];

export const navLinks = [
  { id: "overview", label: "Overview" },
  { id: "itinerary", label: "Itinerary" },
  { id: "transport", label: "Transport" },
  { id: "stay", label: "Stay" },
  { id: "budget", label: "Budget" },
  { id: "expenses", label: "Expenses" },
  { id: "resources", label: "Guides" },
];

export const expenseCategories = ["Transport", "Accommodation", "Food", "Permits", "Emergency", "Shopping", "Other"];

export const STORAGE_KEYS = {
  expenseTracker: "expenses-sikkim",
  budgetCalculator: "budget-values-sikkim",
  completedTreks: "completed-treks-sikkim",
  packingChecklist: "packing-checklist-sikkim",
  completedDays: "completed-days-sikkim",
};
