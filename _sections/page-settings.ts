import { ShopifySection } from "types/shopify";
import { PageSettingsSection } from "types/sections";

export const pageSettings: ShopifySection<PageSettingsSection> = {
  name: "Page settings",
  limit: 1,
  settings: [
    {
      type: "color",
      id: "color_accent",
      label: "Color Accent",
    },
  ],
  presets: [
    {
      name: "Page settings",
    },
  ],
};
