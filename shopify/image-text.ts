import { spacing } from "shopify/utils/spacing";
import { ShopifySection } from "../.shopify-cms/types/shopify";

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
      type: "header",
      content: "List Points",
    },
    {
      type: "text",
      id: "list_title",
      label: "Title",
    },
    {
      type: "richtext",
      id: "list",
      label: "List items",
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
      type: "paragraph",
      content: "Desktop Settings",
    },
    {
      type: "select",
      id: "aspect_desktop",
      label: "Aspect Ratio",
      options: [
        {
          value: "auto",
          label: "Auto Fit",
        },
        {
          value: "9-16",
          label: "Story Format",
        },
        {
          value: "1-1",
          label: "Square",
        },
        {
          value: "4-3",
          label: "4/3 TV Format",
        },
        {
          value: "3-2",
          label: "3/2 Smartphone",
        },
        {
          value: "16-9",
          label: "16-9 Widescreen",
        },
        {
          value: "21-9",
          label: "21-9 Ultra Widescreen",
        },
      ],
    },
    {
      type: "checkbox",
      id: "fit_height",
      label: "Adjust to min Text height",
    },
    {
      type: "paragraph",
      content: "Mobile Settings",
    },
    {
      type: "select",
      id: "aspect_mobile",
      label: "Aspect Ratio",
      default: "16-9",
      options: [
        {
          value: "hidden",
          label: "Hidden",
        },
        {
          value: "9-16",
          label: "Story Format",
        },
        {
          value: "1-1",
          label: "Square",
        },
        {
          value: "4-3",
          label: "4/3 TV Format",
        },
        {
          value: "3-2",
          label: "3/2 Smartphone",
        },
        {
          value: "16-9",
          label: "16-9 Widescreen",
        },
        {
          value: "21-9",
          label: "21-9 Ultra Widescreen",
        },
      ],
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
    ...spacing,
  ],
  presets: [
    {
      name: "Image text",
    },
  ],
};
