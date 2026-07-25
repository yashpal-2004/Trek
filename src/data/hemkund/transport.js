import { hemkundAmounts } from "./amounts";
const data = hemkundAmounts;

export const transport = [
  { id: 1, from: "Delhi", to: "Haridwar", mode: "Train / AC Bus", distance: "230 km", duration: "5 hrs", fare: data.transportFares.delhiToHaridwar, cheapest: 300, alternative: "Jan Shatabdi Express", frequency: "Regular", notes: "Morning train or AC Volvo", busType: "Train / Scania" },
  { id: 2, from: "Haridwar", to: "Govindghat", mode: "Shared Taxi", distance: "275 km", duration: "9 hrs", fare: data.transportFares.haridwarToGovindghat, cheapest: 500, alternative: "HRTC / UTC Bus", frequency: "Daily 04:30 AM - 06:00 AM", notes: "Via Rishikesh, Devprayag, Karnaprayag & Joshimath", busType: "Bolero / Bus" },
  { id: 3, from: "Govindghat", to: "Pulna", mode: "Shared Taxi", distance: "4 km", duration: "15 mins", fare: data.transportFares.sharedJeepPulna, cheapest: 50, alternative: "Walking", frequency: "Continuous", notes: "Motorable road extension reducing trek distance", busType: "Bolero / Maxx" },
  { id: 4, from: "Pulna", to: "Ghangaria", mode: "Trekking", distance: "10 km", duration: "5 hrs", fare: 0, cheapest: 0, alternative: "Mule / Pony (₹1000) or Helicopter (₹3000)", frequency: "On demand", notes: "Paved trail along Bhyundar Ganga river", busType: "Walking" },
  { id: 5, from: "Ghangaria", to: "Valley of Flowers", mode: "Trekking", distance: "5 km (one way)", duration: "3 hrs", fare: 0, cheapest: 0, alternative: "Walking only", frequency: "07:00 AM - 12:00 PM entry", notes: "Forest permit ₹200 at entry gate", busType: "Walking" },
  { id: 6, from: "Ghangaria", to: "Shree Hemkund Sahib", mode: "Trekking", distance: "6 km (one way)", duration: "4 hrs", fare: 0, cheapest: 0, alternative: "Mule (₹1200)", frequency: "05:00 AM start recommended", notes: "Steep ascent over stone steps to lake (4632 m)", busType: "Walking" },
  { id: 7, from: "Ghangaria", to: "Govindghat", mode: "Trekking + Taxi", distance: "14 km", duration: "5 hrs", fare: data.transportFares.sharedJeepPulna, cheapest: 50, alternative: "Walking all way", frequency: "Regular", notes: "Trek down to Pulna, jeep to Govindghat", busType: "Walking / Jeep" },
  { id: 8, from: "Govindghat", to: "Haridwar", mode: "Shared Taxi / Bus", distance: "275 km", duration: "9 hrs", fare: data.transportFares.govindghatToHaridwar, cheapest: 500, alternative: "UTC Bus", frequency: "Morning 06:00 AM", notes: "Scenic drive back to Haridwar", busType: "Bolero / Bus" },
  { id: 9, from: "Haridwar", to: "Delhi", mode: "Train / AC Bus", distance: "230 km", duration: "5 hrs", fare: data.transportFares.haridwarToDelhi, cheapest: 300, alternative: "Overnight Bus", frequency: "Regular", notes: "Return journey to Delhi", busType: "Train / Bus" },
];

export const transportModes = ["All", "Train / AC Bus", "Shared Taxi", "Trekking"];
