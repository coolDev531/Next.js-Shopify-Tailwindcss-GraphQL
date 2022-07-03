import { ShopifySection } from "types/shopify";
import { BackgroundSection } from "types/sections";

const backgroundSettings = [
  {
    type: "header",
    content: "Settings",
  },
  {
    type: "color_background",
    id: "color",
    label: "Color",
    default: "rgb(255 255 255 / 5%)",
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
    type: "html",
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
    min: -2000,
    max: 1000,
    step: 50,
    unit: "px",
  },
] as const;

export const background: ShopifySection<BackgroundSection> = {
  name: "Background",
  max_blocks: 3,
  blocks: [
    {
      type: "all",
      name: "All Devices",
      settings: [...backgroundSettings],
      limit: 1,
    },
    {
      type: "mobile",
      name: "Mobile",
      settings: [...backgroundSettings],
      limit: 1,
    },
    {
      type: "mobile_tablet",
      name: "Mobile & Tablet",
      settings: [...backgroundSettings],
      limit: 1,
    },
    {
      type: "tablet",
      name: "Tablet",
      settings: [...backgroundSettings],
      limit: 1,
    },
    {
      type: "tablet_desktop",
      name: "Tablet & Desktop",
      settings: [...backgroundSettings],
      limit: 1,
    },
    {
      type: "desktop",
      name: "Desktop",
      settings: [...backgroundSettings],
      limit: 1,
    },
  ],

  presets: [
    {
      name: "Background",
    },
  ],
};
