import HeroIcon from "_client/dynamic-hero-icon";
import { Link } from "_client/link";
import { Heading } from "_client/typography/heading";
import { Paragraph } from "_client/typography/paragraph";
import clsx from "clsx";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { _Link_liquid, _Product_liquid } from "types/shopify";
import { scrollToX } from "utils/scroll-to";

export const SliderMenu = ({ items, link }: { items: _Product_liquid[]; link: _Link_liquid }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const maxIndex = items.length;
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleManualScroll = useCallback((index: number) => {
    scrollContainerRef.current.classList.remove("snap-x");
    scrollToX(250, 324 * (scrollIndex + index), scrollContainerRef.current, () => {
      scrollContainerRef.current.classList.add("snap-x");
    });
  }, [scrollIndex]);

  const handleScrollEvent = useCallback((e) => {
    const { scrollLeft } = scrollContainerRef.current;

    setScrollIndex((current) => {
      if (Math.floor((scrollLeft + 324 / 2) / 324) === current) return current;
      return Math.floor((scrollLeft + 324 / 2) / 324);
    });
  }, []);

  return (
    <div className="relative left-1/2 -ml-[50vw] w-screen py-16">
      <div
        className={clsx(
          "scrollbar-none -my-2 grid snap-x snap-mandatory auto-cols-min grid-flow-col-dense gap-6 overflow-x-scroll scroll-smooth py-2",
          "pl-[max(1rem,calc((100vw-80rem)/2+1rem))] md:pl-[max(2rem,calc((100vw-80rem)/2+1rem))]",
          "scroll-pl-[max(1rem,calc((100vw-80rem)/2+1rem))] md:scroll-pl-[max(2rem,calc((100vw-80rem)/2+1rem))]",
          "pr-[max(1rem,min(calc((100vw-80rem)/2+80rem-300px-1rem),calc(100vw-300px-1rem+4px)))]",
          "md:pr-[max(1rem,min(calc((100vw-80rem)/2+80rem-300px-1rem),calc(100vw-300px-1rem+4px)))]"
        )}
        onScroll={handleScrollEvent}
        ref={scrollContainerRef}
      >
        {items.map((product) => {
          return (
            <Link
              href={product.url}
              key={`feature-${link.handle}-${product.id}`}
              className="group w-[300px] snap-start rounded-md p-4 hfa:bg-slate-50 f:ring-2 f:ring-sky-400 f:ring-offset-2"
            >
              <figure className="relative mb-4 aspect-1 w-[90px] overflow-hidden rounded shadow-lg transition-all group-hfa:shadow-sm">
                {product.featured_media && (
                  <Image
                    objectFit="cover"
                    layout="fill"
                    loading="eager"
                    height={90}
                    width={90}
                    sizes="180px"
                    priority
                    className=""
                    src={product?.featured_media?.src}
                    alt={product?.featured_media?.alt}
                  />
                )}
              </figure>
              <header>
                <Heading as="h3" size="base">
                  {product.title}
                </Heading>
              </header>
              <main>
                <Paragraph size="sm">{product.content}</Paragraph>
              </main>
            </Link>
          );
        })}
      </div>
      {scrollIndex !== 0
        ? <button
            tabIndex={-1}
            className="absolute top-[calc(310px)] left-4 hidden items-center justify-center rounded-full border border-slate-300 bg-white p-2 shadow transition-all hover:-translate-y-0.5 hfa:bg-slate-50/90 sm:flex"
            onClick={(e) => handleManualScroll(-1)}
          >
            <HeroIcon name="ChevronLeftIcon" className="h-4 w-4" />
          </button>
        : null}
      {scrollIndex < maxIndex - 1
        ? <button
            tabIndex={-1}
            className="absolute top-[calc(310px)] right-4 hidden items-center justify-center rounded-full border border-slate-300 bg-white p-2 shadow transition-all hover:-translate-y-0.5 hfa:bg-slate-50/90 sm:flex"
            onClick={(e) => handleManualScroll(1)}
          >
            <HeroIcon name="ChevronRightIcon" className="h-4 w-4" />
          </button>
        : null}
    </div>
  );
};
