export const sikkimAmounts = {
  budgetTotal: 6900,
  transportCategory: 2100,
  accommodationCategory: 1000,
  foodCategory: 3800,
  
  calcDefaults: {
    transport: 2100,
    stay: 1000,
    food: 3800,
    emergency: 0,
    shopping: 0,
    permits: 0
  },

  stays: {
    gangtok: { budget: 400, mid: 500, premium: 1000, hotelPrice: 1500, zostelPrice: 599, lodgePrice: 800 },
    lachen: { budget: 0, mid: 0, premium: 0, homestayPrice: 0 },
    lachung: { budget: 0, mid: 0, premium: 0, homestayPrice: 0 }
  },

  transportFares: {
    delhiToNjp: 700,
    njpToGangtok: 350,
    gangtokToLachen: 1900,
    lachenToLachung: 1900,
    lachungToGangtok: 500,
    gangtokToNjp: 350,
    njpToDelhi: 700
  }
};
