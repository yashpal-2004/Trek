import { spitiAmounts } from "../amounts";

export const trip = {
  title: "Spiti Valley Expedition — Plan 1 (2 Persons)",
  subtitle: "A 6-day mountain riding adventure from Sonipat via Delhi – Manali – Kaza – Chandratal – back to Sonipat",
  duration: "20 Aug – 25 Aug 2026",
  durationDays: 6,
  people: 2,
  budgetMin: 9200,
  budgetMax: 9800,
  difficulty: "Moderate to Challenging",
  highestAltitude: "4,551m (14,931 ft)",
  totalDistance: "1400 km",
  totalTrekDistance: "2 km",
  startingPoint: "Sonipat",
  endingPoint: "Sonipat",
  transport: ["Volvo Bus", "Hero Xpulse 200 (4 Days)"],
  theme: "Amber",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 6, suffix: "", description: "Full circuit duration", icon: "Calendar" },
  { id: "distance", label: "Total Distance", value: 1500, suffix: " KM", description: "Volvo Bus + 800 km Spiti Bike & Scooty", icon: "Route" },
  { id: "budget", label: "Budget", value: (spitiAmounts.plan1.budgetTotal / 1000).toFixed(1), suffix: "K", prefix: "₹", description: "Per person (2 riders group)", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 4551, suffix: " M (14,931 FT)", description: "Kunzum Pass", icon: "TrendingUp" },
  { id: "passes", label: "Mountain Passes", value: 2, suffix: "", description: "Atal Tunnel & Kunzum Pass", icon: "Mountain" },
  { id: "destinations", label: "Major Stops", value: 7, suffix: "", description: "Manali, Kaza, Key, Hikkim, Komic, Langza, Chandratal", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Sonipat", altitude: "215m", distance: "0 km", day: 0, date: "20 Aug (Eve)", arrTime: "04:00 PM", depTime: "04:00 PM", transport: "Local Bus/Train", icon: "Home" },
  { id: 2, location: "Delhi ISBT Kashmiri Gate", altitude: "215m", distance: "50 km", day: 0, date: "20 Aug (Night)", arrTime: "06:30 PM", depTime: "08:00 PM", transport: "Volvo AC Bus", icon: "Bus" },
  { id: 3, location: "Manali (Arrive & Ride Out)", altitude: "2050m", distance: "530 km", day: 1, date: "21 Aug", arrTime: "08:00 AM", depTime: "09:30 AM", transport: "Hero Xpulse 200 (Day 1)", icon: "Compass" },
  { id: 4, location: "Atal Tunnel & Gramphu", altitude: "3050m", distance: "40 km", day: 1, date: "21 Aug", arrTime: "10:45 AM", depTime: "11:00 AM", transport: "Hero Xpulse 200", icon: "Compass" },
  { id: 5, location: "Batal & Kunzum Pass", altitude: "4551m", distance: "90 km", day: 1, date: "21 Aug", arrTime: "01:00 PM", depTime: "02:00 PM", transport: "Hero Xpulse 200", icon: "Mountain" },
  { id: 6, location: "Kaza Base", altitude: "3800m", distance: "70 km", day: 1, date: "21 Aug", arrTime: "05:30 PM", depTime: "08:00 AM (23 Aug)", transport: "Hero Xpulse 200", icon: "Home" },
  { id: 7, location: "Key Monastery & High Villages", altitude: "4587m", distance: "90 km", day: 2, date: "22 Aug", arrTime: "10:00 AM", depTime: "04:00 PM", transport: "Hero Xpulse 200 (Day 2)", icon: "MapPin" },
  { id: 8, location: "Chandratal Lake (Campsite)", altitude: "4300m", distance: "120 km", day: 3, date: "23 Aug", arrTime: "01:00 PM", depTime: "07:00 AM (24 Aug)", transport: "Hero Xpulse 200 (Day 3)", icon: "Waves" },
  { id: 9, location: "Manali (Return & Handover)", altitude: "2050m", distance: "130 km", day: 4, date: "24 Aug", arrTime: "01:00 PM", depTime: "06:00 PM", transport: "Hero Xpulse 200 (Day 4) + Volvo Bus", icon: "Bus" },
  { id: 10, location: "Delhi & Sonipat", altitude: "215m", distance: "530 km", day: 5, date: "25 Aug", arrTime: "07:00 AM", depTime: "—", transport: "Overnight Volvo Bus", icon: "Home" },
];

export const overviewCards = [
  { title: "Kunzum Pass & Atal Tunnel", value: "14,931 ft", description: "Cross iconic high mountain passes and transit through the world's longest highway tunnel above 10,000 ft.", icon: "TrendingUp" },
  { title: "World's Highest Post Office", value: "Hikkim (14,567 ft)", description: "Post a handwritten letter to your loved ones from the world's highest operational post office.", icon: "MapPin" },
  { title: "Hero Xpulse 200 (4 Days)", value: "No Scooty, Just Bike", description: "Arrive Manali, pick up the Xpulse and ride straight to Spiti — 4 full days of pure mountain riding with no Manali layover.", icon: "Compass" },
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
  expenseTracker: "expenses-spiti-p1",
  budgetCalculator: "budget-values-spiti-p1",
  completedTreks: "completed-treks-spiti-p1",
  packingChecklist: "packing-checklist-spiti-p1",
  completedDays: "completed-days-spiti-p1",
};
