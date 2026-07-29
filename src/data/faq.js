import { faq as faq1, faqCategories as faqCategories1 } from "./rudranath/plan1/faq";
import { faq as faq2, faqCategories as faqCategories2 } from "./rudranath/plan2/faq";
import { faq as faqSikkim, faqCategories as faqCategoriesSikkim } from "./sikkim/faq";
import { faq as faqYulla1, faqCategories as faqCategoriesYulla1 } from "./yulla/plan1/faq";
import { faq as faqYulla2, faqCategories as faqCategoriesYulla2 } from "./yulla/plan2/faq";
import { faqs as faqHemkund } from "./hemkund/faq";
import { faqs as faqLadakh1 } from "./ladakh/plan1/faq";
import { faqs as faqLadakh2 } from "./ladakh/plan2/faq";
import { faq as faqSpiti1, faqCategories as faqCategoriesSpiti1 } from "./spiti/plan1/faq";
import { faq as faqSpiti2, faqCategories as faqCategoriesSpiti2 } from "./spiti/plan2/faq";
import { faqs as faqAnnapurna1 } from "./annapurna/plan1/faq";
import { createDynamicProxy } from "./proxyHelper";

export const faq = createDynamicProxy(() => faq1, () => faq2, () => faqSikkim, () => faqYulla1, () => faqYulla2, () => faqHemkund, () => faqLadakh1, () => faqLadakh2, () => faqSpiti1, () => faqSpiti2, () => faqAnnapurna1, true);
export const faqCategories = createDynamicProxy(() => faqCategories1, () => faqCategories2, () => faqCategoriesSikkim, () => faqCategoriesYulla1, () => faqCategoriesYulla2, () => faqHemkund, () => faqLadakh1, () => faqLadakh2, () => faqCategoriesSpiti1, () => faqCategoriesSpiti2, () => faqAnnapurna1, true);
