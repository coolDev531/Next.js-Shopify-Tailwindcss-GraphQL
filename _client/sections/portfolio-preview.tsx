import { Image } from "_client/image";
import { Link } from "_client/link";
import { FC, useState } from "react";
import { PortfolioPreviewSection } from ".shopify-cms/types/sections";
import { Wrapper } from "_client/layout/wrapper";
import { _Metafield_liquid_file_reference_image } from ".shopify-cms/types/shopify";

export const PortfolioPreview: FC<PortfolioPreviewSection> = ({ id, settings, blocks, type }) => {
  const products =
    settings.collection?.products?.filter(
      (p) =>
        p.featured_media &&
        (p.metafields.find(({ key }) => key === "logo") ||
          p.metafields.find(({ key }) => key === "logo_dark"))
    ) ??
    settings.products?.filter(
      (p) =>
        p.featured_media &&
        (p.metafields.find(({ key }) => key === "logo") ||
          p.metafields.find(({ key }) => key === "logo_dark"))
    ) ??
    [];

  const [showAll, setShowAll] = useState(false);

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
          <h3 className="heading-lg">{settings.title}</h3>
        </header>
        <main className="grid grid-cols-2 overflow-hidden rounded-md lg:grid-cols-3">
          {products
            ?.filter((p, i) => i < 6 || showAll)
            .map((product) => {
              const logo = (product.metafields.find(({ key }) => key === "logo_dark")?.value ||
                product.metafields.find(({ key }) => key === "logo")
                  ?.value) as _Metafield_liquid_file_reference_image;

              return (
                <Link key={product.id} href={product.url} className="group">
                  <figure className="relative aspect-1">
                    <Image
                      alt={product.featured_media.alt ?? product.title}
                      src={product.featured_media.src}
                      width={product.featured_media.width}
                      height={product.featured_media.height}
                      className="h-full w-full object-cover"
                    />
                    <figcaption className="transition-linear absolute inset-0 flex items-center justify-center bg-gray-900/60 backdrop-blur-sm transition-all group-hfa:bg-transparent group-hfa:backdrop-blur-none">
                      <Image
                        alt={logo.alt ?? product.title}
                        src={logo.src}
                        width={logo.width}
                        height={logo.height}
                        maxHeight={80}
                        className="max-h-[50%] max-w-[80%] drop-shadow-xl transition-opacity group-hfa:opacity-0"
                      />
                      <span className="sr-only">{product.title}</span>
                    </figcaption>
                  </figure>
                </Link>
              );
            })}
        </main>
        {products.length > 6
          ? <footer className="mt-12 flex items-center justify-center">
              <button
                className="button-secondary"
                onClick={() => setShowAll((current) => !current)}
              >
                {showAll ? "Show less" : "Show more"}
              </button>
            </footer>
          : null}
      </section>
    </Wrapper>
  );
};
