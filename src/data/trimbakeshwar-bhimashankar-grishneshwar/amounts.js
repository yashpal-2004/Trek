export const maharashtraAmounts = {
  transportFares: {
    delhiToNashikTrain: 850,
    nashikToTrimbakTaxi: 100,
    nashikToAurangabadBus: 300,
    aurangabadToGrishneshwarTaxi: 100,
    aurangabadToPuneBus: 450,
    puneToBhimashankarBus: 250,
    puneToDelhiTrain: 950
  },
  stays: {
    trimbak: { budget: 400, mid: 800, premium: 1500, hotelPrice: 500 },
    aurangabad: { budget: 500, mid: 1000, premium: 1800, hotelPrice: 600 },
    bhimashankar: { budget: 400, mid: 750, premium: 1400, hotelPrice: 500 }
  },
  dailyFoodBudget: 350,
  foodDays: 5,
  miscellaneous: 500,
  get transportTotal() {
    return Object.values(this.transportFares).reduce((a, b) => a + b, 0);
  },
  get stayTotal() {
    return this.stays.trimbak.hotelPrice + this.stays.aurangabad.hotelPrice + this.stays.bhimashankar.hotelPrice;
  },
  get foodTotal() {
    return this.dailyFoodBudget * this.foodDays;
  },
  get budgetTotal() {
    return this.transportTotal + this.stayTotal + this.foodTotal + this.miscellaneous;
  }
};
