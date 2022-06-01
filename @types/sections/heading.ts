export type HeadingSection = {
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
};
