export const ladakhAmounts = {
  plan1: { // Via Srinagar first, return via Manali
    budgetTotal: 18500,
    transportCategory: 8500, // Fuel & maintenance
    accommodationCategory: 5400,
    foodCategory: 4000,
    emergencyCategory: 600,

    calcDefaults: {
      transport: 8500,
      stay: 5400,
      food: 4000,
      emergency: 300,
      shopping: 200,
      permits: 100
    },

    stays: {
      patnitop: { budget: 400, mid: 800, premium: 1500, hotelPrice: 500 },
      srinagar: { budget: 500, mid: 900, premium: 1800, hotelPrice: 600 },
      kargil: { budget: 500, mid: 900, premium: 1600, hotelPrice: 600 },
      leh: { budget: 500, mid: 1000, premium: 2000, hotelPrice: 600 },
      nubra: { budget: 600, mid: 1200, premium: 2200, homestayPrice: 700 },
      pangong: { budget: 700, mid: 1400, premium: 2500, campPrice: 800 },
      jispa: { budget: 600, mid: 1200, premium: 2000, campPrice: 700 },
      manali: { budget: 500, mid: 900, premium: 1800, hotelPrice: 500 }
    },

    transportFares: {
      scootyFuelTotal: 7500,
      scootyServiceCheck: 1000,
      innerLinePermit: 600
    }
  },

  plan2: { // Via Manali first, return via Srinagar
    budgetTotal: 18900,
    transportCategory: 8900, // Slightly higher fuel over high passes
    accommodationCategory: 5400,
    foodCategory: 4000,
    emergencyCategory: 600,

    calcDefaults: {
      transport: 8900,
      stay: 5400,
      food: 4000,
      emergency: 300,
      shopping: 200,
      permits: 100
    },

    stays: {
      manali: { budget: 500, mid: 900, premium: 1800, hotelPrice: 500 },
      jispa: { budget: 600, mid: 1200, premium: 2000, campPrice: 700 },
      sarchu: { budget: 600, mid: 1200, premium: 2000, campPrice: 700 },
      leh: { budget: 500, mid: 1000, premium: 2000, hotelPrice: 600 },
      nubra: { budget: 600, mid: 1200, premium: 2200, homestayPrice: 700 },
      pangong: { budget: 700, mid: 1400, premium: 2500, campPrice: 800 },
      kargil: { budget: 500, mid: 900, premium: 1600, hotelPrice: 600 },
      srinagar: { budget: 500, mid: 900, premium: 1800, hotelPrice: 600 }
    },

    transportFares: {
      scootyFuelTotal: 7900,
      scootyServiceCheck: 1000,
      innerLinePermit: 600
    }
  }
};
