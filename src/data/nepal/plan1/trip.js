export const trip = {
  title: "Nepal Budget Tour (Delhi to Nepal)",
  subtitle: "Cheapest international backpacking trip to Nepal (Kathmandu & Pokhara) from Delhi by train and local buses",
  duration: "7 Days",
  durationDays: 7,
  people: 1,
  budgetMin: 6800,
  budgetMax: 7500,
  difficulty: "Easy / Cultural",
  highestAltitude: "1600m (Sarangkot)",
  totalDistance: "2320 km (Round Trip)",
  totalTrekDistance: "2 km",
  startingPoint: "New Delhi",
  endingPoint: "New Delhi",
  transport: ["Sleeper Train", "Interstate Bus", "Tourist Bus", "Local Bus"],
  theme: "Emerald",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 7, suffix: "", description: "Delhi-Nepal-Delhi duration", icon: "Calendar" },
  { id: "distance", label: "Total Distance", value: 2320, suffix: " KM", description: "Sleeper trains & bus runs", icon: "Route" },
  { id: "budget", label: "Budget", value: 7.15, suffix: "K", prefix: "₹", description: "Per person (cheapest border route)", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 1600, suffix: " M", description: "Sarangkot Sunrise Viewpoint", icon: "TrendingUp" },
  { id: "passes", label: "Border Crossings", value: 1, suffix: "", description: "Sonauli / Belahiya checkpoint", icon: "MapPin" },
  { id: "destinations", label: "Major Stops", value: 6, suffix: "", description: "Kathmandu, Pokhara, Phewa Lake, Pashupatinath, Boudhanath, Sarangkot", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Delhi (Boarding)", altitude: "216m", distance: "0 km", day: 0, date: "Friday Night", arrTime: "07:30 PM", depTime: "08:15 PM", transport: "Sleeper Class Train", icon: "Bus" },
  { id: 2, location: "Gorakhpur Junction", altitude: "102m", distance: "750 km", day: 1, date: "Saturday", arrTime: "10:00 AM", depTime: "10:30 AM", transport: "UPSRTC Local Bus", icon: "Bus" },
  { id: 3, location: "Sonauli / Belahiya Border", altitude: "95m", distance: "850 km", day: 1, date: "Saturday", arrTime: "01:30 PM", depTime: "04:00 PM", transport: "Walk Border / Deluxe Overnight Bus", icon: "MapPin" },
  { id: 4, location: "Kathmandu (Arrival)", altitude: "1400m", distance: "1130 km", day: 2, date: "Sunday", arrTime: "07:00 AM", depTime: "—", transport: "Backpacker Hostel Stay", icon: "Home" },
  { id: 5, location: "Pokhara Lakeside", altitude: "822m", distance: "1330 km", day: 4, date: "Tuesday", arrTime: "02:30 PM", depTime: "—", transport: "Tourist Bus / Shared Boat", icon: "Compass" },
  { id: 6, location: "Sarangkot Viewpoint", altitude: "1600m", distance: "1340 km", day: 5, date: "Wednesday", arrTime: "05:00 AM", depTime: "08:00 AM", transport: "Local Taxi / Walk", icon: "TrendingUp" },
  { id: 7, location: "Pokhara Terminal (Departure)", altitude: "822m", distance: "1350 km", day: 5, date: "Wednesday Night", arrTime: "05:30 PM", depTime: "06:00 PM", transport: "Overnight Sleeper Bus", icon: "Bus" },
  { id: 8, location: "Gorakhpur Junction (Return)", altitude: "102m", distance: "1710 km", day: 6, date: "Thursday", arrTime: "10:30 AM", depTime: "08:30 PM", transport: "Sleeper Class Train", icon: "Bus" },
  { id: 9, location: "Delhi (Arrive)", altitude: "216m", distance: "2460 km", day: 7, date: "Friday Morning", arrTime: "09:30 AM", depTime: "—", transport: "Reach Home", icon: "Home" },
];

export const overviewCards = [
  { title: "Indo-Nepal Land Crossing", value: "Sonauli Checkpost", description: "Walk across the border gate connecting Indian plains with the green mountain valleys of Nepal.", icon: "MapPin" },
  { title: "Annapurna Range Sunrise", value: "Sarangkot view", description: "Watch the sun light up standard snowy high summits of the Himalayas from Sarangkot ridge.", icon: "TrendingUp" },
  { title: "Boudhanath Stupa prayers", value: "Tibetan Circle", description: "Circumambulate the giant white dome alongside chanting monks and light oil lamps at twilight.", icon: "Compass" },
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

export const expenseCategories = ["Transport", "Accommodation", "Food", "Permits/Buffer", "Shopping", "Other"];

export const STORAGE_KEYS = {
  expenseTracker: "expenses-nepal",
  budgetCalculator: "budget-values-nepal",
  completedTreks: "completed-treks-nepal",
  packingChecklist: "packing-checklist-nepal",
  completedDays: "completed-days-nepal",
};
