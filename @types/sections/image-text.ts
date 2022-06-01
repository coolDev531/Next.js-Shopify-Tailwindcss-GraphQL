import { _Image } from "shopify-typed-node-api/dist/clients/rest/dataTypes";

export type ImageTextSection = {
    id: string;
  settings: {
    /** Input type: image_picker */
    image?: _Image;
    /** Input type: richtext */
    paragraph?: `<p${string}</p>`;
    /** Input type: radio */
    position: "left" | "right";
    /** Input type: text */
    pre_title?: string;
    /** Input type: text */
    title?: string;
  };
  type: "image-text"; 
};
