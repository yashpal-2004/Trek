export const weather = {
  month: "October",
  season: "Autumn / Post-Monsoon",
  locations: [
    { name: "Rishikesh", temp: { min: 20, max: 30 }, rain: 10, humidity: 60, sunrise: "6:15 AM", sunset: "5:50 PM", wind: "Light" },
    { name: "Gaurikund", temp: { min: 8, max: 18 }, rain: 15, humidity: 65, sunrise: "6:13 AM", sunset: "5:48 PM", wind: "Gentle" },
    { name: "Kedarnath", temp: { min: -2, max: 8 }, rain: 20, humidity: 75, sunrise: "6:12 AM", sunset: "5:47 PM", wind: "Freezing" },
    { name: "Ukhimath", temp: { min: 12, max: 22 }, rain: 15, humidity: 65, sunrise: "6:13 AM", sunset: "5:48 PM", wind: "Gentle" },
    { name: "Madhyamaheshwar", temp: { min: 2, max: 12 }, rain: 20, humidity: 75, sunrise: "6:10 AM", sunset: "5:45 PM", wind: "Chilly" }
  ],
  monsoonWarning: "Kedarnath and Madmaheshwar both experience sub-zero temperatures at night during October. Heavy layers are mandatory.",
  tips: [
    "Dress in multiple layers: thermals, fleece, and down jackets are essential for Kedarnath stays.",
    "Expect freezing winds in Kedarnath and Budha Madhyamaheshwar; carry windproof outer shells."
  ]
};

export const safety = [
  { id: 1, title: "Double Trek Altitude Fatigue", icon: "TrendingUp", description: "You are doing two massive 16 km climbs back to back.", tips: ["Keep hydration high", "Take a rest day in Ukhimath before starting Madmaheshwar", "Use walking sticks"] },
  { id: 2, title: "AMS (Altitude Sickness)", icon: "Shield", description: "Kedarnath stands at 3,583m and Budha Madmaheshwar at 3,750m.", tips: ["Keep Diamox handy", "Descend immediately if breathing issues or persistent headache occur", "Avoid overexertion"] }
];
