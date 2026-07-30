import { spitiAmounts } from "../amounts";

export const trip = {
  title: "Spiti Valley Expedition — Plan 1 (2 Persons)",
  subtitle: "A 6-day mountain riding adventure from Delhi via Manali, Atal Tunnel, Kaza, Key Monastery, Hikkim & Chandratal Lake",
  duration: "Custom Dates",
  durationDays: 6,
  people: 2,
  budgetMin: 10150,
  budgetMax: 10900,
  difficulty: "Moderate to Challenging",
  highestAltitude: "4,551m (14,931 ft)",
  totalDistance: "1500 km",
  totalTrekDistance: "2 km",
  startingPoint: "Delhi",
  endingPoint: "Delhi",
  transport: ["Volvo Bus", "Hero Xpulse 200", "Scooty"],
  theme: "Amber",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 6, suffix: "", description: "Full circuit duration", icon: "Calendar" },
  { id: "distance", label: "Total Distance", value: 1500, suffix: " KM", description: "Volvo Bus + 800 km Spiti Bike & Scooty", icon: "Route" },
  { id: "budget", label: "Budget", value: (spitiAmounts.plan1.budgetTotal / 1000).toFixed(1), suffix: "K", prefix: "₹", description: "Per person (2 riders group)", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 4551, suffix: " M (14,931 FT)", description: "Kunzum Pass", icon: "TrendingUp" },
  { id: "passes", label: "Mountain Passes", value: 2, suffix: "", description: "Atal Tunnel & Kunzum Pass", icon: "Mountain" },
  { id: "destinations", label: "Major Stops", value: 7, suffix: "", description: "Manali, Kaza, Key, Hikkim, Komic, Langza, Chandratal", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Delhi (ISBT Kashmiri Gate)", altitude: "215m", distance: "0 km", day: 1, date: "Day 0 (Night)", arrTime: "06:30 PM", depTime: "07:30 PM", transport: "Volvo AC Bus", icon: "Bus" },
  { id: 2, location: "Manali (Day 1 - Going)", altitude: "2050m", distance: "530 km", day: 1, date: "Day 1", arrTime: "08:00 AM", depTime: "06:00 AM (Day 2)", transport: "Scooty Sightseeing", icon: "Home" },
  { id: 3, location: "Atal Tunnel & Gramphu", altitude: "3050m", distance: "40 km", day: 2, date: "Day 2", arrTime: "07:30 AM", depTime: "08:00 AM", transport: "Hero Xpulse 200", icon: "Compass" },
  { id: 4, location: "Batal & Kunzum Pass", altitude: "4551m", distance: "90 km", day: 2, date: "Day 2", arrTime: "12:30 PM", depTime: "01:30 PM", transport: "Hero Xpulse 200", icon: "Mountain" },
  { id: 5, location: "Kaza Base", altitude: "3800m", distance: "70 km", day: 2, date: "Day 2", arrTime: "04:30 PM", depTime: "08:00 AM (Day 4)", transport: "Hero Xpulse 200", icon: "Home" },
  { id: 6, location: "Key Monastery & High Villages", altitude: "4587m", distance: "90 km", day: 3, date: "Day 3", arrTime: "10:00 AM", depTime: "04:00 PM", transport: "Hero Xpulse 200", icon: "MapPin" },
  { id: 7, location: "Chandratal Lake Detour", altitude: "4300m", distance: "110 km", day: 4, date: "Day 4", arrTime: "11:00 AM", depTime: "01:30 PM", transport: "Hero Xpulse 200", icon: "Waves" },
  { id: 8, location: "Manali (Day 5 - Return)", altitude: "2050m", distance: "100 km", day: 4, date: "Day 4/5", arrTime: "06:30 PM", depTime: "06:00 PM (Day 5)", transport: "Scooty & Bus", icon: "Home" },
  { id: 9, location: "Delhi", altitude: "215m", distance: "530 km", day: 6, date: "Day 6", arrTime: "07:00 AM", depTime: "—", transport: "Overnight Volvo Bus", icon: "Bus" },
];

export const overviewCards = [
  { title: "Kunzum Pass & Atal Tunnel", value: "14,931 ft", description: "Cross iconic high mountain passes and transit through the world's longest highway tunnel above 10,000 ft.", icon: "TrendingUp" },
  { title: "World's Highest Post Office", value: "Hikkim (14,567 ft)", description: "Post a handwritten letter to your loved ones from the world's highest operational post office.", icon: "MapPin" },
  { title: "Hero Xpulse 200 & Scooty", value: "3 Days Riding", description: "Dual-riding adventure across Spiti terrain on Xpulse 200 + 2 days Scooty exploration in Manali.", icon: "Compass" },
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
  expenseTracker: "expenses-spiti-p1",
  budgetCalculator: "budget-values-spiti-p1",
  completedTreks: "completed-treks-spiti-p1",
  packingChecklist: "packing-checklist-spiti-p1",
  completedDays: "completed-days-spiti-p1",
};
