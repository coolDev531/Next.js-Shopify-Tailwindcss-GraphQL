import { Section } from "_client/layout/section";
import { Link } from "_client/link";
import { BlockHeading } from "_client/sections/block-heading";
import { Heading } from "_client/typography/heading";
import { Paragraph } from "_client/typography/paragraph";
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
        <figure
          className="absolute left-1/2 -z-20 -ml-[50vw] h-full w-screen bg-top bg-no-repeat"
          style={{
            backgroundImage: "url('/images/bg-gradient-light.jpg')",
            backgroundSize: "123.25rem 100%",
          }}
        />
        <figure className="absolute left-1/2 -z-10 -ml-[50vw] h-full w-screen bg-grid-slate-900/[0.04] [mask-image:linear-gradient(0deg,transparent,black)] "></figure>
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
              <div className="mb-24 flex flex-col justify-center">
                <section className="rounded-xl bg-white p-8 shadow-xl">
                  <header>
                    <Heading heading="h3">{block.settings.title}</Heading>
                  </header>
                  <main>
                    <Paragraph size="xl">{block.settings.paragraph}</Paragraph>
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
                </section>
              </div>
              <section className="-mt-24 flex flex-col justify-center">
                {block.settings.image && (
                  <figure className="aspect-w-4 aspect-h-3 relative aspect-og-image flex-1 overflow-hidden rounded-xl shadow-2xl">
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
