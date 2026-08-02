export const foodGuide = {
  dailyEstimate: { min: 300, max: 450, perPerson: true },
  meals: [
    {
      type: "Breakfast",
      icon: "Coffee",
      items: [
        { place: "Gaurikund dhabas", dish: "Aloo Paratha + Hot Tea", cost: 75, vegetarian: true, protein: "Moderate" },
        { place: "Jungle Chatti (Kedarnath trail)", dish: "Toast / Maggi + Chai", cost: 60, vegetarian: true, protein: "Low" },
        { place: "Ransi Homestay", dish: "Mandua ki Roti + local pickle", cost: 0, vegetarian: true, protein: "Moderate" }
      ],
    },
    {
      type: "Lunch",
      icon: "UtensilsCrossed",
      items: [
        { place: "Lincholi (Kedarnath trail)", dish: "Dal Chawal Thali", cost: 140, vegetarian: true, protein: "Moderate" },
        { place: "Ukhimath market", dish: "Simple Garhwali Veg Thali", cost: 120, vegetarian: true, protein: "Moderate" },
        { place: "Bantoli trail stops", dish: "Maggie / Bread Butter", cost: 80, vegetarian: true, protein: "Low" }
      ],
    },
    {
      type: "Dinner",
      icon: "Moon",
      items: [
        { place: "Kedarnath Stays", dish: "Hot Khichdi / Roti Veg Thali", cost: 180, vegetarian: true, protein: "Moderate" },
        { place: "Ransi Homestay", dish: "Mandua Roti + Gahat Dal + Rice", cost: 0, vegetarian: true, protein: "High" },
        { place: "Madhyamaheshwar Temple", dish: "Temple committee simple food", cost: 150, vegetarian: true, protein: "Moderate" }
      ]
    }
  ],
  localSpecialties: [
    { name: "Mandua ki Roti", description: "Healthy finger millet flatbread traditional to Uttarakhand hills.", cost: "₹30–50" },
    { name: "Gahat ki Dal", description: "Nutritious horsegram lentil broth to warm body.", cost: "₹80–120" },
    { name: "Rhododendron Buransh Juice", description: "Local wild berry/flower juice rich in antioxidants.", cost: "₹30–50" }
  ],
  proteinSources: [
    "Dal (lentils) served at homestays",
    "Chana (chickpeas)",
    "Protein bars (highly recommended to carry)",
    "Nuts and seeds"
  ],
  tips: [
    "Carry energy/protein bars as trail snacks are overpriced on the Kedarnath route.",
    "Drink only warm water or tea at Kedarnath to combat cold altitudes."
  ]
};
