import { ladakhAmounts } from "../amounts";
const data = ladakhAmounts.plan3;

export const transport = [
  { id: 1, from: "Delhi", to: "Leh", mode: "Flight", distance: "620 km", duration: "1.5 hrs", fare: 5000, cheapest: 4500, alternative: "HRTC Bus via Manali", frequency: "Daily Flights", notes: "Scenic flight over snowy peaks. Rest completely on arrival day.", busType: "Aviation" },
  { id: 2, from: "Leh Local", to: "Leh", mode: "Rental Bike", distance: "40 km", duration: "2 hrs", fare: 1200, cheapest: 1000, alternative: "Shared Taxi", frequency: "Continuous", notes: "Rent local 350cc Royal Enfield or Himalayan for sightseeing", busType: "Motorcycle" },
  { id: 3, from: "Leh", to: "Nubra Valley", mode: "Rental Bike", distance: "125 km", duration: "5 hrs", fare: 1500, cheapest: 1200, alternative: "Shared Cab", frequency: "Continuous", notes: "Cross Khardung La Pass (5,359 m). Check fuel levels.", busType: "Motorcycle" },
  { id: 4, from: "Nubra", to: "Pangong Tso", mode: "Rental Bike", distance: "165 km", duration: "6 hrs", fare: 1500, cheapest: 1200, alternative: "Shared Cab", frequency: "Continuous", notes: "Ride via the scenic Shyok river route.", busType: "Motorcycle" },
  { id: 5, from: "Pangong Tso", to: "Leh", mode: "Rental Bike", distance: "160 km", duration: "6 hrs", fare: 1500, cheapest: 1200, alternative: "Shared Cab", frequency: "Continuous", notes: "Cross high altitude Chang La Pass (5,360 m) to return to Leh", busType: "Motorcycle" },
  { id: 6, from: "Leh", to: "Delhi", mode: "HRTC Bus", distance: "1000 km", duration: "30 hrs", fare: 1600, cheapest: 1600, alternative: "Flight", frequency: "Alternate Days", notes: "Legendary Leh-Delhi HRTC bus route via Manali. Highly scenic budget option.", busType: "Ordinary / Deluxe" }
];

export const transportModes = ["All", "Flight", "Rental Bike", "HRTC Bus"];
