import { itinerary as itinerary1 } from "./garhwal/plan1/itinerary";
import { itinerary as itinerary2 } from "./garhwal/plan2/itinerary";
import { itinerary as itinerarySikkim } from "./sikkim/itinerary";
import { itinerary as itineraryYulla1 } from "./yulla/plan1/itinerary";
import { itinerary as itineraryYulla2 } from "./yulla/plan2/itinerary";
import { itinerary as itineraryHemkund } from "./hemkund/itinerary";
import { itinerary as itineraryLadakh1 } from "./ladakh/plan1/itinerary";
import { itinerary as itineraryLadakh2 } from "./ladakh/plan2/itinerary";
import { itinerary as itinerarySpiti1 } from "./spiti/plan1/itinerary";
import { itinerary as itinerarySpiti2 } from "./spiti/plan2/itinerary";
import { createDynamicProxy } from "./proxyHelper";

export const itinerary = createDynamicProxy(() => itinerary1, () => itinerary2, () => itinerarySikkim, () => itineraryYulla1, () => itineraryYulla2, () => itineraryHemkund, () => itineraryLadakh1, () => itineraryLadakh2, () => itinerarySpiti1, () => itinerarySpiti2, true);
