export const foodGuide = {
  dailyEstimate: { min: 250, max: 350, perPerson: true },
  meals: [
    {
      type: "Breakfast",
      icon: "Coffee",
      items: [
        { place: "Local Tea Shops", dish: "Sel Roti + Local Chana + Milk Tea", cost: 50, vegetarian: true, protein: "Low" },
        { place: "German Bakery Thamel", dish: "Omelette & Toast", cost: 90, vegetarian: false, protein: "Moderate" }
      ]
    },
    {
      type: "Lunch",
      icon: "Utensils",
      items: [
        { place: "Local Dhabas / Bhojanalayas", dish: "Traditional Nepalese Dal Bhat (Unlimited refills)", cost: 120, vegetarian: true, protein: "High" },
        { place: "Local Eateries", dish: "Buff/Chicken/Veg Chowmein", cost: 80, vegetarian: false, protein: "Moderate" }
      ]
    },
    {
      type: "Dinner",
      icon: "Moon",
      items: [
        { place: "Local Bhojanalayas", dish: "Thakali Dal Bhat Thali", cost: 180, vegetarian: true, protein: "High" },
        { place: "Thamel / Pokhara Stalls", dish: "Plate of Steamed Buff/Veg Momos", cost: 70, vegetarian: false, protein: "Moderate" }
      ]
    },
    {
      type: "Snacks",
      icon: "Cookie",
      items: [
        { place: "Street Vendors", dish: "Spicy Wai Wai Chatpat", cost: 30, vegetarian: true, protein: "Low" },
        { place: "Tea Stalls", dish: "Masala Chai + Bakery Biscuits", cost: 25, vegetarian: true, protein: "Low" }
      ]
    }
  ],
  localSpecialties: [
    { name: "Nepalese Dal Bhat", description: "The staple meal of Nepal consisting of steamed rice, lentil soup (dal), vegetable curry, spinach, and pickles with unlimited free refills.", cost: "₹100–180" },
    { name: "Momo", description: "Steamed or fried dumplings filled with vegetables or meat, served with spicy tomato-based sesame dipping sauce (achar).", cost: "₹60–90" },
    { name: "Sel Roti", description: "A ring-shaped, sweet, fried rice donut with a crispy exterior and soft interior, usually eaten during breakfast with curry or tea.", cost: "₹15–30" }
  ],
  proteinSources: [
    "Lentils (Dal) served as part of the unlimited Dal Bhat",
    "Buff (Buffalo) / Chicken Momos and Chowmein",
    "Local curd/yogurt available at local dairies",
    "Eggs & Chickpea curry at breakfast stalls"
  ],
  tips: [
    "Dal Bhat Power 24 Hour! It is cheap, highly nutritious, and you get unlimited refills of dal, rice, and vegetables.",
    "Always drink bottled mineral water (check that the seal is intact) or carry water purification tablets.",
    "Stick to local eateries (Bhojanalayas) away from the main tourist streets of Thamel and Pokhara Lakeside to save up to 50% on food costs."
  ]
};
