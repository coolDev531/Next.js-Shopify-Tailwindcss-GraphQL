import { _Image, _Collection } from "shopify-typed-node-api/dist/clients/rest/dataTypes";

export type HeroSection = {
  blocks: [];
  id: string;
  settings: {
    /** Input type: collection */
    collection: undefined | _Collection;
    /** Input type: image_picker */
    image: undefined | _Image;
    /** Input type: richtext */
    list: undefined | `<p${string}</p>`;
    /** Input type: richtext */
    paragraph: undefined | `<p${string}</p>`;
    /** Input type: text */
    pre_title: undefined | string;
    /** Input type: text */
    title: undefined | string;
  };
  type: "Hero";
};
