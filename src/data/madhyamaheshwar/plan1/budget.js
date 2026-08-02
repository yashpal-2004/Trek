import { madhyamaheshwarAmounts } from "../amounts";
const data = madhyamaheshwarAmounts.plan1;

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
      description: "Delhi-Rishikesh train/bus + Rishikesh-Ukhimath bus/taxi + Ukhimath-Ransi shared jeep",
      subItems: [
        { name: "Delhi → Rishikesh (Train/AC Bus Round Trip)", price: 800 },
        { name: "Rishikesh → Ukhimath (Shared Taxi/Bus Round Trip)", price: 1400 },
        { name: "Ukhimath → Ransi Shared Jeep Round Trip", price: 400 }
      ]
    },
    { 
      id: "accommodation", 
      label: "Accommodation", 
      amount: data.accommodationCategory, 
      color: "#10B981", 
      icon: "Bed", 
      description: "Homestays & Temple Dharamshala in Ransi & Madhyamaheshwar",
      subItems: [
        { name: "Ransi Homestay (2 Nights, shared)", price: 800 },
        { name: "Madhyamaheshwar Dharamshala/Homestay (2 Nights, shared)", price: 700 }
      ]
    },
    { 
      id: "food", 
      label: "Food & Meals", 
      amount: data.foodCategory, 
      color: "#F59E0B", 
      icon: "Utensils", 
      description: "Local dhabas, tea stops and basic meals along the trail (₹350/day)",
      subItems: [
        { name: "Daily simple meals, tea & trail snacks (₹350/day for 5 days)", price: 1750 }
      ]
    },
  ],
  dailyEstimate: [
    { day: 1, amount: 1530, label: "Delhi → Rishikesh → Ukhimath → Ransi" },
    { day: 2, amount: 1030, label: "Ransi → Bantoli → Madhyamaheshwar (Trek 16 km)" },
    { day: 3, amount: 730, label: "Climb to Budha Madhyamaheshwar & Temple Exploration" },
    { day: 4, amount: 930, label: "Madhyamaheshwar → Ransi descent (Trek 16 km)" },
    { day: 5, amount: 1630, label: "Ransi → Ukhimath → Rishikesh → Delhi" },
  ],
  calculatorDefaults: data.calcDefaults,
};

export const stayOptions = [
  {
    id: 1,
    destination: "Madhyamaheshwar Temple Stays",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    budget: data.stays.madmaheshwar.budget,
    mid: data.stays.madmaheshwar.mid,
    premium: data.stays.madmaheshwar.premium,
    gmvnn: false,
    camping: true,
    hostel: false,
    facilities: ["Basic hot water on demand", "Simple vegetarian meals", "Warm blankets & mattresses"],
    pros: ["Right next to the ancient temple", "Views of Chaukhamba and Kedarnath peaks"],
    cons: ["Very basic facilities", "No mobile network connectivity"],
    tips: "Book a room at the local temple committee dharamshala or local homestays as soon as you arrive.",
    rating: 4.7,
    mapLink: "https://maps.google.com/?q=Madhyamaheshwar",
    hotels: [
      { name: "Temple Committee Dharamshala", price: 500, offline: true },
      { name: "Madmaheshwar Local Homestays", price: 600, offline: true }
    ]
  },
  {
    id: 2,
    destination: "Ransi Base Village Homestays",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
    budget: data.stays.ransi.budget,
    mid: data.stays.ransi.mid,
    premium: data.stays.ransi.premium,
    gmvnn: false,
    camping: false,
    hostel: false,
    facilities: ["Clean running water", "Homecooked Garhwali food", "Mobile network (Jio/Airtel)"],
    pros: ["Warm local hospitality", "Direct access to trailhead"],
    cons: ["Limited premium stay options"],
    tips: "Spend the evening walking around Ransi village and visit the Rakeshwari Temple.",
    rating: 4.5,
    mapLink: "https://maps.google.com/?q=Ransi",
    hotels: [
      { name: "Rakeshwari Homestay Ransi", price: 500, offline: true },
      { name: "Bhatt Homestay Ransi", price: 600, offline: true }
    ]
  }
];
