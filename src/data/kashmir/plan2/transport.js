import { kashmirPlan2Amounts } from "./amounts";

export const transport = [
  {
    id: 1,
    from: "Delhi NDLS / DLI",
    to: "Jammu Tawi Station",
    mode: "Express Train",
    distance: "580 km",
    duration: "11 hrs",
    fare: kashmirPlan2Amounts.transportFares.trainRoundTrip / 2,
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
    fare: kashmirPlan2Amounts.transportFares.jammuBanihalCab / 2,
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
    fare: kashmirPlan2Amounts.transportFares.valleyDemuTrain,
    cheapest: 45,
    alternative: "Direct cab Banihal to Srinagar (₹300)",
    frequency: "8 times daily",
    notes: "Kashmir railway passes through Pir Panjal railway tunnel. Breathtaking views.",
    busType: "Kashmir Valley Train"
  },
  {
    id: 4,
    from: "Srinagar (Bike Rental Shop)",
    to: "Day-trips (Gulmarg & Pahalgam)",
    mode: "Rented RE Himalayan",
    distance: "350 km total circuit",
    duration: "3 Days Rental",
    fare: kashmirPlan2Amounts.transportFares.bikeRentalPerPerson,
    cheapest: 750,
    alternative: "110cc Scooty / Activa (₹600/day total)",
    frequency: "Daily pick-up from Srinagar Boulevard",
    notes: "Requires valid driving license. Security deposit of ₹5,000 to be submitted at shop. Split between 2 persons.",
    busType: "Motorcycle"
  },
  {
    id: 5,
    from: "Fuel Station (Srinagar/Pahalgam)",
    to: "Refueling",
    mode: "Fuel",
    distance: "350 km",
    duration: "Entire Trip",
    fare: kashmirPlan2Amounts.transportFares.bikeFuelPerPerson,
    cheapest: 600,
    alternative: "None",
    frequency: "Throughout the trip",
    notes: "Tank up in Srinagar before heading to Gulmarg/Pahalgam.",
    busType: "Fuel"
  }
];

export const transportModes = ["All", "Express Train", "Shared Cab", "Local DEMU Train", "Rented RE Himalayan"];
