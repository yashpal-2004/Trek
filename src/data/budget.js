import { budget as budget1, stayOptions as stayOptions1 } from "./plan1/budget";
import { budget as budget2, stayOptions as stayOptions2 } from "./plan2/budget";
import { isPlan2 } from "./proxyHelper";

export const budget = isPlan2 ? budget2 : budget1;
export const stayOptions = isPlan2 ? stayOptions2 : stayOptions1;
