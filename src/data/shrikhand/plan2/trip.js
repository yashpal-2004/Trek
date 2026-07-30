export const trip = {
  title: "Shrikhand Mahadev Trek (Express Route)",
  subtitle: "A fast-paced 6-day direct trek to 17,150 ft Shrikhand Mahadev summit departing Hisar late night",
  duration: "15 Jul – 21 Jul 2026",
  durationDays: 6,
  people: 2,
  budgetMin: 6000,
  budgetMax: 7200,
  difficulty: "Strenuous / Hard",
  highestAltitude: "5,227m (17,150 ft)",
  totalDistance: "720 km Transit + 64 km Trek",
  totalTrekDistance: "64 km",
  startingPoint: "Hisar",
  endingPoint: "Hisar",
  transport: ["Express Bus", "Shared Taxi", "High-Altitude Trekking"],
  theme: "Light",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 6, suffix: "", description: "Direct express expedition", icon: "Calendar" },
  { id: "treks", label: "Peak Altitude", value: 5227, suffix: " M", description: "17,150 FT Shrikhand Rock", icon: "Mountain" },
  { id: "walking", label: "Trek Distance", value: 64, suffix: " KM", description: "Jaon to Summit & back", icon: "Footprints" },
  { id: "budget", label: "Est. Budget", value: 6.6, suffix: "K", prefix: "₹", description: "Per person estimate", icon: "Wallet" },
  { id: "altitude", label: "Base Camp", value: 1850, suffix: " M", description: "Jaon Village", icon: "TrendingUp" },
  { id: "bus", label: "Total Journey", value: 784, suffix: " KM", description: "Transit & Trekking", icon: "Route" },
  { id: "destinations", label: "Key Stops", value: 6, suffix: "", description: "Singhad, Thachru, Bhim Dwar", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Hisar", altitude: "215m", distance: "0 km", day: 1, date: "15 Jul", depTime: "10:00 PM", transport: "Overnight Bus", icon: "Home" },
  { id: 2, location: "Rampur Bushahr", altitude: "1012m", distance: "365 km", day: 2, date: "16 Jul", arrTime: "07:00 AM", depTime: "09:00 AM", transport: "Bus", icon: "MapPin" },
  { id: 3, location: "Jaon Village", altitude: "1850m", distance: "55 km", day: 2, date: "16 Jul", arrTime: "11:30 AM", depTime: "05:30 AM (Next Day)", transport: "Shared Taxi", icon: "Mountain" },
  { id: 4, location: "Thachru Camp", altitude: "3200m", distance: "14 km", day: 3, date: "17 Jul", arrTime: "04:00 PM", depTime: "06:00 AM (Next Day)", transport: "Trek", icon: "Mountain" },
  { id: 5, location: "Bhim Dwar", altitude: "3800m", distance: "10 km", day: 4, date: "18 Jul", arrTime: "01:00 PM", depTime: "02:30 AM (Next Day)", transport: "Trek", icon: "Mountain" },
  { id: 6, location: "Shrikhand Mahadev", altitude: "5227m", distance: "7 km", day: 5, date: "19 Jul", arrTime: "08:30 AM", depTime: "10:30 AM", transport: "Trek", icon: "TrendingUp" },
  { id: 7, location: "Thachru Camp", altitude: "3200m", distance: "25 km", day: 5, date: "19 Jul", arrTime: "07:00 PM", depTime: "06:00 AM (Next Day)", transport: "Trek Full Descent", icon: "Mountain" },
  { id: 8, location: "Jaon / Rampur", altitude: "1012m", distance: "11 km", day: 6, date: "20 Jul", arrTime: "12:30 PM", depTime: "02:00 PM", transport: "Trek + Taxi", icon: "MapPin" },
  { id: 9, location: "Shimla", altitude: "2276m", distance: "185 km", day: 6, date: "20 Jul", arrTime: "06:00 PM", depTime: "07:00 AM (Next Day)", transport: "Bus", icon: "MapPin" },
  { id: 10, location: "Hisar", altitude: "215m", distance: "235 km", day: 7, date: "21 Jul", arrTime: "01:00 PM", transport: "Bus", icon: "Home" },
];

export const overviewCards = [
  { id: "duration", label: "Duration", value: "6 Days", icon: "Calendar", description: "15 Jul – 21 Jul 2026" },
  { id: "budget", label: "Budget", value: "₹6K–7.2K", icon: "Wallet", description: "Per person estimate" },
  { id: "difficulty", label: "Difficulty", value: "Strenuous", icon: "Activity", description: "Extreme fitness required" },
  { id: "people", label: "Travelers", value: "2 People", icon: "Users", description: "Small group express" },
  { id: "transport", label: "Transport", value: "Overnight Bus", icon: "Bus", description: "Overnight Hisar → Rampur" },
  { id: "distance", label: "Total Distance", value: "784 km", icon: "Route", description: "Transit + 64 km trek" },
  { id: "altitude", label: "Highest Point", value: "5,227m (17,150 ft)", icon: "TrendingUp", description: "Shrikhand Mahadev summit" },
  { id: "weather", label: "Season", value: "Jul Yatra", icon: "CloudRain", description: "Official Yatra season only" },
];

export const navLinks = [
  { id: "overview", label: "Overview" },
  { id: "routemap", label: "Map" },
  { id: "timeline", label: "Timeline" },
  { id: "itinerary", label: "Itinerary" },
  { id: "transport", label: "Transport" },
  { id: "stay", label: "Stay" },
  { id: "budget", label: "Budget" },
  { id: "expenses", label: "Expenses" },
  { id: "resources", label: "Guides" },
];

export const expenseCategories = [
  "Transport",
  "Accommodation",
  "Food",
  "Emergency",
  "Shopping",
  "Other",
];

export const STORAGE_KEYS = {
  tripProgress: "trip-progress-shrikhand-plan2",
  packingChecklist: "packing-checklist-shrikhand-plan2",
  expenseTracker: "expense-tracker-shrikhand-plan2",
  theme: "theme-shrikhand-plan2",
  completedDays: "completed-days-shrikhand-plan2",
  favoritePlaces: "favorite-places-shrikhand-plan2",
  completedTreks: "completed-treks-shrikhand-plan2",
  budgetCalculator: "budget-calculator-shrikhand-plan2",
};
