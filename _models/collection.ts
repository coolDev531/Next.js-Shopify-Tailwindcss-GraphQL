import { ShopifySection } from "_models/_shopify";

export const collection: ShopifySection = {
  name: "Collection",
  settings: [
    {
      type: "select",
      id: "layout_mode",
      label: "Layout mode",
      options: [
        {
          value: "collage",
          label: "Collage",
        },
        {
          value: "grid",
          label: "Grid",
        },
      ],
      default: "grid",
    },
    {
      type: "radio",
      id: "pagination_mode",
      label: "Pagination mode",
      options: [
        {
          value: "pagination",
          label: "Standard pagination",
        },
        {
          value: "infinite_scrolling",
          label: "Infinite scrolling",
        },
      ],
      default: "pagination",
    },
    {
      type: "checkbox",
      id: "enable_tag_filters",
      label: "Enable filtering by product tag",
      default: true,
    },
    {
      type: "checkbox",
      id: "enable_sort_by",
      label: "Enable collection sorting",
      default: true,
    },
    {
      type: "checkbox",
      id: "enable_type_filters",
      label: "Enable filtering by product type",
      default: true,
    },
    {
      type: "checkbox",
      id: "enable_vendor_filters",
      label: "Enable filtering by product vendor",
      default: true,
    },
    {
      type: "checkbox",
      id: "show_vendor",
      label: "Show vendor",
      default: true,
    },
    {
      type: "checkbox",
      id: "show_quick_shop",
      label: "Show quick shop",
      default: true,
    },
    {
      type: "header",
      content: "Grid",
      info: "Those settings are only used if the grid layout is selected.",
    },
    {
      type: "checkbox",
      id: "grid_remove_spacing",
      label: "Remove spacing between grid items",
      default: false,
    },
    {
      type: "select",
      id: "grid_items_per_row",
      label: "Items per row",
      options: [
        {
          value: "2",
          label: "2",
        },
        {
          value: "3",
          label: "3",
        },
        {
          value: "4",
          label: "4",
        },
        {
          value: "5",
          label: "5",
        },
        {
          value: "6",
          label: "6",
        },
      ],
      default: "4",
    },
    {
      type: "select",
      id: "number_of_rows",
      label: "Number of rows",
      options: [
        {
          value: "1",
          label: "1",
        },
        {
          value: "2",
          label: "2",
        },
        {
          value: "3",
          label: "3",
        },
        {
          value: "4",
          label: "4",
        },
        {
          value: "5",
          label: "5",
        },
        {
          value: "6",
          label: "6",
        },
        {
          value: "7",
          label: "7",
        },
        {
          value: "8",
          label: "8",
        },
      ],
      default: "4",
    },
    {
      type: "header",
      content: "Custom Brand Page",
    },
    {
      type: "checkbox",
      id: "brand_page",
      label: "Custom Brand Content",
      default: false,
    },
    {
      type: "header",
      content: "Slider Banner",
    },
    {
      type: "checkbox",
      id: "slider_banner",
      label: "Slider Banner",
      default: false,
    },
  ],
  blocks: [
    {
      type: "brand_content_block",
      name: "Brand Content Block",
      settings: [
        {
          type: "text",
          id: "handle",
          label: "handle",
        },
        {
          type: "textarea",
          id: "heading",
          label: "Heading",
        },
        {
          type: "textarea",
          id: "content",
          label: "Brief Story",
        },
        {
          type: "image_picker",
          id: "image",
          label: "Image",
        },
        {
          type: "radio",
          id: "image_position",
          label: "Image Position",
          default: "left",
          options: [
            {
              value: "disable",
              label: "Disable Image",
            },
            {
              value: "left",
              label: "Left",
            },
            {
              value: "right",
              label: "Right",
            },
          ],
        },
        {
          type: "text",
          id: "cta1_text",
          label: "Call to Action Text",
        },
        {
          type: "url",
          id: "cta1_url",
          label: "Call to Action",
        },
        {
          type: "text",
          id: "cta2_text",
          label: "Secondary Button Text",
        },
        {
          type: "url",
          id: "cta2_url",
          label: "Secondary Button",
        },
        {
          type: "checkbox",
          id: "horizontal_break",
          label: "Add Horizontal Line Below",
          default: false,
        },
      ],
    },
    {
      type: "image",
      name: "Banner Images",
      settings: [
        {
          type: "text",
          id: "title",
          label: "Name",
        },
        {
          type: "image_picker",
          id: "image",
          label: "Primary Image",
        },
        {
          type: "image_picker",
          id: "image_hover",
          label: "Alternative Image on Mouseover",
        },
        {
          type: "collection",
          id: "link",
          label: "Collection",
        },
      ],
    },
  ],
  presets: [{ name: "Collection" }],
};
