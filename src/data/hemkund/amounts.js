export const hemkundAmounts = {
  budgetTotal: 7800,
  transportCategory: 2600,
  accommodationCategory: 1800,
  foodCategory: 2800,
  emergencyCategory: 600,

  calcDefaults: {
    transport: 2600,
    stay: 1800,
    food: 2800,
    emergency: 300,
    shopping: 200,
    permits: 100
  },

  stays: {
    haridwar: { budget: 400, mid: 800, premium: 1500, hotelPrice: 500 },
    govindghat: { budget: 500, mid: 900, premium: 1600, hotelPrice: 500 },
    ghangaria: { budget: 600, mid: 1200, premium: 2000, hotelPrice: 800 }
  },

  transportFares: {
    delhiToHaridwar: 450,
    haridwarToGovindghat: 750,
    sharedJeepPulna: 50,
    govindghatToHaridwar: 750,
    haridwarToDelhi: 450,
    mulePorterOptional: 1000
  }
};
