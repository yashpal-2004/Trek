export const budget = {
  get total() {
    return this.categories.reduce((sum, c) => sum + c.amount, 0);
  },
  perPerson: true,
  currency: "INR",
  categories: [
    { id: "transport", label: "Transportation", amount: 2650, color: "#2563EB", icon: "Bus", description: "Volvo bus to Manali, local shared cabs to Jobra and Chatru crossover direct" },
    { id: "accommodation", label: "Accommodation & Tents", amount: 1500, color: "#10B981", icon: "Bed", description: "Tent rentals at Chika, Balu Ka Ghera, Shea Goru (3 Nights)" },
    { id: "food", label: "Food & Meals", amount: 1800, color: "#F59E0B", icon: "Utensils", description: "Lahaul local dhabas, trail mixes, camp breakfasts/dinners" },
    { id: "emergency", label: "Permit & Emergency", amount: 100, color: "#EF4444", icon: "Shield", description: "Forest permits, green tax, first aid, oxygen cylinders buffer" },
  ],
  dailyEstimate: [
    { day: 1, amount: 1450, label: "Delhi → Manali Volvo + Jobra → Chika" },
    { day: 2, amount: 500, label: "Chika → Balu Ka Ghera" },
    { day: 3, amount: 500, label: "Balu Ka Ghera → Pass Summit → Shea Goru" },
    { day: 4, amount: 1800, label: "Shea Goru → Chatru → Manali → Delhi" },
  ],
  calculatorDefaults: { transport: 2650, stay: 1500, food: 1800, emergency: 0, permits: 100 },
};

export const stayOptions = [
  {
    id: 1,
    destination: "Chika Camp",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    budget: 300,
    mid: 500,
    premium: 800,
    gmvnn: false,
    camping: true,
    hostel: false,
    facilities: ["Tent Rentals", "Toilet Tents", "Drinking Water"],
    pros: ["Green meadow environment", "Water stream next to camp", "Easy access"],
    cons: ["Very basic dry toilets", "No electricity"],
    name: "Chika Alpine Campsite",
    notes: "Acclimatize here before proceeding to higher camps",
    hotels: [
      { name: "Standard Dome Tents", price: 300, offline: true },
      { name: "Luxury Group Tents", price: 600, offline: true }
    ]
  },
  {
    id: 2,
    destination: "Balu Ka Ghera",
    image: "https://images.unsplash.com/photo-1561553590-267fc716698a?w=800&q=80",
    budget: 500,
    mid: 700,
    premium: 1000,
    gmvnn: false,
    camping: true,
    hostel: false,
    facilities: ["Tents & Sleeping Bags", "Basic Meals"],
    pros: ["Sandy flatbed camp", "Towering peak surrounds"],
    cons: ["Freezing night temperatures", "Windy location"],
    name: "Balu Ka Ghera Sand Camp",
    notes: "Situated at 3,600m right below the Hampta Pass",
    hotels: [
      { name: "Standard Camping Tents", price: 500, offline: true },
      { name: "Heavy Weather Expedition Tents", price: 800, offline: true }
    ]
  },
  {
    id: 3,
    destination: "Shea Goru",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    budget: 500,
    mid: 700,
    premium: 950,
    gmvnn: false,
    camping: true,
    hostel: false,
    facilities: ["Tent Rental", "River Crossing Aid"],
    pros: ["Acclimatization camp in Lahaul valley", "Stunning glacial vistas"],
    cons: ["Very cold nights", "Exposed to heavy crosswinds"],
    name: "Shea Goru Riverbed Camp",
    notes: "Situated at 3,900m after descending the pass",
    hotels: [
      { name: "Pilgrim Shared Tents", price: 500, offline: true },
      { name: "Expedition Single Tents", price: 800, offline: true }
    ]
  }
];
