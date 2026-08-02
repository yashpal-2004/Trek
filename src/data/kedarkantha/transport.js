import { kedarkanthaAmounts } from "./amounts";
const data = kedarkanthaAmounts;

export const transport = [
  { id: 1, from: "Delhi", to: "Dehradun", mode: "Train / AC Bus", distance: "240 km", duration: "5-6 hrs", fare: data.transportFares.delhiToDehradun, cheapest: 300, alternative: "Nanda Devi Express", frequency: "Regular", notes: "Overnight train or AC bus service", busType: "Train / Volvo Bus" },
  { id: 2, from: "Dehradun", to: "Sankri", mode: "Shared Taxi / Bus", distance: "190 km", duration: "7-8 hrs", fare: data.transportFares.dehradunToSankri, cheapest: 350, alternative: "Private Bolero", frequency: "Daily morning", notes: "Shared jeeps leave near Railway Station by 06:00 AM", busType: "Bolero / Local Bus" },
  { id: 3, from: "Sankri", to: "Juda Ka Talab", mode: "Trekking", distance: "4 km", duration: "4-5 hrs", fare: 0, cheapest: 0, alternative: "Pony / Mule (₹800)", frequency: "Continuous", notes: "Pine forest trail climb with snow patches", busType: "Walking" },
  { id: 4, from: "Juda Ka Talab", to: "Kedarkantha Summit", mode: "Trekking", distance: "4 km", duration: "4-5 hrs", fare: 0, cheapest: 0, alternative: "Walking only", frequency: "Continuous", notes: "Summit ridge climb. Highly icy and cold", busType: "Walking" },
  { id: 5, from: "Kedarkantha Summit", to: "Hargaon", mode: "Trekking", distance: "4 km", duration: "3 hrs", fare: 0, cheapest: 0, notes: "Descent to Hargaon camp clearing", busType: "Walking" },
  { id: 6, from: "Hargaon", to: "Sankri", mode: "Trekking", distance: "6 km", duration: "2-3 hrs", fare: 0, cheapest: 0, notes: "Descent back to base Sankri village", busType: "Walking" },
  { id: 7, from: "Sankri", to: "Dehradun", mode: "Shared Taxi", distance: "190 km", duration: "7 hrs", fare: data.transportFares.sankriToDehradun, cheapest: 350, notes: "Shared jeeps from Sankri local stand", busType: "Bolero / Bus" },
  { id: 8, from: "Dehradun", to: "Delhi", mode: "Train / AC Bus", distance: "240 km", duration: "5-6 hrs", fare: data.transportFares.dehradunToDelhi, cheapest: 300, notes: "Overnight return journey", busType: "Train / Bus" }
];

export const transportModes = ["All", "Train / AC Bus", "Shared Taxi", "Trekking"];
