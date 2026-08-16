export const ujjainAmounts = {
  budgetTotal: 4500,
  transportCategory: 2700, // Direct bus (₹2400) + local transit (₹300)
  accommodationCategory: 600, // Ujjain hotel 1 night (₹600/person)
  foodCategory: 900, // 3 days @ ₹300/day
  emergencyCategory: 300, // Pooja & Prasad buffer

  calcDefaults: {
    transport: 2700,
    stay: 600,
    food: 900,
    emergency: 300,
    shopping: 0,
    permits: 0
  },

  stays: {
    ujjain: { budget: 400, mid: 600, premium: 1200, hotelPrice: 600 }
  },

  transportFares: {
    busRoundTrip: 2400,
    localTransit: 300
  }
};
