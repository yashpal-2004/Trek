export const foodGuide = {
  dailyEstimate: { min: 250, max: 350, perPerson: true },
  meals: [
    {
      type: "Breakfast",
      icon: "Coffee",
      items: [
        { place: "Joshimath Dhabas", dish: "Aloo Paratha + Hot Tea", cost: 60, vegetarian: true, protein: "Moderate" },
        { place: "Slope side cafes", dish: "Bread Omelette", cost: 80, vegetarian: false, protein: "High" }
      ]
    },
    {
      type: "Lunch",
      icon: "Utensils",
      items: [
        { place: "Joshimath Local Markets", dish: "Garhwali Dal Roti Thali", cost: 120, vegetarian: true, protein: "Moderate" },
        { place: "Auli Snow Slopes", dish: "Hot Maggi & Momos", cost: 90, vegetarian: true, protein: "Low" }
      ]
    },
    {
      type: "Dinner",
      icon: "Moon",
      items: [
        { place: "Hotel Dining / local dhabas", dish: "Rajma Chawal or Kadhai Paneer Thali", cost: 140, vegetarian: true, protein: "High" }
      ]
    }
  ],
  localSpecialties: [
    { name: "Chainsoo", description: "A protein-rich Garhwali dal made of ground black gram roasted in local spices.", cost: "₹90–120" },
    { name: "Dubuk", description: "A simple local gravy prepared with local lentils like Gehat or Bhatt.", cost: "₹80–100" },
    { name: "Garhwali Thali", description: "Includes local red rice, Mandua (millet) roti, Chainsoo, and local sweet dishes.", cost: "₹150–200" }
  ],
  proteinSources: [
    "Chainsoo (ground black gram curry)",
    "Local Rajma and Gehat dals at Joshimath dhabas",
    "Egg/Omelette options at slope-side tea stalls"
  ],
  tips: [
    "Drink warm ginger tea on the slopes to keep your body temperature up.",
    "Pack a thermos flask with hot water before taking the ropeway to Auli."
  ]
};
