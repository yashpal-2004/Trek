export const weather = {
  month: "October 2026",
  season: "Autumn / Peak Himalayan Peak Views",
  monsoonWarning: "October is peak autumn in Kumaon. Clear sunny days with crisp mountain air and panoramic 300km Himalayan snow peak views from Zero Point. Night temperatures can drop to 6°C — carry warm layers.",
  locations: [
    { name: "Binsar Sanctuary (Ayarpani)", temp: { min: 6, max: 18 }, rain: 5, humidity: 45, sunrise: "06:15 AM", wind: "8 km/h" }
  ],
  tips: [
    "Carry a windproof jacket or fleece for early morning hikes to Zero Point.",
    "Start early at 07:00 AM for fog-free clear Himalayan peak photography.",
    "Keep a headlamp ready as homestays inside Binsar forest operate on solar power."
  ]
};

export const safety = [
  { id: 1, title: "Wildlife Sanctuary Trail Rules", icon: "Shield", description: "Binsar is a protected sanctuary inhabited by leopards and Himalayan black bears.", tips: ["Stay on marked forest tracks", "Avoid solo trekking post 5:00 PM", "Make gentle noise while walking"] },
  { id: 2, title: "Unreserved Train & Local Jeep Safety", icon: "AlertTriangle", description: "Overnight general coach train travel & mountain jeep roads.", tips: ["Secure your bag on general train coaches", "Depart early morning for hill jeep rides to avoid fog"] }
];

export const networkCoverage = [
  { place: "Kathgodam Station", signal: "Excellent", level: 4, carriers: "All Networks", note: "Full 4G/5G coverage." },
  { place: "Almora Town", signal: "Good", level: 3, carriers: "All Networks", note: "Good 4G in market areas." },
  { place: "Binsar Sanctuary Gate (Ayarpani)", signal: "Moderate", level: 2, carriers: "BSNL, Jio", note: "Intermittent network inside forest homestays." },
  { place: "Zero Point Peak", signal: "Weak", level: 1, carriers: "BSNL (spots only)", note: "Weak signal at high observation tower." }
];

