import { ShopifySection } from "types/shopify";
import { TestSection } from "types/sections";

export const test: ShopifySection<TestSection> = {
  name: "Test",
  settings: [
    {
      type: "page",
      id: "page",
      label: "Page",
    },
    {
      type: "blog",
      id: "blog",
      label: "Blog",
    },
    {
      type: "article",
      id: "article",
      label: "Article",
    },
    {
      type: "product",
      id: "product",
      label: "Product",
    },
    {
      type: "product_list",
      id: "product_list",
      label: "Product List",
    },
    {
      type: "collection",
      id: "collection",
      label: "Collection",
    },
    {
      type: "collection_list",
      id: "collection_list",
      label: "Collcetion list",
    },
    {
      type: "image_picker",
      id: "image",
      label: "Image",
    },
    {
      type: "link_list",
      id: "links",
      label: "Link list",
    },
    {
      type: "color",
      id: "color",
      label: "Color",
    },
    {
      type: "font",
      id: "font2",
      label: "Font family",
    },
    {
      type: "font_picker",
      id: "font",
      label: "font2",
      default: "helvetica_n4",
    },
  ],
  presets: [
    {
      name: "Test",
    },
  ],
};
