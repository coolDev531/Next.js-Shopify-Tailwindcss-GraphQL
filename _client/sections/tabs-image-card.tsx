import { Section } from "_client/layout/section";
import { Link } from "_client/link";
import { BlockHeading } from "_client/sections/block-heading";
import { renderIcon } from "_sections/utils";
import clsx from "clsx";
import Image from "next/image";
import { FC, useState } from "react";
import { TabsImageCardSection } from "types/sections";

export const TabsImageCard: FC<TabsImageCardSection> = ({ id, blocks, type }) => {
  const [activateTab, setActivateTab] = useState(
    blocks.filter(({ type }) => type === "tab")[0]?.id
  );

  return (
    <Section id={id} type={type} container="xl" padding="base">
      {blocks.map((block) => {
        return block.type === "heading"
          ? <div className="mb-12" key={`heading-${block.id}`}>
              <BlockHeading {...block} section={false} />
            </div>
          : null;
      })}
      <div className="grid auto-cols-min grid-flow-col-dense gap-6">
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
                    "w-12 h-12 mb-6",
                    block.id === activateTab
                      ? "text-sky-500 [--svg-active-opacity:0.1] [--svg-active-fill:currentColor]"
                      : "text-slate-300 group-hover:text-slate-500/60"
                  )
                )}
              </figure>
              <h3
                className={clsx(
                  "text-sm font-semibold",
                  block.id === activateTab && "text-sky-500"
                )}
              >
                {block.settings.tab_title}
              </h3>
            </button>
          );
        })}
      </div>

      <div className="mx-auto max-w-7xl px-8 py-16">
        {blocks.map((block) => {
          if (block.type !== "tab") return null;

          return (
            <div
              key={`content-${block.id}`}
              className={clsx("grid grid-cols-2 gap-8", block.id !== activateTab && "hidden")}
            >
              <section className="my-24 rounded-xl bg-white p-8 shadow-2xl">
                <header>
                  <h1>{block.settings.title}</h1>
                </header>
                <main dangerouslySetInnerHTML={{ __html: block.settings.paragraph }} />
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
              </section>
              <section>
                {block.settings.image && (
                  <figure className="relative aspect-1">
                    <Image
                      objectFit="cover"
                      objectPosition="50% 60%"
                      layout="fill"
                      // width={settings.image.width}
                      // height={settings.image.height}
                      src={`https:${block?.settings?.image?.src}`}
                      alt={block?.settings?.image?.alt}
                    />
                  </figure>
                )}
              </section>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
