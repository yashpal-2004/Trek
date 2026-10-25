export const trip = {
  title: "Vrindavan & Mathura Pilgrimage",
  subtitle: "A 2-day Krishna pilgrimage from Sonipat to the land of Braj by budget train",
  duration: "2 Days",
  durationDays: 2,
  people: 1,
  budgetMin: 2000,
  budgetMax: 3000,
  difficulty: "Easy / City Pilgrimage",
  highestAltitude: "174m (Mathura-Vrindavan)",
  totalDistance: "340 km (Round Trip)",
  totalTrekDistance: "0 km",
  startingPoint: "Sonipat (SNP)",
  endingPoint: "Sonipat (SNP)",
  transport: ["Passenger/Express Train", "E-Rickshaw / Tempo"],
  theme: "Purple",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 2, suffix: "", description: "Weekend pilgrimage", icon: "Calendar" },
  { id: "distance", label: "Total Distance", value: 340, suffix: " KM", description: "Sonipat–Mathura Round Trip", icon: "Route" },
  { id: "budget", label: "Budget", value: 2.5, suffix: "K", prefix: "₹", description: "Per person (budget style)", icon: "Wallet" },
  { id: "altitude", label: "Elevation", value: 174, suffix: " M", description: "Yamuna River Plains", icon: "TrendingUp" },
  { id: "passes", label: "Temples", value: 7, suffix: "", description: "Banke Bihari, Prem Mandir, ISKCON & more", icon: "MapPin" },
  { id: "destinations", label: "Major Stops", value: 3, suffix: "", description: "Vrindavan, Mathura, Govardhan", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Sonipat (SNP)", altitude: "230m", distance: "0 km", day: 0, date: "Day 1 Morning", arrTime: "—", depTime: "05:30 AM", transport: "Express/Passenger Train", icon: "Train" },
  { id: 2, location: "Mathura Junction (MTJ)", altitude: "174m", distance: "170 km", day: 1, date: "Day 1 Morning", arrTime: "09:30 AM", depTime: "10:30 AM", transport: "E-Rickshaw to Vrindavan", icon: "MapPin" },
  { id: 3, location: "Vrindavan – Banke Bihari, Prem Mandir & ISKCON", altitude: "174m", distance: "178 km", day: 1, date: "Day 1 Afternoon", arrTime: "11:00 AM", depTime: "05:00 PM", transport: "E-Rickshaw / Walking", icon: "MapPin" },
  { id: 4, location: "Yamuna Ghat Aarti – Kesi Ghat", altitude: "174m", distance: "180 km", day: 1, date: "Day 1 Evening", arrTime: "06:30 PM", depTime: "07:30 PM", transport: "Walking", icon: "Compass" },
  { id: 5, location: "Mathura – Krishna Janmabhoomi & Dwarkadheesh Temple", altitude: "174m", distance: "185 km", day: 2, date: "Day 2 Morning", arrTime: "08:00 AM", depTime: "12:00 PM", transport: "E-Rickshaw / Tempo", icon: "MapPin" },
  { id: 6, location: "Mathura Junction (MTJ) – Depart for Sonipat", altitude: "174m", distance: "195 km", day: 2, date: "Day 2 Afternoon", arrTime: "01:00 PM", depTime: "02:00 PM", transport: "Return Train to Sonipat", icon: "Train" },
  { id: 7, location: "Sonipat (SNP)", altitude: "230m", distance: "340 km", day: 2, date: "Day 2 Evening", arrTime: "06:00 PM", depTime: "—", transport: "Arrive Home", icon: "Home" },
];

export const overviewCards = [
  { title: "Banke Bihari Darshan", value: "Spiritual Peak", description: "Visit the ancient Banke Bihari Mandir — one of the most sacred Krishna temples in Vrindavan, where the idol is veiled and unveiled repeatedly during darshan.", icon: "MapPin" },
  { title: "Prem Mandir & ISKCON", value: "Divine Architecture", description: "Marvel at the stunning white marble Prem Mandir and the grand ISKCON temple, both illuminated spectacularly at night.", icon: "TrendingUp" },
  { title: "Krishna Janmabhoomi, Mathura", value: "Sacred Birthplace", description: "Visit the exact birthplace of Lord Krishna at the Shri Krishna Janmabhoomi complex in Mathura, a deeply moving experience.", icon: "Compass" },
];

export const navLinks = [
  { id: "overview", label: "Overview" },
  { id: "itinerary", label: "Itinerary" },
  { id: "transport", label: "Transport" },
  { id: "stay", label: "Stay" },
  { id: "budget", label: "Budget" },
  { id: "expenses", label: "Expenses" },
  { id: "packing", label: "Packing" },
  { id: "resources", label: "Guides" },
];

export const expenseCategories = ["Transport", "Accommodation", "Food", "Temple Prasad / Donations", "Shopping", "Other"];

export const STORAGE_KEYS = {
  expenseTracker: "expenses-vrindavan",
  budgetCalculator: "budget-values-vrindavan",
  completedTreks: "completed-treks-vrindavan",
  packingChecklist: "packing-checklist-vrindavan",
  completedDays: "completed-days-vrindavan",
};
