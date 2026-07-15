import { packing as packing1 } from "./garhwal/plan1/packing";
import { packing as packing2 } from "./garhwal/plan2/packing";
import { packing as packingSikkim } from "./sikkim/packing";
import { createDynamicProxy } from "./proxyHelper";

export const packing = createDynamicProxy(() => packing1, () => packing2, () => packingSikkim, true);
