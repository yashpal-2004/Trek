import { weather as weather1, safety as safety1 } from "./rudranath/plan1/weather";
import { weather as weather2, safety as safety2 } from "./rudranath/plan2/weather";
import { weather as weatherSikkim, safety as safetySikkim } from "./sikkim/weather";
import { weather as weatherYulla1, safety as safetyYulla1 } from "./yulla/plan1/weather";
import { weather as weatherYulla2, safety as safetyYulla2 } from "./yulla/plan2/weather";
import { weather as weatherHemkund, safety as safetyHemkund } from "./hemkund/weather";
import { weather as weatherLadakh1, safety as safetyLadakh1 } from "./ladakh/plan1/weather";
import { weather as weatherLadakh2, safety as safetyLadakh2 } from "./ladakh/plan2/weather";
import { weather as weatherSpiti1, safety as safetySpiti1 } from "./spiti/plan1/weather";
import { weather as weatherSpiti2, safety as safetySpiti2 } from "./spiti/plan2/weather";
import { weather as weatherSpiti3, safety as safetySpiti3 } from "./spiti/plan3/weather";
import { weather as weatherAnnapurna1, safety as safetyAnnapurna1 } from "./annapurna/plan1/weather";
import { weather as weatherShrikhand1, safety as safetyShrikhand1, networkCoverage as networkCoverageShrikhand1 } from "./shrikhand/plan1/weather";
import { weather as weatherShrikhand2, safety as safetyShrikhand2, networkCoverage as networkCoverageShrikhand2 } from "./shrikhand/plan2/weather";
import { weather as weatherHampta1, safety as safetyHampta1, networkCoverage as networkCoverageHampta1 } from "./hampta/plan1/weather";
import { weather as weatherHampta2, safety as safetyHampta2, networkCoverage as networkCoverageHampta2 } from "./hampta/plan2/weather";
import { weather as weatherMadhyamaheshwar1, safety as safetyMadhyamaheshwar1 } from "./madhyamaheshwar/plan1/weather";
import { weather as weatherMadhyamaheshwar2, safety as safetyMadhyamaheshwar2 } from "./madhyamaheshwar/plan2/weather";
import { weather as weatherKedarkantha, safety as safetyKedarkantha } from "./kedarkantha/weather";
import { createDynamicProxy, getActiveTripKey } from "./proxyHelper";

export const weather = createDynamicProxy(() => weather1, () => weather2, () => weatherSikkim, () => weatherYulla1, () => weatherYulla2, () => weatherHemkund, () => weatherLadakh1, () => weatherLadakh2, () => weatherSpiti1, () => weatherSpiti2, () => weatherAnnapurna1, () => weatherShrikhand1, () => weatherShrikhand2, () => weatherHampta1, () => weatherHampta2, () => weatherSpiti3, () => weatherMadhyamaheshwar1, () => weatherMadhyamaheshwar2, () => weatherKedarkantha);
export const safety = createDynamicProxy(() => safety1, () => safety2, () => safetySikkim, () => safetyYulla1, () => safetyYulla2, () => safetyHemkund, () => safetyLadakh1, () => safetyLadakh2, () => safetySpiti1, () => safetySpiti2, () => safetyAnnapurna1, () => safetyShrikhand1, () => safetyShrikhand2, () => safetyHampta1, () => safetyHampta2, () => safetySpiti3, () => safetyMadhyamaheshwar1, () => safetyMadhyamaheshwar2, () => safetyKedarkantha, true);

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

const networkCoverageSpiti = [
  { place: "Manali", signal: "Excellent", level: 4, carriers: "All networks", note: "Full 4G/5G coverage throughout the town" },
  { place: "Atal Tunnel / Lahaul", signal: "Good", level: 3, carriers: "Jio, Airtel, BSNL", note: "4G works near South & North portals" },
  { place: "Batal / Kunzum Pass", signal: "No Network", level: 0, carriers: "None", note: "Absolute zero signal. Inform contacts beforehand" },
  { place: "Kaza Base", signal: "Good", level: 3, carriers: "Jio, BSNL", note: "4G in Kaza town, drops on high village climbs" },
  { place: "Chandratal Lake", signal: "No Network", level: 0, carriers: "None", note: "No cellular coverage around the lake area" }
];

const networkCoverageAnnapurna = [
  { place: "Pokhara Lakeside", signal: "Excellent", level: 4, carriers: "Ncell, Nepal Telecom (NTC)", note: "Full 4G/5G in Pokhara town" },
  { place: "Nayapul / Ghandruk", signal: "Good", level: 3, carriers: "Ncell, NTC", note: "Good 4G signal in Ghandruk and Chhomrong" },
  { place: "Chhomrong / Sinuwa", signal: "Moderate", level: 2, carriers: "NTC", note: "3G/4G available at teahouses" },
  { place: "Deurali / MBC / ABC", signal: "No Network", level: 0, carriers: "Teahouse Wi-Fi only", note: "Zero cellular network. Teahouses offer paid Wi-Fi (NPR 200-300)" }
];

const networkCoverageMadhyamaheshwar = [
  { place: "Rishikesh", signal: "Excellent", level: 4, carriers: "All networks", note: "Full 4G/5G coverage throughout the city" },
  { place: "Ukhimath", signal: "Good", level: 3, carriers: "Jio, Airtel, Vi", note: "4G coverage available in the town center" },
  { place: "Ransi Village", signal: "Weak", level: 1, carriers: "Jio, BSNL (spots only)", note: "Highly intermittent signal. Download maps offline" },
  { place: "Madhyamaheshwar", signal: "No Network", level: 0, carriers: "None", note: "Complete dead zone. Inform family before trekking" }
];

const networkCoverageKedarkantha = [
  { place: "Dehradun", signal: "Excellent", level: 4, carriers: "All networks", note: "Full 4G/5G coverage throughout the city" },
  { place: "Sankri", signal: "Weak", level: 1, carriers: "Jio, BSNL (spots only)", note: "Highly intermittent. Finish calls here" },
  { place: "Juda Ka Talab", signal: "No Network", level: 0, carriers: "None", note: "Complete dead zone. Inform contacts beforehand" }
];

export const networkCoverage = createDynamicProxy(() => networkCoverageGarhwal, () => networkCoverageGarhwal, () => networkCoverageSikkim, () => networkCoverageYulla, () => networkCoverageYulla, () => networkCoverageGarhwal, () => networkCoverageGarhwal, () => networkCoverageGarhwal, () => networkCoverageSpiti, () => networkCoverageSpiti, () => networkCoverageAnnapurna, () => networkCoverageShrikhand1, () => networkCoverageShrikhand2, () => networkCoverageHampta1, () => networkCoverageHampta2, () => networkCoverageSpiti, () => networkCoverageMadhyamaheshwar, () => networkCoverageMadhyamaheshwar, () => networkCoverageKedarkantha, true);
