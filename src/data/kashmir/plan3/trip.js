import { kashmirPlan3Amounts } from "./amounts";

export const trip = {
  title: "Kashmir Valley Backpacking — Ultra Budget General Train",
  subtitle: "Cheapest possible 6-day expedition using Unreserved General Class Train, JKSRTC Buses & Backpacker Hostels",
  duration: "6 Days",
  durationDays: 6,
  people: 1,
  budgetMin: 5000,
  budgetMax: 6500,
  difficulty: "Easy",
  highestAltitude: "2,650m (Gulmarg Meadows)",
  totalDistance: "1,700 km (Round Trip)",
  totalTrekDistance: "6 km",
  startingPoint: "Delhi (DLI / NDLS)",
  endingPoint: "Delhi (NDLS)",
  transport: ["Unreserved General Train (₹190)", "JKSRTC Bus / Shared Transit", "Local DEMU Valley Train", "Shared Autos"],
  theme: "Teal",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 6, suffix: "", description: "Valley ultra-budget duration", icon: "Calendar" },
  { id: "distance", label: "Total Distance", value: 1700, suffix: " KM", description: "Delhi-Srinagar Round Trip", icon: "Route" },
  { id: "budget", label: "Budget", value: parseFloat((kashmirPlan3Amounts.budgetTotal / 1000).toFixed(2)), suffix: "K", prefix: "₹", description: "Per person (Cheapest solo backpacker option)", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 2650, suffix: " M", description: "Gulmarg Meadows Altitude", icon: "TrendingUp" },
  { id: "passes", label: "Valley Hikes", value: 2, suffix: "", description: "Gulmarg pine trails & Pahalgam Lidder walk", icon: "MapPin" },
  { id: "destinations", label: "Major Stops", value: 5, suffix: "", description: "Delhi, Jammu, Banihal, Srinagar, Gulmarg", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Delhi (DLI / NDLS)", altitude: "210m", distance: "0 km", day: 0, date: "Day 0 Night", arrTime: "08:00 PM", depTime: "08:50 PM", transport: "General Unreserved Train (₹190)", icon: "Train" },
  { id: 2, location: "Jammu Tawi (Transit)", altitude: "327m", distance: "580 km", day: 1, date: "Day 1 Morning", arrTime: "07:30 AM", depTime: "08:15 AM", transport: "JKSRTC Ordinary Bus / Shared Winger", icon: "Bus" },
  { id: 3, location: "Banihal Station", altitude: "1,666m", distance: "750 km", day: 1, date: "Day 1 Afternoon", arrTime: "01:30 PM", depTime: "02:10 PM", transport: "Kashmir Valley DEMU Train (₹50)", icon: "Train" },
  { id: 4, location: "Srinagar (Backpacker Hostel)", altitude: "1,585m", distance: "830 km", day: 1, date: "Day 1 Evening", arrTime: "03:45 PM", depTime: "—", transport: "Shared Auto to Hostel (₹40)", icon: "Home" },
  { id: 5, location: "Gulmarg Meadows", altitude: "2,650m", distance: "885 km", day: 2, date: "Day 2 Daytrip", arrTime: "09:30 AM", depTime: "05:00 PM", transport: "Shared Bus to Tangmarg + Shared Auto", icon: "Bus" },
  { id: 6, location: "Pahalgam Valley", altitude: "2,200m", distance: "925 km", day: 3, date: "Day 3 Daytrip", arrTime: "09:30 AM", depTime: "05:00 PM", transport: "Shared Sumo from Anantnag Stand", icon: "Bus" },
  { id: 7, location: "Srinagar Heritage & Old City", altitude: "1,585m", distance: "830 km", day: 4, date: "Day 4 Full Day", arrTime: "—", depTime: "—", transport: "Local City Mini-bus & Walking", icon: "Compass" },
  { id: 8, location: "Jammu (Return Transit)", altitude: "327m", distance: "1120 km", day: 5, date: "Day 5 Evening", arrTime: "05:30 PM", depTime: "08:10 PM", transport: "DEMU Train + Shared Bus + General Train", icon: "Train" },
  { id: 9, location: "Delhi (NDLS)", altitude: "210m", distance: "1700 km", day: 6, date: "Day 6 Morning", arrTime: "07:00 AM", depTime: "—", transport: "Arrive NDLS General Platform", icon: "Home" },
];

export const overviewCards = [
  { title: "Unreserved General Train Route", value: "₹380 Round Trip", description: "Travel from Delhi to Jammu in unreserved General Class (Shalimar / Jammu Mail Express) for minimum expense.", icon: "TrendingUp" },
  { title: "Kashmir DEMU Valley Train", description: "Experience the iconic Pir Panjal rail tunnel crossing for just ₹50 fare on local DEMU trains.", icon: "Route" },
  { title: "Backpacker Hostel Stay", description: "Stay in ultra-budget backpacker dormitories / local homestays in Srinagar at ₹250/night.", icon: "Home" },
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

export const expenseCategories = ["Transport", "Accommodation", "Food", "Sightseeing/Activities", "Shopping", "Other"];

export const STORAGE_KEYS = {
  expenseTracker: "expenses-kashmir-plan3",
  budgetCalculator: "budget-values-kashmir-plan3",
  completedTreks: "completed-treks-kashmir-plan3",
  packingChecklist: "packing-checklist-kashmir-plan3",
  completedDays: "completed-days-kashmir-plan3",
};
