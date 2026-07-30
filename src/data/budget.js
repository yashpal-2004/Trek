import { budget as budget1, stayOptions as stayOptions1 } from "./rudranath/plan1/budget";
import { budget as budget2, stayOptions as stayOptions2 } from "./rudranath/plan2/budget";
import { budget as budgetSikkim, stayOptions as stayOptionsSikkim } from "./sikkim/budget";
import { budget as budgetYulla1, stayOptions as stayOptionsYulla1 } from "./yulla/plan1/budget";
import { budget as budgetYulla2, stayOptions as stayOptionsYulla2 } from "./yulla/plan2/budget";
import { budget as budgetHemkund, stayOptions as stayOptionsHemkund } from "./hemkund/budget";
import { budget as budgetLadakh1, stayOptions as stayOptionsLadakh1 } from "./ladakh/plan1/budget";
import { budget as budgetLadakh2, stayOptions as stayOptionsLadakh2 } from "./ladakh/plan2/budget";
import { budget as budgetSpiti1, stayOptions as stayOptionsSpiti1 } from "./spiti/plan1/budget";
import { budget as budgetSpiti2, stayOptions as stayOptionsSpiti2 } from "./spiti/plan2/budget";
import { budget as budgetAnnapurna1, stayOptions as stayOptionsAnnapurna1, accommodationBreakdown as accommodationBreakdownAnnapurna1 } from "./annapurna/plan1/budget";
import { budget as budgetShrikhand1, stayOptions as stayOptionsShrikhand1 } from "./shrikhand/plan1/budget";
import { budget as budgetShrikhand2, stayOptions as stayOptionsShrikhand2 } from "./shrikhand/plan2/budget";
import { budget as budgetHampta1, stayOptions as stayOptionsHampta1 } from "./hampta/plan1/budget";
import { budget as budgetHampta2, stayOptions as stayOptionsHampta2 } from "./hampta/plan2/budget";
import { createDynamicProxy } from "./proxyHelper";

export const budget = createDynamicProxy(() => budget1, () => budget2, () => budgetSikkim, () => budgetYulla1, () => budgetYulla2, () => budgetHemkund, () => budgetLadakh1, () => budgetLadakh2, () => budgetSpiti1, () => budgetSpiti2, () => budgetAnnapurna1, () => budgetShrikhand1, () => budgetShrikhand2, () => budgetHampta1, () => budgetHampta2);
export const stayOptions = createDynamicProxy(() => stayOptions1, () => stayOptions2, () => stayOptionsSikkim, () => stayOptionsYulla1, () => stayOptionsYulla2, () => stayOptionsHemkund, () => stayOptionsLadakh1, () => stayOptionsLadakh2, () => stayOptionsSpiti1, () => stayOptionsSpiti2, () => stayOptionsAnnapurna1, () => stayOptionsShrikhand1, () => stayOptionsShrikhand2, () => stayOptionsHampta1, () => stayOptionsHampta2, true);
export const accommodationBreakdown = createDynamicProxy(() => [], () => [], () => [], () => [], () => [], () => [], () => [], () => [], () => [], () => [], () => accommodationBreakdownAnnapurna1, () => [], () => [], () => [], () => [], true);

