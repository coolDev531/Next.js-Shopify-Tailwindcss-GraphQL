import { Wrapper } from "_client/layout/wrapper";
import { BlockHeading } from "_client/sections/block-heading";
import { Richtext } from "_client/typography/richtext";
import { renderIcon } from "_sections/utils";
import clsx from "clsx";
import { FC } from "react";
import { FeatureListSection } from "types/sections";

export const FeatureList: FC<FeatureListSection> = ({ blocks, settings }) => {
  return (
    <Wrapper maxWidth="xl" paddingY="none" className="overflow-hidden">
      <BlockHeading settings={settings} />
      <div className="-mx-8 mt-16 flex justify-center">
        <div
          className={clsx(
            "grid justify-center gap-8 gap-y-12",
            {
              2: "md:grid-cols-2",
              3: "lg:grid-cols-3",
              4: "md:grid-cols-2 xl:grid-cols-4",
            }[blocks.length]
          )}
        >
          {blocks.map((block) => {
            switch (block.type) {
              case "feature": {
                return (
                  <section
                    key={block.id}
                    className="group max-w-xs rounded-lg rounded-lg bg-gray-50 px-6 pb-8 text-center dark:bg-dark-card"
                  >
                    <header className="mb-2 -mt-6 flex flex-col items-center gap-4">
                      <figure className="mb-4 flex justify-center rounded-md bg-accent p-2 text-white shadow-lg group-hfa:[--svg-active-opacity:0.4] group-hfa:[--svg-active-fill:currentColor]">
                        {renderIcon(block.settings.icon, "w-9 h-9")}
                      </figure>
                      <h3 className="heading-base tracking-tight">{block.settings.title}</h3>
                    </header>
                    <main>
                      <Richtext className="paragraph-sm">{block.settings.paragraph}</Richtext>
                    </main>
                  </section>
                );
              }
            }
          })}
        </div>
      </div>
    </Wrapper>
  );
};
