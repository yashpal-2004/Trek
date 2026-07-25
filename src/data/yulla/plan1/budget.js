import { yullaAmounts } from "../amounts";
const data = yullaAmounts.plan1;

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
      description: "Delhi-Shimla volvo + HRTC local buses + local boleros + 2 days Shimla scooty rental & fuel",
      subItems: [
        { name: "Delhi-Shimla Volvo (Round Trip)", price: 1200 },
        { name: "Shimla-Tapri Bus & Bolero Jeeps (Round Trip)", price: 1300 },
        { name: "2 Days Shimla Scooty Rental", price: 500 },
        { name: "Shimla Scooty Fuel", price: 300 }
      ]
    },
    { 
      id: "accommodation", 
      label: "Accommodation", 
      amount: data.accommodationCategory, 
      color: "#10B981", 
      icon: "Bed", 
      description: "Homestays in Yulla Khas village & budget hotels in Shimla",
      subItems: [
        { name: "Yulla Khas Homestay (2 Nights)", price: 1200 },
        { name: "Shimla Budget Hotel (2 Nights)", price: 1000 }
      ]
    },
    { 
      id: "food", 
      label: "Food & Meals", 
      amount: data.foodCategory, 
      color: "#F59E0B", 
      icon: "Utensils", 
      description: "Local meals, transit dhabas, trail snacks, and Shimla cafes",
      subItems: [
        { name: "Daily meals, trail snacks & tea (5 days)", price: 2600 }
      ]
    },
  ],
  dailyEstimate: [
    { day: 0, amount: 600, label: "Delhi → Shimla (Volvo)" },
    { day: 1, amount: 1300, label: "Shimla → Tapri → Yulla Khas stay & food" },
    { day: 2, amount: 1700, label: "Trek to Yulla Kanda & back (Guide, homestay & food)" },
    { day: 3, amount: 1600, label: "Yulla Khas → Shimla (Scooty rent, fuel, stay & food)" },
    { day: 4, amount: 2100, label: "Shimla Sightseeing (Scooty explore, food, overnight bus)" },
    { day: 5, amount: 600, label: "Arrive Delhi (Metro/Breakfast & misc)" },
  ],
  calculatorDefaults: data.calcDefaults,
};

export const stayOptions = [
  {
    id: 1,
    destination: "Yulla Khas Homestays",
    image: "https://images.unsplash.com/photo-1561361531-99522c546d0c?w=800&q=80",
    budget: data.stays.yullaKhas.budget,
    mid: data.stays.yullaKhas.mid,
    premium: data.stays.yullaKhas.premium,
    gmvnn: false,
    camping: false,
    hostel: false,
    facilities: ["Basic hot water", "Traditional Kinnauri meals", "Warm blankets"],
    pros: ["Deep cultural experience", "Extremely friendly local hosts"],
    cons: ["Very basic amenities", "No western toilets in most houses"],
    tips: "Talk to locals about the cap floating ritual at the lake",
    rating: 4.8,
    mapLink: "https://maps.google.com/?q=Yulla+Khas",
    hotels: [
      { name: "Local Homestays (Direct Bookings)", price: data.stays.yullaKhas.homestayPrice, offline: true },
      { name: "Devta Temple Guest Rooms", price: data.stays.yullaKhas.roomPrice, offline: true }
    ]
  },
  {
    id: 2,
    destination: "Shimla Budget Hotels",
    image: "https://images.unsplash.com/photo-1573155993874-d1002f118347?w=800&q=80",
    budget: data.stays.shimla.budget,
    mid: data.stays.shimla.mid,
    premium: data.stays.shimla.premium,
    gmvnn: false,
    camping: false,
    hostel: true,
    facilities: ["Hot water geyser", "Free WiFi", "Centrally located near bus stand"],
    pros: ["Easy transit access", "Close to Ridge/Mall Road"],
    cons: ["Can be noisy near the main roads"],
    tips: "Book guest houses slightly uphill from the main bus stand to get lower rates",
    rating: 4.2,
    mapLink: "https://maps.google.com/?q=Shimla",
    hotels: [
      { name: "Shimla Tourist Guest House", price: data.stays.shimla.hotelPrice, offline: true }
    ]
  }
];
