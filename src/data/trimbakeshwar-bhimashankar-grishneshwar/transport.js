import { maharashtraAmounts } from "./amounts";

export const transport = [
  {
    id: 1,
    from: "Hazrat Nizamuddin / New Delhi",
    to: "Nashik Road Railway Station",
    mode: "Express Train (Sleeper)",
    distance: "1,350 km",
    duration: "18 hrs",
    fare: maharashtraAmounts.transportFares.delhiToNashikTrain,
    cheapest: 650,
    alternative: "3AC Express Train (₹1,650)",
    frequency: "Daily Trains (Mangala Lakshadweep / Punjab Mail)",
    notes: "Direct train from Delhi to Nashik Road. Book 3-4 weeks in advance.",
    busType: "Sleeper Train"
  },
  {
    id: 2,
    from: "Nashik Road Station",
    to: "Trimbakeshwar Temple",
    mode: "Shared Taxi / Auto",
    distance: "35 km",
    duration: "1 hr",
    fare: maharashtraAmounts.transportFares.nashikToTrimbakTaxi,
    cheapest: 50,
    alternative: "MSRTC Local Bus (₹35)",
    frequency: "Continuous shared transit from station gate",
    notes: "Shared cabs and autos run frequently from Nashik Station to Trimbak.",
    busType: "Shared Auto"
  },
  {
    id: 3,
    from: "Nashik CBS",
    to: "Grishneshwar (Ellora / Sambhaji Nagar)",
    mode: "Intercity MSRTC Bus",
    distance: "210 km",
    duration: "4.5 hrs",
    fare: maharashtraAmounts.transportFares.nashikToAurangabadBus,
    cheapest: 220,
    alternative: "Express Train to Chhatrapati Sambhaji Nagar",
    frequency: "Hourly buses",
    notes: "State bus to Verul / Ellora junction, 1 km walk/auto to Grishneshwar Jyotirlinga.",
    busType: "Intercity Bus"
  },
  {
    id: 4,
    from: "Sambhaji Nagar / Manchhar",
    to: "Bhimashankar Sanctuary",
    mode: "Ghat Mini Bus",
    distance: "180 km",
    duration: "4 hrs",
    fare: maharashtraAmounts.transportFares.puneToBhimashankarBus,
    cheapest: 180,
    alternative: "Shared Cab from Rajgurunagar / Manchhar",
    frequency: "Buses every 45 mins",
    notes: "Winding ghat route up to Bhimashankar temple bus bay inside wildlife sanctuary.",
    busType: "Ghat Bus"
  },
  {
    id: 5,
    from: "Bhimashankar / Pune Station",
    to: "Delhi / Hazrat Nizamuddin Return",
    mode: "Express Train (Sleeper)",
    distance: "1,550 km",
    duration: "22 hrs",
    fare: maharashtraAmounts.transportFares.puneToDelhiTrain,
    cheapest: 750,
    alternative: "Jhelum Express / Goa Express 3AC",
    frequency: "Daily evening return trains from Pune Station",
    notes: "Direct express train from Pune Station back to New Delhi / Nizamuddin.",
    busType: "Sleeper Train"
  }
];

export const transportModes = ["All", "Express Train (Sleeper)", "Shared Taxi / Auto", "Intercity MSRTC Bus", "Ghat Mini Bus"];
