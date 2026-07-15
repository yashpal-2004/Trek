import { garhwalAmounts } from "../amounts";
const data = garhwalAmounts.plan1;

export const budget = {
  total: data.budgetTotal,
  perPerson: true,
  currency: "INR",
  categories: [
    { id: "transport", label: "Transportation", amount: data.transportCategory, color: "#2563EB", icon: "Bus", description: "Train, bus, jeep, shared transport" },
    { id: "accommodation", label: "Accommodation", amount: data.accommodationCategory, color: "#10B981", icon: "Bed", description: "Hostels, GMVN, homestays, temple stays" },
    { id: "food", label: "Food", amount: data.foodCategory, color: "#F59E0B", icon: "Utensils", description: "Meals, snacks, water" },
    { id: "emergency", label: "Emergency & Misc", amount: data.emergencyCategory, color: "#EF4444", icon: "Shield", description: "Contingency, medicines, registration, shopping" },
  ],
  dailyEstimate: [
    { day: 1, amount: 700, label: "Hisar → Haridwar" },
    { day: 2, amount: 1030, label: "To Sagar Village" },
    { day: 3, amount: 550, label: "Rudranath Trek" },
    { day: 4, amount: 950, label: "Return to Gopeshwar" },
    { day: 5, amount: 1080, label: "Chandrashila" },
    { day: 6, amount: 1480, label: "To Rishikesh" },
    { day: 7, amount: 730, label: "Explore Rishikesh" },
    { day: 8, amount: 830, label: "To Hisar (Night Bus)" },
    { day: 9, amount: 0, label: "Reach Hisar" },
  ],
  calculatorDefaults: data.calcDefaults,
};

export const stayOptions = [
  {
    id: 1,
    destination: "Haridwar",
    image: "https://images.unsplash.com/photo-1561361531-99522c546d0c?w=800&q=80",
    budget: data.stays.haridwar.budget,
    mid: data.stays.haridwar.mid,
    premium: data.stays.haridwar.premium,
    gmvnn: false,
    camping: false,
    hostel: true,
    facilities: ["WiFi", "Hot Water", "Locker"],
    pros: ["Near station", "Many options", "24hr check-in"],
    cons: ["Crowded", "Noise near ghats"],
    tips: "Book dharamshala near station for early arrival",
    rating: 4.0,
    mapLink: "https://maps.google.com/?q=Haridwar",
    hotels: [
      { name: "Hotel Ganga Heritage", price: data.stays.haridwar.hotelPrice, link: "https://www.hotelgangaheritage.com" },
      { name: "Zostel Haridwar", price: data.stays.haridwar.zostelPrice, link: "https://www.zostel.com" },
      { name: "Railway Retiring Rooms", price: data.stays.haridwar.retiringPrice, offline: true }
    ]
  },
  {
    id: 2,
    destination: "Sagar Village",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    budget: data.stays.sagar.budget,
    mid: data.stays.sagar.mid,
    premium: data.stays.sagar.premium,
    gmvnn: false,
    camping: true,
    hostel: false,
    facilities: ["Home-cooked meals", "Trek guide info"],
    pros: ["Authentic village experience", "Trek base camp", "Friendly locals"],
    cons: ["Basic amenities", "No ATM", "Limited electricity"],
    tips: "Homestay with local family recommended",
    rating: 4.2,
    mapLink: "https://maps.google.com/?q=Sagar+Village+Uttarakhand",
    hotels: [
      { name: "Local Sagar Homestays", price: data.stays.sagar.homestayPrice, offline: true },
      { name: "Hotel Snow View Sagar", price: data.stays.sagar.hotelPrice, offline: true }
    ]
  },
  {
    id: 3,
    destination: "Rudranath Temple",
    image: "/rudranth.png",
    budget: data.stays.rudranath.budget,
    mid: data.stays.rudranath.mid,
    premium: data.stays.rudranath.premium,
    gmvnn: false,
    camping: true,
    hostel: false,
    facilities: ["Langar food", "Basic shelter"],
    pros: ["Spiritual experience", "Stunning views", "Free temple stay"],
    cons: ["Very basic", "Cold at night", "No running water"],
    tips: "Carry sleeping bag even for temple dharamshala",
    rating: 4.5,
    mapLink: "https://maps.google.com/?q=Rudranath+Temple",
    hotels: [
      { name: "Temple Dharamshala", price: data.stays.rudranath.dharamshalaPrice, offline: true },
      { name: "Local Tents & Shelters", price: 200, offline: true }
    ]
  },
  {
    id: 4,
    destination: "Gopeshwar",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    budget: data.stays.gopeshwar.budget,
    mid: data.stays.gopeshwar.mid,
    premium: data.stays.gopeshwar.premium,
    gmvnn: true,
    camping: false,
    hostel: false,
    facilities: ["ATM", "Market", "Hot Water", "WiFi"],
    pros: ["Last major town", "ATM available", "Good food options"],
    cons: ["Not very scenic", "Transit town feel"],
    tips: "Stock supplies and withdraw cash here",
    rating: 3.9,
    mapLink: "https://maps.google.com/?q=Gopeshwar",
    hotels: [
      { name: "GMVN Tourist Bungalow", price: data.stays.gopeshwar.zostelPrice, link: "https://gmvnonline.com" },
      { name: "Hotel Shivlok", price: data.stays.gopeshwar.hotelPrice, offline: true }
    ]
  },
  {
    id: 5,
    destination: "Chopta",
    image: "/Tungnath.png",
    budget: data.stays.chopta.budget,
    mid: data.stays.chopta.mid,
    premium: data.stays.chopta.premium,
    gmvnn: true,
    camping: true,
    hostel: false,
    facilities: ["Camping gear rental", "Restaurant", "Parking"],
    pros: ["Beautiful meadows", "Tungnath access", "Camping culture"],
    cons: ["Cold at night", "Limited rooms", "Book ahead in season"],
    tips: "GMVN or camping both great options",
    rating: 4.6,
    mapLink: "https://maps.google.com/?q=Chopta+Uttarakhand",
    hotels: [
      { name: "GMVN Chopta Camps", price: 1200, link: "https://gmvnonline.com" },
      { name: "Chopta Meadows Camps", price: data.stays.chopta.campPrice, link: "https://www.choptameadows.com" },
      { name: "Local Dhabas & Shelters", price: 400, offline: true }
    ]
  },
  {
    id: 6,
    destination: "Rishikesh",
    image: "/rishikesh.png",
    budget: data.stays.rishikesh.budget,
    mid: data.stays.rishikesh.mid,
    premium: data.stays.rishikesh.premium,
    gmvnn: false,
    camping: true,
    hostel: true,
    facilities: ["WiFi", "Hot Water", "Shared Lounge"],
    pros: ["Lively hostelling culture", "River rafting close by", "Great cafes"],
    cons: ["Can get noisy", "Traffic during weekends"],
    tips: "Book hostel near Laxman Jhula or Tapovan",
    rating: 4.4,
    mapLink: "https://maps.google.com/?q=Rishikesh",
    hotels: [
      { name: "Zostel Rishikesh", price: data.stays.rishikesh.zostelPrice, link: "https://www.zostel.com" },
      { name: "Blue Jay Hostel", price: 450, link: "https://www.bluejayhostels.com" },
      { name: "Parmarth Niketan Ashram", price: 300, offline: true }
    ]
  },
];
