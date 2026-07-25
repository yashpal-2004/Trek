export const trip = {
  title: "Ladakh Circuit — Plan 1 (Via Srinagar)",
  subtitle: "A 12-day self-scooty epic ride starting from Hisar via Jammu, Srinagar, Zoji La, Kargil, Leh, Khardung La, Pangong, and returning via Manali",
  duration: "Custom Dates",
  durationDays: 12,
  people: 2,
  budgetMin: 17500,
  budgetMax: 19500,
  difficulty: "Strenuous",
  highestAltitude: "5,359m (17,582 ft)",
  totalDistance: "2850 km",
  totalTrekDistance: "0 km",
  startingPoint: "Hisar",
  endingPoint: "Hisar",
  transport: ["Self Scooty"],
  theme: "Teal",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 12, suffix: "", description: "Full circuit duration", icon: "Calendar" },
  { id: "riding", label: "Riding Distance", value: 2850, suffix: " KM", description: "Hisar to Ladakh & back", icon: "Route" },
  { id: "budget", label: "Budget", value: 18.5, suffix: "K", prefix: "₹", description: "Per person estimate", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 5359, suffix: " M (17,582 FT)", description: "Khardung La Pass", icon: "TrendingUp" },
  { id: "passes", label: "High Passes", value: 6, suffix: "", description: "Zoji La, Khardung La, Chang La, Tanglang La, etc.", icon: "Mountain" },
  { id: "destinations", label: "Major Stops", value: 9, suffix: "", description: "Srinagar, Kargil, Leh, Nubra, Pangong, Manali", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Hisar", altitude: "215m", distance: "0 km", day: 1, date: "Day 1", arrTime: "05:00 AM", depTime: "05:30 AM", transport: "Self Scooty", icon: "Compass" },
  { id: 2, location: "Patnitop / Ramban", altitude: "2024m", distance: "560 km", day: 1, date: "Day 1", arrTime: "06:30 PM", depTime: "06:00 AM (Day 2)", transport: "Self Scooty", icon: "Home" },
  { id: 3, location: "Srinagar", altitude: "1585m", distance: "140 km", day: 2, date: "Day 2", arrTime: "12:00 PM", depTime: "06:00 AM (Day 3)", transport: "Self Scooty", icon: "MapPin" },
  { id: 4, location: "Kargil", altitude: "2676m", distance: "202 km", day: 3, date: "Day 3", arrTime: "04:30 PM", depTime: "06:30 AM (Day 4)", transport: "Self Scooty", icon: "Home" },
  { id: 5, location: "Leh", altitude: "3524m", distance: "215 km", day: 4, date: "Day 4", arrTime: "03:30 PM", depTime: "08:00 AM (Day 6)", transport: "Self Scooty", icon: "MapPin" },
  { id: 6, location: "Nubra Valley (Hunder)", altitude: "3048m", distance: "125 km", day: 6, date: "Day 6", arrTime: "02:30 PM", depTime: "07:00 AM (Day 7)", transport: "Self Scooty", icon: "Mountain" },
  { id: 7, location: "Pangong Tso", altitude: "4225m", distance: "165 km", day: 7, date: "Day 7", arrTime: "03:00 PM", depTime: "08:00 AM (Day 8)", transport: "Self Scooty", icon: "Waves" },
  { id: 8, location: "Leh", altitude: "3524m", distance: "160 km", day: 8, date: "Day 8", arrTime: "02:00 PM", depTime: "06:00 AM (Day 9)", transport: "Self Scooty", icon: "MapPin" },
  { id: 9, location: "Jispa / Keylong", altitude: "3200m", distance: "335 km", day: 9, date: "Day 9", arrTime: "06:30 PM", depTime: "07:00 AM (Day 10)", transport: "Self Scooty", icon: "Home" },
  { id: 10, location: "Manali", altitude: "2050m", distance: "95 km", day: 10, date: "Day 10", arrTime: "12:30 PM", depTime: "06:00 AM (Day 12)", transport: "Self Scooty", icon: "Home" },
  { id: 11, location: "Hisar", altitude: "215m", distance: "450 km", day: 12, date: "Day 12", arrTime: "07:00 PM", depTime: "—", transport: "Self Scooty", icon: "Compass" },
];

export const overviewCards = [
  { title: "Zoji La & Khardung La", value: "17,582 ft", description: "Cross notorious high-altitude mountain passes on self scooty.", icon: "TrendingUp" },
  { title: "Gradual Acclimatization", value: "Srinagar Route", description: "Climbing gradually via Srinagar reduces AMS risk compared to Manali route.", icon: "Shield" },
  { title: "Pangong & Nubra", value: "High Lakes & Dunes", description: "Ride alongside the famous blue waters of Pangong Tso and double-humped camels at Hunder.", icon: "Mountain" },
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
  expenseTracker: "expenses-ladakh-p1",
  budgetCalculator: "budget-values-ladakh-p1",
  completedTreks: "completed-treks-ladakh-p1",
  packingChecklist: "packing-checklist-ladakh-p1",
  completedDays: "completed-days-ladakh-p1",
};
