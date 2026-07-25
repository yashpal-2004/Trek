import { hemkundAmounts } from "./amounts";
const data = hemkundAmounts;

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
      description: "Delhi-Haridwar train/bus + Haridwar-Govindghat shared taxi + Pulna shuttle",
      subItems: [
        { name: "Delhi → Haridwar (Train/AC Bus Round Trip)", price: 900 },
        { name: "Haridwar → Govindghat (Shared Taxi Round Trip)", price: 1500 },
        { name: "Govindghat → Pulna Shared Jeep", price: 100 }
      ]
    },
    { 
      id: "accommodation", 
      label: "Accommodation", 
      amount: data.accommodationCategory, 
      color: "#10B981", 
      icon: "Bed", 
      description: "Lodges & GMVN guest houses in Govindghat & Ghangaria",
      subItems: [
        { name: "Ghangaria Lodges (3 Nights, shared)", price: 1200 },
        { name: "Govindghat Hotel (2 Nights, shared)", price: 600 }
      ]
    },
    { 
      id: "food", 
      label: "Food & Meals", 
      amount: data.foodCategory, 
      color: "#F59E0B", 
      icon: "Utensils", 
      description: "Langar meals at Hemkund/Govindghat + local dhabas & trail snacks",
      subItems: [
        { name: "Daily meals, trail snacks & tea stops (6 days)", price: 2800 }
      ]
    },
  ],
  dailyEstimate: [
    { day: 1, amount: 1700, label: "Delhi → Haridwar → Govindghat" },
    { day: 2, amount: 1100, label: "Govindghat → Pulna → Ghangaria (Trek 14 km)" },
    { day: 3, amount: 900, label: "Valley of Flowers Exploration (Entry permit & food)" },
    { day: 4, amount: 1000, label: "Hemkund Sahib Darshan & Lake (Trail food & stay)" },
    { day: 5, amount: 1500, label: "Ghangaria → Govindghat → Haridwar (Descent & travel)" },
    { day: 6, amount: 1600, label: "Haridwar Sightseeing & Return to Delhi" },
  ],
  calculatorDefaults: data.calcDefaults,
};

export const stayOptions = [
  {
    id: 1,
    destination: "Ghangaria Base Camp Lodges",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    budget: data.stays.ghangaria.budget,
    mid: data.stays.ghangaria.mid,
    premium: data.stays.ghangaria.premium,
    gmvnn: true,
    camping: false,
    hostel: true,
    facilities: ["Bucket hot water", "Langar & Dhaba food", "Warm quilts"],
    pros: ["Direct gateway to both Valley of Flowers and Hemkund Sahib", "High availability of local dhabas"],
    cons: ["Limited power supply during peak hours", "No mobile network except BSNL"],
    tips: "Arrive before 3 PM in Ghangaria to get clean room choices near main helipad",
    rating: 4.6,
    mapLink: "https://maps.google.com/?q=Ghangaria",
    hotels: [
      { name: "GMVN Tourist Bungalow Ghangaria", price: 800, offline: false },
      { name: "Gurudwara Ghangaria (Langar / Serai)", price: 0, offline: true },
      { name: "Kuber Annex Lodge", price: 600, offline: true }
    ]
  },
  {
    id: 2,
    destination: "Govindghat Transit Hotels",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
    budget: data.stays.govindghat.budget,
    mid: data.stays.govindghat.mid,
    premium: data.stays.govindghat.premium,
    gmvnn: true,
    camping: false,
    hostel: false,
    facilities: ["24h Running Water", "Free parking", "Near Alaknanda confluence"],
    pros: ["Road accessible", "Direct taxi stand for Pulna/Joshimath"],
    cons: ["Can get crowded in peak pilgrim season"],
    tips: "Visit Gurudwara Govindghat for peaceful evening prayers and langar",
    rating: 4.4,
    mapLink: "https://maps.google.com/?q=Govindghat",
    hotels: [
      { name: "Bhagat Hotel & Restaurant", price: 500, offline: true },
      { name: "Gurudwara Govindghat Yatri Niwas", price: 0, offline: true }
    ]
  }
];
