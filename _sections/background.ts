import { BackgroundSection } from "types/sections";
import { ShopifySection } from "types/shopify";

export const background: ShopifySection<BackgroundSection> = {
  name: "Background",
  blocks: [
    {
      type: "bg",
      name: "Responsive Background",
      settings: [
        {
          type: "text",
          id: "title",
          label: "Title",
        },
        {
          type: "radio",
          id: "type",
          label: "Type",
          default: "all",
          options: [
            {
              value: "all",
              label: "All Sizes",
            },
            {
              value: "mobile",
              label: "Mobile",
            },
            {
              value: "mobile_tablet",
              label: "Mobile & Tablet",
            },
            {
              value: "tablet",
              label: "Tablet",
            },
            {
              value: "tablet_desktop",
              label: "Tablet & Desktop",
            },
            {
              value: "desktop",
              label: "Desktop",
            },
          ],
        },
        {
          type: "header",
          content: "Settings",
        },
        {
          type: "color_background",
          id: "color",
          label: "Color",
        },
        {
          type: "textarea",
          id: "css",
          label: "Css Properties",
        },
        {
          type: "header",
          content: "Image / Svg",
        },

        {
          type: "image_picker",
          id: "image",
          label: "Image",
        },
        {
          type: "textarea",
          id: "svg",
          label: "Svg",
        },
        {
          type: "range",
          id: "opacity",
          label: "Opacity",
          default: 100,
          min: 0,
          max: 100,
          step: 1,
          unit: "%",
        },
        {
          type: "header",
          content: "Position",
        },
        {
          type: "range",
          id: "height",
          label: "Height",
          default: 800,
          min: 0,
          max: 3000,
          step: 50,
          unit: "px",
        },
        {
          type: "range",
          id: "marginTop",
          label: "Top Margin",
          default: 0,
          min: -4000,
          max: 1000,
          step: 50,
          unit: "px",
        },
      ],
    },
  ],

  presets: [
    {
      name: "Background",
    },
  ],
};
