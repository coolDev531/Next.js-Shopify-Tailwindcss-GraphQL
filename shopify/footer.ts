import { FooterSection } from "../.shopify-cms/types/sections";
import { ShopifySection } from "../.shopify-cms/types/shopify";

export const footer: ShopifySection<FooterSection> = {
  name: "Footer",
  settings: [
    {
      type: "header",
      content: "Social Media Accounts",
    },
    {
      type: "url",
      id: "facebook",
      label: "Facebook",
    },
    {
      type: "url",
      id: "github",
      label: "Github",
    },
    {
      type: "url",
      id: "instagram",
      label: "Instagram",
    },
    {
      type: "url",
      id: "google",
      label: "Google",
    },
  ],
  blocks: [
    {
      type: "menu",
      name: "Menu",
      limit: 4,
      settings: [
        {
          type: "link_list",
          id: "menu",
          label: "Menu",
        },
      ],
    },
  ],
  presets: [
    {
      name: "Footer",
    },
  ],
};
