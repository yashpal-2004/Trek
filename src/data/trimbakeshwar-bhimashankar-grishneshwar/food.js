export const foodGuide = {
  dailyEstimate: { min: 250, max: 350, perPerson: true },
  meals: [
    {
      type: "Breakfast",
      icon: "Coffee",
      items: [
        { place: "Nashik Bus Stand", dish: "Misal Pav + Cutting Chai", cost: 60, vegetarian: true, protein: "Moderate" },
        { place: "Sambhaji Nagar", dish: "Kanda Poha & Sabudana Vada", cost: 50, vegetarian: true, protein: "Low" },
        { place: "Bhimashankar Dhabas", dish: "Thalipeeth with Fresh Butter", cost: 70, vegetarian: true, protein: "Moderate" }
      ]
    },
    {
      type: "Lunch",
      icon: "Utensils",
      items: [
        { place: "Nashik / Trimbak", dish: "Maharashtrian Veg Thali", cost: 140, vegetarian: true, protein: "High" },
        { place: "Verul (Ellora)", dish: "Pithla Bhakri & Chutney", cost: 110, vegetarian: true, protein: "High" }
      ]
    },
    {
      type: "Dinner",
      icon: "Moon",
      items: [
        { place: "Sambhaji Nagar", dish: "Shev Bhaji + Bhakri", cost: 120, vegetarian: true, protein: "Moderate" },
        { place: "Bhimashankar Canteen", dish: "Temple Mahaprasad Thali", cost: 100, vegetarian: true, protein: "Moderate" }
      ]
    },
    {
      type: "Snacks",
      icon: "Cookie",
      items: [
        { place: "Trimbakeshwar Ghats", dish: "Modak & Sol Kadhi", cost: 50, vegetarian: true, protein: "Low" },
        { place: "Pune Station", dish: "Bakarwadi & Masala Chai", cost: 40, vegetarian: true, protein: "Low" }
      ]
    }
  ],
  localSpecialties: [
    { name: "Nashik Misal Pav", description: "Spicy sprouted moth bean curry topped with farsan, onions, and hot pav.", cost: "₹50–80" },
    { name: "Pithla Bhakri", description: "Traditional Maharashtrian gram flour curry cooked with garlic, served with hot jowar/bajra bhakri.", cost: "₹90–140" },
    { name: "Puran Poli", description: "Sweet flatbread stuffed with chana dal and jaggery, drizzled with pure ghee.", cost: "₹60–90" },
    { name: "Sol Kadhi", description: "Tangy and refreshing coconut milk drink infused with kokum and garlic.", cost: "₹30–50" }
  ],
  proteinSources: [
    "Matki / Usal (Sprouted moth beans in Misal)",
    "Pithla (Chickpea flour curry with Bhakri)",
    "Puran Poli (Chana dal stuffed flatbread)",
    "Pure Veg Thali Dal & Paneer"
  ],
  tips: [
    "Misal Pav can be spicy; ask for extra 'tarri' (gravy) on the side to adjust spice level.",
    "Enjoy fresh Sol Kadhi after meals for smooth digestion.",
    "Stick to bottled mineral water during intercity bus transit."
  ]
};
