export const weather = {
  month: "August 2026",
  season: "Late Monsoon — 20–25 Aug",
  locations: [
    { name: "Manali Town", temp: { min: 16, max: 26 }, rain: 55, humidity: 72, sunrise: "5:52 AM", sunset: "7:14 PM", wind: "Light to moderate breeze" },
    { name: "Atal Tunnel North Portal", temp: { min: 10, max: 20 }, rain: 30, humidity: 60, sunrise: "5:48 AM", sunset: "7:16 PM", wind: "Cool breeze" },
    { name: "Batal & Kunzum Pass", temp: { min: 0, max: 10 }, rain: 15, humidity: 42, sunrise: "5:44 AM", sunset: "7:18 PM", wind: "Strong cold gusts" },
    { name: "Kaza Base", temp: { min: 6, max: 18 }, rain: 8, humidity: 38, sunrise: "5:42 AM", sunset: "7:20 PM", wind: "Dry mountain wind" },
    { name: "Chandratal Lake", temp: { min: -2, max: 12 }, rain: 10, humidity: 32, sunrise: "5:44 AM", sunset: "7:18 PM", wind: "Chilly evening gusts" }
  ],
  monsoonWarning: "August is peak monsoon month for Manali and the Kullu-Manali highway. Heavy landslides and road washouts are common on the Manali–Gramphu stretch. Spiti itself stays dry (cold desert) but Batal water streams (nallahs) are at their most dangerous — must cross before 11:00 AM on 21 Aug.",
  tips: [
    "Cross Batal water streams before 11:00 AM on 21 Aug — they are at peak flow by afternoon in August",
    "Check highway status (BRO Manali) for NH-03 before departing Manali on 21 Aug morning",
    "Dress in 3 thermal layers for Kunzum Pass and Chandratal Lake — August nights at 4,500m+ drop to near 0°C",
    "Carry Diamox and ORS sachets from Day 1 — going from 215m (Delhi) to 4,551m (Kunzum) in one day is significant",
    "Keep offline Maps.me / Google Maps downloaded before leaving Manali on 21 Aug"
  ]
};

export const safety = [
  {
    id: 1,
    title: "High Altitude AMS Risk",
    icon: "TrendingUp",
    description: "On 21 Aug you go from Manali (2,050m) directly to Kaza (3,800m) and cross Kunzum Pass (4,551m) — the fastest gain in this itinerary. AMS is a real risk.",
    tips: [
      "Drink 3–4 litres of water from the moment you wake up in Manali on 21 Aug",
      "Take Diamox 125mg the night before (20 Aug) and morning of 21 Aug if prescribed",
      "Avoid heavy exertion on arrival at Kaza — rest and hydrate; no evening walks to high-altitude villages"
    ]
  },
  {
    id: 2,
    title: "August Nallah & Landslide Risk",
    icon: "Waves",
    description: "August is peak monsoon. The Manali–Gramphu section (NH-03) and the Batal nallahs are at their most dangerous. Glacial melt peaks between 12 PM–3 PM.",
    tips: [
      "Depart Manali by 09:30 AM on 21 Aug to reach Batal before noon",
      "Check BRO (Border Roads Organisation) NH-03 status before departing Manali",
      "Maintain 1st/2nd gear, steady throttle — never stop mid-stream crossing"
    ]
  },
  {
    id: 3,
    title: "No Network Zone",
    icon: "Signal",
    description: "Zero cellular coverage between Chhatru, Batal, Kunzum Pass and Chandratal Lake. This covers the majority of Day 1 (21 Aug) and the Chandratal detour on Day 3 (23 Aug).",
    tips: [
      "Download offline Maps.me / Google Maps before leaving Manali on 21 Aug",
      "Share your live itinerary with family before departing — specify Kaza homestay contact number",
      "Ride in pairs; never separate on unmarked terrain between Batal and Kunzum"
    ]
  },
  {
    id: 4,
    title: "Critical Fuel Stations & Dry Zones",
    icon: "Fuel",
    description: "There are only two refueling points on this entire mountain route. A 200 km dry zone lies between Manali and Kaza.",
    tips: [
      "Manali Town: Tank up to 100% capacity on 21 Aug morning before heading towards Atal Tunnel.",
      "Kaza Indian Oil Pump: The only fuel station in Spiti. Refuel here immediately on arrival (21 Aug eve) and before the Shipki La pass ride (23 Aug).",
      "No Tandi detour: The itinerary does not pass Keylong/Tandi. Do not expect any fuel pumps on the Gramphu-Batal-Kaza stretch.",
      "Carry spare fuel: Keep 2-3 litres of reserve petrol in robust bottles/jerry cans for emergencies."
    ]
  }
];
