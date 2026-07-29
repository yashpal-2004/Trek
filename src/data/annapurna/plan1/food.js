export const foodGuide = {
  dailyEstimate: { min: 350, max: 500, perPerson: true },
  meals: [
    {
      type: "Breakfast",
      icon: "Coffee",
      items: [
        { place: "Pokhara Lakeside", dish: "Tibetan Bread & Boiled Eggs", cost: 120, vegetarian: false, protein: "High" },
        { place: "Trail Teahouses", dish: "Gurung Bread with Jam / Honey & Hot Tea", cost: 150, vegetarian: true, protein: "Moderate" },
        { place: "Chhomrong", dish: "Oatmeal Porridge & Black Coffee", cost: 130, vegetarian: true, protein: "Moderate" }
      ]
    },
    {
      type: "Lunch (Dal Bhat Power)",
      icon: "UtensilsCrossed",
      items: [
        { place: "Ghandruk / Sinuwa", dish: "Authentic Nepalese Dal Bhat Thali (Unlimited Refills)", cost: 220, vegetarian: true, protein: "High" },
        { place: "Bamboo / Deurali", dish: "Veg Fried Rice / Veg Thukpa", cost: 180, vegetarian: true, protein: "Moderate" },
        { place: "MBC", dish: "Hot Garlic Noodle Soup", cost: 160, vegetarian: true, protein: "Moderate" }
      ]
    },
    {
      type: "Dinner",
      icon: "Moon",
      items: [
        { place: "ABC Teahouse (4,130m)", dish: "Nepalese Dal Bhat (Rice, Lentil, Veg curry, Saag)", cost: 280, vegetarian: true, protein: "High" },
        { place: "Deurali / Bamboo", dish: "Veg Chowmein / Momos", cost: 200, vegetarian: true, protein: "Moderate" }
      ]
    },
    {
      type: "Drinks & Hydration",
      icon: "Cookie",
      items: [
        { place: "Trail Teahouses", dish: "Hot Ginger Lemon Honey Tea", cost: 60, vegetarian: true, protein: "Low" },
        { place: "Trail Water Points", dish: "Free Water Refill + Chlorine Tablet", cost: 0, vegetarian: true, protein: "Low" }
      ]
    }
  ],
  localSpecialties: [
    { name: "Nepalese Dal Bhat", description: "National staple thali with free unlimited rice, dal, and vegetable refills", cost: "NPR 350–550 (~₹220–₹340)" },
    { name: "Gurung Bread", description: "Deep-fried fluffy Himalayan bread served with honey or jam", cost: "NPR 250 (~₹155)" },
    { name: "Hot Garlic Soup", description: "Traditional mountain soup consumed to prevent altitude sickness (AMS)", cost: "NPR 200 (~₹125)" },
    { name: "Sea Buckthorn / Ginger Lemon Tea", description: "Warming herbal infusions rich in Vitamin C", cost: "NPR 100 (~₹60)" }
  ],
  proteinSources: ["Dal Bhat (Lentils + Rice)", "Boiled Eggs", "Yak Cheese", "Peanuts & Energy bars"],
  vegetarian: true,
  tips: [
    "Always order Dal Bhat for dinner: teahouse hosts provide free extra rice and dal refills",
    "Drink hot Garlic Soup at Deurali, MBC, and ABC to alleviate high altitude symptoms",
    "Use chlorine water purification tablets in trail tap water to avoid paying NPR 200/L for plastic bottles"
  ]
};
