export const vrindavanAmounts = {
  transport: {
    bus: 400,        // Sonipat → Mathura / Vrindavan round trip per person (UPSRTC / Haryana Roadways)
    localAuto: 150,  // E-rickshaw / Full reserved Auto split among 4 people (₹600 total / 4)
    misc: 75,        // Bus stand, luggage, toll miscellaneous split
  },
  accommodation: {
    ashram: 300,     // 1 night quad-sharing / 2 double rooms at ashram or dharamshala (₹1,200 total / 4)
  },
  food: {
    meals: 500,      // Vegetarian meals (all meals, 2 days per person)
    snacks: 200,     // Kachori, Peda, Lassi, etc.
  },
  misc: {
    templePrasad: 150,   // Shared family/group offerings at temples
    mathurapeda: 150,    // Famous Mathura Peda box
    shopping: 250,       // Souvenirs & personal items
  },
  get budgetTotal() {
    return (
      this.transport.bus +
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
