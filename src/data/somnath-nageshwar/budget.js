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
      description: "Delhi sleeper train round trip + GSRTC state buses & local autos/ferry",
      subItems: [
        { name: "Delhi → Veraval Train Sleeper", price: data.transportFares.delhiToVeravalTrain },
        { name: "Veraval → Somnath Auto", price: data.transportFares.veravalToSomnathAuto },
        { name: "Somnath → Dwarka GSRTC Bus", price: data.transportFares.somnathToDwarkaBus },
        { name: "Dwarka → Nageshwar Taxi", price: data.transportFares.dwarkaToNageshwarTaxi },
        { name: "Okha → Beyt Dwarka Boat Ferry", price: data.transportFares.dwarkaToBeytDwarkaBoat },
        { name: "Dwarka → Delhi Train Sleeper", price: data.transportFares.dwarkaToDelhiTrain }
      ]
    },
    {
      id: "accommodation",
      label: "Accommodation",
      amount: data.stayTotal,
      color: "#10B981",
      icon: "Bed",
      description: "Somnath Trust guest house (1 night) & Dwarka dharamshala (2 nights)",
      subItems: [
        { name: "Somnath Trust Hotel (1 Night)", price: data.stays.somnath.hotelPrice },
        { name: "Dwarka Dharamshala / Hotel (2 Nights)", price: data.stays.dwarka.hotelPrice * 2 }
      ]
    },
    {
      id: "food",
      label: "Food & Meals",
      amount: data.foodTotal,
      color: "#F59E0B",
      icon: "Utensils",
      description: "Gujarati Thali, Kathiyawadi Khichdi, Dhokla, Farsan & highway meals (4 Days)",
      subItems: [
        { name: "Meals & snacks across 4 days", price: data.foodTotal }
      ]
    },
    {
      id: "emergency",
      label: "Pooja & Misc Buffer",
      amount: data.miscellaneous,
      color: "#EF4444",
      icon: "Shield",
      description: "Somnath sound show ticket, locker fees, Beyt Dwarka pooja & misc buffer",
      subItems: [
        { name: "Sound show, Locker & Emergency Buffer", price: data.miscellaneous }
      ]
    }
  ],
  dailyEstimate: [
    { day: 0, amount: 900, label: "Delhi → Veraval Train (Ticket & pantry dinner)" },
    { day: 1, amount: 850, label: "Somnath Darshan (Auto, guest house, thali & sound show)" },
    { day: 2, amount: 1150, label: "Somnath → Dwarka (GSRTC bus, hotel, Dwarkadhish Aarti)" },
    { day: 3, amount: 1000, label: "Nageshwar Jyotirlinga, Gopi Talav & Beyt Dwarka ferry" },
    { day: 4, amount: 1050, label: "Dwarka → Delhi Return Train (Train ticket & food)" }
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
    destination: "Somnath (Near Temple & Ocean Front)",
    image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?w=800&q=80",
    budget: data.stays.somnath.budget,
    mid: data.stays.somnath.mid,
    premium: data.stays.somnath.premium,
    gmvnn: false,
    camping: false,
    hostel: true,
    facilities: ["Air Conditioning", "Hot Water", "Walkable to Somnath Temple", "Ocean View"],
    pros: ["Walking distance to Somnath Temple & ocean promenade"],
    cons: ["Strict advance booking required during festival season"],
    tips: "Book Shree Somnath Trust Sagar Darshan guest house for ocean view rooms.",
    rating: 4.7,
    mapLink: "https://maps.google.com/?q=Somnath+Temple",
    hotels: [
      { name: "Shree Somnath Trust Sagar Darshan", price: data.stays.somnath.hotelPrice, offline: true }
    ]
  },
  {
    id: 2,
    destination: "Dwarka (Near Dwarkadhish Mandir)",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    budget: data.stays.dwarka.budget,
    mid: data.stays.dwarka.mid,
    premium: data.stays.dwarka.premium,
    gmvnn: false,
    camping: false,
    hostel: false,
    facilities: ["AC Rooms", "Gomti Ghat View", "Pure Veg Restaurant"],
    pros: ["Walking distance to Jagat Mandir & Gomti Ghat"],
    cons: ["Narrow streets near temple zone"],
    tips: "Choose Dharamshalas near Gomti Ghat for scenic morning river walks.",
    rating: 4.6,
    mapLink: "https://maps.google.com/?q=Dwarkadhish+Temple",
    hotels: [
      { name: "Dwarka Temple View Guest House", price: data.stays.dwarka.hotelPrice, offline: true }
    ]
  }
];

export const accommodationBreakdown = [];
