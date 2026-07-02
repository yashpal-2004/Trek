import { gallery as gallery1, galleryCategories as galleryCategories1 } from "./plan1/gallery";
import { gallery as gallery2, galleryCategories as galleryCategories2 } from "./plan2/gallery";
import { gallery as gallerySikkim, galleryCategories as galleryCategoriesSikkim } from "./sikkim/gallery";
import { createDynamicProxy } from "./proxyHelper";

export const gallery = createDynamicProxy(() => gallery1, () => gallery2, () => gallerySikkim, true);
export const galleryCategories = createDynamicProxy(() => galleryCategories1, () => galleryCategories2, () => galleryCategoriesSikkim, true);
