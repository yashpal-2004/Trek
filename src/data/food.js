import { foodGuide as foodGuide1 } from "./plan1/food";
import { foodGuide as foodGuide2 } from "./plan2/food";
import { isPlan2 } from "./proxyHelper";

export const foodGuide = isPlan2 ? foodGuide2 : foodGuide1;
