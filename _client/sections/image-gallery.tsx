import { Section } from "_client/layout/section";
import { Heading } from "_client/typography/heading";
import { Paragraph } from "_client/typography/paragraph";
import Image from "next/image";
import { FC } from "react";
import { ImageGallerySection } from "types/sections";

export const ImageGallery: FC<ImageGallerySection> = ({ id, blocks, type }) => {
  const firstRow = blocks.filter(({ type }) => type === "image").slice(0, 3);
  const secondRow = blocks.filter(({ type }) => type === "image").slice(3, 6);

  return (
    <Section id={id} type={type} padding="xl">
      <div className="relative -mx-8 flex justify-center overflow-hidden">
        <figure
          className="absolute left-1/2 -z-20 -ml-[50vw] h-full w-screen bg-top bg-no-repeat"
          style={{
            backgroundImage: "url('/images/bg-gradient-light.jpg')",
            backgroundSize: "123.25rem 100%",
          }}
        />
        <figure className="absolute left-1/2 -z-10 -ml-[50vw] h-full w-screen bg-grid-slate-900/[0.04] [mask-image:linear-gradient(0deg,transparent,black)]"></figure>
        <section className="mx-auto -my-16 w-[80rem] min-w-[80rem] [mask-image:linear-gradient(0deg,transparent_0%,white_45%)]">
          <div className="relative  flex items-end gap-8 px-8">
            {firstRow.map((block) => (
              <figure
                key={block.id}
                className="group relative flex overflow-hidden rounded shadow-2xl"
              >
                {block.settings.image
                  ? <Image
                      src={`https:${block?.settings?.image?.src}`}
                      width={block?.settings?.image?.width}
                      height={block?.settings?.image?.height}
                      alt={block?.settings?.image?.alt}
                    />
                  : null}
                {block.settings.hover_effect && (
                  <figcaption
                    className="absolute inset-0 h-full w-full p-8 opacity-0 transition-opacity group-hfa:opacity-100"
                    style={{ background: block.settings.color_overlay }}
                  >
                    <section>
                      <header>
                        <Heading heading="h3" light={block.settings.color_use_light_text}>
                          {block.settings.title}
                        </Heading>
                      </header>
                      <main>
                        <Paragraph size="sm" light={block.settings.color_use_light_text}>
                          {block.settings.paragraph}
                        </Paragraph>
                      </main>
                    </section>
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
          <div className="relative mt-8 flex items-start gap-8">
            {secondRow.map((block) => (
              <figure
                key={block.id}
                className="group relative flex overflow-hidden rounded shadow-2xl"
              >
                {block.settings.image
                  ? <Image
                      src={`https:${block?.settings?.image?.src}`}
                      width={block?.settings?.image?.width}
                      height={block?.settings?.image?.height}
                      alt={block?.settings?.image?.alt}
                    />
                  : null}
                {block.settings.hover_effect && (
                  <figcaption
                    className="absolute inset-0 h-full w-full p-8 opacity-0 transition-opacity group-hfa:opacity-100"
                    style={{ background: block.settings.color_overlay }}
                  >
                    <section>
                      <header>
                        <Heading heading="h3" light={block.settings.color_use_light_text}>
                          {block.settings.title}
                        </Heading>
                      </header>
                      <main>
                        <Paragraph size="sm" light={block.settings.color_use_light_text}>
                          {block.settings.paragraph}
                        </Paragraph>
                      </main>
                    </section>
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>
      </div>
    </Section>
  );
};

/*
export const ImageGallery: FC<ImageGallerySection> = ({ id, blocks, type }) => {
  return (
    <Section id={id} type={type} container="xl" padding="base">
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
    </Section>
  );
};
*/
