export const jibhiAmounts = {
  budgetTotal: 4650,
  transportCategory: 2700,
  accommodationCategory: 900,
  foodCategory: 1050,

  calcDefaults: {
    transport: 2700,
    stay: 900,
    food: 1050,
    emergency: 0,
    shopping: 0,
    permits: 0
  },

  stays: {
    jibhi: { budget: 450, mid: 950, premium: 1800, hostelPrice: 450 }
  },

  transportFares: {
    sonipatToAut: 600,
    autToJibhiBus: 100, // cheap local bus
    jibhiToAutBus: 100,
    autToSonipat: 600,
    scootyRental: 500, // per day per scooty (₹1,000 for 2 days, solo)
    scootyFuel: 300 // solo fuel
  }
};
