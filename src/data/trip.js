import {
  trip as trip1,
  quickStats as quickStats1,
  routeTimeline as routeTimeline1,
  overviewCards as overviewCards1,
  navLinks as navLinks1,
  expenseCategories as expenseCategories1,
  STORAGE_KEYS as STORAGE_KEYS1
} from "./rudranath/plan1/trip";

import {
  trip as trip2,
  quickStats as quickStats2,
  routeTimeline as routeTimeline2,
  overviewCards as overviewCards2,
  navLinks as navLinks2,
  expenseCategories as expenseCategories2,
  STORAGE_KEYS as STORAGE_KEYS2
} from "./rudranath/plan2/trip";

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

import {
  trip as tripHemkund,
  quickStats as quickStatsHemkund,
  routeTimeline as routeTimelineHemkund,
  overviewCards as overviewCardsHemkund,
  navLinks as navLinksHemkund,
  expenseCategories as expenseCategoriesHemkund,
  STORAGE_KEYS as STORAGE_KEYSHemkund
} from "./hemkund/trip";

import {
  trip as tripLadakh1,
  quickStats as quickStatsLadakh1,
  routeTimeline as routeTimelineLadakh1,
  overviewCards as overviewCardsLadakh1,
  navLinks as navLinksLadakh1,
  expenseCategories as expenseCategoriesLadakh1,
  STORAGE_KEYS as STORAGE_KEYSLadakh1
} from "./ladakh/plan1/trip";

import {
  trip as tripLadakh2,
  quickStats as quickStatsLadakh2,
  routeTimeline as routeTimelineLadakh2,
  overviewCards as overviewCardsLadakh2,
  navLinks as navLinksLadakh2,
  expenseCategories as expenseCategoriesLadakh2,
  STORAGE_KEYS as STORAGE_KEYSLadakh2
} from "./ladakh/plan2/trip";

import {
  trip as tripSpiti1,
  quickStats as quickStatsSpiti1,
  routeTimeline as routeTimelineSpiti1,
  overviewCards as overviewCardsSpiti1,
  navLinks as navLinksSpiti1,
  expenseCategories as expenseCategoriesSpiti1,
  STORAGE_KEYS as STORAGE_KEYSSpiti1
} from "./spiti/plan1/trip";

import {
  trip as tripSpiti2,
  quickStats as quickStatsSpiti2,
  routeTimeline as routeTimelineSpiti2,
  overviewCards as overviewCardsSpiti2,
  navLinks as navLinksSpiti2,
  expenseCategories as expenseCategoriesSpiti2,
  STORAGE_KEYS as STORAGE_KEYSSpiti2
} from "./spiti/plan2/trip";

import {
  trip as tripAnnapurna1,
  quickStats as quickStatsAnnapurna1,
  routeTimeline as routeTimelineAnnapurna1,
  overviewCards as overviewCardsAnnapurna1,
  navLinks as navLinksAnnapurna1,
  expenseCategories as expenseCategoriesAnnapurna1,
  STORAGE_KEYS as STORAGE_KEYSAnnapurna1
} from "./annapurna/plan1/trip";

import {
  trip as tripShrikhand1,
  quickStats as quickStatsShrikhand1,
  routeTimeline as routeTimelineShrikhand1,
  overviewCards as overviewCardsShrikhand1,
  navLinks as navLinksShrikhand1,
  expenseCategories as expenseCategoriesShrikhand1,
  STORAGE_KEYS as STORAGE_KEYSShrikhand1
} from "./shrikhand/plan1/trip";

import {
  trip as tripShrikhand2,
  quickStats as quickStatsShrikhand2,
  routeTimeline as routeTimelineShrikhand2,
  overviewCards as overviewCardsShrikhand2,
  navLinks as navLinksShrikhand2,
  expenseCategories as expenseCategoriesShrikhand2,
  STORAGE_KEYS as STORAGE_KEYSShrikhand2
} from "./shrikhand/plan2/trip";

import {
  trip as tripHampta1,
  quickStats as quickStatsHampta1,
  routeTimeline as routeTimelineHampta1,
  overviewCards as overviewCardsHampta1,
  navLinks as navLinksHampta1,
  expenseCategories as expenseCategoriesHampta1,
  STORAGE_KEYS as STORAGE_KEYSHampta1
} from "./hampta/plan1/trip";

import {
  trip as tripHampta2,
  quickStats as quickStatsHampta2,
  routeTimeline as routeTimelineHampta2,
  overviewCards as overviewCardsHampta2,
  navLinks as navLinksHampta2,
  expenseCategories as expenseCategoriesHampta2,
  STORAGE_KEYS as STORAGE_KEYSHampta2
} from "./hampta/plan2/trip";

