export const spitiAmounts = {
  plan1: { // 2 Persons Variant — 20 Aug evening bus, no Manali stays, 2 nights Kaza + 1 night Chandratal Camp, 4-day Royal Enfield Himalayan, no scooty
    budgetTotal: 10150,
    transportCategory: 5800, // Volvo bus (₹1200) + Himalayan rental 4 days (₹3000) + fuel (₹1400) + Sonipat-Delhi local (₹200)
    accommodationCategory: 2600, // Kaza stay 2 Nights (₹1700) + Chandratal Camp 1 Night (₹900)
    foodCategory: 1750, // 5 days @ ₹350/day
    emergencyCategory: 0,

    calcDefaults: {
      transport: 5800,
      stay: 2600,
      food: 1750,
      emergency: 0,
      shopping: 0,
      permits: 0
    },

    stays: {
      kaza: { budget: 600, mid: 850, premium: 1800, homestayPrice: 850 },
      chandratal: { budget: 700, mid: 900, premium: 1500, campPrice: 900 }
    },

    transportFares: {
      volvoRoundTrip: 1200,
      bikeRentalPerPerson: 3000,
      bikeFuelPerPerson: 1400,
      sonipatDelhiLocal: 200,
      scootyRentalPerPerson: 0,
      scootyFuelPerPerson: 0
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
