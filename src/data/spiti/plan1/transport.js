import { spitiAmounts } from "../amounts";
const data = spitiAmounts.plan1;

export const transport = [
  {
    id: 1,
    from: "Sonipat",
    to: "Delhi ISBT Kashmiri Gate",
    mode: "Local Bus / Train",
    distance: "50 km",
    duration: "1.5 hrs",
    fare: 100,
    cheapest: 80,
    alternative: "Delhi Metro from Kashmiri Gate (on return)",
    frequency: "Frequent throughout the day",
    notes: "Take early evening bus/train from Sonipat to reach ISBT Kashmiri Gate by 06:30 PM on 20 Aug",
    busType: "Bus"
  },
  {
    id: 2,
    from: "Delhi (ISBT Kashmiri Gate)",
    to: "Manali",
    mode: "Volvo AC Bus",
    distance: "530 km",
    duration: "12 hrs",
    fare: 600,
    cheapest: 600,
    alternative: "HRTC Ordinary Bus",
    frequency: "Daily Evening (07:00 PM \u2013 09:00 PM)",
    notes: "Book online via RedBus / HRTC. Overnight semi-sleeper AC Volvo. Depart 20 Aug night, arrive Manali 21 Aug ~08:00 AM",
    busType: "AC Volvo"
  },
  {
    id: 3,
    from: "Manali (Pickup RE Himalayan)",
    to: "Kaza via Atal Tunnel & Kunzum Pass",
    mode: "RE Himalayan",
    distance: "200 km",
    duration: "8\u20139 hrs",
    fare: data.transportFares.bikeRentalPerPerson,
    cheapest: data.transportFares.bikeRentalPerPerson,
    alternative: "Shared Tempo Traveler (slower, less scenic)",
    frequency: "Himalayan Day 1 \u2014 21 Aug (depart 09:30 AM)",
    notes: "Pick up RE Himalayan at 08:30 AM directly from bus stand. No Manali hotel stay. Cross Atal Tunnel, off-road past Batal, scale Kunzum Pass (14,931 ft) \u2014 4-day rental per person",
    busType: "Motorcycle"
  },
  {
    id: 4,
    from: "Kaza Base",
    to: "Key Monastery, Hikkim, Komic & Langza",
    mode: "RE Himalayan",
    distance: "90 km",
    duration: "5.5 hrs",
    fare: 0,
    cheapest: 0,
    alternative: "Shared Local Taxi",
    frequency: "Himalayan Day 2 \u2014 22 Aug",
    notes: "Included in 4-day Himalayan rental. Ride across Chicham Bridge (Asia\u2019s highest suspension bridge), post cards at Hikkim (14,567 ft), visit Komic & Langza",
    busType: "Motorcycle"
  },
  {
    id: 5,
    from: "Kaza",
    to: "Chandratal Lake",
    mode: "RE Himalayan",
    distance: "120 km",
    duration: "5 hrs",
    fare: 0,
    cheapest: 0,
    alternative: "Shared Sumo",
    frequency: "Himalayan Day 3 \u2014 23 Aug",
    notes: "Included in 4-day Himalayan rental. Cross Kunzum Pass (14,931 ft), take dirt track to Chandratal. Overnight stay in camps near the lake.",
    busType: "Motorcycle"
  },
  {
    id: 6,
    from: "Chandratal Lake",
    to: "Manali (via Chhatru & Atal Tunnel)",
    mode: "RE Himalayan",
    distance: "130 km",
    duration: "6 hrs",
    fare: 0,
    cheapest: 0,
    alternative: "Shared local taxi",
    frequency: "Himalayan Day 4 \u2014 24 Aug (return bike by 04:30 PM)",
    notes: "Final day on the bike \u2014 ride from Chandratal through Batal nallahs, Atal Tunnel back to Manali. Return Himalayan by 04:30 PM.",
    busType: "Motorcycle"
  },
  {
    id: 7,
    from: "Manali",
    to: "Delhi (ISBT Kashmiri Gate)",
    mode: "Volvo AC Bus",
    distance: "530 km",
    duration: "12 hrs",
    fare: 600,
    cheapest: 600,
    alternative: "HRTC Ordinary Bus",
    frequency: "Evening (06:00 PM \u2013 07:00 PM)",
    notes: "Board overnight Volvo at 06:00 PM on 24 Aug. Arrive Delhi ~07:00 AM on 25 Aug. Then return to Sonipat by train/bus.",
    busType: "AC Volvo"
  }
];

export const transportModes = ["All", "Volvo AC Bus", "RE Himalayan", "Local Bus / Train"];
