import { emergency as emergency1, emergencyTips as emergencyTips1 } from "./plan1/emergency";
import { emergency as emergency2, emergencyTips as emergencyTips2 } from "./plan2/emergency";
import { isPlan2 } from "./proxyHelper";

export const emergency = isPlan2 ? emergency2 : emergency1;
export const emergencyTips = isPlan2 ? emergencyTips2 : emergencyTips1;
