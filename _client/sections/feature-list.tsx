import HeroIcon from "_client/dynamic-hero-icon";
import { renderIcon } from "_sections/utils";
import { FC } from "react";
import { FeatureListSection } from "types/sections";

export const FeatureList: FC<FeatureListSection> = ({ id, blocks, type }) => {
  return (
    <div className="mx-auto flex max-w-6xl items-center justify-center gap-12 px-8 py-16">
      <div
        className="grid gap-8"
        style={{ gridTemplateColumns: `repeat(${blocks.length}, minmax(min-content, 1fr))` }}
      >
        {blocks.map((block) => {
          switch (block.type) {
            case "feature": {
              return (
                <section key={block.id} className="text-center">
                  <header className="mb-2">
                    <figure className="mb-4 flex justify-center">
                      {renderIcon(block.settings.icon, "w-12 h-12")}
                    </figure>
                    <h1>{block.settings.title}</h1>
                  </header>
                  <main dangerouslySetInnerHTML={{ __html: block.settings.paragraph }} />
                </section>
              );
            }
          }
        })}
      </div>
    </div>
  );
};
