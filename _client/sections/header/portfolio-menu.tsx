import { Image } from "_client/image";
import { Link } from "_client/link";
import { FC } from "react";
import { HeaderBlocks } from ".shopify-cms/types/sections";
import { _Link_liquid } from ".shopify-cms/types/shopify";

export const PortfolioMenu: FC<
  Extract<HeaderBlocks, { type: "dropdown_menu_portfolio" }>["settings"] & { links: _Link_liquid[] }
> = ({ handle, links, ...props }) => {
  return (
    <div className="mx-auto flex max-w-7xl gap-8 px-4 py-16 sm:px-8">
      {[1, 2].map((key) => {
        if (props[`image_${key}`] && props[`title_${key}`] && props[`link_${key}`]) {
          return (
            <Link
              key={props[`title_${key}`]}
              href={props[`link_${key}`]}
              className="group relative h-[257px] w-[257px] overflow-hidden rounded-lg"
            >
              <Image
                preload
                width={`${props[`image_${key}`].width}`}
                height={`${props[`image_${key}`].height}`}
                maxWidth={257}
                priority
                src={`${props[`image_${key}`].src}`}
                alt="placeholder"
                className="aspect-1 h-full w-full object-cover group-hover:opacity-75"
              />
              <div className="absolute inset-x-0 bottom-0 bg-white/70 py-4 px-3 dark:bg-gray-900/80">
                <h3 className="mb-0.5 text-sm font-medium text-gray-900 dark:text-gray-200">
                  {props[`title_${key}`]}
                </h3>
                <p className="text-xs text-gray-700 dark:text-gray-400">See more</p>
              </div>
            </Link>
          );
        }
        return null;
      })}
      <div className="flex flex-1 justify-between gap-8">
        {links.map((link) => {
          if (link && link.links.length) {
            return (
              <div key={link.handle} className="">
                <h3 className="heading-sm">{link.title}</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {link.links.map((subLink) => (
                    <li key={subLink.handle}>
                      <Link
                        href={subLink.url}
                        className="-m-1 flex rounded p-1 text-sm text-gray-500 hfa:text-accent dark:text-gray-400"
                      >
                        {subLink.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
