export const foodGuide = {
  dailyEstimate: { min: 250, max: 350, perPerson: true },
  meals: [
    {
      type: "Breakfast",
      icon: "Coffee",
      items: [
        { place: "Manali Roadside Dhaba", dish: "Aloo Paratha & Chai (on the way out)", cost: 90, vegetarian: true, protein: "Moderate" },
        { place: "Atal Tunnel North Portal", dish: "Boiled Eggs & Hot Maggi", cost: 80, vegetarian: false, protein: "High" },
        { place: "Kaza Homestay", dish: "Local Bread (Tirang) & Butter Tea", cost: 70, vegetarian: true, protein: "Low" }
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
        { place: "Kaza Town Cafe", dish: "Tibetan Thenthuk Noodle Soup", cost: 180, vegetarian: true, protein: "Moderate" },
        { place: "Highway Dhaba (Manali Return)", dish: "Roti + Dal Makhani", cost: 140, vegetarian: true, protein: "Moderate" }
      ]
    },
    {
      type: "Snacks & Drinks",
      icon: "Cookie",
      items: [
        { place: "High Altitude Passes", dish: "Sea Buckthorn Tea", cost: 50, vegetarian: true, protein: "Low" },
        { place: "On Ride", dish: "Energy Bars & Dry Fruits", cost: 60, vegetarian: true, protein: "High" }
      ]
    }
  ],
  localSpecialties: [
    { name: "Chacha-Chachi Rajma Chawal", description: "Iconic piping hot comfort thali at Batal dhaba (14,000 ft)", cost: "₹150" },
    { name: "Sea Buckthorn Tea", description: "Immunity-boosting tea from wild Spiti berries rich in Vitamin C", cost: "₹50–80" },
    { name: "Spiti Homestay Thali", description: "Homestyle Dal, local seasonal greens, and barley bread", cost: "₹180–220" },
    { name: "Tibetan Thenthuk", description: "Hearty hand-pulled noodle soup served hot in Kaza cafes", cost: "₹150–180" }
  ],
  proteinSources: ["Rajma Chawal", "Spiti Dal & Barley", "Eggs at dhabas", "Dry fruits & peanuts"],
  vegetarian: true,
  tips: [
    "Carry at least 2L of water — refill at Kaza before Kunzum Pass, no sources after",
    "Eat hot Rajma Chawal at Batal Chacha-Chachi Dhaba — don't skip it",
    "Keep energy bars and ORS sachets in your riding jacket at all times",
    "Avoid heavy non-veg meals the night before high-pass riding days"
  ]
};
