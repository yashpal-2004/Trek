export const weather = {
  month: "July",
  season: "Monsoon / Yatra Season",
  monsoonWarning: "Plan 2 Express Route has less acclimatization time. Monsoon rain is common. Carry premium rain gear and closely monitor altitude symptoms.",
  locations: [
    { name: "Jaon Village (1850m)", temp: { min: 14, max: 24 }, rain: 60, humidity: 75, sunrise: "5:20 AM", sunset: "7:25 PM", wind: "Light" },
    { name: "Singhad Camp (2200m)", temp: { min: 12, max: 20 }, rain: 65, humidity: 78, sunrise: "5:20 AM", sunset: "7:25 PM", wind: "Light" },
    { name: "Thachru Camp (3200m)", temp: { min: 8, max: 16 }, rain: 70, humidity: 82, sunrise: "5:18 AM", sunset: "7:27 PM", wind: "Cool breeze" },
    { name: "Bhim Dwar (3800m)", temp: { min: 4, max: 12 }, rain: 75, humidity: 85, sunrise: "5:15 AM", sunset: "7:30 PM", wind: "Cold wind" },
    { name: "Shrikhand Summit (5227m)", temp: { min: -10, max: 2 }, rain: 40, humidity: 90, sunrise: "5:15 AM", sunset: "7:30 PM", wind: "Very strong" }
  ],
  tips: [
    "Complete medical fitness screening at Singhad checkpost",
    "Acclimatize at Thachru for at least one night",
    "Start the summit push by 2:30 AM to beat the weather",
    "Download offline trail maps beforehand",
    "Bring 1-2 portable oxygen cylinders per person"
  ]
};

export const safety = [
  { id: 1, title: "Medical Fitness Certificate", description: "A doctor's fitness certificate is mandatory for Shrikhand Yatra. Medical checkup is done at Singhad checkpost.", icon: "HeartPulse", tips: ["Get checkup in Hisar/home city", "Show certificate at Singhad", "Bring passport-size photos"] },
  { id: 2, title: "Altitude Sickness (AMS)", description: "The summit is at 5,227m. Acclimatize at Thachru (3200m) and Bhim Dwar (3800m). Descend immediately if symptoms appear.", icon: "AlertTriangle", tips: ["Start Diamox as a preventative measure", "Stay hydrated with ORS water", "Never sleep with AMS symptoms"] },
  { id: 3, title: "Pre-Dawn Summit Start", description: "Summit push must begin at 2:30–3:00 AM from Bhim Dwar. You must summit and return before noon due to afternoon weather.", icon: "Clock", tips: ["Prepare your summit day pack the night before", "Start exactly at 2:30 AM", "Descend if you haven't reached summit by 10 AM"] },
  { id: 4, title: "No Solo Trekking", description: "Never trek alone on the Shrikhand Yatra. Always stay within sight of other pilgrims or your group.", icon: "Users", tips: ["Trek with a buddy", "Keep whistle handy", "Don't rush ahead of the team"] },
  { id: 5, title: "Carry Diamox", description: "Carry Diamox (Acetazolamide) as prevention for AMS. Start 24 hrs before reaching high altitude. Consult doctor before use.", icon: "Pill", tips: ["Take 250mg twice daily", "Drink 4-5L water daily", "Consult doctor first"] },
  { id: 6, title: "Carry Oxygen Can", description: "Portable oxygen cans (available at Rampur / Bhim Dwar) can be lifesaving at 5000m+. Carry at least one.", icon: "Wind", tips: ["Check can pressure before departing", "Inhale on steep summits if breathless", "Keep easily accessible in side pocket"] }
];
export const networkCoverage = [
  { place: "Rampur Bushahr", signal: "Excellent", level: 4, carriers: "All networks", note: "Full 4G/5G coverage throughout" },
  { place: "Jaon Village", signal: "Moderate", level: 2, carriers: "BSNL, Jio", note: "Intermittent Jio signal. BSNL works best" },
  { place: "Singhad Camp", signal: "Weak", level: 1, carriers: "BSNL", note: "Last place with weak calling signal" },
  { place: "Thachru / Bhim Dwar", signal: "No Network", level: 0, carriers: "None", note: "Dead zone. Inform family before leaving Jaon" },
  { place: "Shrikhand Summit", signal: "No Network", level: 0, carriers: "None", note: "No cellular coverage available" }
];
