import { Wrapper } from "_client/layout/wrapper";
import { FC } from "react";
import { stripHtml } from "string-strip-html";
import { InfoCardsSection } from ".shopify-cms/types/sections";
import { _Image_liquid, _Metafield_liquid_file_reference_force_generic } from ".shopify-cms/types/shopify";
import { cleanSvgIds } from "utils/clean-svg-ids";

export const InfoCards: FC<InfoCardsSection> = ({ id, settings, blocks, type }) => {
  return (
    <Wrapper
      maxWidth="xl"
      overflowHidden
      spacing={settings.spacing}
      spacingTop={settings.spacing_top}
      spacingBottom={settings.spacing_bottom}
    >
      <section>
        <header>
          <h2 className="heading-pre">{settings.pre_title}</h2>
          <h3 className="heading-xl">{settings.title}</h3>
        </header>
      </section>
      <div className="relative sm:left-1/2 sm:-ml-[50vw] sm:w-screen sm:pl-[max(32px,calc((100vw-80rem)/2+32px))]">
        <div className="scrollbar-none grid gap-4 overflow-x-scroll sm:auto-cols-min sm:grid-flow-col-dense">
          {settings.content_list.map((product) => {
            const svgImage = product.metafields.find(
              ({ key }) => key === "logo"
            ) as _Metafield_liquid_file_reference_force_generic;

            const darkLogo = product.metafields.find(({ key }) => key === "logo_dark")
              ?.value as _Image_liquid;

            return (
              <section key={product.id} className="card min-w-[220px] select-none">
                <header className="flex flex-col gap-2">
                  {darkLogo
                    ? <>
                        <figure
                          className="relative flex h-10 w-28 bg-contain bg-left bg-no-repeat dark:hidden"
                          style={{
                            backgroundImage: `url(${
                              svgImage?.value?.url.replace(/^(http:)?\/\//, "https://") ??
                              product.featured_image.replace(/^(http:)?\/\//, "https://")
                            })`,
                          }}
                        ></figure>
                        <figure
                          className="relative flex hidden h-10 w-28 bg-contain bg-left bg-no-repeat dark:block"
                          style={{
                            backgroundImage: `url(${
                              darkLogo?.src.replace(/^(http:)?\/\//, "https://") ??
                              product.featured_image.replace(/^(http:)?\/\//, "https://")
                            })`,
                          }}
                        ></figure>
                      </>
                    : <figure
                        className="relative flex h-10 w-28 bg-contain bg-left bg-no-repeat"
                        style={{
                          backgroundImage: `url(${
                            svgImage?.value?.url.replace(/^(http:)?\/\//, "https://") ??
                            product.featured_image.replace(/^(http:)?\/\//, "https://")
                          })`,
                        }}
                      ></figure>}
                  <h3 className="heading-base"> {product.title} </h3>
                </header>
                <main className="paragraph-sm">
                  <p>{stripHtml(product.content).result}</p>
                </main>
              </section>
            );
          })}
          {blocks.map((block) => (
            <section
              id={`block--${block.id}`}
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
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
