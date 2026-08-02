export const weather = {
  month: "January",
  season: "Peak Winter / Heavy Snow",
  locations: [
    { name: "Dehradun", temp: { min: 6, max: 18 }, rain: 10, humidity: 65, sunrise: "7:12 AM", sunset: "5:35 PM", wind: "Light" },
    { name: "Sankri", temp: { min: 0, max: 10 }, rain: 20, humidity: 70, sunrise: "7:14 AM", sunset: "5:33 PM", wind: "Gentle" },
    { name: "Juda Ka Talab", temp: { min: -5, max: 5 }, rain: 25, humidity: 80, sunrise: "7:15 AM", sunset: "5:32 PM", wind: "Chilly" },
    { name: "Kedarkantha Summit", temp: { min: -12, max: 0 }, rain: 30, humidity: 85, sunrise: "7:16 AM", sunset: "5:31 PM", wind: "Freezing" }
  ],
  monsoonWarning: "Sub-zero night temperatures are guaranteed in January. Carry heavy thermal layers, a down jacket, and windproof shell.",
  tips: [
    "Always wear microspikes/crampons on hard, slippery snow slopes near the summit ridge.",
    "Do not tread directly on the center of the frozen Juda Ka Talab lake as ice thickness can vary."
  ]
};

export const safety = [
  { id: 1, title: "Summit Ridge Slips", icon: "TrendingUp", description: "The final 1 km to the summit is steep and often covered in hard, slippery ice.", tips: ["Use microspikes", "Walk slowly following established guide tracks", "Use trekking poles"] },
  { id: 2, title: "Sub-zero Temperatures", icon: "Shield", description: "Night temperatures drop to -12°C at the base camp and summit.", tips: ["Keep thermals on at night", "Use warm hot water bottles inside sleeping bag", "Wear dry woolen socks"] }
];
