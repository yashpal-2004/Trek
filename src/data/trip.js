import {
  trip as trip1,
  quickStats as quickStats1,
  routeTimeline as routeTimeline1,
  overviewCards as overviewCards1,
  navLinks as navLinks1,
  expenseCategories as expenseCategories1,
  STORAGE_KEYS as STORAGE_KEYS1
} from "./garhwal/plan1/trip";

import {
  trip as trip2,
  quickStats as quickStats2,
  routeTimeline as routeTimeline2,
  overviewCards as overviewCards2,
  navLinks as navLinks2,
  expenseCategories as expenseCategories2,
  STORAGE_KEYS as STORAGE_KEYS2
} from "./garhwal/plan2/trip";

import {
  trip as tripSikkim,
  quickStats as quickStatsSikkim,
  routeTimeline as routeTimelineSikkim,
  overviewCards as overviewCardsSikkim,
  navLinks as navLinksSikkim,
  expenseCategories as expenseCategoriesSikkim,
  STORAGE_KEYS as STORAGE_KEYSSikkim
} from "./sikkim/trip";

import {
  trip as tripYulla1,
  quickStats as quickStatsYulla1,
  routeTimeline as routeTimelineYulla1,
  overviewCards as overviewCardsYulla1,
  navLinks as navLinksYulla1,
  expenseCategories as expenseCategoriesYulla1,
  STORAGE_KEYS as STORAGE_KEYSYulla1
} from "./yulla/plan1/trip";

import {
  trip as tripYulla2,
  quickStats as quickStatsYulla2,
  routeTimeline as routeTimelineYulla2,
  overviewCards as overviewCardsYulla2,
  navLinks as navLinksYulla2,
  expenseCategories as expenseCategoriesYulla2,
  STORAGE_KEYS as STORAGE_KEYSYulla2
} from "./yulla/plan2/trip";

import { createDynamicProxy } from "./proxyHelper";

export const trip = createDynamicProxy(() => trip1, () => trip2, () => tripSikkim, () => tripYulla1, () => tripYulla2);
export const quickStats = createDynamicProxy(() => quickStats1, () => quickStats2, () => quickStatsSikkim, () => quickStatsYulla1, () => quickStatsYulla2, true);
export const routeTimeline = createDynamicProxy(() => routeTimeline1, () => routeTimeline2, () => routeTimelineSikkim, () => routeTimelineYulla1, () => routeTimelineYulla2, true);
export const overviewCards = createDynamicProxy(() => overviewCards1, () => overviewCards2, () => overviewCardsSikkim, () => overviewCardsYulla1, () => overviewCardsYulla2, true);
export const navLinks = createDynamicProxy(() => navLinks1, () => navLinks2, () => navLinksSikkim, () => navLinksYulla1, () => navLinksYulla2, true);
export const expenseCategories = createDynamicProxy(() => expenseCategories1, () => expenseCategories2, () => expenseCategoriesSikkim, () => expenseCategoriesYulla1, () => expenseCategoriesYulla2, true);
export const STORAGE_KEYS = createDynamicProxy(() => STORAGE_KEYS1, () => STORAGE_KEYS2, () => STORAGE_KEYSSikkim, () => STORAGE_KEYSYulla1, () => STORAGE_KEYSYulla2);