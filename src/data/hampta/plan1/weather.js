export const weather = {
  month: "August",
  season: "Monsoon / Summer Crossover",
  monsoonWarning: "August is monsoon season in Kullu. Jobra and Chika get rain showers. Hampta Pass and Lahaul Valley are rain-shadow zones but expect snow/rain at the summit. Water streams can swell in the afternoon.",
  locations: [
    { name: "Manali (2050m)", temp: { min: 15, max: 24 }, rain: 50, humidity: 75, sunrise: "5:30 AM", sunset: "7:15 PM", wind: "Light" },
    { name: "Chika Camp (3140m)", temp: { min: 10, max: 18 }, rain: 60, humidity: 80, sunrise: "5:30 AM", sunset: "7:15 PM", wind: "Moderate" },
    { name: "Balu Ka Ghera (3600m)", temp: { min: 6, max: 15 }, rain: 45, humidity: 82, sunrise: "5:28 AM", sunset: "7:17 PM", wind: "Cool breeze" },
    { name: "Shea Goru Camp (3900m)", temp: { min: 2, max: 12 }, rain: 20, humidity: 65, sunrise: "5:25 AM", sunset: "7:20 PM", wind: "Strong wind" },
    { name: "Chandra Tal (4250m)", temp: { min: -2, max: 10 }, rain: 10, humidity: 55, sunrise: "5:25 AM", sunset: "7:20 PM", wind: "Very strong" }
  ],
  tips: [
    "Check daily updates for Rohtang/Gramphu road landslide blocks",
    "Pack a high-quality poncho to protect your gear",
    "Start early each morning to cross streams before afternoon snowmelt swells them",
    "Keep offline Google maps stored on your phone"
  ]
};

export const safety = [
  { id: 1, title: "Swelling Streams", description: "Glacial streams near Jwara and Shea Goru swell dramatically in the afternoon as temperatures rise and snow melts.", icon: "Waves", tips: ["Cross Jwara stream before 11:30 AM", "Follow lead guide instructions", "Unbuckle backpack chest straps when crossing"] },
  { id: 2, title: "Slippery Scree Descent", description: "The descent from Hampta Pass down to Shea Goru is extremely steep and covered with loose gravel/scree.", icon: "AlertTriangle", tips: ["Use dual trekking poles", "Take sideways steps on steep gravel", "Wear ankle support boots"] },
  { id: 3, title: "Altitude Safety (AMS)", description: "Ascending to 4,270m Hampta Pass summit can cause mild altitude sickness. Take it slow and stay hydrated.", icon: "TrendingUp", tips: ["Drink 4L water daily", "Carry Diamox pills", "Descend if headache/nausea persists"] },
  { id: 4, title: "Landslide Risk", icon: "Mountain", description: "Gramphu and Rohtang highway is prone to landslides during monsoon showers.", tips: ["Keep buffer hours in travel plan", "Do not drive after dark", "Check local road clearance updates"] },
];

export const networkCoverage = [
  { place: "Manali", signal: "Excellent", level: 4, carriers: "All networks", note: "Full 4G/5G coverage throughout" },
  { place: "Jobra Trailhead", signal: "Weak", level: 1, carriers: "BSNL", note: "Only calling signal works near trailhead" },
  { place: "Chika & Balu Ka Ghera", signal: "No Network", level: 0, carriers: "None", note: "Absolute dead zone. Inform family before starting" },
  { place: "Shea Goru & Chatru", signal: "No Network", level: 0, carriers: "None", note: "No cellular coverage" },
  { place: "Chandra Tal Lake", signal: "No Network", level: 0, carriers: "None", note: "Zero network. Satellite communication only for emergency" }
];
