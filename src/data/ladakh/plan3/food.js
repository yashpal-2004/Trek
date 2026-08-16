export const foodGuide = {
  dailyEstimate: { min: 300, max: 450, perPerson: true },
  meals: [
    {
      type: "Breakfast",
      icon: "Coffee",
      items: [
        { place: "Highway Dhabas / Leh", dish: "Aloo Paratha + Hot Tea", cost: 90, vegetarian: true, protein: "Moderate" },
        { place: "Local cafes", dish: "Tsampa (barley porridge) + Butter Tea", cost: 80, vegetarian: true, protein: "Moderate" }
      ],
    },
    {
      type: "Lunch",
      icon: "UtensilsCrossed",
      items: [
        { place: "Transit Dhabas", dish: "Rajma Chawal or Kadhi Chawal", cost: 150, vegetarian: true, protein: "High" },
        { place: "Tibetan Colony", dish: "Veg Momos or Thukpa", cost: 120, vegetarian: true, protein: "Moderate" }
      ],
    },
    {
      type: "Dinner",
      icon: "Moon",
      items: [
        { place: "Leh Market", dish: "Thali / Noodles / Soup", cost: 200, vegetarian: true, protein: "Moderate" },
        { place: "Homestays", dish: "Local Skyu (Ladakhi pasta stew)", cost: 180, vegetarian: true, protein: "Moderate" }
      ]
    }
  ],
  localSpecialties: [
    { name: "Skyu", description: "Traditional Ladakhi thumb-stretched pasta stew cooked with root vegetables.", cost: "₹120–180" },
    { name: "Thukpa", description: "A warming noodle soup with vegetables and mild local herbs.", cost: "₹100–140" },
    { name: "Chhurpi", description: "Local cheese made from yak milk, slightly sour and hard.", cost: "₹80–120" },
    { name: "Butter Tea (Gur-Gur)", description: "Salted tea made with yak butter, tea leaves, and salt.", cost: "₹30–45" }
  ],
  proteinSources: [
    "Tsampa (roasted barley flour) dishes",
    "Dal & Chickpeas served at homestays",
    "Paneer and egg preparations at transit dhabas"
  ],
  tips: [
    "Opt for light soups (Thukpa) or Skyu during your first 2 days in Leh to assist digestion under lower oxygen levels.",
    "Drink plenty of water and warm garlic soups to fight AMS symptoms."
  ]
};
