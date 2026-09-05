export const hemkundAmounts = {
  budgetTotal: 7400,
  plan2BudgetTotal: 8800,
  transportCategory: 2600,
  accommodationCategory: 1800,
  foodCategory: 2800,
  emergencyCategory: 300,

  calcDefaults: {
    transport: 2600,
    stay: 1800,
    food: 2800,
    emergency: 0,
    shopping: 0,
    permits: 200
  },

  stays: {
    haridwar: { budget: 400, mid: 800, premium: 1500, hotelPrice: 500 },
    govindghat: { budget: 500, mid: 900, premium: 1600, hotelPrice: 500 },
    ghangaria: { budget: 600, mid: 1200, premium: 2000, hotelPrice: 800 },
    badrinath: { budget: 500, mid: 1000, premium: 1800, hotelPrice: 600 }
  },

  transportFares: {
    delhiToHaridwar: 450,
    haridwarToGovindghat: 750,
    sharedJeepPulna: 50,
    govindghatToBadrinath: 100,
    badrinathToHaridwar: 850,
    govindghatToHaridwar: 750,
    haridwarToDelhi: 450,
    mulePorterOptional: 1000
  }
};
