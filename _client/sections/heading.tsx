import { Wrapper } from "_client/layout/wrapper";
import { BlockHeading } from "_client/sections/block-heading";
import { FC } from "react";
import { HeadingSection } from ".shopify-cms/types/sections";

export const SectionHeading: FC<HeadingSection> = ({ settings }) => {
  return (
    <Wrapper spacing="base" maxWidth="xl">
      <BlockHeading settings={settings} />
    </Wrapper>
  );
};
