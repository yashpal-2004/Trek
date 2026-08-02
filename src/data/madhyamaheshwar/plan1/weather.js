export const weather = {
  month: "October",
  season: "Autumn / Post-Monsoon",
  locations: [
    { name: "Rishikesh", temp: { min: 20, max: 30 }, rain: 10, humidity: 60, sunrise: "6:15 AM", sunset: "5:50 PM", wind: "Light" },
    { name: "Ukhimath", temp: { min: 12, max: 22 }, rain: 15, humidity: 65, sunrise: "6:13 AM", sunset: "5:48 PM", wind: "Gentle" },
    { name: "Ransi", temp: { min: 8, max: 18 }, rain: 15, humidity: 70, sunrise: "6:12 AM", sunset: "5:47 PM", wind: "Cool" },
    { name: "Madhyamaheshwar", temp: { min: 2, max: 12 }, rain: 20, humidity: 75, sunrise: "6:10 AM", sunset: "5:45 PM", wind: "Chilly" },
    { name: "Budha Madmaheshwar", temp: { min: 0, max: 10 }, rain: 20, humidity: 75, sunrise: "6:10 AM", sunset: "5:45 PM", wind: "Cold & Windy" }
  ],
  monsoonWarning: "May-June offers pleasant weather. September-October offers crystal clear views of Chaukhamba but temperatures drop rapidly to near freezing at night.",
  tips: [
    "Dress in layers: thermal innerwear, fleece, and a down jacket are essential",
    "Bring a high-capacity power bank as solar charging is weather dependent at the top",
    "Start your Budha Madhyamaheshwar hike before sunrise to catch the clearest reflections"
  ]
};

export const safety = [
  { id: 1, title: "Steep Climbs & Muscle Fatigue", icon: "TrendingUp", description: "The ascent from Bantoli to Madhyamaheshwar gains 1,400m altitude over 10 km.", tips: ["Use trekking poles to distribute load", "Pace yourself, do not attempt to rush the climb", "Stay hydrated with electrolyte-mixed water"] },
  { id: 2, title: "Altitude Adaptation", icon: "Shield", description: "Madhyamaheshwar sits at nearly 3,500m. Some people may feel light headaches.", tips: ["Avoid alcohol and tobacco", "Drink 3-4 liters of water daily", "Keep basic altitude meds handy"] },
  { id: 3, title: "Temperature Drops", icon: "CloudRain", description: "Night temperatures can hover around freezing. Stays are in basic rooms.", tips: ["Ensure your homestay host provides adequate heavy blankets", "Keep a woolen cap on during the night to prevent cold wind exposure"] }
];
