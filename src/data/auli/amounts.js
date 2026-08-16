export const auliAmounts = {
  budgetTotal: 6000,
  transportCategory: 2700, // Ordinary Bus (₹800) + GMOU Local Bus (₹900) + Ropeway (₹1000)
  accommodationCategory: 1500, // 3 Nights Joshimath hotel (₹1500/person double-sharing)
  foodCategory: 1200, // 4 Days food @ ₹300/day
  emergencyCategory: 600, // Activities, winter rentals & buffer

  calcDefaults: {
    transport: 2700,
    stay: 1500,
    food: 1200,
    emergency: 600,
    shopping: 0,
    permits: 0
  },

  stays: {
    joshimath: { budget: 600, mid: 1000, premium: 2000, hotelPrice: 1000 }
  },

  transportFares: {
    ordinaryBusRoundTrip: 800,
    localBusRoundTrip: 900,
    ropewayRoundTrip: 1000
  }
};
