export const annapurnaAmounts = {
  plan1: {
    // Ultra-Budget Route @ ₹9,300 per person
    budgetTotal: 9300,
    transportCategory: 1860,
    accommodationCategory: 1440,
    foodCategory: 3750,
    emergencyCategory: 2250,
    calcDefaults: {
      transport: 1860,
      accommodation: 1440,
      food: 3750,
      permits: 2250
    },
    transportFares: {
      trainDelhiGorakhpur: 760,
      busGorakhpurSonauli: 220,
      busBhairahawaPokhara: 630,
      busPokharaNayapul: 250
    },
    stays: {
      pokhara: { budget: 250, mid: 600, premium: 1200 },
      nayapul: { budget: 200, mid: 450, premium: 800 },
      chhomrong: { budget: 200, mid: 500, premium: 900 },
      bamboo: { budget: 250, mid: 550, premium: 950 },
      abc: { budget: 300, mid: 600, premium: 1000 }
    }
  }
};
