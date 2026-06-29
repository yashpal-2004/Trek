export const weather = {
  month: "July",
  season: "Monsoon",
  locations: [
    { name: "Haridwar/Rishikesh", temp: { min: 26, max: 34 }, rain: 70, humidity: 80, sunrise: "5:25 AM", sunset: "7:15 PM", wind: "Light breeze" },
    { name: "Rudraprayag", temp: { min: 20, max: 28 }, rain: 75, humidity: 85, sunrise: "5:20 AM", sunset: "7:20 PM", wind: "Moderate" },
    { name: "Gopeshwar", temp: { min: 15, max: 22 }, rain: 80, humidity: 88, sunrise: "5:15 AM", sunset: "7:25 PM", wind: "Moderate" },
    { name: "Sagar Village", temp: { min: 12, max: 18 }, rain: 85, humidity: 90, sunrise: "5:10 AM", sunset: "7:30 PM", wind: "Cool" },
    { name: "Rudranath", temp: { min: 8, max: 15 }, rain: 90, humidity: 92, sunrise: "5:05 AM", sunset: "7:35 PM", wind: "Strong gusts" },
    { name: "Chopta/Tungnath", temp: { min: 5, max: 12 }, rain: 75, humidity: 85, sunrise: "5:00 AM", sunset: "7:40 PM", wind: "Cold wind" },
    { name: "Chandrashila Summit", temp: { min: 2, max: 8 }, rain: 65, humidity: 80, sunrise: "5:00 AM", sunset: "7:40 PM", wind: "Very strong" },
  ],
  monsoonWarning: "July is peak monsoon in Garhwal. Expect daily rainfall, landslide delays, leeches on trails, and cloudy summit views. Carry comprehensive rain gear and build flexibility into your schedule.",
  tips: [
    "Check weather each morning before trekking",
    "Start early to avoid afternoon thunderstorms",
    "Waterproof everything — bags, shoes, electronics",
    "Summit attempts best on clear morning windows",
    "Avoid river crossings during heavy rain",
  ],
};

export const safety = [
  { id: 1, title: "Monsoon Hazards", icon: "CloudRain", description: "July brings daily rainfall, landslides, and swollen rivers. Roads may close without warning.", tips: ["Check road status daily", "Avoid river crossings in rain", "Carry extra rain gear"] },
  { id: 2, title: "Landslide Risk", icon: "Mountain", description: "Mountain roads are prone to landslides during monsoon. UTC buses may be delayed 24-48 hours.", tips: ["Travel early morning", "Listen to local advice", "Keep buffer day in schedule"] },
  { id: 3, title: "Altitude Safety", icon: "TrendingUp", description: "Chandrashila at 4000m poses altitude sickness risk. Symptoms: headache, nausea, dizziness.", tips: ["Ascend slowly", "Stay hydrated", "Descend if symptoms worsen", "Carry Diamox"] },
  { id: 4, title: "River Safety", icon: "Waves", description: "Monsoon swells rivers dramatically. Rafting may be cancelled. Never attempt river crossings alone.", tips: ["Only raft with licensed operators", "Wear life jacket always", "Avoid rivers during heavy rain"] },
  { id: 5, title: "Wild Animals", icon: "Bug", description: "Leopards and bears inhabit forests. Encounters are rare but possible on remote trails.", tips: ["Make noise while trekking", "Don't trek alone", "Store food securely at camp"] },
  { id: 6, title: "Night Travel", icon: "Moon", description: "Avoid mountain road travel after dark. No street lighting, cliff edges, and landslide risk.", tips: ["Reach destination before sunset", "No night trekking", "Book accommodation in advance"] },
  { id: 7, title: "Network Coverage", icon: "Wifi", description: "BSNL works best in mountains. No network at Rudranath, Deoria Tal, and most trek trails.", tips: ["Download offline maps", "Inform family before losing network", "Carry power bank"] },
  { id: 8, title: "ATM & Cash", icon: "CreditCard", description: "Last reliable ATM at Gopeshwar. Remote areas are cash-only.", tips: ["Withdraw ₹10,000+ at Gopeshwar", "Carry small denominations", "Hide emergency cash separately"] },
  { id: 9, title: "Power & Charging", icon: "Battery", description: "Electricity limited in villages (6-10 PM). Power banks essential.", tips: ["20,000mAh power bank minimum", "Charge at every GMVN stop", "Carry car charger adapter"] },
  { id: 10, title: "Medical Preparedness", icon: "Heart", description: "Nearest hospital at Gopeshwar. No medical facilities on trek routes.", tips: ["Comprehensive first aid kit", "Personal medicines for full trip", "Know basic first aid"] },
  { id: 11, title: "Trekking Safety", icon: "Footprints", description: "Never trek alone. Inform someone of your route. Start early, descend before storms.", tips: ["Trek in groups", "Carry whistle and torch", "Stay on marked trails", "No shortcuts"] },
  { id: 12, title: "Leave No Trace", icon: "Leaf", description: "Protect fragile Himalayan ecosystem. Respect local culture and temple customs.", tips: ["Pack out all trash", "No plastic in mountains", "Respect temple rules", "Support local economy"] },
];
