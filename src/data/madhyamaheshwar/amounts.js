export const madhyamaheshwarAmounts = {
  plan1: {
    budgetTotal: 5850,
    transportCategory: 2600,
    accommodationCategory: 1500,
    foodCategory: 1750,

    calcDefaults: {
      transport: 2600,
      stay: 1500,
      food: 1750,
      emergency: 0,
      shopping: 0,
      permits: 0
    },

    stays: {
      ukhimath: { budget: 400, mid: 800, premium: 1500, hotelPrice: 600 },
      ransi: { budget: 400, mid: 700, premium: 1200, hotelPrice: 500 },
      madmaheshwar: { budget: 500, mid: 800, premium: 1200, hotelPrice: 600 }
    },

    transportFares: {
      delhiToRishikesh: 400,
      rishikeshToUkhimath: 700,
      ukhimathToRansi: 150,
      ransiToUkhimath: 150,
      ukhimathToRishikesh: 700,
      rishikeshToDelhi: 400,
      mulePorterOptional: 1200
    }
  },

  plan2: {
    budgetTotal: 8600,
    transportCategory: 2600,
    accommodationCategory: 3000,
    foodCategory: 2800,

    calcDefaults: {
      transport: 2600,
      stay: 3000,
      food: 2800,
      emergency: 0,
      shopping: 0,
      permits: 200
    },

    stays: {
      gaurikund: { budget: 400, mid: 800, premium: 1500, hotelPrice: 500 },
      kedarnath: { budget: 600, mid: 1000, premium: 2000, dharamshalaPrice: 600 },
      ukhimath: { budget: 400, mid: 800, premium: 1500, hotelPrice: 600 },
      ransi: { budget: 400, mid: 700, premium: 1200, hotelPrice: 500 },
      madmaheshwar: { budget: 500, mid: 800, premium: 1200, hotelPrice: 600 }
    },

    transportFares: {
      delhiToRishikesh: 400,
      rishikeshToGaurikund: 600,
      gaurikundToUkhimath: 400,
      ukhimathToRansi: 150,
      ransiToUkhimath: 150,
      ukhimathToRishikesh: 700,
      rishikeshToDelhi: 400
    }
  }
};
