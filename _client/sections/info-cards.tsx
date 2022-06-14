import { Heading } from "_client/typography/heading";
import { PreHeading } from "_client/typography/pre-heading";
import Image from "next/image";
import { FC } from "react";
import { InfoCardsSection } from "types/sections";

export const InfoCards: FC<InfoCardsSection> = ({ id, settings, blocks, type }) => {
  return (
    <div className="mx-auto  max-w-7xl px-8 py-16">
      <section>
        <header>
          <PreHeading>{settings.pre_title}</PreHeading>
          <Heading>{settings.title}</Heading>
        </header>
      </section>
      <div className="flex gap-4">
        {blocks.map((block) => {
          switch (block.type) {
            case "dynamic-info-card": {
              if (block.settings.content) {
                const svgImage = block.settings.content.metafields.find(
                  (metafield) => metafield.key === "svg"
                )?.value;
                return (
                  <section
                    key={block.id}
                    className="w-[200px] rounded-md border border-gray-300 bg-white p-3.5 shadow-md "
                  >
                    <header className="flex flex-col gap-3">
                      <figure
                        className="relative flex h-10 w-28 bg-contain bg-left bg-no-repeat"
                        style={{ backgroundImage: `url(${svgImage.url})` }}
                      ></figure>
                      <h3 className="mb-1 text-lg font-semibold text-slate-800">
                        {block.settings.content.title}
                      </h3>
                    </header>
                    <main
                      className="text-[15px] tracking-tight"
                      dangerouslySetInnerHTML={{ __html: block.settings.content.excerpt }}
                    />
                  </section>
                );
              }
              return null;
            }
            case "manual-info-card": {
              return (
                <section
                  key={block.id}
                  className="w-[200px] rounded-md border border-gray-300 bg-white p-4 shadow-md "
                >
                  <header className="flex flex-col gap-2">
                    <figure
                      className="[&>svg]:h-8[&>svg]:w-8"
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
