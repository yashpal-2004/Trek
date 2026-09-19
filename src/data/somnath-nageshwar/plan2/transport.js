import { somnathNageshwarAmounts } from "./amounts";

export const transport = [
  {
    id: 1,
    from: "Delhi / Sonipat Railway Station",
    to: "Veraval Railway Station (Somnath)",
    mode: "General Class Train (Unreserved)",
    distance: "1,350 km",
    duration: "18-20 hrs",
    fare: somnathNageshwarAmounts.transportFares.delhiToVeravalTrain,
    cheapest: 320,
    alternative: "Sleeper Class (₹750 if confirmed)",
    frequency: "Daily Express Trains (GS General Coaches)",
    notes: "Buy Unreserved UTS ticket (₹320) at station counter 2 hours before departure. Board early at Delhi to grab a seat in the GS General coach.",
    busType: "Unreserved General Coach (GS)"
  },
  {
    id: 2,
    from: "Veraval Station",
    to: "Somnath Temple",
    mode: "Shared E-Rickshaw",
    distance: "6 km",
    duration: "15 mins",
    fare: somnathNageshwarAmounts.transportFares.veravalToSomnathAuto,
    cheapest: 20,
    alternative: "Local Bus (₹15)",
    frequency: "Available 24/7 outside Veraval Station",
    notes: "Shared e-rickshaws run continuously between Veraval station and Somnath Dharamshala gate for ₹20/seat.",
    busType: "Shared E-Rickshaw"
  },
  {
    id: 3,
    from: "Somnath Bus Stand",
    to: "Dwarka Bus Stand (via Porbandar)",
    mode: "GSRTC Ordinary / Express Bus",
    distance: "230 km",
    duration: "4.5 hrs",
    fare: somnathNageshwarAmounts.transportFares.somnathToDwarkaBus,
    cheapest: 220,
    alternative: "Gurjarnagri Express Bus (₹240)",
    frequency: "State buses departing every 30 mins",
    notes: "GSRTC non-AC ordinary state transport bus via Porbandar coastal highway.",
    busType: "GSRTC State Bus"
  },
  {
    id: 4,
    from: "Dwarka City",
    to: "Nageshwar Jyotirlinga & Beyt Dwarka",
    mode: "Shared Local Auto & Ferry Boat",
    distance: "80 km Circuit",
    duration: "5 hrs",
    fare: somnathNageshwarAmounts.transportFares.dwarkaToNageshwarTaxi + somnathNageshwarAmounts.transportFares.dwarkaToBeytDwarkaBoat,
    cheapest: 100,
    alternative: "GSRTC Sightseeing Bus (₹120)",
    frequency: "Continuous shared local tempos",
    notes: "Shared autos from Dwarka to Nageshwar (₹50-80) and shared government ferry boat to Beyt Dwarka (₹20).",
    busType: "Shared Auto & Ferry"
  },
  {
    id: 5,
    from: "Dwarka Railway Station",
    to: "Delhi / Sonipat Return",
    mode: "General Class Train (Unreserved)",
    distance: "1,350 km",
    duration: "22 hrs",
    fare: somnathNageshwarAmounts.transportFares.dwarkaToDelhiTrain,
    cheapest: 330,
    alternative: "Sleeper Class (₹750)",
    frequency: "Daily afternoon return trains",
    notes: "Purchase UTS unreserved general ticket at Dwarka counter. Board GS general coach for overnight return to Delhi.",
    busType: "Unreserved General Coach (GS)"
  }
];

export const transportModes = ["All", "General Class Train (Unreserved)", "Shared E-Rickshaw", "GSRTC State Bus", "Shared Local Auto & Ferry Boat"];
