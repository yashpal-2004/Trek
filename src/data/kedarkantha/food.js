export const foodGuide = {
  dailyEstimate: { min: 250, max: 350, perPerson: true },
  meals: [
    {
      type: "Breakfast",
      icon: "Coffee",
      items: [
        { place: "Sankri homestay", dish: "Aloo Paratha / Puri Sabzi + Chai", cost: 80, vegetarian: true, protein: "Moderate" },
        { place: "Juda Ka Talab camp", dish: "Poha / Omelette + Ginger Tea", cost: 100, vegetarian: false, protein: "Moderate" },
        { place: "Hargaon trail dhabas", dish: "Maggi / Bread Butter + Tea", cost: 80, vegetarian: true, protein: "Low" }
      ],
    },
    {
      type: "Lunch",
      icon: "UtensilsCrossed",
      items: [
        { place: "Mori road stop", dish: "Dal Chawal Thali", cost: 120, vegetarian: true, protein: "Moderate" },
        { place: "Juda Ka Talab campsite", dish: "Hot khichdi / simple veg thali", cost: 150, vegetarian: true, protein: "Moderate" },
        { place: "Sankri local market", dish: "Thukpa / Momos", cost: 100, vegetarian: true, protein: "Moderate" }
      ],
    },
    {
      type: "Dinner",
      icon: "Moon",
      items: [
        { place: "Sankri Cafe / Zostel", dish: "Standard North Indian Veg Thali / Roti Sabzi", cost: 180, vegetarian: true, protein: "High" },
        { place: "Mountain camps", dish: "Fresh local dal, rice, mixed vegetable curry", cost: 200, vegetarian: true, protein: "Moderate" }
      ]
    }
  ],
  localSpecialties: [
    { name: "Mandua ki Roti", description: "Finger millet flatbread typical of Uttarakhand hills.", cost: "₹30–50" },
    { name: "Gahat ki Dal", description: "Local horsegram lentil broth to warm body.", cost: "₹80–120" },
    { name: "Local Apple Chutney", description: "Sweet and spicy dip made from Sankri orchard apples.", cost: "₹30–50" }
  ],
  proteinSources: [
    "Dal (lentils) served at camps",
    "Eggs (available at Sankri and trail dhabas)",
    "Carry-along protein bars and dry fruits"
  ],
  tips: [
    "Carry a thermo steel flask to keep drinking water warm on winter nights.",
    "Support local villagers by choosing local homestay meals."
  ]
};
