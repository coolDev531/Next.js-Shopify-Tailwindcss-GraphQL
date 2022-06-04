import BlockHeading from "_client/sections/block-heading";
import Image from "next/image";
import { FC } from "react";
import { FeatureCarouselSection } from "types/sections";

export const FeatureCarousel: FC<FeatureCarouselSection> = ({ id, blocks, type }) => {
  const featureCount = blocks.filter(({ type }) => type === "feature").length;

  return (
    <>
      {blocks.map((block) => {
        return block.type === "heading"
          ? <BlockHeading key={`heading-${block.id}`} {...block} />
          : null;
      })}
      <div className="scrollbar-none overflow-x-scroll">
        <div className="mx-auto max-w-7xl justify-center px-8 py-16">
          <div
            className="relative grid w-full gap-8"
            style={{
              gridTemplateColumns: `repeat(${featureCount}, 360px) max(calc((100vw - (100% + 4rem)) / 2), 0px)`,
            }}
          >
            {blocks.map((block) => {
              if (block.type !== "feature") return null;

              return (
                <section key={`feature -${block.id}`}>
                  <figure className="relative mb-4 aspect-1 w-[360px] overflow-hidden rounded shadow-xl">
                    {block.settings.image && (
                      <Image
                        objectFit="cover"
                        objectPosition="50% 60%"
                        layout="fill"
                        // width={settings.image.width}
                        // height={settings.image.height}
                        src={`https:${block.settings.image.src}`}
                        alt={block.settings.image.alt}
                      />
                    )}
                  </figure>
                  <header>
                    <h2>{block.settings.title}</h2>
                  </header>
                  <main>
                    <p>{block.settings.paragraph}</p>
                  </main>
                </section>
              );
            })}
            <div className="spacefiller"></div>
          </div>
        </div>
      </div>
    </>
  );
};
