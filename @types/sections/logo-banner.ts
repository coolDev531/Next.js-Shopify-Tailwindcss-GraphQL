import { _Image } from "shopify-typed-node-api/dist/clients/rest/dataTypes";

export type LogoBannerSection = {
  blocks: logoBannerBlocks[];
  id: string;
  settings: {
    /** Input type: range */
    height: number;
  };
  type: "logo-banner";
};
type logoBannerBlocks =
  | {
      id: string;
      settings: {
        /** Input type: html */
        svg?: string;
        /** Input type: url */
        url?: string;
      };
      type: "svg";
    }
  | {
      id: string;
      settings: {
        /** Input type: image_picker */
        image?: _Image;
        /** Input type: url */
        url?: string;
      };
      type: "image";
    };
