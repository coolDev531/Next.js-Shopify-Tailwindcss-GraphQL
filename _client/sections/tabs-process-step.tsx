import HeroIcon from "_client/dynamic-hero-icon";
import { ReactIcon } from "_client/dynamic-react-icon";
import { Image } from "_client/image";
import { Wrapper } from "_client/layout/wrapper";
import { Link } from "_client/link";
import { BlockHeading } from "_client/sections/block-heading";
import { FeatureCarouselItem } from "_client/sections/feature-carousel";
import { Richtext } from "_client/typography/richtext";
import clsx from "clsx";
import { motion } from "framer-motion";
import { FC, LegacyRef, useCallback, useRef, useState } from "react";

import { TabsProcessStepSection } from "types/sections";
import { scrollToX, scrollToY } from "utils/scroll-to";

export const TabsProcessStep: FC<TabsProcessStepSection> = ({ id, settings, blocks, type }) => {
  const [selected, setSelected] = useState(0);
  const scrollBlocksRef = useRef<HTMLElement[]>([]);
  const scrollContainerRef = useRef(null);
  const mobileScrollContainerRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleSelect = useCallback((index: number) => {
    setSelected(index);
    let totalHeight = 0;
    for (let i = 0; i < scrollBlocksRef.current.length; i++) {
      if (index === i) {
        break;
      }
      totalHeight += scrollBlocksRef.current[i].offsetHeight;
    }
    scrollToY(250, totalHeight, scrollContainerRef.current);
  }, []);

  const handleScrollEvent = useCallback((e) => {
    const { scrollLeft } = mobileScrollContainerRef.current;

    setScrollIndex((current) => {
      if (Math.floor((scrollLeft + 384 / 2) / 384) === current) return current;
      return Math.floor((scrollLeft + 384 / 2) / 384);
    });
  }, []);

  return (
    <Wrapper
      maxWidth="xl"
      paddingY="base"
      bgOpacity={0.6}
      bgClassName="bg-[url('/images/bg-gradient-light-180.jpg')] dark:bg-[url('/images/bg-gradient-templates.png')] bg-top bg-no-repeat"
      overflowHidden
    >
      <div className="hidden grid-cols-[380px_1fr] gap-16 lg:grid xl:grid-cols-[440px_1fr]">
        <section>
          <header>
            <h3 className="heading-pre">{settings.pre_title}</h3>
            <h2 className="heading-xl">{settings.title}</h2>
            <Richtext className="paragraph-lg">{settings.paragraph}</Richtext>
          </header>
          <nav className="mt-8 flex flex-col gap-1">
            {blocks.map((block, index) => {
              switch (block.type) {
                case "step": {
                  return (
                    <button
                      key={`tab-${block.id}`}
                      className={clsx(
                        "rounded-md p-3 text-left backdrop-blur-lg transition-all duration-100 hfva:ring-0 hfva:ring-offset-0",
                        selected === index
                          ? "translate-y-0 bg-white/60 shadow-lg shadow-bg-dark/10 dark:bg-white/[0.08]"
                          : "hfa:-translate-y-[0.2rem] hfa:bg-white/60 hfa:shadow-lg hfa:shadow-bg-dark/10 dark:hfa:bg-white/[0.08]"
                      )}
                      onClick={() => handleSelect(index)}
                    >
                      <h3 className="heading-sm">{block.settings.tab_title}</h3>
                      <p className="paragraph-base leading-tight tracking-tight text-gray-500/80">
                        {block.settings.tab_paragraph}
                      </p>
                    </button>
                  );
                }
              }
            })}
          </nav>
        </section>

        <figure className={clsx("h-full max-h-[620px] min-h-[480px] w-full self-end")}>
          <div className="h-full rounded-xl bg-gray-900 p-3 shadow-2xl drop-shadow-2xl d:bg-dark-card">
            <header
              className="mb-3 grid items-center"
              style={{ gridTemplateColumns: "50px 1fr 50px" }}
            >
              <i className="flex gap-1.5">
                <button
                  tabIndex={-1}
                  aria-hidden
                  className="h-3 w-3 rounded-full bg-gray-700 transition-colors h:bg-[#EC6A5F]"
                />
                <button
                  tabIndex={-1}
                  aria-hidden
                  className="h-3 w-3 rounded-full bg-gray-700 transition-colors h:bg-[#F4BF50]"
                />
                <button
                  tabIndex={-1}
                  aria-hidden
                  className="h-3 w-3 rounded-full bg-gray-700 transition-colors h:bg-[#61C454]"
                />
              </i>
              <h4 className="color select-none text-center text-[13px] leading-none tracking-wide text-gray-500"></h4>
              <div className="flex justify-end">
                <button
                  className="transition-colors hf:text-white"
                  onClick={(e) => console.log(e)}
                  type="button"
                >
                  <ReactIcon name="FiCopy" />
                </button>
              </div>
            </header>
            <div className="relative h-[calc(100%-28px)] before:absolute b:pointer-events-none b:bottom-0 b:z-10 b:h-12 b:w-full b:select-none b:bg-gradient-to-b b:from-transparent b:to-gray-900 d:b:to-dark-card">
              <div
                className="scrollbar-none absolute inset-0 w-auto w-full overflow-y-scroll text-sm"
                ref={scrollContainerRef}
              >
                {blocks.map((block, index) => (
                  <section
                    key={`content-${block.id}`}
                    className={clsx("mb-16", selected === index ? "opacity-100" : "opacity-40")}
                    ref={(el) => (scrollBlocksRef.current[index] = el)}
                  >
                    <header>
                      <h3 className="heading-base text-gray-100">{block.settings.title}</h3>
                    </header>
                    <main>
                      <Richtext className="paragraph-lg text-gray-300/90">
                        {block.settings.paragraph}
                      </Richtext>
                    </main>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </figure>
      </div>

      {/* Mobile */}
      <div className="flex flex-col gap-8 lg:hidden">
        <header>
          <h3 className="heading-pre">{settings.pre_title}</h3>
          <h2 className="heading-xl">{settings.title}</h2>
          <Richtext className="paragraph-lg">{settings.paragraph}</Richtext>
        </header>
        <div className="relative left-1/2 -ml-[50vw] w-screen">
          <div
            className="scrollbar-none -my-2 grid snap-x snap-mandatory scroll-pl-[max(1rem,calc((100vw-80rem)/2+1rem))] auto-cols-min grid-flow-col-dense gap-6 overflow-x-scroll scroll-smooth py-2 pr-[max(1rem,min(calc((100vw-80rem)/2+80rem-360px-1rem),calc(100vw-360px-1rem+4px)))] pl-[max(1rem,calc((100vw-80rem)/2+1rem))] md:scroll-pl-[max(2rem,calc((100vw-80rem)/2+2rem))] md:pr-[max(2rem,min(calc((100vw-80rem)/2+80rem-360px-2rem),calc(100vw-360px-2rem+4px)))] md:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]"
            onScroll={handleScrollEvent}
            ref={mobileScrollContainerRef}
          >
            {blocks.map((block) => {
              return (
                <TabsCarouselItem
                  key={`feature-${id}-${block.id}`}
                  id={block.id}
                  title={block.settings.title}
                  tabTitle={block.settings.tab_title}
                  description={block.settings.paragraph}
                  tabParagraph={block.settings.tab_paragraph}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export const TabsCarouselItem = ({ id, title, description, tabTitle, tabParagraph }) => {
  return (
    <div className="group snap-start f:ring-2 f:ring-sky-400 f:ring-offset-2">
      <figure className="relative mb-4 aspect-1 w-[360px] overflow-hidden rounded shadow-lg transition-all">
        <div className="h-full bg-gray-900 p-3 shadow-xl drop-shadow-2xl dark:bg-dark-card">
          <header className="mb-3 grid grid-cols-[50px_1fr_50px] items-center">
            <i className="flex gap-1.5">
              <button
                tabIndex={-1}
                aria-hidden
                className="h-3 w-3 rounded-full bg-gray-700 transition-colors h:bg-[#EC6A5F]"
              />
              <button
                tabIndex={-1}
                aria-hidden
                className="h-3 w-3 rounded-full bg-gray-700 transition-colors h:bg-[#F4BF50]"
              />
              <button
                tabIndex={-1}
                aria-hidden
                className="h-3 w-3 rounded-full bg-gray-700 transition-colors h:bg-[#61C454]"
              />
            </i>
            <h4 className="color select-none text-center text-[13px] leading-none tracking-wide text-gray-500"></h4>
            <div className="flex justify-end"></div>
          </header>
          <div className="relative h-[calc(100%-28px)] before:absolute b:pointer-events-none b:bottom-0 b:z-10 b:h-12 b:w-full b:select-none b:bg-gradient-to-b b:from-transparent b:to-gray-900 d:b:to-dark-card">
            <div className="scrollbar-none absolute inset-0 w-auto w-full overflow-y-scroll">
              <section>
                <header>
                  <h3 className="heading-base text-gray-100">{title}</h3>
                </header>
                <main>
                  <Richtext className="paragraph-lg text-gray-300/90">{description}</Richtext>
                </main>
              </section>
            </div>
          </div>
        </div>
      </figure>
      <header>
        <h3 className="heading-sm">{tabTitle}</h3>
      </header>
      <main>
        <Richtext className="paragraph-sm">{tabParagraph}</Richtext>
      </main>
    </div>
  );
};
