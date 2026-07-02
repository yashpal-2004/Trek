export const foodGuide = {
  dailyEstimate: { min: 200, max: 350, perPerson: true },
  meals: [
    {
      type: "Breakfast",
      icon: "Coffee",
      items: [
        { place: "Gangtok hotel", dish: "Puri Sabzi / Toast + Tea", cost: 80, vegetarian: true, protein: "Moderate" },
        { place: "Thangu (en route Gurudongmar)", dish: "Bread butter / Maggi + Black Tea", cost: 60, vegetarian: true, protein: "Low" },
        { place: "Lachen/Lachung Homestay", dish: "Hot porridge / Roti", cost: 0, vegetarian: true, protein: "Moderate" }
      ],
    },
    {
      type: "Lunch",
      icon: "UtensilsCrossed",
      items: [
        { place: "Gangtok local market", dish: "Thukpa / Momos", cost: 120, vegetarian: true, protein: "Moderate" },
        { place: "Chungthang Package stop", dish: "Simple Rice, Dal, Sabzi buffet", cost: 0, vegetarian: true, protein: "Moderate" },
        { place: "Teesta Highway stop", dish: "Bengali Thali / North Indian Thali", cost: 150, vegetarian: true, protein: "Moderate" }
      ],
    },
    {
      type: "Dinner",
      icon: "Moon",
      items: [
        { place: "Gangtok cafe", dish: "Momos + Chowmein", cost: 180, vegetarian: true, protein: "Moderate" },
        { place: "Lachen/Lachung Homestay", dish: "Local Rice, Dal, organic vegetable curry", cost: 0, vegetarian: true, protein: "Moderate" }
      ]
    }
  ]
};
