export const somnathNageshwarAmounts = {
  transportFares: {
    delhiToVeravalTrain: 320, // General Unreserved Class fare (Delhi -> Veraval)
    veravalToSomnathAuto: 20, // Shared E-Rickshaw
    somnathToDwarkaBus: 220, // GSRTC Ordinary / Express Bus
    dwarkaToNageshwarTaxi: 80, // Shared auto/cab for Nageshwar circuit
    dwarkaToBeytDwarkaBoat: 20, // Shared Ferry Boat
    dwarkaToDelhiTrain: 330 // General Unreserved Class fare (Dwarka -> Delhi)
  },
  stays: {
    somnath: { budget: 250, mid: 600, premium: 1200, hotelPrice: 250 }, // Somnath Trust Dharamshala Dormitory / Budget Room
    dwarka: { budget: 250, mid: 600, premium: 1200, hotelPrice: 250 } // Dwarka Dharamshala Dormitory / Budget Single Room
  },
  dailyFoodBudget: 200, // Budget meals (Bhojanalay / Local Thali ₹100 x 2)
  foodDays: 4,
  miscellaneous: 250,
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
