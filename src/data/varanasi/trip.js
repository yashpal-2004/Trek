export const trip = {
  title: "Varanasi Spiritual & Heritage Weekend",
  subtitle: "A 3-day spiritual escape from Delhi to Kashi by budget sleeper train",
  duration: "3 Days",
  durationDays: 3,
  people: 1,
  budgetMin: 3500,
  budgetMax: 5000,
  difficulty: "Easy / City Exploration",
  highestAltitude: "81m (Varanasi)",
  totalDistance: "1600 km (Round Trip)",
  totalTrekDistance: "0 km",
  startingPoint: "New Delhi",
  endingPoint: "New Delhi",
  transport: ["Sleeper Train", "Local Auto / E-Rickshaw"],
  theme: "Orange",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 3, suffix: "", description: "Weekend duration", icon: "Calendar" },
  { id: "distance", label: "Total Distance", value: 1600, suffix: " KM", description: "Delhi-Varanasi Round Trip", icon: "Route" },
  { id: "budget", label: "Budget", value: 3.87, suffix: "K", prefix: "₹", description: "Per person (budget style)", icon: "Wallet" },
  { id: "altitude", label: "Elevation", value: 81, suffix: " M", description: "Ganges River Bank", icon: "TrendingUp" },
  { id: "passes", label: "Jyotirlingas", value: 1, suffix: "", description: "Kashi Vishwanath", icon: "MapPin" },
  { id: "destinations", label: "Major Stops", value: 4, suffix: "", description: "Kashi Vishwanath, Dashashwamedh Aarti, Sarnath, Assi Ghat", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "New Delhi (NDLS)", altitude: "214m", distance: "0 km", day: 0, date: "Friday Night", arrTime: "08:00 PM", depTime: "09:00 PM", transport: "Sleeper Train (Shiv Ganga Exp or similar)", icon: "Train" },
  { id: 2, location: "Varanasi (BSBS/BSB)", altitude: "81m", distance: "780 km", day: 1, date: "Saturday", arrTime: "08:30 AM", depTime: "09:30 AM", transport: "E-Rickshaw to Hostel/Hotel", icon: "Home" },
  { id: 3, location: "Kashi Vishwanath & Dashashwamedh Ghat", altitude: "81m", distance: "785 km", day: 1, date: "Saturday", arrTime: "11:00 AM", depTime: "08:00 PM", transport: "Walking / Boat", icon: "MapPin" },
  { id: 4, location: "Sarnath & Assi Ghat", altitude: "81m", distance: "800 km", day: 2, date: "Sunday", arrTime: "10:00 AM", depTime: "06:00 PM", transport: "Auto Rickshaw", icon: "MapPin" },
  { id: 5, location: "Varanasi Railway Station", altitude: "81m", distance: "805 km", day: 2, date: "Sunday Night", arrTime: "08:00 PM", depTime: "09:30 PM", transport: "Sleeper Train Return", icon: "Train" },
  { id: 6, location: "New Delhi (NDLS)", altitude: "214m", distance: "1600 km", day: 3, date: "Monday Morning", arrTime: "08:00 AM", depTime: "—", transport: "Arrive Home", icon: "Home" },
];

export const overviewCards = [
  { title: "Kashi Vishwanath Darshan", value: "Spiritual Peak", description: "Visit one of the holiest Shiva temples and navigate the newly built Kashi Vishwanath Corridor.", icon: "MapPin" },
  { title: "Ganga Aarti at Dashashwamedh Ghat", value: "Divine Experience", description: "Witness the grand evening Aarti ceremony by the banks of the sacred Ganges river.", icon: "TrendingUp" },
  { title: "Sarnath Excursion", value: "Buddhist Heritage", description: "Explore the ancient ruins and Dhamek Stupa where Lord Buddha gave his first sermon.", icon: "Compass" },
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
  expenseTracker: "expenses-varanasi",
  budgetCalculator: "budget-values-varanasi",
  completedTreks: "completed-treks-varanasi",
  packingChecklist: "packing-checklist-varanasi",
  completedDays: "completed-days-varanasi",
};
