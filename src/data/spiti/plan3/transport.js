import { spitiAmounts } from "../amounts";
const data = spitiAmounts.plan3;

export const transport = [
  {
    id: 1,
    from: "Delhi",
    to: "Manali",
    mode: "Volvo AC Bus",
    distance: "530 km",
    duration: "12 hours",
    fare: data.transportFares.volvoRoundTrip / 2,
    cheapest: 800,
    alternative: "HRTC Ordinary Bus (₹650)",
    frequency: "15+ Buses daily",
    notes: "Overnight luxury sleeper/semi-sleeper semi-custom buses",
    busType: "Volvo / Scania"
  },
  {
    id: 2,
    from: "Manali",
    to: "Kaza",
    mode: "Hero Xpulse 200",
    distance: "200 km",
    duration: "9 hours",
    fare: data.transportFares.xpulseRentalPerPerson + data.transportFares.xpulseFuelPerPerson,
    cheapest: 1500,
    alternative: "HRTC Local Bus (₹350, once daily at 5:00 AM)",
    frequency: "Continuous Ride",
    notes: "Rental ₹1950 for 3 days + ₹1400 fuel",
    busType: "Off-road motorcycle"
  }
];
