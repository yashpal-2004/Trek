import { ladakhAmounts } from "../amounts";
const data = ladakhAmounts.plan1;

export const transport = [
  { id: 1, from: "Hisar", to: "Patnitop", mode: "Self Scooty", distance: "560 km", duration: "13 hrs", fare: 1200, cheapest: 1200, alternative: "Train to Jammu", frequency: "Continuous", notes: "Ride via NH44 through Punjab & Jammu plains", busType: "Scooter" },
  { id: 2, from: "Patnitop", to: "Srinagar", mode: "Self Scooty", distance: "140 km", duration: "5 hrs", fare: 400, cheapest: 400, alternative: "Shared Taxi", frequency: "Continuous", notes: "Pass through Chenani-Nashri Tunnel & Jawahar Tunnel", busType: "Scooter" },
  { id: 3, from: "Srinagar", to: "Kargil", mode: "Self Scooty", distance: "202 km", duration: "8 hrs", fare: 800, cheapest: 800, alternative: "Shared Sumo", frequency: "Continuous", notes: "Cross Zoji La Pass (3,528 m) & Drass Valley", busType: "Scooter" },
  { id: 4, from: "Kargil", to: "Leh", mode: "Self Scooty", distance: "215 km", duration: "7 hrs", fare: 700, cheapest: 700, alternative: "Shared Sumo", frequency: "Continuous", notes: "Pass Lamayuru Moonland, Fotu La & Magnetic Hill", busType: "Scooter" },
  { id: 5, from: "Leh", to: "Nubra Valley", mode: "Self Scooty", distance: "125 km", duration: "5 hrs", fare: 600, cheapest: 600, alternative: "Shared Taxi", frequency: "Continuous", notes: "Cross Khardung La Pass (5,359 m)", busType: "Scooter" },
  { id: 6, from: "Nubra", to: "Pangong Tso", mode: "Self Scooty", distance: "165 km", duration: "6 hrs", fare: 700, cheapest: 700, alternative: "Shared Taxi", frequency: "Continuous", notes: "Off-road ride via Shyok River route", busType: "Scooter" },
  { id: 7, from: "Pangong Tso", to: "Leh", mode: "Self Scooty", distance: "160 km", duration: "6 hrs", fare: 700, cheapest: 700, alternative: "Shared Taxi", frequency: "Continuous", notes: "Cross Chang La Pass (5,360 m)", busType: "Scooter" },
  { id: 8, from: "Leh", to: "Jispa", mode: "Self Scooty", distance: "335 km", duration: "10 hrs", fare: 1200, cheapest: 1200, alternative: "HRTC Bus", frequency: "Continuous", notes: "High pass highway via Tanglang La, More Plains, Sarchu & Baralacha La", busType: "Scooter" },
  { id: 9, from: "Jispa", to: "Manali", mode: "Self Scooty", distance: "95 km", duration: "3 hrs", fare: 400, cheapest: 400, alternative: "HRTC Bus", frequency: "Continuous", notes: "Ride through Atal Tunnel (9 km)", busType: "Scooter" },
  { id: 10, from: "Manali", to: "Hisar", mode: "Self Scooty", distance: "450 km", duration: "11 hrs", fare: 1000, cheapest: 1000, alternative: "Volvo Bus", frequency: "Continuous", notes: "Return ride through Kiratpur-Manali highway to Hisar", busType: "Scooter" },
];

export const transportModes = ["All", "Self Scooty"];
