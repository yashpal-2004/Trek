export const weather = {
  month: "October - June",
  season: "Paragliding Season",
  locations: [
    { name: "Bir Colony", temp: { min: 10, max: 22 }, rain: 5, humidity: 55, sunrise: "6:25 AM", sunset: "6:10 PM", wind: "Gentle" },
    { name: "Billing Take-off", temp: { min: 4, max: 15 }, rain: 10, humidity: 60, sunrise: "6:24 AM", sunset: "6:09 PM", wind: "Moderate/Breezy" }
  ],
  monsoonWarning: "Paragliding is strictly closed during the monsoon months (July to mid-September) due to safety and high winds.",
  tips: [
    "Thermal wind cycles are strongest in October/November, offering the best gliding heights.",
    "Do not fly under the influence or immediately after eating a heavy meal."
  ]
};

export const safety = [
  { id: 1, title: "Equipment Safety check", icon: "Shield", description: "Ensure helmet straps, reserve chute pin, and harness buckles are fully locked.", tips: ["Verify before runway run", "Check paraglider wing lines for twists"] },
  { id: 2, title: "Takeoff Run commitment", icon: "TrendingUp", description: "Never sit down or stop running when launching. Run continuously downhill until the glider lifts you off the slope.", tips: ["Keep running forward", "Trust the pilot instructions"] }
];
