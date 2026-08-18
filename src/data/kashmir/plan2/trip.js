export const trip = {
  title: "Kashmir Valley Wanderer - Srinagar Bike Rental",
  subtitle: "A 6-day scenic self-ride expedition on a Royal Enfield Himalayan through Srinagar, Gulmarg, and Pahalgam",
  duration: "6 Days",
  durationDays: 6,
  people: 2,
  budgetMin: 8500,
  budgetMax: 13000,
  difficulty: "Easy",
  highestAltitude: "2,650m (Gulmarg Gondola Phase 1)",
  totalDistance: "1,700 km (Round Trip)",
  totalTrekDistance: "4 km",
  startingPoint: "Delhi",
  endingPoint: "Delhi",
  transport: ["Express Train (Sleeper)", "Local DEMU Train", "Shared Cabs", "Rented RE Himalayan"],
  theme: "Teal",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 6, suffix: "", description: "Valley exploration duration", icon: "Calendar" },
  { id: "distance", label: "Total Distance", value: 1700, suffix: " KM", description: "Delhi-Srinagar Round Trip", icon: "Route" },
  { id: "budget", label: "Budget", value: 9.3, suffix: "K", prefix: "₹", description: "Per person (2 people sharing bike/stay)", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 2650, suffix: " M", description: "Gulmarg Gondola Altitude", icon: "TrendingUp" },
  { id: "passes", label: "Valley Hikes", value: 2, suffix: "", description: "Gulmarg slopes & Pahalgam river walks", icon: "MapPin" },
  { id: "destinations", label: "Major Stops", value: 5, suffix: "", description: "Jammu, Srinagar, Gulmarg, Pahalgam, Banihal", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Delhi (NDLS / DLI)", altitude: "210m", distance: "0 km", day: 0, date: "Day 0 Night", arrTime: "08:00 PM", depTime: "08:30 PM", transport: "Jammu Mail Express (Sleeper)", icon: "Train" },
  { id: 2, location: "Jammu Tawi (Transit)", altitude: "327m", distance: "580 km", day: 1, date: "Day 1 Morning", arrTime: "07:30 AM", depTime: "08:15 AM", transport: "Shared Cab to Banihal", icon: "Bus" },
  { id: 3, location: "Banihal Station", altitude: "1,666m", distance: "750 km", day: 1, date: "Day 1 Afternoon", arrTime: "01:30 PM", depTime: "02:10 PM", transport: "Kashmir Valley DEMU Train", icon: "Train" },
  { id: 4, location: "Srinagar (Dal Lake)", altitude: "1,585m", distance: "830 km", day: 1, date: "Day 1 Evening", arrTime: "03:45 PM", depTime: "—", transport: "Pick up Himalayan, Ride to Houseboat", icon: "Home" },
  { id: 5, location: "Gulmarg Meadows", altitude: "2,650m", distance: "885 km", day: 2, date: "Day 2 Daytrip", arrTime: "09:30 AM", depTime: "05:00 PM", transport: "Self-ride RE Himalayan", icon: "Bus" },
  { id: 6, location: "Pahalgam Valley", altitude: "2,200m", distance: "925 km", day: 3, date: "Day 3 Daytrip", arrTime: "09:30 AM", depTime: "05:00 PM", transport: "Self-ride RE Himalayan", icon: "Bus" },
  { id: 7, location: "Srinagar (Local)", altitude: "1,585m", distance: "830 km", day: 4, date: "Day 4 Full Day", arrTime: "—", depTime: "—", transport: "Ride to Mughal Gardens & Old Town", icon: "Compass" },
  { id: 8, location: "Jammu (Return Transit)", altitude: "327m", distance: "1120 km", day: 5, date: "Day 5 Evening", arrTime: "05:30 PM", depTime: "08:10 PM", transport: "Drop bike, Train back to Delhi", icon: "Train" },
  { id: 9, location: "Delhi (NDLS)", altitude: "210m", distance: "1700 km", day: 6, date: "Day 6 Morning", arrTime: "07:00 AM", depTime: "—", transport: "Arrive NDLS", icon: "Home" },
];

export const overviewCards = [
  { title: "Srinagar Bike Adventure", value: "RE Himalayan Rental", description: "Enjoy the pure freedom of riding a Royal Enfield Himalayan across Kashmir's mountain highways and pine valleys.", icon: "TrendingUp" },
  { title: "Gulmarg Alpine Cruise", description: "Cruise through Magam and Tangmarg hairpins with a backdrop of pine-wood mountains and snow peaks.", icon: "Route" },
  { title: "Dal Lake Houseboat Stay", description: "Spend your nights on a floating wooden houseboat enjoying peaceful shikara rides and local Kahwa tea.", icon: "Home" },
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

export const expenseCategories = ["Transport", "Accommodation", "Food", "Sightseeing/Activities", "Shopping", "Other"];

export const STORAGE_KEYS = {
  expenseTracker: "expenses-kashmir-plan2",
  budgetCalculator: "budget-values-kashmir-plan2",
  completedTreks: "completed-treks-kashmir-plan2",
  packingChecklist: "packing-checklist-kashmir-plan2",
  completedDays: "completed-days-kashmir-plan2",
};
