export const transport = [
  {
    id: 1,
    from: "Delhi (DLI)",
    to: "Varanasi Station (BSB)",
    mode: "Express Train",
    distance: "780 km",
    duration: "11 hrs 55 mins (00:05 - 12:00)",
    fare: 480,
    cheapest: 480,
    alternative: "AC 3-Tier (if Sleeper gets waitlisted)",
    frequency: "Departs 00:05 AM on 21 Sep",
    notes: "15672 Amrit Bharat Exp. Sleeper (SL) currently has AVL 68 seats. Book immediately!",
    busType: "Amrit Bharat Sleeper"
  },
  {
    id: 5,
    from: "Banaras (BNRS)",
    to: "New Delhi (NDLS)",
    mode: "Express Train (Return)",
    distance: "780 km",
    duration: "16 hrs 15 mins (13:30 - 05:45)",
    fare: 440,
    cheapest: 440,
    alternative: "AC 3-Tier (if Sleeper gets waitlisted)",
    frequency: "Departs 13:30 PM on 23 Sep",
    notes: "15127 Kashi V Nath Exp. Sleeper (SL) currently has AVL 70 seats. Book immediately!",
    busType: "Kashi V Nath Sleeper"
  },
  {
    id: 2,
    from: "Varanasi Station",
    to: "Godowlia / Assi Ghat",
    mode: "Auto Rickshaw",
    distance: "5 km",
    duration: "20 mins",
    fare: 150,
    cheapest: 20,
    alternative: "E-Rickshaw (Shared)",
    frequency: "Continuous availability outside station",
    notes: "Shared autos run at ₹20 per seat. Private e-rickshaw is around ₹100-150.",
    busType: "E-Rickshaw / Auto"
  },
  {
    id: 3,
    from: "Assi Ghat",
    to: "Dashashwamedh Ghat",
    mode: "Walking / Boat",
    distance: "2 km",
    duration: "30 mins",
    fare: 100,
    cheapest: 0,
    alternative: "Walking via Ghats",
    frequency: "Anytime",
    notes: "Best explored by walking the continuous ghat steps. Boat ride for Aarti starts at ₹100/seat.",
    busType: "Shared Motorboat"
  },
  {
    id: 4,
    from: "Varanasi City",
    to: "Sarnath",
    mode: "Auto Rickshaw",
    distance: "12 km",
    duration: "40 mins",
    fare: 250,
    cheapest: 50,
    alternative: "Shared Auto",
    frequency: "Regular",
    notes: "Bargain well or book via Ola/Uber for transparency.",
    busType: "Auto Rickshaw"
  }
];

export const transportModes = ["All", "Express Train", "Auto Rickshaw", "Walking / Boat"];
