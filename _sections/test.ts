import { ShopifySection } from "types/shopify";

export const test: ShopifySection = {
  name: "Test",
  settings: [
    {
      type: "image_picker",
      id: "image",
      label: "Image",
    },
    {
      type: "page",
      id: "page",
      label: "Page",
    },
    {
      type: "product",
      id: "product",
      label: "Product",
    },
    {
      type: "product_list",
      id: "product_list",
      label: "product list",
    },
    {
      type: "article",
      id: "article",
      label: "Article",
    },
    {
      type: "blog",
      id: "blog",
      label: "blog",
    },
    {
      type: "collection",
      id: "collection",
      label: "collection",
    },
    {
      type: "collection_list",
      id: "collection_list",
      label: "collection_list",
    },
    {
      type: "color",
      id: "color",
      label: "color",
    },
    {
      type: "font",
      id: "font",
      label: "font",
    },
    {
      type: "font_picker",
      id: "font_picker",
      label: "font_picker",
      default: "helvetica_n4",
    },
    {
      type: "color_background",
      id: "color_background",
      label: "color_background",
    },
    {
      type: "link_list",
      id: "link_list",
      label: "link_list",
    },
  ],
  presets: [
    {
      name: "Test",
    },
  ],
};
