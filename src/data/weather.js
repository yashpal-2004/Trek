import { weather as weatherNepal1, safety as safetyNepal1 } from "./nepal/plan1/weather";
import { weather as weatherNepal2, safety as safetyNepal2 } from "./nepal/plan2/weather";
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
import { weather as weatherBirBillingPlan1, safety as safetyBirBillingPlan1 } from "./bir-billing/plan1/weather";
import { weather as weatherBirBillingPlan2, safety as safetyBirBillingPlan2 } from "./bir-billing/plan2/weather";
import { weather as weatherBirBillingPlan3, safety as safetyBirBillingPlan3 } from "./bir-billing/plan3/weather";
import { weather as weatherBirBillingPlan4, safety as safetyBirBillingPlan4 } from "./bir-billing/plan4/weather";
import { weather as weatherJibhiPlan1, safety as safetyJibhiPlan1 } from "./jibhi/plan1/weather";
import { weather as weatherJibhiPlan2, safety as safetyJibhiPlan2 } from "./jibhi/plan2/weather";
import { weather as weatherUjjain, safety as safetyUjjain } from "./ujjain/weather";
import { weather as weatherAuli, safety as safetyAuli } from "./auli/weather";
import { weather as weatherKashmir, safety as safetyKashmir } from "./kashmir/weather";
import { weather as weatherKashmirPlan2, safety as safetyKashmirPlan2 } from "./kashmir/plan2/weather";
import { weather as weatherLadakh3, safety as safetyLadakh3 } from "./ladakh/plan3/weather";
import { weather as weatherYulla3, safety as safetyYulla3 } from "./yulla/plan3/weather";
import { createDynamicProxy, getActiveTripKey } from "./proxyHelper";
import { weather as weatherVaranasi } from "./varanasi/weather";
import { safety as safetyVaranasi } from "./varanasi/weather";
import { networkCoverage as networkCoverageVaranasi } from "./varanasi/weather";


export const weather = createDynamicProxy(() => weather1, () => weather2, () => weatherSikkim, () => weatherYulla1, () => weatherYulla2, () => weatherHemkund, () => weatherLadakh1, () => weatherLadakh2, () => weatherSpiti1, () => weatherSpiti2, () => weatherAnnapurna1, () => weatherShrikhand1, () => weatherShrikhand2, () => weatherHampta1, () => weatherHampta2, () => weatherSpiti3, () => weatherMadhyamaheshwar1, () => weatherMadhyamaheshwar2, () => weatherKedarkantha, () => weatherBirBillingPlan1, () => weatherBirBillingPlan2, () => weatherBirBillingPlan3, () => weatherBirBillingPlan4, () => weatherJibhiPlan1, () => weatherJibhiPlan2, () => weatherUjjain, () => weatherAuli, () => weatherKashmir, () => weatherLadakh3, () => weatherLadakh4, () => weatherKashmirPlan2, () => weatherNepal1, () => weatherNepal2, () => weatherVaranasi, () => weatherYulla3);
export const safety = createDynamicProxy(() => safety1, () => safety2, () => safetySikkim, () => safetyYulla1, () => safetyYulla2, () => safetyHemkund, () => safetyLadakh1, () => safetyLadakh2, () => safetySpiti1, () => safetySpiti2, () => safetyAnnapurna1, () => safetyShrikhand1, () => safetyShrikhand2, () => safetyHampta1, () => safetyHampta2, () => safetySpiti3, () => safetyMadhyamaheshwar1, () => safetyMadhyamaheshwar2, () => safetyKedarkantha, () => safetyBirBillingPlan1, () => safetyBirBillingPlan2, () => safetyBirBillingPlan3, () => safetyBirBillingPlan4, () => safetyJibhiPlan1, () => safetyJibhiPlan2, () => safetyUjjain, () => safetyAuli, () => safetyKashmir, () => safetyLadakh3, () => safetyLadakh4, () => safetyKashmirPlan2, () => safetyNepal1, () => safetyNepal2, () => safetyVaranasi, () => safetyYulla3, true);

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
  { place: "Sonipat", signal: "Excellent", level: 4, carriers: "All networks", note: "Full 4G/5G coverage — last reliable network before the mountain journey" },
  { place: "Delhi (ISBT Kashmiri Gate)", signal: "Excellent", level: 4, carriers: "All networks", note: "Full 4G/5G. Board bus from here on 20 Aug night" },
  { place: "Manali", signal: "Excellent", level: 4, carriers: "All networks", note: "Full 4G/5G throughout the town — download offline maps before leaving on 21 Aug" },
  { place: "Atal Tunnel / Lahaul", signal: "Good", level: 3, carriers: "Jio, Airtel, BSNL", note: "4G works near South & North portals, drops inside the tunnel" },
  { place: "Gramphu / Chhatru Corridor", signal: "No Network", level: 0, carriers: "None", note: "Network dies completely after Gramphu. Inform family before this stretch" },
  { place: "Batal / Kunzum Pass", signal: "No Network", level: 0, carriers: "None", note: "Absolute zero signal. August nallah crossings ahead — last chance to inform contacts is Manali" },
  { place: "Kaza Base", signal: "Good", level: 3, carriers: "Jio, BSNL", note: "4G in Kaza town, drops on high village climbs above 4,000m" },
  { place: "Key Monastery / Kibber", signal: "Weak", level: 1, carriers: "Jio (spots only)", note: "Highly intermittent on monastery plateau. BSNL tower at Kibber can be weak" },
  { place: "Hikkim / Komic / Langza", signal: "No Network", level: 0, carriers: "None", note: "Above 4,400m — complete dead zone. World's Highest Post Office at Hikkim has no cell signal" },
  { place: "Chandratal Lake", signal: "No Network", level: 0, carriers: "None", note: "No cellular coverage in the lake basin. Last signal was at Batal camp area" },
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

