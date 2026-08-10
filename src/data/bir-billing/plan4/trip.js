import { birBillingAmounts } from "./amounts";
const data = birBillingAmounts;

export const trip = {
  title: "Bir Billing (4 Pax Dharamshala Scooty Route)",
  subtitle: "A 4-day group weekend getaway renting scooties from Dharamshala with costs split equally among 4 people",
  duration: "26 Aug - 30 Aug 2026",
  durationDays: 4,
  people: 4,
  get budgetMin() { return data.budgetTotal - 350; },
  get budgetMax() { return data.budgetTotal + 550; },
  difficulty: "Easy - Moderate",
  highestAltitude: "2,400m (7,874 ft)",
  totalDistance: "1173 km",
  totalTrekDistance: "0 km (Optional forest climb)",
  startingPoint: "Sonipat",
  endingPoint: "Sonipat",
  transport: ["Volvo Bus", "Scooter Rental"],
  theme: "Rose",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 4, suffix: "", description: "Weekend duration", icon: "Calendar" },
  { id: "walking", label: "Walking/Trek", value: 0, suffix: " KM", description: "All transfers via scooty / bus", icon: "Footprints" },
  { id: "budget", label: "Budget", get value() { return (data.budgetTotal / 1000).toFixed(1); }, suffix: "K", prefix: "₹", description: "Per person split estimate", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 2400, suffix: " M (7,874 FT)", description: "Billing Ridge", icon: "TrendingUp" },
  { id: "distance", label: "Total Distance", value: 1173, suffix: " KM", description: "Volvo bus & rented scooties", icon: "Route" },
  { id: "destinations", label: "Destinations", value: 4, suffix: "", description: "Dharamshala, Bir, Billing, McLeod Ganj", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Sonipat", altitude: "220m", distance: "0 km", day: 1, date: "26 Aug", arrTime: "07:30 PM", depTime: "08:30 PM (Boarding)", transport: "Volvo Bus", icon: "Bus" },
  { id: 2, location: "Dharamshala", altitude: "1457m", distance: "475 km", day: 1, date: "27 Aug", arrTime: "07:00 AM", depTime: "08:00 AM (Scooty Rent)", transport: "Scooty Rental", icon: "Compass" },
  { id: 3, location: "Bir Colony", altitude: "1525m", distance: "65 km (Ride)", day: 1, date: "27 Aug", arrTime: "11:00 AM", depTime: "08:30 AM (28 Aug)", transport: "Bir Hotel Base", icon: "Home" },
  { id: 4, location: "McLeod Ganj", altitude: "2082m", distance: "130 km (RT)", day: 2, date: "28 Aug", arrTime: "11:00 AM", depTime: "05:00 PM (Return)", transport: "Sightseeing Ride", icon: "Compass" },
  { id: 5, location: "Billing Take-off", altitude: "2400m", distance: "14 km (Ride)", day: 3, date: "29 Aug", arrTime: "10:30 AM", depTime: "03:30 PM (Return)", transport: "Take-off Visit", icon: "Mountain" },
  { id: 6, location: "Dharamshala (Return)", altitude: "1457m", distance: "65 km (Ride)", day: 3, date: "29 Aug", arrTime: "06:00 PM", depTime: "08:00 PM (Bus return)", transport: "Volvo Bus", icon: "Bus" },
  { id: 7, location: "Sonipat", altitude: "220m", distance: "475 km", day: 4, date: "30 Aug", arrTime: "06:00 AM (Arrival)", depTime: "—", transport: "Volvo Bus", icon: "Bus" },
];

export const overviewCards = [
  { title: "Dharamshala Scooty Pickup", value: "2 Scooties for 4 Pax", description: "Convenient pickup from Dharamshala bus stand to explore Bir, Billing & McLeod Ganj.", icon: "Compass" },
  { title: "Bir Hotel Base", value: "Comfortable MMT Hotel", description: "Stay at one comfortable hotel base in Bir for both nights, riding baggage-free.", icon: "Home" },
  { title: "McLeod Ganj & Palampur", value: "Sightseeing Day Ride", description: "Enjoy scenic pine-lined roads, tea gardens, Dalai Lama Temple, and local cafes.", icon: "TrendingUp" },
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
