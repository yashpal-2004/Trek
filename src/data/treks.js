import { treks as treks1, trekDifficulties as trekDifficulties1 } from "./plan1/treks";
import { treks as treks2, trekDifficulties as trekDifficulties2 } from "./plan2/treks";
import { isPlan2 } from "./proxyHelper";

export const treks = isPlan2 ? treks2 : treks1;
export const trekDifficulties = isPlan2 ? trekDifficulties2 : trekDifficulties1;
