import { heading } from "_sections/heading";
import { TestimonialListSection } from "types/sections";
import { ShopifySection } from "types/shopify";

export const testimonialList: ShopifySection<TestimonialListSection> = {
  name: "Testimonial list",
  settings: [
    ...heading.settings,
    {
      type: "product_list",
      id: "products",
      label: "Products",
      limit: 2,
    },
  ],
  blocks: [
    {
      type: "testimonial",
      name: "Manual Testimonial",
      settings: [
        {
          type: "header",
          content: "Content",
        },
        {
          type: "image_picker",
          id: "image",
          label: "Image",
        },
        {
          type: "richtext",
          id: "quote",
          label: "Quote",
        },
        {
          type: "text",
          id: "author",
          label: "Author",
        },
        {
          type: "text",
          id: "job_title",
          label: "Title",
        },
        {
          type: "url",
          id: "link",
          label: "Link",
        },
      ],
    },
  ],

  presets: [
    {
      name: "Testimonial list",
    },
  ],
};
