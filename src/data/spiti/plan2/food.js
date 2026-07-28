export const foodGuide = {
  dailyEstimate: { min: 250, max: 350, perPerson: true },
  meals: [
    {
      type: "Breakfast",
      icon: "Coffee",
      items: [
        { place: "Old Manali Cafes", dish: "Omelette & Wood-fired Toast", cost: 150, vegetarian: false, protein: "High" },
        { place: "Atal Tunnel North Portal", dish: "Aloo Paratha & Hot Chai", cost: 90, vegetarian: true, protein: "Moderate" },
        { place: "Kaza Homestay", dish: "Fresh Local Bread (Tirang) & Butter Tea", cost: 80, vegetarian: true, protein: "Moderate" }
      ]
    },
    {
      type: "Lunch",
      icon: "UtensilsCrossed",
      items: [
        { place: "Batal Chacha-Chachi Dhaba", dish: "Hot Rajma Chawal & Kadhi", cost: 150, vegetarian: true, protein: "High" },
        { place: "Kibber / Langza Village", dish: "Thukpa & Steamed Veg Momos", cost: 120, vegetarian: true, protein: "Moderate" },
        { place: "Chhatru Dhabas", dish: "Egg Maggi / Fried Rice", cost: 100, vegetarian: false, protein: "Moderate" }
      ]
    },
    {
      type: "Dinner",
      icon: "Moon",
      items: [
        { place: "Kaza Homestay", dish: "Spiti Dal, Rice, Local Veg & Roti", cost: 200, vegetarian: true, protein: "High" },
        { place: "Old Manali Cafes", dish: "Pan-fried Trout Fish / Pizza", cost: 250, vegetarian: false, protein: "High" },
        { place: "Highway Dhabas", dish: "Roti + Dal Makhani", cost: 140, vegetarian: true, protein: "Moderate" }
      ]
    },
    {
      type: "Snacks & Drinks",
      icon: "Cookie",
      items: [
        { place: "High Altitude Passes", dish: "Butter Tea / Sea Buckthorn Tea", cost: 40, vegetarian: true, protein: "Low" },
        { place: "On Trail", dish: "Energy Bars & Dry Fruits", cost: 60, vegetarian: true, protein: "High" }
      ]
    }
  ],
  localSpecialties: [
    { name: "Chacha-Chachi Rajma Chawal", description: "Iconic piping hot comfort thali at Batal dhaba (14,000 ft)", cost: "₹150" },
    { name: "Sea Buckthorn Tea", description: "Immunity-boosting tea made from wild Spiti berries rich in Vitamin C", cost: "₹50–80" },
    { name: "Spiti Homestay Thali", description: "Homestyle Dal, local seasonal greens, and barley bread", cost: "₹180–220" },
    { name: "Trout Fish", description: "Fresh mountain trout served grilled or pan-fried in Old Manali", cost: "₹250–350" }
  ],
  proteinSources: ["Rajma Chawal", "Spiti Dal & Barley", "Eggs at dhabas", "Dry fruits & peanuts"],
  vegetarian: false,
  tips: [
    "Enjoy hot Rajma Chawal at Batal Chacha-Chachi Dhaba",
    "Sip warm Sea Buckthorn tea in Kaza for high-altitude hydration",
    "Keep protein bars in your jacket pocket during long rides",
    "Avoid heavy non-veg meals right before riding over high passes"
  ]
};
