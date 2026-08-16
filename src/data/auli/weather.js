export const weather = {
  month: "January 2027",
  season: "Winter / Heavy Snow",
  monsoonWarning: "January is peak winter season in Auli. Slopes will be covered in deep snow. Night temperatures can drop to -5°C. Heavy woolens, thermals, and windproof outer layers are mandatory.",
  locations: [
    { name: "Joshimath Town", temp: { min: 2, max: 12 }, rain: 15, humidity: 60, sunrise: "07:05 AM", wind: "10 km/h" },
    { name: "Auli Ski Slopes", temp: { min: -3, max: 6 }, rain: 30, humidity: 70, sunrise: "07:07 AM", wind: "18 km/h" },
    { name: "Gorson Bugyal", temp: { min: -5, max: 4 }, rain: 35, humidity: 72, sunrise: "07:07 AM", wind: "25 km/h" }
  ],
  tips: [
    "Wear proper winter thermals under windproof jackets.",
    "Snow reflects UV light highly; carry polaroid sunglasses and heavy sunscreen.",
    "Keep spare phone batteries warm as cold drafts drain phone charge instantly."
  ]
};

export const safety = [
  { id: 1, title: "Extreme Cold", icon: "Thermometer", description: "Sub-zero temperatures are common in winter. Frostbite risk exists if skin is exposed.", tips: ["Wear insulated gloves and beanies", "Keep fingers and toes warm", "Avoid staying wet in snow"] },
  { id: 2, title: "Slippery Trails", icon: "CloudRain", description: "Trails are covered in hard ice and soft snow, making walking tricky.", tips: ["Use microspikes or rented snow boots", "Carry a trekking pole for support", "Avoid taking shortcuts on steep slopes"] },
  { id: 3, title: "Snow Blindness", icon: "Shield", description: "Bright sunshine on white snow can cause intense glare and eye fatigue.", tips: ["Wear UV-protected sunglasses always", "Avoid looking directly at the snow in noon"] }
];
export default weather;
