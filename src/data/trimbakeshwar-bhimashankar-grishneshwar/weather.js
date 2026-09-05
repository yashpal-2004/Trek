export const weather = {
  month: "August 2026",
  season: "Monsoon / Lush Green",
  monsoonWarning: "August brings lush green scenery across Maharashtra Western Ghats. Trimbakeshwar and Bhimashankar can experience active rain showers. Carry umbrellas and rain ponchos.",
  locations: [
    { name: "Nashik / Trimbak", temp: { min: 22, max: 28 }, rain: 65, humidity: 82, sunrise: "06:10 AM", wind: "14 km/h" },
    { name: "Sambhaji Nagar / Ellora", temp: { min: 23, max: 31 }, rain: 45, humidity: 75, sunrise: "06:08 AM", wind: "12 km/h" },
    { name: "Bhimashankar Sanctuary", temp: { min: 18, max: 24 }, rain: 75, humidity: 88, sunrise: "06:12 AM", wind: "16 km/h" }
  ],
  tips: [
    "Carry a rain jacket or sturdy umbrella for Bhimashankar ghats",
    "Wear non-slip grip sandals/shoes on temple marble steps",
    "Keep electronics in waterproof covers during outdoor visits"
  ]
};

export const safety = [
  { id: 1, title: "Monsoon Slip Hazard", icon: "CloudRain", description: "Wet stone corridors at Trimbakeshwar & Bhimashankar can get slippery.", tips: ["Walk cautiously on wet steps", "Hold handrails near Kushavarta Kund", "Wear slip-resistant footwear"] },
  { id: 2, title: "Temple Garbhagriha Dress Code", icon: "Shield", description: "Strict traditional attire (men without upper shirt/t-shirt) for Abhishek inside Garbhagriha.", tips: ["Men: Clean Dhoti/Sola", "Women: Saree/Salwar Kameez", "Normal queue entry allows decent casual wear"] },
  { id: 3, title: "Wildlife & Monkeys", icon: "Thermometer", description: "Bhimashankar is situated inside a dense wildlife sanctuary with active monkeys.", tips: ["Keep food items sealed inside backpacks", "Avoid carrying loose plastic bags", "Do not offer food to monkeys near bus bay"] },
  { id: 4, title: "Ghat Road Transit", icon: "Users", description: "Winding ghat roads up to Bhimashankar and Trimbak hill routes.", tips: ["Take motion sickness medicine if prone", "Travel on morning MSRTC buses for clear views", "Keep emergency cash for small stops"] }
];
