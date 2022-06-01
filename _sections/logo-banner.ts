import { header } from "_sections/header";
import { ShopifySection } from "types/shopify";

export const logoBanner: ShopifySection = {
  name: "Logo banner",
  settings: [
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
  ],
  blocks: [
    {
      type: "svg",
      name: "Svg Logo",
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
          type: "url",
          id: "url",
          label: "Link",
        },
      ],
    },
    {
      type: "image",
      name: "Image Logo",
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
          type: "url",
          id: "url",
          label: "Link",
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
