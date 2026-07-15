import { weather as weather1, safety as safety1 } from "./garhwal/plan1/weather";
import { weather as weather2, safety as safety2 } from "./garhwal/plan2/weather";
import { weather as weatherSikkim, safety as safetySikkim } from "./sikkim/weather";
import { createDynamicProxy, getActiveTripKey } from "./proxyHelper";

export const weather = createDynamicProxy(() => weather1, () => weather2, () => weatherSikkim);
export const safety = createDynamicProxy(() => safety1, () => safety2, () => safetySikkim, true);

const networkCoverageGarhwal = [
  { place: "Haridwar", signal: "Excellent", level: 4, carriers: "All networks", note: "Full 4G/5G coverage throughout the city" },
  { place: "Gopeshwar", signal: "Good", level: 3, carriers: "Jio, Airtel, Vi", note: "4G in town centre, drops on outskirts" },
  { place: "Sagar Village", signal: "Weak", level: 1, carriers: "BSNL only", note: "Intermittent. Download maps offline before arriving" },
  { place: "Rudranath", signal: "No Network", level: 0, carriers: "None", note: "Complete dead zone. Inform contacts before trekking" },
  { place: "Chopta", signal: "Weak", level: 1, carriers: "BSNL, Jio (spots only)", note: "Signal available at a few high vantage points only" },
  { place: "Rishikesh", signal: "Excellent", level: 4, carriers: "All networks", note: "Full 4G/5G — best spot to sync and backup photos" },
];

const networkCoverageSikkim = [
  { place: "Gangtok", signal: "Excellent", level: 4, carriers: "All networks", note: "Full 4G/5G coverage in the main town area" },
  { place: "Lachen", signal: "Weak", level: 1, carriers: "BSNL only", note: "Intermittent network. Expect outages during power cuts" },
  { place: "Lachung", signal: "Weak", level: 1, carriers: "BSNL only", note: "Intermittent network. Keep family informed beforehand" },
  { place: "Gurudongmar Lake", signal: "No Network", level: 0, carriers: "None", note: "Absolute zero signal. High altitude border zone" },
];

export const networkCoverage = createDynamicProxy(() => networkCoverageGarhwal, () => networkCoverageGarhwal, () => networkCoverageSikkim, true);
