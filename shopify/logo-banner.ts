import { spacing } from "shopify/utils/spacing";
import { header } from "./header";
import { ShopifySection } from "../.shopify-cms/types/shopify";

export const logoBanner: ShopifySection = {
  name: "Logo banner",
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
    {
      type: "header",
      content: "Settings",
    },
    {
      type: "range",
      id: "height",
      label: "Height",
      default: 40,
      min: 30,
      max: 120,
      step: 5,
      unit: "px",
    },
    {
      type: "radio",
      id: "style",
      label: "Style",
      default: "slider",
      options: [
        {
          value: "slider",
          label: "Slider",
        },
        {
          value: "grid",
          label: "Grid",
        },
      ],
    },
    {
      type: "paragraph",
      content: "Slider Specific Settings",
    },
    {
      type: "checkbox",
      id: "animate",
      label: "Show slide animation",
    },
    {
      type: "range",
      id: "animation_duration",
      label: "Animation duration",
      default: 20,
      min: 5,
      max: 100,
      step: 1,
      unit: "s",
    },
    {
      type: "paragraph",
      content: "Grid Specific Settings",
    },
    {
      type: "range",
      id: "minItems",
      label: "Min per row",
      default: 2,
      min: 1,
      max: 4,
      step: 1,
      unit: "ea",
    },
    {
      type: "range",
      id: "maxItems",
      label: "Max per row",
      default: 5,
      min: 1,
      max: 10,
      step: 1,
      unit: "ea",
    },
    {
      type: "range",
      id: "paddingY",
      label: "PaddingY",
      info: "4px steps",
      default: 8,
      min: 0,
      max: 32,
      step: 1,
      unit: "p",
    },
    {
      type: "range",
      id: "paddingX",
      label: "PaddingX",
      info: "4px steps",
      default: 8,
      min: 0,
      max: 32,
      step: 1,
      unit: "p",
    },
    ...spacing,
  ],
  blocks: [
    {
      type: "manual-svg",
      name: "Manual Svg Logo",
      settings: [
        {
          type: "header",
          content: "Content",
        },
        {
          type: "textarea",
          id: "svg",
          label: "SVG code",
        },
        {
          type: "text",
          id: "title",
          label: "Title",
        },
      ],
    },
    {
      type: "manual-image",
      name: "Manual Image Logo",
      settings: [
        {
          type: "header",
          content: "Content",
        },
        {
          type: "image_picker",
          id: "image",
          label: "Image",
        },
        {
          type: "text",
          id: "title",
          label: "Title",
        },
      ],
    },
  ],

  presets: [
    {
      name: "Logo banner",
    },
  ],
};
