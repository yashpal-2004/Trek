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
  ]
};
