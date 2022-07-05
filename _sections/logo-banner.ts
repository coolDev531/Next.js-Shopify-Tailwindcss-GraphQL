import { header } from "_sections/header";
import { ShopifySection } from "types/shopify";

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
          type: "html",
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
