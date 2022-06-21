import HeroIcon from "_client/dynamic-hero-icon";
import { useDebouncedEffect } from "_client/hooks/use-debounce-effect";
import { Section } from "_client/layout/section";
import { Link } from "_client/link";
import { BlockHeading } from "_client/sections/block-heading";
import { Heading } from "_client/typography/heading";
import { Paragraph } from "_client/typography/paragraph";
import Image from "next/image";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { useDebounce } from "react-use";
import { FeatureCarouselSection } from "types/sections";
import { scrollToX } from "utils/scroll-to";

export const FeatureCarousel: FC<FeatureCarouselSection> = ({ id, blocks, settings, type }) => {
  const { position, cta1, cta1_link, cta2, cta2_link, paragraph, pre_title, title } = settings;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const maxIndex = blocks.length + settings.features.length;
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleManualScroll = useCallback((index: number) => {
    scrollContainerRef.current.classList.remove("snap-x");
    scrollToX(250, 384 * (scrollIndex + index), scrollContainerRef.current, () => {
      scrollContainerRef.current.classList.add("snap-x");
    });
  }, [scrollIndex]);

  const handleScrollEvent = useCallback((e) => {
    const { scrollLeft } = scrollContainerRef.current;

    setScrollIndex((current) => {
      if (Math.floor((scrollLeft + 384 / 2) / 384) === current) return current;
      return Math.floor((scrollLeft + 384 / 2) / 384);
    });
  }, []);

  return (
    <Section id={id} type={type} container="xl" padding="base">
      <div className="flex flex-col gap-8">
        <BlockHeading
          key={`heading-${id}`}
          section={false}
          id=""
          settings={{ position, cta1, cta1_link, cta2, cta2_link, paragraph, pre_title, title }}
          type="heading"
        />
        <div className="relative left-1/2 -ml-[50vw] w-screen">
          <div
            className="scrollbar-none -my-2 grid snap-x snap-mandatory scroll-pl-[max(2rem,calc((100vw-80rem)/2+2rem))] auto-cols-min grid-flow-col-dense gap-6 overflow-x-scroll scroll-smooth py-2 pr-[max(2rem,min(calc((100vw-80rem)/2+80rem-360px-2rem),calc(100vw-360px-2rem+4px)))] pl-[max(2rem,calc((100vw-80rem)/2+2rem))]"
            onScroll={handleScrollEvent}
            ref={scrollContainerRef}
          >
            {settings.features.map((product) => {
              return (
                <Link
                  href={product.url}
                  key={`feature-${id}-${product.id}`}
                  className="snap-star group f:ring-2 f:ring-sky-400 f:ring-offset-2"
                >
                  <figure className="relative mb-4 aspect-1 w-[360px] overflow-hidden rounded shadow-lg transition-all group-hfa:shadow-sm">
                    {product.featured_media && (
                      <Image
                        objectFit="cover"
                        layout="fill"
                        src={product?.featured_media?.src}
                        alt={product?.featured_media?.alt}
                      />
                    )}
                  </figure>
                  <header>
                    <Heading heading="h4">{product.title}</Heading>
                  </header>
                  <main>
                    <Paragraph size="sm">{product.content}</Paragraph>
                  </main>
                </Link>
              );
            })}
            {blocks.map((block) => {
              if (block.type !== "manual-feature") return null;
              return (
                <Link
                  href={block.settings.link}
                  key={`feature -${block.id}`}
                  className="group snap-start"
                >
                  <figure className="relative mb-4 aspect-1 w-[360px] overflow-hidden rounded shadow-xl group-hfa:shadow-none">
                    {block.settings.image && (
                      <Image
                        objectFit="cover"
                        objectPosition="50% 60%"
                        layout="fill"
                        src={`https:${block?.settings?.image?.src}`}
                        alt={block?.settings?.image?.alt}
                      />
                    )}
                  </figure>
                  <header>
                    <Heading heading="h4">{block.settings.title}</Heading>
                  </header>
                  <main>
                    <Paragraph size="sm">{block.settings.paragraph}</Paragraph>
                  </main>
                </Link>
              );
            })}
          </div>
          {scrollIndex !== 0
            ? <button
                tabIndex={-1}
                className="absolute top-[calc(360px/2)] left-8 hidden items-center justify-center rounded-full border border-slate-300 bg-white p-2 shadow transition-all hover:-translate-y-0.5 hfa:bg-slate-50/90 sm:flex"
                onClick={(e) => handleManualScroll(-1)}
              >
                <HeroIcon name="ChevronLeftIcon" className="h-6 w-6" />
              </button>
            : null}
          {scrollIndex < maxIndex - 1
            ? <button
                tabIndex={-1}
                className="absolute top-[calc(360px/2)] right-8 hidden items-center justify-center rounded-full border border-slate-300 bg-white p-2 shadow transition-all hover:-translate-y-0.5 hfa:bg-slate-50/90 sm:flex"
                onClick={(e) => handleManualScroll(1)}
              >
                <HeroIcon name="ChevronRightIcon" className="h-6 w-6" />
              </button>
            : null}
        </div>
      </div>
    </Section>
  );
};
