export const birBillingAmounts = {
  budgetTotal: 4050,
  transportCategory: 2100,
  accommodationCategory: 900,
  foodCategory: 1050,

  calcDefaults: {
    transport: 2100,
    stay: 900,
    food: 1050,
    emergency: 0,
    shopping: 0,
    permits: 0 // No paragliding
  },

  stays: {
    bir: { budget: 450, mid: 900, premium: 1800, hostelPrice: 450 },
    billing: { budget: 1100, mid: 1500, premium: 2200, campPrice: 1100 }
  },

  transportFares: {
    delhiToBir: 600,
    billingToBirGlider: 0,
    birToDelhi: 600,
    scootyRental: 500, // full price since solo
    scootyFuel: 400 // full price since solo
  }
};
