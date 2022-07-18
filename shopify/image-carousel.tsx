import { heading } from "./heading";
import { ShopifySection } from "../.shopify-cms/types/shopify";

export const imageCarousel: ShopifySection = {
  name: "Image carousel",
  settings: [
    ...heading.settings,
    {
      type: "product_list",
      id: "products",
      label: "Images via products",
      info: "Featured Image & Title will be used",
    },
    {
      type: "collection",
      id: "collection",
      label: "Images via Collection",
      info: "Featured Image & Title will be used",
    },
    {
      type: "blog",
      id: "blog",
      label: "Images via Blog",
      info: "Featured Image & Title will be used",
    },
    {
      type: "checkbox",
      id: "animate",
      label: "Show slide animation",
    },
    {
      type: "range",
      id: "animation_duration",
      label: "Animation duration",
      default: 20,
      min: 5,
      max: 100,
      step: 1,
      unit: "s",
    },
  ],
  blocks: [
    {
      type: "manual-image",
      name: "Image",
      settings: [
        {
          type: "text",
          id: "title",
          label: "Title",
        },
        {
          type: "image_picker",
          id: "image",
          label: "Image",
        },
        {
          type: "url",
          id: "link",
          label: "link",
        },
      ],
    },
  ],
  presets: [
    {
      name: "Image carousel",
    },
  ],
};
