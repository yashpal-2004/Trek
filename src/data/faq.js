import { faq as faq1, faqCategories as faqCategories1 } from "./plan1/faq";
import { faq as faq2, faqCategories as faqCategories2 } from "./plan2/faq";
import { isPlan2 } from "./proxyHelper";

export const faq = isPlan2 ? faq2 : faq1;
export const faqCategories = isPlan2 ? faqCategories2 : faqCategories1;
