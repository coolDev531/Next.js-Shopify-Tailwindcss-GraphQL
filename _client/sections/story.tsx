import BlockHeading from "_client/sections/block-heading";
import { BlockImageText } from "_client/sections/block-image-text";
import { FC } from "react";
import { StorySection } from "types/sections";

export const Story: FC<StorySection> = ({ id, blocks }) => {
  return (
    <>
      {blocks.map((block) => {
        switch (block.type) {
          case "heading":
            return <BlockHeading key={block.id} {...block} />;
          case "image-text":
            return <BlockImageText key={block.id} {...block} />;
        }
      })}
    </>
  );
};
