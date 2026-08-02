import { routeWaypoints as routeWaypoints1, routeStats as routeStats1, typeConfig as typeConfig1 } from "./plan1/routeMap";
import { routeWaypoints as routeWaypoints2, routeStats as routeStats2, typeConfig as typeConfig2 } from "./plan2/routeMap";
import { createDynamicProxy } from "../proxyHelper";

export const routeWaypoints = createDynamicProxy(
  () => [], () => [], () => [], () => [], () => [], () => [], () => [], () => [], () => [], () => [], () => [], () => [], () => [], () => [], () => [], () => [],
  () => routeWaypoints1,
  () => routeWaypoints2,
  true
);

export const routeStats = createDynamicProxy(
  () => ({}), () => ({}), () => ({}), () => ({}), () => ({}), () => ({}), () => ({}), () => ({}), () => ({}), () => ({}), () => ({}), () => ({}), () => ({}), () => ({}), () => ({}), () => ({}),
  () => routeStats1,
  () => routeStats2
);

export const typeConfig = typeConfig1;
