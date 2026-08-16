export const weather = {
  month: "August",
  season: "High-Altitude Summer",
  locations: [
    { name: "Leh", temp: { min: 10, max: 25 }, rain: 10, humidity: 30, sunrise: "5:45 AM", sunset: "7:15 PM", wind: "Moderate" },
    { name: "Khardung La", temp: { min: -5, max: 8 }, rain: 20, humidity: 45, sunrise: "5:43 AM", sunset: "7:18 PM", wind: "Strong & Cold" },
    { name: "Pangong Tso", temp: { min: 2, max: 15 }, rain: 5, humidity: 35, sunrise: "5:40 AM", sunset: "7:22 PM", wind: "High winds" }
  ],
  monsoonWarning: "Ladakh is in a rain shadow area, so monsoons are negligible. However, high-altitude passes can experience sudden snowfall or wind chill.",
  tips: [
    "UV radiation is extremely high; use SPF 50+ sunscreen",
    "Wear sunglasses to prevent snow blindness on high passes",
    "Hydrate constantly with water and ORS"
  ]
};

export const safety = [
  { id: 1, title: "High Altitude & Acclimatization", icon: "TrendingUp", description: "Leh sits at 3,500m (11,500 ft). Flying in requires at least 48 hours of complete rest to adjust.", tips: ["Do not plan any excursions on Day 1 & 2", "Avoid alcohol and smoking", "Take light walks around Leh market before biking"] },
  { id: 2, title: "Extreme Cold & Windchill", icon: "Thermometer", description: "Temperatures on passes drop below freezing even in summer, especially with wind chill.", tips: ["Dress in layers (thermal, fleece, windcheater)", "Protect fingers and ears", "Keep batteries warm"] },
  { id: 3, title: "Solar Radiation & Dehydration", icon: "Sun", description: "Thin atmosphere leads to intense sun exposure and dry skin/dehydration.", tips: ["Drink 4-5 liters of water daily", "Apply sunscreen frequently", "Wear a broad-brimmed hat"] }
];
