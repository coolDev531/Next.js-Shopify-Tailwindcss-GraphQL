import { heading } from "shopify/heading";
import { spacing } from "shopify/utils/spacing";
import { ShopifySection } from ".shopify-cms/types/shopify";
import { PortfolioPreviewSection } from ".shopify-cms/types/sections";

export const portfolioPreview: ShopifySection<PortfolioPreviewSection> = {
  name: "Portfolio preview",
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
      type: "richtext",
      id: "paragraph",
      label: "Paragraph",
    },
    {
      type: "product_list",
      id: "products",
      label: "Logo Items",
      info: "Logo / Featured Image & Title will be used",
    },
    {
      type: "collection",
      id: "collection",
      label: "Collection",
      info: "Logo Featured Image & Title will be used",
    },
    ...spacing,
  ],
  blocks: [
    {
      type: "manual-item",
      name: "Manual Item",
      settings: [],
    },
  ],

  presets: [
    {
      name: "Portfolio preview",
    },
  ],
};
