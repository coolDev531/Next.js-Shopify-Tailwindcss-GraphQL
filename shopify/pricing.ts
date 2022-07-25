import { accentColors } from "shopify/utils/accentColors";
import { PricingSection } from "../.shopify-cms/types/sections";
import { ShopifySection } from "../.shopify-cms/types/shopify";

export const pricing: ShopifySection<PricingSection> = {
  name: "Pricing",
  settings: [
    {
      type: "header",
      content: "Header",
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
  ],
  blocks: [
    {
      type: "package",
      name: "Package",
      settings: [
        {
          type: "header",
          content: "Header",
        },
        {
          type: "text",
          id: "title",
          label: "Title",
        },
        {
          type: "text",
          id: "price",
          label: "Price",
        },
        {
          type: "text",
          id: "subtitle",
          label: "Subtitle",
        },
        {
          type: "header",
          content: "Primary Button",
        },
        {
          type: "text",
          id: "cta1",
          label: "Text",
        },
        {
          type: "url",
          id: "cta1_link",
          label: "Link",
        },
        {
          type: "header",
          content: "Secondary Button",
        },
        {
          type: "text",
          id: "cta2",
          label: "Text",
        },
        {
          type: "url",
          id: "cta2_link",
          label: "Link",
        },
        {
          type: "header",
          content: "Features",
        },
        {
          type: "text",
          id: "feature_1",
          label: "Feature_1",
        },
        {
          type: "text",
          id: "feature_2",
          label: "Feature_2",
        },
        {
          type: "text",
          id: "feature_3",
          label: "Feature_3",
        },
        {
          type: "text",
          id: "feature_4",
          label: "Feature_4",
        },
        {
          type: "text",
          id: "feature_5",
          label: "Feature_5",
        },
        {
          type: "text",
          id: "feature_6",
          label: "Feature_6",
        },
        {
          type: "text",
          id: "feature_7",
          label: "Feature_7",
        },
        {
          type: "text",
          id: "feature_8",
          label: "Feature_8",
        },
        {
          type: "text",
          id: "feature_9",
          label: "Feature_9",
        },
        {
          type: "text",
          id: "feature_10",
          label: "Feature_10",
        },
        {
          type: "header",
          content: "Settings",
        },
        {
          type: "checkbox",
          id: "shadow",
          label: "Shadow",
        },
        {
          type: "checkbox",
          id: "primary",
          label: "Primary",
        },
        ...accentColors,
      ],
    },
  ],

  presets: [
    {
      name: "Pricing",
    },
  ],
};
