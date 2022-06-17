import { BlockHeading } from "_client/sections/block-heading";
import Image from "next/image";
import { FC, useRef } from "react";
import { ImageCarouselSection } from "types/sections";

export const ImageCarousel: FC<ImageCarouselSection> = ({ id, blocks, type }) => {
  const imageCount = blocks.filter(({ type }) => type === "image").length;
  const container = useRef<HTMLDivElement>(null);

  return (
    <>
      {blocks.map((block) => {
        return block.type === "heading"
          ? <BlockHeading key={`heading-${block.id}`} {...block} />
          : null;
      })}

      <div ref={container}>
        <div
          className="grid justify-center gap-6"
          style={{ gridTemplateColumns: `repeat(auto-fill, 200px)` }}
        >
          {blocks.map((block) => {
            if (block.type !== "image") return null;

            return (
              <figure
                key={`image-${block.id}`}
                className="relative aspect-1 w-[200px] overflow-hidden rounded-lg shadow-xl"
              >
                {block.settings.image
                  ? <Image
                      src={`https:${block?.settings?.image?.src}`}
                      layout="fill"
                      objectFit="cover"
                      alt={block?.settings?.image?.alt}
                    />
                  : null}
              </figure>
            );
          })}
        </div>
      </div>
    </>
  );
};
