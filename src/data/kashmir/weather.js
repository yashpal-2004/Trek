export const weather = {
  month: "October 2027",
  season: "Autumn / Mild Cold",
  monsoonWarning: "October is autumn season in Kashmir, featuring beautiful golden Chinar leaves. The weather is dry and sunny during afternoons, but temperatures drop rapidly after sunset. Light woolens and windcheaters are essential for Srinagar, while heavy fleece/jackets are needed for Gulmarg.",
  locations: [
    { name: "Srinagar (Dal Lake)", temp: { min: 8, max: 23 }, rain: 10, humidity: 55, sunrise: "06:28 AM", wind: "8 km/h" },
    { name: "Gulmarg Meadows", temp: { min: 3, max: 14 }, rain: 20, humidity: 62, sunrise: "06:30 AM", wind: "14 km/h" },
    { name: "Pahalgam Valley", temp: { min: 4, max: 17 }, rain: 15, humidity: 58, sunrise: "06:29 AM", wind: "10 km/h" }
  ],
  tips: [
    "Dress in layers as temperature fluctuates significantly between sunny spots and shadow zones.",
    "Carry moisturizer and lip balm as high mountain air can dry your skin.",
    "Gulmarg Gondola top phase can be very cold; carry hand gloves."
  ]
};

export const safety = [
  { id: 1, title: "SIM Connectivity", icon: "Phone", description: "Only postpaid connections function in Kashmir due to local security guidelines.", tips: ["Carry a postpaid SIM (Jio / Airtel)", "Activate roaming beforehand", "Purchase local SIM if needed"] },
  { id: 2, title: "Local Scams", icon: "Shield", description: "Tourists are often overcharged for pony rides and Shikaras at Dal Lake or Gulmarg.", tips: ["Bargain before boarding or hiring", "Verify fixed rates at taxi stands", "Prefer walking in Gulmarg flat meadows"] }
];
export default weather;
