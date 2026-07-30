import { spitiAmounts } from "../amounts";

export const trip = {
  title: "Spiti Valley Expedition — Plan 3 (Express)",
  subtitle: "A 4-day express mountain riding adventure from Delhi via Manali, Atal Tunnel, Kaza & Chandratal, skipping Manali stays",
  duration: "Custom Dates",
  durationDays: 4,
  people: 2,
  budgetMin: 7300,
  budgetMax: 7300,
  difficulty: "Challenging (Express Pace)",
  highestAltitude: "4,551m (14,931 ft)",
  totalDistance: "1430 km",
  totalTrekDistance: "2 km",
  startingPoint: "Delhi",
  endingPoint: "Delhi",
  transport: ["Volvo Bus", "Hero Xpulse 200"],
  theme: "Amber",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 4, suffix: "", description: "Express circuit duration", icon: "Calendar" },
  { id: "distance", label: "Total Distance", value: 1430, suffix: " KM", description: "Volvo Bus + 800 km Spiti Bike", icon: "Route" },
  { id: "budget", label: "Budget", value: (spitiAmounts.plan3.budgetTotal / 1000).toFixed(1), suffix: "K", prefix: "₹", description: "Per person (2 riders group)", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 4551, suffix: " M (14,931 FT)", description: "Kunzum Pass", icon: "TrendingUp" },
  { id: "passes", label: "Mountain Passes", value: 2, suffix: "", description: "Atal Tunnel & Kunzum Pass", icon: "Mountain" },
  { id: "destinations", label: "Major Stops", value: 6, suffix: "", description: "Manali, Kaza, Key, Hikkim, Komic, Chandratal", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Delhi", altitude: "215m", distance: "0 km", day: 0, date: "Day 0", arrTime: "—", depTime: "09:00 PM", transport: "Volvo Bus", icon: "Bus" },
  { id: 2, location: "Manali", altitude: "2050m", distance: "530 km", day: 1, date: "Day 1", arrTime: "08:00 AM", depTime: "09:30 AM", transport: "Hero Xpulse 200", icon: "Compass" },
  { id: 3, location: "Kaza", altitude: "3600m", distance: "200 km", day: 1, date: "Day 1", arrTime: "07:30 PM", depTime: "—", transport: "Hero Xpulse 200", icon: "Home" },
  { id: 4, location: "Key / Komic / Kaza", altitude: "4527m", distance: "80 km", day: 2, date: "Day 2", arrTime: "—", depTime: "—", transport: "Hero Xpulse 200", icon: "Route" },
  { id: 5, location: "Chandratal Lake Detour", altitude: "4300m", distance: "110 km", day: 3, date: "Day 3", arrTime: "11:00 AM", depTime: "01:30 PM", transport: "Hero Xpulse 200", icon: "Waves" },
  { id: 6, location: "Manali", altitude: "2050m", distance: "200 km", day: 3, date: "Day 3", arrTime: "06:30 PM", depTime: "07:30 PM", transport: "Volvo Bus", icon: "Bus" },
  { id: 7, location: "Delhi", altitude: "215m", distance: "530 km", day: 4, date: "Day 4", arrTime: "07:30 AM", depTime: "—", transport: "Volvo Bus", icon: "Bus" },
];

export const overviewCards = [
  { title: "Highest Post Office", value: "14,567 ft", description: "Send postcards from Hikkim, the world's highest post office.", icon: "Mail" },
  { title: "Kunzum Pass Ride", value: "14,931 ft", description: "Conquer the thrilling dirt tracks and high glacial passes.", icon: "Compass" },
  { title: "No Manali Stays", value: "Direct Ride", description: "Save time and cost by transiting directly through Manali on arrival/departure.", icon: "Check" },
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
  expenseTracker: "expenses-spiti-p3",
  budgetCalculator: "budget-values-spiti-p3",
  completedTreks: "completed-treks-spiti-p3",
  packingChecklist: "packing-checklist-spiti-p3",
  completedDays: "completed-days-spiti-p3",
};
