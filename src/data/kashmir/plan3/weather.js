export const weather = {
  month: "October 2027",
  season: "Autumn / Cool Alpine",
  monsoonWarning: "Autumn in Kashmir features golden Chinar leaves and clear sunny skies. Daytime temperatures are pleasant (15°C to 22°C), but nights drop down to 4°C–8°C. Carry warm thermal layers and a light windcheater jacket.",
  locations: [
    { name: "Srinagar (Dal Lake)", temp: { min: 8, max: 23 }, rain: 10, humidity: 55, sunrise: "06:28 AM", wind: "8 km/h" },
    { name: "Gulmarg Meadows", temp: { min: 3, max: 14 }, rain: 20, humidity: 62, sunrise: "06:30 AM", wind: "14 km/h" },
    { name: "Pahalgam Valley", temp: { min: 4, max: 17 }, rain: 15, humidity: 58, sunrise: "06:29 AM", wind: "10 km/h" }
  ],
  tips: [
    "Dress in warm layers as temperatures fluctuate between sun and shade.",
    "Carry moisturizer and lip balm for dry mountain weather.",
    "Keep cash handy as local buses do not accept online payments."
  ]
};

export const safety = [
  { id: 1, title: "Postpaid SIM Requirement", icon: "Phone", description: "Prepaid SIMs from outside J&K do not work. Ensure you carry a Jio or Airtel postpaid SIM.", tips: ["Activate postpaid SIM before travel", "Keep emergency contact numbers written on paper"] },
  { id: 2, title: "General Train Platform Caution", icon: "Shield", description: "Unreserved general coaches are crowded at boarding stations.", tips: ["Reach Delhi / Jammu platforms 1 hour prior to departure", "Keep money and mobile phones in front pockets", "Chain bags under lower berths"] }
];

export default weather;
