export const transport = [
  {
    id: 1,
    from: "Delhi (NDLS / DLI)",
    to: "Varanasi Station (BSB)",
    mode: "Express Train",
    distance: "780 km",
    duration: "11 hrs 55 mins (00:05 - 12:00)",
    fare: 480,
    cheapest: 480,
    alternative: "AC 3-Tier (if Sleeper gets waitlisted)",
    frequency: "Departs 00:05 AM (21 Sep)",
    notes: "15672 Amrit Bharat Exp. Sleeper (SL) has AVL 68 seats. High speed & comfortable overnight travel.",
    busType: "Amrit Bharat Express"
  },
  {
    id: 2,
    from: "Varanasi Station (BSB)",
    to: "Ramaya Homestay (Visheshwarganj)",
    mode: "Auto / E-Rickshaw",
    distance: "4.5 km",
    duration: "18 mins",
    fare: 120,
    cheapest: 25,
    alternative: "Shared E-Rickshaw",
    frequency: "Continuous outside BSB Station",
    notes: "Direct drop near Kal Bhairav Temple / Visheshwarganj post office. Shared e-rickshaws cost ₹20–25 per seat.",
    busType: "E-Rickshaw / Auto"
  },
  {
    id: 3,
    from: "Ramaya Homestay",
    to: "Kashi Vishwanath / Lalita Ghat",
    mode: "Walking",
    distance: "900 m",
    duration: "10 mins",
    fare: 0,
    cheapest: 0,
    alternative: "Cycle Rickshaw",
    frequency: "Anytime",
    notes: "No vehicles allowed in inner narrow lanes (galiyan). Extremely pleasant 8-10 min walk through Chowk alleys.",
    busType: "Walking via Lanes"
  },
  {
    id: 4,
    from: "Dashashwamedh / Lalita Ghat",
    to: "Assi Ghat & BHU",
    mode: "Shared E-Rickshaw / Boat",
    distance: "5 km",
    duration: "20 mins",
    fare: 150,
    cheapest: 30,
    alternative: "Shared Ganges Boat Ride",
    frequency: "Every 5 mins",
    notes: "Shared E-Rickshaw from Godowlia to Assi costs ₹30/seat. Shared morning/evening boat ride ₹100–150/person.",
    busType: "E-Rickshaw / Shared Boat"
  },
  {
    id: 5,
    from: "Godowlia / Chowk",
    to: "Lalita Ghat (3D Light Show)",
    mode: "Walking via Ghats",
    distance: "600 m",
    duration: "7 mins",
    fare: 0,
    cheapest: 0,
    alternative: "Corridor Pedestrian Walk",
    frequency: "Free entry at 7:30 PM",
    notes: "Walk along illuminated stone steps from Dashashwamedh or Kashi Vishwanath Corridor Gate 3.",
    busType: "Walking"
  },
  {
    id: 6,
    from: "Banaras Station (BNRS)",
    to: "New Delhi (NDLS)",
    mode: "Express Train (Return)",
    distance: "780 km",
    duration: "16 hrs 15 mins (13:30 - 05:45)",
    fare: 440,
    cheapest: 440,
    alternative: "AC 3-Tier / Vande Bharat",
    frequency: "Departs 13:30 PM (23 Sep)",
    notes: "15127 Kashi V Nath Exp. Sleeper (SL) with AVL 70 seats. Reaches Delhi early morning.",
    busType: "Kashi V Nath Exp"
  }
];

export const transportModes = ["All", "Express Train", "Auto / E-Rickshaw", "Walking", "Shared E-Rickshaw / Boat"];

