export const kashmirPlan2Amounts = {
  budgetTotal: 9603,
  transportCategory: 4750, // Train (₹900) + Transit Cabs (₹900) + DEMU (₹100) + Bike Rent (₹2250) + Fuel (₹600)
  accommodationCategory: 2400, // 4 Nights double-sharing stay (Houseboat + Hotel)
  foodCategory: 1500, // 5 Days food @ ₹300/day
  emergencyCategory: 953, // Activities & entries + Jio Postpaid SIM (₹353)

  calcDefaults: {
    transport: 4750,
    stay: 2400,
    food: 1500,
    emergency: 953,
    shopping: 0,
    permits: 0
  },

  stays: {
    srinagar: { budget: 800, mid: 1200, premium: 2500, hotelPrice: 1200 }
  },

  transportFares: {
    trainRoundTrip: 900,
    jammuBanihalCab: 900,
    valleyDemuTrain: 100,
    bikeRentalPerPerson: 2250,
    bikeFuelPerPerson: 600,
    jioPostpaidSIM: 353
  }
};
