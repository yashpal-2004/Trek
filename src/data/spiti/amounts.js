export const spitiAmounts = {
  plan1: { // 2 Persons Variant
    budgetTotal: 10900,
    transportCategory: 5950, // Volvo bus (₹1200) + Xpulse rental (₹1950) + Xpulse fuel (₹1400) + Scooty rental (₹500) + Scooty fuel (₹900)
    accommodationCategory: 3200, // Manali stay (₹1500) + Kaza stay (₹1700)
    foodCategory: 1750, // 5 days @ ₹350/day
    emergencyCategory: 0, // Permits, green fee & emergency buffer

    calcDefaults: {
      transport: 5950,
      stay: 3200,
      food: 1750,
      emergency: 0,
      shopping: 0,
      permits: 0
    },

    stays: {
      manali: { budget: 500, mid: 750, premium: 1500, hotelPrice: 750 },
      kaza: { budget: 600, mid: 850, premium: 1800, homestayPrice: 850 }
    },

    transportFares: {
      volvoRoundTrip: 1200,
      xpulseRentalPerPerson: 1950,
      xpulseFuelPerPerson: 1400,
      scootyRentalPerPerson: 500,
      scootyFuelPerPerson: 900
    }
  },

  plan2: { // 4 Persons Variant (Quad sharing stay savings & shared permits)
    budgetTotal: 10300,
    transportCategory: 5950,
    accommodationCategory: 2600, // Manali quad stay (₹1200) + Kaza quad stay (₹1400)
    foodCategory: 1750, // 5 days @ ₹350/day
    emergencyCategory: 0, // Shared permits & emergency buffer

    calcDefaults: {
      transport: 5950,
      stay: 2600,
      food: 1750,
      emergency: 0,
      shopping: 0,
      permits: 0
    },

    stays: {
      manali: { budget: 400, mid: 600, premium: 1200, hotelPrice: 600 },
      kaza: { budget: 500, mid: 700, premium: 1400, homestayPrice: 700 }
    },

    transportFares: {
      volvoRoundTrip: 1200,
      xpulseRentalPerPerson: 1950,
      xpulseFuelPerPerson: 1400,
      scootyRentalPerPerson: 500,
      scootyFuelPerPerson: 900
    }
  },

  plan3: { // 2 Persons Express Variant (No Manali stay — transit directly)
    budgetTotal: 7300,
    transportCategory: 4550, // Volvo bus (₹1200) + Xpulse rental (₹1950) + Xpulse fuel (₹1400)
    accommodationCategory: 1700, // Kaza homestay only (₹850/night × 2 nights)
    foodCategory: 1050, // 3 days @ ₹350/day
    emergencyCategory: 0, // No permits, no emergency buffer

    calcDefaults: {
      transport: 4550,
      stay: 1700,
      food: 1050,
      emergency: 0,
      shopping: 0,
      permits: 0
    },

    stays: {
      kaza: { budget: 600, mid: 850, premium: 1800, homestayPrice: 850 }
    },

    transportFares: {
      volvoRoundTrip: 1200,
      xpulseRentalPerPerson: 1950,
      xpulseFuelPerPerson: 1400,
      scootyRentalPerPerson: 0,
      scootyFuelPerPerson: 0
    }
  }
};
