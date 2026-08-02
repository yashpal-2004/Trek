export const kedarkanthaAmounts = {
  budgetTotal: 6350,
  transportCategory: 1600,
  accommodationCategory: 2800,
  foodCategory: 1750,

  calcDefaults: {
    transport: 1600,
    stay: 2800,
    food: 1750,
    emergency: 0,
    shopping: 0,
    permits: 200
  },

  stays: {
    sankri: { budget: 400, mid: 800, premium: 1500, hotelPrice: 600, zostelPrice: 499 },
    judaKaTalab: { budget: 1000, mid: 1200, premium: 1800, campPrice: 1000 },
    hargaon: { budget: 1000, mid: 1200, premium: 1800, campPrice: 1000 }
  },

  transportFares: {
    delhiToDehradun: 400,
    dehradunToSankri: 400,
    sankriToDehradun: 400,
    dehradunToDelhi: 400,
    microspikesRental: 200
  }
};
