import { itinerary as itinerary1 } from "./garhwal/plan1/itinerary";
import { itinerary as itinerary2 } from "./garhwal/plan2/itinerary";
import { itinerary as itinerarySikkim } from "./sikkim/itinerary";
import { createDynamicProxy } from "./proxyHelper";

export const itinerary = createDynamicProxy(() => itinerary1, () => itinerary2, () => itinerarySikkim, true);
