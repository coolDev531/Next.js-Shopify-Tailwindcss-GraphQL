import { Image } from "_client/image";
import { BlockHeading } from "_client/sections/block-heading";

import { FC } from "react";
import { TeamListSection } from ".shopify-cms/types/sections";

export const TeamList: FC<TeamListSection> = ({ id, blocks, type }) => {
  return (
    <>
      {blocks.map((block) => {
        return block.type === "heading"
          ? <BlockHeading key={`heading-${block.id}`} {...block} />
          : null;
      })}
      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-8 px-8 py-16">
        {blocks.map((block) => {
          if (block.type !== "team_member") return null;
          return (
            <section key={`team-${block.id}`}>
              <header className="mb-4 flex justify-center">
                <figure className="relative h-44 w-44 overflow-hidden rounded-full">
                  {block.settings.image
                    ? <Image
                        src={`${block?.settings?.image?.src}`}
                        className="object-cover object-left"
                        width={block.settings.image?.width}
                        height={block.settings.image?.height}
                        alt={block?.settings?.image?.alt || block.settings.name}
                      />
                    : null}
                </figure>
              </header>
              <main className="flex flex-col items-center justify-center gap-1">
                <div>{block.settings.name}</div>
                <div>{block.settings.job_title}</div>
              </main>
            </section>
          );
        })}
      </div>
    </>
  );
};
