import HeroIcon from "_client/dynamic-hero-icon";
import { Section } from "_client/layout/section";
import { Link } from "_client/link";
import { FC } from "react";
import { FooterSection } from "types/sections";

export const Footer: FC<FooterSection> = ({ id, settings, blocks, type }) => {
  return (
    <Section
      id={id}
      type={type}
      padding="base"
      container="xl"
      background="rgb(var(--color-slate-100))"
    >
      <div className="auto-cols-fr grid-flow-col-dense gap-8 md:grid">
        {blocks.map((block) => {
          if (block.settings.menu) {
            return (
              <nav key={block.id} className="border-b border-b-slate-300  md:border-none ">
                <input
                  type="checkbox"
                  hidden
                  id={`${block.id}-${block.settings.menu.handle}`}
                  className="peer hidden"
                />
                <label
                  htmlFor={`${block.id}-${block.settings.menu.handle}`}
                  className="peer-checked:[&_svg]:rotate-180"
                >
                  <h3 className="mb-2 mt-3 flex cursor-pointer select-none items-center justify-between text-sm font-medium text-slate-600 md:cursor-default">
                    {block.settings.menu.title}
                    <HeroIcon
                      name="XIcon"
                      className="h-3 w-3 transition-all group-checked:bg-red-400 md:hidden"
                    />
                  </h3>
                </label>
                <ul className="hidden flex-col gap-1 pl-4  pb-4 peer-checked:flex md:flex md:pl-0 md:pb-0">
                  {block.settings.menu.links.map((link) => {
                    return (
                      <li key={link.handle}>
                        <Link className="select-none text-sm text-slate-500" href={link.url}>
                          {link.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            );
          }
          return null;
        })}
      </div>
    </Section>
  );
};
