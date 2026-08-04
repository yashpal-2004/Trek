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
      description: "Sonipat-Bir overnight semi-sleeper Volvo + local scooter rental & petrol",
      subItems: [
        { name: "Sonipat → Bir Volvo Round Trip", price: 1200 },
        { name: "Local Scooty Rental (2 scooties shared among 4 for 1 day)", price: 250 },
        { name: "Petrol / Fuel for Scooties (₹300 per scooty shared by 2)", price: 150 }
      ]
    },
    { 
      id: "accommodation", 
      label: "Accommodation", 
      amount: data.accommodationCategory, 
      color: "#10B981", 
      icon: "Bed", 
      description: "Cozy hotels / private double rooms in Bir Tibetan Colony + ridge camps in Billing",
      subItems: [
        { name: "Bir Colony Hotel Private Room (1 Night, double share)", price: 900 },
        { name: "Billing Dome Tents (1 Night, incl. campfire & breakfast)", price: 1200 }
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
    { day: 1, amount: 1300, label: "Delhi → Bir transit & Monastery cafe hopping" },
    { day: 2, amount: 2000, label: "Trek to Billing & Sunset ridge camping" },
    { day: 3, amount: 3950, label: "Tandem Paragliding flight down to Bir & return to Delhi" },
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
    pros: ["Walkable to landing site", "Great local cafes around"],
    cons: ["Slightly noisy during peak flying season"],
    tips: "Choose hostels in the Colony area for close access to monasteries and food.",
    rating: 4.7,
    mapLink: "https://maps.google.com/?q=Bir+Tibetan+Colony",
    hotels: [
      { name: "Zostel Bir (Private Double Room)", price: 900, offline: false },
      { name: "Oak Hotel Bir (Private Room)", price: 1200, offline: false },
      { name: "Zostel Bir (Dorm Bed)", price: 499, offline: false },
      { name: "The Bunker Hostel (Dorm Bed)", price: 450, offline: false }
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
    pros: ["Unbeatable sunset and valley views", "Sleep right at the take-off point"],
    cons: ["Shared basic toilets", "No running hot water"],
    tips: "Keep your warm windcheaters handy; it gets very windy on the ridge.",
    rating: 4.8,
    mapLink: "https://maps.google.com/?q=Billing+Take-off+Point",
    hotels: [
      { name: "Billing Sky Camps", price: 1200, offline: true }
    ]
  }
];
