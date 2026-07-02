export const weather = {
  month: "Custom",
  season: "Autumn/Spring",
  locations: [
    { name: "Gangtok", temp: { min: 14, max: 20 }, rain: 20, humidity: 70, sunrise: "5:15 AM", sunset: "5:30 PM", wind: "Light" },
    { name: "Lachen", temp: { min: 8, max: 14 }, rain: 15, humidity: 65, sunrise: "5:12 AM", sunset: "5:28 PM", wind: "Cool" },
    { name: "Lachung", temp: { min: 9, max: 15 }, rain: 15, humidity: 65, sunrise: "5:10 AM", sunset: "5:25 PM", wind: "Cool" },
    { name: "Gurudongmar Lake", temp: { min: -5, max: 5 }, rain: 5, humidity: 50, sunrise: "5:05 AM", sunset: "5:20 PM", wind: "Extremely Strong" },
  ],
  monsoonWarning: "North Sikkim is a high-altitude border zone. Gurudongmar Lake is at 17,800 ft where oxygen levels are low and cold winds are severe. Acclimatization is essential.",
  tips: [
    "Start from Lachen by 4:00 AM to reach Gurudongmar before winds pick up",
    "Keep hydrated and do not run at the lake",
    "Ensure your permit paperwork is completed the day before in Gangtok",
    "Carry thermal inner layers and windproof jackets",
  ],
};

export const safety = [
  { id: 1, title: "High Altitude Sickness", icon: "TrendingUp", description: "Gurudongmar is at 17,800 ft. Acute Mountain Sickness (AMS) is common. Symptoms: headache, nausea, dizziness.", tips: ["Ascend slowly", "Avoid running/exertion", "Descend if symptoms worsen", "Carry portable oxygen / camphor"] },
  { id: 2, title: "Extreme Cold", icon: "Thermometer", description: "Gurudongmar is sub-zero in early morning. Wind chill makes it feel colder.", tips: ["Wear heavy woolens", "Use windproof gloves", "Wear woolen beanie"] },
  { id: 3, title: "Road Conditions", icon: "AlertTriangle", description: "Roads to North Sikkim are rugged, unpaved, and prone to blockages.", tips: ["Use heavy shared Sumos", "Listen to driver instructions", "Prepare for long travel times"] },
];
