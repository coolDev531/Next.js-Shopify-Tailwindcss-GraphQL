import { spacing } from "shopify/utils/spacing";
import { ShopifySection } from "../.shopify-cms/types/shopify";

export const statsGraph: ShopifySection = {
  name: "Stats graph",
  settings: [...spacing],
  blocks: [
    {
      type: "stat",
      name: "Statistic",
      settings: [
        {
          type: "header",
          content: "Content",
        },
        {
          type: "text",
          id: "stat",
          label: "Statistic",
        },
        {
          type: "text",
          id: "title",
          label: "Title",
        },
        {
          type: "text",
          id: "descriptions",
          label: "Descriptions",
        },
      ],
    },
  ],
  max_blocks: 4,
  presets: [
    {
      name: "Stats graph",
    },
  ],
};
