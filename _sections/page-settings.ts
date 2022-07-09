import { accentColors } from "_sections/_settings_schema";
import { PageSettingsSection } from "types/sections";
import { ShopifySection } from "types/shopify";

export const pageSettings: ShopifySection<PageSettingsSection> = {
  name: "Page settings",
  settings: [...accentColors],
  presets: [
    {
      name: "Page settings",
    },
  ],
};
