import { foodGuide as foodGuide1 } from "./garhwal/plan1/food";
import { foodGuide as foodGuide2 } from "./garhwal/plan2/food";
import { foodGuide as foodGuideSikkim } from "./sikkim/food";
import { foodGuide as foodGuideYulla1 } from "./yulla/plan1/food";
import { foodGuide as foodGuideYulla2 } from "./yulla/plan2/food";
import { createDynamicProxy } from "./proxyHelper";

export const foodGuide = createDynamicProxy(() => foodGuide1, () => foodGuide2, () => foodGuideSikkim, () => foodGuideYulla1, () => foodGuideYulla2);
