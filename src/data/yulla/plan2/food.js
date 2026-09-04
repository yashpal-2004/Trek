export const foodGuide = {
  dailyEstimate: { min: 250, max: 400, perPerson: true },
  meals: [
    {
      type: "Breakfast",
      icon: "Coffee",
      items: [
        { place: "Shimla Transit Stand", dish: "Aloo Paratha / Tea", cost: 90, vegetarian: true, protein: "Moderate" },
        { place: "Yulla Khas Homestay", dish: "Siddu (local Himachali dish) with Ghee / Tea", cost: 80, vegetarian: true, protein: "Moderate" },
        { place: "Base Camp / Meadows", dish: "Oats / Porridge + Hot Tea", cost: 60, vegetarian: true, protein: "Moderate" }
      ],
    },
    {
      type: "Lunch",
      icon: "UtensilsCrossed",
      items: [
        { place: "Tapri Highway Dhaba", dish: "Kadi Chawal / Rajma Chawal", cost: 120, vegetarian: true, protein: "Moderate" },
        { place: "Trek route / Pack lunch", dish: "Boiled potatoes, sandwiches & energy bars", cost: 80, vegetarian: true, protein: "Low" },
        { place: "Yulla Khas Local Diner", dish: "Himachali Dham (traditional feast)", cost: 150, vegetarian: true, protein: "High" }
      ],
    },
    {
      type: "Dinner",
      icon: "Moon",
      items: [
        { place: "Yulla Khas Homestay", dish: "Roti, local leafy vegetable (Koda), Dal & Rice", cost: 120, vegetarian: true, protein: "Moderate" },
        { place: "Base Camp Tents", dish: "Freshly prepared Khichdi / Soup", cost: 100, vegetarian: true, protein: "Moderate" }
      ]
    }
  ],
  localSpecialties: [
    { name: "Siddu", description: "Traditional steamed wheat bread stuffed with walnuts, poppy seeds & ghee", cost: "₹80–120" },
    { name: "Kinnauri Apples", description: "World-famous crisp & sweet juicy organic apples fresh from village orchards", cost: "₹80–150/kg" },
    { name: "Chilgoza (Pine Nuts)", description: "Rare high-altitude wild pine nuts harvested in Kinnaur forests", cost: "₹300–500/100g" },
    { name: "Kinnauri Salted Tea (Cha)", description: "Butter tea spiced with local salt and herbs", cost: "₹30–50" },
    { name: "Himachali Dham", description: "Festive vegetarian feast cooked in brass utensils with madra & khatta", cost: "₹150–250" },
  ],
  proteinSources: [
    "Rajma (Kinnauri Kidney Beans)",
    "Black Gram & Chana Dal",
    "Stuffed Siddu with Nuts & Poppy Seeds",
    "Desi Ghee & Fresh Curd",
    "Energy Bars & Almonds (carry on trek)"
  ],
  tips: [
    "Try fresh Siddu with warm melting ghee at Yulla Khas homestays",
    "Drink plenty of hot liquids to stay hydrated in high-altitude cold weather",
    "Carry dry fruits, chocolates, and energy bars for the 24 km summit trek day",
    "Eat a light carb-heavy dinner before early morning trek start"
  ]
};
