import { Link } from "_client/link";
import { Heading } from "_client/typography/heading";
import Image from "next/image";
import { FC } from "react";
import { HeaderBlocks } from "types/sections";
import { _Link_liquid } from "types/shopify";

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
              className="group relative aspect-1 h-[257px] overflow-hidden rounded-lg"
            >
              <>
                <Image
                  objectFit="cover"
                  layout="fill"
                  width={500}
                  height={500}
                  sizes="500px"
                  priority
                  src={`https:${props[`image_${key}`].src}`}
                  alt="placeholder"
                  className="group-hover:opacity-75"
                />
                <div className="absolute inset-x-0 bottom-0 bg-white/70 py-4 px-3">
                  <h3 className="mb-0.5 text-sm font-medium text-slate-900">
                    {props[`title_${key}`]}
                  </h3>
                  <p className="text-xs text-slate-700">See more</p>
                </div>
              </>
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
                <Heading heading="h4">{link.title}</Heading>
                <ul className="mt-4 flex flex-col gap-3">
                  {link.links.map((subLink) => (
                    <li key={subLink.handle}>
                      <Link
                        href={subLink.url}
                        className="-m-1 flex rounded p-1 text-slate-500 hfa:text-sky-500"
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
