export const trip = {
  title: "Yulla Kanda Trek — Plan 3 (Direct Bus Transit / Budget Trek)",
  subtitle: "A 4-day budget trek to Yulla Kanda via HRTC state bus & local jeep, without scooty rental or extra Shimla stays",
  duration: "Custom Dates",
  durationDays: 4,
  people: 4,
  budgetMin: 4800,
  budgetMax: 5500,
  difficulty: "Easy-to-Moderate",
  highestAltitude: "3,895m (12,779 ft)",
  totalDistance: "1110 km",
  totalTrekDistance: "24 km",
  startingPoint: "Delhi",
  endingPoint: "Delhi",
  transport: ["Bus", "Bolero/Jeep", "Trekking"],
  theme: "Teal",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 4, suffix: "", description: "Full trip duration", icon: "Calendar" },
  { id: "walking", label: "Walking/Trek", value: 24, suffix: " KM", description: "Yulla Khas to lake & back", icon: "Footprints" },
  { id: "budget", label: "Budget", value: 5.2, suffix: "K", prefix: "₹", description: "Per person estimate", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 3895, suffix: " M (12,779 FT)", description: "Krishna Temple Lake", icon: "TrendingUp" },
  { id: "distance", label: "Total Distance", value: 1110, suffix: " KM", description: "Direct bus & trek route", icon: "Route" },
  { id: "destinations", label: "Destinations", value: 3, suffix: "", description: "Major stops visited", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Delhi", altitude: "215m", distance: "0 km", day: 0, date: "Day 0", arrTime: "—", depTime: "09:00 PM", transport: "Volvo / HRTC Bus", icon: "Bus" },
  { id: 2, location: "Shimla", altitude: "2276m", distance: "340 km", day: 1, date: "Day 1", arrTime: "06:00 AM", depTime: "07:30 AM", transport: "HRTC Bus", icon: "Bus" },
  { id: 3, location: "Tapri / Yulla Khas", altitude: "2195m", distance: "210 km", day: 1, date: "Day 1", arrTime: "03:30 PM", depTime: "—", transport: "Bolero / Walking", icon: "Home" },
  { id: 4, location: "Yulla Kanda Lake", altitude: "3895m", distance: "12 km (Trek)", day: 2, date: "Day 2", arrTime: "10:30 AM", depTime: "11:30 AM", transport: "Trek", icon: "TrendingUp" },
  { id: 5, location: "Yulla Khas", altitude: "2195m", distance: "12 km (Trek)", day: 2, date: "Day 2", arrTime: "05:00 PM", depTime: "08:00 AM (Day 3)", transport: "Trek", icon: "Home" },
  { id: 6, location: "Tapri / Shimla", altitude: "2276m", distance: "210 km", day: 3, date: "Day 3", arrTime: "04:30 PM", depTime: "08:30 PM", transport: "HRTC Bus", icon: "Bus" },
  { id: 7, location: "Delhi", altitude: "215m", distance: "340 km", day: 4, date: "Day 4", arrTime: "06:30 AM", depTime: "—", transport: "Overnight Bus", icon: "Bus" },
];

export const overviewCards = [
  { title: "Highest Krishna Temple", value: "12,779 ft", description: "Home to the world's highest Krishna Temple and a sacred glacial lake.", icon: "TrendingUp" },
  { title: "Kinnauri Culture", value: "Local Traditions", description: "Experience homestays in Yulla Khas and witness the traditional cap-floating custom.", icon: "Smile" },
  { title: "Pure Trek Focus", value: "No Extra Cities", description: "Direct budget public transit route with zero extra urban hotel costs.", icon: "Mountain" },
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
  expenseTracker: "expenses-yulla-p3",
  budgetCalculator: "budget-values-yulla-p3",
  completedTreks: "completed-treks-yulla-p3",
  packingChecklist: "packing-checklist-yulla-p3",
  completedDays: "completed-days-yulla-p3",
};
