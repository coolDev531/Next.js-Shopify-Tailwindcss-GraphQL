import { _Image, _Collection } from "shopify-typed-node-api/dist/clients/rest/dataTypes";

export type HeroSection = {
  blocks: [];
  id: string;
  settings: {
    /** Input type: collection */
    collection?: _Collection;
    /** Input type: image_picker */
    image?: _Image;
    /** Input type: richtext */
    list?: `<p${string}</p>`;
    /** Input type: richtext */
    paragraph?: `<p${string}</p>`;
    /** Input type: text */
    pre_title?: string;
    /** Input type: text */
    title?: string;
  };
  type: "Hero";
};
