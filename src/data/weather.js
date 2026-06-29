import { weather as weather1, safety as safety1 } from "./plan1/weather";
import { weather as weather2, safety as safety2 } from "./plan2/weather";
import { isPlan2 } from "./proxyHelper";

export const weather = isPlan2 ? weather2 : weather1;
export const safety = isPlan2 ? safety2 : safety1;

// Shared for both plans — same geographical coverage
export const networkCoverage = [
  {
    place: "Haridwar",
    signal: "Excellent",
    level: 4,
    carriers: "All networks",
    note: "Full 4G/5G coverage throughout the city",
  },
  {
    place: "Gopeshwar",
    signal: "Good",
    level: 3,
    carriers: "Jio, Airtel, Vi",
    note: "4G in town centre, drops on outskirts",
  },
  {
    place: "Sagar Village",
    signal: "Weak",
    level: 1,
    carriers: "BSNL only",
    note: "Intermittent. Download maps offline before arriving",
  },
  {
    place: "Rudranath",
    signal: "No Network",
    level: 0,
    carriers: "None",
    note: "Complete dead zone. Inform contacts before trekking",
  },
  {
    place: "Chopta",
    signal: "Weak",
    level: 1,
    carriers: "BSNL, Jio (spots only)",
    note: "Signal available at a few high vantage points only",
  },
  {
    place: "Rishikesh",
    signal: "Excellent",
    level: 4,
    carriers: "All networks",
    note: "Full 4G/5G — best spot to sync and backup photos",
  },
];

