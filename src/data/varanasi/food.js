export const foodGuide = {
  dailyEstimate: { min: 250, max: 400, perPerson: true },
  meals: [
    {
      type: "Breakfast",
      icon: "Coffee",
      items: [
        { place: "Kachori Gali / Godowlia", dish: "Kachori Sabzi & Jalebi", cost: 50, vegetarian: true, protein: "Low" },
        { place: "Local Sweet Shops (Winters)", dish: "Makhan Malaiyyo", cost: 60, vegetarian: true, protein: "Low" }
      ]
    },
    {
      type: "Lunch",
      icon: "Utensils",
      items: [
        { place: "Local Restaurants / Dhabas", dish: "North Indian Veg Thali", cost: 150, vegetarian: true, protein: "Moderate" },
        { place: "Assi Ghat Cafes", dish: "Pasta / Pizza / Cafe Food", cost: 250, vegetarian: true, protein: "Moderate" }
      ]
    },
    {
      type: "Dinner",
      icon: "Moon",
      items: [
        { place: "Baati Chokha Restaurants", dish: "Authentic Baati Chokha with Dal", cost: 180, vegetarian: true, protein: "High" },
        { place: "Street Vendors", dish: "Tamatar Chaat & Aloo Tikki", cost: 80, vegetarian: true, protein: "Low" }
      ]
    }
  ],
  localSpecialties: [
    { name: "Makhan Malaiyyo", description: "A winter delicacy made of raw milk dew (froth), flavored with saffron and pistachios.", cost: "₹50–100" },
    { name: "Tamatar Chaat", description: "A unique spicy chaat made with mashed tomatoes, potatoes, spices, and sweet syrup.", cost: "₹60–80" },
    { name: "Banarasi Paan", description: "The legendary betel leaf preparation of Varanasi, filled with sweet preserves and spices.", cost: "₹20–50" },
    { name: "Blue Lassi", description: "Thick, creamy yogurt drink served in a clay pot (kulhad) with heavy malai topping.", cost: "₹80–150" }
  ],
  proteinSources: [
    "Dal (lentils) served with Thalis",
    "Sattu (roasted gram flour) in Baati Chokha",
    "Paneer dishes in local restaurants"
  ],
  tips: [
    "Avoid tap water entirely; stick to sealed bottled water or filtered water.",
    "Street food is mostly safe if it is served piping hot in front of you.",
    "Varanasi is predominantly vegetarian, especially around the ghats and temples."
  ]
};
