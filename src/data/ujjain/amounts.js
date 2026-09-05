export const ujjainAmounts = {
  budgetTotal: 4800,
  transportCategory: 2900, // Delhi/Sonipat-Ujjain AC bus (₹2400) + Ujjain-Omkareshwar bus/cab (₹500)
  accommodationCategory: 600, // Ujjain hotel 1 night (₹600/person)
  foodCategory: 1000, // 3 days meals & tea (₹1000)
  emergencyCategory: 300, // Pooja & Prasad buffer

  calcDefaults: {
    transport: 2900,
    stay: 600,
    food: 1000,
    emergency: 300,
    shopping: 0,
    permits: 0
  },

  stays: {
    ujjain: { budget: 400, mid: 600, premium: 1200, hotelPrice: 600 },
    omkareshwar: { budget: 350, mid: 500, premium: 1000, hotelPrice: 500 }
  },

  transportFares: {
    busRoundTrip: 2400,
    ujjainToOmkareshwar: 250,
    omkareshwarToUjjain: 250,
    localTransit: 200
  }
};
