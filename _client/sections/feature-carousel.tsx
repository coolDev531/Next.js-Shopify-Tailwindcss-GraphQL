import { HeroIcon } from "_client/dynamic-hero-icon";
import { Image } from "_client/image";
import { Wrapper } from "_client/layout/wrapper";
import { Link } from "_client/link";
import { BlockHeading } from "_client/sections/block-heading";
import { Richtext } from "_client/typography/richtext";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { useWindowSize } from "react-use";
import { FeatureCarouselSection } from ".shopify-cms/types/sections";
import { scrollToX } from "utils/scroll-to";

export const FeatureCarousel: FC<FeatureCarouselSection> = ({ id, blocks, settings, type }) => {
  const { position, cta1, cta1_link, cta2, cta2_link, paragraph, pre_title, title } = settings;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const maxIndex = blocks.length + settings.features.length;
  const [scrollIndex, setScrollIndex] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const windowSize = useWindowSize();

  const handleManualScroll = useCallback((index: number) => {
    scrollContainerRef.current.classList.remove("snap-x");
    scrollToX(250, 384 * (scrollIndex + index), scrollContainerRef.current, () => {
      scrollContainerRef.current.classList.add("snap-x");
    });
    setTimeout(
      () => {
        if (window) {
          const maxRight = (
            scrollContainerRef.current.lastChild as Element
          )?.getBoundingClientRect().right;
          setShowNextButton((current) => maxRight + 25 > windowSize.width);
        }
      },
      250
    );
  }, [scrollIndex, windowSize.width]);

  const handleScrollEvent = useCallback((e) => {
    const { scrollLeft } = scrollContainerRef.current;

    setScrollIndex((current) => {
      if (Math.floor((scrollLeft + 384 / 2) / 384) === current) return current;
      return Math.floor((scrollLeft + 384 / 2) / 384);
    });
  }, []);

  useEffect(() => {
    if (window) {
      const maxRight = (scrollContainerRef.current.lastChild as Element)?.getBoundingClientRect()
        .right;
      setShowNextButton((current) => maxRight + 25 > windowSize.width);
    }
  }, [windowSize.width]);

  return (
    <Wrapper
      maxWidth="xl"
      spacing={settings.spacing}
      spacingTop={settings.spacing_top}
      spacingBottom={settings.spacing_bottom}
      overflowHidden
      bgOpacity={0.6}
      bgHeight="calc(100% + 140px)"
      bgClassName="bg-[url('/_next/image?url=%2Fimages%2Fbg-gradient-light-180.jpg&w=1200&q=20')] dark:bg-[url('/_next/image?url=%2Fimages%2Fbg-gradient-templates.png&w=1200&q=20')] bg-top bg-no-repeat bg-[length:3800px_auto]"
    >
      <div className="flex flex-col gap-8">
        <BlockHeading
          key={`heading-${id}`}
          settings={{ position, cta1, cta1_link, cta2, cta2_link, paragraph, pre_title, title }}
        />
        <div className="relative left-1/2 -ml-[50vw] w-screen">
          <div
            className="scrollbar-none -my-2 grid snap-x snap-mandatory scroll-pl-[max(1rem,calc((100vw-80rem)/2+1rem))] auto-cols-min grid-flow-col-dense gap-6 overflow-x-scroll scroll-smooth py-2 pr-[max(1rem,min(calc((100vw-80rem)/2+80rem-360px-1rem),calc(100vw-360px-1rem+4px)))] pl-[max(1rem,calc((100vw-80rem)/2+1rem))] md:scroll-pl-[max(2rem,calc((100vw-80rem)/2+2rem))] md:pr-[max(2rem,min(calc((100vw-80rem)/2+80rem-360px-2rem),calc(100vw-360px-2rem+4px)))] md:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]"
            onScroll={handleScrollEvent}
            ref={scrollContainerRef}
          >
            {settings.features.map((product) => (
              <FeatureCarouselItem
                key={`feature-${id}-${product.id}`}
                id={product.id}
                href={product.url}
                image={product.featured_media}
                title={product.title}
                description={product.content}
              />
            ))}
            {blocks.map((block) => (
              <FeatureCarouselItem
                key={`feature-${id}-${block.id}`}
                id={block.id}
                href={block.settings.link}
                image={block.settings.image}
                title={block.settings.title}
                description={block.settings.paragraph}
              />
            ))}
          </div>
          {scrollIndex !== 0
            ? <button
                tabIndex={-1}
                className="absolute top-[calc(360px/2)] left-8 hidden items-center justify-center rounded-full border border-gray-300 bg-white p-2 shadow transition-all hover:-translate-y-0.5 hfa:bg-gray-50/90 sm:flex"
                onClick={(e) => handleManualScroll(-1)}
                aria-label="scroll left"
              >
                <HeroIcon name="ChevronLeftIcon" className="h-6 w-6" />
              </button>
            : null}
          {showNextButton && scrollIndex < maxIndex - 1
            ? <button
                tabIndex={-1}
                className="absolute top-[calc(360px/2)] right-8 hidden items-center justify-center rounded-full border border-gray-300 bg-white p-2 shadow transition-all hover:-translate-y-0.5 hfa:bg-gray-50/90 sm:flex"
                onClick={(e) => handleManualScroll(1)}
                aria-label="scroll right"
              >
                <HeroIcon name="ChevronRightIcon" className="h-6 w-6" />
              </button>
            : null}
        </div>
      </div>
    </Wrapper>
  );
};

export const FeatureCarouselItem = ({ id, href, image, title, description }) => {
  return (
    <Link
      href={href}
      className="group snap-start f:ring-2 f:ring-sky-400 f:ring-offset-2"
      id={`block--${id}`}
    >
      <figure className="relative mb-4 aspect-1 w-[360px] overflow-hidden rounded shadow-lg transition-all group-hfa:shadow-sm">
        {image && (
          <Image
            className="h-full object-cover"
            width={image?.width}
            height={image?.height}
            src={image?.src}
            alt={image?.alt || title}
            maxWidth={500}
          />
        )}
      </figure>
      <header>
        <h3 className="heading-sm">{title}</h3>
      </header>
      <main>
        <Richtext className="paragraph-sm">{description}</Richtext>
      </main>
    </Link>
  );
};
