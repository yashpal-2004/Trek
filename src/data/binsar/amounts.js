export const binsarAmounts = {
  budgetTotal: 1800,
  transportCategory: 550, // General Unreserved Train (Old Delhi -> Kathgodam ₹110 x 2) + Local Share Jeeps (Kathgodam -> Almora -> Binsar ₹160 x 2)
  accommodationCategory: 500, // 2 Nights ultra-budget village homestay / dorm bed near Ayarpani (₹250/night)
  foodCategory: 550, // 3 Days local dhabas & tea/maggi (₹180/day)
  emergencyCategory: 200, // Sanctuary entry permit (₹200)

  calcDefaults: {
    transport: 550,
    stay: 500,
    food: 550,
    emergency: 0,
    shopping: 0,
    permits: 200
  },

  stays: {
    binsar: { budget: 250, mid: 500, premium: 1000, hotelPrice: 250 }
  },

  transportFares: {
    generalTrainDelhiKathgodam: 110,
    sharedJeepKathgodamAlmora: 100,
    sharedJeepAlmoraBinsar: 60,
    sanctuaryEntry: 200
  }
};



