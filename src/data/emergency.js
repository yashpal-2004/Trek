import { emergency as emergency1, emergencyTips as emergencyTips1 } from "./rudranath/plan1/emergency";
import { emergency as emergency2, emergencyTips as emergencyTips2 } from "./rudranath/plan2/emergency";
import { emergency as emergencySikkim, emergencyTips as emergencyTipsSikkim } from "./sikkim/emergency";
import { emergency as emergencyYulla1, emergencyTips as emergencyTipsYulla1 } from "./yulla/plan1/emergency";
import { emergency as emergencyYulla2, emergencyTips as emergencyTipsYulla2 } from "./yulla/plan2/emergency";
import { emergencyInfo as emergencyHemkund } from "./hemkund/emergency";
import { emergencyInfo as emergencyLadakh1 } from "./ladakh/plan1/emergency";
import { emergencyInfo as emergencyLadakh2 } from "./ladakh/plan2/emergency";
import { emergency as emergencySpiti1, emergencyTips as emergencyTipsSpiti1 } from "./spiti/plan1/emergency";
import { emergency as emergencySpiti2, emergencyTips as emergencyTipsSpiti2 } from "./spiti/plan2/emergency";
import { emergencyContacts as emergencyAnnapurna1, emergencyProtocols as emergencyTipsAnnapurna1 } from "./annapurna/plan1/emergency";
import { createDynamicProxy } from "./proxyHelper";

export const emergency = createDynamicProxy(() => emergency1, () => emergency2, () => emergencySikkim, () => emergencyYulla1, () => emergencyYulla2, () => emergencyHemkund, () => emergencyLadakh1, () => emergencyLadakh2, () => emergencySpiti1, () => emergencySpiti2, () => emergencyAnnapurna1, true);
export const emergencyTips = createDynamicProxy(() => emergencyTips1, () => emergencyTips2, () => emergencyTipsSikkim, () => emergencyTipsYulla1, () => emergencyTipsYulla2, () => emergencyHemkund, () => emergencyLadakh1, () => emergencyLadakh2, () => emergencyTipsSpiti1, () => emergencyTipsSpiti2, () => emergencyTipsAnnapurna1, true);
