export const weather = {
  month: "May - October",
  season: "Summer & Autumn",
  locations: [
    { name: "Manali Town", temp: { min: 14, max: 24 }, rain: 40, humidity: 65, sunrise: "5:30 AM", sunset: "7:15 PM", wind: "Light breeze" },
    { name: "Atal Tunnel North Portal", temp: { min: 8, max: 18 }, rain: 20, humidity: 55, sunrise: "5:25 AM", sunset: "7:18 PM", wind: "Cool breeze" },
    { name: "Batal & Kunzum Pass", temp: { min: -2, max: 10 }, rain: 15, humidity: 40, sunrise: "5:20 AM", sunset: "7:22 PM", wind: "Strong cold gusts" },
    { name: "Kaza Base", temp: { min: 4, max: 16 }, rain: 5, humidity: 35, sunrise: "5:18 AM", sunset: "7:25 PM", wind: "Dry mountain wind" },
    { name: "Chandratal Lake", temp: { min: -4, max: 12 }, rain: 10, humidity: 30, sunrise: "5:20 AM", sunset: "7:22 PM", wind: "Chilly evening gusts" }
  ],
  monsoonWarning: "Spiti is a cold desert and receives minimal rainfall, but the Manali-Gramphu highway gets heavy monsoon showers between July & August. Water streams near Batal swell in the afternoon.",
  tips: [
    "Cross Batal water streams before 01:00 PM when snow melt is low",
    "Dress in 3 thermal layers for Kunzum Pass and Chandratal Lake",
    "Carry Diamox and ORS for high altitude acclimatization",
    "Keep offline Google Maps saved before leaving Manali"
  ]
};

export const safety = [
  {
    id: 1,
    title: "High Altitude AMS Risk",
    icon: "TrendingUp",
    description: "Kaza (12,470 ft) and Kunzum Pass (14,931 ft) require gradual acclimatization to avoid altitude sickness.",
    tips: [
      "Acclimatize in Manali (2,050m) before crossing Kunzum Pass",
      "Drink 3-4 Liters of water daily to prevent dehydration",
      "Avoid heavy physical exertion on Day 2 & Day 3"
    ]
  },
  {
    id: 2,
    title: "Water Stream Crossings",
    icon: "Waves",
    description: "Unpaved road between Gramphu and Batal features active water streams (nallahs) fed by melting glaciers.",
    tips: [
      "Maintain steady throttle in 1st/2nd gear while riding through streams",
      "Cross streams early morning when water flow is lowest",
      "Inspect stream depth before riding into deep water"
    ]
  },
  {
    id: 3,
    title: "No Network Zone",
    icon: "Signal",
    description: "Zero cellular coverage between Chhatru, Batal, Kunzum Pass & Chandratal Lake.",
    tips: [
      "Download offline Maps.me / Google Maps in Manali",
      "Inform family of your itinerary before leaving Manali/Kaza",
      "Ride in pairs / convoy to support fellow riders"
    ]
  }
];
