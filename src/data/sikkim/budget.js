import { sikkimAmounts } from "./amounts";
const data = sikkimAmounts;

export const budget = {
  total: data.budgetTotal,
  perPerson: true,
  currency: "INR",
  categories: [
    { id: "transport", label: "Transportation", amount: data.transportCategory, color: "#2563EB", icon: "Bus", description: "Delhi-NJP rail + shared Sumos" },
    { id: "accommodation", label: "Accommodation", amount: data.accommodationCategory, color: "#10B981", icon: "Bed", description: "Gangtok hotel stays" },
    { id: "food", label: "Food & Package", amount: data.foodCategory, color: "#F59E0B", icon: "Utensils", description: "North Sikkim 2N/3D shared tour package (includes Lachen/Lachung homestays & food)" },
  ],
  dailyEstimate: [
    { day: 1, amount: 700, label: "Delhi → NJP (Train)" },
    { day: 2, amount: 850, label: "NJP → Gangtok (Sumo + stay)" },
    { day: 3, amount: 1900, label: "Gangtok → Lachen (Package)" },
    { day: 4, amount: 1900, label: "Gurudongmar & Lachung" },
    { day: 5, amount: 500, label: "Yumthang → Gangtok stay" },
    { day: 6, amount: 350, label: "Gangtok → NJP Sumo" },
    { day: 7, amount: 700, label: "NJP → Delhi (Train)" },
  ],
  calculatorDefaults: data.calcDefaults,
};

export const stayOptions = [
  {
    id: 1,
    destination: "Gangtok",
    image: "https://images.unsplash.com/photo-1561361531-99522c546d0c?w=800&q=80",
    budget: data.stays.gangtok.budget,
    mid: data.stays.gangtok.mid,
    premium: data.stays.gangtok.premium,
    gmvnn: false,
    camping: false,
    hostel: true,
    facilities: ["WiFi", "Hot Water", "Shared Lounge"],
    pros: ["Lively MG Marg market close by", "Good budget hotels"],
    cons: ["Heavy traffic during daytime"],
    tips: "Book shared room near MG Marg stand to save taxi fare",
    rating: 4.3,
    mapLink: "https://maps.google.com/?q=Gangtok",
    hotels: [
      { name: "Tag Hotel Gangtok", price: data.stays.gangtok.hotelPrice, link: "https://www.booking.com" },
      { name: "Zostel Gangtok", price: data.stays.gangtok.zostelPrice, link: "https://www.zostel.com" },
      { name: "MG Marg Budget Lodges", price: data.stays.gangtok.lodgePrice, offline: true }
    ]
  },
  {
    id: 2,
    destination: "Lachen homestays",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    budget: data.stays.lachen.budget,
    mid: data.stays.lachen.mid,
    premium: data.stays.lachen.premium,
    gmvnn: false,
    camping: false,
    hostel: false,
    facilities: ["Basic bucket hot water", "Homestay dinner included"],
    pros: ["Authentic mountain experience", "Warm hosts"],
    cons: ["Extremely cold", "Limited electricity"],
    tips: "Homestay is included in your North Sikkim Sumo package",
    rating: 4.1,
    mapLink: "https://maps.google.com/?q=Lachen",
    hotels: [
      { name: "Package Homestays (Included in Tour)", price: data.stays.lachen.homestayPrice, offline: true }
    ]
  },
  {
    id: 3,
    destination: "Lachung homestays",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    budget: data.stays.lachung.budget,
    mid: data.stays.lachung.mid,
    premium: data.stays.lachung.premium,
    gmvnn: false,
    camping: false,
    hostel: false,
    facilities: ["Basic bucket hot water", "Homestay dinner included"],
    pros: ["Beautiful scenic views of pine forests", "Clean air"],
    cons: ["Very cold temperatures"],
    tips: "Homestay is included in your North Sikkim Sumo package",
    rating: 4.2,
    mapLink: "https://maps.google.com/?q=Lachung",
    hotels: [
      { name: "Package Homestays (Included in Tour)", price: data.stays.lachung.homestayPrice, offline: true }
    ]
  },
];
