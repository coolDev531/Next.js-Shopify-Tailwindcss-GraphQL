import { FC } from "react";
import { InfoCardsSection } from "types/sections";

export const InfoCards: FC<InfoCardsSection> = ({ id, settings, blocks, type }) => {
  return (
    <div className="mx-auto  max-w-7xl px-8 py-16">
      <section>
        <header>
          <h3>{settings.pre_title}</h3>
          <h2>{settings.title}</h2>
        </header>
      </section>
      <div className="flex gap-4">
        {blocks.map((block) => {
          switch (block.type) {
            case "info-card": {
              return (
                <section
                  key={block.id}
                  className="w-[200px] rounded-md border border-gray-300 bg-white p-4 shadow-md "
                >
                  <header className="flex flex-col gap-2">
                    <figure
                      className="child-svg:h-10 child-svg:w-10"
                      dangerouslySetInnerHTML={{ __html: block.settings.svg }}
                    />
                    <h3>{block.settings.title}</h3>
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
