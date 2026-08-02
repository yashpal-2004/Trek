import { madhyamaheshwarAmounts } from "../amounts";
const data = madhyamaheshwarAmounts.plan2;

export const trip = {
  title: "Kedarnath & Madhyamaheshwar Combo Yatra",
  subtitle: "An 8-day spiritual pilgrimage combining the sacred Kedarnath shrine with the peaceful meadows and ancient temple of Madhyamaheshwar from Delhi",
  duration: "Custom Dates",
  durationDays: 8,
  people: 2,
  get budgetMin() { return data.budgetTotal - 800; },
  get budgetMax() { return data.budgetTotal + 1200; },
  difficulty: "Hard",
  highestAltitude: "3,750m (12,303 ft)",
  totalDistance: "1050 km",
  totalTrekDistance: "68 km",
  startingPoint: "Delhi",
  endingPoint: "Delhi",
  transport: ["Train/Bus", "Shared Taxi", "Trekking"],
  theme: "Emerald",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 8, suffix: "", description: "Full yatra duration", icon: "Calendar" },
  { id: "walking", label: "Walking/Trek", value: 68, suffix: " KM", description: "Kedarnath & Madmaheshwar treks combined", icon: "Footprints" },
  { id: "budget", label: "Budget", get value() { return (data.budgetTotal / 1000).toFixed(1); }, suffix: "K", prefix: "₹", description: "Per person estimate", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 3750, suffix: " M (12,303 FT)", description: "Budha Madhyamaheshwar Peak", icon: "TrendingUp" },
  { id: "distance", label: "Total Distance", value: 1050, suffix: " KM", description: "Bus, shared jeep & trekking", icon: "Route" },
  { id: "destinations", label: "Destinations", value: 6, suffix: "", description: "Major stops visited", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Delhi", altitude: "215m", distance: "0 km", day: 1, date: "Day 1", arrTime: "06:00 AM", depTime: "10:00 PM (Day 0)", transport: "Train / AC Bus", icon: "Bus" },
  { id: 2, location: "Rishikesh", altitude: "340m", distance: "240 km", day: 1, date: "Day 1", arrTime: "05:00 AM", depTime: "06:00 AM", transport: "Shared Bus / Taxi", icon: "Compass" },
  { id: 3, location: "Gaurikund", altitude: "1982m", distance: "210 km", day: 1, date: "Day 1", arrTime: "04:30 PM", depTime: "06:00 AM (Day 2)", transport: "Shared Taxi", icon: "Home" },
  { id: 4, location: "Kedarnath", altitude: "3583m", distance: "16 km (Trek)", day: 2, date: "Day 2", arrTime: "03:00 PM", depTime: "07:00 AM (Day 3)", transport: "Trek", icon: "Footprints" },
  { id: 5, location: "Guptkashi / Ukhimath", altitude: "1311m", distance: "16 km (Trek) + 30 km", day: 3, date: "Day 3", arrTime: "04:00 PM", depTime: "07:00 AM (Day 4)", transport: "Trek + Taxi", icon: "Home" },
  { id: 6, location: "Ransi", altitude: "1900m", distance: "20 km", day: 4, date: "Day 4", arrTime: "09:30 AM", depTime: "10:00 AM", transport: "Shared Jeep", icon: "Bus" },
  { id: 7, location: "Madhyamaheshwar", altitude: "3497m", distance: "16 km (Trek)", day: 4, date: "Day 4", arrTime: "05:00 PM", depTime: "04:30 AM (Day 5)", transport: "Trek", icon: "Footprints" },
  { id: 8, location: "Budha Madhyamaheshwar", altitude: "3750m", distance: "2 km (Trek)", day: 5, date: "Day 5", arrTime: "06:00 AM", depTime: "07:30 AM", transport: "Trek", icon: "Mountain" },
  { id: 9, location: "Madhyamaheshwar", altitude: "3497m", distance: "2 km (Trek)", day: 5, date: "Day 5", arrTime: "09:00 AM", depTime: "07:30 AM (Day 6)", transport: "Trek", icon: "Home" },
  { id: 10, location: "Ransi", altitude: "1900m", distance: "16 km (Trek)", day: 6, date: "Day 6", arrTime: "03:00 PM", depTime: "07:00 AM (Day 7)", transport: "Trek", icon: "Home" },
  { id: 11, location: "Rishikesh", altitude: "340m", distance: "210 km", day: 7, date: "Day 7", arrTime: "05:00 PM", depTime: "09:00 AM (Day 8)", transport: "Shared Taxi / Bus", icon: "Compass" },
  { id: 12, location: "Delhi", altitude: "215m", distance: "240 km", day: 8, date: "Day 8", arrTime: "03:00 PM", depTime: "—", transport: "Overnight Bus / Train", icon: "Bus" },
];

export const overviewCards = [
  { title: "Kedarnath Temple", value: "11,755 ft", description: "One of the most sacred Jyotirlingas, backdropped by Kedar dome peaks.", icon: "TrendingUp" },
  { title: "Madhyamaheshwar", value: "11,473 ft", description: "Siddha Peeth Panch Kedar temple nestled in massive green alpine meadows.", icon: "Mountain" },
  { title: "Budha Madmaheshwar", value: "12,303 ft", description: "Ridge top with reflections of the Chaukhamba range.", icon: "Home" },
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
  expenseTracker: "expenses-madhyamaheshwar-plan2",
  budgetCalculator: "budget-values-madhyamaheshwar-plan2",
  completedTreks: "completed-treks-madhyamaheshwar-plan2",
  packingChecklist: "packing-checklist-madhyamaheshwar-plan2",
  completedDays: "completed-days-madhyamaheshwar-plan2",
};
