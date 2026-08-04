import { jibhiAmounts } from "./amounts";
const data = jibhiAmounts;

export const trip = {
  title: "Jibhi Valley Escapade (Couples)",
  subtitle: "A 4-day scenic valley exploration and pass trek starting from Sonipat",
  duration: "27 Aug - 31 Aug 2026",
  durationDays: 4,
  people: 4,
  get budgetMin() { return data.budgetTotal - 500; },
  get budgetMax() { return data.budgetTotal + 800; },
  difficulty: "Easy",
  highestAltitude: "3,120m (10,236 ft)",
  totalDistance: "960 km",
  totalTrekDistance: "5 km",
  startingPoint: "Sonipat",
  endingPoint: "Sonipat",
  transport: ["Volvo Bus", "Cab", "Scooter"],
  theme: "Emerald",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 4, suffix: "", description: "Weekend duration", icon: "Calendar" },
  { id: "walking", label: "Walking/Trek", value: 5, suffix: " KM", description: "Jalori Pass to Serolsar Lake trek", icon: "Footprints" },
  { id: "budget", label: "Budget", get value() { return (data.budgetTotal / 1000).toFixed(1); }, suffix: "K", prefix: "₹", description: "Per person estimate", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 3120, suffix: " M (10,236 FT)", description: "Jalori Pass Elevation", icon: "TrendingUp" },
  { id: "distance", label: "Total Distance", value: 960, suffix: " KM", description: "Volvo bus & scooter ride", icon: "Route" },
  { id: "destinations", label: "Destinations", value: 4, suffix: "", description: "Major stops visited", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Sonipat", altitude: "220m", distance: "0 km", day: 1, date: "27 Aug", arrTime: "07:30 PM", depTime: "08:30 PM (Boarding)", transport: "Volvo Bus", icon: "Bus" },
  { id: 2, location: "Aut Tunnel", altitude: "1000m", distance: "420 km", day: 1, date: "28 Aug", arrTime: "07:00 AM", depTime: "08:00 AM", transport: "Volvo Bus drop", icon: "MapPin" },
  { id: 3, location: "Jibhi Valley", altitude: "1600m", distance: "30 km (Cab)", day: 1, date: "28 Aug", arrTime: "09:00 AM", depTime: "08:00 AM (30 Aug)", transport: "Hotel Room stay", icon: "Home" },
  { id: 4, location: "Jalori Pass", altitude: "3120m", distance: "12 km (Scooter)", day: 2, date: "29 Aug", arrTime: "10:30 AM", depTime: "04:30 PM", transport: "Scooter Ride", icon: "TrendingUp" },
  { id: 5, location: "Sonipat", altitude: "220m", distance: "450 km", day: 4, date: "31 Aug", arrTime: "06:30 AM (Arrival)", depTime: "—", transport: "Volvo Bus", icon: "Bus" },
];

export const overviewCards = [
  { title: "Jalori Pass & Serolsar", value: "10,236 ft", description: "High-altitude pass with a pristine lake trek through cedar woods.", icon: "TrendingUp" },
  { title: "Chehni Kothi", value: "Timber Temple", description: "A towering 1500-year-old traditional stone and wood fort castle.", icon: "Landmark" },
  { title: "Jibhi Pine Stays", value: "Riverside Hotels", description: "Relax at rustic wooden stays, creekside cafes, and stone trails.", icon: "Home" },
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
  expenseTracker: "expenses-jibhi-plan1",
  budgetCalculator: "budget-values-jibhi-plan1",
  completedTreks: "completed-treks-jibhi-plan1",
  packingChecklist: "packing-checklist-jibhi-plan1",
  completedDays: "completed-days-jibhi-plan1",
};
