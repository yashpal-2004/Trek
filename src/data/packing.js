import { packing as packing1 } from "./rudranath/plan1/packing";
import { packing as packing2 } from "./rudranath/plan2/packing";
import { packing as packingSikkim } from "./sikkim/packing";
import { packing as packingYulla1 } from "./yulla/plan1/packing";
import { packing as packingYulla2 } from "./yulla/plan2/packing";
import { packingCategories as packingHemkund } from "./hemkund/packing";
import { packingCategories as packingLadakh1 } from "./ladakh/plan1/packing";
import { packingCategories as packingLadakh2 } from "./ladakh/plan2/packing";
import { packing as packingSpiti1 } from "./spiti/plan1/packing";
import { packing as packingSpiti2 } from "./spiti/plan2/packing";
import { packing as packingSpiti3 } from "./spiti/plan3/packing";
import { packingCategories as packingAnnapurna1 } from "./annapurna/plan1/packing";
import { packingCategories as packingShrikhand1 } from "./shrikhand/plan1/packing";
import { packingCategories as packingShrikhand2 } from "./shrikhand/plan2/packing";
import { packingCategories as packingHampta1 } from "./hampta/plan1/packing";
import { packingCategories as packingHampta2 } from "./hampta/plan2/packing";
import { packingCategories as packingMadhyamaheshwar1 } from "./madhyamaheshwar/plan1/packing";
import { packingCategories as packingMadhyamaheshwar2 } from "./madhyamaheshwar/plan2/packing";
import { packingCategories as packingKedarkantha } from "./kedarkantha/packing";
import { createDynamicProxy } from "./proxyHelper";

export const packing = createDynamicProxy(() => packing1, () => packing2, () => packingSikkim, () => packingYulla1, () => packingYulla2, () => packingHemkund, () => packingLadakh1, () => packingLadakh2, () => packingSpiti1, () => packingSpiti2, () => packingAnnapurna1, () => packingShrikhand1, () => packingShrikhand2, () => packingHampta1, () => packingHampta2, () => packingSpiti3, () => packingMadhyamaheshwar1, () => packingMadhyamaheshwar2, () => packingKedarkantha, true);

