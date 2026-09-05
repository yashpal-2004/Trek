import { somnathNageshwarAmounts } from "./amounts";

export const trip = {
  title: "Gujarat 2-Jyotirlinga Circuit — Somnath & Nageshwar (with Dwarkadhish & Beyt Dwarka)",
  subtitle: "A 4-day spiritual pilgrimage covering Somnath & Nageshwar Jyotirlingas from Delhi / Sonipat",
  duration: "4 Days",
  durationDays: 4,
  people: 2,
  budgetMin: 4800,
  budgetMax: 5500,
  difficulty: "Easy / Spiritual",
  highestAltitude: "30m (Coastal Plain)",
  totalDistance: "2650 km (Round Trip)",
  totalTrekDistance: "0 km",
  startingPoint: "Delhi / Sonipat",
  endingPoint: "Delhi / Sonipat",
  transport: ["Express Train (Sleeper)", "GSRTC State Bus", "Shared Auto / Local Cab"],
  theme: "Orange",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 4, suffix: "", description: "Circuit duration from Delhi", icon: "Calendar" },
  { id: "distance", label: "Total Distance", value: 2650, suffix: " KM", description: "Delhi-Gujarat Circuit", icon: "Route" },
  { id: "budget", label: "Budget", value: 5.2, suffix: "K", prefix: "₹", description: "Per person (2 sharing)", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 30, suffix: " M", description: "Coastal Elevation", icon: "TrendingUp" },
  { id: "passes", label: "Jyotirlingas", value: 2, suffix: "", description: "Somnath & Nageshwar", icon: "MapPin" },
  { id: "destinations", label: "Major Stops", value: 6, suffix: "", description: "Somnath Temple, Triveni Sangam, Dwarkadhish Mandir, Nageshwar Jyotirlinga, Gopi Talav, Beyt Dwarka", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Delhi / Sonipat", altitude: "220m", distance: "0 km", day: 0, date: "Day 0 Night", arrTime: "08:00 PM", depTime: "09:00 PM", transport: "Jabalpur / Veraval Express Train", icon: "Bus" },
  { id: 2, location: "Veraval Station → Somnath", altitude: "10m", distance: "1350 km", day: 1, date: "Day 1 Afternoon", arrTime: "02:30 PM", depTime: "09:00 PM", transport: "Auto / Temple Visit & Sound Light Show", icon: "Home" },
  { id: 3, location: "Somnath → Porbandar → Dwarka", altitude: "15m", distance: "1580 km", day: 2, date: "Day 2 Morning", arrTime: "06:00 AM", depTime: "01:00 PM", transport: "GSRTC Express Bus", icon: "Bus" },
  { id: 4, location: "Dwarkadhish & Gomti Ghat", altitude: "10m", distance: "1585 km", day: 2, date: "Day 2 Afternoon", arrTime: "02:00 PM", depTime: "08:00 PM", transport: "Walking & Aarti", icon: "MapPin" },
  { id: 5, location: "Nageshwar Jyotirlinga & Beyt Dwarka", altitude: "10m", distance: "1630 km", day: 3, date: "Day 3 Full Day", arrTime: "08:00 AM", depTime: "05:00 PM", transport: "Auto / Boat Ferry", icon: "MapPin" },
  { id: 6, location: "Dwarka Station → Delhi Return", altitude: "10m", distance: "2650 km", day: 4, date: "Day 4 Evening", arrTime: "08:00 PM", depTime: "—", transport: "Return Express Train (Uttaranchal / Dwarka Exp)", icon: "Home" },
];

export const overviewCards = [
  { title: "2 First & Sacred Jyotirlingas", value: "Somnath & Nageshwar", description: "Visit the 1st Jyotirlinga (Somnath on Arabian Sea) & Nageshwar (Darukavana) in a budget 4-day loop.", icon: "MapPin" },
  { title: "Dwarkadhish & Beyt Dwarka", value: "Lord Krishna Realm", description: "Combine your Jyotirlinga Yatra with sacred Darshan at Jagat Mandir Dwarkadhish & island of Beyt Dwarka.", icon: "TrendingUp" },
  { title: "Direct Train Transit", value: "Delhi - Saurashtra Line", description: "Direct overnight sleeper train connectivity from Delhi to Veraval/Somnath and return from Dwarka.", icon: "Compass" },
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
  expenseTracker: "expenses-somnath-nageshwar",
  budgetCalculator: "budget-values-somnath-nageshwar",
  completedTreks: "completed-treks-somnath-nageshwar",
  packingChecklist: "packing-checklist-somnath-nageshwar",
  completedDays: "completed-days-somnath-nageshwar",
};
