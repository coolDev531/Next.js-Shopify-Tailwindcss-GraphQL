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
        /** Input type: richtext */
        paragraph?: `<p${string}</p>`;
        /** Input type: html */
        svg?: string;
        /** Input type: text */
        title?: string;
      };
      type: "info-card";
    };
