import { annapurnaAmounts } from "../amounts";

export const trip = {
  title: "Annapurna Base Camp Expedition — Plan 1 (Ultra-Budget)",
  subtitle: "A 10-day self-guided ultra-budget expedition from Delhi via Sonauli border, Pokhara, Nayapul & Modi Khola sanctuary",
  duration: "Custom Dates",
  durationDays: 10,
  people: 1,
  budgetMin: 9300,
  budgetMax: 9300,
  difficulty: "Moderate to Challenging",
  highestAltitude: "4,130m (13,549 ft)",
  totalDistance: "1150 km",
  totalTrekDistance: "75 km",
  startingPoint: "Delhi",
  endingPoint: "Delhi",
  transport: ["Express Train", "UP Roadways Bus", "Nepali Local Bus"],
  theme: "Emerald",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 10, suffix: "", description: "Delhi round trip duration", icon: "Calendar" },
  { id: "distance", label: "Total Distance", value: 75, suffix: " KM", description: "Nayapul → ABC → Nayapul Trek", icon: "Route" },
  { id: "budget", label: "Budget", value: (annapurnaAmounts.plan1.budgetTotal / 1000).toFixed(1), suffix: "K", prefix: "₹", description: "Per person (Ultra-Budget Overland)", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 4130, suffix: " M (13,549 FT)", description: "Annapurna Base Camp", icon: "TrendingUp" },
  { id: "permits", label: "Nepal Permits", value: 2, suffix: "", description: "ACAP & TIMS Cards", icon: "FileText" },
  { id: "destinations", label: "Major Stops", value: 6, suffix: "", description: "Pokhara, Ghandruk, Chhomrong, Deurali, MBC, ABC", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Delhi (NDLS / ANVT)", altitude: "216m", distance: "0 km", day: 1, date: "Day 1", arrTime: "06:00 PM", depTime: "07:00 PM", transport: "Express Train (Sleeper)", icon: "Train" },
  { id: 2, location: "Gorakhpur Junction", altitude: "84m", distance: "780 km", day: 2, date: "Day 2", arrTime: "08:30 AM", depTime: "09:30 AM", transport: "UP Roadways Bus", icon: "Bus" },
  { id: 3, location: "Sonauli / Bhairahawa Border", altitude: "105m", distance: "875 km", day: 2, date: "Day 2", arrTime: "12:30 PM", depTime: "01:30 PM", transport: "Nepalese Local Bus", icon: "Compass" },
  { id: 4, location: "Pokhara Lakeside", altitude: "822m", distance: "1055 km", day: 2, date: "Day 2", arrTime: "07:30 PM", depTime: "06:30 AM (Day 3)", transport: "Local Bus", icon: "Home" },
  { id: 5, location: "Nayapul Trailhead", altitude: "1070m", distance: "1100 km", day: 3, date: "Day 3", arrTime: "09:00 AM", depTime: "09:30 AM", transport: "Trek", icon: "Footprints" },
  { id: 6, location: "Chhomrong Village", altitude: "2170m", distance: "1116 km", day: 3, date: "Day 3", arrTime: "04:30 PM", depTime: "07:00 AM (Day 4)", transport: "Trek", icon: "Home" },
  { id: 7, location: "Himalaya / Deurali", altitude: "3230m", distance: "1128 km", day: 4, date: "Day 4", arrTime: "03:30 PM", depTime: "06:30 AM (Day 5)", transport: "Trek", icon: "Mountain" },
  { id: 8, location: "Annapurna Base Camp (ABC)", altitude: "4130m", distance: "1139 km", day: 5, date: "Day 5", arrTime: "03:00 PM", depTime: "07:00 AM (Day 6)", transport: "Trek", icon: "TrendingUp" },
  { id: 9, location: "Bamboo / Sinuwa", altitude: "2310m", distance: "1153 km", day: 6, date: "Day 6", arrTime: "04:00 PM", depTime: "07:00 AM (Day 7)", transport: "Trek", icon: "Home" },
  { id: 10, location: "Jhinu Danda Hot Springs", altitude: "1780m", distance: "1163 km", day: 7, date: "Day 7", arrTime: "01:00 PM", depTime: "08:00 AM (Day 8)", transport: "Trek", icon: "Waves" },
  { id: 11, location: "Pokhara Lakeside", altitude: "822m", distance: "1220 km", day: 8, date: "Day 8", arrTime: "04:30 PM", depTime: "07:00 AM (Day 9)", transport: "Local Bus", icon: "Home" },
  { id: 12, location: "Delhi", altitude: "216m", distance: "2000 km", day: 10, date: "Day 10", arrTime: "09:00 AM", depTime: "—", transport: "Sleeper Train", icon: "Train" }
];

export const overviewCards = [
  { title: "Annapurna Base Camp (4,130m)", value: "360° Panorama", description: "Stand inside the breathtaking Annapurna Sanctuary enclosed by 7,000m+ Himalayan giants.", icon: "TrendingUp" },
  { title: "Sonauli Border Transit", value: "Overland Route", description: "Ultra-budget land entry via IRCTC Sleeper class and Nepalese local buses to Pokhara.", icon: "Bus" },
  { title: "Jhinu Danda Hot Springs", value: "Natural Springs", description: "Relax sore muscle legs in natural thermal hot spring pools right alongside the roaring river.", icon: "Waves" }
];

export const navLinks = [
  { id: "overview", label: "Overview" },
  { id: "itinerary", label: "Itinerary" },
  { id: "transport", label: "Transport" },
  { id: "stay", label: "Stay" },
  { id: "budget", label: "Budget" },
  { id: "expenses", label: "Expenses" },
  { id: "resources", label: "Guides" }
];

export const expenseCategories = ["Transport", "Accommodation", "Food", "Permits", "Emergency", "Shopping", "Other"];

export const STORAGE_KEYS = {
  expenseTracker: "expenses-annapurna-p1",
  budgetCalculator: "budget-values-annapurna-p1",
  completedTreks: "completed-treks-annapurna-p1",
  packingChecklist: "packing-checklist-annapurna-p1",
  completedDays: "completed-days-annapurna-p1"
};
