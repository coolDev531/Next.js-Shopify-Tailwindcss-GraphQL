import { FeatureListSection } from "../.shopify-cms/types/sections";
import { heading } from "./heading";
import { icons } from "./utils/icons";
import { ShopifySection } from "../.shopify-cms/types/shopify";

export const featureList: ShopifySection<FeatureListSection> = {
  name: "Feature list",
  settings: [...heading.settings],
  max_blocks: 4,
  blocks: [
    {
      type: "feature",
      name: "Feature Item",
      settings: [
        {
          type: "select",
          id: "icon",
          label: "Icon",
          options: icons,
        },
        {
          type: "text",
          id: "title",
          label: "Title",
        },
        {
          type: "richtext",
          id: "paragraph",
          label: "Paragraph",
        },
        {
          type: "richtext",
          id: "paragraph_old",
          label: "Paragraph_old",
        },
      ],
    },
  ],
  presets: [
    {
      name: "Feature list",
    },
  ],
};
