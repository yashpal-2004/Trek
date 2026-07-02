import { budget as budget1, stayOptions as stayOptions1 } from "./plan1/budget";
import { budget as budget2, stayOptions as stayOptions2 } from "./plan2/budget";
import { budget as budgetSikkim, stayOptions as stayOptionsSikkim } from "./sikkim/budget";
import { createDynamicProxy } from "./proxyHelper";

export const budget = createDynamicProxy(() => budget1, () => budget2, () => budgetSikkim);
export const stayOptions = createDynamicProxy(() => stayOptions1, () => stayOptions2, () => stayOptionsSikkim, true);
