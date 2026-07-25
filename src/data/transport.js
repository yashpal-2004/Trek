import { transport as transport1, transportModes as transportModes1 } from "./garhwal/plan1/transport";
import { transport as transport2, transportModes as transportModes2 } from "./garhwal/plan2/transport";
import { transport as transportSikkim, transportModes as transportModesSikkim } from "./sikkim/transport";
import { transport as transportYulla1, transportModes as transportModesYulla1 } from "./yulla/plan1/transport";
import { transport as transportYulla2, transportModes as transportModesYulla2 } from "./yulla/plan2/transport";
import { transport as transportHemkund, transportModes as transportModesHemkund } from "./hemkund/transport";
import { createDynamicProxy } from "./proxyHelper";

export const transport = createDynamicProxy(() => transport1, () => transport2, () => transportSikkim, () => transportYulla1, () => transportYulla2, () => transportHemkund, true);
export const transportModes = createDynamicProxy(() => transportModes1, () => transportModes2, () => transportModesSikkim, () => transportModesYulla1, () => transportModesYulla2, () => transportModesHemkund, true);
