import { Wrapper } from "_client/layout/wrapper";
import { BlockHeading } from "_client/sections/block-heading";
import { FC } from "react";
import { HeadingSection } from "types/sections";

export const SectionHeading: FC<HeadingSection> = ({ settings }) => {
  return (
    <Wrapper paddingY="base" maxWidth="xl">
      <BlockHeading settings={settings} />
    </Wrapper>
  );
};
