import { somnathNageshwarAmounts } from "./amounts";

export const trip = {
  title: "Gujarat 2-Jyotirlinga Circuit — Solo General Unreserved Train Plan",
  subtitle: "An ultra-budget 4-day solo pilgrimage covering Somnath & Nageshwar by Unreserved General Class Train & Dharamshalas",
  duration: "4 Days",
  durationDays: 4,
  people: 1,
  budgetMin: 2200,
  budgetMax: 2800,
  difficulty: "Solo / Budget Backpacker",
  highestAltitude: "30m (Coastal Plain)",
  totalDistance: "2650 km (Round Trip)",
  totalTrekDistance: "0 km",
  startingPoint: "Delhi / Sonipat",
  endingPoint: "Delhi / Sonipat",
  transport: ["Unreserved General Class Train (GS)", "GSRTC Local Bus", "Shared E-Rickshaw"],
  theme: "Orange",
  version: "2.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 4, suffix: "", description: "Solo Unreserved Circuit", icon: "Calendar" },
  { id: "distance", label: "Total Distance", value: 2650, suffix: " KM", description: "Delhi-Gujarat Round Trip", icon: "Route" },
  { id: "budget", label: "Budget", value: (somnathNageshwarAmounts.budgetTotal / 1000).toFixed(1), suffix: "K", prefix: "₹", description: "Solo Backpacker Budget", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 30, suffix: " M", description: "Coastal Elevation", icon: "TrendingUp" },
  { id: "passes", label: "Jyotirlingas", value: 2, suffix: "", description: "Somnath & Nageshwar", icon: "MapPin" },
  { id: "destinations", label: "Major Stops", value: 6, suffix: "", description: "Somnath, Triveni Sangam, Dwarkadhish, Nageshwar, Gopi Talav, Beyt Dwarka", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Delhi / Sonipat", altitude: "220m", distance: "0 km", day: 0, date: "Day 0 Night", arrTime: "07:30 PM", depTime: "08:30 PM", transport: "Unreserved General Coach (GS Ticket ₹320)", icon: "Bus" },
  { id: 2, location: "Veraval Station → Somnath", altitude: "10m", distance: "1350 km", day: 1, date: "Day 1 Afternoon", arrTime: "02:30 PM", depTime: "09:00 PM", transport: "Shared Auto (₹20) & Temple Darshan", icon: "Home" },
  { id: 3, location: "Somnath → Porbandar → Dwarka", altitude: "15m", distance: "1580 km", day: 2, date: "Day 2 Morning", arrTime: "06:00 AM", depTime: "01:00 PM", transport: "GSRTC Local Bus (₹220)", icon: "Bus" },
  { id: 4, location: "Dwarkadhish & Gomti Ghat", altitude: "10m", distance: "1585 km", day: 2, date: "Day 2 Afternoon", arrTime: "02:00 PM", depTime: "08:00 PM", transport: "Walking & Temple Aarti", icon: "MapPin" },
  { id: 5, location: "Nageshwar Jyotirlinga & Beyt Dwarka", altitude: "10m", distance: "1630 km", day: 3, date: "Day 3 Full Day", arrTime: "08:00 AM", depTime: "05:00 PM", transport: "Shared Auto (₹80) / Ferry (₹20)", icon: "MapPin" },
  { id: 6, location: "Dwarka Station → Delhi Return", altitude: "10m", distance: "2650 km", day: 4, date: "Day 4 Evening", arrTime: "08:00 PM", depTime: "—", transport: "Unreserved General Coach Return (₹330)", icon: "Home" },
];

export const overviewCards = [
  { title: "Solo General Class Transit", value: "Unreserved Train (₹320)", description: "Travel budget-friendly in Unreserved General Class (GS) coaches directly from Delhi to Veraval & return from Dwarka.", icon: "Compass" },
  { title: "2 First & Sacred Jyotirlingas", value: "Somnath & Nageshwar", description: "Visit the 1st Jyotirlinga (Somnath) and Nageshwar Jyotirlinga with minimal expenditure and maximum solo flexibility.", icon: "MapPin" },
  { title: "Dharamshala & Bhojanalay Stay", value: "₹250/Night Stay", description: "Stay at Somnath Trust Dharamshala dorms and enjoy authentic ₹100 thalis at local temple Annakshetras.", icon: "TrendingUp" },
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

export const expenseCategories = ["Transport", "Accommodation", "Food", "Permits", "Emergency", "Shopping", "Other"];

export const STORAGE_KEYS = {
  expenseTracker: "expenses-somnath-nageshwar-plan2",
  budgetCalculator: "budget-values-somnath-nageshwar-plan2",
  completedTreks: "completed-treks-somnath-nageshwar-plan2",
  packingChecklist: "packing-checklist-somnath-nageshwar-plan2",
  completedDays: "completed-days-somnath-nageshwar-plan2",
};
