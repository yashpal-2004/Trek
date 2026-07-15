import { treks as treks1, trekDifficulties as trekDifficulties1 } from "./garhwal/plan1/treks";
import { treks as treks2, trekDifficulties as trekDifficulties2 } from "./garhwal/plan2/treks";
import { treks as treksSikkim, trekDifficulties as trekDifficultiesSikkim } from "./sikkim/treks";
import { createDynamicProxy } from "./proxyHelper";

export const treks = createDynamicProxy(() => treks1, () => treks2, () => treksSikkim, true);
export const trekDifficulties = createDynamicProxy(() => trekDifficulties1, () => trekDifficulties2, () => trekDifficultiesSikkim, true);
