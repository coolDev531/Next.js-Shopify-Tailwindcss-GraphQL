import { spacing } from "shopify/utils/spacing";
import { ShopifySection } from "../.shopify-cms/types/shopify";

export const infoCards: ShopifySection = {
  name: "Info cards",
  settings: [
    {
      type: "header",
      content: "Content",
    },
    {
      type: "text",
      id: "pre_title",
      label: "Pre header",
    },
    {
      type: "text",
      id: "title",
      label: "Title",
    },
    {
      type: "product_list",
      id: "content_list",
      label: "Tech Items",
    },
    ...spacing,
  ],
  blocks: [
    {
      type: "manual-info-card",
      name: "Manual Info Card",
      settings: [
        {
          type: "header",
          content: "Content",
        },
        {
          type: "text",
          id: "title",
          label: "Title",
        },
        {
          type: "richtext",
          id: "paragraph",
          label: "Description",
        },
        {
          type: "textarea",
          id: "svg",
          label: "SVG code",
        },
      ],
    },
  ],
  presets: [
    {
      name: "Info cards",
    },
  ],
};
