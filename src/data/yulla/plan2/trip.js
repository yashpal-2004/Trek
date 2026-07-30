export const trip = {
  title: "Yulla Kanda Trek & Shimla — Plan 1 (Continuous Scooty)",
  subtitle: "A 5-day adventure renting a scooty in Shimla and riding it up to the Yulla Khas base village in Kinnaur, followed by Shimla exploration",
  duration: "Custom Dates",
  durationDays: 5,
  people: 4,
  budgetMin: 7300,
  budgetMax: 8500,
  difficulty: "Moderate",
  highestAltitude: "3,895m (12,779 ft)",
  totalDistance: "1250 km",
  totalTrekDistance: "24 km",
  startingPoint: "Delhi",
  endingPoint: "Delhi",
  transport: ["Bus", "Scooty", "Trekking"],
  theme: "Teal",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 5, suffix: "", description: "Full trip duration", icon: "Calendar" },
  { id: "walking", label: "Walking/Trek", value: 24, suffix: " KM", description: "Yulla Khas to lake & back", icon: "Footprints" },
  { id: "budget", label: "Budget", value: 7.5, suffix: "K", prefix: "₹", description: "Per person estimate", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 3895, suffix: " M (12,779 FT)", description: "Krishna Temple Lake", icon: "TrendingUp" },
  { id: "distance", label: "Total Distance", value: 1250, suffix: " KM", description: "Bus & continuous scooty ride", icon: "Route" },
  { id: "destinations", label: "Destinations", value: 4, suffix: "", description: "Major stops visited", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Delhi", altitude: "215m", distance: "0 km", day: 0, date: "Day 0", arrTime: "—", depTime: "09:00 PM", transport: "Volvo / HRTC Bus", icon: "Bus" },
  { id: 2, location: "Shimla", altitude: "2276m", distance: "340 km", day: 1, date: "Day 1", arrTime: "06:00 AM", depTime: "08:30 AM", transport: "Rent Scooty", icon: "Compass" },
  { id: 3, location: "Yulla Khas", altitude: "2195m", distance: "210 km (Scooty)", day: 1, date: "Day 1", arrTime: "04:30 PM", depTime: "—", transport: "Scooty Ride", icon: "Home" },
  { id: 4, location: "Yulla Kanda Lake", altitude: "3895m", distance: "12 km (Trek)", day: 2, date: "Day 2", arrTime: "10:30 AM", depTime: "11:30 AM", transport: "Trek", icon: "TrendingUp" },
  { id: 5, location: "Yulla Khas", altitude: "2195m", distance: "12 km (Trek)", day: 2, date: "Day 2", arrTime: "05:00 PM", depTime: "08:00 AM (Day 3)", transport: "Trek", icon: "Home" },
  { id: 6, location: "Shimla", altitude: "2276m", distance: "210 km (Scooty)", day: 3, date: "Day 3", arrTime: "04:30 PM", depTime: "—", transport: "Scooty Ride", icon: "Compass" },
  { id: 7, location: "Shimla Sightseeing", altitude: "2276m", distance: "40 km", day: 4, date: "Day 4", arrTime: "—", depTime: "09:30 PM", transport: "Scooty", icon: "Route" },
  { id: 8, location: "Delhi", altitude: "215m", distance: "340 km", day: 5, date: "Day 5", arrTime: "06:30 AM", depTime: "—", transport: "Overnight Bus", icon: "Bus" },
];

export const overviewCards = [
  { title: "Highest Krishna Temple", value: "12,779 ft", description: "Home to the world's highest Krishna Temple and a sacred glacial lake.", icon: "TrendingUp" },
  { title: "Kinnauri Culture", value: "Local Traditions", description: "Experience homestays in Yulla Khas and witness the traditional cap-floating custom.", icon: "Smile" },
  { title: "Verdant Meadows", value: "Oak & Pine Forests", description: "Trek through pristine dense forests opening up into gorgeous alpine pastures.", icon: "Mountain" },
];

export const navLinks = [
  { id: "overview", label: "Overview" },
  { id: "itinerary", label: "Itinerary" },
  { id: "transport", label: "Transport" },
  { id: "stay", label: "Stay" },
  { id: "budget", label: "Budget" },
  { id: "expenses", label: "Expenses" },
  { id: "resources", label: "Guides" },
];

export const expenseCategories = ["Transport", "Accommodation", "Food", "Permits", "Emergency", "Shopping", "Other"];

export const STORAGE_KEYS = {
  expenseTracker: "expenses-yulla",
  budgetCalculator: "budget-values-yulla",
  completedTreks: "completed-treks-yulla",
  packingChecklist: "packing-checklist-yulla",
  completedDays: "completed-days-yulla",
};
