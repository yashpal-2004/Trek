import { maharashtraAmounts } from "./amounts";
const data = maharashtraAmounts;

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
      description: "Delhi sleeper train round trip + intercity MSRTC buses & local taxis",
      subItems: [
        { name: "Delhi → Nashik Train Sleeper", price: data.transportFares.delhiToNashikTrain },
        { name: "Nashik → Trimbakeshwar Shared Auto", price: data.transportFares.nashikToTrimbakTaxi },
        { name: "Nashik → Sambhaji Nagar MSRTC Bus", price: data.transportFares.nashikToAurangabadBus },
        { name: "Sambhaji Nagar → Grishneshwar Auto", price: data.transportFares.aurangabadToGrishneshwarTaxi },
        { name: "Sambhaji Nagar → Pune Bus", price: data.transportFares.aurangabadToPuneBus },
        { name: "Pune → Bhimashankar Ghat Bus", price: data.transportFares.puneToBhimashankarBus },
        { name: "Pune → Delhi Train Sleeper", price: data.transportFares.puneToDelhiTrain }
      ]
    },
    {
      id: "accommodation",
      label: "Accommodation",
      amount: data.stayTotal,
      color: "#10B981",
      icon: "Bed",
      description: "Hotels & Bhakta Niwas in Trimbakeshwar, Sambhaji Nagar, and Bhimashankar (3 Nights)",
      subItems: [
        { name: "Trimbak Bhakta Niwas (1 Night)", price: data.stays.trimbak.hotelPrice },
        { name: "Sambhaji Nagar Tourist Lodge (1 Night)", price: data.stays.aurangabad.hotelPrice },
        { name: "Bhimashankar Lodge / MTDC (1 Night)", price: data.stays.bhimashankar.hotelPrice }
      ]
    },
    {
      id: "food",
      label: "Food & Meals",
      amount: data.foodTotal,
      color: "#F59E0B",
      icon: "Utensils",
      description: "Misal Pav, Pithla Bhakri, Sol Kadhi, Puran Poli & temple mahaprasad (5 Days)",
      subItems: [
        { name: "Meals & Mahaprasad across 5 days", price: data.foodTotal }
      ]
    },
    {
      id: "emergency",
      label: "Pooja & Misc Buffer",
      amount: data.miscellaneous,
      color: "#EF4444",
      icon: "Shield",
      description: "Temple pooja, Abhishek dhoti, locker fees & emergency buffer",
      subItems: [
        { name: "Pooja, Prasad & Emergency Buffer", price: data.miscellaneous }
      ]
    }
  ],
  dailyEstimate: [
    { day: 0, amount: 1000, label: "Delhi → Nashik Train (Ticket & pantry dinner)" },
    { day: 1, amount: 1350, label: "Trimbakeshwar Darshan (Auto, hotel, Misal Pav & thali)" },
    { day: 2, amount: 1400, label: "Sambhaji Nagar → Grishneshwar & Ellora Caves" },
    { day: 3, amount: 1550, label: "Manchhar → Bhimashankar Sanctuary & Temple Darshan" },
    { day: 4, amount: 1300, label: "Pune Swargate → Delhi Return Train (Train ticket & food)" }
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
    destination: "Trimbakeshwar (Near Temple & Kushavarta)",
    image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=800&q=80",
    budget: data.stays.trimbak.budget,
    mid: data.stays.trimbak.mid,
    premium: data.stays.trimbak.premium,
    gmvnn: false,
    camping: false,
    hostel: true,
    facilities: ["Air Conditioning", "Hot Water", "Walk to Kushavarta Kund", "24hr Check-in"],
    pros: ["Walking distance to Trimbakeshwar Temple & Kushavarta Kund"],
    cons: ["Heavy crowd on Mondays & Shivratri"],
    tips: "Stay in Bhakta Niwas or hotels near Kushavarta Kund for early morning Abhishek.",
    rating: 4.6,
    mapLink: "https://maps.google.com/?q=Trimbakeshwar+Temple",
    hotels: [
      { name: "Trimbakeshwar Bhakta Niwas", price: data.stays.trimbak.hotelPrice, offline: true }
    ]
  },
  {
    id: 2,
    destination: "Sambhaji Nagar / Verul (Grishneshwar)",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    budget: data.stays.aurangabad.budget,
    mid: data.stays.aurangabad.mid,
    premium: data.stays.aurangabad.premium,
    gmvnn: false,
    camping: false,
    hostel: false,
    facilities: ["AC Rooms", "Veg Restaurant", "Near Ellora Caves"],
    pros: ["Close to both Grishneshwar Jyotirlinga and Ellora Caves"],
    cons: ["Limited night transport options after 8 PM"],
    tips: "Stay in Verul village or Sambhaji Nagar bus stand area for easy early morning travel.",
    rating: 4.5,
    mapLink: "https://maps.google.com/?q=Grishneshwar+Temple",
    hotels: [
      { name: "Tourist Lodge Sambhaji Nagar", price: data.stays.aurangabad.hotelPrice, offline: true }
    ]
  },
  {
    id: 3,
    destination: "Bhimashankar Temple Sanctuary",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    budget: data.stays.bhimashankar.budget,
    mid: data.stays.bhimashankar.mid,
    premium: data.stays.bhimashankar.premium,
    gmvnn: false,
    camping: false,
    hostel: false,
    facilities: ["Sanctuary View", "Clean Hot Water", "Canteen"],
    pros: ["Misty forest environment & walking distance to temple"],
    cons: ["Monkeys active near hotel balconies"],
    tips: "Book MTDC resort or temple trust lodge near the bus stand.",
    rating: 4.7,
    mapLink: "https://maps.google.com/?q=Bhimashankar+Temple",
    hotels: [
      { name: "MTDC Resort Bhimashankar", price: data.stays.bhimashankar.hotelPrice, offline: true }
    ]
  }
];

export const accommodationBreakdown = [];
