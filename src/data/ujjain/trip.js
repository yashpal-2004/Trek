export const trip = {
  title: "Ujjain Mahakal Darshan (Weekend Trip)",
  subtitle: "A 3-day spiritual and cultural weekend trip from Sonipat to Ujjain by direct AC sleeper bus",
  duration: "3 Days",
  durationDays: 3,
  people: 2,
  budgetMin: 4200,
  budgetMax: 4800,
  difficulty: "Easy / Spiritual",
  highestAltitude: "511m (Ujjain)",
  totalDistance: "1700 km (Round Trip)",
  totalTrekDistance: "0 km",
  startingPoint: "Sonipat",
  endingPoint: "Sonipat",
  transport: ["AC Sleeper Bus", "Local Auto / E-Rickshaw"],
  theme: "Orange",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 3, suffix: "", description: "Weekend duration", icon: "Calendar" },
  { id: "distance", label: "Total Distance", value: 1700, suffix: " KM", description: "Sonipat-Ujjain Bus Round Trip", icon: "Route" },
  { id: "budget", label: "Budget", value: "4.5K", suffix: "", prefix: "₹", description: "Per person (2 people sharing)", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 511, suffix: " M", description: "Malwa Plateau Elevation", icon: "TrendingUp" },
  { id: "passes", label: "Jyotirlingas", value: 1, suffix: "", description: "Mahakaleshwar Jyotirlinga", icon: "MapPin" },
  { id: "destinations", label: "Major Stops", value: 5, suffix: "", description: "Mahakal Temple, Kal Bhairav, Harsiddhi, Ram Ghat, Mangalnath", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Sonipat (Boarding)", altitude: "220m", distance: "0 km", day: 0, date: "Friday Night", arrTime: "06:30 PM", depTime: "07:00 PM", transport: "AC Sleeper Bus", icon: "Bus" },
  { id: 2, location: "Ujjain (Arrival)", altitude: "511m", distance: "850 km", day: 1, date: "Saturday", arrTime: "10:30 AM", depTime: "11:30 AM", transport: "E-Rickshaw to Hotel", icon: "Home" },
  { id: 3, location: "Mahakal Temple & Harsiddhi", altitude: "511m", distance: "853 km", day: 1, date: "Saturday", arrTime: "02:00 PM", depTime: "09:00 PM", transport: "Walking / Local Transit", icon: "MapPin" },
  { id: 4, location: "Kal Bhairav & Mangalnath", altitude: "511m", distance: "865 km", day: 2, date: "Sunday", arrTime: "08:30 AM", depTime: "02:00 PM", transport: "Auto Rickshaw", icon: "MapPin" },
  { id: 5, location: "Ram Ghat & Shopping", altitude: "511m", distance: "870 km", day: 2, date: "Sunday", arrTime: "03:00 PM", depTime: "06:00 PM", transport: "Local walking", icon: "Compass" },
  { id: 6, location: "Ujjain Bus Stand (Departure)", altitude: "511m", distance: "872 km", day: 2, date: "Sunday Night", arrTime: "07:00 PM", depTime: "07:30 PM", transport: "AC Sleeper Bus", icon: "Bus" },
  { id: 7, location: "Sonipat (Return)", altitude: "220m", distance: "1722 km", day: 3, date: "Monday Morning", arrTime: "10:00 AM", depTime: "—", transport: "Arrive Home", icon: "Home" },
];

export const overviewCards = [
  { title: "Mahakal Bhasma Aarti", value: "Spiritual Peak", description: "Attend the iconic early morning Bhasma Aarti of Mahakaleshwar Jyotirlinga (pre-booking required).", icon: "TrendingUp" },
  { title: "Kal Bhairav Liquor Prasad", value: "Unique Tradition", description: "Visit the legendary temple where alcohol is offered to the deity as prasad.", icon: "MapPin" },
  { title: "Bhairavgarh Prints", value: "Local Shopping", description: "Purchase famous Ujjain wooden block-printed batik and block prints directly from local artisans.", icon: "Compass" },
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

export const expenseCategories = ["Transport", "Accommodation", "Food", "Pooja/Prasad", "Shopping", "Other"];

export const STORAGE_KEYS = {
  expenseTracker: "expenses-ujjain",
  budgetCalculator: "budget-values-ujjain",
  completedTreks: "completed-treks-ujjain",
  packingChecklist: "packing-checklist-ujjain",
  completedDays: "completed-days-ujjain",
};
