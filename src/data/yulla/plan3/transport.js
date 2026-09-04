import { yullaAmounts } from "../amounts";
const data = yullaAmounts.plan3;

export const transport = [
  { id: 1, from: "Delhi", to: "Shimla", mode: "Volvo Bus", distance: "340 km", duration: "9 hrs", fare: data.transportFares.delhiToShimla, cheapest: data.transportFares.delhiToShimla, alternative: "Ordinary Bus (₹400)", frequency: "Hourly", notes: "Overnight luxury AC bus", busType: "Volvo / Scania" },
  { id: 2, from: "Shimla", to: "Tapri", mode: "HRTC Bus", distance: "210 km", duration: "8 hrs", fare: data.transportFares.shimlaToTapri, cheapest: data.transportFares.shimlaToTapri, alternative: "Shared Taxi (₹800)", frequency: "5-6 daily buses", notes: "Ordinary HRTC state transport bus", busType: "HRTC Ordinary" },
  { id: 3, from: "Tapri", to: "Yulla Khas", mode: "Local Jeep", distance: "10 km", duration: "45 mins", fare: data.transportFares.tapriToYullaKhas, cheapest: data.transportFares.tapriToYullaKhas, alternative: "Private Bolero (₹800)", frequency: "Regular intervals", notes: "Shared Bolero running local routes", busType: "Mahindra Bolero" },
  { id: 4, from: "Yulla Khas", to: "Yulla Kanda Lake", mode: "Trekking", distance: "12 km", duration: "6 hrs", fare: 0, cheapest: 0, alternative: "Mule service", frequency: "On demand", notes: "Walk through pine forests & alpine meadows", busType: "Walking" },
  { id: 5, from: "Yulla Kanda Lake", to: "Yulla Khas", mode: "Trekking", distance: "12 km", duration: "4 hrs", fare: 0, cheapest: 0, alternative: "None", frequency: "On demand", notes: "Descent back to the base village", busType: "Walking" },
  { id: 6, from: "Yulla Khas", to: "Tapri", mode: "Local Jeep", distance: "10 km", duration: "45 mins", fare: data.transportFares.yullaKhasToTapri, cheapest: data.transportFares.yullaKhasToTapri, alternative: "Private Bolero", frequency: "Regular intervals", notes: "Shared Bolero back to highway", busType: "Mahindra Bolero" },
  { id: 7, from: "Tapri", to: "Shimla", mode: "HRTC Bus", distance: "210 km", duration: "8 hrs", fare: data.transportFares.tapriToShimla, cheapest: data.transportFares.tapriToShimla, alternative: "Shared Taxi", frequency: "5-6 daily buses", notes: "Return transit via National Highway 5", busType: "HRTC Ordinary" },
  { id: 8, from: "Shimla", to: "Delhi", mode: "Volvo Bus", distance: "340 km", duration: "9 hrs", fare: data.transportFares.shimlaToDelhi, cheapest: data.transportFares.shimlaToDelhi, alternative: "Ordinary Bus", frequency: "Hourly", notes: "Overnight Volvo returning to Delhi directly", busType: "Volvo / Scania" }
];

export const transportModes = ["All", "Volvo Bus", "HRTC Bus", "Local Jeep", "Trekking"];
