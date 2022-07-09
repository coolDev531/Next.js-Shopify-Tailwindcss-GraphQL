import { accentColors } from "_sections/_settings_schema";
import { ShopifySection } from "types/shopify";
import { PageSettingsSection } from "types/sections";

export const pageSettings: ShopifySection<PageSettingsSection> = {
  name: "Page settings",
  settings: [...accentColors],
  presets: [
    {
      name: "Page settings",
    },
  ],
};
