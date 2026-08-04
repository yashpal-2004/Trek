export const jibhiAmounts = {
  budgetTotal: 4950,
  transportCategory: 2100,
  accommodationCategory: 1800,
  foodCategory: 1050,

  calcDefaults: {
    transport: 2100,
    stay: 1800,
    food: 1050,
    emergency: 0,
    shopping: 0,
    permits: 0
  },

  stays: {
    jibhi: { budget: 900, mid: 1400, premium: 2500, hostelPrice: 900 }
  },

  transportFares: {
    sonipatToAut: 600,
    autToJibhiBus: 100,
    jibhiToAutBus: 100,
    autToSonipat: 600,
    scootyRental: 500, // per day per scooty (₹250 per person when shared)
    scootyFuel: 200 // per person share
  }
};
