import { birBillingAmounts } from "./amounts";
const data = birBillingAmounts;

export const transport = [
  { id: 1, from: "Sonipat", to: "Dharamshala", mode: "Volvo Bus", distance: "475 km", duration: "10 hrs", fare: data.transportFares.delhiToBir, cheapest: 900, alternative: "Local HRTC Bus", frequency: "Daily evening", notes: "Overnight semi-sleeper coach departs from Sonipat bypass straight to Dharamshala", busType: "Volvo / HRTC" },
  { id: 2, from: "Dharamshala", to: "Bir Colony", mode: "Rented Scooty", distance: "65 km", duration: "2 hrs", fare: data.transportFares.scootyRental + data.transportFares.scootyFuel, cheapest: 500, alternative: "Local Bus (₹120)", frequency: "Continuous ride", notes: "Rent 2 scooties from Dharamshala and ride via NH154A/NH154", busType: "Rented Scooter" },
  { id: 3, from: "Bir Colony", to: "Billing Ridge", mode: "Rented Scooty", distance: "14 km", duration: "45 min", fare: 0, cheapest: 0, notes: "Hairpin road climbing up to paragliding takeoff spot", busType: "Rented Scooter" },
  { id: 4, from: "Dharamshala", to: "Sonipat", mode: "Volvo Bus", distance: "475 km", duration: "10 hrs", fare: data.transportFares.birToDelhi, cheapest: 900, notes: "Board overnight return coach near Dharamshala stand, drop at Sonipat bypass", busType: "Volvo / HRTC" }
];

export const transportModes = ["All", "Volvo Bus", "Rented Scooty"];
