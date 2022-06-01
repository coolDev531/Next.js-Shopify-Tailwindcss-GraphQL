import { _Image } from "shopify-typed-node-api/dist/clients/rest/dataTypes";

export type InfoCardsSection = {
  blocks: infoCardsBlocks[];
  id: string;
  settings: {
    /** Input type: text */
    pre_title?: string;
    /** Input type: text */
    title?: string;
  };
  type: "info-cards"; 
};
type infoCardsBlocks =
  | {
      id: string;      
      settings: {
        /** Input type: image_picker */
        icon?: _Image;
        /** Input type: richtext */
        paragraph?: `<p${string}</p>`;
        /** Input type: text */
        title?: string;
      };
      type: "info-card";
    };
