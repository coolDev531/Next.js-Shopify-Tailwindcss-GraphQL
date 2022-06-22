import { heading } from "_sections/heading";
import { ShopifySection } from "types/shopify";

export const imageCarousel: ShopifySection = {
  name: "Image carousel",
  settings: [
    ...heading.settings,
    {
      type: "blog",
      id: "images",
      label: "Images",
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
