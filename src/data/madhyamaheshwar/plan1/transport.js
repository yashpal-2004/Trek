import { madhyamaheshwarAmounts } from "../amounts";
const data = madhyamaheshwarAmounts.plan1;

export const transport = [
  { id: 1, from: "Delhi", to: "Rishikesh", mode: "Train / AC Bus", distance: "240 km", duration: "5-6 hrs", fare: data.transportFares.delhiToRishikesh, cheapest: 300, alternative: "Nanda Devi Express", frequency: "Regular", notes: "Overnight train or AC bus service", busType: "Train / Volvo Bus" },
  { id: 2, from: "Rishikesh", to: "Ukhimath", mode: "Shared Taxi / Bus", distance: "190 km", duration: "7-8 hrs", fare: data.transportFares.rishikeshToUkhimath, cheapest: 400, alternative: "UTC Bus", frequency: "Daily 05:00 AM - 07:00 AM", notes: "Via Devprayag, Rudraprayag", busType: "Bolero / Local Bus" },
  { id: 3, from: "Ukhimath", to: "Ransi", mode: "Shared Taxi", distance: "20 km", duration: "1.5 hrs", fare: data.transportFares.ukhimathToRansi, cheapest: 100, alternative: "Local jeep booking", frequency: "Regular", notes: "Hill road connecting trailhead base village", busType: "Bolero / Maxx" },
  { id: 4, from: "Ransi", to: "Madhyamaheshwar", mode: "Trekking", distance: "16 km", duration: "6-8 hrs", fare: 0, cheapest: 0, alternative: "Pony / Mule (₹1200)", frequency: "On demand", notes: "16 km steady steep climb along river gorge", busType: "Walking" },
  { id: 5, from: "Madhyamaheshwar", to: "Budha Madhyamaheshwar", mode: "Trekking", distance: "2 km", duration: "1-1.5 hrs", fare: 0, cheapest: 0, alternative: "Walking only", frequency: "Any time", notes: "Steep grassy ridge hike for mountain vistas", busType: "Walking" },
  { id: 6, from: "Madhyamaheshwar", to: "Ransi", mode: "Trekking", distance: "16 km", duration: "5 hrs", fare: 0, cheapest: 0, alternative: "Pony / Mule (₹1000)", frequency: "On demand", notes: "Downhill descent trail", busType: "Walking" },
  { id: 7, from: "Ransi", to: "Ukhimath", mode: "Shared Taxi", distance: "20 km", duration: "1.5 hrs", fare: data.transportFares.ransiToUkhimath, cheapest: 100, alternative: "Local jeep", frequency: "Morning regular", notes: "Return jeep to transit town", busType: "Jeep" },
  { id: 8, from: "Ukhimath", to: "Rishikesh", mode: "Shared Taxi / Bus", distance: "190 km", duration: "7 hrs", fare: data.transportFares.ukhimathToRishikesh, cheapest: 400, alternative: "UTC Bus", frequency: "Morning 06:00 AM", notes: "Return transit to plains", busType: "Bus / Bolero" },
  { id: 9, from: "Rishikesh", to: "Delhi", mode: "Train / AC Bus", distance: "240 km", duration: "5-6 hrs", fare: data.transportFares.rishikeshToDelhi, cheapest: 300, alternative: "Overnight Bus", frequency: "Regular", notes: "Overnight trip returning to Delhi", busType: "Train / Bus" }
];

export const transportModes = ["All", "Train / AC Bus", "Shared Taxi", "Trekking"];
