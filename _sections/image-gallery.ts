import { ShopifySection } from "types/shopify";

export const imageGallery: ShopifySection = {
  name: "Image gallery",
  settings: [
    {
      type: "header",
      content: "Image 1",
    },
    {
      type: "image_picker",
      id: "image1",
      label: "Image",
    },
    {
      type: "text",
      id: "title1",
      label: "Title",
    },
    {
      type: "header",
      content: "Image 2",
    },
    {
      type: "image_picker",
      id: "image2",
      label: "Image",
    },
    {
      type: "text",
      id: "title2",
      label: "Title",
    },
    {
      type: "header",
      content: "Image 3",
    },
    {
      type: "image_picker",
      id: "image3",
      label: "Image",
    },
    {
      type: "text",
      id: "title3",
      label: "Title",
    },
    {
      type: "header",
      content: "Image 4",
    },
    {
      type: "image_picker",
      id: "image4",
      label: "Image",
    },
    {
      type: "text",
      id: "title4",
      label: "Title",
    },
    {
      type: "header",
      content: "Image 5",
    },
    {
      type: "image_picker",
      id: "image5",
      label: "Image",
    },
    {
      type: "text",
      id: "title5",
      label: "Title",
    },
    {
      type: "header",
      content: "Image 6",
    },
    {
      type: "image_picker",
      id: "image6",
      label: "Image",
    },
    {
      type: "text",
      id: "title6",
      label: "Title",
    },
  ],
  presets: [
    {
      name: "Image gallery",
    },
  ],
};
