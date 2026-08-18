import { kashmirAmounts } from "./amounts";

export const transport = [
  {
    id: 1,
    from: "Delhi NDLS / DLI",
    to: "Jammu Tawi Station",
    mode: "Express Train",
    distance: "580 km",
    duration: "11 hrs",
    fare: kashmirAmounts.transportFares.trainRoundTrip / 2,
    cheapest: 450,
    alternative: "AC Volvo sleeper bus (₹1,200)",
    frequency: "Frequent Evening departures",
    notes: "Jammu Mail or Shalimar Express. Clean sleeper coaches.",
    busType: "Express Train Sleeper"
  },
  {
    id: 2,
    from: "Jammu Tawi",
    to: "Banihal Station",
    mode: "Shared Cab",
    distance: "170 km",
    duration: "6 hrs",
    fare: kashmirAmounts.transportFares.jammuBanihalCab / 2,
    cheapest: 450,
    alternative: "State transport JKSRTC bus",
    frequency: "Continuous runs filled on spot",
    notes: "Cabs are available right outside Jammu railway station exit gate.",
    busType: "Winger / Tavera Shared Cab"
  },
  {
    id: 3,
    from: "Banihal Station",
    to: "Srinagar Station",
    mode: "Local DEMU Train",
    distance: "80 km",
    duration: "1.5 hrs",
    fare: kashmirAmounts.transportFares.valleyDemuTrain,
    cheapest: 45,
    alternative: "Direct cab Banihal to Srinagar (₹300)",
    frequency: "8 times daily",
    notes: "Kashmir railway passes through Pir Panjal railway tunnel. Breathtaking views.",
    busType: "Kashmir Valley Train"
  },
  {
    id: 4,
    from: "Srinagar Boulevard",
    to: "Gulmarg / Pahalgam",
    mode: "Shared Cab",
    distance: "50 - 95 km",
    duration: "2 - 2.5 hrs",
    fare: 600,
    cheapest: 300,
    alternative: "Local tourism bus",
    frequency: "Regular morning runs from Tourist Reception Centre (TRC)",
    notes: "Share with other tourists at the taxi stand to split costs.",
    busType: "Tata Sumo / Tavera"
  }
];

export const transportModes = ["All", "Express Train", "Shared Cab", "Local DEMU Train"];
