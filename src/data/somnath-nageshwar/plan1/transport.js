import { somnathNageshwarAmounts } from "./amounts";

export const transport = [
  {
    id: 1,
    from: "Delhi / Sonipat Railway Station",
    to: "Veraval Railway Station (Somnath)",
    mode: "Express Train (Sleeper)",
    distance: "1,350 km",
    duration: "18 hrs",
    fare: somnathNageshwarAmounts.transportFares.delhiToVeravalTrain,
    cheapest: 600,
    alternative: "3AC Express Train (₹1,550)",
    frequency: "Daily Trains (Jabalpur/Uttaranchal Express)",
    notes: "Direct train to Veraval station. Book 3-4 weeks in advance.",
    busType: "Sleeper Train"
  },
  {
    id: 2,
    from: "Veraval Station",
    to: "Somnath Temple",
    mode: "Shared Auto / Local Cab",
    distance: "6 km",
    duration: "15 mins",
    fare: somnathNageshwarAmounts.transportFares.veravalToSomnathAuto,
    cheapest: 20,
    alternative: "Local Bus (₹15)",
    frequency: "Available 24/7 outside Veraval Station",
    notes: "Frequent shared autos run between Veraval station and Somnath temple gate.",
    busType: "Shared Auto"
  },
  {
    id: 3,
    from: "Somnath Bus Stand",
    to: "Dwarka Bus Stand (via Porbandar)",
    mode: "GSRTC State Bus",
    distance: "230 km",
    duration: "4.5 hrs",
    fare: somnathNageshwarAmounts.transportFares.somnathToDwarkaBus,
    cheapest: 220,
    alternative: "Private Sleeper Bus (₹450)",
    frequency: "Buses every 30 mins",
    notes: "Direct coastal highway bus via Kirti Mandir Porbandar.",
    busType: "GSRTC Express"
  },
  {
    id: 4,
    from: "Dwarka City",
    to: "Nageshwar Jyotirlinga & Beyt Dwarka",
    mode: "Shared Taxi & Ferry Boat",
    distance: "80 km Circuit",
    duration: "5 hrs",
    fare: somnathNageshwarAmounts.transportFares.dwarkaToNageshwarTaxi + somnathNageshwarAmounts.transportFares.dwarkaToBeytDwarkaBoat,
    cheapest: 150,
    alternative: "GSRTC Local Sightseeing Bus (₹120)",
    frequency: "Continuous local tour cabs",
    notes: "Shared cabs visit Nageshwar, Gopi Talav, Rukmini Temple & Okha Jetty for Beyt Dwarka ferry.",
    busType: "Taxi & Boat"
  },
  {
    id: 5,
    from: "Dwarka Railway Station",
    to: "Delhi / Sonipat Return",
    mode: "Express Train (Sleeper)",
    distance: "1,350 km",
    duration: "22 hrs",
    fare: somnathNageshwarAmounts.transportFares.dwarkaToDelhiTrain,
    cheapest: 650,
    alternative: "Dwarka - New Delhi 3AC",
    frequency: "Daily afternoon return trains",
    notes: "Direct train from Dwarka station back to New Delhi / Hazrat Nizamuddin.",
    busType: "Sleeper Train"
  }
];

export const transportModes = ["All", "Express Train (Sleeper)", "Shared Auto / Local Cab", "GSRTC State Bus", "Shared Taxi & Ferry Boat"];
