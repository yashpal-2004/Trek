import { ujjainAmounts } from "./amounts";

export const transport = [
  {
    id: 1,
    from: "Sonipat / Delhi",
    to: "Ujjain Bus Stand",
    mode: "AC Sleeper Bus",
    distance: "850 km",
    duration: "15 hrs",
    fare: ujjainAmounts.transportFares.busRoundTrip / 2,
    cheapest: 1200,
    alternative: "Train (via Delhi or Indore)",
    frequency: "Daily Evening (07:00 PM)",
    notes: "Direct interstate AC sleeper bus. Book 2-3 weeks in advance.",
    busType: "AC Sleeper"
  },
  {
    id: 2,
    from: "Ujjain Bus Stand",
    to: "Hotel (near Mahakal Temple)",
    mode: "Local E-Rickshaw",
    distance: "3 km",
    duration: "15 mins",
    fare: 30,
    cheapest: 20,
    alternative: "Auto-rickshaw",
    frequency: "Available 24/7 at Bus Stand",
    notes: "E-rickshaws are the most economical option around Mahakal temple.",
    busType: "Auto"
  },
  {
    id: 3,
    from: "Ujjain Terminal",
    to: "Omkareshwar Jyotirlinga",
    mode: "Express Bus / Shared Cab",
    distance: "135 km",
    duration: "3.5 hrs",
    fare: ujjainAmounts.transportFares.ujjainToOmkareshwar,
    cheapest: 200,
    alternative: "Private Cab (₹2,500 round trip)",
    frequency: "Buses every 30 mins via Indore",
    notes: "Direct state bus or shared cab to Omkareshwar Narmada Ghat.",
    busType: "Express Bus"
  },
  {
    id: 4,
    from: "Omkareshwar Ghat",
    to: "Omkareshwar Island & Mamleshwar",
    mode: "Narmada Boat / Jhula Pul Walk",
    distance: "2 km",
    duration: "30 mins",
    fare: 50,
    cheapest: 0,
    alternative: "Walking Jhula Pul bridge (Free)",
    frequency: "Continuous",
    notes: "Walk the Jhula Pul suspension bridge or take a motorboat across Narmada.",
    busType: "Boat / Walking"
  },
  {
    id: 5,
    from: "Omkareshwar",
    to: "Ujjain / Delhi Bus Terminal",
    mode: "AC Sleeper Bus",
    distance: "985 km",
    duration: "18 hrs total",
    fare: ujjainAmounts.transportFares.busRoundTrip / 2 + ujjainAmounts.transportFares.omkareshwarToUjjain,
    cheapest: 1450,
    alternative: "Train via Indore",
    frequency: "Daily Evening (07:30 PM)",
    notes: "Board return bus back to Ujjain/Indore and onward sleeper to Delhi/Sonipat.",
    busType: "AC Sleeper"
  }
];

export const transportModes = ["All", "AC Sleeper Bus", "Express Bus / Shared Cab", "Auto Rickshaw", "Narmada Boat / Jhula Pul Walk"];
