export const trip = {
  title: "Baidyanath Dham Spiritual Yatra",
  subtitle: "A sacred pilgrimage to Baidyanath Jyotirlinga in Deoghar, Jharkhand",
  duration: "3 Days",
  durationDays: 3,
  people: 1,
  budgetMin: 3800,
  budgetMax: 5000,
  difficulty: "Easy / Pilgrimage",
  highestAltitude: "254m (Deoghar)",
  totalDistance: "2500 km (Round Trip)",
  totalTrekDistance: "0 km",
  startingPoint: "New Delhi",
  endingPoint: "New Delhi",
  transport: ["Sleeper / 3AC Train", "Local Auto / E-Rickshaw"],
  theme: "Orange",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 3, suffix: "", description: "Weekend pilgrimage", icon: "Calendar" },
  { id: "distance", label: "Total Distance", value: 2500, suffix: " KM", description: "Delhi-Deoghar Round Trip", icon: "Route" },
  { id: "budget", label: "Budget", value: 5.0, suffix: "K", prefix: "₹", description: "Per person (budget style)", icon: "Wallet" },
  { id: "altitude", label: "Elevation", value: 254, suffix: " M", description: "Deoghar Plateau", icon: "TrendingUp" },
  { id: "passes", label: "Jyotirlingas", value: 1, suffix: "", description: "Baidyanath Dham", icon: "MapPin" },
  { id: "destinations", label: "Major Stops", value: 4, suffix: "", description: "Baba Baidyanath Temple, Naulakha Mandir, Tapovan, Trikut Pahar", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "New Delhi / Anand Vihar", altitude: "214m", distance: "0 km", day: 0, date: "Friday Evening", arrTime: "06:00 PM", depTime: "07:00 PM", transport: "Express / Sampark Kranti Train", icon: "Train" },
  { id: 2, location: "Jasidih Junction (JSME)", altitude: "250m", distance: "1230 km", day: 1, date: "Saturday Morning", arrTime: "09:00 AM", depTime: "09:30 AM", transport: "Auto Rickshaw to Deoghar (8 km)", icon: "Home" },
  { id: 3, location: "Baba Baidyanath Temple & Ghats", altitude: "254m", distance: "1238 km", day: 1, date: "Saturday", arrTime: "11:00 AM", depTime: "08:00 PM", transport: "Walking / Rickshaw", icon: "MapPin" },
  { id: 4, location: "Trikut Pahar & Tapovan Caves", altitude: "300m", distance: "1255 km", day: 2, date: "Sunday", arrTime: "08:30 AM", depTime: "03:00 PM", transport: "Auto / Taxi", icon: "MapPin" },
  { id: 5, location: "Jasidih Junction", altitude: "250m", distance: "1270 km", day: 2, date: "Sunday Night", arrTime: "05:00 PM", depTime: "06:00 PM", transport: "Return Express Train", icon: "Train" },
  { id: 6, location: "New Delhi (NDLS)", altitude: "214m", distance: "2500 km", day: 3, date: "Monday Morning", arrTime: "08:00 AM", depTime: "—", transport: "Arrive Home", icon: "Home" },
];

export const overviewCards = [
  { title: "Baba Baidyanath Jyotirlinga", value: "Spiritual Core", description: "Offer holy jal and prayers at one of the 12 sacred Jyotirlingas of Lord Shiva.", icon: "MapPin" },
  { title: "Trikut Pahar Ropeway & Caves", value: "Scenic Heights", description: "Explore the scenic 3-peak hill and ancient Tapovan meditation caves.", icon: "TrendingUp" },
  { title: "Naulakha Mandir", value: "Architectural Marvel", description: "Visit the serene 146-ft Radha-Krishna temple reminiscent of Belur Math.", icon: "Compass" },
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

export const expenseCategories = ["Transport", "Accommodation", "Food", "Pooja/Prasad", "Shopping", "Other"];

export const STORAGE_KEYS = {
  expenseTracker: "expenses-vaidyanath",
  budgetCalculator: "budget-values-vaidyanath",
  completedTreks: "completed-treks-vaidyanath",
  packingChecklist: "packing-checklist-vaidyanath",
  completedDays: "completed-days-vaidyanath",
};
