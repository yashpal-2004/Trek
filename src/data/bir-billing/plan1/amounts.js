export const birBillingAmounts = {
  budgetTotal: 7250,
  transportCategory: 1600,
  accommodationCategory: 2100,
  foodCategory: 1050,

  calcDefaults: {
    transport: 1600,
    stay: 2100,
    food: 1050,
    emergency: 0,
    shopping: 0,
    permits: 2500 // Paragliding tandem flight activity fee
  },

  stays: {
    bir: { budget: 900, mid: 1200, premium: 1800, hostelPrice: 900 },
    billing: { budget: 1200, mid: 1500, premium: 2200, campPrice: 1200 }
  },

  transportFares: {
    delhiToBir: 600,
    billingToBirGlider: 0, // covered under paragliding activity
    birToDelhi: 600,
    scootyRental: 500, // per day per scooty (₹250 per person when shared)
    scootyFuel: 300 // per day per scooty (₹150 per person when shared)
  }
};
