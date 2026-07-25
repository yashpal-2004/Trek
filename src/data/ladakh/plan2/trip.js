export const trip = {
  title: "Ladakh Circuit — Plan 2 (Via Manali)",
  subtitle: "A 12-day self-scooty adventure starting from Hisar via Manali, Atal Tunnel, Jispa, Leh-Manali Highway passes, Leh, Khardung La, Pangong, and returning via Srinagar",
  duration: "Custom Dates",
  durationDays: 12,
  people: 2,
  budgetMin: 17900,
  budgetMax: 19900,
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
  { id: "budget", label: "Budget", value: 18.9, suffix: "K", prefix: "₹", description: "Per person estimate", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 5359, suffix: " M (17,582 FT)", description: "Khardung La Pass", icon: "TrendingUp" },
  { id: "passes", label: "High Passes", value: 6, suffix: "", description: "Baralacha La, Tanglang La, Khardung La, Chang La, Zoji La", icon: "Mountain" },
  { id: "destinations", label: "Major Stops", value: 9, suffix: "", description: "Manali, Jispa, Leh, Nubra, Pangong, Kargil, Srinagar", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Hisar", altitude: "215m", distance: "0 km", day: 1, date: "Day 1", arrTime: "05:00 AM", depTime: "05:30 AM", transport: "Self Scooty", icon: "Compass" },
  { id: 2, location: "Manali", altitude: "2050m", distance: "450 km", day: 1, date: "Day 1", arrTime: "05:30 PM", depTime: "06:00 AM (Day 2)", transport: "Self Scooty", icon: "Home" },
  { id: 3, location: "Jispa / Sarchu", altitude: "3200m", distance: "140 km", day: 2, date: "Day 2", arrTime: "02:00 PM", depTime: "06:00 AM (Day 3)", transport: "Self Scooty", icon: "Home" },
  { id: 4, location: "Leh", altitude: "3524m", distance: "250 km", day: 3, date: "Day 3", arrTime: "05:00 PM", depTime: "08:00 AM (Day 5)", transport: "Self Scooty", icon: "MapPin" },
  { id: 5, location: "Nubra Valley (Hunder)", altitude: "3048m", distance: "125 km", day: 5, date: "Day 5", arrTime: "02:30 PM", depTime: "07:00 AM (Day 6)", transport: "Self Scooty", icon: "Mountain" },
  { id: 6, location: "Pangong Tso", altitude: "4225m", distance: "165 km", day: 6, date: "Day 6", arrTime: "03:00 PM", depTime: "08:00 AM (Day 7)", transport: "Self Scooty", icon: "Waves" },
  { id: 7, location: "Leh", altitude: "3524m", distance: "160 km", day: 7, date: "Day 7", arrTime: "02:00 PM", depTime: "06:00 AM (Day 8)", transport: "Self Scooty", icon: "MapPin" },
  { id: 8, location: "Kargil", altitude: "2676m", distance: "215 km", day: 8, date: "Day 8", arrTime: "04:00 PM", depTime: "06:30 AM (Day 9)", transport: "Self Scooty", icon: "Home" },
  { id: 9, location: "Srinagar", altitude: "1585m", distance: "202 km", day: 9, date: "Day 9", arrTime: "03:30 PM", depTime: "06:00 AM (Day 11)", transport: "Self Scooty", icon: "Home" },
  { id: 10, location: "Hisar", altitude: "215m", distance: "700 km", day: 12, date: "Day 12", arrTime: "08:00 PM", depTime: "—", transport: "Self Scooty", icon: "Compass" },
];

export const overviewCards = [
  { title: "Atal Tunnel & Baralacha La", value: "High Altitude Passes", description: "Direct thrill riding through Atal Tunnel and ascending Baralacha La & Tanglang La.", icon: "TrendingUp" },
  { title: "Manali-Leh Highway", value: "Legendary Route", description: "Experience the iconic desolate high plains of Gata Loops, More Plains & Sarchu.", icon: "Route" },
  { title: "Complete Loop", value: "Srinagar Return", description: "Finish by riding through Kargil, Zoji La and lush Kashmir valley before heading back to Hisar.", icon: "MapPin" },
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
  expenseTracker: "expenses-ladakh-p2",
  budgetCalculator: "budget-values-ladakh-p2",
  completedTreks: "completed-treks-ladakh-p2",
  packingChecklist: "packing-checklist-ladakh-p2",
  completedDays: "completed-days-ladakh-p2",
};
