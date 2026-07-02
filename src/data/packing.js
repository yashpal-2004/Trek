import { packing as packing1 } from "./plan1/packing";
import { packing as packing2 } from "./plan2/packing";
import { packing as packingSikkim } from "./sikkim/packing";
import { createDynamicProxy } from "./proxyHelper";

export const packing = createDynamicProxy(() => packing1, () => packing2, () => packingSikkim, true);
