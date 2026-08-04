export const weather = {
  month: "March - November",
  season: "Valley Season",
  locations: [
    { name: "Jibhi Valley", temp: { min: 12, max: 24 }, rain: 15, humidity: 60, sunrise: "6:05 AM", sunset: "6:55 PM", wind: "Gentle" },
    { name: "Jalori Pass", temp: { min: 6, max: 15 }, rain: 20, humidity: 65, sunrise: "6:04 AM", sunset: "6:54 PM", wind: "Breezy/Windy" }
  ],
  monsoonWarning: "Jalori Pass road can have landslide activity during heavy rains; always check local weather reports.",
  tips: [
    "Jalori Pass temperatures are significantly colder than Jibhi Valley; bring proper warm layers.",
    "Roads can get slippery during evening fog at high altitudes."
  ]
};

export const safety = [
  { id: 1, title: "Scooter Riding caution", icon: "Shield", description: "Jalori Pass curves are extremely steep. Maintain low speed, use both brakes carefully, and never accelerate in neutral downhill.", tips: ["Keep to left lanes on curves", "Wear full helmets at all times"] },
  { id: 2, title: "River Current safety", icon: "Waves", description: "Tirthan river flows very fast. Never cross barrier fences to enter rapids.", tips: ["Avoid deep sections", "Watch out for slippery wet rocks"] }
];
