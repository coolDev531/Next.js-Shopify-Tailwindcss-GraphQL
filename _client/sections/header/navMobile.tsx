import { Popover, Transition } from "@headlessui/react";
import HeroIcon from "_client/dynamic-hero-icon";
import { Image } from "_client/image";
import LightDarkSwitcher from "_client/light-dark-switch";
import { Link } from "_client/link";
import { Paragraph } from "_client/typography/paragraph";
import clsx from "clsx";
import { FC, Fragment, useCallback, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useMountedState } from "react-use";
import { HeaderBlocks } from "types/sections";
import { _Linklist_liquid } from "types/shopify";

export const NavMobile: FC<{
  blocks: HeaderBlocks[];
  menu: _Linklist_liquid;
}> = ({ blocks, menu }) => {
  const isMount = useMountedState();
  const [menuSelected, setMenuSelected] = useState(blocks[0]?.id ?? "");
  const handleDropdownSelect = useCallback((blockId: string) => {
    if (menuSelected === blockId) {
      setMenuSelected("");
    }
    if (menuSelected !== blockId) {
      setMenuSelected(blockId);
    }
  }, [menuSelected]);

  if (isMount) {
    return null;
  }
  return (
    <nav className="ml-auto flex h-full items-center gap-1 px-2 md:hidden">
      <div className="z-50">
        <LightDarkSwitcher />
      </div>

      <Popover className="relative">
        {({ close }) => (
          <>
            <Popover.Button className="flex h-8 w-8 items-center justify-center rounded text-xl hfa:text-gray-900 dark:hfa:text-white">
              <span className="sr-only">Open user menu</span>
              <BsThreeDotsVertical />
            </Popover.Button>
            <Popover.Overlay
              onClick={() => close()}
              className="pointer-events-none fixed inset-0 z-20 h-screen bg-black/20 backdrop-blur-sm dark:bg-gray-900/20"
            />

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Popover.Panel className="fixed inset-0 z-30">
                <nav className="relative m-1 overflow-hidden rounded bg-white px-2 pt-16 pb-10 shadow dark:bg-dark-bg sm:px-3 sm:px-7">
                  <button
                    className="absolute right-3 top-3 rounded p-1 sm:right-5"
                    onClick={() => close()}
                  >
                    <HeroIcon name="XIcon" className="h-6 w-6" />
                  </button>
                  <ul className="flex flex-col gap-2 transition-all">
                    {menu?.links.map((link, i) => {
                      const block = blocks.find((block) => block.settings.handle === link.handle);
                      if (block) {
                        switch (block.type) {
                          case "dropdown_menu_features": {
                            return (
                              <li
                                key={link.handle}
                                className={clsx(
                                  " min-h-[32px]",
                                  menuSelected !== block.id && "flex flex-col"
                                )}
                              >
                                <DropdownButton
                                  handleDropdownSelect={handleDropdownSelect}
                                  menuSelected={menuSelected}
                                  title={link.title}
                                  id={block.id}
                                />
                                <div
                                  className={clsx(
                                    "relative left-1/2 -ml-[calc(50vw-4px)] w-[calc(100vw-8px)] origin-top transition-all",
                                    menuSelected === block.id
                                      ? "max-h-[400px]"
                                      : "pointer-events-none max-h-0 scale-y-0 opacity-0"
                                  )}
                                >
                                  <div
                                    className={clsx(
                                      "scrollbar-none -my-1 grid snap-x snap-mandatory auto-cols-min grid-flow-col-dense gap-6 overflow-x-scroll scroll-smooth py-2",
                                      "pl-[max(var(--slider-padding),calc((100vw-80rem)/2+var(--slider-padding)))]",
                                      "scroll-pl-[max(var(--slider-padding),calc((100vw-80rem)/2+var(--slider-padding)))]",
                                      "pr-[max(var(--slider-padding),min(calc((100vw-80rem)/2+80rem-280px-var(--slider-padding)),calc(100vw-280px-var(--slider-padding)+4px)))] [--slider-padding:0.75rem] sm:[--slider-padding:2rem]"
                                    )}
                                  >
                                    {block.settings.menu_items.map((product) => {
                                      return (
                                        <Link
                                          onClick={() => close()}
                                          href={product.url}
                                          key={`feature-${link.handle}-${product.id}`}
                                          className="group w-[280px] snap-start rounded-md px-3 py-4 hfa:bg-gray-50 f:ring-2 f:ring-sky-400 f:ring-offset-2 dark:hfa:bg-gray-700/30"
                                        >
                                          <figure className="relative mb-4 aspect-1 w-[140px] overflow-hidden rounded shadow-lg transition-all group-hfa:shadow-sm">
                                            {product.featured_media && (
                                              <Image
                                                loading="eager"
                                                height={product?.featured_media?.height}
                                                width={product?.featured_media?.width}
                                                maxWidth={140}
                                                priority
                                                className="h-full object-cover"
                                                src={product?.featured_media?.src}
                                                alt={product?.featured_media?.alt}
                                              />
                                            )}
                                          </figure>
                                          <header>
                                            <h3 className="heading-sm">{product.title}</h3>
                                          </header>
                                          <main>
                                            <Paragraph size="sm">{product.content}</Paragraph>
                                          </main>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>
                              </li>
                            );
                          }
                          case "dropdown_menu_carousel":
                            return <div key={block.id}></div>;
                          case "dropdown_menu_portfolio":
                            return (
                              <li
                                key={link.handle}
                                className={clsx(
                                  " min-h-[32px]",
                                  menuSelected !== block.id && "flex flex-col"
                                )}
                              >
                                <DropdownButton
                                  handleDropdownSelect={handleDropdownSelect}
                                  menuSelected={menuSelected}
                                  title={link.title}
                                  id={block.id}
                                />
                                <div
                                  className={clsx(
                                    "relative flex origin-top flex-col gap-4 px-3 transition-all",
                                    menuSelected === block.id
                                      ? "max-h-[800px]"
                                      : "pointer-events-none max-h-0 scale-y-0 opacity-0"
                                  )}
                                >
                                  <div className="grid grid-cols-2 gap-4 py-4">
                                    {[1, 2].map((key) => {
                                      if (
                                        block.settings[`image_${key}`] &&
                                        block.settings[`title_${key}`] &&
                                        block.settings[`link_${key}`]
                                      ) {
                                        return (
                                          <Link
                                            onClick={() => close()}
                                            key={block.settings[`title_${key}`]}
                                            href={block.settings[`link_${key}`]}
                                            className="group relative aspect-1 overflow-hidden rounded drop-shadow-lg"
                                          >
                                            <>
                                              <Image
                                                width={`${block.settings[`image_${key}`].width}`}
                                                height={`${block.settings[`image_${key}`].height}`}
                                                maxWidth={300}
                                                priority
                                                src={`${block.settings[`image_${key}`].src}`}
                                                alt="placeholder"
                                                className="h-full object-cover group-hover:opacity-75"
                                              />
                                              <div className="absolute inset-x-0 bottom-0 bg-white/70 py-4 px-3 dark:bg-gray-900/80">
                                                <h3 className="mb-0.5 text-sm font-medium text-gray-900 dark:text-gray-200">
                                                  {block.settings[`title_${key}`]}
                                                </h3>
                                                <p className="text-xs text-gray-700 dark:text-gray-400">
                                                  See more
                                                </p>
                                              </div>
                                            </>
                                          </Link>
                                        );
                                      }
                                      return null;
                                    })}
                                  </div>
                                  <div className="flex flex-wrap gap-4 pb-6 ">
                                    {link.links.map((subLink, index) => {
                                      if (subLink && subLink.links.length) {
                                        return (
                                          <div
                                            key={subLink.handle}
                                            className="flex min-w-[calc(50%-8px)] max-w-[calc(50%-8px)] flex-col"
                                            style={{
                                              marginTop: document?.querySelector(
                                                `.filler-${block.id}-${link.handle}-${index - 2}`
                                              )
                                                ? `-${
                                                    document?.querySelector(
                                                      `.filler-${block.id}-${link.handle}-${
                                                        index - 2
                                                      }`
                                                    ).clientHeight
                                                  }px`
                                                : "0",
                                            }}
                                          >
                                            <h3 className="heading-sm">{subLink.title}</h3>
                                            <ul className="flex flex-col gap-1">
                                              {subLink.links.map((subLink) => (
                                                <li key={subLink.handle}>
                                                  <Link
                                                    onClick={() => close()}
                                                    href={subLink.url}
                                                    className="-m-1 flex rounded p-1 text-sm text-gray-500 hfa:text-sky-500 dark:text-gray-400/90 dark:hfa:text-sky-400"
                                                  >
                                                    {subLink.title}
                                                  </Link>
                                                </li>
                                              ))}
                                            </ul>
                                            <div
                                              className={clsx(
                                                "pointer-events-none relative -z-10 flex-1 opacity-0",
                                                `filler-${block.id}-${link.handle}-${index}`
                                              )}
                                            />
                                          </div>
                                        );
                                      }
                                      return null;
                                    })}
                                  </div>
                                </div>
                              </li>
                            );
                        }
                      }
                      return (
                        <li key={link.handle}>
                          <Link
                            href={link.url}
                            className="flex rounded py-1 px-3 font-medium hfa:bg-gray-100 dark:text-gray-300 dark:hfa:bg-gray-700/50"
                          >
                            {link.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </nav>
  );
};

export const DropdownButton = ({ handleDropdownSelect, menuSelected, title, id }) => {
  return (
    <button
      onClick={() => handleDropdownSelect(id)}
      className={clsx(
        "h-8 items-center rounded border-b-2 border-transparent py-1 pr-3 font-medium dark:text-gray-300",
        menuSelected === id
          ? "ml-3 inline-flex rounded-none border-b-gray-300 h:border-b-gray-400 dark:border-b-gray-700 dark:h:border-b-gray-600"
          : "flex flex-1 pl-3 h:bg-gray-100 dark:h:bg-gray-700/50"
      )}
      style={{
        transition:
          menuSelected === id
            ? "0.15s cubic-bezier(0.4, 0, 0.2, 1), border 0.15s cubic-bezier(0.4, 0, 0.2, 1)"
            : "0.15s cubic-bezier(0.4, 0, 0.2, 1), border 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {title}
      <div className="h-4 w-4 ">
        <HeroIcon className="pointer-events-none ml-1 h-4 w-4" name="ChevronDownIcon" />
      </div>
    </button>
  );
};
