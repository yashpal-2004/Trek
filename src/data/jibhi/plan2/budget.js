import { jibhiAmounts } from "./amounts";
const data = jibhiAmounts;

export const budget = {
  total: data.budgetTotal,
  perPerson: true,
  currency: "INR",
  categories: [
    { 
      id: "transport", 
      label: "Transportation", 
      amount: data.transportCategory, 
      color: "#3B82F6", 
      icon: "Bus", 
      description: "Sonipat-Aut Volvo + Aut-Jibhi local bus + solo scooter rental & fuel",
      subItems: [
        { name: "Sonipat → Aut Volvo Round Trip", price: 1200 },
        { name: "Aut → Jibhi Local Bus Round Trip", price: 200 },
        { name: "Local Scooty Rental (1 scooter for 2 days)", price: 1000 },
        { name: "Petrol / Fuel for Scooty", price: 300 }
      ]
    },
    { 
      id: "accommodation", 
      label: "Accommodation", 
      amount: data.accommodationCategory, 
      color: "#10B981", 
      icon: "Bed", 
      description: "Cozy backpacker hostel dorms in Jibhi Valley",
      subItems: [
        { name: "Jibhi Hostel Dorm (2 Nights, Bunker Hostel)", price: 900 }
      ]
    },
    { 
      id: "food", 
      label: "Food & Cafes", 
      amount: data.foodCategory, 
      color: "#F59E0B", 
      icon: "Utensils", 
      description: "Sampling local Himachali food, trout fish, and hostel cafes",
      subItems: [
        { name: "Local meals, dhabas & cafe snacks (3 days * ₹350)", price: 1050 }
      ]
    },
  ],
  dailyEstimate: [
    { day: 1, amount: 2000, label: "Sonipat → Jibhi transit, check-in, and local waterfall explore" },
    { day: 2, amount: 1450, label: "Scooty ride up Jalori Pass, hike to Serolsar Lake & Chehni Kothi" },
    { day: 3, amount: 2000, label: "Explore Tirthan river in Gushaini on scooty & overnight bus back to Sonipat" },
  ],
  calculatorDefaults: data.calcDefaults,
};

export const stayOptions = [
  {
    id: 1,
    destination: "Jibhi Backpacker Hostel",
    image: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=800&q=80",
    budget: data.stays.jibhi.budget,
    mid: data.stays.jibhi.mid,
    premium: data.stays.jibhi.premium,
    gmvnn: false,
    camping: false,
    hostel: true,
    facilities: ["Wi-Fi", "Hot showers", "Common room", "Hammocks"],
    pros: ["Very economical", "Great social environment for solo travelers"],
    cons: ["Shared dorm rooms"],
    tips: "Book Bunker Hostel Jibhi or Mudhouse Hostels early for premium social setups.",
    rating: 4.7,
    mapLink: "https://maps.google.com/?q=Jibhi",
    hotels: [
      { name: "The Bunker Hostel Jibhi (Dorm Bed)", price: 450, offline: false },
      { name: "Mudhouse Hostels Jibhi (Dorm Bed)", price: 500, offline: false }
    ]
  }
];
