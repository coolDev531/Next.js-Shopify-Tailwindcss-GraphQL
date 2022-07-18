import { FeatureCarouselSection } from "../.shopify-cms/types/sections";
import { ShopifySection } from "../.shopify-cms/types/shopify";
import { heading } from "./heading";

export const featureCarousel: ShopifySection<FeatureCarouselSection> = {
  name: "Feature carousel",
  settings: [
    ...heading.settings,
    {
      type: "product_list",
      id: "features",
      label: "Feature Items",
    },
  ],
  blocks: [
    {
      type: "manual-feature",
      name: "Manual Feature",
      settings: [
        {
          type: "image_picker",
          id: "image",
          label: "Image",
        },
        {
          type: "text",
          id: "title",
          label: "Title",
        },
        {
          type: "textarea",
          id: "paragraph",
          label: "Description",
        },
        {
          type: "url",
          id: "link",
          label: "Link",
        },
      ],
    },
  ],

  presets: [
    {
      name: "Feature carousel",
    },
  ],
};
