export const foodGuide = {
  dailyEstimate: { min: 180, max: 280, perPerson: true },
  meals: [
    {
      type: "Breakfast",
      icon: "Coffee",
      items: [
        { place: "Haridwar/Rishikesh", dish: "Paratha + Chai", cost: 60, vegetarian: true, protein: "Moderate" },
        { place: "Mountain villages", dish: "Maggi + Tea", cost: 50, vegetarian: true, protein: "Low" },
        { place: "Gopeshwar", dish: "Puri Sabzi", cost: 70, vegetarian: true, protein: "Low" },
        { place: "Chopta", dish: "Aloo Paratha", cost: 80, vegetarian: true, protein: "Moderate" },
      ],
    },
    {
      type: "Lunch",
      icon: "UtensilsCrossed",
      items: [
        { place: "Rudraprayag", dish: "Rajma Chawal Thali", cost: 120, vegetarian: true, protein: "High" },
        { place: "Gopeshwar", dish: "Dal Roti Thali", cost: 100, vegetarian: true, protein: "Moderate" },
        { place: "Trek days", dish: "Packed lunch (Paratha)", cost: 80, vegetarian: true, protein: "Moderate" },
        { place: "Chopta", dish: "Maggi + Egg (if available)", cost: 100, vegetarian: false, protein: "High" },
      ],
    },
    {
      type: "Dinner",
      icon: "Moon",
      items: [
        { place: "Homestays", dish: "Local dal, rice, sabzi", cost: 150, vegetarian: true, protein: "Moderate" },
        { place: "Temple stays", dish: "Langar", cost: 0, vegetarian: true, protein: "Moderate" },
        { place: "GMVN", dish: "North Indian thali", cost: 180, vegetarian: true, protein: "High" },
        { place: "Dhabas", dish: "Roti + Dal + Sabzi", cost: 120, vegetarian: true, protein: "Moderate" },
      ],
    },
    {
      type: "Snacks",
      icon: "Cookie",
      items: [
        { place: "Anywhere", dish: "Samosa / Pakora", cost: 20, vegetarian: true, protein: "Low" },
        { place: "Trek trail", dish: "Protein bar / Dry fruits", cost: 50, vegetarian: true, protein: "High" },
        { place: "Bus stops", dish: "Biscuits + Chai", cost: 30, vegetarian: true, protein: "Low" },
        { place: "Chopta", dish: "Maggi", cost: 40, vegetarian: true, protein: "Low" },
      ],
    },
    {
      type: "Water",
      icon: "Droplets",
      items: [
        { place: "Bottled water", dish: "1L packaged water", cost: 20, vegetarian: true, protein: "N/A" },
        { place: "Refill points", dish: "Filtered water (GMVN)", cost: 10, vegetarian: true, protein: "N/A" },
        { place: "Trek days", dish: "Water purification tablets", cost: 5, vegetarian: true, protein: "N/A" },
      ],
    },
  ],
  localSpecialties: [
    { name: "Garhwali Dal", description: "Slow-cooked lentil curry with local spices", cost: "₹80–120" },
    { name: "Aloo Ke Gutke", description: "Spiced potato dish, Garhwal specialty", cost: "₹60–80" },
    { name: "Mandua Roti", description: "Finger millet flatbread, nutritious", cost: "₹40–60" },
    { name: "Kumaoni Raita", description: "Cucumber yogurt with local herbs", cost: "₹50–70" },
    { name: "Bal Mithai", description: "Famous brown chocolate fudge from Kumaon", cost: "₹100–200/kg" },
  ],
  proteinSources: ["Rajma (kidney beans)", "Dal (lentils)", "Paneer (when available)", "Eggs at dhabas", "Protein bars (carry)", "Dry fruits and nuts"],
  vegetarian: true,
  tips: [
    "Carry protein bars for trek days",
    "Eat dal-roti for balanced nutrition",
    "Avoid heavy meals before trekking",
    "Stay hydrated — 3L minimum on trek days",
    "Carry ORS sachets for electrolytes",
  ],
};
