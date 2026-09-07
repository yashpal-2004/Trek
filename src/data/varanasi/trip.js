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
  { id: 1, location: "Delhi (NDLS / DLI)", altitude: "214m", distance: "0 km", day: 0, date: "Sun Night", arrTime: "11:30 PM", depTime: "00:05 AM", transport: "Amrit Bharat Express", icon: "Train" },
  { id: 2, location: "BSB Station → Ramaya Homestay", altitude: "81m", distance: "780 km", day: 1, date: "Monday", arrTime: "12:00 PM", depTime: "01:00 PM", transport: "Auto / E-Rickshaw", icon: "Home" },
  { id: 3, location: "Kal Bhairav → Kashi Vishwanath → Lalita Ghat", altitude: "81m", distance: "785 km", day: 1, date: "Monday", arrTime: "01:30 PM", depTime: "05:00 PM", transport: "Walking / Alley Lane", icon: "MapPin" },
  { id: 4, location: "Manikarnika → Dashashwamedh Aarti → 7:30 PM Lalita Light Show", altitude: "81m", distance: "788 km", day: 1, date: "Monday", arrTime: "05:15 PM", depTime: "08:30 PM", transport: "Ghat Walk / Boat", icon: "MapPin" },
  { id: 5, location: "Assi Ghat Sunrise → Morning Boat & Poori-Jalebi", altitude: "81m", distance: "792 km", day: 2, date: "Tuesday", arrTime: "05:30 AM", depTime: "08:30 AM", transport: "E-Rickshaw / Boat", icon: "Compass" },
  { id: 6, location: "Durga Mandir → BHU VT (Cold Coffee & Samosa)", altitude: "81m", distance: "798 km", day: 2, date: "Tuesday", arrTime: "09:30 AM", depTime: "01:00 PM", transport: "Shared Auto", icon: "MapPin" },
  { id: 7, location: "Namo Ghat Sunset & Promenade", altitude: "81m", distance: "808 km", day: 2, date: "Tuesday", arrTime: "05:00 PM", depTime: "07:30 PM", transport: "Auto / E-Rickshaw", icon: "MapPin" },
  { id: 8, location: "Godowlia Food Walk → Banaras Station (BNRS)", altitude: "81m", distance: "815 km", day: 3, date: "Wednesday", arrTime: "09:00 AM", depTime: "01:30 PM", transport: "E-Rickshaw / Train", icon: "Train" },
  { id: 9, location: "New Delhi (NDLS)", altitude: "214m", distance: "1600 km", day: 4, date: "Thursday", arrTime: "05:45 AM", depTime: "—", transport: "Arrive Home", icon: "Home" },
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
  { id: "packing", label: "Packing" },
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
