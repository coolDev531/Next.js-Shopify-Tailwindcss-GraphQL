import { heading } from "./heading";
import { icons } from "./utils/icons";
import { ShopifySection } from "../.shopify-cms/types/shopify";

export const tabsImageCard: ShopifySection = {
  name: "Tabs image card",
  settings: [],
  blocks: [
    {
      type: "heading",
      name: "Heading",
      settings: heading.settings,
      limit: 1,
    },
    {
      type: "tab",
      name: "Tab",
      settings: [
        {
          type: "header",
          content: "Tab Selector",
        },
        {
          type: "text",
          id: "tab_title",
          label: "Title",
        },
        {
          type: "select",
          id: "tab_icon",
          label: "Icon",
          options: icons,
        },
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
          content: "Image",
        },
        {
          type: "image_picker",
          id: "image",
          label: "Image",
        },
        {
          type: "url",
          id: "image_link",
          label: "Link",
        },
      ],
      limit: 6,
    },
  ],
  presets: [
    {
      name: "Tabs image card",
    },
  ],
};
