import { heading } from "_sections/heading";
import { ShopifySection } from "types/shopify";
import { TestimonialListSection } from "types/sections";

export const testimonialList: ShopifySection<TestimonialListSection> = {
  name: "Testimonial list",
  settings: [],
  blocks: [
    {
      type: "heading",
      name: "Heading",
      settings: heading.settings,
    },
    {
      type: "testimonial",
      name: "Testimonial",
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
          type: "image_picker",
          id: "avatar",
          label: "Avatar Image",
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
