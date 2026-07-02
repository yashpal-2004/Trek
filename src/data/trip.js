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

import {
  trip as tripSikkim,
  quickStats as quickStatsSikkim,
  routeTimeline as routeTimelineSikkim,
  overviewCards as overviewCardsSikkim,
  navLinks as navLinksSikkim,
  expenseCategories as expenseCategoriesSikkim,
  STORAGE_KEYS as STORAGE_KEYSSikkim
} from "./sikkim/trip";

import { createDynamicProxy } from "./proxyHelper";

export const trip = createDynamicProxy(() => trip1, () => trip2, () => tripSikkim);
export const quickStats = createDynamicProxy(() => quickStats1, () => quickStats2, () => quickStatsSikkim, true);
export const routeTimeline = createDynamicProxy(() => routeTimeline1, () => routeTimeline2, () => routeTimelineSikkim, true);
export const overviewCards = createDynamicProxy(() => overviewCards1, () => overviewCards2, () => overviewCardsSikkim, true);
export const navLinks = createDynamicProxy(() => navLinks1, () => navLinks2, () => navLinksSikkim, true);
export const expenseCategories = createDynamicProxy(() => expenseCategories1, () => expenseCategories2, () => expenseCategoriesSikkim, true);
export const STORAGE_KEYS = createDynamicProxy(() => STORAGE_KEYS1, () => STORAGE_KEYS2, () => STORAGE_KEYSSikkim);