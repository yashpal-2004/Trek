export const emergencyContacts = [
  { id: 1, name: "Himachal Pradesh Police Emergency", number: "100", location: "Himachal Pradesh", type: "Police", available: "24/7" },
  { id: 2, name: "Mountain Rescue — Kullu District", number: "01902-222340", location: "Kullu", type: "Rescue", available: "Yatra Season" },
  { id: 3, name: "Rampur District Hospital", number: "01782-233060", location: "Rampur Bushahr", type: "Hospital", available: "24/7" },
  { id: 4, name: "Singhad Medical Checkpost", number: "Contact via Kullu Admin", location: "Singhad", type: "Medical", available: "Yatra Season" },
  { id: 5, name: "HP Tourism Helpline", number: "0177-2652384", location: "Shimla HQ", type: "Tourism", available: "9 AM–5 PM" },
  { id: 6, name: "Himachal Pradesh Ambulance", number: "108", location: "Himachal Pradesh", type: "Ambulance", available: "24/7" },
];

export const emergencyProtocols = [
  { id: 1, title: "Altitude Sickness (AMS) — Critical for Plan 2", steps: ["Stop ascending immediately", "Descend at least 500m", "Administer oxygen — carry extra in Plan 2", "Give Diamox 250mg if conscious", "Contact medical camp at Singhad or Bhim Dwar", "Do not leave patient alone"], icon: "AlertTriangle", priority: "critical" },
  { id: 2, title: "Exhaustion on Long Summit Day", steps: ["Stop and rest immediately", "Eat and hydrate with ORS", "If above Nain Sarovar, descend to Bhim Dwar — do not attempt summit", "Signal other pilgrims for help", "If unable to walk, contact camp at Bhim Dwar"], icon: "Zap", priority: "critical" },
  { id: 3, title: "Hypothermia", steps: ["Move to shelter immediately", "Remove wet clothing", "Wrap in sleeping bag", "Give warm sweet drinks if conscious", "Descend for medical help"], icon: "Thermometer", priority: "critical" },
  { id: 4, title: "Injury / Fall", steps: ["Do not move if spinal injury suspected", "Apply pressure to bleeding wounds", "Signal with whistle (6 blasts)", "Send person to Bhim Dwar or Singhad camp"], icon: "Bandage", priority: "high" },
  { id: 5, title: "Caught in Storm During Summit Push", steps: ["Abort summit immediately", "Descend to Bhim Dwar", "Do not stay exposed on ridge or boulder fields", "Seek shelter in hollows below treeline"], icon: "Zap", priority: "high" },
];
