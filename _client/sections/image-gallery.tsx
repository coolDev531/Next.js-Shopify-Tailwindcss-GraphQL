import Image from "next/image";
import { FC } from "react";
import { ImageGallerySection } from "types/sections";

export const ImageGallery: FC<ImageGallerySection> = ({ id, blocks, type }) => {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-12 gap-3 px-8 py-16">
      {blocks.map((block) => {
        switch (block.type) {
          case "image": {
            return (
              <figure
                key={block.id}
                className="group relative h-[240px] overflow-hidden rounded shadow-2xl"
                style={{ gridColumn: `span ${block.settings.columns}` }}
              >
                {block.settings.image
                  ? <Image
                      src={`https:${block?.settings?.image?.src}`}
                      layout="fill"
                      objectFit="cover"
                      alt={block?.settings?.image?.alt}
                    />
                  : null}
                {block.settings.hover_effect && (
                  <figcaption
                    className="absolute inset-0 h-full w-full p-8 opacity-0 transition-opacity group-hfa:opacity-100"
                    style={{ background: block.settings.color_overlay }}
                  >
                    <section style={{ color: block.settings.color_text.hex }}>
                      <header>
                        <h1>{block.settings.title}</h1>
                      </header>
                      <main dangerouslySetInnerHTML={{ __html: block.settings.paragraph }} />
                    </section>
                  </figcaption>
                )}
              </figure>
            );
          }
        }
      })}
    </div>
  );
};
