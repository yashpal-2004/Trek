import { birBillingAmounts } from "./amounts";
const data = birBillingAmounts;

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
      description: "Sonipat-Bir Volvo + 1-day scooter exploration + cab to Billing (to avoid leaving scooter at top)",
      subItems: [
        { name: "Sonipat → Bir Volvo Round Trip", price: 1200 },
        { name: "Local Scooty Rental (1 scooter for Day 1 explore)", price: 500 },
        { name: "Petrol / Fuel for Scooty exploration", price: 300 },
        { name: "Bir → Billing Cab (One-way transit for camp/flight)", price: 400 }
      ]
    },
    { 
      id: "accommodation", 
      label: "Accommodation", 
      amount: data.accommodationCategory, 
      color: "#10B981", 
      icon: "Bed", 
      description: "Cozy backpacker hostel dorm in Bir Tibetan Colony (staying both nights in the same hostel)",
      subItems: [
        { name: "Bir Colony Hostel Dorm (2 Nights, Bunker Hostel)", price: 900 }
      ]
    },
    { 
      id: "food", 
      label: "Food & Cafes", 
      amount: data.foodCategory, 
      color: "#F59E0B", 
      icon: "Utensils", 
      description: "Tasting local Tibetan dishes, momos, and visiting cute Bir cafes",
      subItems: [
        { name: "Tibetan dishes, cafe meals & snacks (3 days * ₹350)", price: 1050 }
      ]
    },
  ],
  dailyEstimate: [
    { day: 1, amount: 2000, label: "Sonipat → Bir transit & scooter exploration around local monasteries" },
    { day: 2, amount: 1600, label: "Cab up to Billing ridge & sunset camping" },
    { day: 3, amount: 4050, label: "Tandem Paragliding flight back to Bir Colony & return bus to Sonipat" },
  ],
  calculatorDefaults: data.calcDefaults,
};

export const stayOptions = [
  {
    id: 1,
    destination: "Bir Tibetan Colony",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
    budget: data.stays.bir.budget,
    mid: data.stays.bir.mid,
    premium: data.stays.bir.premium,
    gmvnn: false,
    camping: false,
    hostel: true,
    facilities: ["Wi-Fi", "Hot showers", "Cafe", "Hammocks"],
    pros: ["Very economical", "Great social environment for solo travelers"],
    cons: ["Shared dorm rooms"],
    tips: "Book Zostel or Bunker hostels early for premium dorm locations.",
    rating: 4.7,
    mapLink: "https://maps.google.com/?q=Bir+Tibetan+Colony",
    hotels: [
      { name: "Zostel Bir (Dorm Bed)", price: 499, offline: false },
      { name: "The Bunker Hostel (Dorm Bed)", price: 450, offline: false },
      { name: "Zostel Bir (Private Room)", price: 1800, offline: false }
    ]
  },
  {
    id: 2,
    destination: "Billing Take-off Ridge",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
    budget: data.stays.billing.budget,
    mid: data.stays.billing.mid,
    premium: data.stays.billing.premium,
    gmvnn: false,
    camping: true,
    hostel: false,
    facilities: ["Pre-pitched tents", "Campfire", "Dinner included"],
    pros: ["Directly on the paragliding field", "Spectacular night sky"],
    cons: ["Basic washroom facilities at altitude"],
    tips: "Keep warm clothes ready as temperatures drop to 5°C on the ridge at night.",
    rating: 4.6,
    mapLink: "https://maps.google.com/?q=Billing+Take-off+Point",
    hotels: [
      { name: "Ridge Wilderness Camp", price: 1200, offline: false },
      { name: "Sky Blue Camps Billing", price: 1100, offline: false }
    ]
  }
];
