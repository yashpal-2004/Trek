import { somnathNageshwarAmounts } from "./amounts";
const data = somnathNageshwarAmounts;

export const budget = {
  total: data.budgetTotal,
  perPerson: true,
  currency: "INR",
  categories: [
    {
      id: "transport",
      label: "Transportation",
      amount: data.transportTotal,
      color: "#2563EB",
      icon: "Bus",
      description: "Delhi Unreserved General Train round trip + GSRTC state buses & local shared autos/ferry",
      subItems: [
        { name: "Delhi → Veraval General Coach Ticket", price: data.transportFares.delhiToVeravalTrain },
        { name: "Veraval → Somnath Shared E-Rickshaw", price: data.transportFares.veravalToSomnathAuto },
        { name: "Somnath → Dwarka GSRTC Ordinary Bus", price: data.transportFares.somnathToDwarkaBus },
        { name: "Dwarka → Nageshwar Shared Tempo", price: data.transportFares.dwarkaToNageshwarTaxi },
        { name: "Okha → Beyt Dwarka Shared Ferry", price: data.transportFares.dwarkaToBeytDwarkaBoat },
        { name: "Dwarka → Delhi General Coach Ticket", price: data.transportFares.dwarkaToDelhiTrain }
      ]
    },
    {
      id: "accommodation",
      label: "Accommodation",
      amount: data.stayTotal,
      color: "#10B981",
      icon: "Bed",
      description: "Somnath Trust Dharamshala dorm (1 night) & Dwarka dharamshala room (2 nights)",
      subItems: [
        { name: "Somnath Trust Dharamshala (1 Night)", price: data.stays.somnath.hotelPrice },
        { name: "Dwarka Dharamshala / Budget Room (2 Nights)", price: data.stays.dwarka.hotelPrice * 2 }
      ]
    },
    {
      id: "food",
      label: "Food & Meals",
      amount: data.foodTotal,
      color: "#F59E0B",
      icon: "Utensils",
      description: "Temple Annakshetra Thali (₹80–100), Dhokla, Kathiyawadi Khichdi & station snacks",
      subItems: [
        { name: "Meals & snacks across 4 days (Solo Budget)", price: data.foodTotal }
      ]
    },
    {
      id: "emergency",
      label: "Pooja & Misc Buffer",
      amount: data.miscellaneous,
      color: "#EF4444",
      icon: "Shield",
      description: "Somnath light show ticket (₹30), temple lockers & emergency buffer",
      subItems: [
        { name: "Light show, Locker & Emergency Buffer", price: data.miscellaneous }
      ]
    }
  ],
  dailyEstimate: [
    { day: 0, amount: 420, label: "Delhi → Veraval General Coach (Ticket ₹320 & snacks)" },
    { day: 1, amount: 400, label: "Somnath Darshan (Shared auto, Dharamshala dorm, thali & light show)" },
    { day: 2, amount: 670, label: "Somnath → Dwarka (GSRTC bus, Dharamshala, Dwarkadhish Aarti)" },
    { day: 3, amount: 550, label: "Nageshwar Jyotirlinga, Gopi Talav & Beyt Dwarka ferry" },
    { day: 4, amount: 530, label: "Dwarka → Delhi Return General Train (GS ticket ₹330 & food)" }
  ],
  calculatorDefaults: {
    transport: data.transportTotal,
    stay: data.stayTotal,
    food: data.foodTotal,
    misc: data.miscellaneous
  }
};

export const stayOptions = [
  {
    id: 1,
    destination: "Somnath (Near Temple Gate / Ocean Promenade)",
    image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=800&q=80",
    budget: data.stays.somnath.budget,
    mid: data.stays.somnath.mid,
    premium: data.stays.somnath.premium,
    gmvnn: false,
    camping: false,
    hostel: true,
    facilities: ["Clean Hot Water", "Somnath Trust Management", "Walkable to Temple", "Locker Facility"],
    pros: ["Super affordable ₹200-250 beds in Somnath Trust Dharamshala"],
    cons: ["Shared dorm washrooms during peak season"],
    tips: "Arrive early or book online on Somnath Trust official portal.",
    rating: 4.6,
    mapLink: "https://maps.google.com/?q=Somnath+Temple",
    hotels: [
      { name: "Shree Somnath Trust Dharamshala / Dormitory", price: data.stays.somnath.hotelPrice, offline: true }
    ]
  },
  {
    id: 2,
    destination: "Dwarka (Near Gomti Ghat & Temple)",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    budget: data.stays.dwarka.budget,
    mid: data.stays.dwarka.mid,
    premium: data.stays.dwarka.premium,
    gmvnn: false,
    camping: false,
    hostel: true,
    facilities: ["Clean Rooms", "Walking distance to Gomti Ghat", "Pure Veg Annakshetra Nearby"],
    pros: ["Highly economical dharamshalas near Dwarkadhish temple lane"],
    cons: ["Narrow traditional gallis"],
    tips: "Ask for Dharamshala rooms near Gomti Ghat steps.",
    rating: 4.5,
    mapLink: "https://maps.google.com/?q=Dwarkadhish+Temple",
    hotels: [
      { name: "Dwarka Mahajan Dharamshala / Budget Room", price: data.stays.dwarka.hotelPrice, offline: true }
    ]
  }
];

export const accommodationBreakdown = [];
