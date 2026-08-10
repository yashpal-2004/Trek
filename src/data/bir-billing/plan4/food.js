export const foodGuide = {
  dailyEstimate: { min: 250, max: 400, perPerson: true },
  meals: [
    {
      type: "Breakfast",
      icon: "Coffee",
      items: [
        { place: "Bir Tibetan Colony cafes", dish: "Pancakes / Waffles / Shabhakley + Coffee", cost: 120, vegetarian: true, protein: "Moderate" },
        { place: "Mandi highway dhabas", dish: "Aloo Paratha + Milk Tea", cost: 70, vegetarian: true, protein: "Low" }
      ],
    },
    {
      type: "Lunch",
      icon: "UtensilsCrossed",
      items: [
        { place: "Colony restaurants", dish: "Thukpa / Thenthuk / Mutton Momos", cost: 130, vegetarian: false, protein: "High" },
        { place: "Bir main market", dish: "Himachali Dham (traditional platter)", cost: 150, vegetarian: true, protein: "Moderate" }
      ],
    },
    {
      type: "Dinner",
      icon: "Moon",
      items: [
        { place: "Billing Ridge Camps", dish: "Buffet: Dal, Paneer, Rice, Roti, Chicken Curry", cost: 250, vegetarian: false, protein: "High" },
        { place: "Tibetan Colony", dish: "Woodfired Pizza / Shakshuka", cost: 200, vegetarian: true, protein: "Moderate" }
      ]
    }
  ],
  localSpecialties: [
    { name: "Tibetan Shabhakley", description: "Deep-fried bread stuffed with seasoned meat or cabbage.", cost: "₹70–90" },
    { name: "Thenthuk", description: "Hand-pulled noodle soup with fresh mountain vegetables.", cost: "₹100–120" },
    { name: "Siddu", description: "Himachali steamed bun stuffed with poppy seeds/lentils.", cost: "₹50–80" }
  ],
  proteinSources: [
    "Steamed & Fried Momos",
    "Dal Bhat at local dhabas",
    "High-protein dishes at local cafes"
  ],
  tips: [
    "Have a light breakfast on the day of your paragliding flight to avoid motion sickness.",
    "Do not miss the sunset view from cafes surrounding the main landing field."
  ]
};
