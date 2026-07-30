export const yullaAmounts = {
  plan1: {
    budgetTotal: 8200,
    transportCategory: 3300,
    accommodationCategory: 2200,
    foodCategory: 2600,
    emergencyCategory: 300,

    calcDefaults: {
      transport: 3300,
      stay: 2200,
      food: 2600,
      emergency: 0,
      shopping: 0,
      permits: 100
    },

    stays: {
      yullaKhas: { budget: 400, mid: 800, premium: 1500, homestayPrice: 600, roomPrice: 800 },
      shimla: { budget: 500, mid: 800, premium: 1500, hotelPrice: 500 }
    },

    transportFares: {
      delhiToShimla: 600,
      shimlaToTapri: 550,
      tapriToYullaKhas: 100,
      yullaKhasToTapri: 100,
      tapriToShimla: 550,
      shimlaToDelhi: 600,
      scootyRent: 500,
      scootyFuel: 300
    }
  },

  plan2: {
    budgetTotal: 7500,
    transportCategory: 3100,
    accommodationCategory: 1700,
    foodCategory: 2600,
    emergencyCategory: 300,

    calcDefaults: {
      transport: 3100,
      stay: 1700,
      food: 2600,
      emergency: 0,
      shopping: 0,
      permits: 100
    },

    stays: {
      yullaKhas: { budget: 400, mid: 800, premium: 1500, homestayPrice: 600, roomPrice: 800 },
      shimla: { budget: 500, mid: 800, premium: 1500, hotelPrice: 500 }
    },

    transportFares: {
      delhiToShimla: 600,
      shimlaToDelhi: 600,
      scootyRent: 1000,
      scootyFuel: 900
    }
  }
};
