export const foodGuide = {
  dailyEstimate: { min: 200, max: 350, perPerson: true },
  meals: [
    {
      type: "Breakfast",
      icon: "Coffee",
      items: [
        { place: "Ashram Dining Hall", dish: "Simple Veg Prasad Breakfast (Poori/Sabzi)", cost: 50, vegetarian: true, protein: "Low" },
        { place: "Mathura Station Area", dish: "Kachori Sabzi & Chai", cost: 60, vegetarian: true, protein: "Low" }
      ]
    },
    {
      type: "Lunch",
      icon: "Utensils",
      items: [
        { place: "Local Dhabas / Vrindavan Restaurants", dish: "North Indian Veg Thali", cost: 120, vegetarian: true, protein: "Moderate" },
        { place: "ISKCON Vrindavan Prasadam", dish: "ISKCON Free Prasad or Paid Thali", cost: 60, vegetarian: true, protein: "High" }
      ]
    },
    {
      type: "Dinner",
      icon: "Moon",
      items: [
        { place: "Ashram Dining / Braj Dhabas", dish: "Rajma Chawal or Khichdi with Curd", cost: 100, vegetarian: true, protein: "High" },
        { place: "Street Vendors near Kesi Ghat", dish: "Aloo Puri & Halwa Prasad", cost: 60, vegetarian: true, protein: "Low" }
      ]
    }
  ],
  localSpecialties: [
    { name: "Mathura Peda", description: "World-famous milk-based sweet from Mathura — must buy from Brijwasi or Gopaldas Mithai shops near Holi Gate. Available in kesar, plain, and dry fruit varieties.", cost: "₹150–500 (box)" },
    { name: "Dubki Wale Aloo", description: "A famous street dish of Mathura — boiled potatoes in a tangy thin yellow gravy, usually served with puri. Try near Vishram Ghat.", cost: "₹40–60" },
    { name: "Rabri Malpua", description: "A heavenly dessert of crisp fried malpua dipped in sugar syrup, served with thick chilled rabri (condensed milk). Found at most mithai shops.", cost: "₹60–100" },
    { name: "Chai with Makhan", description: "Tea served with a dollop of fresh white butter (makhan), popular at small dhabas near temples in Vrindavan and Mathura.", cost: "₹20–30" },
    { name: "Panchamrit Prasad", description: "Sacred offering made from milk, curd, honey, ghee, and sugar — offered at most temples and available to taste as prasad.", cost: "₹0–50 (donation)" }
  ],
  proteinSources: [
    "ISKCON Vrindavan dal makhani served in thali",
    "Paneer dishes widely available in Vrindavan-Mathura restaurants",
    "Rajma and chhole at local dhabas"
  ],
  tips: [
    "Mathura-Vrindavan is 100% vegetarian — no eggs, meat, or alcohol available anywhere.",
    "ISKCON Vrindavan offers prasad (food offering) — donate ₹50–100 for a wholesome thali.",
    "Buy Mathura Peda only from authentic shops like Brijwasi Mithai (established 1941) near Holi Gate.",
    "Avoid buying street food from non-hygienic vendors near temple ghats. Stick to sit-down dhabas.",
    "Water: carry your own or buy sealed bottles. Don't drink from any public sources near ghats."
  ]
};
