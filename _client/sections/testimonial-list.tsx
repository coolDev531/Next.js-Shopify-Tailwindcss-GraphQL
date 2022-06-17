import { BlockHeading } from "_client/sections/block-heading";
import Image from "next/image";
import { FC } from "react";
import { TestimonialListSection } from "types/sections";

export const TestimonialList: FC<TestimonialListSection> = ({ id, blocks, type }) => {
  return (
    <>
      {blocks.map((block) => {
        return block.type === "heading"
          ? <BlockHeading key={`heading-${block.id}`} {...block} />
          : null;
      })}
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-16 py-16 px-8">
        {blocks.map((block) => {
          if (block.type !== "testimonial") return null;

          return (
            <section key={`testimonial-${block.id}`}>
              <header>
                <figure className="relative mb-2 h-10">
                  {block.settings.image
                    ? <Image
                        src={`https:${block?.settings?.image?.src}`}
                        layout="fill"
                        objectFit="contain"
                        alt={block?.settings?.image?.alt}
                      />
                    : null}
                </figure>
              </header>
              <blockquote
                className="mb-2"
                dangerouslySetInnerHTML={{ __html: block.settings.quote }}
              />
              <footer className="flex gap-2">
                {block.settings.avatar
                  ? <figure className="relative aspect-1 h-8 w-8 overflow-hidden rounded-full">
                      <Image
                        src={`https:${block.settings.avatar.src}`}
                        layout="fill"
                        objectFit="cover"
                        alt={block.settings.avatar.alt}
                      />
                    </figure>
                  : null}
                <div>{block.settings.author}</div>
                <div>{block.settings.job_title}</div>
              </footer>
            </section>
          );
        })}
      </div>
    </>
  );
};
