import { packing as packing1 } from "./garhwal/plan1/packing";
import { packing as packing2 } from "./garhwal/plan2/packing";
import { packing as packingSikkim } from "./sikkim/packing";
import { packing as packingYulla1 } from "./yulla/plan1/packing";
import { packing as packingYulla2 } from "./yulla/plan2/packing";
import { packingCategories as packingHemkund } from "./hemkund/packing";
import { createDynamicProxy } from "./proxyHelper";

export const packing = createDynamicProxy(() => packing1, () => packing2, () => packingSikkim, () => packingYulla1, () => packingYulla2, () => packingHemkund, true);
