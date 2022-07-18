import { PageSettingsSection } from "../.shopify-cms/types/sections";
import { ShopifySection } from "../.shopify-cms/types/shopify";
import { accentColors } from "./utils/accentColors";

export const pageSettings: ShopifySection<PageSettingsSection> = {
  name: "Page settings",
  settings: [...accentColors],
  presets: [
    {
      name: "Page settings",
    },
  ],
};
