export const weather = {
  month: "August 2026",
  season: "Coastal Monsoon / Pleasant Sea Breeze",
  monsoonWarning: "Saurashtra coast experiences sea breezes and intermittent rainfall. Carry an umbrella and sun-protection cap for outdoor visits.",
  locations: [
    { name: "Veraval / Somnath Coast", temp: { min: 25, max: 31 }, rain: 50, humidity: 80, sunrise: "06:15 AM", wind: "16 km/h" },
    { name: "Dwarka / Nageshwar Coast", temp: { min: 24, max: 30 }, rain: 40, humidity: 78, sunrise: "06:20 AM", wind: "18 km/h" }
  ],
  tips: [
    "Wear sunglasses and light cotton clothing along coastal temples",
    "Keep mobile devices inside waterproof pouches during Beyt Dwarka ferry boat rides",
    "Stay hydrated with fresh coconut water along Somnath beach"
  ]
};

export const safety = [
  { id: 1, title: "Ferry Boat Safety", icon: "CloudRain", description: "Okha to Beyt Dwarka ferry boats carry pilgrim crowds across sea channel.", tips: ["Hold boat side rails firmly", "Wear life jacket if provided", "Keep electronic items inside sealed bags"] },
  { id: 2, title: "Temple Security & ID", icon: "Shield", description: "Strict police check post at Somnath & Dwarkadhish temple gates.", tips: ["Carry physical photo ID (Aadhar Card)", "Deposit phones/wallets in designated lockers", "Do not carry metal objects in pockets"] },
  { id: 3, title: "Coastal Sun & Humidity", icon: "Thermometer", description: "Sunny afternoon weather along Arabian sea coast.", tips: ["Apply sunscreen lotion", "Drink ORS / coconut water", "Wear comfortable cotton temple clothes"] },
  { id: 4, title: "Crowd Queue Management", icon: "Users", description: "Heavy pilgrim queues during evening Aarti at Dwarkadhish & Somnath.", tips: ["Pre-register online Darshan tokens if available", "Stand patiently in designated queue lines", "Keep emergency cash handy"] }
];
