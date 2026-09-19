export const somnathNageshwarAmounts = {
  transportFares: {
    delhiToVeravalTrain: 750,
    veravalToSomnathAuto: 50,
    somnathToDwarkaBus: 350,
    dwarkaToNageshwarTaxi: 150,
    dwarkaToBeytDwarkaBoat: 50,
    dwarkaToDelhiTrain: 750
  },
  stays: {
    somnath: { budget: 400, mid: 800, premium: 1500, hotelPrice: 500 },
    dwarka: { budget: 400, mid: 800, premium: 1500, hotelPrice: 500 }
  },
  dailyFoodBudget: 300,
  foodDays: 4,
  miscellaneous: 400,
  get transportTotal() {
    return Object.values(this.transportFares).reduce((a, b) => a + b, 0);
  },
  get stayTotal() {
    return this.stays.somnath.hotelPrice + (this.stays.dwarka.hotelPrice * 2);
  },
  get foodTotal() {
    return this.dailyFoodBudget * this.foodDays;
  },
  get budgetTotal() {
    return this.transportTotal + this.stayTotal + this.foodTotal + this.miscellaneous;
  }
};
