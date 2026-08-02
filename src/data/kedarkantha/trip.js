import { kedarkanthaAmounts } from "./amounts";
const data = kedarkanthaAmounts;

export const trip = {
  title: "Kedarkantha Winter Peak Summit",
  subtitle: "A 5-day solo-friendly winter snow trekking expedition from Delhi to the iconic 3,810m summit in Uttarakhand",
  duration: "January 2027",
  durationDays: 5,
  people: 1,
  get budgetMin() { return data.budgetTotal - 500; },
  get budgetMax() { return data.budgetTotal + 800; },
  difficulty: "Moderate",
  highestAltitude: "3,810m (12,500 ft)",
  totalDistance: "878 km",
  totalTrekDistance: "18 km",
  startingPoint: "Delhi",
  endingPoint: "Delhi",
  transport: ["Train/Bus", "Shared Taxi", "Trekking"],
  theme: "Indigo",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 5, suffix: "", description: "Full trip duration", icon: "Calendar" },
  { id: "walking", label: "Walking/Trek", value: 18, suffix: " KM", description: "Sankri, Juda Lake & Peak Summit", icon: "Footprints" },
  { id: "budget", label: "Budget", get value() { return (data.budgetTotal / 1000).toFixed(1); }, suffix: "K", prefix: "₹", description: "Per person estimate", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 3810, suffix: " M (12,500 FT)", description: "Kedarkantha Peak Summit", icon: "TrendingUp" },
  { id: "distance", label: "Total Distance", value: 878, suffix: " KM", description: "Bus, shared jeep & trekking", icon: "Route" },
  { id: "destinations", label: "Destinations", value: 4, suffix: "", description: "Major stops visited", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Delhi", altitude: "215m", distance: "0 km", day: 1, date: "Day 1", arrTime: "06:00 AM", depTime: "10:00 PM (Day 0)", transport: "AC Train / Bus", icon: "Bus" },
  { id: 2, location: "Dehradun", altitude: "450m", distance: "240 km", day: 1, date: "Day 1", arrTime: "05:00 AM", depTime: "06:30 AM", transport: "Shared Jeep / Bolero", icon: "Compass" },
  { id: 3, location: "Sankri", altitude: "1950m", distance: "190 km", day: 1, date: "Day 1", arrTime: "03:30 PM", depTime: "09:00 AM (Day 2)", transport: "Shared Jeep", icon: "Home" },
  { id: 4, location: "Juda Ka Talab", altitude: "2700m", distance: "4 km (Trek)", day: 2, date: "Day 2", arrTime: "02:00 PM", depTime: "03:30 AM (Day 3)", transport: "Trek", icon: "Footprints" },
  { id: 5, location: "Kedarkantha Summit", altitude: "3810m", distance: "4 km (Trek)", day: 3, date: "Day 3", arrTime: "07:00 AM", depTime: "08:00 AM", transport: "Trek", icon: "Mountain" },
  { id: 6, location: "Hargaon Camp", altitude: "2600m", distance: "4 km (Trek)", day: 3, date: "Day 3", arrTime: "01:30 PM", depTime: "08:00 AM (Day 4)", transport: "Trek", icon: "Home" },
  { id: 7, location: "Sankri", altitude: "1950m", distance: "6 km (Trek)", day: 4, date: "Day 4", arrTime: "11:30 AM", depTime: "01:00 PM", transport: "Trek + Taxi", icon: "Home" },
  { id: 8, location: "Dehradun", altitude: "450m", distance: "190 km", day: 4, date: "Day 4", arrTime: "08:00 PM", depTime: "02:00 PM (Day 5)", transport: "Shared Jeep", icon: "Compass" },
  { id: 9, location: "Delhi", altitude: "215m", distance: "240 km", day: 5, date: "Day 5", arrTime: "08:00 PM", depTime: "—", transport: "Train / AC Bus", icon: "Bus" },
];

export const overviewCards = [
  { title: "Frozen Juda Lake", value: "8,858 ft", description: "A picturesque frozen pond locked within high alpine pine forests.", icon: "TrendingUp" },
  { title: "Kedarkantha Peak", value: "12,500 ft", description: "360-degree winter panorama of Har Ki Dun and Swargarohini massifs.", icon: "Mountain" },
  { title: "Sankri Base Village", value: "6,398 ft", description: "The bustling cultural base camp village of Mori valley.", icon: "Home" },
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
  expenseTracker: "expenses-kedarkantha",
  budgetCalculator: "budget-values-kedarkantha",
  completedTreks: "completed-treks-kedarkantha",
  packingChecklist: "packing-checklist-kedarkantha",
  completedDays: "completed-days-kedarkantha",
};
