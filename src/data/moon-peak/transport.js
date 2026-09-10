export const transport = [
  {
    id: 1,
    from: "Old Delhi Railway Station",
    to: "Pathankot Junction (PTK)",
    mode: "Train",
    distance: "480 km",
    duration: "8 hrs",
    fare: 180,
    cheapest: 180,
    alternative: "General Class (UR) Unreserved Ticket",
    frequency: "Daily Express (Dhauladhar / Jammu Mail)",
    notes: "Board unreserved general coach from Old Delhi station. Ticket available at counter (₹180). Arrives Pathankot morning.",
    busType: "Unreserved Express Train"
  },
  {
    id: 2,
    from: "Pathankot Bus Stand",
    to: "Dharamshala Bus Stand",
    mode: "Bus",
    distance: "90 km",
    duration: "2.5 hrs",
    fare: 150,
    cheapest: 150,
    alternative: "Local HRTC Bus",
    frequency: "Continuous departures every 30 mins",
    notes: "HRTC ordinary state transport bus from Pathankot bus stand straight to Dharamshala.",
    busType: "HRTC State Bus"
  },
  {
    id: 3,
    from: "Dharamshala Bus Stand",
    to: "Dharamkot / Gallu Temple",
    mode: "Auto",
    distance: "10 km",
    duration: "30 mins",
    fare: 70,
    cheapest: 70,
    alternative: "Shared Taxi / City Mini Bus",
    frequency: "Every 15 mins",
    notes: "Shared local auto/cab from Dharamshala/McLeod Ganj uphill to Dharamkot trek starting point.",
    busType: "Shared Auto / Cab"
  },
  {
    id: 4,
    from: "Dharamkot Trailhead",
    to: "Moon Peak Summit (via Triund & Laka)",
    mode: "Trek",
    distance: "18 km (One Way)",
    duration: "2 Days Climb",
    fare: 0,
    cheapest: 0,
    alternative: "Alpine Trail Walk",
    frequency: "Daily",
    notes: "High altitude alpine trek through Triund, Laka Glacier base camp, and Lahesh Cave up to 15,250 ft summit.",
    busType: "On Foot"
  }
];

export const transportModes = ["All", "Train", "Bus", "Auto", "Trek"];
