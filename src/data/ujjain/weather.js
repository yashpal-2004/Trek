export const weather = {
  month: "August 2026",
  season: "Monsoon / Humid",
  monsoonWarning: "August is monsoon season in Madhya Pradesh. Ujjain can experience moderate to heavy sudden downpours. Carry an umbrella/poncho and check for water logging in low-lying ghat areas before heading out.",
  locations: [
    { name: "Sonipat Bypass", temp: { min: 26, max: 34 }, rain: 45, humidity: 75, sunrise: "05:45 AM", wind: "10 km/h" },
    { name: "Ujjain City", temp: { min: 24, max: 32 }, rain: 60, humidity: 80, sunrise: "06:02 AM", wind: "12 km/h" },
    { name: "Mahakal Temple Area", temp: { min: 24, max: 31 }, rain: 60, humidity: 82, sunrise: "06:02 AM", wind: "8 km/h" }
  ],
  tips: [
    "Carry a compact umbrella or rain poncho during temple visits",
    "Keep leather items and electronic accessories in ziplock bags",
    "Stay hydrated as humidity levels can be very high between rains"
  ]
};

export const safety = [
  { id: 1, title: "Dehydration & Humidity", icon: "Thermometer", description: "Malwa afternoon temperatures are warm and highly humid in August.", tips: ["Carry a reusable water bottle", "Drink ORS or coconut water frequently", "Avoid walking long distances under direct afternoon sun"] },
  { id: 2, title: "Temple Dress Code", icon: "Shield", description: "Strict traditional attire is enforced only for Garbhagriha entry at Mahakaleshwar Jyotirlinga.", tips: ["Men: Clean Dhoti and Sola", "Women: Traditional Saree", "Normal queue entry allows decent casual clothing"] },
  { id: 3, title: "Monsoon Wet Floors", icon: "CloudRain", description: "Temple marble floors and Shipra river ghat steps get extremely slippery when wet.", tips: ["Walk slowly and cautiously on stone corridors", "Hold handrails at Ram Ghat steps", "Wear slip-resistant footwear"] },
  { id: 4, title: "Crowd Safety", icon: "Users", description: "Mahakal Temple attracts heavy weekend crowds. Be mindful of pickpockets.", tips: ["Keep cash/cards secure in front pockets", "Pre-book VIP tickets online to bypass main queues", "Fix a meeting spot with companions in case you split up"] }
];
