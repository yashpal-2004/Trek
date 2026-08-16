import { ladakhAmounts } from "../amounts";
const data = ladakhAmounts.plan4;

export const transport = [
  { id: 1, from: "Delhi", to: "Keylong", mode: "HRTC Bus", distance: "620 km", duration: "16 hrs", fare: 1600, cheapest: 1600, alternative: "Shared Cab", frequency: "Daily", notes: "Board early afternoon bus via Atal Tunnel", busType: "Ordinary / Deluxe" },
  { id: 2, from: "Keylong", to: "Leh", mode: "HRTC Bus", distance: "335 km", duration: "12 hrs", fare: 1600, cheapest: 1600, alternative: "Shared Cab", frequency: "Daily", notes: "Cross Baralacha La and Tanglang La passes", busType: "Ordinary / Deluxe" },
  { id: 3, from: "Leh Local", to: "Leh", mode: "Rental Bike", distance: "40 km", duration: "2 hrs", fare: 1200, cheapest: 1000, alternative: "Shared Taxi", frequency: "Continuous", notes: "Test ride rented Royal Enfield or Himalayan", busType: "Motorcycle" },
  { id: 4, from: "Leh", to: "Nubra Valley", mode: "Rental Bike", distance: "125 km", duration: "5 hrs", fare: 1500, cheapest: 1200, alternative: "Shared Cab", frequency: "Continuous", notes: "Cross Khardung La Pass (5,359 m)", busType: "Motorcycle" },
  { id: 5, from: "Nubra", to: "Pangong Tso", mode: "Rental Bike", distance: "165 km", duration: "6 hrs", fare: 1500, cheapest: 1200, alternative: "Shared Cab", frequency: "Continuous", notes: "Ride via the scenic Shyok river route", busType: "Motorcycle" },
  { id: 6, from: "Pangong Tso", to: "Leh", mode: "Rental Bike", distance: "160 km", duration: "6 hrs", fare: 1500, cheapest: 1200, alternative: "Shared Cab", frequency: "Continuous", notes: "Cross Chang La Pass (5,360 m) to return to Leh", busType: "Motorcycle" },
  { id: 7, from: "Leh", to: "Keylong", mode: "HRTC Bus", distance: "335 km", duration: "12 hrs", fare: 1600, cheapest: 1600, alternative: "Shared Cab", frequency: "Daily", notes: "Board early morning return bus clearances", busType: "Ordinary / Deluxe" },
  { id: 8, from: "Keylong", to: "Delhi", mode: "HRTC Bus", distance: "620 km", duration: "16 hrs", fare: 1600, cheapest: 1600, alternative: "Volvo Bus", frequency: "Daily", notes: "Complete the highway journey via Atal Tunnel and return", busType: "Ordinary / Deluxe" }
];

export const transportModes = ["All", "HRTC Bus", "Rental Bike"];
