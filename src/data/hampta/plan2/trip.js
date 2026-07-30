import { budget as budgetData } from "./budget";

export const trip = {
  title: "Hampta Pass Trek (Express)",
  subtitle: "A fast-paced 4-day express crossover trek from Delhi bypassing the Chandra Tal detour for tight schedules",
  duration: "10 Aug – 13 Aug 2026",
  durationDays: 4,
  people: 2,
  get budgetMin() { return budgetData.total; },
  get budgetMax() { return budgetData.total + 1300; },
  difficulty: "Moderate",
  highestAltitude: "4,270m (14,010 ft)",
  totalDistance: "1060 km Transit + 35 km Trek",
  totalTrekDistance: "35 km",
  startingPoint: "Delhi",
  endingPoint: "Delhi",
  transport: ["Volvo Bus", "Shared Cab", "Trekking"],
  theme: "Light",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 4, suffix: "", description: "Expedition Crossover", icon: "Calendar" },
  { id: "treks", label: "Peak Altitude", value: 4270, suffix: " M", description: "14,010 FT Hampta Pass", icon: "Mountain" },
  { id: "walking", label: "Trek Distance", value: 35, suffix: " KM", description: "Jobra to Chatru", icon: "Footprints" },
  { id: "budget", label: "Est. Budget", get value() { return (budgetData.total / 1000).toFixed(1); }, suffix: "K", prefix: "₹", description: "Per person estimate", icon: "Wallet" },
  { id: "altitude", label: "Base Camp", value: 2980, suffix: " M", description: "Jobra trailhead", icon: "TrendingUp" },
  { id: "bus", label: "Total Journey", value: 1095, suffix: " KM", description: "Delhi to Delhi Circuit", icon: "Route" },
  { id: "destinations", label: "Key Stops", value: 5, suffix: "", description: "Chika, Balu Ka Ghera, Shea Goru, Chatru, Manali", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Delhi", altitude: "215m", distance: "0 km", day: 1, date: "09 Aug", depTime: "06:30 PM", transport: "Overnight Volvo Bus", icon: "Home" },
  { id: 2, location: "Manali", altitude: "2050m", distance: "530 km", day: 1, date: "10 Aug", arrTime: "08:00 AM", depTime: "09:30 AM", transport: "Shared Cab", icon: "MapPin" },
  { id: 3, location: "Jobra Trailhead", altitude: "2980m", distance: "20 km", day: 1, date: "10 Aug", arrTime: "11:00 AM", depTime: "11:30 AM", transport: "Trek", icon: "Mountain" },
  { id: 4, location: "Chika Camp", altitude: "3140m", distance: "3 km", day: 1, date: "10 Aug", arrTime: "01:30 PM", depTime: "07:00 AM (Next Day)", transport: "Trek", icon: "Mountain" },
  { id: 5, location: "Balu Ka Ghera", altitude: "3600m", distance: "8 km", day: 2, date: "11 Aug", arrTime: "01:00 PM", depTime: "06:00 AM (Next Day)", transport: "Trek", icon: "Mountain" },
  { id: 6, location: "Hampta Pass Summit", altitude: "4270m", distance: "7 km", day: 3, date: "12 Aug", arrTime: "11:00 AM", depTime: "11:30 AM", transport: "Trek", icon: "TrendingUp" },
  { id: 7, location: "Shea Goru Camp", altitude: "3900m", distance: "5 km", day: 3, date: "12 Aug", arrTime: "03:00 PM", depTime: "07:00 AM (Next Day)", transport: "Trek", icon: "Mountain" },
  { id: 8, location: "Chatru Camp", altitude: "3350m", distance: "12 km", day: 4, date: "13 Aug", arrTime: "11:00 AM", depTime: "12:00 PM", transport: "Shared Cab", icon: "Mountain" },
  { id: 9, location: "Manali via Rohtang", altitude: "2050m", distance: "110 km", day: 4, date: "13 Aug", arrTime: "04:30 PM", depTime: "06:00 PM", transport: "Overnight Volvo Bus", icon: "MapPin" },
  { id: 10, location: "Delhi", altitude: "215m", distance: "530 km", day: 5, date: "14 Aug", arrTime: "07:00 AM", transport: "Bus", icon: "Home" },
];

export const overviewCards = [
  { id: "duration", label: "Duration", value: "4 Days", icon: "Calendar", description: "10 Aug – 13 Aug 2026" },
  { id: "budget", label: "Budget", get value() { return `₹${(budgetData.total / 1000).toFixed(1)}K–${((budgetData.total + 1300) / 1000).toFixed(1)}K`; }, icon: "Wallet", description: "Per person estimate" },
  { id: "difficulty", label: "Difficulty", value: "Moderate", icon: "Activity", description: "Express crossover pass" },
  { id: "people", label: "Travelers", value: "2 People", icon: "Users", description: "Shared travel group" },
  { id: "transport", label: "Transport", value: "Volvo + Cabs", icon: "Bus", description: "Delhi buses, local crossover cabs" },
  { id: "distance", label: "Total Distance", value: "1050 km", icon: "Route", description: "Delhi transit + 35 km trek" },
  { id: "altitude", label: "Highest Point", value: "4,270m (14,010 ft)", icon: "TrendingUp", description: "Hampta Pass Summit" },
  { id: "weather", label: "Season", value: "Aug Monsoon", icon: "CloudRain", description: "Express pass crossing" },
];

export const navLinks = [
  { id: "overview", label: "Overview" },
  { id: "routemap", label: "Map" },
  { id: "timeline", label: "Timeline" },
  { id: "itinerary", label: "Itinerary" },
  { id: "transport", label: "Transport" },
  { id: "stay", label: "Stay" },
  { id: "budget", label: "Budget" },
  { id: "expenses", label: "Expenses" },
  { id: "resources", label: "Guides" },
];

export const expenseCategories = [
  "Transport",
  "Accommodation",
  "Food",
  "Emergency",
  "Shopping",
  "Other",
];

export const STORAGE_KEYS = {
  tripProgress: "trip-progress-hampta-plan2",
  packingChecklist: "packing-checklist-hampta-plan2",
  expenseTracker: "expense-tracker-hampta-plan2",
  theme: "theme-hampta-plan2",
  completedDays: "completed-days-hampta-plan2",
  favoritePlaces: "favorite-places-hampta-plan2",
  completedTreks: "completed-treks-hampta-plan2",
  budgetCalculator: "budget-calculator-hampta-plan2",
};