const networkCoverageBirBilling = [
  { place: "Bir Colony", signal: "Excellent", level: 4, carriers: "All networks", note: "Full 4G/5G coverage in the town" },
  { place: "Billing Take-off", signal: "Good", level: 3, carriers: "Jio, Airtel", note: "Good 4G signal on the takeoff ridge" }
];

const networkCoverageJibhi = [
  { place: "Jibhi Valley", signal: "Excellent", level: 4, carriers: "Jio, Airtel", note: "Good 4G/5G signal inside the valley" },
  { place: "Jalori Pass", signal: "Moderate", level: 2, carriers: "Jio", note: "Network can drop on some sections of the Serolsar Lake trail" }
];

const networkCoverageHemkund = [
  { place: "Haridwar", signal: "Excellent", level: 4, carriers: "All networks", note: "Full 4G/5G coverage throughout the city" },
  { place: "Govindghat", signal: "Good", level: 3, carriers: "Jio, Airtel, BSNL", note: "4G available near transit points" },
  { place: "Ghangaria", signal: "Weak", level: 1, carriers: "BSNL, Jio (spots)", note: "Highly intermittent. Mobile data is extremely slow/unusable" },
  { place: "Valley of Flowers", signal: "No Network", level: 0, carriers: "None", note: "Protected national park zone. Complete silence" },
  { place: "Hemkund Sahib", signal: "Weak", level: 1, carriers: "BSNL (intermittent)", note: "Limited connectivity at the top of the lake ridge" }
];

const networkCoverageLadakh = [
  { place: "Leh Town", signal: "Excellent", level: 4, carriers: "Jio, Airtel (Postpaid)", note: "Good 4G/5G coverage in town area. Prepaids from outside J&K do not work" },
  { place: "Nubra Valley", signal: "Moderate", level: 2, carriers: "Jio, Airtel", note: "Connectivity at Hunder & Diskit, drops in remote spots" },
  { place: "Pangong Lake", signal: "Weak", level: 1, carriers: "Jio only", note: "Limited solar-powered towers. Highly unstable" },
  { place: "Khardung La Pass", signal: "Weak", level: 1, carriers: "Jio, Airtel", note: "Intermittent network at the peak" }
];

const networkCoverageSpitiPlan1 = [
  { place: "Sonipat", signal: "Excellent", level: 4, carriers: "All networks", note: "Full 4G/5G coverage — board direct Volvo here" },
  { place: "Manali", signal: "Excellent", level: 4, carriers: "All networks", note: "Full 4G/5G throughout the town — download offline maps before leaving on 21 Aug" },
  { place: "Atal Tunnel / Lahaul", signal: "Good", level: 3, carriers: "Jio, Airtel, BSNL", note: "4G works near South & North portals, drops inside the tunnel" },
  { place: "Gramphu / Chhatru Corridor", signal: "No Network", level: 0, carriers: "None", note: "Network dies completely after Gramphu. Inform family before this stretch" },
  { place: "Batal / Kunzum Pass", signal: "No Network", level: 0, carriers: "None", note: "Absolute zero signal. August nallah crossings ahead — last chance to inform contacts is Manali" },
  { place: "Kaza Base", signal: "Good", level: 3, carriers: "Jio, BSNL", note: "4G in Kaza town, drops on high village climbs above 4,000m" },
  { place: "Key Monastery / Kibber", signal: "Weak", level: 1, carriers: "Jio (spots only)", note: "Highly intermittent on monastery plateau. BSNL tower at Kibber can be weak" },
  { place: "Hikkim / Komic / Langza", signal: "No Network", level: 0, carriers: "None", note: "Above 4,400m — complete dead zone. World's Highest Post Office at Hikkim has no cell signal" },
  { place: "Tabo / Dhankar", signal: "Weak", level: 1, carriers: "BSNL, Jio (spots)", note: "Highly intermittent. Expect no signal inside the ancient mud temples" },
  { place: "Shipki La Pass", signal: "Weak", level: 1, carriers: "Jio, Airtel", note: "Intermittent network at military border post. Prepaids from outside HP may drop signal" },
];

