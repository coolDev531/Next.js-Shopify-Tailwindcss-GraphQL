import { heading } from "_sections/heading";
import { ShopifySection } from "types/shopify";

export const imageCarousel: ShopifySection = {
  name: "Image carousel",
  settings: [],
  blocks: [
    {
      type: "heading",
      name: "Heading",
      settings: heading.settings,
    },
    {
      type: "image",
      name: "image",
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
