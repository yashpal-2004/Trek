import { gallery as gallery1, galleryCategories as galleryCategories1 } from "./plan1/gallery";
import { gallery as gallery2, galleryCategories as galleryCategories2 } from "./plan2/gallery";
import { isPlan2 } from "./proxyHelper";

export const gallery = isPlan2 ? gallery2 : gallery1;
export const galleryCategories = isPlan2 ? galleryCategories2 : galleryCategories1;
