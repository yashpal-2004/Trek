import { maharashtraAmounts } from "./amounts";

export const trip = {
  title: "Maharashtra 3-Jyotirlinga Circuit — Trimbakeshwar, Grishneshwar & Bhimashankar",
  subtitle: "A 5-day budget spiritual circuit covering 3 sacred Jyotirlingas of Maharashtra from Delhi / Sonipat",
  duration: "5 Days",
  durationDays: 5,
  people: 2,
  budgetMin: 5800,
  budgetMax: 6800,
  difficulty: "Easy / Spiritual",
  highestAltitude: "950m (Bhimashankar)",
  totalDistance: "2850 km (Round Trip)",
  totalTrekDistance: "0 km",
  startingPoint: "Delhi / Sonipat",
  endingPoint: "Delhi / Sonipat",
  transport: ["Express Train (Sleeper)", "Intercity MSRTC Bus", "Shared Taxi / Auto"],
  theme: "Orange",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 5, suffix: "", description: "Circuit duration from Delhi", icon: "Calendar" },
  { id: "distance", label: "Total Distance", value: 2850, suffix: " KM", description: "Delhi-Maharashtra Circuit", icon: "Route" },
  { id: "budget", label: "Budget", value: 6.2, suffix: "K", prefix: "₹", description: "Per person (2 sharing)", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 950, suffix: " M", description: "Bhimashankar Sanctuary Elevation", icon: "TrendingUp" },
  { id: "passes", label: "Jyotirlingas", value: 3, suffix: "", description: "Trimbak, Grishneshwar, Bhimashankar", icon: "MapPin" },
  { id: "destinations", label: "Major Stops", value: 6, suffix: "", description: "Trimbakeshwar, Kushavarta Kund, Grishneshwar, Ellora Caves, Bhimashankar Mandir, Nagphani", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Delhi / Sonipat", altitude: "220m", distance: "0 km", day: 0, date: "Day 0 Night", arrTime: "03:00 PM", depTime: "04:00 PM", transport: "Mangala Lakshadweep / Punjab Mail Train", icon: "Bus" },
  { id: 2, location: "Nashik Road Station → Trimbakeshwar", altitude: "600m", distance: "1350 km", day: 1, date: "Day 1 Afternoon", arrTime: "11:00 AM", depTime: "08:00 PM", transport: "Shared Auto / Temple Visit", icon: "Home" },
  { id: 3, location: "Sambhaji Nagar (Aurangabad)", altitude: "568m", distance: "1560 km", day: 2, date: "Day 2 Morning", arrTime: "09:00 AM", depTime: "11:00 AM", transport: "MSRTC Intercity Bus", icon: "Bus" },
  { id: 4, location: "Grishneshwar & Ellora Caves", altitude: "570m", distance: "1590 km", day: 2, date: "Day 2 Afternoon", arrTime: "11:30 AM", depTime: "05:00 PM", transport: "Auto / Walk", icon: "MapPin" },
  { id: 5, location: "Bhimashankar Sanctuary", altitude: "950m", distance: "1900 km", day: 3, date: "Day 3 Full Day", arrTime: "08:00 AM", depTime: "06:00 PM", transport: "Ghat Mini Bus", icon: "MapPin" },
  { id: 6, location: "Pune Station → Delhi Return", altitude: "560m", distance: "2850 km", day: 4, date: "Day 4 Evening", arrTime: "05:00 PM", depTime: "—", transport: "Return Express Train (Jhelum Express / Goa Exp)", icon: "Home" },
];

export const overviewCards = [
  { title: "3 Sacred Jyotirlingas", value: "Trimbak, Grishneshwar, Bhimashankar", description: "Complete Maharashtra's 3 Holy Jyotirlingas in one budget-friendly 5-day loop from Delhi.", icon: "MapPin" },
  { title: "Godavari Origin & Ellora", value: "Heritage & Culture", description: "Visit Godavari Kushavarta Kund at Trimbak & world-famous UNESCO Ellora Kailasa Temple.", icon: "TrendingUp" },
  { title: "Direct Train Transit", value: "Delhi Connecting Nodes", description: "Seamless sleeper train connections from Delhi to Nashik and return from Pune.", icon: "Compass" },
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
  expenseTracker: "expenses-maharashtra-jyotirlinga",
  budgetCalculator: "budget-values-maharashtra-jyotirlinga",
  completedTreks: "completed-treks-maharashtra-jyotirlinga",
  packingChecklist: "packing-checklist-maharashtra-jyotirlinga",
  completedDays: "completed-days-maharashtra-jyotirlinga",
};
