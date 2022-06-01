export type StatsGraphSection = {
  blocks: statsGraphBlocks[];
  id: string;
  settings: {
    
  };
  type: "stats-graph"; 
};
type statsGraphBlocks =
  | {
      id: string;      
      settings: {
        /** Input type: text */
        descriptions?: string;
        /** Input type: text */
        stat?: string;
      };
      type: "stat";
    };
