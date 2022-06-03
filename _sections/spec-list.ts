import { header } from "_sections/header";
import { heading } from "_sections/heading";
import { icons } from "_sections/utils";

import { ShopifySection, ShopifySelect } from "types/shopify";

export const specList: ShopifySection = {
  name: "Spec list",
  settings: [],
  blocks: [
    {
      type: "heading",
      name: "Heading",
      settings: heading.settings,
    },
    {
      type: "list",
      name: "List",
      settings: [
        {
          type: "header",
          content: "List Item 1",
        },
        {
          type: "select",
          id: "icon1",
          label: "Icon",
          options: icons,
        },
        {
          type: "text",
          id: "text1",
          label: "Content",
        },
        {
          type: "header",
          content: "List Item 2",
        },
        {
          type: "select",
          id: "icon2",
          label: "Icon",
          options: icons,
        },
        {
          type: "text",
          id: "text2",
          label: "Content",
        },
        {
          type: "header",
          content: "List Item 3",
        },
        {
          type: "select",
          id: "icon3",
          label: "Icon",
          options: icons,
        },
        {
          type: "text",
          id: "text3",
          label: "Content",
        },
        {
          type: "header",
          content: "List Item 4",
        },
        {
          type: "select",
          id: "icon4",
          label: "Icon",
          options: icons,
        },
        {
          type: "text",
          id: "text4",
          label: "Content",
        },
        {
          type: "header",
          content: "List Item 5",
        },
        {
          type: "select",
          id: "icon5",
          label: "Icon",
          options: icons,
        },
        {
          type: "text",
          id: "text5",
          label: "Content",
        },
        {
          type: "header",
          content: "List Item 6",
        },
        {
          type: "select",
          id: "icon6",
          label: "Icon",
          options: icons,
        },
        {
          type: "text",
          id: "text6",
          label: "Content",
        },
      ],
    },
  ],

  presets: [
    {
      name: "Spec list",
    },
  ],
};
