export const foodGuide = {
  dailyEstimate: { min: 250, max: 350, perPerson: true },
  meals: [
    {
      type: "Breakfast",
      icon: "Coffee",
      items: [
        { place: "Ujjain / Omkareshwar Street Stands", dish: "Poha Jalebi + Chai", cost: 50, vegetarian: true, protein: "Low" },
        { place: "Indore/Ujjain Dhabas", dish: "Sabudana Khichdi", cost: 60, vegetarian: true, protein: "Low" },
        { place: "Hotel / Cafe", dish: "Aloo Paratha with Curd", cost: 80, vegetarian: true, protein: "Moderate" }
      ]
    },
    {
      type: "Lunch",
      icon: "Utensils",
      items: [
        { place: "Ujjain Outlets", dish: "Malwai Dal Bafla Thali", cost: 150, vegetarian: true, protein: "High" },
        { place: "Omkareshwar Narmada Dhaba", dish: "Dal Roti Pure Veg Thali", cost: 100, vegetarian: true, protein: "Moderate" }
      ]
    },
    {
      type: "Dinner",
      icon: "Moon",
      items: [
        { place: "Local Dhabas", dish: "Sev Tamatar + Tandoori Roti", cost: 110, vegetarian: true, protein: "Moderate" },
        { place: "Highway Dhabas", dish: "Shahi Paneer Thali", cost: 140, vegetarian: true, protein: "High" }
      ]
    },
    {
      type: "Snacks",
      icon: "Cookie",
      items: [
        { place: "Ram Ghat Area", dish: "Kachori & Samosa", cost: 30, vegetarian: true, protein: "Low" },
        { place: "Omkareshwar Ghat", dish: "Fresh Coconut Water & Poha", cost: 40, vegetarian: true, protein: "Low" },
        { place: "Sweet Shops", dish: "Hot Rabdi Milk", cost: 40, vegetarian: true, protein: "Moderate" }
      ]
    }
  ],
  localSpecialties: [
    { name: "Malwai Dal Bafla", description: "Oven-baked wheat rolls dipped in pure ghee, served with spicy dal, churma laddu, and garlic chutney.", cost: "₹120–180" },
    { name: "Indori Poha & Jalebi", description: "Spiced steamed flattened rice topped with crunchy Ratlami sev, pomegranate, and hot crispy jalebi.", cost: "₹30–50" },
    { name: "Bhutte Ka Kees", description: "Famous Malwa street food made of grated corn roasted in ghee with milk and spices.", cost: "₹40–60" },
    { name: "Narmada Ghat Rabdi Milk", description: "Rich thickened saffron milk served hot in clay kulhads along the river ghats.", cost: "₹40–60" }
  ],
  proteinSources: [
    "Dal (served with traditional Baflas or pure-veg thalis)",
    "Paneer (Cottage cheese) dishes available at all dhabas",
    "Sattu/Chana local snacks and dry roasted gram",
    "Fresh Milk and Kulhad Rabdi at sweet shops"
  ],
  tips: [
    "Dal Bafla is heavy to digest; enjoy it for lunch rather than late dinner.",
    "Ratlami Sev is spicy; ask for mild sev toppings if you prefer less heat.",
    "Stick to bottled mineral water during travel to prevent water-borne sickness."
  ]
};
