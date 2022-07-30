import { renderIcon } from "_client/icons";
import { Wrapper } from "_client/layout/wrapper";
import { BlockHeading } from "_client/sections/block-heading";
import { Richtext } from "_client/typography/richtext";

import clsx from "clsx";
import { FC } from "react";
import { FeatureListSection } from ".shopify-cms/types/sections";

export const FeatureList: FC<FeatureListSection> = ({ blocks, settings }) => {
  return (
    <Wrapper
      maxWidth="xl"
      overflowHidden
      spacing={settings.spacing}
      spacingTop={settings.spacing_top}
      spacingBottom={settings.spacing_bottom}
    >
      <BlockHeading settings={settings} />
      <div className="mt-16 flex justify-center">
        <div
          className={clsx(
            " grid justify-center justify-items-center gap-8 gap-y-12",
            {
              2: "md:grid-cols-2",
              3: "md:grid-cols-3",
              4: "sm:grid-cols-2 lg:grid-cols-4",
            }[blocks.length]
          )}
        >
          {blocks.map((block) => (
            <section
              id={`block--${block.id}`}
              key={block.id}
              className="card group min-w-[240px] max-w-xs px-3.5 pb-6 text-center"
            >
              <header className="mb-2 -mt-10 flex flex-col items-center gap-4">
                <figure className="flex justify-center rounded-md bg-accent p-2 text-white shadow-lg group-hfa:[--svg-active-opacity:0.4] group-hfa:[--svg-active-fill:currentColor]">
                  {renderIcon(block.settings.icon, "w-9 h-9")}
                </figure>
                <h3 className="heading-base tracking-tight">{block.settings.title}</h3>
              </header>
              <main>
                <Richtext className="paragraph-sm">{block.settings.paragraph}</Richtext>
              </main>
            </section>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
