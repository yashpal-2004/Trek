export const foodGuide = {
  dailyEstimate: { min: 250, max: 350, perPerson: true },
  meals: [
    {
      type: "Breakfast",
      icon: "Coffee",
      items: [
        { place: "Somnath Street Dhabas", dish: "Poha, Gathiya & Jalebi + Chai", cost: 50, vegetarian: true, protein: "Low" },
        { place: "Dwarka Temple Lane", dish: "Khaman Dhokla & Masala Tea", cost: 40, vegetarian: true, protein: "Low" }
      ]
    },
    {
      type: "Lunch",
      icon: "Utensils",
      items: [
        { place: "Somnath Trust Dining Hall", dish: "Unlimited Gujarati Thali", cost: 90, vegetarian: true, protein: "High" },
        { place: "Dwarka Dhabas", dish: "Kathiyawadi Thali (Sev Tamatar & Bhakri)", cost: 120, vegetarian: true, protein: "High" }
      ]
    },
    {
      type: "Dinner",
      icon: "Moon",
      items: [
        { place: "Veraval / Dwarka Market", dish: "Vaghareli Khichdi & Kadhi", cost: 100, vegetarian: true, protein: "Moderate" },
        { place: "Highway Rest Stop", dish: "Gujarati Undhiyu / Paneer Thali", cost: 130, vegetarian: true, protein: "High" }
      ]
    },
    {
      type: "Snacks",
      icon: "Cookie",
      items: [
        { place: "Somnath Beach", dish: "Fresh Coconut Water & Sweet Corn", cost: 40, vegetarian: true, protein: "Low" },
        { place: "Beyt Dwarka Ferry Jetty", dish: "Chana Jor Garam & Shrikhand", cost: 50, vegetarian: true, protein: "Moderate" }
      ]
    }
  ],
  localSpecialties: [
    { name: "Kathiyawadi Thali", description: "Rich traditional thali with Ringan Bhartha, Sev Tamatar, Bajra Bhakri, and fresh buttermilk (Chaas).", cost: "₹100–150" },
    { name: "Gujarati Khaman & Gathiya", description: "Fluffy steamed gram flour khaman and crunchy papaya-chutney gathiya.", cost: "₹40–60" },
    { name: "Vaghareli Khichdi", description: "Spiced rice and moong dal khichdi served with hot sweet Gujarati Kadhi.", cost: "₹80–120" },
    { name: "Somnath Prasadam (Laddoo)", description: "Sacred pure ghee bundi laddoos offered as Mahaprasad at Somnath temple.", cost: "₹50" }
  ],
  proteinSources: [
    "Kathiyawadi Chana & Moong Dal preparations",
    "Khaman & Dhokla (Chickpea flour)",
    "Fresh Curd, Buttermilk & Shrikhand",
    "Paneer Kathiyawadi Curry"
  ],
  tips: [
    "Shree Somnath Trust operates an economical pure-veg Prasad dining hall near the temple.",
    "Enjoy fresh cooling buttermilk (Chaas) to stay hydrated along the sunny coast.",
    "Stick to bottled mineral water during intercity bus transit."
  ]
};
