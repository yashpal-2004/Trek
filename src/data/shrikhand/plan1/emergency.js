export const emergencyContacts = [
  { id: 1, name: "Himachal Pradesh Police Emergency", number: "100", location: "Himachal Pradesh", type: "Police", available: "24/7" },
  { id: 2, name: "Mountain Rescue — Kullu District", number: "01902-222340", location: "Kullu", type: "Rescue", available: "Yatra Season" },
  { id: 3, name: "Rampur District Hospital", number: "01782-233060", location: "Rampur Bushahr", type: "Hospital", available: "24/7" },
  { id: 4, name: "Singhad Medical Checkpost", number: "Contact via Kullu Admin", location: "Singhad", type: "Medical", available: "Yatra Season" },
  { id: 5, name: "HP Tourism Helpline", number: "0177-2652384", location: "Shimla HQ", type: "Tourism", available: "9 AM–5 PM" },
  { id: 6, name: "Himachal Pradesh Ambulance", number: "108", location: "Himachal Pradesh", type: "Ambulance", available: "24/7" },
];

export const emergencyProtocols = [
  { id: 1, title: "Altitude Sickness (AMS)", steps: ["Stop ascending immediately", "Descend at least 500m", "Administer oxygen if available", "Give Diamox 250mg if conscious", "Contact medical camp at Singhad / Bhim Dwar", "Do not leave the patient alone"], icon: "AlertTriangle", priority: "critical" },
  { id: 2, title: "Hypothermia", steps: ["Move to shelter immediately", "Remove wet clothing", "Wrap in sleeping bag / emergency blanket", "Give warm (not hot) sweet drinks if conscious", "Do not massage limbs", "Descend for medical help"], icon: "Thermometer", priority: "critical" },
  { id: 3, title: "Injury / Fall on Trail", steps: ["Do not move patient if spinal injury suspected", "Apply pressure to bleeding wounds", "Stabilize fractures with available material", "Signal for help with whistle (6 blasts)", "Send one person to Singhad or Bhim Dwar camp for rescue"], icon: "Bandage", priority: "high" },
  { id: 4, title: "Lost on Trail", steps: ["Stay calm and stay in place", "Use whistle (6 blasts = distress)", "Look for trail markers and yatra pilgrims", "Descend the way you came if lost above Bhim Dwar", "Do not attempt new routes in poor visibility"], icon: "MapPin", priority: "high" },
  { id: 5, title: "Lightning / Severe Storm", steps: ["Descend below ridgeline immediately", "Avoid lone trees and metallic equipment", "Crouch low with feet together — do not lie flat", "Avoid Kali Ghati and exposed ridges during storms", "Wait out storms in a hollow or cave below treeline"], icon: "Zap", priority: "high" },
];
