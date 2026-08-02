import { madhyamaheshwarAmounts } from "../amounts";
const data = madhyamaheshwarAmounts.plan2;

export const transport = [
  { id: 1, from: "Delhi", to: "Rishikesh", mode: "Train / AC Bus", distance: "240 km", duration: "5-6 hrs", fare: data.transportFares.delhiToRishikesh, cheapest: 300, alternative: "Nanda Devi Express", frequency: "Regular", notes: "Overnight train or AC bus service", busType: "Train / Volvo Bus" },
  { id: 2, from: "Rishikesh", to: "Gaurikund", mode: "Shared Taxi / Bus", distance: "210 km", duration: "8-9 hrs", fare: data.transportFares.rishikeshToGaurikund, cheapest: 500, alternative: "UTC Bus", frequency: "Daily morning", notes: "Long mountain drive via Srinagar & Sonprayag", busType: "Bolero / Bus" },
  { id: 3, from: "Gaurikund", to: "Kedarnath", mode: "Trekking", distance: "16 km", duration: "7-9 hrs", fare: 0, cheapest: 0, alternative: "Pony / Mule (₹2500) or Helicopter (₹4000)", frequency: "Continuous", notes: "Paved uphill path, very crowded during peak season", busType: "Walking" },
  { id: 4, from: "Kedarnath", to: "Gaurikund", mode: "Trekking", distance: "16 km", duration: "5-6 hrs", fare: 0, cheapest: 0, alternative: "Pony / Mule (₹1500)", frequency: "Continuous", notes: "Descent back to base trailhead", busType: "Walking" },
  { id: 5, from: "Gaurikund", to: "Ukhimath", mode: "Shared Taxi", distance: "35 km", duration: "2 hrs", fare: data.transportFares.gaurikundToUkhimath, cheapest: 200, alternative: "Local jeeps", frequency: "Regular", notes: "Transit to Ukhimath town", busType: "Jeep" },
  { id: 6, from: "Ukhimath", to: "Ransi", mode: "Shared Jeep", distance: "20 km", duration: "1.5 hrs", fare: data.transportFares.ukhimathToRansi, cheapest: 100, alternative: "Local taxi", frequency: "Regular", notes: "Transit to second trailhead", busType: "Jeep" },
  { id: 7, from: "Ransi", to: "Madhyamaheshwar", mode: "Trekking", distance: "16 km", duration: "6-8 hrs", fare: 0, cheapest: 0, alternative: "Pony / Mule (₹1200)", frequency: "On demand", notes: "Uphill trek through Bantoli", busType: "Walking" },
  { id: 8, from: "Madhyamaheshwar", to: "Budha Madhyamaheshwar", mode: "Trekking", distance: "2 km", duration: "1 hr", fare: 0, cheapest: 0, alternative: "Walking only", frequency: "Flexible", notes: "Grassy ridge climb for Chaukhamba sunrise", busType: "Walking" },
  { id: 9, from: "Madhyamaheshwar", to: "Ransi", mode: "Trekking", distance: "16 km", duration: "5 hrs", fare: 0, cheapest: 0, alternative: "Pony / Mule (₹1000)", frequency: "On demand", notes: "Downhill descent to base Ransi", busType: "Walking" },
  { id: 10, from: "Ransi", to: "Rishikesh", mode: "Shared Taxi / Bus", distance: "210 km", duration: "7-8 hrs", fare: data.transportFares.ukhimathToRishikesh, cheapest: 400, notes: "Return transit to plains", busType: "Bus / Bolero" },
  { id: 11, from: "Rishikesh", to: "Delhi", mode: "Train / AC Bus", distance: "240 km", duration: "5-6 hrs", fare: data.transportFares.rishikeshToDelhi, cheapest: 300, notes: "Overnight return journey to Delhi", busType: "Train / Bus" }
];

export const transportModes = ["All", "Train / AC Bus", "Shared Taxi", "Trekking"];
