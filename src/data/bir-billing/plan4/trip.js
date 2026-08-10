import { birBillingAmounts } from "./amounts";
const data = birBillingAmounts;

export const trip = {
  title: "Bir Billing (4 Pax Dharamshala Scooty Route)",
  subtitle: "A 4-day group weekend getaway starting from Sonipat, renting scooties from Dharamshala with costs split equally among 4 people",
  duration: "26 Aug - 30 Aug 2026",
  durationDays: 4,
  people: 4,
  get budgetMin() { return data.budgetTotal - 350; },
  get budgetMax() { return data.budgetTotal + 550; },
  difficulty: "Easy - Moderate",
  highestAltitude: "2,400m (7,874 ft)",
  totalDistance: "1,215 km",
  totalTrekDistance: "3 km (Short sightseeing walks)",
  startingPoint: "Sonipat",
  endingPoint: "Sonipat",
  transport: ["Volvo Bus", "Scooter Rental"],
  theme: "Rose",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 4, suffix: "", description: "Weekend duration", icon: "Calendar" },
  { id: "walking", label: "Walking/Trek", value: 3, suffix: " KM", description: "Waterfall hikes & walks", icon: "Footprints" },
  { id: "budget", label: "Budget", get value() { return (data.budgetTotal / 1000).toFixed(1); }, suffix: "K", prefix: "₹", description: "Per person split estimate", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 2400, suffix: " M (7,874 FT)", description: "Billing Ridge", icon: "TrendingUp" },
  { id: "distance", label: "Total Distance", value: 1215, suffix: " KM", description: "Volvo bus & rented scooties", icon: "Route" },
  { id: "destinations", label: "Destinations", value: 22, suffix: "", description: "Dharamshala, McLeod, Palampur, Bir, Billing, Barot, Andretta", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Sonipat", altitude: "220m", distance: "0 km", day: 1, date: "26 Aug", arrTime: "07:30 PM", depTime: "08:30 PM (Boarding)", transport: "Volvo Bus", icon: "Bus" },
  { id: 2, location: "Dharamshala", altitude: "1457m", distance: "475 km", day: 1, date: "27 Aug", arrTime: "07:00 AM", depTime: "08:00 AM (Scooty Rent)", transport: "Scooty Rental", icon: "Compass" },
  { id: 3, location: "McLeod Ganj", altitude: "2082m", distance: "485 km", day: 1, date: "27 Aug", arrTime: "08:45 AM", depTime: "01:30 PM", transport: "Sightseeing", icon: "MapPin" },
  { id: 4, location: "Bir Tibetan Colony", altitude: "1525m", distance: "570 km", day: 1, date: "27 Aug", arrTime: "05:30 PM", depTime: "09:30 AM (28 Aug)", transport: "Bir Hotel Base", icon: "Home" },
  { id: 5, location: "Billing Take-off", altitude: "2400m", distance: "585 km", day: 2, date: "28 Aug", arrTime: "04:00 PM", depTime: "06:00 PM", transport: "Take-off Visit", icon: "Mountain" },
  { id: 6, location: "Barot Valley", altitude: "1830m", distance: "645 km", day: 3, date: "29 Aug", arrTime: "09:30 AM", depTime: "01:30 PM", transport: "Sightseeing", icon: "Compass" },
  { id: 7, location: "Andretta Pottery", altitude: "940m", distance: "705 km", day: 3, date: "29 Aug", arrTime: "03:00 PM", depTime: "04:30 PM", transport: "Culture Visit", icon: "Compass" },
  { id: 8, location: "Dharamshala (Return)", altitude: "1457m", distance: "740 km", day: 3, date: "29 Aug", arrTime: "06:00 PM", depTime: "08:30 PM (Bus return)", transport: "Volvo Bus", icon: "Bus" },
  { id: 9, location: "Sonipat", altitude: "220m", distance: "1215 km", day: 4, date: "30 Aug", arrTime: "06:00 AM (Arrival)", depTime: "—", transport: "Volvo Bus", icon: "Bus" },
];

export const overviewCards = [
  { title: "22 Places Visited", value: "Complete Kangra-Barot", description: "Covers McLeod Ganj, Palampur, Bir Colony, Billing takeoff, Barot Valley, and Andretta Village.", icon: "MapPin" },
  { title: "Bir Hotel Base", value: "MMT Couple Rooms", description: "Stay at one comfortable hotel base in Bir for both nights, riding baggage-free.", icon: "Home" },
  { title: "Barot Valley & Andretta", value: "Scenic Day Ride", description: "Enjoy fresh trout, Uhl River, Barot Dam, Luhardi Village, and Andretta pottery art.", icon: "Compass" },
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
  expenseTracker: "expenses-bir-billing-plan4",
  budgetCalculator: "budget-values-bir-billing-plan4",
  completedTreks: "completed-treks-bir-billing-plan4",
  packingChecklist: "packing-checklist-bir-billing-plan4",
  completedDays: "completed-days-bir-billing-plan4",
};
