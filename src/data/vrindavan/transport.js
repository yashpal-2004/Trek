export const transport = [
  {
    id: 1,
    from: "Sonipat (SNP)",
    to: "Mathura Junction (MTJ)",
    mode: "Express / Passenger Train",
    distance: "170 km",
    duration: "3 hrs 30 mins – 4 hrs",
    fare: 180,
    cheapest: 75,
    alternative: "Unreserved General Coach (GS) for lowest cost",
    frequency: "Multiple trains daily (5:00 AM – 8:00 AM departures)",
    notes: "Trains include 12311 Kalka Mail, 12003 Swarna Shatabdi, and several passenger trains. Check IRCTC / NTES for latest schedule. Unreserved General Ticket costs ~₹75–85. Sleeper class costs ~₹180.",
    busType: "Indian Railways"
  },
  {
    id: 2,
    from: "Mathura Junction (MTJ)",
    to: "Vrindavan",
    mode: "E-Rickshaw / Shared Tempo",
    distance: "12 km",
    duration: "25–35 mins",
    fare: 150,
    cheapest: 30,
    alternative: "Shared Tempo (Vikram) — ₹20–30 per seat",
    frequency: "Continuous outside Mathura Junction",
    notes: "E-rickshaws are readily available outside Mathura Jn. Shared Vikram Tempo to Vrindavan runs from stand near platform. Negotiate price before boarding private autos.",
    busType: "E-Rickshaw / Tempo"
  },
  {
    id: 3,
    from: "Vrindavan Temple Circuit",
    to: "Between Temples",
    mode: "E-Rickshaw / Walking",
    distance: "2–5 km",
    duration: "10–20 mins per leg",
    fare: 100,
    cheapest: 0,
    alternative: "Cycle Rickshaw (cheaper alternative)",
    frequency: "Available at all major temples",
    notes: "Vrindavan inner lanes are best explored on foot. Banke Bihari, Radha Raman and Nidhivan are within walking distance. Take shared e-rickshaws for Prem Mandir and ISKCON which are slightly away.",
    busType: "Walking / E-Rickshaw"
  },
  {
    id: 4,
    from: "Vrindavan",
    to: "Mathura (Janmabhoomi & Dwarkadheesh)",
    mode: "Shared Tempo / E-Rickshaw",
    distance: "12 km",
    duration: "30 mins",
    fare: 150,
    cheapest: 25,
    alternative: "Shared Vikram Tempo ₹20–25/seat",
    frequency: "Continuous throughout the morning",
    notes: "Shared Vikram Tempos run between Vrindavan and Mathura frequently. Get off at Vishram Ghat / Holi Gate for Dwarkadheesh. Janmabhoomi is a 10-min walk from Holi Gate.",
    busType: "Shared Tempo / E-Rickshaw"
  },
  {
    id: 5,
    from: "Mathura Junction (MTJ)",
    to: "Sonipat (SNP)",
    mode: "Express / Passenger Train (Return)",
    distance: "170 km",
    duration: "3 hrs 30 mins – 4 hrs",
    fare: 180,
    cheapest: 75,
    alternative: "Unreserved General (GS) or Sleeper class",
    frequency: "Multiple trains from 12 PM – 5 PM",
    notes: "Return trains include 12312 Kalka Mail (reverse), 12004 Swarna Shatabdi and other intercity trains. Book in advance on IRCTC or buy unreserved GS ticket at Mathura Junction.",
    busType: "Indian Railways"
  }
];

export const transportModes = ["All", "Express / Passenger Train", "E-Rickshaw / Shared Tempo", "Walking"];
