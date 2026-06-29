import { packing as packing1 } from "./plan1/packing";
import { packing as packing2 } from "./plan2/packing";
import { isPlan2 } from "./proxyHelper";

export const packing = isPlan2 ? packing2 : packing1;
