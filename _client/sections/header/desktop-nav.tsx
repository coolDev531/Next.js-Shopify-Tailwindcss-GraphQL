import { Popover, Transition } from "@headlessui/react";
import HeroIcon from "_client/dynamic-hero-icon";
import { Link } from "_client/link";
import { PortfolioMenu } from "_client/sections/header/portfolio-menu";
import { Heading } from "_client/typography/heading";
import { Paragraph } from "_client/typography/paragraph";
import clsx from "clsx";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { FC, FocusEventHandler, Fragment, MouseEventHandler, useCallback, useRef, useState } from "react";
import { HeaderBlocks } from "types/sections";
import { _Link_liquid, _Linklist_liquid, _Product_liquid } from "types/shopify";
import { getParentNodeByClass } from "utils/get-parent-node-by-class";
import { scrollToX } from "utils/scroll-to";

const DropdownPanel = ({ items, link }: { items: _Product_liquid[]; link: _Link_liquid }) => {
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
                <Heading heading="h4">{product.title}</Heading>
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

export const DesktopNav: FC<{
  blocks: HeaderBlocks[];
  menu: _Linklist_liquid;
}> = ({ menu, blocks }) => {
  const [initialNavPosition, setInitialNavPosition] = useState({
    width: 0,
    left: 0,
    opacity: 0,
    transition: "0.1s opacity",
  });

  const router = useRouter();

  // const [navHover, setNavHover] = useState(initialNavPosition);

  const setNavHover = useCallback(({ width, left, opacity, transition }) => {
    const element: HTMLDivElement = document.querySelector(".nav-hover-effect");
    element.style.width = `${width}px`;
    element.style.left = `${left}px`;
    element.style.transition = transition;
    element.style.opacity = opacity;
  }, []);

  const handleNavHover: MouseEventHandler = useCallback((e) => {
    const element: HTMLDivElement = document.querySelector(".nav-hover-effect");

    if (e.target === e.currentTarget) {
      setNavHover(initialNavPosition);
    }
    if (e.target !== e.currentTarget) {
      const navItemRef = getParentNodeByClass(e.target as HTMLElement, "nav-item");
      if (navItemRef) {
        setNavHover({
          width: navItemRef.offsetWidth,
          left: navItemRef.offsetLeft,
          opacity: 0.7,
          transition: +element.style.opacity ? "0.18s" : "0.1s opacity",
        });
      }
    }
  }, [initialNavPosition, setNavHover]);

  const handleNavFocus: FocusEventHandler<HTMLElement> = useCallback((e) => {
    const element: HTMLDivElement = document.querySelector(".nav-hover-effect");

    // @ts-ignore
    if (!e?.currentTarget?.matches(":focus-within")) {
      setNavHover(initialNavPosition);
      return;
    }

    const navItemRef = getParentNodeByClass(e.target as HTMLElement, "nav-item");
    if (navItemRef) {
      setNavHover({
        width: navItemRef.offsetWidth,
        left: navItemRef.offsetLeft,
        opacity: 0.7,
        transition: +element.style.opacity ? "0.18s" : "0.1s opacity",
      });
    }
  }, [initialNavPosition, setNavHover]);

  const handleNavReset = useCallback(() => {
    setNavHover(initialNavPosition);
  }, [initialNavPosition, setNavHover]);

  return (
    <>
      <nav
        className="scrollbar-none header-nav mt-auto ml-auto hidden h-full overflow-auto px-2 md:flex"
        onBlur={handleNavFocus}
        onMouseLeave={handleNavReset}
        onMouseOver={handleNavHover}
      >
        <div
          className="nav-hover-effect absolute top-1/2 z-0 h-8 -translate-y-1/2 transform rounded bg-sky-200/30 dark:bg-slate-700"
          /* style={{
            width: `${navHover.width}px`,
            left: `${navHover.left}px`,
            transition: navHover.transition,
            opacity: navHover.opacity,
          }}*/
        />
        {menu.links.map((link, i) => {
          const block = blocks.find((block) => block.settings.handle === link.handle);
          if (block) {
            switch (block.type) {
              case "dropdown_menu_features": {
                return (
                  <Popover key={block.id}>
                    {({ open }) => (
                      <>
                        <div
                          className={clsx(
                            "nav-item relative flex h-full flex-1 py-4 text-sm",
                            open &&
                              "before:absolute b:bottom-0 b:left-3 b:z-40 b:h-[2px] b:w-[calc(100%-24px)] b:bg-slate-900 dark:b:bg-slate-400 "
                          )}
                        >
                          <Popover.Button
                            className="flex h-full flex-1 items-center justify-center overflow-hidden rounded py-1 px-3 text-sm font-medium hfa:text-slate-900 dark:hfa:text-white"
                            onFocus={handleNavFocus}
                          >
                            {link.title}
                            <div className="h-4 w-4">
                              <HeroIcon
                                className="pointer-events-none ml-1 h-4 w-4"
                                name="ChevronDownIcon"
                              />
                            </div>
                          </Popover.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 -translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 -translate-y-1"
                        >
                          <Popover.Panel className="absolute inset-x-0 top-0 -z-10 hidden transform bg-white pt-[65px] shadow-lg focus-visible:outline-none md:block">
                            <DropdownPanel items={block.settings.menu_items} link={link} />
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                );
              }
              case "dropdown_menu_carousel":
                return <div key={block.id}></div>;
              case "dropdown_menu_portfolio":
                return (
                  <Popover key={block.id}>
                    {({ open }) => (
                      <>
                        <div
                          className={clsx(
                            "nav-item relative flex h-full flex-1 py-4 text-sm",
                            open &&
                              "before:absolute b:bottom-0 b:left-3 b:z-40 b:h-[2px] b:w-[calc(100%-24px)] b:bg-slate-900 dark:b:bg-slate-400 "
                          )}
                        >
                          <Popover.Button
                            className="flex h-full flex-1 items-center justify-center overflow-hidden rounded py-1 px-3 text-sm font-medium hfa:text-slate-900 dark:hfa:text-white"
                            onFocus={handleNavFocus}
                          >
                            {link.title}
                            <div className="h-4 w-4">
                              <HeroIcon
                                className="pointer-events-none ml-1 h-4 w-4"
                                name="ChevronDownIcon"
                              />
                            </div>
                          </Popover.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 -translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 -translate-y-1"
                        >
                          <Popover.Panel className="absolute inset-x-0 top-0 -z-10 hidden transform bg-white pt-[65px] shadow-lg focus-visible:outline-none md:block">
                            <PortfolioMenu {...block.settings} links={link.links} />
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                );
            }
          }

          return (
            <div
              key={link.url + link.title + i}
              className={clsx(
                "nav-item relative flex py-4 text-sm",
                router.asPath.split(/[#?]/)[0] === link.url &&
                  "before:absolute b:bottom-0 b:left-3 b:h-[2px] b:w-[calc(100%-24px)] b:bg-slate-900 dark:b:bg-slate-400 "
              )}
            >
              <NextLink href={link.url}>
                <a
                  className="flex items-center justify-center overflow-hidden rounded py-1 px-3 text-sm font-medium hfa:text-slate-900 dark:hfa:text-white"
                  onFocus={handleNavFocus}
                >
                  {link.title}
                </a>
              </NextLink>
            </div>
          );
        })}
      </nav>
    </>
  );
};
