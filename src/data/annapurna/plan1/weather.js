export const weather = {
  month: "October - November / March - May",
  season: "Autumn & Spring",
  locations: [
    { name: "Pokhara City (822m)", temp: { min: 14, max: 25 }, rain: 15, humidity: 60, sunrise: "6:15 AM", sunset: "5:45 PM", wind: "Light breeze" },
    { name: "Ghandruk Village (1,940m)", temp: { min: 8, max: 18 }, rain: 10, humidity: 55, sunrise: "6:10 AM", sunset: "5:48 PM", wind: "Cool mountain breeze" },
    { name: "Deurali (3,230m)", temp: { min: -2, max: 10 }, rain: 5, humidity: 45, sunrise: "6:05 AM", sunset: "5:50 PM", wind: "Moderate cold wind" },
    { name: "Annapurna Base Camp (4,130m)", temp: { min: -10, max: 5 }, rain: 5, humidity: 35, sunrise: "6:00 AM", sunset: "5:52 PM", wind: "Cold high-altitude gusts" }
  ],
  monsoonWarning: "Avoid monsoon trekking (June to August) due to heavy rainfall, leech infestation, landslips, and zero peak visibility along Modi Khola gorge.",
  tips: [
    "Temperatures at ABC drop below -10°C at night — carry a 4-season down jacket",
    "Pre-dawn sunrise at ABC starts at 05:45 AM — wear headlamp and thermal gloves",
    "Hydrate with 3+ liters of water daily to combat high altitude dry air"
  ]
};

export const safety = [
  {
    id: 1,
    title: "High Altitude AMS Precautions",
    icon: "TrendingUp",
    description: "ABC is at 4,130 meters. Rapid ascent from Pokhara can trigger Acute Mountain Sickness.",
    tips: [
      "Acclimatize naturally with night stops at Himalaya or Deurali before ABC",
      "Drink 3-4 Liters of warm water / tea daily",
      "Descend immediately if persistent headache or nausea occurs"
    ]
  },
  {
    id: 2,
    title: "Avalanche Prone Sector (Deurali to MBC)",
    icon: "ShieldAlert",
    description: "The stretch between Deurali and Machhapuchhre Base Camp crosses narrow avalanche funnels.",
    tips: [
      "Cross Deurali to MBC early morning before 10:00 AM",
      "Listen to local teahouse warnings after heavy snowfall",
      "Stay on the main high trail route"
    ]
  },
  {
    id: 3,
    title: "Stone Staircase Knee Care",
    icon: "Footprints",
    description: "The trail contains over 3,000 steep stone steps between Chhomrong and Sinuwa.",
    tips: [
      "Use dual trekking poles to absorb 25% of knee impact",
      "Wear knee support sleeves during downward descent"
    ]
  }
];
