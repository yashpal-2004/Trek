import { vrindavanAmounts } from "./amounts";

export const trip = {
  title: "Vrindavan & Mathura Pilgrimage",
  subtitle: "A 2-day Krishna pilgrimage from Sonipat to the land of Braj by intercity bus",
  duration: "2 Days",
  durationDays: 2,
  people: 4,
  budgetMin: 2000,
  budgetMax: 3000,
  difficulty: "Easy / City Pilgrimage",
  highestAltitude: "174m (Mathura-Vrindavan)",
  totalDistance: "340 km (Round Trip)",
  totalTrekDistance: "0 km",
  startingPoint: "College, Sonipat",
  endingPoint: "College, Sonipat",
  transport: ["UPSRTC / Intercity Bus", "E-Rickshaw / Tempo"],
  theme: "Purple",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 2, suffix: "", description: "Weekend pilgrimage", icon: "Calendar" },
  { id: "distance", label: "Total Distance", value: 340, suffix: " KM", description: "Sonipat–Delhi–Vrindavan Round Trip", icon: "Route" },
  { id: "budget", label: "Budget", value: +(vrindavanAmounts.budgetTotal / 1000).toFixed(2), suffix: "K", prefix: "₹", description: "Per person (4 friends / family)", icon: "Wallet" },
  { id: "altitude", label: "Elevation", value: 174, suffix: " M", description: "Yamuna River Plains", icon: "TrendingUp" },
  { id: "passes", label: "Temples", value: 7, suffix: "", description: "Banke Bihari, Prem Mandir, ISKCON & more", icon: "MapPin" },
  { id: "destinations", label: "Major Stops", value: 3, suffix: "", description: "Vrindavan, Mathura, Govardhan", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "College (Sonipat)", altitude: "230m", distance: "0 km", day: 0, date: "Day 1 Morning", arrTime: "—", depTime: "07:30 AM", transport: "Bus / Metro to Delhi", icon: "Bus" },
  { id: 2, location: "Delhi ISBT (Kashmere Gate / Sarai Kale Khan)", altitude: "216m", distance: "45 km", day: 1, date: "Day 1 Morning", arrTime: "08:45 AM", depTime: "09:15 AM", transport: "Expressway Bus to Vrindavan", icon: "Bus" },
  { id: 3, location: "Vrindavan Highway Cut / Chatikara", altitude: "174m", distance: "185 km", day: 1, date: "Day 1 Afternoon", arrTime: "12:30 PM", depTime: "01:00 PM", transport: "E-Rickshaw to Ashram", icon: "MapPin" },
  { id: 4, location: "Vrindavan – Ashram Check-in & Temples", altitude: "174m", distance: "192 km", day: 1, date: "Day 1 Afternoon", arrTime: "01:30 PM", depTime: "06:30 PM", transport: "E-Rickshaw / Walking", icon: "MapPin" },
  { id: 5, location: "Yamuna Ghat Aarti – Kesi Ghat", altitude: "174m", distance: "195 km", day: 1, date: "Day 1 Evening", arrTime: "07:00 PM", depTime: "08:00 PM", transport: "Walking", icon: "Compass" },
  { id: 6, location: "Mathura – Krishna Janmabhoomi & Dwarkadheesh", altitude: "174m", distance: "205 km", day: 2, date: "Day 2 Morning", arrTime: "08:30 AM", depTime: "01:30 PM", transport: "E-Rickshaw / Tempo", icon: "MapPin" },
  { id: 7, location: "Mathura / Highway Bus Stand – Return Bus", altitude: "174m", distance: "210 km", day: 2, date: "Day 2 Afternoon", arrTime: "02:00 PM", depTime: "02:30 PM", transport: "Expressway Bus to Delhi", icon: "Bus" },
  { id: 8, location: "College (Sonipat)", altitude: "230m", distance: "360 km", day: 2, date: "Day 2 Evening", arrTime: "07:30 PM", depTime: "—", transport: "Arrive at College", icon: "Home" },
];

export const overviewCards = [
  { title: "Banke Bihari Darshan", value: "Spiritual Peak", description: "Visit the ancient Banke Bihari Mandir — one of the most sacred Krishna temples in Vrindavan, where the idol is veiled and unveiled repeatedly during darshan.", icon: "MapPin" },
  { title: "Prem Mandir & ISKCON", value: "Divine Architecture", description: "Marvel at the stunning white marble Prem Mandir and the grand ISKCON temple, both illuminated spectacularly at night.", icon: "TrendingUp" },
  { title: "Krishna Janmabhoomi, Mathura", value: "Sacred Birthplace", description: "Visit the exact birthplace of Lord Krishna at the Shri Krishna Janmabhoomi complex in Mathura, a deeply moving experience.", icon: "Compass" },
];

export const navLinks = [
  { id: "overview", label: "Overview" },
  { id: "itinerary", label: "Itinerary" },
  { id: "transport", label: "Transport" },
  { id: "stay", label: "Stay" },
  { id: "budget", label: "Budget" },
  { id: "expenses", label: "Expenses" },
  { id: "packing", label: "Packing" },
  { id: "resources", label: "Guides" },
];

export const expenseCategories = ["Transport", "Accommodation", "Food", "Temple Prasad / Donations", "Shopping", "Other"];

export const STORAGE_KEYS = {
  expenseTracker: "expenses-vrindavan",
  budgetCalculator: "budget-values-vrindavan-v2",
  completedTreks: "completed-treks-vrindavan",
  packingChecklist: "packing-checklist-vrindavan",
  completedDays: "completed-days-vrindavan",
};
