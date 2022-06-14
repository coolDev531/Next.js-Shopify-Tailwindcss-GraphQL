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
      type: "dynamic-info-card",
      name: "Dynamic Info Card",
      settings: [
        {
          type: "header",
          content: "Dynamic content",
          info: "The Title, excerpt, and metafield svg are used for each info card.",
        },
        {
          type: "article",
          id: "content",
          label: "Content Source",
        },
      ],
    },
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
