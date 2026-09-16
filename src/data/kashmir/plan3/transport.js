import { kashmirPlan3Amounts } from "./amounts";

export const transport = [
  {
    id: 1,
    from: "Delhi NDLS / DLI",
    to: "Jammu Tawi Station",
    mode: "General Unreserved Train",
    distance: "580 km",
    duration: "11 hrs",
    fare: kashmirPlan3Amounts.transportFares.generalTrainRoundTrip / 2,
    cheapest: 190,
    alternative: "Sleeper Class (₹450)",
    frequency: "Daily departures (Shalimar Express / Jammu Mail / DLI-JAT Express)",
    notes: "Buy General Unreserved ticket (₹190) directly at platform ticket counters 1 hour before departure. Reach early for seats.",
    busType: "Unreserved General Coach"
  },
  {
    id: 2,
    from: "Jammu Tawi",
    to: "Banihal Station",
    mode: "JKSRTC Ordinary Bus / Shared Winger",
    distance: "170 km",
    duration: "6 hrs",
    fare: kashmirPlan3Amounts.transportFares.jammuBanihalBusCab / 2,
    cheapest: 350,
    alternative: "Private shared cabs (₹500)",
    frequency: "Regular morning runs from Jammu General Bus Stand / Station",
    notes: "State transport buses depart early morning. Most economical transit through Ramban highway.",
    busType: "JKSRTC Non-AC Bus"
  },
  {
    id: 3,
    from: "Banihal Station",
    to: "Srinagar Station",
    mode: "Local DEMU Train",
    distance: "80 km",
    duration: "1.5 hrs",
    fare: kashmirPlan3Amounts.transportFares.valleyDemuTrain / 2,
    cheapest: 50,
    alternative: "Direct cab (₹300)",
    frequency: "8 runs daily",
    notes: "Buy unreserved ticket (₹50) at Banihal counter. Passes through Pir Panjal railway tunnel.",
    busType: "Kashmir Valley DEMU"
  },
  {
    id: 4,
    from: "Srinagar (Local & Day Trips)",
    to: "Gulmarg / Pahalgam",
    mode: "Shared Local Mini-bus / Auto",
    distance: "50 - 95 km",
    duration: "2 hrs",
    fare: 250,
    cheapest: 120,
    alternative: "Shared cabs (₹300)",
    frequency: "Regular morning runs from Parimpora & Batamaloo Bus Stands",
    notes: "Board local mini-buses to Tangmarg / Anantnag for ultra-low transit fares.",
    busType: "Local Shared Mini-bus"
  }
];

export const transportModes = ["All", "General Unreserved Train", "JKSRTC Ordinary Bus / Shared Winger", "Local DEMU Train", "Shared Local Mini-bus / Auto"];
