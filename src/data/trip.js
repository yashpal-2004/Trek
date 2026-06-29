import {
  trip as trip1,
  quickStats as quickStats1,
  routeTimeline as routeTimeline1,
  overviewCards as overviewCards1,
  navLinks as navLinks1,
  expenseCategories as expenseCategories1,
  STORAGE_KEYS as STORAGE_KEYS1
} from "./plan1/trip";

import {
  trip as trip2,
  quickStats as quickStats2,
  routeTimeline as routeTimeline2,
  overviewCards as overviewCards2,
  navLinks as navLinks2,
  expenseCategories as expenseCategories2,
  STORAGE_KEYS as STORAGE_KEYS2
} from "./plan2/trip";

import { isPlan2 } from "./proxyHelper";

export const trip = isPlan2 ? trip2 : trip1;
export const quickStats = isPlan2 ? quickStats2 : quickStats1;
export const routeTimeline = isPlan2 ? routeTimeline2 : routeTimeline1;
export const overviewCards = isPlan2 ? overviewCards2 : overviewCards1;
export const navLinks = isPlan2 ? navLinks2 : navLinks1;
export const expenseCategories = isPlan2 ? expenseCategories2 : expenseCategories1;
export const STORAGE_KEYS = isPlan2 ? STORAGE_KEYS2 : STORAGE_KEYS1;