export const trip = {
  title: "Ladakh Fly & Ride — Plan 3 (Flight + Rental Bike + HRTC Return)",
  subtitle: "An 8-day flight-in route from Delhi to Leh, local motorcycle exploration in Leh, Nubra, and Pangong, returning to Delhi via the HRTC bus.",
  duration: "Custom Dates",
  durationDays: 8,
  people: 2,
  budgetMin: 22000,
  budgetMax: 24500,
  difficulty: "Strenuous",
  highestAltitude: "5,359m (17,582 ft)",
  totalDistance: "1450 km",
  totalTrekDistance: "0 km",
  startingPoint: "Delhi",
  endingPoint: "Delhi",
  transport: ["Flight", "Rental Bike", "HRTC Bus"],
  theme: "Teal",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 8, suffix: "", description: "Fly & Ride duration", icon: "Calendar" },
  { id: "riding", label: "Riding Distance", value: 450, suffix: " KM", description: "Leh local, Nubra & Pangong", icon: "Route" },
  { id: "budget", label: "Budget", value: 23, suffix: "K", prefix: "₹", description: "Per person estimate", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 5359, suffix: " M (17,582 FT)", description: "Khardung La Pass", icon: "TrendingUp" },
  { id: "passes", label: "High Passes", value: 2, suffix: "", description: "Khardung La and Chang La", icon: "Mountain" },
  { id: "destinations", label: "Major Stops", value: 4, suffix: "", description: "Leh town, Nubra Valley, Pangong Tso, Keylong", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Delhi", altitude: "210m", distance: "0 km", day: 1, date: "Day 1", arrTime: "05:00 AM", depTime: "06:30 AM", transport: "Flight", icon: "Compass" },
  { id: 2, location: "Leh (Acclimatize)", altitude: "3524m", distance: "620 km", day: 1, date: "Day 1-2", arrTime: "08:00 AM", depTime: "08:00 AM (Day 3)", transport: "Rest / Rest", icon: "Home" },
  { id: 3, location: "Leh Local", altitude: "3524m", distance: "40 km", day: 3, date: "Day 3", arrTime: "10:00 AM", depTime: "05:00 PM", transport: "Rental Bike", icon: "MapPin" },
  { id: 4, location: "Nubra Valley (Hunder)", altitude: "3048m", distance: "125 km", day: 4, date: "Day 4", arrTime: "02:30 PM", depTime: "07:00 AM (Day 5)", transport: "Rental Bike", icon: "Mountain" },
  { id: 5, location: "Pangong Tso", altitude: "4225m", distance: "165 km", day: 5, date: "Day 5", arrTime: "03:00 PM", depTime: "08:00 AM (Day 6)", transport: "Rental Bike", icon: "Waves" },
  { id: 6, location: "Leh", altitude: "3524m", distance: "160 km", day: 6, date: "Day 6", arrTime: "02:00 PM", depTime: "05:00 AM (Day 7)", transport: "Rental Bike", icon: "MapPin" },
  { id: 7, location: "Keylong / Jispa", altitude: "3080m", distance: "335 km", day: 7, date: "Day 7", arrTime: "04:30 PM", depTime: "06:00 AM (Day 8)", transport: "HRTC Bus", icon: "Home" },
  { id: 8, location: "Delhi", altitude: "210m", distance: "620 km", day: 8, date: "Day 8", arrTime: "11:00 PM", depTime: "—", transport: "HRTC Bus", icon: "Compass" },
];

export const overviewCards = [
  { title: "One-Way Flight", value: "Delhi to Leh", description: "Save time and stamina by flying directly over the Himalayan range into Leh.", icon: "Plane" },
  { title: "Acclimatization Rest", value: "48 Hours Mandatory", description: "Must rest inside Leh town for the first 2 days since you land straight at 3,500m.", icon: "Shield" },
  { title: "Rental Bike & HRTC", value: "Rent & Bus Ride", description: "Explore the local passes on a rented motorcycle, then return on the legendary cheap HRTC bus.", icon: "Bus" },
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
  expenseTracker: "expenses-ladakh-p3",
  budgetCalculator: "budget-values-ladakh-p3",
  completedTreks: "completed-treks-ladakh-p3",
  packingChecklist: "packing-checklist-ladakh-p3",
  completedDays: "completed-days-ladakh-p3",
};
