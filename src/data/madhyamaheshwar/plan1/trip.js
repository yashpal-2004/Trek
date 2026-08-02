import { madhyamaheshwarAmounts } from "../amounts";
const data = madhyamaheshwarAmounts.plan1;

export const trip = {
  title: "Madhyamaheshwar & Budha Madhyamaheshwar",
  subtitle: "A 5-day spiritual and panoramic trekking journey from Delhi via Rishikesh, Ukhimath, and Ransi base village",
  duration: "Custom Dates",
  durationDays: 5,
  people: 2,
  get budgetMin() { return data.budgetTotal - 500; },
  get budgetMax() { return data.budgetTotal + 800; },
  difficulty: "Moderate",
  highestAltitude: "3,750m (12,303 ft)",
  totalDistance: "934 km",
  totalTrekDistance: "36 km",
  startingPoint: "Delhi",
  endingPoint: "Delhi",
  transport: ["Train/Bus", "Shared Taxi", "Trekking"],
  theme: "Emerald",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 5, suffix: "", description: "Full trip duration", icon: "Calendar" },
  { id: "walking", label: "Walking/Trek", value: 36, suffix: " KM", description: "Ransi, Madhyamaheshwar & Budha Madmaheshwar", icon: "Footprints" },
  { id: "budget", label: "Budget", get value() { return (data.budgetTotal / 1000).toFixed(1); }, suffix: "K", prefix: "₹", description: "Per person estimate", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 3750, suffix: " M (12,303 FT)", description: "Budha Madhyamaheshwar Peak", icon: "TrendingUp" },
  { id: "distance", label: "Total Distance", value: 934, suffix: " KM", description: "Bus, shared jeep & trekking", icon: "Route" },
  { id: "destinations", label: "Destinations", value: 4, suffix: "", description: "Major stops visited", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Delhi", altitude: "215m", distance: "0 km", day: 1, date: "Day 1", arrTime: "06:00 AM", depTime: "10:00 PM (Day 0)", transport: "Train / AC Bus", icon: "Bus" },
  { id: 2, location: "Rishikesh", altitude: "340m", distance: "240 km", day: 1, date: "Day 1", arrTime: "05:00 AM", depTime: "06:00 AM", transport: "Shared Bus / Taxi", icon: "Compass" },
  { id: 3, location: "Ukhimath", altitude: "1311m", distance: "190 km", day: 1, date: "Day 1", arrTime: "02:00 PM", depTime: "02:30 PM", transport: "Shared Jeep", icon: "Bus" },
  { id: 4, location: "Ransi", altitude: "1900m", distance: "20 km", day: 1, date: "Day 1", arrTime: "04:30 PM", depTime: "06:30 AM (Day 2)", transport: "Shared Jeep", icon: "Home" },
  { id: 5, location: "Madhyamaheshwar", altitude: "3497m", distance: "16 km (Trek)", day: 2, date: "Day 2", arrTime: "04:30 PM", depTime: "04:30 AM (Day 3)", transport: "Trek", icon: "Footprints" },
  { id: 6, location: "Budha Madhyamaheshwar", altitude: "3750m", distance: "2 km (Trek)", day: 3, date: "Day 3", arrTime: "06:00 AM", depTime: "07:30 AM", transport: "Trek", icon: "Mountain" },
  { id: 7, location: "Madhyamaheshwar", altitude: "3497m", distance: "2 km (Trek)", day: 3, date: "Day 3", arrTime: "09:00 AM", depTime: "07:30 AM (Day 4)", transport: "Trek", icon: "Home" },
  { id: 8, location: "Ransi", altitude: "1900m", distance: "16 km (Trek)", day: 4, date: "Day 4", arrTime: "03:00 PM", depTime: "07:00 AM (Day 5)", transport: "Trek", icon: "Home" },
  { id: 9, location: "Rishikesh", altitude: "340m", distance: "210 km", day: 5, date: "Day 5", arrTime: "06:00 PM", depTime: "09:30 PM", transport: "Shared Taxi / Bus", icon: "Compass" },
  { id: 10, location: "Delhi", altitude: "215m", distance: "240 km", day: 6, date: "Day 6", arrTime: "04:30 AM", depTime: "—", transport: "Overnight Bus / Train", icon: "Bus" },
];

export const overviewCards = [
  { title: "Madhyamaheshwar Temple", value: "11,473 ft", description: "Ancient Panch Kedar shrine nestled inside green alpine meadows.", icon: "TrendingUp" },
  { title: "Budha Madmaheshwar", value: "12,303 ft", description: "Grassy ridge top offering spectacular reflections of Chaukhamba Peak in a small pool.", icon: "Mountain" },
  { title: "Ransi Village Base", value: "1,900 m", description: "Scenic stone-paved Himalayan base hamlet starting point of the foot journey.", icon: "Home" },
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
  expenseTracker: "expenses-madhyamaheshwar",
  budgetCalculator: "budget-values-madhyamaheshwar",
  completedTreks: "completed-treks-madhyamaheshwar",
  packingChecklist: "packing-checklist-madhyamaheshwar",
  completedDays: "completed-days-madhyamaheshwar",
};
