import { yullaAmounts } from "../amounts";
const data = yullaAmounts.plan2;

// Scooty costs derived from amounts: each riding leg = half of total rental + half of total fuel
const scootyLegFare = Math.round((data.transportFares.scootyRent / 2) + (data.transportFares.scootyFuel / 2));
// Local sightseeing day: remaining rental day cost (4-day rental covers 2 riding legs + 1 sightseeing day = ~1 day equiv)
const scootyLocalFare = Math.round(data.transportFares.scootyRent / 4);

export const transport = [
  { id: 1, from: "Delhi", to: "Shimla", mode: "Volvo Bus", distance: "340 km", duration: "9 hrs", fare: data.transportFares.delhiToShimla, cheapest: data.transportFares.delhiToShimla, alternative: "Ordinary Bus (₹400)", frequency: "Hourly", notes: "Overnight luxury AC bus", busType: "Volvo / Scania" },
  { id: 2, from: "Shimla", to: "Yulla Khas", mode: "Scooty", distance: "210 km", duration: "8 hrs", fare: scootyLegFare, cheapest: scootyLegFare, alternative: "HRTC Bus (₹400)", frequency: "Rental Ride", notes: `Riding scooty via NH5. Rent: ₹500/day + Fuel (per person)`, busType: "Scooter" },
  { id: 3, from: "Yulla Khas", to: "Yulla Kanda Lake", mode: "Trekking", distance: "12 km", duration: "6 hrs", fare: 0, cheapest: 0, alternative: "Mule service", frequency: "On demand", notes: "Walk through pine forests & alpine meadows", busType: "Walking" },
  { id: 4, from: "Yulla Kanda Lake", to: "Yulla Khas", mode: "Trekking", distance: "12 km", duration: "4 hrs", fare: 0, cheapest: 0, alternative: "None", frequency: "On demand", notes: "Descent back to the base village", busType: "Walking" },
  { id: 5, from: "Yulla Khas", to: "Shimla", mode: "Scooty", distance: "210 km", duration: "8 hrs", fare: scootyLegFare, cheapest: scootyLegFare, alternative: "HRTC Bus", frequency: "Rental Ride", notes: `Return ride down to Shimla. Rent: ₹500/day + Fuel (per person)`, busType: "Scooter" },
  { id: 6, from: "Shimla", to: "Local Sightseeing", mode: "Scooty", distance: "40 km", duration: "2 days", fare: scootyLocalFare, cheapest: scootyLocalFare, alternative: "Local Taxi", frequency: "Rental", notes: "Explore Shimla Mall Road & viewpoints", busType: "Scooter" },
  { id: 7, from: "Shimla", to: "Delhi", mode: "Volvo Bus", distance: "340 km", duration: "9 hrs", fare: data.transportFares.shimlaToDelhi, cheapest: data.transportFares.shimlaToDelhi, alternative: "Ordinary Bus", frequency: "Hourly", notes: "Overnight Volvo returning to Delhi", busType: "Volvo / Scania" },
];

export const transportModes = ["All", "Volvo Bus", "Scooty", "Trekking"];
