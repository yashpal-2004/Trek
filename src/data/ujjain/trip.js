export const trip = {
  title: "MP Jyotirlinga Circuit — Mahakaleshwar & Omkareshwar",
  subtitle: "A 3-day spiritual circuit covering 2 sacred Jyotirlingas (Mahakaleshwar Ujjain & Omkareshwar Narmada) from Sonipat/Delhi",
  duration: "3 Days",
  durationDays: 3,
  people: 2,
  budgetMin: 4200,
  budgetMax: 4800,
  difficulty: "Easy / Spiritual",
  highestAltitude: "511m (Ujjain)",
  totalDistance: "1970 km (Round Trip)",
  totalTrekDistance: "0 km",
  startingPoint: "Sonipat",
  endingPoint: "Sonipat",
  transport: ["AC Sleeper Bus", "Local Bus / Shared Cab", "E-Rickshaw"],
  theme: "Orange",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 3, suffix: "", description: "Circuit duration", icon: "Calendar" },
  { id: "distance", label: "Total Distance", value: 1970, suffix: " KM", description: "Sonipat-Ujjain-Omkareshwar Circuit", icon: "Route" },
  { id: "budget", label: "Budget", value: 4.8, suffix: "K", prefix: "₹", description: "Per person (2 sharing)", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 511, suffix: " M", description: "Malwa Plateau Elevation", icon: "TrendingUp" },
  { id: "passes", label: "Jyotirlingas", value: 2, suffix: "", description: "Mahakaleshwar & Omkareshwar", icon: "MapPin" },
  { id: "destinations", label: "Major Stops", value: 6, suffix: "", description: "Mahakal Temple, Mahakal Lok, Harsiddhi, Ram Ghat, Omkareshwar, Mamleshwar", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Sonipat / Delhi", altitude: "220m", distance: "0 km", day: 0, date: "Friday Night", arrTime: "06:30 PM", depTime: "07:00 PM", transport: "AC Sleeper Bus", icon: "Bus" },
  { id: 2, location: "Ujjain (Mahakaleshwar)", altitude: "511m", distance: "850 km", day: 1, date: "Saturday", arrTime: "10:30 AM", depTime: "—", transport: "Hotel & Temple Visit", icon: "Home" },
  { id: 3, location: "Mahakal Lok & Harsiddhi", altitude: "511m", distance: "853 km", day: 1, date: "Saturday", arrTime: "02:00 PM", depTime: "09:00 PM", transport: "Walking / Local Transit", icon: "MapPin" },
  { id: 4, location: "Ujjain → Omkareshwar", altitude: "180m", distance: "135 km", day: 2, date: "Sunday Morning", arrTime: "06:00 AM", depTime: "09:30 AM", transport: "Bus / Shared Cab", icon: "Bus" },
  { id: 5, location: "Omkareshwar & Mamleshwar", altitude: "180m", distance: "990 km", day: 2, date: "Sunday", arrTime: "10:00 AM", depTime: "03:30 PM", transport: "Narmada Boat / Walk", icon: "MapPin" },
  { id: 6, location: "Omkareshwar → Ujjain Bus Stand", altitude: "511m", distance: "1125 km", day: 2, date: "Sunday Evening", arrTime: "06:30 PM", depTime: "07:30 PM", transport: "Bus / Cab to Bus Stand", icon: "Bus" },
  { id: 7, location: "Sonipat / Delhi (Return)", altitude: "220m", distance: "1975 km", day: 3, date: "Monday Morning", arrTime: "10:00 AM", depTime: "—", transport: "Arrive Home", icon: "Home" },
];

export const overviewCards = [
  { title: "2 Sacred Jyotirlingas", value: "Mahakal & Omkareshwar", description: "Visit world-famous Mahakaleshwar (Ujjain) and Omkareshwar (Narmada island) in a single 3-day budget circuit.", icon: "MapPin" },
  { title: "Mahakal Bhasma Aarti", value: "Spiritual Peak", description: "Attend the iconic early morning Bhasma Aarti of Mahakaleshwar Jyotirlinga (pre-booking required).", icon: "TrendingUp" },
  { title: "Narmada Holy Dip", value: "Omkareshwar Island", description: "Cross the sacred Narmada river to visit Omkareshwar and Mamleshwar temples perched on the Om-shaped hill.", icon: "Compass" },
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
  expenseTracker: "expenses-ujjain",
  budgetCalculator: "budget-values-ujjain",
  completedTreks: "completed-treks-ujjain",
  packingChecklist: "packing-checklist-ujjain",
  completedDays: "completed-days-ujjain",
};
