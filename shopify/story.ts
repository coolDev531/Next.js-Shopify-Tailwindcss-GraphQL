import { spacing } from "shopify/utils/spacing";
import { heading } from "./heading";
import { imageText } from "./image-text";
import { ShopifySection } from "../.shopify-cms/types/shopify";

export const story: ShopifySection = {
  name: "Story",
  settings: [...spacing],
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
