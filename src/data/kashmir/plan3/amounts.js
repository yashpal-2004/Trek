export const kashmirPlan3Amounts = {
  budgetTotal: 5353,
  transportCategory: 2200, // General Train (₹380) + Local HRTC/Shared Cabs (₹1600) + Local DEMU (₹100) + City Autos (₹120)
  accommodationCategory: 1000, // 4 Nights budget dormitory/backpacker hostel stay (₹250/night)
  foodCategory: 1200, // 5 Days food @ ₹240/day (Dhabas & Kandur bakeries)
  emergencyCategory: 953, // Dal Lake Shared Shikara + Entry tickets + Jio SIM (₹353)

  calcDefaults: {
    transport: 2200,
    stay: 1000,
    food: 1200,
    emergency: 953,
    shopping: 0,
    permits: 0
  },

  stays: {
    srinagar: { budget: 250, mid: 500, premium: 1200, hotelPrice: 250 }
  },

  transportFares: {
    generalTrainRoundTrip: 380, // Delhi-Jammu unreserved general coach round trip (₹190 x 2)
    jammuBanihalBusCab: 800, // Shared cab or state transport bus Jammu-Banihal round trip (₹400 x 2)
    valleyDemuTrain: 100, // Banihal-Srinagar DEMU train round trip (₹50 x 2)
    localSharedTransits: 920, // Shared autos & mini buses to Gulmarg/Pahalgam/Local
    jioPostpaidSIM: 353
  }
};
