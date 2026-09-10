export const moonPeakAmounts = {
  budgetTotal: 2950,
  transportCategory: 800, // Delhi-Pathankot General Train (₹180 x 2) + Pathankot-Dharamshala HRTC Bus (₹150 x 2) + Local Auto/Taxi to Dharamkot (₹70 x 2)
  accommodationCategory: 750, // 3 Nights camping / tent stay at Triund & Laka Got (₹250/night avg)
  foodCategory: 1100, // 4 Days basic trail meals (Roti, Dal, Maggi, Tea @ ₹275/day avg)
  emergencyCategory: 300, // Forest permit fee + local guide tip buffer

  calcDefaults: {
    transport: 800,
    stay: 750,
    food: 1100,
    emergency: 300,
    shopping: 0,
    permits: 0
  },

  stays: {
    mcleodganj: { budget: 300, mid: 800, premium: 1800, hotelPrice: 300 }
  },

  transportFares: {
    generalTrainDelhiPathankot: 180,
    hrtcBusPathankotDharamshala: 150,
    localTaxiDharamshalaMcLeod: 70
  }
};
