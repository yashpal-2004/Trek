export const trip = {
  title: "Auli Snow & Ski Adventure",
  subtitle: "A 5-day adventure trip from Sonipat to Auli via Joshimath, featuring skiing, cable cars, and alpine meadow hikes",
  duration: "5 Days",
  durationDays: 5,
  people: 2,
  budgetMin: 5500,
  budgetMax: 9500,
  difficulty: "Easy / Moderate",
  highestAltitude: "3,050m (Auli Bugyal)",
  totalDistance: "1,100 km (Round Trip)",
  totalTrekDistance: "6 km",
  startingPoint: "Sonipat",
  endingPoint: "Sonipat",
  transport: ["Ordinary Bus", "GMOU Local Bus", "Joshimath-Auli Ropeway"],
  theme: "Blue",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 5, suffix: "", description: "Winter adventure duration", icon: "Calendar" },
  { id: "distance", label: "Total Distance", value: 1100, suffix: " KM", description: "Sonipat-Joshimath Round Trip", icon: "Route" },
  { id: "budget", label: "Budget", value: 6, suffix: "K", prefix: "₹", description: "Per person (2 people sharing)", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 3050, suffix: " M", description: "Auli Ski Slopes Altitude", icon: "TrendingUp" },
  { id: "passes", label: "Trek Trails", value: 2, suffix: "", description: "Auli-Gorson Bugyal hike", icon: "MapPin" },
  { id: "destinations", label: "Major Stops", value: 4, suffix: "", description: "Haridwar, Joshimath, Auli Bugyal, Gorson", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Sonipat (Boarding)", altitude: "220m", distance: "0 km", day: 0, date: "Day 0 Night", arrTime: "09:30 PM", depTime: "10:00 PM", transport: "Ordinary Bus", icon: "Bus" },
  { id: 2, location: "Rishikesh / Haridwar", altitude: "340m", distance: "210 km", day: 1, date: "Day 1 Morning", arrTime: "04:30 AM", depTime: "05:30 AM", transport: "GMOU Local Bus", icon: "Bus" },
  { id: 3, location: "Joshimath (Base)", altitude: "1,875m", distance: "470 km", day: 1, date: "Day 1 Evening", arrTime: "05:00 PM", depTime: "—", transport: "Check in Hotel", icon: "Home" },
  { id: 4, location: "Auli Slopes", altitude: "2,750m", distance: "486 km", day: 2, date: "Day 2 Morning", arrTime: "09:30 AM", depTime: "04:00 PM", transport: "Ropeway (Cable Car)", icon: "TrendingUp" },
  { id: 5, location: "Gorson Bugyal (Hike)", altitude: "3,050m", distance: "490 km", day: 3, date: "Day 3 Morning", arrTime: "10:00 AM", depTime: "02:00 PM", transport: "Trekking", icon: "Compass" },
  { id: 6, location: "Joshimath (Departure)", altitude: "1,875m", distance: "506 km", day: 4, date: "Day 4 Morning", arrTime: "05:30 AM", depTime: "06:00 AM", transport: "GMOU Local Bus to Rishikesh", icon: "Bus" },
  { id: 7, location: "Sonipat (Return)", altitude: "220m", distance: "1100 km", day: 5, date: "Day 5 Morning", arrTime: "05:00 AM", depTime: "—", transport: "Arrive Home", icon: "Home" },
];

export const overviewCards = [
  { title: "Joshimath-Auli Ropeway", value: "4.4 km Ride", description: "Ride one of Asia's longest and highest cable cars offering stunning views of Nanda Devi peak.", icon: "TrendingUp" },
  { title: "Gorson Bugyal Trek", description: "A scenic 3km snow trek from Auli to wide alpine meadows surrounded by towering Himalayan peaks.", icon: "MapPin" },
  { title: "Skiing & Snowboarding", description: "Try skiing lessons on the pristine white slopes of Auli (best between January and March).", icon: "Compass" },
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

export const expenseCategories = ["Transport", "Accommodation", "Food", "Ropeway/Activities", "Shopping", "Other"];

export const STORAGE_KEYS = {
  expenseTracker: "expenses-auli",
  budgetCalculator: "budget-values-auli",
  completedTreks: "completed-treks-auli",
  packingChecklist: "packing-checklist-auli",
  completedDays: "completed-days-auli",
};
