import { Wrapper } from "_client/layout/wrapper";
import { FC } from "react";
import { stripHtml } from "string-strip-html";
import { InfoCardsSection } from "types/sections";
import { _Metafield_liquid_file_reference_force_generic } from "types/shopify";
import { cleanSvgIds } from "utils/clean-svg-ids";

export const InfoCards: FC<InfoCardsSection> = ({ id, settings, blocks, type }) => {
  return (
    <Wrapper maxWidth="xl" paddingY="base">
      <section>
        <header>
          <h3 className="heading-pre">{settings.pre_title}</h3>
          <h2 className="heading-xl">{settings.title}</h2>
        </header>
      </section>
      <div className="relative sm:left-1/2 sm:-ml-[50vw] sm:w-screen sm:pl-[max(32px,calc((100vw-80rem)/2+32px))]">
        <div className="scrollbar-none grid gap-4 overflow-x-scroll sm:auto-cols-min sm:grid-flow-col-dense">
          {settings.content_list.map((product) => {
            const svgImage = product.metafields.find(
              ({ key }) => key === "logo"
            ) as _Metafield_liquid_file_reference_force_generic;

            return (
              <section
                key={product.id}
                className="min-w-[220px] select-none rounded-md border border-gray-200 bg-white p-3.5 transition-all hfa:border-gray-400/60 dark:border-gray-700/80 dark:bg-dark-card dark:hfa:border-gray-500/80"
              >
                <header className="flex flex-col gap-2">
                  <figure
                    className="relative flex h-10 w-28 bg-contain bg-left bg-no-repeat"
                    style={{
                      backgroundImage: `url(${svgImage?.value?.url ?? product.featured_image})`,
                    }}
                  ></figure>
                  <h3 className="heading-base"> {product.title} </h3>
                </header>
                <main className="paragraph-sm">
                  <p>{stripHtml(product.content).result}</p>
                </main>
              </section>
            );
          })}
          {blocks.map((block) => {
            switch (block.type) {
              case "manual-info-card": {
                return (
                  <section
                    key={block.id}
                    className="w-[200px] rounded-md border border-gray-300 bg-white p-4 shadow-md "
                  >
                    <header className="flex flex-col gap-2">
                      <figure
                        className="[&>svg]:h-8[&>svg]:w-8"
                        dangerouslySetInnerHTML={{
                          __html: cleanSvgIds(block.settings.svg, block.id),
                        }}
                      />
                      <h3>{block.settings.title}</h3>
                    </header>
                    <main className="text-[15px] tracking-tight">
                      <p>{stripHtml(block.settings.paragraph).result}</p>
                    </main>
                  </section>
                );
              }
            }
          })}
        </div>
      </div>
    </Wrapper>
  );
};
