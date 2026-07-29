export const amounts = [
  { category: "Intercity Transit", description: "Hisar ↔ Rampur / Jaon (HRTC & Bus)", amount: 1600 },
  { category: "Local Transit", description: "Shared Taxi & Local Jeeps", amount: 600 },
  { category: "Stays & Tents", description: "Singhad, Thachru & Bhim Dwar Tent Rentals (4 Nights)", amount: 2200 },
  { category: "Food & Meals", description: "Trail Meals, Dhaba Food & Snacks", amount: 1800 },
  { category: "Yatra Fee & Permit", description: "Medical Checkup & Yatra Registration Fee", amount: 400 },
  { category: "Emergency Buffer", description: "First Aid, Oxygen Cylinder Share & Misc", amount: 600 },
];

export const totalAmount = amounts.reduce((sum, item) => sum + item.amount, 0);
