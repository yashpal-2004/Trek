export const spitiAmounts = {
  plan1: { // 2 Persons Variant
    budgetTotal: 10150,
    transportCategory: 5150, // Volvo bus (₹1200) + Xpulse rental (₹1950) + Xpulse fuel (₹1000) + Scooty rental (₹500) + Scooty fuel (₹500)
    accommodationCategory: 3200, // Manali stay (₹1500) + Kaza stay (₹1700)
    foodCategory: 1750, // 5 days @ ₹350/day
    emergencyCategory: 50, // Permits, green fee & emergency buffer

    calcDefaults: {
      transport: 5150,
      stay: 3200,
      food: 1750,
      emergency: 0,
      shopping: 0,
      permits: 50
    },

    stays: {
      manali: { budget: 500, mid: 750, premium: 1500, hotelPrice: 750 },
      kaza: { budget: 600, mid: 850, premium: 1800, homestayPrice: 850 }
    },

    transportFares: {
      volvoRoundTrip: 1200,
      xpulseRentalPerPerson: 1950,
      xpulseFuelPerPerson: 1000,
      scootyRentalPerPerson: 500,
      scootyFuelPerPerson: 500
    }
  },

  plan2: { // 4 Persons Variant (Quad sharing stay savings & shared permits)
    budgetTotal: 9550,
    transportCategory: 5150,
    accommodationCategory: 2600, // Manali quad stay (₹1200) + Kaza quad stay (₹1400)
    foodCategory: 1750, // 5 days @ ₹350/day
    emergencyCategory: 50, // Shared permits & emergency buffer

    calcDefaults: {
      transport: 5150,
      stay: 2600,
      food: 1750,
      emergency: 0,
      shopping: 0,
      permits: 50
    },

    stays: {
      manali: { budget: 400, mid: 600, premium: 1200, hotelPrice: 600 },
      kaza: { budget: 500, mid: 700, premium: 1400, homestayPrice: 700 }
    },

    transportFares: {
      volvoRoundTrip: 1200,
      xpulseRentalPerPerson: 1950,
      xpulseFuelPerPerson: 1000,
      scootyRentalPerPerson: 500,
      scootyFuelPerPerson: 500
    }
  }
};
