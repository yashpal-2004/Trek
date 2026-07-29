import { transport as transport1, transportModes as transportModes1 } from "./rudranath/plan1/transport";
import { transport as transport2, transportModes as transportModes2 } from "./rudranath/plan2/transport";
import { transport as transportSikkim, transportModes as transportModesSikkim } from "./sikkim/transport";
import { transport as transportYulla1, transportModes as transportModesYulla1 } from "./yulla/plan1/transport";
import { transport as transportYulla2, transportModes as transportModesYulla2 } from "./yulla/plan2/transport";
import { transport as transportHemkund, transportModes as transportModesHemkund } from "./hemkund/transport";
import { transport as transportLadakh1, transportModes as transportModesLadakh1 } from "./ladakh/plan1/transport";
import { transport as transportLadakh2, transportModes as transportModesLadakh2 } from "./ladakh/plan2/transport";
import { transport as transportSpiti1, transportModes as transportModesSpiti1 } from "./spiti/plan1/transport";
import { transport as transportSpiti2, transportModes as transportModesSpiti2 } from "./spiti/plan2/transport";
import { transport as transportAnnapurna1, transportModes as transportModesAnnapurna1 } from "./annapurna/plan1/transport";
import { createDynamicProxy } from "./proxyHelper";

export const transport = createDynamicProxy(() => transport1, () => transport2, () => transportSikkim, () => transportYulla1, () => transportYulla2, () => transportHemkund, () => transportLadakh1, () => transportLadakh2, () => transportSpiti1, () => transportSpiti2, () => transportAnnapurna1, true);
export const transportModes = createDynamicProxy(() => transportModes1, () => transportModes2, () => transportModesSikkim, () => transportModesYulla1, () => transportModesYulla2, () => transportModesHemkund, () => transportModesLadakh1, () => transportModesLadakh2, () => transportModesSpiti1, () => transportModesSpiti2, () => transportModesAnnapurna1, true);
