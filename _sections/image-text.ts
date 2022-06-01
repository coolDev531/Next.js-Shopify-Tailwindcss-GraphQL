import { ShopifySection } from "types/shopify";

export const imageText: ShopifySection = {
  name: "Image text",
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
      type: "image_picker",
      id: "image",
      label: "Image",
    },
    {
      type: "header",
      content: "Settings",
    },
    {
      type: "radio",
      id: "position",
      label: "Image Position",
      default: "right",
      options: [
        {
          value: "left",
          label: "Left",
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
      name: "Image text",
    },
  ],
};
