import { ShopifySection } from "types/shopify";

export const header: ShopifySection = {
  name: "Header",
  settings: [
    {
      type: "image_picker",
      id: "logo",
      label: "Logo",
    },
    {
      type: "link_list",
      id: "menu",
      label: "Menu",
    },
  ],
};
