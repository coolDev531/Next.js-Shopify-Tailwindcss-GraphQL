import { _Image } from "shopify-typed-node-api/dist/clients/rest/dataTypes";

export type StorySection = {
  blocks: storyBlocks[];
  id: string;
  settings: {
    
  };
  type: "story"; 
};
type storyBlocks =
  | {
      id: string;      
      settings: {
        /** Input type: richtext */
        paragraph?: `<p${string}</p>`;
        /** Input type: select */
        position: "left" | "center" | "right";
        /** Input type: text */
        pre_title?: string;
        /** Input type: text */
        title?: string;
      };
      type: "heading";
    }
  | {
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
