import { garhwalAmounts } from "../amounts";
const data = garhwalAmounts.plan2;

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
    { day: 1, amount: 300, label: "Hisar → Haridwar" },
    { day: 2, amount: 1150, label: "To Sagar Village" },
    { day: 3, amount: 650, label: "Rudranath Trek" },
    { day: 4, amount: 1180, label: "Return to Gopeshwar" },
    { day: 5, amount: 1350, label: "Chandrashila" },
    { day: 6, amount: 1780, label: "To Hisar (Overnight Bus)" },
    { day: 7, amount: 0, label: "Reach Hisar" },
  ],
  calculatorDefaults: data.calcDefaults,
};

export const stayOptions = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
      { name: "GMVN Tourist Bungalow", price: 800, link: "https://gmvnonline.com" },
      { name: "Hotel Shivlok", price: data.stays.gopeshwar.hotelPrice, offline: true }
    ]
  },
  {
    id: 4,
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
];
