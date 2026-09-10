export const foodGuide = {
  dailyEstimate: { min: 250, max: 350, perPerson: true },
  meals: [
    {
      type: "Breakfast",
      icon: "Coffee",
      items: [
        { place: "Dharamkot Cafes", dish: "Oatmeal / Shakshuka", cost: 120, vegetarian: true, protein: "Moderate" },
        { place: "Triund Ridge", dish: "Aloo Paratha + Chai", cost: 80, vegetarian: true, protein: "Moderate" },
        { place: "Laka Base Camp", dish: "Maggi + Herbal Tea", cost: 70, vegetarian: true, protein: "Low" }
      ]
    },
    {
      type: "Lunch & Summit Pack",
      icon: "UtensilsCrossed",
      items: [
        { place: "Snowline Cafe", dish: "Rajma Chawal Thali", cost: 150, vegetarian: true, protein: "High" },
        { place: "Lahesh Trail", dish: "Dry Fruits & Energy Bars", cost: 100, vegetarian: true, protein: "High" }
      ]
    },
    {
      type: "Dinner",
      icon: "Moon",
      items: [
        { place: "Triund Camp Dhabas", dish: "Dal, Sabzi & Roti", cost: 150, vegetarian: true, protein: "Moderate" },
        { place: "Laka Got Tents", dish: "Hot Khichdi / Soup", cost: 180, vegetarian: true, protein: "Moderate" }
      ]
    }
  ],
  localSpecialties: [
    { name: "Kangra Dham Thali", description: "Traditional Himachali festive feast featuring Madra and Khatta dal", cost: "₹150–200" },
    { name: "Bhagsu Cake", description: "Famous Dharamkot dessert with biscuit crust, caramel & chocolate", cost: "₹80–120" },
    { name: "Siddu", description: "Steamed Himachali bread stuffed with spiced lentils & ghee", cost: "₹60–90" }
  ],
  proteinSources: [
    "Rajma & Channa (Kidney beans & Chickpeas)",
    "Pahadi Dal & Khichdi",
    "Shakshuka & Eggs (in Dharamkot cafes)",
    "Nuts, Seeds & Energy Bars (for summit push)"
  ],
  tips: [
    "Carry dry fruits & energy bars for the steep summit climb past Lahesh Cave.",
    "Hydrate constantly with water and ORS sachets on the Triund ridge.",
    "Eat light warm meals at Laka Got base camp to prevent altitude indigestion."
  ]
};
