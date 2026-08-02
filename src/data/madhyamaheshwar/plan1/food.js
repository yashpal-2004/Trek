export const foodGuide = {
  dailyEstimate: { min: 250, max: 350, perPerson: true },
  meals: [
    {
      type: "Breakfast",
      icon: "Coffee",
      items: [
        { place: "Rishikesh dhabas", dish: "Aloo Paratha + Hot Tea", cost: 70, vegetarian: true, protein: "Moderate" },
        { place: "Ukhimath transit stop", dish: "Puri Sabzi / Toast + Tea", cost: 60, vegetarian: true, protein: "Low" },
        { place: "Ransi Homestay", dish: "Mandua ki Roti + Local Chutney", cost: 0, vegetarian: true, protein: "Moderate" },
        { place: "Trek route dhabas", dish: "Maggie / Bread Butter + Chai", cost: 60, vegetarian: true, protein: "Low" }
      ],
    },
    {
      type: "Lunch",
      icon: "UtensilsCrossed",
      items: [
        { place: "Srinagar Garhwal", dish: "Garhwali Thali (Dal, Bhat, Sabzi)", cost: 150, vegetarian: true, protein: "Moderate" },
        { place: "Bantoli/Gaundhar dhabas", dish: "Simple Rice Dal / Maggie", cost: 100, vegetarian: true, protein: "Moderate" },
        { place: "Madhyamaheshwar eateries", dish: "Standard North Indian Veg Thali", cost: 150, vegetarian: true, protein: "Moderate" }
      ],
    },
    {
      type: "Dinner",
      icon: "Moon",
      items: [
        { place: "Ransi Village Homestay", dish: "Homecooked Gahat ki Dal + Rice + Roti", cost: 0, vegetarian: true, protein: "High" },
        { place: "Madmaheshwar Stays", dish: "Simple Dal Chawal / Roti Sabzi", cost: 150, vegetarian: true, protein: "Moderate" },
        { place: "Temple Committee Langar", dish: "Fresh simple khichdi / prasadam", cost: 0, vegetarian: true, protein: "Moderate" }
      ]
    }
  ],
  localSpecialties: [
    { name: "Mandua ki Roti", description: "Traditional finger millet flatbread high in calcium and fiber.", cost: "₹30–50" },
    { name: "Gahat ki Dal", description: "Local horsegram lentil soup known for warming the body in cold weather.", cost: "₹80–120" },
    { name: "Buransh Juice", description: "Sweet, refreshing local wild rhododendron flower juice.", cost: "₹30–50" }
  ],
  proteinSources: [
    "Gahat ki Dal (local horsegram)",
    "Black Chana / Chickpeas",
    "Lentils (Moong/Masoor) at homestays",
    "Carry-along protein bars and nuts"
  ],
  tips: [
    "Drink warm water at Madhyamaheshwar to stay acclimatized.",
    "Pack enough energy bars and dry fruits for the long 16 km climb.",
    "Support local village economy by opting for fresh homecooked meals."
  ]
};
