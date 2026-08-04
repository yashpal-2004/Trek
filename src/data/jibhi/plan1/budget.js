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
      description: "Sonipat-Aut Volvo + Aut-Jibhi local bus + scooter rental (shared fuel)",
      subItems: [
        { name: "Sonipat → Aut Volvo Round Trip", price: 1200 },
        { name: "Aut → Jibhi Local Bus Round Trip", price: 200 },
        { name: "Local Scooty Rental (2 scooters for 2 days, couples share)", price: 500 },
        { name: "Petrol / Fuel for Scooties (shared share)", price: 200 }
      ]
    },
    { 
      id: "accommodation", 
      label: "Accommodation", 
      amount: data.accommodationCategory, 
      color: "#10B981", 
      icon: "Bed", 
      description: "Scenic riverside pine hotels and cozy cottages in Jibhi Valley",
      subItems: [
        { name: "Riverside Wooden Cottage (2 Nights, double room share)", price: 1800 }
      ]
    },
    { 
      id: "food", 
      label: "Food & Cafes", 
      amount: data.foodCategory, 
      color: "#F59E0B", 
      icon: "Utensils", 
      description: "Sampling wood-fired pizzas, trout fish, and cafes in Jibhi",
      subItems: [
        { name: "Tibetan dishes, cafe meals & snacks (3 days * ₹350)", price: 1050 }
      ]
    },
  ],
  dailyEstimate: [
    { day: 1, amount: 2000, label: "Sonipat → Jibhi transit, check-in, and local waterfall scooty ride" },
    { day: 2, amount: 1550, label: "Scooty ride up Jalori Pass, forest hike to Serolsar Lake & Chehni Kothi" },
    { day: 3, amount: 2600, label: "Explore Tirthan river in Gushaini on scooty & overnight bus back to Sonipat" },
  ],
  calculatorDefaults: data.calcDefaults,
};

export const stayOptions = [
  {
    id: 1,
    destination: "Jibhi Pine Valley",
    image: "https://images.unsplash.com/photo-1582296766465-b1660f73c683?w=800&q=80",
    budget: data.stays.jibhi.budget,
    mid: data.stays.jibhi.mid,
    premium: data.stays.jibhi.premium,
    gmvnn: false,
    camping: false,
    hostel: false,
    facilities: ["Wi-Fi", "Hot showers", "Attached balcony", "Bonfire"],
    pros: ["Stunning river sound", "Spacious wooden rooms for couples"],
    cons: ["Slight walk from main road link"],
    tips: "Book pine-wood balcony cottages facing the river for the ultimate relaxing noise.",
    rating: 4.8,
    mapLink: "https://maps.google.com/?q=Jibhi",
    hotels: [
      { name: "Creekside Pine Wooden Cottages", price: 1800, offline: false },
      { name: "Hope Cafe Rooms Jibhi", price: 1800, offline: false }
    ]
  }
];
