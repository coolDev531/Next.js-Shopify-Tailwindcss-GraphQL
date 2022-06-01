import { _LinkList } from "types/shopify";
import { _Image } from "shopify-typed-node-api/dist/clients/rest/dataTypes";

export type HeaderSection = {
    id: string;
  settings: {
    /** Input type: image_picker */
    logo?: _Image;
    /** Input type: link_list */
    menu?: _LinkList;
  };
  type: "header"; 
};
