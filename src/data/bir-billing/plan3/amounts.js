export const birBillingAmounts = {
  budgetTotal: 6850,
  transportCategory: 2400,
  accommodationCategory: 900,
  foodCategory: 1050,

  calcDefaults: {
    transport: 2400,
    stay: 900,
    food: 1050,
    emergency: 0,
    shopping: 0,
    permits: 2500 // Tandem paragliding flight fee included!
  },

  stays: {
    bir: { budget: 450, mid: 900, premium: 1800, hostelPrice: 450 },
    billing: { budget: 1200, mid: 1500, premium: 2200, campPrice: 1200 }
  },

  transportFares: {
    delhiToBir: 600,
    birToBillingCab: 400, // Cab needed because paragliding down solo leaves scooter stranded
    billingToBirGlider: 0,
    birToDelhi: 600,
    scootyRental: 500,
    scootyFuel: 300
  }
};
