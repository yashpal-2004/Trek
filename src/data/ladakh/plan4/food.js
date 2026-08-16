export const foodGuide = {
  dailyEstimate: { min: 250, max: 400, perPerson: true },
  meals: [
    {
      type: "Breakfast",
      icon: "Coffee",
      items: [
        { place: "Highway Dhabas", dish: "Paratha + Tea / Omelette", cost: 80, vegetarian: true, protein: "Moderate" },
        { place: "Keylong transit", dish: "Puri Sabzi / Toast", cost: 70, vegetarian: true, protein: "Moderate" }
      ],
    },
    {
      type: "Lunch",
      icon: "UtensilsCrossed",
      items: [
        { place: "Sarchu Dhabas", dish: "Dal Chawal or Veg noodles", cost: 120, vegetarian: true, protein: "Moderate" },
        { place: "Tibetan Colony", dish: "Thukpa / Momos", cost: 100, vegetarian: true, protein: "Moderate" }
      ],
    },
    {
      type: "Dinner",
      icon: "Moon",
      items: [
        { place: "Leh Market", dish: "Local Skyu or simple Thali", cost: 150, vegetarian: true, protein: "Moderate" },
        { place: "Homestays", dish: "Organic vegetable stews", cost: 120, vegetarian: true, protein: "Moderate" }
      ]
    }
  ],
  localSpecialties: [
    { name: "Skyu", description: "Traditional Ladakhi pasta stew cooked with root vegetables.", cost: "₹120–180" },
    { name: "Thukpa", description: "A warming noodle soup with vegetables and mild local herbs.", cost: "₹100–140" },
    { name: "Butter Tea (Gur-Gur)", description: "Salted tea made with yak butter, tea leaves, and salt.", cost: "₹30–45" }
  ],
  proteinSources: [
    "Dal & Lentils at transit dhabas",
    "Tsampa (roasted barley) items",
    "Local cheese and egg preparations"
  ],
  tips: [
    "Eat light meals while crossing the high passes (Baralacha La, Tanglang La) to prevent nausea on the bus.",
    "Keep ginger candies or cards to chew on during transit climbs."
  ]
};
