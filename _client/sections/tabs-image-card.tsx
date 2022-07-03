import { Image } from "_client/image";
import { Wrapper } from "_client/layout/wrapper";
import { Link } from "_client/link";
import { BlockHeading } from "_client/sections/block-heading";
import { Heading } from "_client/typography/heading";
import { Paragraph } from "_client/typography/paragraph";
import { renderIcon } from "_sections/utils";
import clsx from "clsx";
import img1 from "public/images/bg-gradient-light.jpg";

import { FC, useState } from "react";
import { TabsImageCardSection } from "types/sections";

export const TabsImageCard: FC<TabsImageCardSection> = ({ id, blocks, type }) => {
  const [activateTab, setActivateTab] = useState(
    blocks.filter(({ type }) => type === "tab")[0]?.id
  );

  return (
    <Wrapper maxWidth="xl" paddingY="base">
      {blocks.map((block) => {
        return block.type === "heading"
          ? <div className="mb-12" key={`heading-${block.id}`}>
              <BlockHeading {...block} />
            </div>
          : null;
      })}
      <div className="scrollbar-none -m-1 -mx-1 grid auto-cols-min grid-flow-col-dense gap-6 overflow-x-scroll p-1">
        {blocks.map((block) => {
          if (block.type !== "tab") return null;

          return (
            <button
              className="group flex min-w-[6rem] flex-col items-center"
              key={`tab-${block.id}`}
              onClick={() => setActivateTab(block.id)}
            >
              <figure>
                {renderIcon(
                  block.settings.tab_icon,
                  clsx(
                    "w-12 h-12 mb-4",
                    block.id === activateTab
                      ? "text-sky-500 [--svg-active-opacity:0.1] [--svg-active-fill:currentColor]"
                      : "text-slate-300 group-hover:text-slate-500/60"
                  )
                )}
              </figure>
              <h3
                className={clsx(
                  "text-sm font-semibold tracking-tight",
                  block.id === activateTab && "text-sky-500"
                )}
              >
                {block.settings.tab_title}
              </h3>
            </button>
          );
        })}
      </div>

      <div className="relative mt-12">
        <figure className="absolute left-1/2 -z-20 -ml-[50vw] h-full w-screen bg-top bg-no-repeat">
          <Image
            src={img1}
            width={img1.width}
            height={img1.height}
            alt="background image"
            className="absolute bottom-0 top-0 left-1/2 block h-full min-w-[123.25rem] -translate-x-1/2"
          />
        </figure>
        <figure className="absolute left-1/2 -z-10 -ml-[50vw] h-full w-screen bg-grid-gray-900/[0.04] [mask-image:linear-gradient(0deg,transparent,black)] "></figure>
        {blocks.map((block) => {
          if (block.type !== "tab") return null;

          return (
            <div
              key={`content-${block.id}`}
              className={clsx(
                block.id !== activateTab
                  ? "hidden"
                  : "flex grid-cols-2 flex-col gap-8  py-8 lg:grid lg:py-16"
              )}
            >
              <div className="mb-24 flex flex-col">
                <section className="xl:mt-18 relative z-10 rounded-lg bg-white px-6 py-5 shadow-xl ring-1 ring-slate-900/5">
                  <div className="pointer-events-none absolute inset-x-0 inset-y-5 border-t border-b border-slate-100" />
                  <div className="pointer-events-none absolute inset-x-6 inset-y-0 border-l border-r border-slate-100" />
                  <div className="bg-slate-100 py-6 px-6 sm:py-9">
                    <header className="">
                      <Heading as="h3" size="lg">
                        {block.settings.title}
                      </Heading>
                    </header>
                    <main className="">
                      <Paragraph size="lg">{block.settings.paragraph}</Paragraph>
                    </main>
                    <footer
                      className={clsx(
                        ((block.settings.cta1 && block.settings.cta1_link) ||
                          (block.settings.cta2 && block.settings.cta2_link)) &&
                          "mt-8"
                      )}
                    >
                      {block.settings.cta1 && block.settings.cta1_link && (
                        <Link
                          href={block.settings.cta1_link}
                          className="rounded border border-gray-700 bg-white py-2 px-4"
                        >
                          {block.settings.cta1}
                        </Link>
                      )}
                      {block.settings.cta2 && block.settings.cta2_link && (
                        <Link
                          href={block.settings.cta2_link}
                          className="ml-8 rounded border border-gray-700 bg-white py-2 px-4"
                        >
                          {block.settings.cta2}
                        </Link>
                      )}
                    </footer>
                  </div>
                </section>
              </div>
              <section className="-mt-24 flex flex-col justify-center rounded-xl bg-slate-900 px-1 pb-1 pt-3 shadow-2xl drop-shadow-2xl d:bg-dark-card ">
                <header className="-mx-1 grid grid-cols-[50px_1fr_50px] items-center border-b border-slate-500/30 px-3 pb-2">
                  <i className="flex gap-1.5">
                    <button
                      tabIndex={-1}
                      aria-hidden="true"
                      className="h-3 w-3 rounded-full bg-slate-700 transition-colors h:bg-[#EC6A5F]"
                    ></button>
                    <button
                      tabIndex={-1}
                      aria-hidden="true"
                      className="h-3 w-3 rounded-full bg-slate-700 transition-colors h:bg-[#F4BF50]"
                    ></button>
                    <button
                      tabIndex={-1}
                      aria-hidden="true"
                      className="h-3 w-3 rounded-full bg-slate-700 transition-colors h:bg-[#61C454]"
                    ></button>
                  </i>
                  <h4 className="color select-none text-center text-[13px] leading-none tracking-wide text-slate-500">
                    {block.settings.tab_title}
                  </h4>
                  <div className="flex justify-end"></div>
                </header>
                {block.settings.image && (
                  <figure className="aspect-w-4 aspect-h-3 relative aspect-og-image flex-1 select-none overflow-hidden rounded-b-lg rounded-t-sm">
                    <Image
                      className="object-cover"
                      maxWidth={600}
                      width={block.settings.image.width}
                      height={block.settings.image.height}
                      src={`${block?.settings?.image?.src}`}
                      alt={block?.settings?.image?.alt}
                    />
                  </figure>
                )}
              </section>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
