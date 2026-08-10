const busFareRoundTrip = 1200; // ₹600 each way per person straight to Dharamshala
const scootyDays = 3;
const scootyRatePerDay = 500;
const scootiesCount = 2;
const groupSize = 4;
const fuelPerScooty = 600; // Dharamshala-Bir round trip + local McLeod Ganj sightseeing

const totalScootyRental = scootyRatePerDay * scootyDays * scootiesCount; // 3000
const totalFuel = fuelPerScooty * scootiesCount; // 1200

const scootyRentalPerPerson = totalScootyRental / groupSize; // 750
const fuelPerPerson = totalFuel / groupSize; // 300

const dharamshalaRoomRateForOneNight = 580; // ₹580 for 2 persons (₹290 per person)
const birRoomRateForOneNight = 687; // ₹687 for 2 persons (₹343.5 per person)
const roomsCount = 2; // 2 rooms for 2 couples

const totalStayCost = (dharamshalaRoomRateForOneNight + birRoomRateForOneNight) * roomsCount; // 2534
const birStayPerPerson = totalStayCost / groupSize; // 633.5 per person for both nights

const transportCategory = busFareRoundTrip + scootyRentalPerPerson + fuelPerPerson; // 2250
const accommodationCategory = Math.round(birStayPerPerson); // 634
const foodCategory = 3 * 350; // 3 days * 350 = 1050

const budgetTotal = transportCategory + accommodationCategory + foodCategory; // 3934

export const birBillingAmounts = {
  budgetTotal,
  transportCategory,
  accommodationCategory,
  foodCategory,

  calcDefaults: {
    transport: transportCategory,
    stay: accommodationCategory,
    food: foodCategory,
    emergency: 0,
    shopping: 0,
    permits: 0
  },

  stays: {
    bir: { budget: 400, mid: 687, premium: 1200, price: birStayPerPerson }
  },

  transportFares: {
    delhiToBir: 600, // Dharamshala Volvo fare one way
    billingToBirGlider: 0,
    birToDelhi: 600, // Dharamshala Volvo return fare
    scootyRental: scootyRentalPerPerson,
    scootyFuel: fuelPerPerson
  }
};
