export const budget = {
  total: 6600,
  perPerson: true,
  currency: "INR",
  categories: [
    { id: "transport", label: "Transportation", amount: 2000, color: "#2563EB", icon: "Bus", description: "Overnight bus, shared taxis, local jeeps" },
    { id: "accommodation", label: "Accommodation & Tents", amount: 1800, color: "#10B981", icon: "Bed", description: "Tent rental at Thachru & Bhim Dwar (3 nights)" },
    { id: "food", label: "Food & Meals", amount: 1500, color: "#F59E0B", icon: "Utensils", description: "Dhaba meals, langar, trail snacks" },
    { id: "emergency", label: "Permit & Emergency", amount: 1300, color: "#EF4444", icon: "Shield", description: "Yatra registration, oxygen can, first aid, misc" },
  ],
  dailyEstimate: [
    { day: 1, amount: 1070, label: "Hisar → Rampur → Jaon (Overnight Express)" },
    { day: 2, amount: 700, label: "Jaon → Singhad → Thachru" },
    { day: 3, amount: 600, label: "Thachru → Kali Ghati → Bhim Dwar" },
    { day: 4, amount: 500, label: "Summit Day — Bhim Dwar → Shrikhand → Thachru" },
    { day: 5, amount: 880, label: "Thachru → Jaon → Rampur" },
    { day: 6, amount: 850, label: "Rampur → Shimla → Hisar" },
  ],
  calculatorDefaults: { transport: 2000, stay: 1800, food: 1500, emergency: 900, permits: 400 },
};

export const stayOptions = [
  {
    id: 1,
    destination: "Jaon Village",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    budget: 350,
    mid: 500,
    premium: 800,
    gmvnn: false,
    camping: false,
    hostel: false,
    facilities: ["Basic Bedding", "Meals Available", "Hot Water"],
    pros: ["Close to trailhead", "Local food", "Warm"],
    cons: ["Basic facilities", "Limited rooms"],
    name: "Local Homestay / Guesthouse",
    notes: "Register at Singhad next morning",
    hotels: [
      { name: "Jaon Village Homestays", price: 350, offline: true },
      { name: "Government Guest House (Jaon)", price: 500, offline: true }
    ]
  },
  {
    id: 2,
    destination: "Thachru Camp",
    image: "https://images.unsplash.com/photo-1561553590-267fc716698a?w=800&q=80",
    budget: 500,
    mid: 700,
    premium: 1000,
    gmvnn: false,
    camping: true,
    hostel: false,
    facilities: ["Tent Rental", "Blankets", "Basic Meals"],
    pros: ["Official yatra camp", "Meals available"],
    cons: ["Cold nights at 3200m", "Shared facilities"],
    name: "Pilgrimage Tent Camp",
    notes: "Acclimatize here before Kali Ghati",
    hotels: [
      { name: "Pilgrim Shared Tents", price: 500, offline: true },
      { name: "Private Dome Tents", price: 800, offline: true }
    ]
  },
  {
    id: 3,
    destination: "Bhim Dwar",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    budget: 500,
    mid: 700,
    premium: 900,
    gmvnn: false,
    camping: true,
    hostel: false,
    facilities: ["Tent Rental", "Blankets", "Hot Meals", "Langar"],
    pros: ["Base camp for summit", "Langar available", "Scenic"],
    cons: ["Very cold at 3800m", "Limited facilities"],
    name: "Bhim Dwar Tent Camp",
    notes: "Summit push leaves at 2:30 AM from here",
    hotels: [
      { name: "Bhim Dwar Shared Tents", price: 500, offline: true },
      { name: "Nain Sarovar Base Tents", price: 700, offline: true }
    ]
  },
];
