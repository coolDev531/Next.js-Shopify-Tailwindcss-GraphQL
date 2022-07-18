import { ShopifySection } from "../.shopify-cms/types/shopify";
import { TestSection } from "../.shopify-cms/types/sections";

export const test: ShopifySection<TestSection> = {
  name: "Test",
  settings: [
    {
      type: "product_list",
      id: "amazing",
      label: "Amazing",
    },
  ],
  presets: [
    {
      name: "Test",
    },
  ],
};
