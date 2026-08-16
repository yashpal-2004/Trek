export const foodGuide = {
  dailyEstimate: { min: 250, max: 400, perPerson: true },
  meals: [
    {
      type: "Breakfast",
      icon: "Coffee",
      items: [
        { place: "Srinagar local bakers (Kandur)", dish: "Tsot or Girda bread with Nun Chai (salt tea)", cost: 40, vegetarian: true, protein: "Low" },
        { place: "Tourist cafes / dhabas", dish: "Aloo Paratha or Omelette with Chai", cost: 70, vegetarian: false, protein: "Moderate" }
      ]
    },
    {
      type: "Lunch",
      icon: "Utensils",
      items: [
        { place: "Local Srinagar restaurants", dish: "Kashmiri Wazwan Thali", cost: 180, vegetarian: false, protein: "High" },
        { place: "Pure veg dhabas", dish: "Rajma Rice or Veg Thali", cost: 110, vegetarian: true, protein: "Moderate" }
      ]
    },
    {
      type: "Dinner",
      icon: "Moon",
      items: [
        { place: "Khayam Chowk grills", dish: "Mutton or Chicken Tujji with local Lavasa bread", cost: 150, vegetarian: false, protein: "High" },
        { place: "Houseboats / Hotels", dish: "Yellow Dal, Sabzi, and rice", cost: 120, vegetarian: true, protein: "Moderate" }
      ]
    }
  ],
  localSpecialties: [
    { name: "Kashmiri Wazwan", description: "Multi-course feast of mutton dishes (Rogan Josh, Rista, Gushtaba) served on a large copper plate (Trami).", cost: "₹180–300" },
    { name: "Mutton Tujji", description: "Charcoal-grilled minced meat skewers served with a variety of local yogurt chutneys and fresh Lavasa bread.", cost: "₹120–180" },
    { name: "Kahwa", description: "Traditional green tea brewed with saffron strands, cinnamon sticks, cardamom, and topped with crushed almonds.", cost: "₹40–60" },
    { name: "Nun Chai", description: "Traditional pink-colored salt tea brewed with green tea leaves, milk, and baking soda.", cost: "₹20–30" }
  ],
  proteinSources: [
    "Wazwan mutton dishes (Rista, Gushtaba)",
    "Tujji charcoal skewered meats",
    "Yellow dal and Paneer dishes at local dhabas"
  ],
  tips: [
    "Try the local bakery bread (Girda) early in the morning directly from the wood-fired clay ovens (Kandur).",
    "Nun Chai is salty; if you prefer sweet tea, make sure to ask for Kahwa instead."
  ]
};
