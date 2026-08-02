import { foodGuide as foodGuide1 } from "./rudranath/plan1/food";
import { foodGuide as foodGuide2 } from "./rudranath/plan2/food";
import { foodGuide as foodGuideSikkim } from "./sikkim/food";
import { foodGuide as foodGuideYulla1 } from "./yulla/plan1/food";
import { foodGuide as foodGuideYulla2 } from "./yulla/plan2/food";
import { foodItems as foodGuideHemkund } from "./hemkund/food";
import { foodItems as foodGuideLadakh1 } from "./ladakh/plan1/food";
import { foodItems as foodGuideLadakh2 } from "./ladakh/plan2/food";
import { foodGuide as foodGuideSpiti1 } from "./spiti/plan1/food";
import { foodGuide as foodGuideSpiti2 } from "./spiti/plan2/food";
import { foodGuide as foodGuideSpiti3 } from "./spiti/plan3/food";
import { foodGuide as foodGuideAnnapurna1 } from "./annapurna/plan1/food";
import { foodGuide as foodGuideShrikhand1 } from "./shrikhand/plan1/food";
import { foodGuide as foodGuideShrikhand2 } from "./shrikhand/plan2/food";
import { foodGuide as foodGuideHampta1 } from "./hampta/plan1/food";
import { foodGuide as foodGuideHampta2 } from "./hampta/plan2/food";
import { foodGuide as foodGuideMadhyamaheshwar1 } from "./madhyamaheshwar/plan1/food";
import { foodGuide as foodGuideMadhyamaheshwar2 } from "./madhyamaheshwar/plan2/food";
import { foodGuide as foodGuideKedarkantha } from "./kedarkantha/food";
import { createDynamicProxy } from "./proxyHelper";

export const foodGuide = createDynamicProxy(() => foodGuide1, () => foodGuide2, () => foodGuideSikkim, () => foodGuideYulla1, () => foodGuideYulla2, () => foodGuideHemkund, () => foodGuideLadakh1, () => foodGuideLadakh2, () => foodGuideSpiti1, () => foodGuideSpiti2, () => foodGuideAnnapurna1, () => foodGuideShrikhand1, () => foodGuideShrikhand2, () => foodGuideHampta1, () => foodGuideHampta2, () => foodGuideSpiti3, () => foodGuideMadhyamaheshwar1, () => foodGuideMadhyamaheshwar2, () => foodGuideKedarkantha);

