export const foodGuide = {
  dailyEstimate: { min: 250, max: 350, perPerson: true },
  meals: [
    {
      type: "Breakfast",
      icon: "Coffee",
      items: [
        { place: "Local Street Stands", dish: "Poha Jalebi + Chai", cost: 50, vegetarian: true, protein: "Low" },
        { place: "Indore/Ujjain Dhabas", dish: "Sabudana Khichdi", cost: 60, vegetarian: true, protein: "Low" },
        { place: "Hotel / Cafe", dish: "Aloo Paratha with Curd", cost: 80, vegetarian: true, protein: "Moderate" }
      ]
    },
    {
      type: "Lunch",
      icon: "Utensils",
      items: [
        { place: "Shree Ganga / Traditional Outlets", dish: "Malwai Dal Bafla Thali", cost: 150, vegetarian: true, protein: "High" },
        { place: "Local Pure Veg Restaurants", dish: "Dal Roti Thali", cost: 100, vegetarian: true, protein: "Moderate" }
      ]
    },
    {
      type: "Dinner",
      icon: "Moon",
      items: [
        { place: "Local Dhabas", dish: "Sev Tamatar + Tandoori Roti", cost: 110, vegetarian: true, protein: "Moderate" },
        { place: "Veg Restaurants", dish: "Shahi Paneer Thali", cost: 140, vegetarian: true, protein: "High" }
      ]
    },
    {
      type: "Snacks",
      icon: "Cookie",
      items: [
        { place: "Ram Ghat Area", dish: "Kachori & Samosa", cost: 30, vegetarian: true, protein: "Low" },
        { place: "Sarafa Style Stalls", dish: "Bhutte Ka Kees", cost: 50, vegetarian: true, protein: "Low" },
        { place: "Sweet Shops", dish: "Hot Rabdi Milk", cost: 40, vegetarian: true, protein: "Moderate" }
      ]
    }
  ],
  localSpecialties: [
    { name: "Malwai Dal Bafla", description: "Oven-baked wheat rolls dipped in pure ghee, served with spicy dal, churma laddu, and garlic chutney.", cost: "₹120–180" },
    { name: "Indori Poha", description: "Spiced steamed flattened rice topped with crunchy Ratlami sev, pomegranate, and jeeravan masala.", cost: "₹30–50" },
    { name: "Bhutte Ka Kees", description: "A famous Malwa street food made of grated corn roasted in ghee, cooked with milk and aromatic spices.", cost: "₹40–60" },
    { name: "Sev Tamatar Sabzi", description: "A tangy tomato curry cooked with local spices and topped generously with crispy sev.", cost: "₹80–110" }
  ],
  proteinSources: [
    "Dal (served with traditional Baflas or pure-veg thalis)",
    "Paneer (Cottage cheese) dishes available at all dhabas",
    "Sattu/Chana local snacks and dry roasted gram",
    "Milk and Saffron Rabdi drinks at sweet shops"
  ],
  tips: [
    "Dal Bafla is heavy to digest; enjoy it for lunch rather than a late dinner.",
    "Ratlami Sev is spicy; ask for mild sev toppings if you prefer less heat.",
    "Stick to bottled mineral water during travel to prevent water-borne sickness."
  ]
};
