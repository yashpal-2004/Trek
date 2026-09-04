export const weather = {
  month: "Custom",
  season: "Summer/Autumn",
  locations: [
    { name: "Tapri / Yulla Khas", temp: { min: 12, max: 22 }, rain: 10, humidity: 60, sunrise: "5:30 AM", sunset: "7:00 PM", wind: "Light" },
    { name: "Base Camp Meadows", temp: { min: 6, max: 15 }, rain: 15, humidity: 55, sunrise: "5:28 AM", sunset: "6:58 PM", wind: "Cool Breeze" },
    { name: "Yulla Kanda Lake", temp: { min: 1, max: 10 }, rain: 10, humidity: 50, sunrise: "5:25 AM", sunset: "6:55 PM", wind: "Strong Winds" },
  ],
  monsoonWarning: "Kinnaur roads can experience landslides during heavy rains (July-August). The trek to Yulla Kanda involves trekking to nearly 3,900 meters. Steady pacing and cold clothing are mandatory.",
  tips: [
    "Ascend gradually to avoid acute mountain sickness",
    "Keep drinking plenty of water during the trek",
    "Pack a windcheater jacket specifically for the lake summit",
    "Jio/Airtel network is available only up to Yulla Khas",
  ],
};

export const safety = [
  { id: 1, title: "Acclimatization", icon: "TrendingUp", description: "Yulla Kanda is at 12,779 ft. Acute Mountain Sickness (AMS) can occur. Symptoms: mild headache, nausea.", tips: ["Spend the first night in Yulla Khas", "Avoid overexerting on the trail", "Drink warm fluids"] },
  { id: 2, title: "Cold Winds", icon: "Thermometer", description: "The lake summit is open to chilly gusts of wind, especially in the afternoon.", tips: ["Layer your clothing", "Keep your ears covered with a beanie", "Wear windproof outer layer"] },
  { id: 3, title: "Steep Slopes", icon: "AlertTriangle", description: "The final ascent to the lake has steep trails which can be slippery or muddy.", tips: ["Use trekking poles for stability", "Take slow, deliberate steps", "Avoid rushing downhill"] },
];
