import { ShopifySection } from "types/shopify";

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
  ],

  blocks: [
    {
      type: "info-card",
      name: "Info Card",
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
          type: "html",
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
