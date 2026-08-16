export const trip = {
  title: "Ladakh Overland Bus — Plan 4 (HRTC Bus Both Ways + Rental Bike)",
  subtitle: "A 9-day overland adventure from Delhi to Leh and back using the legendary HRTC bus route via Keylong, with 5 nights exploring Ladakh on a rented motorbike.",
  duration: "Custom Dates",
  durationDays: 9,
  people: 2,
  budgetMin: 16000,
  budgetMax: 18000,
  difficulty: "Strenuous",
  highestAltitude: "5,359m (17,582 ft)",
  totalDistance: "2600 km",
  totalTrekDistance: "0 km",
  startingPoint: "Delhi",
  endingPoint: "Delhi",
  transport: ["HRTC Bus", "Rental Bike"],
  theme: "Teal",
  version: "1.0.0",
  developer: "Trip Team",
};

export const quickStats = [
  { id: "days", label: "Total Days", value: 9, suffix: "", description: "Bus both ways + 5 nights stay", icon: "Calendar" },
  { id: "riding", label: "Riding Distance", value: 450, suffix: " KM", description: "Nubra & Pangong valleys", icon: "Route" },
  { id: "budget", label: "Budget", value: 17.0, suffix: "K", prefix: "₹", description: "Per person estimate", icon: "Wallet" },
  { id: "altitude", label: "Highest Point", value: 5359, suffix: " M (17,582 FT)", description: "Khardung La Pass", icon: "TrendingUp" },
  { id: "passes", label: "High Passes", value: 5, suffix: "", description: "Rohtang/Atal, Baralacha La, Tanglang La, Khardung La, Chang La", icon: "Mountain" },
  { id: "destinations", label: "Major Stops", value: 5, suffix: "", description: "Keylong, Leh town, Nubra Valley, Pangong Tso", icon: "MapPin" },
];

export const routeTimeline = [
  { id: 1, location: "Delhi", altitude: "210m", distance: "0 km", day: 1, date: "Day 1", arrTime: "02:00 PM", depTime: "02:30 PM", transport: "HRTC Bus", icon: "Compass" },
  { id: 2, location: "Keylong (Transit)", altitude: "3080m", distance: "620 km", day: 2, date: "Day 2", arrTime: "06:30 AM", depTime: "05:00 AM (Day 3)", transport: "HRTC Bus", icon: "Home" },
  { id: 3, location: "Leh", altitude: "3524m", distance: "335 km", day: 3, date: "Day 3", arrTime: "05:30 PM", depTime: "08:00 AM (Day 4)", transport: "HRTC Bus", icon: "MapPin" },
  { id: 4, location: "Nubra Valley (Hunder)", altitude: "3048m", distance: "125 km", day: 4, date: "Day 4", arrTime: "02:30 PM", depTime: "07:00 AM (Day 5)", transport: "Rental Bike", icon: "Mountain" },
  { id: 5, location: "Pangong Tso", altitude: "4225m", distance: "165 km", day: 5, date: "Day 5", arrTime: "03:00 PM", depTime: "08:00 AM (Day 6)", transport: "Rental Bike", icon: "Waves" },
  { id: 6, location: "Leh", altitude: "3524m", distance: "160 km", day: 6, date: "Day 6", arrTime: "02:00 PM", depTime: "05:00 AM (Day 7)", transport: "Rental Bike", icon: "MapPin" },
  { id: 7, location: "Keylong (Transit)", altitude: "3080m", distance: "335 km", day: 7, date: "Day 7", arrTime: "05:00 PM", depTime: "06:30 AM (Day 8)", transport: "HRTC Bus", icon: "Home" },
  { id: 8, location: "Delhi", altitude: "210m", distance: "620 km", day: 8, date: "Day 8", arrTime: "11:00 PM", depTime: "—", transport: "HRTC Bus", icon: "Compass" },
];

export const overviewCards = [
  { title: "HRTC Bus Both Ways", value: "Budget Savior", description: "Spend just ₹3,200 round-trip on transport, avoiding expensive flight rates.", icon: "Bus" },
  { title: "Gradual Land Climb", value: "AMS Protection", description: "Climbing via the Leh-Manali highway bus with a night stay at Keylong allows natural acclimatization.", icon: "Shield" },
  { title: "Leh Local Bike Rental", value: "Explore Valleys", description: "Rent a motorcycle in Leh town to conquer Khardung La, Nubra Valley, and Pangong Tso.", icon: "Mountain" },
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
  expenseTracker: "expenses-ladakh-p4",
  budgetCalculator: "budget-values-ladakh-p4",
  completedTreks: "completed-treks-ladakh-p4",
  packingChecklist: "packing-checklist-ladakh-p4",
  completedDays: "completed-days-ladakh-p4",
};
