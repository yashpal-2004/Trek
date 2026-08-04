import { birBillingAmounts } from "./amounts";
const data = birBillingAmounts;

export const trip = {
  title: "Bir Billing (Solo Explorer - No Flight)",
  subtitle: "A 4-day solo weekend escape to Bir Billing with scooter exploration and ridge camping",
  duration: "27 Aug - 31 Aug 2026",
  durationDays: 4,
  people: 1,
  get budgetMin() { return data.budgetTotal - 400; },
  get budgetMax() { return data.budgetTotal + 600; },
  difficulty: "Easy - Moderate",
  highestAltitude: "2,400m (7,874 ft)",
  totalDistance: "907 km",
  totalTrekDistance: "7 km",
  startingPoint: "Sonipat",
  endingPoint: "Sonipat",
  transport: ["Volvo Bus", "Scooter"],
  theme: "Rose",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 4, suffix: "", description: "Weekend duration", icon: "Calendar" },
  { id: "walking", label: "Walking/Trek", value: 7, suffix: " KM", description: "Bir to Billing forest climb", icon: "Footprints" },
  { id: "budget", label: "Budget", get value() { return (data.budgetTotal / 1000).toFixed(1); }, suffix: "K", prefix: "₹", description: "Solo traveler estimate", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 2400, suffix: " M (7,874 FT)", description: "Billing Ridge", icon: "TrendingUp" },
  { id: "distance", label: "Total Distance", value: 907, suffix: " KM", description: "Volvo bus & scooter ride", icon: "Route" },
  { id: "destinations", label: "Destinations", value: 3, suffix: "", description: "Major stops visited", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Sonipat", altitude: "220m", distance: "0 km", day: 1, date: "27 Aug", arrTime: "07:30 PM", depTime: "08:30 PM (Boarding)", transport: "Volvo Bus", icon: "Bus" },
  { id: 2, location: "Bir Colony", altitude: "1525m", distance: "450 km", day: 1, date: "28 Aug", arrTime: "08:00 AM", depTime: "09:00 AM (29 Aug)", transport: "Hostel Dorm", icon: "Home" },
  { id: 3, location: "Billing Take-off", altitude: "2400m", distance: "7 km (Trek)", day: 2, date: "29 Aug", arrTime: "02:00 PM", depTime: "09:00 AM (30 Aug)", transport: "Scooter / Trek", icon: "Footprints" },
  { id: 4, location: "Bir Colony", altitude: "1525m", distance: "14 km (Ride)", day: 3, date: "30 Aug", arrTime: "10:30 AM", depTime: "07:30 PM", transport: "Scooter Ride", icon: "Compass" },
  { id: 5, location: "Sonipat", altitude: "220m", distance: "450 km", day: 4, date: "31 Aug", arrTime: "06:00 AM (Arrival)", depTime: "—", transport: "Volvo Bus", icon: "Bus" },
];

export const overviewCards = [
  { title: "Billing Ridge", value: "7,874 ft", description: "Asia's premier takeoff pad with panoramic valley views.", icon: "TrendingUp" },
  { title: "Scooter Tour", value: "1-Day Solo Ride", description: "Rent a scooty and zip to Gunehar Waterfall, Sherab Ling, and local villages.", icon: "Compass" },
  { title: "Bir Colony Cafes", value: "Tibetan Colony", description: "Relax at Buddhist temples, order momos, and sip ginger teas.", icon: "Home" },
];

export const navLinks = [
  { id: "overview", label: "Overview" },
  { id: "routemap", label: "Map" },
  { id: "itinerary", label: "Itinerary" },
  { id: "transport", label: "Transport" },
  { id: "stay", label: "Stay" },
  { id: "budget", label: "Budget" },
  { id: "expenses", label: "Expenses" },
  { id: "resources", label: "Guides" },
];

export const expenseCategories = ["Transport", "Accommodation", "Food", "Permits", "Emergency", "Shopping", "Other"];

export const STORAGE_KEYS = {
  expenseTracker: "expenses-bir-billing-plan2",
  budgetCalculator: "budget-values-bir-billing-plan2",
  completedTreks: "completed-treks-bir-billing-plan2",
  packingChecklist: "packing-checklist-bir-billing-plan2",
  completedDays: "completed-days-bir-billing-plan2",
};
