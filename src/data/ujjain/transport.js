import { ujjainAmounts } from "./amounts";

export const transport = [
  {
    id: 1,
    from: "Sonipat Bypass",
    to: "Ujjain Bus Stand",
    mode: "AC Sleeper Bus",
    distance: "850 km",
    duration: "15 hrs",
    fare: ujjainAmounts.transportFares.busRoundTrip / 2,
    cheapest: 1200,
    alternative: "Train (via Delhi or Indore)",
    frequency: "Daily Evening (07:00 PM)",
    notes: "Direct interstate bus runs bypassing Delhi. Book in advance via private portals.",
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
    notes: "E-rickshaws are the most economical option. Direct entry of autos can be limited near the temple corridors.",
    busType: "Auto"
  },
  {
    id: 3,
    from: "Hotel Base",
    to: "Kal Bhairav & Mangalnath Loop",
    mode: "Auto Rickshaw",
    distance: "15 km Loop",
    duration: "2 hours",
    fare: 150,
    cheapest: 120,
    alternative: "Shared Magic Auto",
    frequency: "Frequent",
    notes: "Negotiate a round-trip package with a local auto-rickshaw driver to visit Kal Bhairav, Mangalnath, and Sandipani Ashram.",
    busType: "Auto"
  },
  {
    id: 4,
    from: "Ujjain Bus Stand",
    to: "Sonipat Bypass",
    mode: "AC Sleeper Bus",
    distance: "850 km",
    duration: "15 hrs",
    fare: ujjainAmounts.transportFares.busRoundTrip / 2,
    cheapest: 1200,
    alternative: "Indore/Delhi train options",
    frequency: "Daily Evening (07:30 PM)",
    notes: "Board return sleeper coach to Sonipat bypass. Rest and sleep through the overnight journey.",
    busType: "AC Sleeper"
  }
];

export const transportModes = ["All", "AC Sleeper Bus", "Auto Rickshaw", "Local E-Rickshaw"];
