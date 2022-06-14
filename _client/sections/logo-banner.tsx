import Image from "next/image";
import { FC } from "react";
import { LogoBannerSection } from "types/sections";

export const LogoBanner: FC<LogoBannerSection> = ({ id, settings, blocks, type }) => {
  return (
    <div className="mx-auto -mt-12 max-w-7xl px-8">
      <section>
        <header>
          <h2>{settings.title}</h2>
        </header>
        <main
          className="grid place-items-center gap-2"
          style={{ gridTemplateColumns: `repeat(auto-fill, minmax(min(6rem, 100%), 1fr))` }}
        >
          {blocks.map((block) => {
            switch (block.type) {
              case "svg":
                return (
                  <figure key={block.id} dangerouslySetInnerHTML={{ __html: block.settings.svg }} />
                );
              case "image":
                return block.settings.image
                  ? <figure
                      key={block.id}
                      className="relative w-full"
                      style={{ height: `${settings.height}px` }}
                    >
                      <Image
                        objectFit="contain"
                        objectPosition="50% 60%"
                        layout="fill"
                        // width={settings.image.width}
                        // height={settings.image.height}
                        src={`https:${block?.settings?.image?.src}`}
                        alt={block?.settings?.image?.alt}
                      />
                    </figure>
                  : null;
            }
          })}
        </main>
      </section>
    </div>
  );
};
