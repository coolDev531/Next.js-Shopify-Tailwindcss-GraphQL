import { heading } from "_sections/heading";
import { imageText } from "_sections/image-text";
import { ShopifySection } from "types/shopify";

export const story: ShopifySection = {
  name: "Story",
  settings: [],
  blocks: [
    {
      type: "heading",
      name: heading.name,
      settings: heading.settings,
    },
    {
      type: "image-text",
      name: imageText.name,
      settings: imageText.settings,
    },
  ],
  presets: [
    {
      name: "Story",
    },
  ],
};
