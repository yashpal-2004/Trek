export const trip = {
  title: "Rudranath & Tungnath Trek",
  subtitle: "A 9-day budget backpacking adventure across the Himalayas of Uttarakhand",
  duration: "2 Jul – 10 Jul",
  durationDays: 9,
  people: 3,
  budgetMin: 8500,
  budgetMax: 9500,
  difficulty: "Moderate to Hard",
  highestAltitude: "4000m+",
  totalDistance: "1246 km",
  totalTrekDistance: "60 km",
  startingPoint: "Hisar",
  endingPoint: "Hisar",
  transport: ["Train", "Government Bus", "Shared Jeep", "Walking"],
  theme: "Light",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 9, suffix: "", description: "Full expedition duration", icon: "Calendar" },
  { id: "treks", label: "Treks", value: 3, suffix: "", description: "Major trekking routes", icon: "Mountain" },
  { id: "walking", label: "Walking Distance", value: 60, suffix: " KM", description: "Total trek distance", icon: "Footprints" },
  { id: "budget", label: "Budget", value: 8.9, suffix: "K", prefix: "₹", description: "Per person estimate", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 4000, suffix: " M+ (13,123 FT)", description: "Chandrashila summit", icon: "TrendingUp" },
  { id: "bus", label: "Total Journey", value: 1246, suffix: " KM", description: "All transport modes", icon: "Route" },
  { id: "destinations", label: "Destinations", value: 10, suffix: "+", description: "Places to explore", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Hisar", altitude: "215m", distance: "0 km", day: 1, date: "2 Jul", depTime: "03:55 AM", transport: "Train", icon: "Home" },
  { id: 2, location: "Haridwar", altitude: "314m", distance: "290 km", day: 1, date: "2 Jul", arrTime: "03:00 PM", depTime: "07:00 AM (Next Day)", transport: "Train", icon: "Train" },
  { id: 3, location: "Sagar Village", altitude: "1800m", distance: "225 km", day: 2, date: "3 Jul", arrTime: "02:30 PM", depTime: "05:00 AM (Next Day)", transport: "Bus + Jeep", icon: "Mountain" },
  { id: 4, location: "Rudranath", altitude: "3600m", distance: "22 km", day: 3, date: "4 Jul", arrTime: "04:30 PM", depTime: "06:00 AM (Next Day)", transport: "Trek", icon: "Mountain" },
  { id: 5, location: "Gopeshwar", altitude: "1300m", distance: "67 km", day: 4, date: "5 Jul", arrTime: "04:00 PM", depTime: "05:00 AM (Next Day)", transport: "Trek + Jeep", icon: "MapPin" },
  { id: 6, location: "Chandrashila", altitude: "4000m", distance: "40 km", day: 5, date: "6 Jul", arrTime: "02:00 PM", depTime: "06:00 AM (Next Day)", transport: "Jeep + Trek", icon: "TrendingUp" },
  { id: 7, location: "Kartik Swami", altitude: "3050m", distance: "15 km", day: 6, date: "7 Jul", arrTime: "11:30 AM", depTime: "01:00 PM", transport: "Jeep + Trek", icon: "Mountain" },
  { id: 8, location: "Rishikesh", altitude: "372m", distance: "170 km", day: 6, date: "7 Jul", arrTime: "06:00 PM", depTime: "09:00 AM (Next Day)", transport: "Sumo/Bus", icon: "MapPin" },
  { id: 9, location: "Haridwar", altitude: "314m", distance: "25 km", day: 8, date: "9 Jul", arrTime: "02:00 PM", depTime: "08:30 PM", transport: "Bus/Auto", icon: "Train" },
  { id: 10, location: "Hisar", altitude: "215m", distance: "290 km", day: 9, date: "10 Jul", arrTime: "05:00 AM", transport: "Overnight Bus", icon: "Home" },
];

export const overviewCards = [
  { id: "duration", label: "Duration", value: "9 Days", icon: "Calendar", description: "2 Jul – 10 Jul 2026" },
  { id: "budget", label: "Budget", value: "₹8.5K–9.5K", icon: "Wallet", description: "Per person estimate" },
  { id: "difficulty", label: "Difficulty", value: "Mod–Hard", icon: "Activity", description: "Trekking experience needed" },
  { id: "people", label: "Travelers", value: "3 People", icon: "Users", description: "Group expedition" },
  { id: "transport", label: "Transport", value: "Multi-Mode", icon: "Bus", description: "Train, bus, jeep, trek" },
  { id: "distance", label: "Total Distance", value: "1246 km", icon: "Route", description: "Road + trek combined" },
  { id: "altitude", label: "Highest Point", value: "4000m+ (13,123 ft)", icon: "TrendingUp", description: "Chandrashila summit" },
  { id: "weather", label: "Season", value: "Monsoon", icon: "CloudRain", description: "Carry rain gear always" },
];

export const navLinks = [
  { id: "overview", label: "Overview" },
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
  tripProgress: "trip-progress-plan1",
  packingChecklist: "packing-checklist-plan1",
  expenseTracker: "expense-tracker-plan1",
  theme: "theme-plan1",
  completedDays: "completed-days-plan1",
  favoritePlaces: "favorite-places-plan1",
  completedTreks: "completed-treks-plan1",
  budgetCalculator: "budget-calculator-v6-plan1",
};