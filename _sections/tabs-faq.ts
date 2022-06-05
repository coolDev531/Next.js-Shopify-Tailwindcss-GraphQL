import { ShopifySection } from "types/shopify";
import { TabsFaqSection } from "types/sections";

export const tabsFaq: ShopifySection<TabsFaqSection> = {
  name: "Tabs faq",
  settings: [
    {
      type: "text",
      id: "title",
      label: "Title",
    },
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
