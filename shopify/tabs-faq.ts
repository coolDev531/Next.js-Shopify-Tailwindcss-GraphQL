import { spacing } from "shopify/utils/spacing";
import { TabsFaqSection } from "../.shopify-cms/types/sections";
import { ShopifySection } from "../.shopify-cms/types/shopify";

export const tabsFaq: ShopifySection<TabsFaqSection> = {
  name: "Tabs faq",
  settings: [
    {
      type: "text",
      id: "title",
      label: "Title",
    },
    ...spacing,
  ],
  blocks: [
    {
      type: "category",
      name: "FAQ Category",
      settings: [
        {
          type: "text",
          id: "title",
          label: "Title",
        },
        {
          type: "collection",
          id: "faq_items",
          label: "Questions",
        },
      ],
    },
  ],
  presets: [
    {
      name: "Tabs faq",
    },
  ],
};
