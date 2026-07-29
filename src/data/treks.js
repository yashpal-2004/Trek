import { treks as treks1, trekDifficulties as trekDifficulties1 } from "./garhwal/plan1/treks";
import { treks as treks2, trekDifficulties as trekDifficulties2 } from "./garhwal/plan2/treks";
import { treks as treksSikkim, trekDifficulties as trekDifficultiesSikkim } from "./sikkim/treks";
import { treks as treksYulla1, trekDifficulties as trekDifficultiesYulla1 } from "./yulla/plan1/treks";
import { treks as treksYulla2, trekDifficulties as trekDifficultiesYulla2 } from "./yulla/plan2/treks";
import { trekList as treksHemkund } from "./hemkund/treks";
import { trekList as treksLadakh1 } from "./ladakh/plan1/treks";
import { trekList as treksLadakh2 } from "./ladakh/plan2/treks";
import { treks as treksSpiti1, trekDifficulties as trekDifficultiesSpiti1 } from "./spiti/plan1/treks";
import { treks as treksSpiti2, trekDifficulties as trekDifficultiesSpiti2 } from "./spiti/plan2/treks";
import { treks as treksAnnapurna1, trekDifficulties as trekDifficultiesAnnapurna1 } from "./annapurna/plan1/treks";
import { createDynamicProxy } from "./proxyHelper";

export const treks = createDynamicProxy(() => treks1, () => treks2, () => treksSikkim, () => treksYulla1, () => treksYulla2, () => treksHemkund, () => treksLadakh1, () => treksLadakh2, () => treksSpiti1, () => treksSpiti2, () => treksAnnapurna1, true);
export const trekDifficulties = createDynamicProxy(() => trekDifficulties1, () => trekDifficulties2, () => trekDifficultiesSikkim, () => trekDifficultiesYulla1, () => trekDifficultiesYulla2, () => treksHemkund, () => treksLadakh1, () => treksLadakh2, () => trekDifficultiesSpiti1, () => trekDifficultiesSpiti2, () => trekDifficultiesAnnapurna1, true);
