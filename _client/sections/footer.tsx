import HeroIcon from "_client/dynamic-hero-icon";
import { Link } from "_client/link";
import LunalemonLogo from "public/logo.svg";
import { FC } from "react";
import { BsFacebook, BsGithub, BsGoogle, BsInstagram } from "react-icons/bs";
import { FooterSection } from "types/sections";

export const Footer: FC<FooterSection> = ({ id, settings, blocks, type }) => {
  return (
    <footer id={id} className="mt-24">
      <section className="border-y border-slate-200 bg-slate-100 ">
        <div className="mx-auto  max-w-7xl  py-16 px-4 sm:px-8">
          <nav className="auto-cols-min grid-flow-col-dense justify-between gap-8 md:grid">
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
                            <Link
                              className="select-none whitespace-nowrap text-sm text-slate-500"
                              href={link.url}
                            >
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
          </nav>
          <header className="mt-8 flex flex-col items-center sm:items-start">
            <Link href="/" className="flex h-14 items-center [&_svg]:h-full [&_svg]:max-w-full ">
              <LunalemonLogo />
            </Link>
          </header>
          <footer className="mt-4 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <small className="order-2 text-center text-slate-500 sm:order-none sm:text-right">
              Copyright © {new Date().getFullYear()} Lunalemon.dev - All rights reserved.
            </small>
            <nav className="flex flex-1 items-center justify-end divide-x divide-slate-200">
              {settings.facebook
                ? <Link
                    href={settings.facebook}
                    target="_blank"
                    className="px-4 py-1 text-xl text-slate-500 transition-all hfa:text-sky-500"
                  >
                    <BsFacebook />
                  </Link>
                : null}
              {settings.github
                ? <Link
                    href={settings.github}
                    target="_blank"
                    className="px-4 py-1 text-xl text-slate-500 transition-all hfa:text-sky-500"
                  >
                    <BsGithub />
                  </Link>
                : null}
              {settings.google
                ? <Link
                    href={settings.google}
                    target="_blank"
                    className="px-4 py-1 text-xl text-slate-500 transition-all hfa:text-sky-500"
                  >
                    <BsGoogle />
                  </Link>
                : null}
              {settings.instagram
                ? <Link
                    href={settings.instagram}
                    target="_blank"
                    className="px-4 py-1 text-xl text-slate-500 transition-all hfa:text-sky-500"
                  >
                    <BsInstagram />
                  </Link>
                : null}
            </nav>
          </footer>
        </div>
      </section>
      <section className="flex h-16 items-center justify-center">Made with 🍋 by Lunalemon</section>
    </footer>
  );
};
