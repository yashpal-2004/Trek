export const transport = [
  {
    id: 1,
    from: "Old Delhi / Ghaziabad",
    to: "Kathgodam Railway Station",
    mode: "Train",
    distance: "280 km",
    duration: "7 hrs",
    fare: 110,
    cheapest: 110,
    alternative: "General Class (UR) Unreserved Ticket",
    frequency: "Daily Overnight (Ranikhet / Sampark Kranti Exp)",
    notes: "Board early evening/night unreserved general coach. Ticket available at counter (₹110). Arrives Kathgodam 05:00 AM.",
    busType: "Unreserved Express Train"
  },
  {
    id: 2,
    from: "Kathgodam Station",
    to: "Almora Taxi Stand",
    mode: "Shared Jeep",
    distance: "85 km",
    duration: "3.5 hrs",
    fare: 100,
    cheapest: 100,
    alternative: "Local HRTC / UTC Mountain Bus",
    frequency: "Continuous departures from station exit",
    notes: "Shared Sumo/Maxx departs as soon as seats fill up. Beautiful winding mountain climb past Bhowali.",
    busType: "Shared Sumo / Maxx"
  },
  {
    id: 3,
    from: "Almora Taxi Stand",
    to: "Binsar Gate / Ayarpani",
    mode: "Shared Jeep",
    distance: "25 km",
    duration: "1 hr",
    fare: 60,
    cheapest: 60,
    alternative: "Local Route Taxi",
    frequency: "Every 20 mins",
    notes: "Local shared cab dropping right at Sanctuary Ayarpani gate / village homestay junction.",
    busType: "Local Shared Cab"
  },
  {
    id: 4,
    from: "Ayarpani / Homestay",
    to: "Zero Point Sunset Viewpoint",
    mode: "Trek",
    distance: "6 km",
    duration: "4 hrs trek",
    fare: 200,
    cheapest: 200,
    alternative: "Forest Nature Walk",
    frequency: "Open 06:00 AM - 05:00 PM",
    notes: "Shaded oak & cedar forest trail. Forest entrance permit ticket is ₹200.",
    busType: "Protected Forest Trail"
  }
];

export const transportModes = ["All", "Train", "Shared Jeep", "Trek"];