const networkCoverageUjjain = [
  { place: "Sonipat", signal: "Excellent", level: 4, carriers: "All networks", note: "Full 4G/5G coverage — board direct sleeper bus here" },
  { place: "Ujjain", signal: "Excellent", level: 4, carriers: "All networks", note: "Full 4G/5G throughout the city and Mahakal temple premises" }
];

const networkCoverageAuli = [
  { place: "Sonipat", signal: "Excellent", level: 4, carriers: "All networks", note: "Full 4G/5G coverage — board Volvo bus here" },
  { place: "Rishikesh", signal: "Excellent", level: 4, carriers: "All networks", note: "Full 4G/5G throughout the city" },
  { place: "Joshimath", signal: "Good", level: 3, carriers: "Jio, Airtel, BSNL", note: "4G works well in Joshimath town, drops in narrow valleys" },
  { place: "Auli Slopes", signal: "Moderate", level: 2, carriers: "Jio, Airtel", note: "Intermittent signal on the slopes; mobile data is functional in open areas" },
  { place: "Gorson Bugyal", signal: "Weak", level: 1, carriers: "Jio (spots only)", note: "Highly unstable. No BSNL signal. Download maps before trekking" }
];

const networkCoverageKashmir = [
  { place: "Delhi", signal: "Excellent", level: 4, carriers: "All networks", note: "Full 4G/5G coverage — board train here" },
  { place: "Jammu Tawi", signal: "Excellent", level: 4, carriers: "All networks", note: "Full 4G/5G throughout the transit hub" },
  { place: "Banihal", signal: "Good", level: 3, carriers: "Jio, Airtel, BSNL", note: "Good 4G signal at station, drops slightly inside Pir Panjal tunnel" },
  { place: "Srinagar (Dal Lake)", signal: "Excellent", level: 4, carriers: "Jio, Airtel, BSNL", note: "Excellent 4G/5G coverage. Postpaid SIM only works" },
  { place: "Gulmarg Meadows", signal: "Good", level: 3, carriers: "Jio, Airtel", note: "Good signal in meadows, drops to weak/spots at Gondola Phase 2 top" },
  { place: "Pahalgam", signal: "Good", level: 3, carriers: "Jio, Airtel, BSNL", note: "Good 4G coverage in main town area, intermittent along Lidder river track" }
];

export const networkCoverage = createDynamicProxy(() => networkCoverageGarhwal, () => networkCoverageGarhwal, () => networkCoverageSikkim, () => networkCoverageYulla, () => networkCoverageYulla, () => networkCoverageHemkund, () => networkCoverageLadakh, () => networkCoverageLadakh, () => networkCoverageSpitiPlan1, () => networkCoverageSpiti, () => networkCoverageAnnapurna, () => networkCoverageShrikhand1, () => networkCoverageShrikhand2, () => networkCoverageHampta1, () => networkCoverageHampta2, () => networkCoverageSpiti, () => networkCoverageMadhyamaheshwar, () => networkCoverageMadhyamaheshwar, () => networkCoverageKedarkantha, () => networkCoverageBirBilling, () => networkCoverageBirBilling, () => networkCoverageBirBilling, () => networkCoverageBirBilling, () => networkCoverageJibhi, () => networkCoverageJibhi, () => networkCoverageUjjain, () => networkCoverageAuli, () => networkCoverageKashmir, () => networkCoverageLadakh, () => networkCoverageLadakh, () => networkCoverageKashmir, () => networkCoverageAnnapurna, () => networkCoverageAnnapurna, () => networkCoverageVaranasi, () => networkCoverageYulla, true);
