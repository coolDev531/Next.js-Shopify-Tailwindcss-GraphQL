import { Section } from "_client/layout/section";
import { BlockHeading } from "_client/sections/block-heading";
import { RichText } from "_client/typography/rich-text";
import { renderIcon } from "_sections/utils";
import clsx from "clsx";
import { FC } from "react";
import { FeatureListSection } from "types/sections";

export const FeatureList: FC<FeatureListSection> = ({ id, blocks, type, settings }) => {
  return (
    <Section id={id} type={type} container="xl" padding="base">
      <BlockHeading settings={settings} section={false} />
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
                    className="group max-w-xs rounded-lg rounded-lg bg-slate-50 px-6 pb-8 text-center"
                  >
                    <header className="mb-2 -mt-6 flex flex-col items-center gap-4">
                      <figure className="mb-4 flex justify-center rounded-md bg-sky-500 p-2 text-white shadow-lg group-hfa:[--svg-active-opacity:0.4] group-hfa:[--svg-active-fill:currentColor]">
                        {renderIcon(block.settings.icon, "w-9 h-9")}
                      </figure>
                      <h2 className="heading-lg">
                        <span className="tracking-tight">{block.settings.title}</span>
                      </h2>
                    </header>
                    <main>
                      <RichText className="paragraph-sm">{block.settings.paragraph}</RichText>
                    </main>
                  </section>
                );
              }
            }
          })}
        </div>
      </div>
    </Section>
  );
};
