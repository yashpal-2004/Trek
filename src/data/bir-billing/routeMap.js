import { routeWaypoints as wp1, routeStats as stats1, typeConfig as tc1 } from "./plan1/routeMap";
import { routeWaypoints as wp2, routeStats as stats2, typeConfig as tc2 } from "./plan2/routeMap";
import { routeWaypoints as wp3, routeStats as stats3, typeConfig as tc3 } from "./plan3/routeMap";
import { routeWaypoints as wp4, routeStats as stats4, typeConfig as tc4 } from "./plan4/routeMap";
import { createDynamicProxy } from "../proxyHelper";

export const routeWaypoints = createDynamicProxy(
  () => wp1,
  () => wp2, // default fallback or plan1
  () => wp2, // placeholder for indices mapping
  () => wp3, // placeholder
  () => wp4, // placeholder
  () => wp1, // index 5
  () => wp1, // index 6
  () => wp1, // index 7
  () => wp1, // index 8
  () => wp1, // index 9
  () => wp1, // index 10
  () => wp1, // index 11
  () => wp1, // index 12
  () => wp1, // index 13
  () => wp1, // index 14
  () => wp1, // index 15
  () => wp1, // index 16
  () => wp1, // index 17
  () => wp1, // index 18
  () => wp1, // index 19 (bir-billing or plan1)
  () => wp2, // index 20 (plan2)
  () => wp3, // index 21 (plan3)
  () => wp4, // index 22 (plan4)
  true
);

export const routeStats = createDynamicProxy(
  () => stats1,
  () => stats2,
  () => stats2,
  () => stats3,
  () => stats4,
  () => stats1,
  () => stats1,
  () => stats1,
  () => stats1,
  () => stats1,
  () => stats1,
  () => stats1,
  () => stats1,
  () => stats1,
  () => stats1,
  () => stats1,
  () => stats1,
  () => stats1,
  () => stats1,
  () => stats1, // index 19
  () => stats2, // index 20
  () => stats3, // index 21
  () => stats4  // index 22
);

export const typeConfig = createDynamicProxy(
  () => tc1,
  () => tc2,
  () => tc2,
  () => tc3,
  () => tc4,
  () => tc1,
  () => tc1,
  () => tc1,
  () => tc1,
  () => tc1,
  () => tc1,
  () => tc1,
  () => tc1,
  () => tc1,
  () => tc1,
  () => tc1,
  () => tc1,
  () => tc1,
  () => tc1,
  () => tc1, // index 19
  () => tc2, // index 20
  () => tc3, // index 21
  () => tc4  // index 22
);
