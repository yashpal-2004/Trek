import { budget as budget1, stayOptions as stayOptions1 } from "./garhwal/plan1/budget";
import { budget as budget2, stayOptions as stayOptions2 } from "./garhwal/plan2/budget";
import { budget as budgetSikkim, stayOptions as stayOptionsSikkim } from "./sikkim/budget";
import { budget as budgetYulla1, stayOptions as stayOptionsYulla1 } from "./yulla/plan1/budget";
import { budget as budgetYulla2, stayOptions as stayOptionsYulla2 } from "./yulla/plan2/budget";
import { budget as budgetHemkund, stayOptions as stayOptionsHemkund } from "./hemkund/budget";
import { budget as budgetLadakh1, stayOptions as stayOptionsLadakh1 } from "./ladakh/plan1/budget";
import { budget as budgetLadakh2, stayOptions as stayOptionsLadakh2 } from "./ladakh/plan2/budget";
import { createDynamicProxy } from "./proxyHelper";

export const budget = createDynamicProxy(() => budget1, () => budget2, () => budgetSikkim, () => budgetYulla1, () => budgetYulla2, () => budgetHemkund, () => budgetLadakh1, () => budgetLadakh2);
export const stayOptions = createDynamicProxy(() => stayOptions1, () => stayOptions2, () => stayOptionsSikkim, () => stayOptionsYulla1, () => stayOptionsYulla2, () => stayOptionsHemkund, () => stayOptionsLadakh1, () => stayOptionsLadakh2, true);
