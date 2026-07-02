import { foodGuide as foodGuide1 } from "./plan1/food";
import { foodGuide as foodGuide2 } from "./plan2/food";
import { foodGuide as foodGuideSikkim } from "./sikkim/food";
import { createDynamicProxy } from "./proxyHelper";

export const foodGuide = createDynamicProxy(() => foodGuide1, () => foodGuide2, () => foodGuideSikkim);
