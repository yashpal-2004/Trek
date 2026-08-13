import { spitiAmounts } from "../amounts";
const data = spitiAmounts.plan1;

export const trip = {
  title: "Spiti Valley Expedition — Plan 1 (2 Persons)",
  subtitle: "A 6-day mountain riding adventure from Sonipat via Delhi – Manali – Kaza (3 Nights Base) – Shipki La Pass – back to Sonipat",
  duration: "20 Aug – 25 Aug 2026",
  durationDays: 6,
  people: 2,
  budgetMin: 9600,
  budgetMax: 10200,
  difficulty: "Moderate to Challenging",
  highestAltitude: "4,551m (14,931 ft)",
  totalDistance: "1550 km",
  totalTrekDistance: "0 km",
  startingPoint: "Sonipat",
  endingPoint: "Sonipat",
  transport: ["Volvo Bus", "RE Himalayan (4 Days)"],
  theme: "Amber",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 6, suffix: "", description: "Full circuit duration", icon: "Calendar" },
  { id: "distance", label: "Total Distance", value: 1550, suffix: " KM", description: "Volvo Bus + 950 km Spiti Himalayan Riding", icon: "Route" },
  { id: "budget", label: "Budget", value: (data.budgetTotal / 1000).toFixed(1), suffix: "K", prefix: "₹", description: "Per person (2 riders group)", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 4551, suffix: " M (14,931 FT)", description: "Kunzum Pass", icon: "TrendingUp" },
  { id: "passes", label: "Mountain Passes", value: 3, suffix: "", description: "Atal Tunnel, Kunzum Pass, Shipki La", icon: "Mountain" },
  { id: "destinations", label: "Major Stops", value: 10, suffix: "", description: "Manali, Kaza, Key, Chicham, Hikkim, Komic, Langza, Dhankar, Tabo, Shipki La", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Sonipat", altitude: "220m", distance: "0 km", day: 0, date: "20 Aug (Night)", arrTime: "09:00 PM", depTime: "09:45 PM (Boarding)", transport: "Volvo AC Bus", icon: "Bus" },
  { id: 2, location: "Manali (Arrive & Ride Out)", altitude: "2050m", distance: "500 km", day: 1, date: "21 Aug", arrTime: "08:00 AM", depTime: "09:30 AM", transport: "RE Himalayan (Day 1)", icon: "Compass" },
  { id: 3, location: "Atal Tunnel & Gramphu", altitude: "3050m", distance: "40 km", day: 1, date: "21 Aug", arrTime: "10:45 AM", depTime: "11:00 AM", transport: "RE Himalayan", icon: "Compass" },
  { id: 4, location: "Batal & Kunzum Pass", altitude: "4551m", distance: "90 km", day: 1, date: "21 Aug", arrTime: "01:00 PM", depTime: "02:00 PM", transport: "RE Himalayan", icon: "Mountain" },
  { id: 5, location: "Kaza Base (Stay 3 Nights)", altitude: "3800m", distance: "70 km", day: 1, date: "21 Aug", arrTime: "05:30 PM", depTime: "08:30 AM (22 Aug)", transport: "RE Himalayan", icon: "Home" },
  { id: 6, location: "Key, Chicham & High Villages", altitude: "4587m", distance: "90 km", day: 2, date: "22 Aug", arrTime: "10:00 AM", depTime: "05:30 PM", transport: "RE Himalayan (Day 2)", icon: "MapPin" },
  { id: 7, location: "Dhankar, Tabo & Shipki La", altitude: "3930m", distance: "340 km (RT)", day: 3, date: "23 Aug", arrTime: "02:00 PM", depTime: "07:30 PM", transport: "RE Himalayan (Day 3)", icon: "MapPin" },
  { id: 8, location: "Manali (Return & Handover)", altitude: "2050m", distance: "200 km", day: 4, date: "24 Aug", arrTime: "01:30 PM", depTime: "06:00 PM", transport: "RE Himalayan (Day 4) + Volvo Bus", icon: "Bus" },
  { id: 9, location: "Sonipat (Arrival)", altitude: "220m", distance: "500 km", day: 5, date: "25 Aug", arrTime: "07:00 AM", depTime: "—", transport: "Overnight Volvo Bus", icon: "Home" },
];

export const overviewCards = [
  { title: "Shipki La Border Pass", value: "India-China Border", description: "Scale the high-altitude pass beyond Khab confluence, overlooking the ridges of Tibet (Inner Line Permit required).", icon: "TrendingUp" },
  { title: "UNESCO Mud Temples", value: "Tabo & Dhankar", description: "Explore the ancient mud temples at Tabo and Dhankar Monastery perched on high clay cliffs.", icon: "MapPin" },
  { title: "3 Nights Kaza Homestay", value: "Comfortable Stay Base", description: "Stay at one homestay base in Kaza for all 3 nights, allowing you to ride bag-free for local sightseeing.", icon: "Home" },
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
  budgetCalculator: "budget-values-spiti-p1-v4",
  completedTreks: "completed-treks-spiti-p1",
  packingChecklist: "packing-checklist-spiti-p1",
  completedDays: "completed-days-spiti-p1",
};
