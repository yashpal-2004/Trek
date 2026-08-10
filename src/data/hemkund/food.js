export const foodGuide = {
  dailyEstimate: { min: 250, max: 350, perPerson: true },
  meals: [
    {
      type: "Breakfast",
      icon: "Coffee",
      items: [
        { place: "Govindghat / Ghangaria", dish: "Aloo Paratha + Hot Tea", cost: 90, vegetarian: true, protein: "Moderate" },
        { place: "Local dhabas", dish: "Maggi + Milk Tea", cost: 60, vegetarian: true, protein: "Low" }
      ],
    },
    {
      type: "Lunch",
      icon: "UtensilsCrossed",
      items: [
        { place: "Ghangaria / Govinddham", dish: "Dal, Rice, Roti Veg Thali", cost: 180, vegetarian: true, protein: "High" },
        { place: "Hemkund Gurudwara", dish: "Langar (Khichdi & Tea)", cost: 0, vegetarian: true, protein: "Moderate" }
      ],
    },
    {
      type: "Dinner",
      icon: "Moon",
      items: [
        { place: "Ghangaria guest houses", dish: "Rajma, Roti, Rice + Sabzi", cost: 200, vegetarian: true, protein: "High" },
        { place: "Govindghat local market", dish: "Simple Punjabi / Garhwali Thali", cost: 150, vegetarian: true, protein: "Moderate" }
      ]
    }
  ],
  localSpecialties: [
    { name: "Gurudwara Langar Prasad", description: "Hot nourishing khichdi and sweet tea served continuously at Govindghat and Hemkund Gurudwaras.", cost: "Free / Donation" },
    { name: "Garhwali Chainsoo", description: "Black gram dal ground and roasted with special mountain herbs.", cost: "₹100–150" },
    { name: "Siddu & Aloo Gutke", description: "Steamed bun and spicy potato side dish popular at transit stops.", cost: "₹60–90" }
  ],
  proteinSources: [
    "Gurudwara Langar Dal & Khichdi",
    "Rajma Chawal at local Ghangaria dhabas",
    "Soyabean and Paneer dishes",
    "Protein bars and nuts (highly recommended to carry)"
  ],
  tips: [
    "Drink the warm tea and langar served at the Gurudwara; it keeps you energized and hydrated at high altitudes.",
    "Non-vegetarian food is strictly unavailable/prohibited beyond Govindghat due to religious sanctity.",
    "Carry energy bars and chocolates for the steep climb from Ghangaria to Hemkund Sahib."
  ]
};
