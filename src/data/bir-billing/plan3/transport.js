import { birBillingAmounts } from "./amounts";
const data = birBillingAmounts;

export const transport = [
  { id: 1, from: "Sonipat", to: "Bir Colony", mode: "Volvo Bus", distance: "450 km", duration: "10-12 hrs", fare: data.transportFares.delhiToBir, cheapest: 750, alternative: "Local HRTC Bus", frequency: "Daily evening", notes: "Overnight semi-sleeper coach departs from Sonipat bypass / Murthal", busType: "Volvo / Scania" },
  { id: 2, from: "Bir Colony", to: "Billing Take-off", mode: "Shared Taxi / Trekking", distance: "7 km / 14 km", duration: "4 hrs Trek / 35 min Drive", fare: data.transportFares.birToBillingCab, cheapest: 100, alternative: "Shared Bolero", frequency: "On demand", notes: "Hiking trail goes straight through pine forest slope", busType: "Trekking or Cab" },
  { id: 3, from: "Billing Take-off", to: "Bir Landing Site", mode: "Paragliding (Flying)", distance: "14 km Air", duration: "20-30 min", fare: 0, cheapest: 0, alternative: "Return Cab (₹400)", frequency: "Continuous during day", notes: "Tandem flying back down to Colony landing field", busType: "Glider flight" },
  { id: 4, from: "Bir Colony", to: "Sonipat", mode: "Volvo Bus", distance: "450 km", duration: "11 hrs", fare: data.transportFares.birToDelhi, cheapest: 750, notes: "Board overnight return coach near Colony stand, drop at Sonipat bypass", busType: "Volvo Bus" }
];

export const transportModes = ["All", "Volvo Bus", "Shared Taxi", "Paragliding (Flying)"];
