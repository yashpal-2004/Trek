import { weather as weather1, safety as safety1 } from "./garhwal/plan1/weather";
import { weather as weather2, safety as safety2 } from "./garhwal/plan2/weather";
import { weather as weatherSikkim, safety as safetySikkim } from "./sikkim/weather";
import { weather as weatherYulla1, safety as safetyYulla1 } from "./yulla/plan1/weather";
import { weather as weatherYulla2, safety as safetyYulla2 } from "./yulla/plan2/weather";
import { weatherData as weatherHemkund } from "./hemkund/weather";
import { createDynamicProxy, getActiveTripKey } from "./proxyHelper";

export const weather = createDynamicProxy(() => weather1, () => weather2, () => weatherSikkim, () => weatherYulla1, () => weatherYulla2, () => weatherHemkund);
export const safety = createDynamicProxy(() => safety1, () => safety2, () => safetySikkim, () => safetyYulla1, () => safetyYulla2, () => weatherHemkund, true);

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

const networkCoverageYulla = [
  { place: "Shimla", signal: "Excellent", level: 4, carriers: "All networks", note: "Full 4G/5G coverage throughout the city" },
  { place: "Tapri", signal: "Good", level: 3, carriers: "Jio, Airtel, BSNL", note: "4G coverage available in the town center" },
  { place: "Yulla Khas", signal: "Weak", level: 1, carriers: "Jio, BSNL (spots only)", note: "Highly intermittent. Jio works in some parts of the village" },
  { place: "Base Camp & Lake", signal: "No Network", level: 0, carriers: "None", note: "Absolute zero coverage. Inform family in advance" },
];

export const networkCoverage = createDynamicProxy(() => networkCoverageGarhwal, () => networkCoverageGarhwal, () => networkCoverageSikkim, () => networkCoverageYulla, () => networkCoverageYulla, true);
