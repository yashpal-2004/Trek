import { nepalAmounts } from "./amounts";

export const transport = [
  {
    id: 1,
    from: "New Delhi (NDLS)",
    to: "Gorakhpur Junction",
    mode: "Sleeper Class Train",
    distance: "750 km",
    duration: "13 hrs",
    fare: nepalAmounts.transportFares.trainDelhiGorakhpur,
    cheapest: 500,
    alternative: "AC 3rd Tier (₹1,300) / Flight to Gorakhpur (₹3,500)",
    frequency: "Multiple daily trains (e.g. Gorakhdham, Vaishali, Bihar S Kranti)",
    notes: "Sleeper Class (SL) is the most budget-friendly option. Book tickets well in advance.",
    busType: "Train"
  },
  {
    id: 2,
    from: "Gorakhpur Junction",
    to: "Sonauli Border (Indian Side)",
    mode: "Local UPSRTC Bus",
    distance: "100 km",
    duration: "3 hrs",
    fare: nepalAmounts.transportFares.busGorakhpurBorder,
    cheapest: 130,
    alternative: "Shared Jeep / Bolero (₹200 per seat)",
    frequency: "Every 30 minutes from outside GKP station",
    notes: "Government buses are cheap and secure. Board directly from Gorakhpur bus stand.",
    busType: "Bus"
  },
  {
    id: 3,
    from: "Belahiya (Nepalese Side)",
    to: "Kathmandu (Gongabu)",
    mode: "Overnight Deluxe AC Bus",
    distance: "280 km",
    duration: "12 hrs",
    fare: nepalAmounts.transportFares.busBorderKathmandu,
    cheapest: 480,
    alternative: "Local Non-AC Bus (NPR 650 / ₹400)",
    frequency: "Every afternoon from 03:00 PM to 06:00 PM",
    notes: "Overnight AC sleeper or recliner coach. Enjoy mountain views at sunset before sleep.",
    busType: "AC Sleeper"
  },
  {
    id: 4,
    from: "Kathmandu (Sorhakhutte)",
    to: "Pokhara Lakeside",
    mode: "Tourist Bus",
    distance: "200 km",
    duration: "7.5 hrs",
    fare: nepalAmounts.transportFares.busKathmanduPokhara,
    cheapest: 600,
    alternative: "Local Micro-bus (NPR 700 / ₹440)",
    frequency: "Daily Morning (07:00 AM departure)",
    notes: "Tourist buses are cleaner and safer than local mini-buses on hilly mountain highways.",
    busType: "Bus"
  },
  {
    id: 5,
    from: "Pokhara Bus Terminal",
    to: "Sonauli Border (Belahiya)",
    mode: "Overnight Deluxe Bus",
    distance: "260 km",
    duration: "11 hrs",
    fare: nepalAmounts.transportFares.busPokharaBorder,
    cheapest: 650,
    alternative: "Day bus (NPR 900 / ₹560)",
    frequency: "Daily Evening (06:00 PM departure)",
    notes: "Travels overnight back down to the border plains, arriving early morning around 05:30 AM.",
    busType: "AC Sleeper"
  }
];

export const transportModes = ["All", "Sleeper Class Train", "Local UPSRTC Bus", "Overnight Deluxe AC Bus", "Tourist Bus"];
