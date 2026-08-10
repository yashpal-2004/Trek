export const foodGuide = {
  dailyEstimate: { min: 250, max: 400, perPerson: true },
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
    { name: "Butter Tea (Gur-Gur)", description: "Churned tea made from tea leaves, yak butter, and salt.", cost: "₹30–50" },
    { name: "Khambir", description: "Thick Ladakhi local wheat flatbread, usually eaten with butter or eggs.", cost: "₹40–60" }
  ],
  proteinSources: [
    "Rajma (kidney beans) and lentils at transit dhabas",
    "Tibetan Thukpa / Thenthuk with vegetables/paneer",
    "Yak cheese / Paneer dishes",
    "Carried almonds, nuts, and protein bars"
  ],
  tips: [
    "Acclimatization is key in Ladakh; drink plenty of water and avoid heavy/greasy foods during the first 48 hours.",
    "Garlic soup is highly recommended locally to help cope with acute mountain sickness (AMS).",
    "Carry dry fruits, chocolates, and glucose packets for remote passes where food stalls are unavailable."
  ]
};
