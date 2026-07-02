import { transport as transport1, transportModes as transportModes1 } from "./plan1/transport";
import { transport as transport2, transportModes as transportModes2 } from "./plan2/transport";
import { transport as transportSikkim, transportModes as transportModesSikkim } from "./sikkim/transport";
import { createDynamicProxy } from "./proxyHelper";

export const transport = createDynamicProxy(() => transport1, () => transport2, () => transportSikkim, true);
export const transportModes = createDynamicProxy(() => transportModes1, () => transportModes2, () => transportModesSikkim, true);
