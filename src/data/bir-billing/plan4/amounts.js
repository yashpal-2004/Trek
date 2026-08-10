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

const birRoomRateForTwoNights = 1374; // MakeMyTrip rate for 1 room for 2 nights
const roomsCount = 2; // 2 rooms for 2 couples

const totalStayCost = birRoomRateForTwoNights * roomsCount; // 2748
const birStayPerPerson = totalStayCost / groupSize; // 687 per person for both nights

const transportCategory = busFareRoundTrip + scootyRentalPerPerson + fuelPerPerson; // 2250
const accommodationCategory = birStayPerPerson; // 687
const foodCategory = 3 * 350; // 3 days * 350 = 1050

const budgetTotal = transportCategory + accommodationCategory + foodCategory; // 3987

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
