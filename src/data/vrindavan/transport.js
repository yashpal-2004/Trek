export const transport = [
  {
    id: 1,
    from: "College (Sonipat) via Delhi ISBT",
    to: "Vrindavan Cut / Chatikara",
    mode: "UPSRTC / Intercity Express Bus",
    distance: "185 km",
    duration: "4 hrs 30 mins – 5 hrs",
    fare: 425,
    cheapest: 380,
    alternative: "Haryana Roadways from Sonipat to Delhi ISBT (₹50) + UPSRTC Expressway Bus to Vrindavan Cut (₹375)",
    frequency: "Depart 7:30 AM from College; Delhi buses run every 15–20 mins",
    notes: "Leave college at 7:30 AM to reach Kashmere Gate / Sarai Kale Khan ISBT by 8:45 AM. Board Yamuna Expressway bus by 9:15 AM to arrive at Vrindavan Cut (Chatikara) by 12:30 PM. Group of 4 can easily get seats together.",
    busType: "State Transport / Intercity Bus"
  },
  {
    id: 2,
    from: "Mathura / Vrindavan Cut",
    to: "Vrindavan",
    mode: "E-Rickshaw / Shared Tempo",
    distance: "12 km",
    duration: "25–35 mins",
    fare: 75,
    cheapest: 30,
    alternative: "Shared Tempo (Vikram) — ₹20–30 per seat",
    frequency: "Continuous outside Mathura Bus Stand & highway cut",
    notes: "E-rickshaws and tempos are readily available at the highway cut and new bus stand. Shared Vikram Tempos run frequently to Chatikara / Bhaktivedanta Swami Marg. ₹75 is for a reserved e-rickshaw split among 4 people (₹300 total / 4).",
    busType: "E-Rickshaw / Tempo"
  },
  {
    id: 3,
    from: "Vrindavan Temple Circuit",
    to: "Between Temples",
    mode: "E-Rickshaw / Walking",
    distance: "2–5 km",
    duration: "10–20 mins per leg",
    fare: 50,
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
    fare: 25,
    cheapest: 20,
    alternative: "Shared Vikram Tempo ₹20–25/seat",
    frequency: "Continuous throughout the morning",
    notes: "Shared Vikram Tempos run between Vrindavan and Mathura frequently. Get off at Vishram Ghat / Holi Gate for Dwarkadheesh. Janmabhoomi is a 10-min walk from Holi Gate.",
    busType: "Shared Tempo / E-Rickshaw"
  },
  {
    id: 5,
    from: "Mathura / Vrindavan Bus Stand",
    to: "College (Sonipat) via Delhi ISBT",
    mode: "UPSRTC / Intercity Express Bus (Return)",
    distance: "185 km",
    duration: "4 hrs 30 mins – 5 hrs",
    fare: 425,
    cheapest: 380,
    alternative: "UPSRTC bus to Sarai Kale Khan / Kashmere Gate (₹375) + Connecting bus to Sonipat College (₹50)",
    frequency: "Frequent buses from 12 PM – 8 PM",
    notes: "Board return bus at 2:00 PM to reach Delhi by 6:00 PM, and return to Sonipat College campus by 7:30 PM.",
    busType: "State Transport / Intercity Bus"
  }
];


export const transportModes = ["All", "UPSRTC / Intercity Express Bus", "E-Rickshaw / Shared Tempo", "Walking"];
