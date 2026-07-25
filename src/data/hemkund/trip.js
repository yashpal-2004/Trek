export const trip = {
  title: "Valley of Flowers & Hemkund Sahib",
  subtitle: "A 6-day spiritual and alpine trekking journey from Delhi via Rishikesh, Govindghat, and Ghangaria base camp",
  duration: "Custom Dates",
  durationDays: 6,
  people: 4,
  budgetMin: 7200,
  budgetMax: 8500,
  difficulty: "Moderate",
  highestAltitude: "4,632m (15,200 ft)",
  totalDistance: "1080 km",
  totalTrekDistance: "38 km",
  startingPoint: "Delhi",
  endingPoint: "Delhi",
  transport: ["Train/Bus", "Shared Taxi", "Trekking"],
  theme: "Teal",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 6, suffix: "", description: "Full trip duration", icon: "Calendar" },
  { id: "walking", label: "Walking/Trek", value: 38, suffix: " KM", description: "Ghangaria, Valley & Hemkund", icon: "Footprints" },
  { id: "budget", label: "Budget", value: 7.8, suffix: "K", prefix: "₹", description: "Per person estimate", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 4632, suffix: " M (15,200 FT)", description: "Hemkund Sahib Gurudwara", icon: "TrendingUp" },
  { id: "distance", label: "Total Distance", value: 1080, suffix: " KM", description: "Rail, road & trekking", icon: "Route" },
  { id: "destinations", label: "Destinations", value: 5, suffix: "", description: "Major stops visited", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Delhi", altitude: "215m", distance: "0 km", day: 1, date: "Day 1", arrTime: "06:00 AM", depTime: "07:00 AM", transport: "Train / Bus", icon: "Bus" },
  { id: 2, location: "Haridwar / Rishikesh", altitude: "314m", distance: "230 km", day: 1, date: "Day 1", arrTime: "11:30 AM", depTime: "12:00 PM", transport: "Shared Bus / Taxi", icon: "Compass" },
  { id: 3, location: "Govindghat", altitude: "1828m", distance: "275 km", day: 1, date: "Day 1", arrTime: "08:00 PM", depTime: "06:30 AM (Day 2)", transport: "Shared Taxi / Walking", icon: "Home" },
  { id: 4, location: "Ghangaria", altitude: "3048m", distance: "14 km (Trek)", day: 2, date: "Day 2", arrTime: "01:30 PM", depTime: "06:30 AM (Day 3)", transport: "Trek", icon: "Footprints" },
  { id: 5, location: "Valley of Flowers", altitude: "3600m", distance: "10 km (Trek)", day: 3, date: "Day 3", arrTime: "10:00 AM", depTime: "03:00 PM", transport: "Trek", icon: "Mountain" },
  { id: 6, location: "Shree Hemkund Sahib", altitude: "4632m", distance: "12 km (Trek)", day: 4, date: "Day 4", arrTime: "11:00 AM", depTime: "02:00 PM", transport: "Trek", icon: "TrendingUp" },
  { id: 7, location: "Govindghat", altitude: "1828m", distance: "14 km (Trek)", day: 5, date: "Day 5", arrTime: "03:00 PM", depTime: "06:00 AM (Day 6)", transport: "Shared Bus / Taxi", icon: "Home" },
  { id: 8, location: "Delhi", altitude: "215m", distance: "505 km", day: 6, date: "Day 6", arrTime: "10:30 PM", depTime: "—", transport: "Overnight Bus / Train", icon: "Bus" },
];

export const overviewCards = [
  { title: "Shree Hemkund Sahib", value: "15,200 ft", description: "Highest Sikh pilgrimage site overlooking a crystal-clear glacial lake.", icon: "TrendingUp" },
  { title: "Valley of Flowers", value: "UNESCO Site", description: "Vibrant alpine valley adorned with endemic flora, waterfalls, and snow peaks.", icon: "Mountain" },
  { title: "Ghangaria Base", value: "3,048 m", description: "Charming wooden lodge hamlet serving as the launch pad for both treks.", icon: "Home" },
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
  expenseTracker: "expenses-hemkund",
  budgetCalculator: "budget-values-hemkund",
  completedTreks: "completed-treks-hemkund",
  packingChecklist: "packing-checklist-hemkund",
  completedDays: "completed-days-hemkund",
};
