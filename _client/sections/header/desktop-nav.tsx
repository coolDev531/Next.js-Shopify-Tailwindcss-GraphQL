import { Popover, Transition } from "@headlessui/react";
import HeroIcon from "_client/dynamic-hero-icon";
import { PortfolioMenu } from "_client/sections/header/portfolio-menu";
import { SliderMenu } from "_client/sections/header/slider-menu";
import clsx from "clsx";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { FC, FocusEventHandler, Fragment, MouseEventHandler, useCallback, useState } from "react";
import { HeaderBlocks } from "types/sections";
import { _Linklist_liquid } from "types/shopify";
import { getParentNodeByClass } from "utils/get-parent-node-by-class";

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
          className="nav-hover-effect absolute top-1/2 z-0 h-8 -translate-y-1/2 transform rounded bg-sky-200/30 dark:bg-dark-card"
          /* style={{
            width: `${navHover.width}px`,
            left: `${navHover.left}px`,
            transition: navHover.transition,
            opacity: navHover.opacity,
          }}*/
        />
        {menu?.links.map((link, i) => {
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
                          <Popover.Panel className="absolute inset-x-0 top-0 -z-10 hidden transform bg-white pt-[65px] shadow-lg focus-visible:outline-none dark:bg-dark-bg md:block">
                            <SliderMenu items={block.settings.menu_items} link={link} />
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
                          <Popover.Panel className="absolute inset-x-0 top-0 -z-10 hidden transform bg-white pt-[65px] shadow-lg focus-visible:outline-none dark:bg-dark-bg md:block">
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
