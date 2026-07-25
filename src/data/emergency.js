import { emergency as emergency1, emergencyTips as emergencyTips1 } from "./garhwal/plan1/emergency";
import { emergency as emergency2, emergencyTips as emergencyTips2 } from "./garhwal/plan2/emergency";
import { emergency as emergencySikkim, emergencyTips as emergencyTipsSikkim } from "./sikkim/emergency";
import { emergency as emergencyYulla1, emergencyTips as emergencyTipsYulla1 } from "./yulla/plan1/emergency";
import { emergency as emergencyYulla2, emergencyTips as emergencyTipsYulla2 } from "./yulla/plan2/emergency";
import { emergencyInfo as emergencyHemkund } from "./hemkund/emergency";
import { createDynamicProxy } from "./proxyHelper";

export const emergency = createDynamicProxy(() => emergency1, () => emergency2, () => emergencySikkim, () => emergencyYulla1, () => emergencyYulla2, () => emergencyHemkund, true);
export const emergencyTips = createDynamicProxy(() => emergencyTips1, () => emergencyTips2, () => emergencyTipsSikkim, () => emergencyTipsYulla1, () => emergencyTipsYulla2, () => emergencyHemkund, true);
