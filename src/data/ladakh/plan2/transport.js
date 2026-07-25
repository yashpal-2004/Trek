import { ladakhAmounts } from "../amounts";
const data = ladakhAmounts.plan2;

export const transport = [
  { id: 1, from: "Hisar", to: "Manali", mode: "Self Scooty", distance: "450 km", duration: "11 hrs", fare: 1000, cheapest: 1000, alternative: "Volvo Bus", frequency: "Continuous", notes: "Ride via Chandigarh & Mandi highway to Manali", busType: "Scooter" },
  { id: 2, from: "Manali", to: "Jispa", mode: "Self Scooty", distance: "140 km", duration: "5 hrs", fare: 500, cheapest: 500, alternative: "HRTC Bus", frequency: "Continuous", notes: "Ride through Atal Tunnel and Lahaul valley", busType: "Scooter" },
  { id: 3, from: "Jispa", to: "Leh", mode: "Self Scooty", distance: "335 km", duration: "10 hrs", fare: 1400, cheapest: 1400, alternative: "HRTC Bus", frequency: "Continuous", notes: "Cross Baralacha La, Nakee La, Lachung La, Gata Loops & Tanglang La", busType: "Scooter" },
  { id: 4, from: "Leh", to: "Nubra Valley", mode: "Self Scooty", distance: "125 km", duration: "5 hrs", fare: 600, cheapest: 600, alternative: "Shared Taxi", frequency: "Continuous", notes: "Cross Khardung La Pass (5,359 m)", busType: "Scooter" },
  { id: 5, from: "Nubra", to: "Pangong Tso", mode: "Self Scooty", distance: "165 km", duration: "6 hrs", fare: 700, cheapest: 700, alternative: "Shared Taxi", frequency: "Continuous", notes: "Off-road ride via Shyok River route", busType: "Scooter" },
  { id: 6, from: "Pangong Tso", to: "Leh", mode: "Self Scooty", distance: "160 km", duration: "6 hrs", fare: 700, cheapest: 700, alternative: "Shared Taxi", frequency: "Continuous", notes: "Cross Chang La Pass (5,360 m)", busType: "Scooter" },
  { id: 7, from: "Leh", to: "Kargil", mode: "Self Scooty", distance: "215 km", duration: "7 hrs", fare: 700, cheapest: 700, alternative: "Shared Sumo", frequency: "Continuous", notes: "Pass Magnetic Hill, Pathar Sahib & Lamayuru Moonland", busType: "Scooter" },
  { id: 8, from: "Kargil", to: "Srinagar", mode: "Self Scooty", distance: "202 km", duration: "8 hrs", fare: 800, cheapest: 800, alternative: "Shared Sumo", frequency: "Continuous", notes: "Cross Drass & Zoji La Pass down to Sonamarg & Srinagar", busType: "Scooter" },
  { id: 9, from: "Srinagar", to: "Hisar", mode: "Self Scooty", distance: "700 km", duration: "16 hrs", fare: 1500, cheapest: 1500, alternative: "Train from Jammu", frequency: "Continuous", notes: "Return ride through NH44 via Jammu & Punjab back to Hisar", busType: "Scooter" },
];

export const transportModes = ["All", "Self Scooty"];
