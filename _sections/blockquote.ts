import { ShopifySection } from "types/shopify";

export const blockquote: ShopifySection = {
  name: "Blockquote",
  settings: [
    {
      type: "header",
      content: "Content",
    },
    {
      type: "textarea",
      id: "quote",
      label: "Quote",
    },
    {
      type: "text",
      id: "author",
      label: "Author",
    },
    {
      type: "text",
      id: "job_title",
      label: "Title",
    },
    {
      type: "header",
      content: "Settings",
    },
    {
      type: "checkbox",
      id: "quotation_marks",
      label: "Show quotation marks",
    },
  ],
  presets: [
    {
      name: "Blockquote",
    },
  ],
};
