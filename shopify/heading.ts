import { spacing } from "shopify/utils/spacing";
import { HeadingSection } from "../.shopify-cms/types/sections";
import { ShopifySection } from "../.shopify-cms/types/shopify";

export const heading: ShopifySection<HeadingSection> = {
  name: "Heading",
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
      content: "Settings",
    },
    {
      type: "select",
      id: "position",
      label: "Position",
      default: "center",
      options: [
        {
          value: "left",
          label: "Left",
        },
        {
          value: "center",
          label: "Center",
        },
        {
          value: "right",
          label: "Right",
        },
      ],
    },
  ],
  presets: [
    {
      name: "Heading",
    },
  ],
};
