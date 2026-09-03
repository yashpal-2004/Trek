export const packingChecklist = [
  {
    category: "Clothing",
    items: [
      { id: "cotton-clothes", name: "Light/Breathable Cotton Clothes", required: true, quantity: 3, note: "For hot & humid weather during the day" },
      { id: "modest-wear", name: "Modest Clothing (Full Pants/Kurtas)", required: true, quantity: 2, note: "Must for temple visits (Kashi Vishwanath, etc.)" },
      { id: "umbrella-raincoat", name: "Umbrella / Raincoat", required: true, quantity: 1, note: "September can have sudden, heavy post-monsoon showers" }
    ]
  },
  {
    category: "Footwear",
    items: [
      { id: "walking-shoes", name: "Comfortable Walking Shoes", required: true, quantity: 1, note: "Lots of walking in the Galis and Ghats" },
      { id: "slip-ons", name: "Waterproof Sandals/Crocs", required: true, quantity: 1, note: "Easy to remove at temples and handles wet streets well" }
    ]
  },
  {
    category: "Essentials & Electronics",
    items: [
      { id: "powerbank", name: "Power Bank", required: true, quantity: 1, note: "Keep phone charged for photos" },
      { id: "mosquito-repellent", name: "Mosquito Repellent (Odomos)", required: true, quantity: 1, note: "Very important post-monsoon near the river" },
      { id: "water-bottle", name: "Reusable Water Bottle", required: true, quantity: 1, note: "Stay hydrated in the humidity" },
      { id: "wet-wipes", name: "Wet Wipes & Hand Sanitizer", required: true, quantity: 1, note: "Essential for street food areas" }
    ]
  },
  {
    category: "Important Documents",
    items: [
      { id: "id-proof", name: "Original ID (Aadhar/Passport)", required: true, quantity: 1, note: "For hotel/hostel check-in and VIP Darshan (if booked)" },
      { id: "cash", name: "Cash (Small Denominations)", required: true, quantity: "₹2,000", note: "Useful for rickshaws, donations, and small vendors" }
    ]
  }
];

export const packing = packingChecklist;
