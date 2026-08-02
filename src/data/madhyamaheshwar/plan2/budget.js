import { madhyamaheshwarAmounts } from "../amounts";
const data = madhyamaheshwarAmounts.plan2;

export const budget = {
  total: data.budgetTotal,
  perPerson: true,
  currency: "INR",
  categories: [
    { 
      id: "transport", 
      label: "Transportation", 
      amount: data.transportCategory, 
      color: "#2563EB", 
      icon: "Bus", 
      description: "Delhi-Rishikesh + Rishikesh-Gaurikund + Gaurikund-Ukhimath + Ukhimath-Ransi",
      subItems: [
        { name: "Delhi → Rishikesh (Train/AC Bus Round Trip)", price: 800 },
        { name: "Rishikesh → Gaurikund (Shared Taxi / Bus)", price: 600 },
        { name: "Gaurikund → Ukhimath → Ransi (Local Jeeps)", price: 500 },
        { name: "Ransi → Rishikesh → Delhi Return Transit", price: 700 }
      ]
    },
    { 
      id: "accommodation", 
      label: "Accommodation", 
      amount: data.accommodationCategory, 
      color: "#10B981", 
      icon: "Bed", 
      description: "Hotels, Homestays & Temple Dharamshalas across all stops",
      subItems: [
        { name: "Gaurikund / Guptkashi Hotel (2 Nights, shared)", price: 800 },
        { name: "Kedarnath Temple Stay (1 Night, shared)", price: 600 },
        { name: "Ransi Homestay (2 Nights, shared)", price: 800 },
        { name: "Madhyamaheshwar Dharamshala (2 Nights, shared)", price: 800 }
      ]
    },
    { 
      id: "food", 
      label: "Food & Meals", 
      amount: data.foodCategory, 
      color: "#F59E0B", 
      icon: "Utensils", 
      description: "Local dhabas, basic meals and hot teas on the yatra (₹350/day)",
      subItems: [
        { name: "Daily simple meals, tea & snacks (₹350/day for 8 days)", price: 2800 }
      ]
    },
  ],
  dailyEstimate: [
    { day: 1, amount: 1800, label: "Delhi → Rishikesh → Gaurikund Drive" },
    { day: 2, amount: 1350, label: "Gaurikund → Kedarnath Ascent (Trek 16 km)" },
    { day: 3, amount: 1200, label: "Kedarnath Descent → Guptkashi / Ukhimath" },
    { day: 4, amount: 1100, label: "Ukhimath → Ransi → Madhyamaheshwar (Trek 16 km)" },
    { day: 5, amount: 650, label: "Budha Madmaheshwar Ridge Sunrise & Temple Rest" },
    { day: 6, amount: 800, label: "Madhyamaheshwar → Ransi Descent (Trek 16 km)" },
    { day: 7, amount: 900, label: "Ransi → Ukhimath → Rishikesh (Rest & Explore)" },
    { day: 8, amount: 600, label: "Rishikesh Sightseeing & Overnight return to Delhi" },
  ],
  calculatorDefaults: data.calcDefaults,
};

export const stayOptions = [
  {
    id: 1,
    destination: "Kedarnath Temple Stays",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    budget: data.stays.kedarnath.budget || 600,
    mid: data.stays.kedarnath.mid || 1000,
    premium: data.stays.kedarnath.premium || 2000,
    gmvnn: true,
    camping: false,
    hostel: false,
    facilities: ["Basic rooms / tents", "Common hot water", "Warm blankets"],
    pros: ["Close to Kedarnath Temple", "Saves descent travel time"],
    cons: ["Very crowded", "Extreme sub-zero night temperatures"],
    tips: "Ensure pre-booking through GMVN website or local dharamshalas before embarking.",
    rating: 4.6,
    mapLink: "https://maps.google.com/?q=Kedarnath",
    hotels: [
      { name: "GMVN Kedarnath Cottages", price: 800, offline: false },
      { name: "Local Temple Dharamshalas", price: 500, offline: true }
    ]
  },
  {
    id: 2,
    destination: "Madhyamaheshwar Temple Stays",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    budget: data.stays.madmaheshwar.budget,
    mid: data.stays.madmaheshwar.mid,
    premium: data.stays.madmaheshwar.premium,
    gmvnn: false,
    camping: true,
    hostel: false,
    facilities: ["Basic hot water on demand", "Simple vegetarian meals", "Warm blankets"],
    pros: ["Right next to the ancient temple", "Views of Chaukhamba Peaks"],
    cons: ["No mobile network connectivity"],
    tips: "Book a room at the local temple committee dharamshala as soon as you arrive.",
    rating: 4.7,
    mapLink: "https://maps.google.com/?q=Madhyamaheshwar",
    hotels: [
      { name: "Temple Committee Dharamshala", price: 500, offline: true },
      { name: "Madmaheshwar Local Homestays", price: 600, offline: true }
    ]
  }
];
