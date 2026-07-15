import { emergency as emergency1, emergencyTips as emergencyTips1 } from "./garhwal/plan1/emergency";
import { emergency as emergency2, emergencyTips as emergencyTips2 } from "./garhwal/plan2/emergency";
import { emergency as emergencySikkim, emergencyTips as emergencyTipsSikkim } from "./sikkim/emergency";
import { createDynamicProxy } from "./proxyHelper";

export const emergency = createDynamicProxy(() => emergency1, () => emergency2, () => emergencySikkim, true);
export const emergencyTips = createDynamicProxy(() => emergencyTips1, () => emergencyTips2, () => emergencyTipsSikkim, true);
