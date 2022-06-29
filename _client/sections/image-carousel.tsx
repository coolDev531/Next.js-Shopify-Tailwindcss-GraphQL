import { Section } from "_client/layout/section";
import { Link } from "_client/link";
import { BlockHeading } from "_client/sections/block-heading";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import { ImageCarouselSection } from "types/sections";

export const ImageCarousel: FC<ImageCarouselSection> = ({ id, blocks, settings, type }) => {
  const { position, cta1, cta1_link, cta2, cta2_link, paragraph, pre_title, title } = settings;
  const router = useRouter();

  return (
    <Section id={id} type={type} padding="base" container="xl">
      <BlockHeading
        key={`heading-${id}`}
        settings={{ position, cta1, cta1_link, cta2, cta2_link, paragraph, pre_title, title }}
        section={false}
      />
      <div className="relative left-1/2 -ml-[50vw] w-screen max-w-[100vw]">
        <div
          className="flex transition-all focus-within:animation-pause hfa:animation-pause md:w-fit md:animate-slide"
          style={{
            animationDuration: `${settings.animation_duration}s`,
            animationPlayState: !settings.animate ? "paused" : "running",
          }}
        >
          <div className="scrollbar-none grid flex-1 auto-cols-max grid-flow-col-dense gap-6 overflow-x-scroll px-4 pb-8 transition-all md:overflow-visible md:px-8 md:px-4">
            {settings?.images?.articles
              ?.filter(
                (article) => article.url.replace(/\/blogs/gi, "") !== router.asPath.split("?")[0]
              )
              .map((article) => {
                return (
                  <Link
                    tabIndex={-1}
                    key={`image-${article.id}`}
                    href={article.url.replace(/\/blogs/gi, "")}
                    className="group relative"
                  >
                    <figure className="relative isolate aspect-1 w-[200px] overflow-hidden rounded shadow-lg transition-shadow group-hfa:shadow">
                      {article.featured_media
                        ? <Image
                            src={`https:${article.featured_media.src}`}
                            layout="fill"
                            objectFit="cover"
                            alt={article.featured_media.alt}
                          />
                        : null}
                      <div className="absolute inset-x-0 bottom-0 flex h-14 items-center whitespace-nowrap bg-white/70 px-2 font-medium text-slate-900 opacity-0 transition-all group-hfa:opacity-100">
                        {article.title}
                      </div>
                    </figure>
                  </Link>
                );
              })}
            {blocks.map((block) => {
              if (block.type !== "manual-image") return null;
              return (
                <Link
                  tabIndex={-1}
                  key={`image-${block.id}`}
                  href={"#" ?? block.settings.link.replace(/\/blogs/gi, "")}
                  className="group relative"
                >
                  <figure className="relative isolate aspect-1 w-[200px] overflow-hidden rounded shadow-lg transition-shadow group-hfa:shadow">
                    {block.settings.image
                      ? <Image
                          src={`https:${block.settings.image.src}`}
                          layout="fill"
                          objectFit="cover"
                          alt={block.settings.image.alt}
                        />
                      : null}
                    <div className="absolute inset-x-0 bottom-0 flex h-14 items-center whitespace-nowrap bg-white/70 px-2 font-medium text-slate-900 opacity-0 transition-all group-hfa:opacity-100">
                      {block.settings.title}
                    </div>
                  </figure>
                </Link>
              );
            })}
          </div>
          <div className="scrollbar-none grid hidden flex-1   auto-cols-max grid-flow-col-dense gap-6 overflow-x-scroll pb-8 transition-all md:grid md:overflow-visible md:px-4">
            {settings?.images?.articles
              ?.filter(
                (article) => article.url.replace(/\/blogs/gi, "") !== router.asPath.split("?")[0]
              )
              .map((article) => {
                return (
                  <Link
                    tabIndex={-1}
                    key={`image-${article.id}`}
                    href={"#" ?? article.url.replace(/\/blogs/gi, "")}
                    className="group relative"
                  >
                    <figure className="relative isolate aspect-1 w-[200px] overflow-hidden rounded shadow-lg transition-shadow group-hfa:shadow">
                      {article.featured_media
                        ? <Image
                            src={`https:${article.featured_media.src}`}
                            layout="fill"
                            objectFit="cover"
                            alt={article.featured_media.alt}
                          />
                        : null}
                      <div className="absolute inset-x-0 bottom-0 flex h-14 items-center whitespace-nowrap bg-white/70 px-2 font-medium text-slate-900 opacity-0 transition-all group-hfa:opacity-100">
                        {article.title}
                      </div>
                    </figure>
                  </Link>
                );
              })}
            {blocks.map((block) => {
              if (block.type !== "manual-image") return null;

              return (
                <Link
                  tabIndex={-1}
                  key={`image-${block.id}`}
                  href={"#" ?? block.settings.link.replace(/\/blogs/gi, "")}
                  className="group relative"
                >
                  <figure className="relative isolate aspect-1 w-[200px] overflow-hidden rounded shadow-lg transition-shadow group-hfa:shadow">
                    {block.settings.image
                      ? <Image
                          src={`https:${block.settings.image.src}`}
                          layout="fill"
                          objectFit="cover"
                          alt={block.settings.image.alt}
                        />
                      : null}
                    <div className="absolute inset-x-0 bottom-0 flex h-14 items-center whitespace-nowrap bg-white/70 px-2 font-medium text-slate-900 opacity-0 transition-all group-hfa:opacity-100">
                      {block.settings.title}
                    </div>
                  </figure>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};
