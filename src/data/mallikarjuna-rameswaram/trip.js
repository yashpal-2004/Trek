export const trip = {
  title: "South India 2-Jyotirlinga Circuit",
  subtitle: "Mallikarjuna (Srisailam, AP) + Ramanathaswamy (Rameswaram, TN)",
  duration: "7 Days",
  durationDays: 7,
  people: 1,
  budgetMin: 8500,
  budgetMax: 10500,
  difficulty: "Moderate / Multi-State Transit",
  highestAltitude: "476m (Srisailam Hills)",
  totalDistance: "4200 km (Circuit Trip)",
  totalTrekDistance: "0 km",
  startingPoint: "New Delhi",
  endingPoint: "New Delhi",
  transport: ["Express Train", "State RTC Bus", "Pamban Bridge Rail/Road"],
  theme: "Orange",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 7, suffix: "", description: "7-day South Circuit", icon: "Calendar" },
  { id: "distance", label: "Total Distance", value: 4200, suffix: " KM", description: "Delhi – AP – TN Circuit", icon: "Route" },
  { id: "budget", label: "Budget", value: 9.5, suffix: "K", prefix: "₹", description: "Per person (budget style)", icon: "Wallet" },
  { id: "altitude", label: "Elevation", value: 476, suffix: " M", description: "Nallamala Hills, Srisailam", icon: "TrendingUp" },
  { id: "passes", label: "Jyotirlingas", value: 2, suffix: "", description: "Mallikarjuna & Rameswaram", icon: "MapPin" },
  { id: "destinations", label: "Major Stops", value: 5, suffix: "", description: "Srisailam Temple, Patalganga, Rameswaram Temple, 22 Theerthams, Dhanushkodi", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "New Delhi (NDLS)", altitude: "214m", distance: "0 km", day: 0, date: "Day 0 Evening", arrTime: "04:00 PM", depTime: "05:00 PM", transport: "Overnight Express Train to Markapur / Hyderabad", icon: "Train" },
  { id: 2, location: "Markapur Road / Hyderabad", altitude: "200m", distance: "1600 km", day: 1, date: "Day 1", arrTime: "02:00 PM", depTime: "03:00 PM", transport: "APSRTC Bus through Nallamala Forest", icon: "Bus" },
  { id: 3, location: "Srisailam (Mallikarjuna)", altitude: "476m", distance: "1700 km", day: 2, date: "Day 2", arrTime: "07:00 AM", depTime: "04:00 PM", transport: "Cable Car / Auto to Patalganga & Temple Darshan", icon: "MapPin" },
  { id: 4, location: "Madurai / Rameswaram Transit", altitude: "10m", distance: "2800 km", day: 4, date: "Day 4", arrTime: "06:00 AM", depTime: "07:30 AM", transport: "TNSTC Bus across Pamban Sea Bridge", icon: "Bus" },
  { id: 5, location: "Rameswaram (Ramanathaswamy & Dhanushkodi)", altitude: "10m", distance: "3000 km", day: 5, date: "Day 5", arrTime: "05:00 AM", depTime: "06:00 PM", transport: "22 Holy Wells Bathing + Dhanushkodi Jeep", icon: "MapPin" },
  { id: 6, location: "New Delhi (NDLS)", altitude: "214m", distance: "4200 km", day: 7, date: "Day 7", arrTime: "10:00 AM", depTime: "—", transport: "Return Express Train", icon: "Home" },
];

export const overviewCards = [
  { title: "Mallikarjuna (Srisailam)", value: "Nallamala Hills", description: "Worship at the sacred hill shrine overlooking Krishna River in Andhra Pradesh.", icon: "MapPin" },
  { title: "Ramanathaswamy (Rameswaram)", value: "22 Holy Theerthams", description: "Bathe in 22 sacred wells & marvel at the longest temple corridor in the world.", icon: "TrendingUp" },
  { title: "Dhanushkodi Ghost Town", value: "Land's End", description: "Visit the confluence of Indian Ocean & Bay of Bengal at the tip of Pamban Island.", icon: "Compass" },
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
  expenseTracker: "expenses-mallikarjuna-rameswaram",
  budgetCalculator: "budget-values-mallikarjuna-rameswaram",
  completedTreks: "completed-treks-mallikarjuna-rameswaram",
  packingChecklist: "packing-checklist-mallikarjuna-rameswaram",
  completedDays: "completed-days-mallikarjuna-rameswaram",
};
