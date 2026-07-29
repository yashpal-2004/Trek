export const amounts = [
  { category: "Intercity Transit", description: "Hisar ↔ Rampur Express Bus (Overnight)", amount: 1500 },
  { category: "Local Transit", description: "Shared Taxis & Jeeps to Jaon", amount: 500 },
  { category: "Stays & Tents", description: "Thachru & Bhim Dwar Tent Rentals (3 Nights)", amount: 1800 },
  { category: "Food & Meals", description: "Trail Meals, Dhaba Food & Snacks", amount: 1500 },
  { category: "Yatra Fee & Permit", description: "Medical Checkup & Yatra Registration Fee", amount: 400 },
  { category: "Emergency Buffer", description: "First Aid & Emergency Reserve", amount: 500 },
];

export const totalAmount = amounts.reduce((sum, item) => sum + item.amount, 0);
