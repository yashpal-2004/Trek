export const kashmirAmounts = {
  budgetTotal: 8800,
  transportCategory: 4300, // Train (₹900) + Transit Cabs (₹900) + DEMU (₹100) + Day-trips (₹2400)
  accommodationCategory: 2400, // 4 Nights double-sharing stay (Houseboat + Hotel)
  foodCategory: 1500, // 5 Days food @ ₹300/day
  emergencyCategory: 600, // Activities & entries (no buffer)

  calcDefaults: {
    transport: 4300,
    stay: 2400,
    food: 1500,
    emergency: 600,
    shopping: 0,
    permits: 0
  },

  stays: {
    srinagar: { budget: 800, mid: 1200, premium: 2500, hotelPrice: 1200 }
  },

  transportFares: {
    trainRoundTrip: 900,
    jammuBanihalCab: 900,
    valleyDemuTrain: 100,
    localDayTripsCabs: 2400
  }
};
