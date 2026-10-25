export const vrindavanAmounts = {
  transport: {
    train: 360,      // Sonipat → Mathura Jn (round trip sleeper/unreserved)
    localAuto: 300,  // E-rickshaw / Tempo within Vrindavan & Mathura
    misc: 100,       // Platform tickets, miscellaneous
  },
  accommodation: {
    ashram: 400,     // 1 night at Vrindavan ashram/dharamshala
  },
  food: {
    meals: 500,      // Vegetarian meals (all meals, 2 days)
    snacks: 200,     // Kachori, Peda, Lassi, etc.
  },
  misc: {
    templePrasad: 200,   // Offerings at temples
    mathurapeda: 150,    // Famous Mathura Peda box
    shopping: 300,       // Rudraksha, souvenirs
  },
  get budgetTotal() {
    return (
      this.transport.train +
      this.transport.localAuto +
      this.transport.misc +
      this.accommodation.ashram +
      this.food.meals +
      this.food.snacks +
      this.misc.templePrasad +
      this.misc.mathurapeda +
      this.misc.shopping
    );
  }
};
