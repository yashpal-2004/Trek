import { spitiAmounts } from "../amounts";
const data = spitiAmounts.plan1;

export const transport = [
  {
    id: 1,
    from: "Sonipat",
    to: "Manali",
    mode: "Volvo AC Bus",
    distance: "500 km",
    duration: "10 hrs",
    fare: data.transportFares.volvoRoundTrip / 2,
    cheapest: 900,
    alternative: "Local Bus to Chandigarh, then HRTC",
    frequency: "Daily Evening (09:30 PM – 10:00 PM)",
    notes: "Direct Volvo bus boarding from Sonipat Bypass. Depart 20 Aug night, arrive Manali 21 Aug ~08:00 AM.",
    busType: "AC Volvo"
  },
  {
    id: 2,
    from: "Manali (Pickup RE Himalayan)",
    to: "Kaza via Atal Tunnel & Kunzum Pass",
    mode: "RE Himalayan",
    distance: "200 km",
    duration: "8–9 hrs",
    fare: data.transportFares.bikeRentalPerPerson,
    cheapest: data.transportFares.bikeRentalPerPerson,
    alternative: "Shared Tempo Traveler",
    frequency: "Himalayan Day 1 — 21 Aug (depart 09:30 AM)",
    notes: "Pick up RE Himalayan directly from rental shop. No Manali stay. Cross Atal Tunnel, Batal, scale Kunzum Pass (14,931 ft) — 4-day rental.",
    busType: "Motorcycle"
  },
  {
    id: 3,
    from: "Kaza Base",
    to: "Key, Chicham, Hikkim, Komic & Langza",
    mode: "RE Himalayan",
    distance: "90 km",
    duration: "5.5 hrs",
    fare: 0,
    cheapest: 0,
    alternative: "Shared Local Taxi",
    frequency: "Himalayan Day 2 — 22 Aug",
    notes: "Included in 4-day rental. Visit Key Monastery, cross Chicham Bridge (Asia's highest suspension bridge), Hikkim post office, Komic & Langza Buddha.",
    busType: "Motorcycle"
  },
  {
    id: 4,
    from: "Kaza",
    to: "Dhankar, Tabo & Shipki La Pass (China Border)",
    mode: "RE Himalayan",
    distance: "340 km (RT)",
    duration: "9 hrs",
    fare: 0,
    cheapest: 0,
    alternative: "Shared local taxi",
    frequency: "Himalayan Day 3 — 23 Aug (depart 06:00 AM)",
    notes: "Included in 4-day rental. Ride to Khab confluence and climb to Shipki La border (ILP permit required, pass closes at 2:00 PM sharp). Tour Tabo and Dhankar on return loop.",
    busType: "Motorcycle"
  },
  {
    id: 5,
    from: "Kaza",
    to: "Manali (via Kunzum Pass & Atal Tunnel)",
    mode: "RE Himalayan",
    distance: "200 km",
    duration: "8 hrs",
    fare: 0,
    cheapest: 0,
    alternative: "Shared local taxi",
    frequency: "Himalayan Day 4 — 24 Aug (return bike by 04:30 PM)",
    notes: "Final day on the bike — ride from Kaza back to Manali via Kunzum Pass and Atal Tunnel. Return Himalayan by 04:30 PM.",
    busType: "Motorcycle"
  },
  {
    id: 6,
    from: "Manali",
    to: "Sonipat",
    mode: "Volvo AC Bus",
    distance: "500 km",
    duration: "10 hrs",
    fare: data.transportFares.volvoRoundTrip / 2,
    cheapest: 900,
    alternative: "HRTC Ordinary Bus",
    frequency: "Evening (06:00 PM – 07:00 PM)",
    notes: "Board overnight Volvo at 06:00 PM on 24 Aug. Arrive directly at Sonipat bypass by ~05:00 AM on 25 Aug.",
    busType: "AC Volvo"
  }
];

export const transportModes = ["All", "Volvo AC Bus", "RE Himalayan"];
