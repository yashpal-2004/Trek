import { gallery as gallery1, galleryCategories as galleryCategories1 } from "./rudranath/plan1/gallery";
import { gallery as gallery2, galleryCategories as galleryCategories2 } from "./rudranath/plan2/gallery";
import { gallery as gallerySikkim, galleryCategories as galleryCategoriesSikkim } from "./sikkim/gallery";
import { gallery as galleryYulla1, galleryCategories as galleryCategoriesYulla1 } from "./yulla/plan1/gallery";
import { gallery as galleryYulla2, galleryCategories as galleryCategoriesYulla2 } from "./yulla/plan2/gallery";
import { galleryImages as galleryHemkund } from "./hemkund/gallery";
import { galleryImages as galleryLadakh1 } from "./ladakh/plan1/gallery";
import { galleryImages as galleryLadakh2 } from "./ladakh/plan2/gallery";
import { gallery as gallerySpiti1, galleryCategories as galleryCategoriesSpiti1 } from "./spiti/plan1/gallery";
import { gallery as gallerySpiti2, galleryCategories as galleryCategoriesSpiti2 } from "./spiti/plan2/gallery";
import { gallery as gallerySpiti3 } from "./spiti/plan3/gallery";
import { gallery as galleryAnnapurna1 } from "./annapurna/plan1/gallery";
import { gallery as galleryShrikhand1, galleryCategories as galleryCategoriesShrikhand1 } from "./shrikhand/plan1/gallery";
import { gallery as galleryShrikhand2, galleryCategories as galleryCategoriesShrikhand2 } from "./shrikhand/plan2/gallery";
import { gallery as galleryHampta1, galleryCategories as galleryCategoriesHampta1 } from "./hampta/plan1/gallery";
import { gallery as galleryHampta2, galleryCategories as galleryCategoriesHampta2 } from "./hampta/plan2/gallery";
import { createDynamicProxy } from "./proxyHelper";

export const gallery = createDynamicProxy(() => gallery1, () => gallery2, () => gallerySikkim, () => galleryYulla1, () => galleryYulla2, () => galleryHemkund, () => galleryLadakh1, () => galleryLadakh2, () => gallerySpiti1, () => gallerySpiti2, () => galleryAnnapurna1, () => galleryShrikhand1, () => galleryShrikhand2, () => galleryHampta1, () => galleryHampta2, () => gallerySpiti3, true);
export const galleryCategories = createDynamicProxy(() => galleryCategories1, () => galleryCategories2, () => galleryCategoriesSikkim, () => galleryCategoriesYulla1, () => galleryCategoriesYulla2, () => galleryHemkund, () => galleryLadakh1, () => galleryLadakh2, () => galleryCategoriesSpiti1, () => galleryCategoriesSpiti2, () => galleryAnnapurna1, () => galleryCategoriesShrikhand1, () => galleryCategoriesShrikhand2, () => galleryCategoriesHampta1, () => galleryCategoriesHampta2, () => [], true);

