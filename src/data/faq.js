import { faq as faq1, faqCategories as faqCategories1 } from "./garhwal/plan1/faq";
import { faq as faq2, faqCategories as faqCategories2 } from "./garhwal/plan2/faq";
import { faq as faqSikkim, faqCategories as faqCategoriesSikkim } from "./sikkim/faq";
import { createDynamicProxy } from "./proxyHelper";

export const faq = createDynamicProxy(() => faq1, () => faq2, () => faqSikkim, true);
export const faqCategories = createDynamicProxy(() => faqCategories1, () => faqCategories2, () => faqCategoriesSikkim, true);
