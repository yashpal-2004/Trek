export const trip = {
  title: "Moon Peak Dhauladhar Summit Expedition",
  subtitle: "A 4-day ultra-budget solo summit climb from Delhi to Moon Peak (4,650m / 15,250 ft) via Unreserved Train & HRTC bus",
  duration: "4 Days",
  durationDays: 4,
  people: 1,
  budgetMin: 2500,
  budgetMax: 3500,
  difficulty: "Hard / Alpine Climb",
  highestAltitude: "4,650m (Moon Peak Summit)",
  totalDistance: "1,050 km (Round Trip)",
  totalTrekDistance: "36 km",
  startingPoint: "Delhi / Sonipat",
  endingPoint: "Delhi / Sonipat",
  transport: ["Unreserved General Express Train", "HRTC Mountain Bus", "Shared Auto", "High Altitude Alpine Trek"],
  theme: "Purple",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 4, suffix: "", description: "High altitude expedition duration", icon: "Calendar" },
  { id: "distance", label: "Total Distance", value: 1050, suffix: " KM", description: "Delhi-Pathankot-Dharamkot Round Trip", icon: "Route" },
  { id: "budget", label: "Budget", value: 2.95, suffix: "K", prefix: "₹", description: "Total Solo Expedition Cost", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 4650, suffix: " M", description: "Moon Peak Summit (15,250 ft)", icon: "TrendingUp" },
  { id: "passes", label: "Trek Camps", value: 3, suffix: "", description: "Triund, Laka Got & Lahesh Cave", icon: "MapPin" },
  { id: "destinations", label: "Major Stops", value: 5, suffix: "", description: "Delhi, Pathankot, Dharamkot, Triund, Summit", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Old Delhi Railway Station", altitude: "220m", distance: "0 km", day: 0, date: "Day 0 Night", arrTime: "09:30 PM", depTime: "10:10 PM", transport: "Unreserved General Train to Pathankot", icon: "Train" },
  { id: 2, location: "Pathankot Junction & Bus Stand", altitude: "330m", distance: "480 km", day: 1, date: "Day 1 Morning", arrTime: "06:00 AM", depTime: "06:45 AM", transport: "HRTC Ordinary Bus to Dharamshala", icon: "Bus" },
  { id: 3, location: "Dharamkot Trailhead", altitude: "1,750m", distance: "560 km", day: 1, date: "Day 1 Morning", arrTime: "10:30 AM", depTime: "11:00 AM", transport: "Begin Alpine Trek via Gallu Temple", icon: "Compass" },
  { id: 4, location: "Triund Top Ridge", altitude: "2,850m", distance: "569 km", day: 1, date: "Day 1 Afternoon", arrTime: "03:30 PM", depTime: "—", transport: "Camp Overnight at Triund", icon: "Home" },
  { id: 5, location: "Laka Got Glacial Base Camp", altitude: "3,300m", distance: "575 km", day: 2, date: "Day 2 Afternoon", arrTime: "01:30 PM", depTime: "—", transport: "Camp Base & Snowline Rest", icon: "Tent" },
  { id: 6, location: "Moon Peak Summit Push", altitude: "4,650m", distance: "581 km", day: 3, date: "Day 3 Morning", arrTime: "09:30 AM", depTime: "11:00 AM", transport: "Scree & Ridge Summit Scramble", icon: "TrendingUp" },
  { id: 7, location: "Return Descent to Dharamkot", altitude: "1,750m", distance: "598 km", day: 4, date: "Day 4 Afternoon", arrTime: "02:00 PM", depTime: "03:30 PM", transport: "HRTC Bus & Return Unreserved Train", icon: "Train" }
];

export const overviewCards = [
  { title: "15,250 ft Moon Peak Summit", value: "360° Dhauladhar Peak", description: "Unmatched summit vistas overlooking Indrahar Pass, Kangra Valley, and Chamba alpine mountain chains.", icon: "TrendingUp" },
  { title: "Glacial Meadows & Lahesh Cave", description: "Camp beside Laka Glacier and cross the legendary shepherds' rock shelter of Lahesh Cave.", icon: "MapPin" },
  { title: "Ultra Budget Delhi Transit", description: "Engineered ultra-budget route utilizing general unreserved express trains & local HRTC bus connections.", icon: "Wallet" },
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

export const expenseCategories = ["Transport", "Accommodation", "Food", "Permits/Forest Entry", "Shopping", "Other"];

export const STORAGE_KEYS = {
  activeTab: "moon_peak_active_tab",
  completedDays: "moon_peak_completed_days",
  customExpenses: "moon_peak_custom_expenses",
  customNotes: "moon_peak_custom_notes",
  packingChecked: "moon_peak_packing_checked"
};
