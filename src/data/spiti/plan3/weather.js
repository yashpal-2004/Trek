export const weather = {
  month: "August",
  season: "Alpine Summer",
  locations: [
    { name: "Manali", temp: { min: 15, max: 24 }, rain: 60, humidity: 75, sunrise: "5:35 AM", sunset: "7:12 PM", wind: "Light" },
    { name: "Kunzum Pass", temp: { min: -2, max: 8 }, rain: 15, humidity: 45, sunrise: "5:30 AM", sunset: "7:15 PM", wind: "Strong & Cold" },
    { name: "Kaza", temp: { min: 5, max: 18 }, rain: 5, humidity: 30, sunrise: "5:28 AM", sunset: "7:18 PM", wind: "Moderate" },
    { name: "Chandratal", temp: { min: -4, max: 12 }, rain: 10, humidity: 30, sunrise: "5:30 AM", sunset: "7:15 PM", wind: "Chilly gusts" }
  ],
  monsoonWarning: "Spiti is a cold desert and stays dry, but the route from Manali (via Solang) can have monsoon showers. Expect water logs on roads.",
  tips: [
    "UV index is very high; use high-protection sunscreen",
    "Dress in 3 thermal layers for Kunzum Pass and Chandratal Lake",
    "Expect windchill in the evenings"
  ]
};

export const safety = [
  { id: 1, title: "Altitude Acclimatization", icon: "TrendingUp", description: "Kaza sits at 3,600m. Rapid riding ascent poses moderate altitude sickness risk.", tips: ["Hydrate with 4L water daily", "Avoid physical overexertion", "Do not spend more than 1 hour on Kunzum Pass"] },
  { id: 2, title: "Rough Road Terrains", icon: "Compass", description: "Gramphu to Batal road is pure off-road dirt and boulders, with multiple water nallas.", tips: ["Ride slow and keep feet down in nallas", "Cross deep channels early morning", "Maintain bike tire pressure"] }
];
