export const weather = {
  month: "September 2026",
  season: "Post-Monsoon / Clear Skies",
  monsoonWarning: "September is the beginning of the clear tourist season in Nepal. The monsoon is retreating, and skies are mostly clear with crisp mountain views, though light occasional evening showers can happen.",
  locations: [
    { name: "New Delhi Plains", temp: { min: 25, max: 33 }, rain: 35, humidity: 70, sunrise: "06:05 AM", wind: "12 km/h" },
    { name: "Kathmandu Valley", temp: { min: 18, max: 27 }, rain: 45, humidity: 75, sunrise: "05:50 AM", wind: "8 km/h" },
    { name: "Pokhara Lakeside", temp: { min: 16, max: 26 }, rain: 50, humidity: 78, sunrise: "05:53 AM", wind: "10 km/h" }
  ],
  tips: [
    "September mornings at Sarangkot can be chilly, so carry a light fleece/jacket",
    "Keep standard rain ponchos in your backpack for walking tours in Thamel",
    "Acclimate well if planning small treks or day walking tours"
  ]
};

export const safety = [
  { id: 1, title: "Dusty Roads", icon: "Mask", description: "Hilly roads in Nepal are undergoing massive expansion work and get extremely dusty/muddy.", tips: ["Wear a dust face mask or bandana", "Keep vehicle windows fully closed", "Keep electronics inside zip lock bags"] },
  { id: 2, title: "Border Scams", icon: "Shield", description: "Local middle-men at the Sonauli border will try to sell overpriced tickets or cheat on exchange rates.", tips: ["Avoid booking transport from unauthorized agents", "Walk directly to the government counters", "Exchange money only at authorized counters or banks"] },
  { id: 3, title: "Lake Boating Safety", icon: "Shield", description: "Strong wind gusts can cause minor waves on Phewa Lake in the afternoons.", tips: ["Always wear a life jacket on boats", "Avoid boating during heavy rains/winds", "Follow instructions of the boat rowers"] },
  { id: 4, title: "Currency Validity", icon: "Wallet", description: "New ₹500 and ₹2000 Indian currency notes are not legally accepted in Nepal.", tips: ["Carry ample ₹100 and ₹50 notes", "Use local ATMs in Kathmandu (Nabil Bank accepts Indian debit cards)", "Always confirm standard exchange conversion rates"] }
];
