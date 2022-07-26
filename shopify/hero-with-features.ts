import { spacing } from "shopify/utils/spacing";
import { icons } from "./utils/icons";
import { HeroWithFeaturesSection } from "../.shopify-cms/types/sections";
import { ShopifySection } from "../.shopify-cms/types/shopify";

export const heroWithFeatures: ShopifySection<HeroWithFeaturesSection> = {
  name: "Hero with features",
  settings: [
    {
      type: "header",
      content: "Content",
    },
    {
      type: "text",
      id: "pre_title",
      label: "Pre header",
    },
    {
      type: "text",
      id: "title",
      label: "Title",
    },
    {
      type: "product_list",
      id: "tech",
      label: "Tech Stack",
      limit: 3,
    },
    {
      type: "richtext",
      id: "paragraph",
      label: "Paragraph",
    },
    {
      type: "header",
      content: "Primary Button",
    },
    {
      type: "text",
      id: "cta1",
      label: "Text",
    },
    {
      type: "url",
      id: "cta1_link",
      label: "Link",
    },
    {
      type: "header",
      content: "Secondary Button",
    },
    {
      type: "text",
      id: "cta2",
      label: "Text",
    },
    {
      type: "url",
      id: "cta2_link",
      label: "Link",
    },
    {
      type: "header",
      content: "Images",
    },
    {
      type: "image_picker",
      id: "image_1",
      label: "Image 1",
    },
    {
      type: "image_picker",
      id: "image_2",
      label: "Image 2",
    },
    {
      type: "image_picker",
      id: "image_3",
      label: "Image 3",
    },
    ...spacing,
  ],
  max_blocks: 4,
  blocks: [
    {
      type: "feature",
      name: "Feature",
      settings: [
        {
          type: "text",
          id: "title",
          label: "Title",
        },
        {
          type: "textarea",
          id: "paragraph",
          label: "Paragraph",
        },
        {
          type: "select",
          id: "icon",
          label: "Icon",
          options: icons,
        },
      ],
    },
  ],

  presets: [
    {
      name: "Hero with features",
    },
  ],
};
