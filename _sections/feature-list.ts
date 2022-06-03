import { icons } from "_sections/utils";
import { ShopifySection } from "types/shopify";

export const featureList: ShopifySection = {
  name: "Feature list",
  settings: [],
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
      ],
    },
  ],
  presets: [
    {
      name: "Feature list",
    },
  ],
};
