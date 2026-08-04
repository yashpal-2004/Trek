import { jibhiAmounts } from "./amounts";
const data = jibhiAmounts;

export const transport = [
  { id: 1, from: "Sonipat", to: "Aut Tunnel", mode: "Volvo Bus", distance: "420 km", duration: "10 hrs", fare: data.transportFares.sonipatToAut, cheapest: 900, alternative: "HRTC Ordinary Bus", frequency: "Daily evening", notes: "Overnight semi-sleeper coach departs from Sonipat bypass / Murthal stops", busType: "Volvo AC coach" },
  { id: 2, from: "Aut Tunnel", to: "Jibhi Valley", mode: "Local Bus", distance: "30 km", duration: "1 hr 15 mins", fare: data.transportFares.autToJibhiBus, cheapest: 50, alternative: "Shared Bolero (₹100)", frequency: "Frequent day buses", notes: "Budget local HRTC bus going up to Jibhi", busType: "Ordinary HRTC bus" },
  { id: 3, from: "Jibhi", to: "Jalori Pass", mode: "Scooter Ride", distance: "12 km", duration: "45 mins", fare: data.transportFares.scootyRental, cheapest: 500, alternative: "Local Bus (₹40)", frequency: "On demand rental", notes: "Solo scooter rental (₹500 per day rental fee)", busType: "Scooter" },
  { id: 4, from: "Aut Tunnel", to: "Sonipat", mode: "Volvo Bus", distance: "420 km", duration: "10 hrs", fare: data.transportFares.jibhiToAutBus, cheapest: 900, notes: "Board overnight return coach at Aut stand, drop at Sonipat bypass", busType: "Volvo AC coach" }
];

export const transportModes = ["All", "Volvo Bus", "Local Bus", "Scooter Ride"];
