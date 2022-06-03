import { heading } from "_sections/heading";
import { ShopifySection } from "types/shopify";

export const featureCarousel: ShopifySection = {
  name: "Feature carousel",
  settings: [],
  blocks: [
    {
      type: "heading",
      name: "Heading",
      settings: heading.settings,
    },
    {
      type: "feature",
      name: "Feature",
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
