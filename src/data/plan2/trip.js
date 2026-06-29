export const trip = {
  title: "Trek",
  subtitle: "An 8-day budget backpacking adventure across the Himalayas of Uttarakhand",
  duration: "3 Jul – 10 Jul",
  durationDays: 8,
  people: 3,
  budgetMin: 8400,
  budgetMax: 9400,
  difficulty: "Moderate to Hard",
  highestAltitude: "4000m+",
  totalDistance: "650 km",
  totalTrekDistance: "52 km",
  startingPoint: "Hisar",
  endingPoint: "Hisar",
  transport: ["Train", "Government Bus", "Shared Jeep", "Walking"],
  theme: "Light",
  version: "1.3.0",
  developer: "Trek Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 8, suffix: "", description: "Full expedition duration", icon: "Calendar" },
  { id: "treks", label: "Treks", value: 3, suffix: "", description: "Major trekking routes", icon: "Mountain" },
  { id: "walking", label: "Walking Distance", value: 52, suffix: " KM", description: "Total trek distance", icon: "Footprints" },
  { id: "budget", label: "Budget", value: 8.8, suffix: "K", prefix: "₹", description: "Per person estimate", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 4000, suffix: " M+", description: "Chandrashila summit", icon: "TrendingUp" },
  { id: "rafting", label: "River Rafting", value: 16, suffix: " KM", description: "Rishikesh stretch", icon: "Waves" },
  { id: "bus", label: "Bus Journey", value: 500, suffix: "+ KM", description: "Road travel total", icon: "Bus" },
  { id: "destinations", label: "Destinations", value: 8, suffix: "", description: "Key stops", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Hisar", altitude: "215m", distance: "0 km", day: 1, date: "3 Jul", depTime: "06:05 PM", transport: "Train", icon: "Home" },
  { id: 2, location: "Haridwar", altitude: "314m", distance: "290 km", day: 2, date: "4 Jul", arrTime: "03:40 AM", depTime: "05:00 AM", transport: "Train", icon: "Train" },
  { id: 3, location: "Sagar Village", altitude: "1800m", distance: "225 km", day: 2, date: "4 Jul", arrTime: "02:30 PM", depTime: "05:00 AM (Next Day)", transport: "Bus + Jeep", icon: "Mountain" },
  { id: 4, location: "Rudranath", altitude: "3600m", distance: "22 km", day: 3, date: "5 Jul", arrTime: "04:30 PM", depTime: "06:00 AM (Next Day)", transport: "Trek", icon: "Mountain" },
  { id: 5, location: "Gopeshwar", altitude: "1300m", distance: "67 km", day: 4, date: "6 Jul", arrTime: "04:00 PM", depTime: "05:00 AM (Next Day)", transport: "Trek + Jeep", icon: "MapPin" },
  { id: 6, location: "Chandrashila", altitude: "4000m", distance: "40 km", day: 5, date: "7 Jul", arrTime: "02:00 PM", depTime: "06:00 AM (Next Day)", transport: "Jeep + Trek", icon: "TrendingUp" },
  { id: 7, location: "Kartik Swami", altitude: "3050m", distance: "15 km", day: 6, date: "8 Jul", arrTime: "11:30 AM", depTime: "01:00 PM", transport: "Jeep + Trek", icon: "Mountain" },
  { id: 8, location: "Rishikesh", altitude: "372m", distance: "170 km", day: 6, date: "8 Jul", arrTime: "06:00 PM", depTime: "09:00 AM (Next Day)", transport: "Sumo/Bus", icon: "MapPin" },
  { id: 9, location: "Rafting Shivpuri", altitude: "340m", distance: "16 km", day: 7, date: "9 Jul", arrTime: "09:00 AM", depTime: "12:00 PM", transport: "Raft", icon: "Waves" },
  { id: 10, location: "Haridwar", altitude: "314m", distance: "25 km", day: 7, date: "9 Jul", arrTime: "02:00 PM", depTime: "08:30 PM", transport: "Bus/Auto", icon: "Train" },
  { id: 11, location: "Hisar", altitude: "215m", distance: "290 km", day: 8, date: "10 Jul", arrTime: "05:00 AM", transport: "Overnight Bus", icon: "Home" },
];

export const overviewCards = [
  { id: "duration", label: "Duration", value: "8 Days", icon: "Calendar", description: "3 Jul – 10 Jul 2026" },
  { id: "budget", label: "Budget", value: "₹8.5K–9.5K", icon: "Wallet", description: "Per person estimate" },
  { id: "difficulty", label: "Difficulty", value: "Mod–Hard", icon: "Activity", description: "Trekking experience needed" },
  { id: "people", label: "Travelers", value: "3 People", icon: "Users", description: "Group expedition" },
  { id: "transport", label: "Transport", value: "Multi-Mode", icon: "Bus", description: "Train, bus, jeep, trek" },
  { id: "distance", label: "Total Distance", value: "650 km", icon: "Route", description: "Road + trek combined" },
  { id: "altitude", label: "Highest Point", value: "4000m+", icon: "TrendingUp", description: "Chandrashila summit" },
  { id: "weather", label: "Season", value: "Monsoon", icon: "CloudRain", description: "Carry rain gear always" },
];

export const navLinks = [
  { id: "overview", label: "Overview" },
  { id: "timeline", label: "Timeline" },
  { id: "itinerary", label: "Itinerary" },
  { id: "transport", label: "Transport" },
  { id: "budget", label: "Budget" },
];

export const expenseCategories = [
  "Transport",
  "Accommodation",
  "Food",
  "Rafting",
  "Emergency",
  "Shopping",
  "Other",
];

export const STORAGE_KEYS = {
  tripProgress: "trip-progress-plan2",
  packingChecklist: "packing-checklist-plan2",
  expenseTracker: "expense-tracker-plan2",
  theme: "theme-plan2",
  completedDays: "completed-days-plan2",
  favoritePlaces: "favorite-places-plan2",
  completedTreks: "completed-treks-plan2",
  budgetCalculator: "budget-calculator-v9-plan2",
};