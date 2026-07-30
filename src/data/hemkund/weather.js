export const weather = {
  month: "August",
  season: "Monsoon / Post-Monsoon",
  locations: [
    { name: "Haridwar", temp: { min: 25, max: 32 }, rain: 75, humidity: 80, sunrise: "5:30 AM", sunset: "7:05 PM", wind: "Light" },
    { name: "Govindghat", temp: { min: 18, max: 24 }, rain: 80, humidity: 85, sunrise: "5:28 AM", sunset: "7:08 PM", wind: "Moderate" },
    { name: "Ghangaria", temp: { min: 8, max: 15 }, rain: 85, humidity: 90, sunrise: "5:25 AM", sunset: "7:12 PM", wind: "Cool" },
    { name: "Valley of Flowers", temp: { min: 7, max: 14 }, rain: 90, humidity: 92, sunrise: "5:25 AM", sunset: "7:12 PM", wind: "Foggy/Cool" },
    { name: "Hemkund Sahib", temp: { min: 3, max: 10 }, rain: 75, humidity: 85, sunrise: "5:23 AM", sunset: "7:15 PM", wind: "Cold & Windy" }
  ],
  monsoonWarning: "August is peak monsoon in Uttarakhand. The Valley of Flowers is at its most beautiful, but trails are wet and slippery. Carry a rain poncho, cover your bags, and expect mountain road blocks.",
  tips: [
    "Start early to reach Ghangaria/Valley before heavy afternoon rains",
    "Waterproof hiking boots and trekking poles are mandatory",
    "Carry salt or spray for leeches in lower forest sections",
    "Expect delays at landslide zones near Joshimath"
  ]
};

export const safety = [
  { id: 1, title: "Monsoon Rain & Slippery Trails", icon: "CloudRain", description: "Wet trails and stone paths become very slippery. Landslides are possible on road routes.", tips: ["Wear high-grip waterproof shoes", "Use trekking poles", "Keep buffer days for transit delays"] },
  { id: 2, title: "Altitude Sickness (AMS)", icon: "TrendingUp", description: "Hemkund Sahib sits at 4,632m (15,200 ft), a rapid altitude gain from Ghangaria (3,048m).", tips: ["Climb slowly and take steady paces", "Drink plenty of water", "Do not stay at the top for more than 1-2 hours", "Descend immediately if head aches"] },
  { id: 3, title: "Atmosphere & Oxygen", icon: "Shield", description: "Oxygen levels are noticeably thinner at Hemkund Sahib. Take deep breaths.", tips: ["Avoid physical overexertion", "Carry portable oxygen can if sensitive", "Do not run on stairs"] }
];
