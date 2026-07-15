export const garhwalAmounts = {
  plan1: {
    budgetTotal: 9000,
    transportCategory: 1860,
    accommodationCategory: 3300,
    foodCategory: 2190,
    emergencyCategory: 1550,
    
    calcDefaults: {
      transport: 1860,
      stay: 3300,
      food: 2190,
      emergency: 1000,
      shopping: 300,
      permits: 250
    },

    stays: {
      haridwar: { budget: 300, mid: 600, premium: 1200, hotelPrice: 1200, zostelPrice: 499, retiringPrice: 300 },
      sagar: { budget: 400, mid: 500, premium: 1000, hotelPrice: 1000, zostelPrice: 500, homestayPrice: 400 },
      rudranath: { budget: 0, mid: 0, premium: 0, dharamshalaPrice: 0 },
      gopeshwar: { budget: 400, mid: 700, premium: 1500, hotelPrice: 1500, zostelPrice: 700, retiringPrice: 400 },
      helang: { budget: 300, mid: 500, premium: 1000, homestayPrice: 500 },
      kalpeshwar: { budget: 0, mid: 0, premium: 0, homestayPrice: 0 },
      sari: { budget: 400, mid: 600, premium: 1200, homestayPrice: 600 },
      chopta: { budget: 600, mid: 1000, premium: 2000, campPrice: 1000 },
      kanakChauri: { budget: 400, mid: 600, premium: 1200, homestayPrice: 600 },
      rishikesh: { budget: 500, mid: 1000, premium: 2500, zostelPrice: 600 }
    },

    transportFares: {
      hisarToHaridwar: 150,
      haridwarToRishikesh: 100,
      rishikeshToRudraprayag: 350,
      rudraprayagToGopeshwar: 250,
      gopeshwarToSagar: 80,
      sagarToRudranath: 0,
      rudranathToSagar: 0,
      sagarToGopeshwar: 80,
      gopeshwarToHelang: 150,
      helangToKalpeshwar: 100,
      kalpeshwarToSari: 500,
      sariToDeoriaTal: 0,
      sariToChopta: 100,
      choptaToTungnath: 0,
      tungnathToChandrashila: 0,
      choptaToKanakChauri: 250,
      kanakChauriToKartikSwami: 0,
      kanakChauriToHaridwar: 400,
      haridwarToHisar: 350
    }
  },

  plan2: {
    budgetTotal: 8000,
    transportCategory: 1980,
    accommodationCategory: 2200,
    foodCategory: 1950,
    emergencyCategory: 1470,

    calcDefaults: {
      transport: 1980,
      stay: 2200,
      food: 1950,
      emergency: 1000,
      shopping: 400,
      permits: 200
    },

    stays: {
      haridwar: { budget: 300, mid: 600, premium: 1200, hotelPrice: 1200, zostelPrice: 499, retiringPrice: 300 },
      sagar: { budget: 400, mid: 500, premium: 1000, hotelPrice: 1000, zostelPrice: 500, homestayPrice: 400 },
      rudranath: { budget: 0, mid: 0, premium: 0, dharamshalaPrice: 0 },
      gopeshwar: { budget: 400, mid: 700, premium: 1500, hotelPrice: 1500, zostelPrice: 700, retiringPrice: 400 },
      chopta: { budget: 600, mid: 1000, premium: 2000, campPrice: 1000 },
      kanakChauri: { budget: 400, mid: 600, premium: 1200, homestayPrice: 600 }
    },

    transportFares: {
      hisarToHaridwar: 150,
      haridwarToGopeshwar: 500,
      gopeshwarToSagar: 80,
      sagarToRudranath: 0,
      rudranathToSagar: 0,
      sagarToGopeshwar: 80,
      gopeshwarToChopta: 150,
      choptaToTungnath: 0,
      tungnathToChandrashila: 0,
      choptaToKanakChauri: 250,
      kanakChauriToKartikSwami: 0,
      kanakChauriToHaridwar: 400,
      haridwarToHisar: 350
    }
  }
};