import {
  trip as tripSpiti3,
  quickStats as quickStatsSpiti3,
  routeTimeline as routeTimelineSpiti3,
  overviewCards as overviewCardsSpiti3,
  navLinks as navLinksSpiti3,
  expenseCategories as expenseCategoriesSpiti3,
  STORAGE_KEYS as STORAGE_KEYSSpiti3
} from "./spiti/plan3/trip";

import { createDynamicProxy } from "./proxyHelper";

export const trip = createDynamicProxy(() => trip1, () => trip2, () => tripSikkim, () => tripYulla1, () => tripYulla2, () => tripHemkund, () => tripLadakh1, () => tripLadakh2, () => tripSpiti1, () => tripSpiti2, () => tripAnnapurna1, () => tripShrikhand1, () => tripShrikhand2, () => tripHampta1, () => tripHampta2, () => tripSpiti3);
export const quickStats = createDynamicProxy(() => quickStats1, () => quickStats2, () => quickStatsSikkim, () => quickStatsYulla1, () => quickStatsYulla2, () => quickStatsHemkund, () => quickStatsLadakh1, () => quickStatsLadakh2, () => quickStatsSpiti1, () => quickStatsSpiti2, () => quickStatsAnnapurna1, () => quickStatsShrikhand1, () => quickStatsShrikhand2, () => quickStatsHampta1, () => quickStatsHampta2, () => quickStatsSpiti3, true);
export const routeTimeline = createDynamicProxy(() => routeTimeline1, () => routeTimeline2, () => routeTimelineSikkim, () => routeTimelineYulla1, () => routeTimelineYulla2, () => routeTimelineHemkund, () => routeTimelineLadakh1, () => routeTimelineLadakh2, () => routeTimelineSpiti1, () => routeTimelineSpiti2, () => routeTimelineAnnapurna1, () => routeTimelineShrikhand1, () => routeTimelineShrikhand2, () => routeTimelineHampta1, () => routeTimelineHampta2, () => routeTimelineSpiti3, true);
export const overviewCards = createDynamicProxy(() => overviewCards1, () => overviewCards2, () => overviewCardsSikkim, () => overviewCardsYulla1, () => overviewCardsYulla2, () => overviewCardsHemkund, () => overviewCardsLadakh1, () => overviewCardsLadakh2, () => overviewCardsSpiti1, () => overviewCardsSpiti2, () => overviewCardsAnnapurna1, () => overviewCardsShrikhand1, () => overviewCardsShrikhand2, () => overviewCardsHampta1, () => overviewCardsHampta2, () => overviewCardsSpiti3, true);
export const navLinks = createDynamicProxy(() => navLinks1, () => navLinks2, () => navLinksSikkim, () => navLinksYulla1, () => navLinksYulla2, () => navLinksHemkund, () => navLinksLadakh1, () => navLinksLadakh2, () => navLinksSpiti1, () => navLinksSpiti2, () => navLinksAnnapurna1, () => navLinksShrikhand1, () => navLinksShrikhand2, () => navLinksHampta1, () => navLinksHampta2, () => navLinksSpiti3, true);
export const expenseCategories = createDynamicProxy(() => expenseCategories1, () => expenseCategories2, () => expenseCategoriesSikkim, () => expenseCategoriesYulla1, () => expenseCategoriesYulla2, () => expenseCategoriesHemkund, () => expenseCategoriesLadakh1, () => expenseCategoriesLadakh2, () => expenseCategoriesSpiti1, () => expenseCategoriesSpiti2, () => expenseCategoriesAnnapurna1, () => expenseCategoriesShrikhand1, () => expenseCategoriesShrikhand2, () => expenseCategoriesHampta1, () => expenseCategoriesHampta2, () => expenseCategoriesSpiti3, true);
export const STORAGE_KEYS = createDynamicProxy(() => STORAGE_KEYS1, () => STORAGE_KEYS2, () => STORAGE_KEYSSikkim, () => STORAGE_KEYSYulla1, () => STORAGE_KEYSYulla2, () => STORAGE_KEYSHemkund, () => STORAGE_KEYSLadakh1, () => STORAGE_KEYSLadakh2, () => STORAGE_KEYSSpiti1, () => STORAGE_KEYSSpiti2, () => STORAGE_KEYSAnnapurna1, () => STORAGE_KEYSShrikhand1, () => STORAGE_KEYSShrikhand2, () => STORAGE_KEYSHampta1, () => STORAGE_KEYSHampta2, () => STORAGE_KEYSSpiti3);