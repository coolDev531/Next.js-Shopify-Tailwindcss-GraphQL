import { ShopifySection } from ".shopify-cms/types/shopify";

export const spacing: ShopifySection["settings"] = [
  {
    type: "header",
    content: "Section Spacing",
  },
  {
    type: "radio",
    id: "spacing",
    label: "Spacing",
    default: "md",
    options: [
      {
        value: "none",
        label: "None",
      },
      {
        value: "sm",
        label: "Small (py-8)",
      },
      {
        value: "md",
        label: "Medium (py-16)",
      },
      {
        value: "lg",
        label: "Large (py-32)",
      },
      {
        value: "custom",
        label: "Custom",
      },
    ],
  },
  {
    type: "range",
    id: "spacing_top",
    label: "Spacing_top",
    default: 0,
    min: 0,
    max: 64,
    step: 1,
    unit: "pt",
    info: "Requires Spacing = Custom",
  },
  {
    type: "range",
    id: "spacing_bottom",
    label: "Spacing_bottom",
    default: 0,
    min: 0,
    max: 64,
    step: 1,
    unit: "pb",
    info: "Requires Spacing = Custom",
  },
];
