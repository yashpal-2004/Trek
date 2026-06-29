import { weather as weather1, safety as safety1 } from "./plan1/weather";
import { weather as weather2, safety as safety2 } from "./plan2/weather";
import { isPlan2 } from "./proxyHelper";

export const weather = isPlan2 ? weather2 : weather1;
export const safety = isPlan2 ? safety2 : safety1;
