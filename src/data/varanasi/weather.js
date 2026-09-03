export const weather = {
  month: "September 2026",
  season: "Late Monsoon / Early Autumn",
  monsoonWarning: "September is the tail end of the monsoon. The ghats might still be slightly flooded and it can be quite humid. Boat rides may be partially restricted if water levels are high. Keep an umbrella handy for sudden showers.",
  locations: [
    { name: "Varanasi (Assi Ghat)", temp: { min: 25, max: 33 }, rain: 40, humidity: 80, sunrise: "05:50 AM", wind: "12 km/h" }
  ],
  tips: [
    "Wear light, breathable cotton clothes due to high humidity.",
    "Carry mosquito repellent (like Odomos) as the post-monsoon period breeds mosquitoes near the river.",
    "Wear waterproof sandals or crocs for walking in the galis, as they might be wet or muddy."
  ]
};

export const safety = [
  { id: 1, title: "Pickpockets in Galis", icon: "Shield", description: "The narrow lanes (galis) get extremely crowded.", tips: ["Keep your wallet in front pocket", "Hold your phone securely", "Avoid carrying large amounts of cash"] },
  { id: 2, title: "Temple Scams", icon: "AlertTriangle", description: "Fake guides or pandas might ask for heavy donations.", tips: ["Only donate if you want to at official hundi", "Ignore people offering 'VIP' darshan outside"] }
];

export const networkCoverage = [
  { place: "Assi Ghat", signal: "Excellent", level: 4, carriers: "All Networks", note: "Full 4G/5G coverage." },
  { place: "Dashashwamedh Ghat", signal: "Good", level: 3, carriers: "All Networks", note: "Good coverage, drops in massive crowds." },
  { place: "Kashi Vishwanath Galis", signal: "Moderate", level: 2, carriers: "All Networks", note: "Intermittent signal inside deep narrow alleys." }
];
