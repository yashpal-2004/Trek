import { itinerary as itinerary1 } from "./plan1/itinerary";
import { itinerary as itinerary2 } from "./plan2/itinerary";
import { isPlan2 } from "./proxyHelper";

export const itinerary = isPlan2 ? itinerary2 : itinerary1;
