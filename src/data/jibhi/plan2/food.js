export const foodGuide = {
  dailyEstimate: { min: 250, max: 400, perPerson: true },
  meals: [
    {
      type: "Breakfast",
      icon: "Coffee",
      items: [
        { place: "Hope Cafe Jibhi", dish: "Crepes / Shakshuka / Nutella Waffles", cost: 130, vegetarian: true, protein: "Moderate" },
        { place: "Jibhi bridge dhabas", dish: "Poha / Toast + Ginger Tea", cost: 70, vegetarian: true, protein: "Low" }
      ],
    },
    {
      type: "Lunch",
      icon: "UtensilsCrossed",
      items: [
        { place: "Tirthan valley dhabas", dish: "Fresh River Trout (Pan Fried)", cost: 250, vegetarian: false, protein: "High" },
        { place: "Jibhi main street", dish: "Local Kadhi Chawal / Siddu", cost: 100, vegetarian: true, protein: "Moderate" }
      ],
    },
    {
      type: "Dinner",
      icon: "Moon",
      items: [
        { place: "Creekside Cafe", dish: "Woodfired Margherita Pizza / Hand-rolled Pasta", cost: 220, vegetarian: true, protein: "Moderate" },
        { place: "Riverside Lodge", dish: "Dal Makhani, Kadhai Chicken & Butter Roti", cost: 250, vegetarian: false, protein: "High" }
      ]
    }
  ],
  localSpecialties: [
    { name: "Tirthan River Trout", description: "Freshly caught brown or rainbow trout pan-fried with mild spices.", cost: "₹250–350" },
    { name: "Siddu", description: "Himachali steamed yeast bread stuffed with a rich filling of poppy seeds or walnuts.", cost: "₹60–90" },
    { name: "Himachali Dham", description: "Traditional festive feast served with red kidney beans, split chickpeas, and sweet rice.", cost: "₹150–200" }
  ],
  proteinSources: [
    "Freshly caught river trout",
    "Dal Bhat at pass dhabas",
    "Paneer and egg preparations at local lodges"
  ],
  tips: [
    "Jibhi has fantastic creekside cafes with live acoustic music in the evenings.",
    "Order Siddu with ghee for a truly local culinary experience."
  ]
};
