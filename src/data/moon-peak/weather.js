export const weather = {
  month: "May–June & Sept–Oct",
  season: "Pre & Post Monsoon Alpine",
  locations: [
    { name: "McLeod Ganj / Dharamkot", temp: { min: 14, max: 24 }, rain: 20, humidity: 55, sunrise: "5:30 AM", sunset: "7:10 PM", wind: "Light breeze" },
    { name: "Triund Ridge (2,850m)", temp: { min: 6, max: 16 }, rain: 25, humidity: 60, sunrise: "5:25 AM", sunset: "7:12 PM", wind: "Cool mountain wind" },
    { name: "Laka Got Base (3,300m)", temp: { min: 2, max: 12 }, rain: 30, humidity: 65, sunrise: "5:20 AM", sunset: "7:15 PM", wind: "Cold valley wind" },
    { name: "Moon Peak Summit (4,650m)", temp: { min: -4, max: 5 }, rain: 15, humidity: 45, sunrise: "5:15 AM", sunset: "7:20 PM", wind: "Strong alpine gusts" }
  ],
  monsoonWarning: "Avoid trekking Moon Peak during July-August peak monsoon due to heavy rain, cloud cover obscuring ridge trails, and high scree slip hazards past Lahesh Cave.",
  tips: [
    "Check morning summit weather windows early",
    "Start summit push at 4:00 AM before clouds cover Dhauladhar ridge",
    "Carry windproof thermal layers for summit push"
  ]
};

export const safety = [
  { id: 1, title: "High Altitude Scree & Ridge", icon: "TrendingUp", description: "Moon Peak summit past Lahesh Cave is at 15,250 ft with steep scree, loose boulders, and snow patches.", tips: ["Use trekking poles & microspikes", "Trek with a guide or experienced partner", "Turn back if weather deteriorates"] },
  { id: 2, title: "Sub-Zero Night Temperatures", icon: "Thermometer", description: "Temperatures at Laka Got base camp drop below 0°C at night.", tips: ["Rent sleeping bag rated for -5°C", "Wear thermal base layers & woollen cap"] },
  { id: 3, title: "No Phone Network past Triund", icon: "Wifi", description: "Mobile signal cuts off beyond Triund Ridge.", tips: ["Download offline GPS maps", "Inform emergency contacts in Dharamkot before ascending"] }
];

export const networkCoverage = [
  { place: "Dharamshala / McLeod Ganj", signal: "Excellent", level: 4, carriers: "All networks", note: "Full 4G/5G" },
  { place: "Dharamkot", signal: "Good", level: 3, carriers: "Jio, Airtel", note: "4G available in village" },
  { place: "Triund Top", signal: "Weak", level: 1, carriers: "Airtel / BSNL", note: "Intermittent at ridge points" },
  { place: "Laka Got & Moon Peak", signal: "No Network", level: 0, carriers: "None", note: "Total dead zone" }
];
