import { budget as budget1, stayOptions as stayOptions1 } from "./garhwal/plan1/budget";
import { budget as budget2, stayOptions as stayOptions2 } from "./garhwal/plan2/budget";
import { budget as budgetSikkim, stayOptions as stayOptionsSikkim } from "./sikkim/budget";
import { budget as budgetYulla1, stayOptions as stayOptionsYulla1 } from "./yulla/plan1/budget";
import { budget as budgetYulla2, stayOptions as stayOptionsYulla2 } from "./yulla/plan2/budget";
import { createDynamicProxy } from "./proxyHelper";

export const budget = createDynamicProxy(() => budget1, () => budget2, () => budgetSikkim, () => budgetYulla1, () => budgetYulla2);
export const stayOptions = createDynamicProxy(() => stayOptions1, () => stayOptions2, () => stayOptionsSikkim, () => stayOptionsYulla1, () => stayOptionsYulla2, true);
