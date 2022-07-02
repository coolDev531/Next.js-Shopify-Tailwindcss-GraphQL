import { Wrapper } from "_client/layout/wrapper";
import { BlockHeading } from "_client/sections/block-heading";
import { BlockImageText } from "_client/sections/block-image-text";
import { FC } from "react";
import { StorySection } from "types/sections";

export const Story: FC<StorySection> = ({ id, blocks, type }) => {
  return (
    <>
      <Wrapper paddingY="base" maxWidth="xl">
        <div className="flex flex-col gap-8 md:gap-24">
          {blocks.map((block) => {
            switch (block.type) {
              case "heading":
                return <BlockHeading key={block.id} {...block} />;
              case "image-text":
                return <BlockImageText key={block.id} {...block} />;
            }
          })}
        </div>
      </Wrapper>
    </>
  );
};
