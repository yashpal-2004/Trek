import { yullaAmounts } from "../amounts";
const data = yullaAmounts.plan3;

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
      description: "Delhi-Shimla overnight bus + HRTC local buses to Tapri + local Bolero jeep transfers",
      subItems: [
        { name: "Delhi-Shimla Volvo (Round Trip)", price: 1200 },
        { name: "Shimla-Tapri HRTC Bus (Round Trip)", price: 800 },
        { name: "Tapri-Yulla Khas Bolero Jeeps (Round Trip)", price: 200 },
        { name: "Local Auto / Misc Transit", price: 200 }
      ]
    },
    { 
      id: "accommodation", 
      label: "Accommodation", 
      amount: data.accommodationCategory, 
      color: "#10B981", 
      icon: "Bed", 
      description: "Traditional village homestay in Yulla Khas (2 Nights)",
      subItems: [
        { name: "Yulla Khas Homestay (2 Nights)", price: 1200 }
      ]
    },
    { 
      id: "food", 
      label: "Food & Meals", 
      amount: data.foodCategory, 
      color: "#F59E0B", 
      icon: "Utensils", 
      description: "Local Kinnauri homestay meals, highway dhabas, and trail energy snacks",
      subItems: [
        { name: "Daily meals, trail snacks & tea (4 days)", price: 1400 }
      ]
    },
    { 
      id: "emergency", 
      label: "Emergency & Misc", 
      amount: data.emergencyCategory, 
      color: "#EF4444", 
      icon: "Shield", 
      description: "Contingency, medicines, local guide contribution",
      subItems: [
        { name: "Emergency fund & guide share", price: 200 }
      ]
    }
  ],
  dailyEstimate: [
    { day: 0, amount: 600, label: "Delhi → Shimla (Volvo Bus)" },
    { day: 1, amount: 1300, label: "Shimla → Tapri → Yulla Khas stay & meals" },
    { day: 2, amount: 1700, label: "Trek to Yulla Kanda Lake & back (Homestay & food)" },
    { day: 3, amount: 1400, label: "Yulla Khas → Tapri → Shimla → Delhi Bus" },
    { day: 4, amount: 200, label: "Arrive Delhi (Metro / Breakfast)" }
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
  }
];
