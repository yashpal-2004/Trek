import { emergency as emergency1, emergencyTips as emergencyTips1 } from "./rudranath/plan1/emergency";
import { emergency as emergency2, emergencyTips as emergencyTips2 } from "./rudranath/plan2/emergency";
import { emergency as emergencySikkim, emergencyTips as emergencyTipsSikkim } from "./sikkim/emergency";
import { emergency as emergencyYulla1, emergencyTips as emergencyTipsYulla1 } from "./yulla/plan1/emergency";
import { emergency as emergencyYulla2, emergencyTips as emergencyTipsYulla2 } from "./yulla/plan2/emergency";
import { emergencyContacts as emergencyHemkund, emergencyProtocols as emergencyTipsHemkund } from "./hemkund/emergency";
import { emergencyContacts as emergencyLadakh1, emergencyProtocols as emergencyTipsLadakh1 } from "./ladakh/plan1/emergency";
import { emergencyContacts as emergencyLadakh2, emergencyProtocols as emergencyTipsLadakh2 } from "./ladakh/plan2/emergency";
import { emergency as emergencySpiti1, emergencyTips as emergencyTipsSpiti1 } from "./spiti/plan1/emergency";
import { emergency as emergencySpiti2, emergencyTips as emergencyTipsSpiti2 } from "./spiti/plan2/emergency";
import { emergencyContacts as emergencyAnnapurna1, emergencyProtocols as emergencyTipsAnnapurna1 } from "./annapurna/plan1/emergency";
import { emergencyContacts as emergencyShrikhand1, emergencyProtocols as emergencyTipsShrikhand1 } from "./shrikhand/plan1/emergency";
import { emergencyContacts as emergencyShrikhand2, emergencyProtocols as emergencyTipsShrikhand2 } from "./shrikhand/plan2/emergency";
import { emergencyContacts as emergencyHampta1, emergencyProtocols as emergencyTipsHampta1 } from "./hampta/plan1/emergency";
import { emergencyContacts as emergencyHampta2, emergencyProtocols as emergencyTipsHampta2 } from "./hampta/plan2/emergency";
import { createDynamicProxy } from "./proxyHelper";

export const emergency = createDynamicProxy(() => emergency1, () => emergency2, () => emergencySikkim, () => emergencyYulla1, () => emergencyYulla2, () => emergencyHemkund, () => emergencyLadakh1, () => emergencyLadakh2, () => emergencySpiti1, () => emergencySpiti2, () => emergencyAnnapurna1, () => emergencyShrikhand1, () => emergencyShrikhand2, () => emergencyHampta1, () => emergencyHampta2, true);
export const emergencyTips = createDynamicProxy(() => emergencyTips1, () => emergencyTips2, () => emergencyTipsSikkim, () => emergencyTipsYulla1, () => emergencyTipsYulla2, () => emergencyTipsHemkund, () => emergencyTipsLadakh1, () => emergencyTipsLadakh2, () => emergencyTipsSpiti1, () => emergencyTipsSpiti2, () => emergencyTipsAnnapurna1, () => emergencyTipsShrikhand1, () => emergencyTipsShrikhand2, () => emergencyTipsHampta1, () => emergencyTipsHampta2, true);

