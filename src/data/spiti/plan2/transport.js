import { spitiAmounts } from "../amounts";
const data = spitiAmounts.plan2;

export const transport = [
  {
    id: 1,
    from: "Delhi (ISBT Kashmiri Gate)",
    to: "Manali",
    mode: "Volvo Bus",
    distance: "530 km",
    duration: "12 hrs",
    fare: 1200,
    cheapest: 1200,
    alternative: "HRTC Ordinary Bus",
    frequency: "Daily Evening (06:30 PM - 08:30 PM)",
    notes: "Overnight semi-sleeper AC Volvo bus journey from Delhi to Manali (4 seats)",
    busType: "AC Volvo"
  },
  {
    id: 2,
    from: "Manali Town",
    to: "Old Manali & Solang",
    mode: "Scooty",
    distance: "40 km",
    duration: "4 hrs",
    fare: 500,
    cheapest: 500,
    alternative: "Local Autorickshaw",
    frequency: "1-day local exploration (Day 1)",
    notes: "Renting 2 Scooties @ ₹500/person (split by 4 riders across 2 scooties) for 4 friends",
    busType: "Scooter"
  },
  {
    id: 3,
    from: "Manali",
    to: "Kaza (via Atal Tunnel & Kunzum Pass)",
    mode: "Hero Xpulse 200",
    distance: "200 km",
    duration: "7.5 hrs",
    fare: 1650,
    cheapest: 1650,
    alternative: "Shared Tempo Traveler",
    frequency: "Xpulse Day 1 Convoy Ride",
    notes: "2 Hero Xpulse bikes riding in convoy past Atal Tunnel, Batal water streams & Kunzum Pass (14,931 ft)",
    busType: "Motorcycle"
  },
  {
    id: 4,
    from: "Kaza Base",
    to: "Key, Hikkim, Komic & Langza",
    mode: "Hero Xpulse 200",
    distance: "90 km",
    duration: "5.5 hrs",
    fare: 650,
    cheapest: 650,
    alternative: "Shared Local Taxi",
    frequency: "Xpulse Day 2 Convoy Ride",
    notes: "Ride across Chicham Bridge, post cards at World's Highest Post Office in Hikkim (14,567 ft)",
    busType: "Motorcycle"
  },
  {
    id: 5,
    from: "Kaza",
    to: "Chandratal Lake Detour → Manali",
    mode: "Hero Xpulse 200",
    distance: "210 km",
    duration: "9 hrs",
    fare: 650,
    cheapest: 650,
    alternative: "Shared Sumo",
    frequency: "Xpulse Day 3 Return Convoy Ride",
    notes: "Off-road detour to turquoise Chandratal Moon Lake, cross Kunzum Pass & return 2 Xpulse bikes in Manali",
    busType: "Motorcycle"
  },
  {
    id: 6,
    from: "Manali",
    to: "Jogini & Old Manali Cafes",
    mode: "Scooty",
    distance: "30 km",
    duration: "3 hrs",
    fare: 500,
    cheapest: 500,
    alternative: "Walking / Auto",
    frequency: "2nd day local exploration (Day 5)",
    notes: "Renting 2 Scooties @ ₹500/person (split by 4 riders across 2 scooties) for 2nd day local riding",
    busType: "Scooter"
  }
];

export const transportModes = ["All", "Volvo Bus", "Hero Xpulse 200", "Scooty"];
