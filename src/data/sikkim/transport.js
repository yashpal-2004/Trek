import { sikkimAmounts } from "./amounts";
const data = sikkimAmounts;

export const transport = [
  { id: 1, from: "Delhi", to: "NJP", mode: "Train", distance: "1150 km", duration: "20 hrs", fare: data.transportFares.delhiToNjp, cheapest: data.transportFares.delhiToNjp, alternative: "Third AC (3A)", frequency: "Daily", notes: "Sleeper Train ticket", busType: "Indian Railways" },
  { id: 2, from: "NJP", to: "Gangtok", mode: "Shared Sumo", distance: "120 km", duration: "4.5 hrs", fare: data.transportFares.njpToGangtok, cheapest: data.transportFares.njpToGangtok, alternative: "Private Taxi (₹3500)", frequency: "Hourly", notes: "Shared Bolero/Sumo from NJP stand", busType: "Mahindra Sumo" },
  { id: 3, from: "Gangtok", to: "Lachen", mode: "Shared Sumo", distance: "110 km", duration: "6 hrs", fare: data.transportFares.gangtokToLachen, cheapest: data.transportFares.gangtokToLachen, alternative: "None", frequency: "Package Tour", notes: "Part of 2N/3D North Sikkim package", busType: "Tata Sumo / Mahindra Maxx" },
  { id: 4, from: "Lachen", to: "Gurudongmar", mode: "Shared Sumo", distance: "70 km", duration: "4 hrs", fare: 0, cheapest: 0, alternative: "None", frequency: "Package Tour", notes: "Early morning excursion in tour Sumo", busType: "Tata Sumo" },
  { id: 5, from: "Lachen", to: "Lachung", mode: "Shared Sumo", distance: "120 km", duration: "4 hrs", fare: data.transportFares.lachenToLachung || 0, cheapest: data.transportFares.lachenToLachung || 0, alternative: "None", frequency: "Package Tour", notes: "Transfer between Lachen and Lachung homestays", busType: "Tata Sumo" },
  { id: 6, from: "Lachung", to: "Yumthang", mode: "Shared Sumo", distance: "25 km", duration: "1.5 hrs", fare: 0, cheapest: 0, alternative: "None", frequency: "Package Tour", notes: "Excursion to Yumthang valley", busType: "Tata Sumo" },
  { id: 7, from: "Lachung", to: "Gangtok", mode: "Shared Sumo", distance: "125 km", duration: "6.5 hrs", fare: data.transportFares.lachungToGangtok || 0, cheapest: data.transportFares.lachungToGangtok || 0, alternative: "None", frequency: "Package Tour", notes: "Return transfer to Gangtok hotel", busType: "Tata Sumo" },
  { id: 8, from: "Gangtok", to: "NJP", mode: "Shared Sumo", distance: "120 km", duration: "4.5 hrs", fare: data.transportFares.gangtokToNjp, cheapest: data.transportFares.gangtokToNjp, alternative: "Private Taxi", frequency: "Hourly", notes: "Shared Sumo from Gangtok stand", busType: "Mahindra Sumo" },
  { id: 9, from: "NJP", to: "Delhi", mode: "Train", distance: "1150 km", duration: "20 hrs", fare: data.transportFares.njpToDelhi, cheapest: data.transportFares.njpToDelhi, alternative: "Third AC", frequency: "Daily", notes: "Sleeper Class ticket", busType: "Indian Railways" },
];

export const transportModes = ["All", "Train", "Shared Sumo"];
