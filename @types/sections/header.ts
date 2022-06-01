import { _LinkList } from "types/shopify";
import { _Image } from "shopify-typed-node-api/dist/clients/rest/dataTypes";

export type HeaderSection = {
  blocks: [];
  id: string;
  settings: {
    /** Input type: image_picker */
    logo: undefined | _Image;
    /** Input type: link_list */
    menu: undefined | _LinkList;
  };
  type: "Header";
};
