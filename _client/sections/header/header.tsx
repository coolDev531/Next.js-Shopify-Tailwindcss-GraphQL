import { Badge } from "_client/badge";
import { ReactIcon } from "_client/dynamic-react-icon";
import usePreloadImage from "_client/hooks/use-preload-image";
import LightDarkSwitcher from "_client/light-dark-switch";
import { Link } from "_client/link";
import { DesktopNav } from "_client/sections/header/desktop-nav";
import { NavMobile } from "_client/sections/header/navMobile";
import { SEO } from "content/seo";
import LunalemonLogo from "public/logo.svg";
import { FC, useEffect } from "react";
import { useWindowSize } from "react-use";

import { HeaderSection } from ".shopify-cms/typessections";

export const Header: FC<HeaderSection> = ({ id, type, settings, blocks }) => {
  const preloadImage = usePreloadImage();
  const { width } = useWindowSize();

  useEffect(() => {
    settings.menu?.links.map((link, i) => {
      const block = blocks.find((block) => block.settings.handle === link.handle);
      if (block) {
        switch (block.type) {
          case "dropdown_menu_features": {
            block.settings.menu_items.map((product) => {
              if (product.featured_media?.src) {
                preloadImage({ src: product.featured_media.src, width: width > 640 ? 90 : 140 });
              }
            });
            break;
          }
          case "dropdown_menu_portfolio": {
            [1, 2].map((key) => {
              if (block.settings[`image_${key}`]?.src) {
                preloadImage({
                  src: block.settings[`image_${key}`]?.src,
                  width: width > 640 ? 257 : 330,
                });
              }
            });
            break;
          }
        }
      }
    });
  }, [blocks, settings.menu?.links, preloadImage]);

  return (
    <>
      <div className="h-[65px] opacity-0"></div>
      <header className="fixed top-0 right-0 left-0 z-50 h-header bg-white/75 backdrop-blur-lg dark:bg-gray-900">
        <div
          className="pointer-events-none absolute inset-0 z-20 border-b border-solid border-gray-200 shadow-sm dark:border-gray-700 dark:shadow-white/[0.05]"
          aria-hidden="true"
        />
        <div className="mx-auto flex h-full max-w-7xl px-2 sm:px-4 md:px-8">
          <Logo />
          <VersionBadge />
          <DesktopNav menu={settings.menu} blocks={blocks} />
          <NavDividerDesktop />
          <NavSettingsDesktop />
          <NavMobile menu={settings.menu} blocks={blocks} />
        </div>
      </header>
    </>
  );
};

export const Logo = () => (
  <div className="z-50 flex items-center pl-2 pt-1 pb-2">
    <Link href="/" className="flex h-full items-center [&_svg]:h-full [&_svg]:w-full">
      <LunalemonLogo />
    </Link>
  </div>
);

function VersionBadge() {
  return (
    <div className="z-50 ml-4 flex items-center">
      <Badge>v{process.env.NEXT_PUBLIC_APP_VERSION}</Badge>
    </div>
  );
}

function NavDividerDesktop() {
  return <div className="my-auto hidden h-6 w-px bg-gray-200 dark:bg-gray-700 md:block" />;
}

function NavSettingsDesktop() {
  return (
    <nav className="hidden h-full items-center gap-1 px-2 md:flex">
      <LightDarkSwitcher />

      <Link
        className="flex h-8 w-8 items-center justify-center rounded transition-colors duration-75 hfa:bg-gray-200 hfa:text-gray-900 dark:hfa:bg-dark-card dark:hfa:text-white"
        href={SEO.github}
        referrerPolicy="no-referrer"
        target="_blank"
        rel="noreferrer"
      >
        <ReactIcon name="FaGithub" />
      </Link>
      {/*<Popover className="relative">
        {({ close, open }) => (
          <>
            <Popover.Button className="flex h-8 w-8 items-center justify-center rounded text-xl hfa:text-gray-900 dark:hfa:text-white">
              <span className="sr-only">Open user menu</span>
              <BsThreeDotsVertical />
            </Popover.Button>
            <Popover.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-gray-900/20" />

            <Transition
              as={Fragment}
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Popover.Panel className="absolute right-0 mt-2 min-w-[190px] origin-top-right divide-y divide-gray-200 whitespace-nowrap rounded bg-white  py-1 shadow-lg dark:divide-gray-700 dark:bg-dark-card ">
                <div className="pb-1">
                  {HEADER.profile.map(({ name, href }, index) => (
                    <NextLink key={name + index} href={href}>
                      <a
                        className="block py-2 px-4 pr-10 text-sm hfa:bg-gray-100 dark:hfa:bg-gray-700/40"
                        onClick={() => close()}
                      >
                        {name}
                      </a>
                    </NextLink>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>*/}
    </nav>
  );
}
