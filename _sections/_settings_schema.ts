import { ShopifySettings } from "types/shopify";

export const accentColors = [
  {
    type: "header",
    content: "Accents",
  },
  {
    type: "color",
    id: "color_accent",
    label: "Color_accent",
  },
  {
    type: "color",
    id: "color_accent_contrast",
    label: "Color_accent_contrast",
  },
  {
    type: "color",
    id: "color_accent_secondary",
    label: "Color_accent_secondary",
  },
  {
    type: "color",
    id: "color_accent_secondary_contrast",
    label: "Color_accent_secondary_contrast",
  },
  {
    type: "header",
    content: "Accents Dark",
  },
  {
    type: "color",
    id: "color_accent_dark",
    label: "Color_accent_dark",
  },
  {
    type: "color",
    id: "color_accent_contrast_dark",
    label: "Color_accent_contrast_dark",
  },
  {
    type: "color",
    id: "color_accent_secondary_dark",
    label: "Color_accent_secondary_dark",
  },
  {
    type: "color",
    id: "color_accent_secondary_contrast_dark",
    label: "Color_accent_secondary_contrast_dark",
  },
] as const;

export const settingsSchema: ShopifySettings = [
  {
    name: "theme_info",
    theme_name: "Shopify Theme",
    theme_author: "Lunalemon",
    theme_version: "1.0.0",
    theme_documentation_url: "http://lunalemon.dev/",
    theme_support_url: "https://lunalemon.dev/",
  },
  {
    name: "Colors",
    settings: [
      {
        type: "select",
        id: "grayscale",
        label: "Grayscale",
        options: [
          {
            value: "gray",
            label: "Gray",
          },
          {
            value: "slate",
            label: "Slate",
          },
          {
            value: "zinc",
            label: "Zinc",
          },
          {
            value: "neutral",
            label: "Neutral",
          },
          {
            value: "stone",
            label: "Stone",
          },
          {
            value: "bluegray",
            label: "Blue Gray",
          },
          {
            value: "coolgray",
            label: "Cool Gray",
          },
        ],
      },
      {
        type: "header",
        content: "Backgrounds",
      },
      {
        type: "color",
        id: "color_bg",
        label: "Color_bg",
      },
      {
        type: "color",
        id: "color_bg_dark",
        label: "Color_bg_dark",
      },
      {
        type: "color",
        id: "color_bg_secondary",
        label: "Color_bg_secondary",
      },
      {
        type: "color",
        id: "color_bg_secondary_dark",
        label: "Color_bg_secondary_dark",
      },
      {
        type: "header",
        content: "Card Backgrounds",
      },
      {
        type: "color",
        id: "color_bg_card",
        label: "Color_bg_card",
      },
      {
        type: "color",
        id: "color_bg_card_dark",
        label: "Color_bg_card_dark",
      },
      ...accentColors,
      {
        type: "header",
        content: "Utility Colors",
      },
      {
        type: "color",
        id: "color_success",
        label: "Color_success",
      },
      {
        type: "color",
        id: "color_info",
        label: "Color_info",
      },
      {
        type: "color",
        id: "color_warning",
        label: "Color_warning",
      },
      {
        type: "color",
        id: "color_danger",
        label: "Color_danger",
      },
    ],
  },

  {
    name: "Spacing",
    settings: [
      {
        type: "header",
        content: "General",
      },
      {
        type: "range",
        id: "spacing_section",
        label: "Section Spacing",
        default: 80,
        min: 20,
        max: 300,
        step: 10,
        unit: "px",
      },
      {
        type: "range",
        id: "spacing_section_mobile",
        label: "Mobile Section Spacing",
        default: 60,
        min: 10,
        max: 300,
        step: 10,
        unit: "px",
      },
    ],
  },
  {
    name: "Typography",
    settings: [
      {
        type: "header",
        content: "Headings",
      },
      {
        type: "font_picker",
        id: "font_heading",
        label: "Font",
        default: "helvetica_n4",
      },
      {
        type: "header",
        content: "Body text",
      },
      {
        type: "font_picker",
        id: "font_text",
        label: "Font",
        default: "helvetica_n4",
      },
    ],
  },
  {
    name: "Social media",
    settings: [
      {
        type: "header",
        content: "Accounts",
      },
      {
        type: "text",
        id: "social_facebook",
        info: "https://www.facebook.com/shopify",
        label: "Facebook",
      },
      {
        type: "text",
        id: "social_github",
        info: "https://github.com/FelixTellmann",
        label: "Github",
      },
      {
        type: "text",
        id: "social_twitter",
        info: "https://twitter.com/shopify",
        label: "Twitter",
      },
      {
        type: "text",
        id: "social_instagram",
        info: "https://instagram.com/shopify",
        label: "Instagram",
      },
    ],
  },
  {
    name: "Favicon",
    settings: [
      {
        type: "image_picker",
        id: "favicon",
        label: "Image",
        info: "96 x 96px .png recommended",
      },
    ],
  },
];
