import { auliAmounts } from "./amounts";

export const transport = [
  {
    id: 1,
    from: "Sonipat Bypass",
    to: "Rishikesh ISBT",
    mode: "Ordinary Bus",
    distance: "210 km",
    duration: "6 hrs",
    fare: auliAmounts.transportFares.ordinaryBusRoundTrip / 2,
    cheapest: 350,
    alternative: "AC Volvo Bus / Express Train",
    frequency: "Frequent daily runs",
    notes: "Interstate ordinary/regular public buses. Cheap and direct.",
    busType: "Ordinary Roadways Seater"
  },
  {
    id: 2,
    from: "Rishikesh ISBT",
    to: "Joshimath Base",
    mode: "GMOU Local Bus",
    distance: "260 km",
    duration: "11 hrs",
    fare: auliAmounts.transportFares.localBusRoundTrip / 2,
    cheapest: 450,
    alternative: "Shared Cab / Private Taxi",
    frequency: "Daily Morning (05:00 AM to 07:00 AM departures)",
    notes: "State-run ordinary mountain buses leaving early from Rishikesh bus stand.",
    busType: "Ordinary Mountain Bus"
  },
  {
    id: 3,
    from: "Joshimath Station",
    to: "Auli Slopes",
    mode: "Cable Car (Ropeway)",
    distance: "4.4 km",
    duration: "22 mins",
    fare: auliAmounts.transportFares.ropewayRoundTrip,
    cheapest: 1000,
    alternative: "Local Joshimath taxi (₹400 one-way)",
    frequency: "Every 20 Mins (08:30 AM to 04:30 PM)",
    notes: "Joshimath ropeway is one of Asia's longest. Double sharing seats in cabin.",
    busType: "Cable Car"
  },
  {
    id: 4,
    from: "Joshimath Base",
    to: "Rishikesh ISBT",
    mode: "GMOU Local Bus",
    distance: "260 km",
    duration: "11 hrs",
    fare: auliAmounts.transportFares.localBusRoundTrip / 2,
    cheapest: 450,
    alternative: "Shared Cab",
    frequency: "Daily Morning (05:30 AM)",
    notes: "Depart Joshimath early morning on mountain bus to catch ordinary bus from Rishikesh.",
    busType: "Ordinary Mountain Bus"
  }
];

export const transportModes = ["All", "Ordinary Bus", "GMOU Local Bus", "Cable Car (Ropeway)"];
