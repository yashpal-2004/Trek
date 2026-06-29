import { transport as transport1, transportModes as transportModes1 } from "./plan1/transport";
import { transport as transport2, transportModes as transportModes2 } from "./plan2/transport";
import { isPlan2 } from "./proxyHelper";

export const transport = isPlan2 ? transport2 : transport1;
export const transportModes = isPlan2 ? transportModes2 : transportModes1;
