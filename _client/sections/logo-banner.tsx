import { Image } from "_client/image";
import { Wrapper } from "_client/layout/wrapper";
import { useTooltipStore } from "_client/stores/tooltip-store";
import clsx from "clsx";
import { FC, forwardRef, useEffect, useRef, useState } from "react";
import { useWindowSize } from "react-use";
import { LogoBannerSection } from ".shopify-cms/types/sections";
import { _Image_liquid, _Media_liquid, _Metafield_liquid_file_reference_image } from ".shopify-cms/types/shopify";
import { cleanSvgIds } from "utils/clean-svg-ids";

export const LogoBanner: FC<LogoBannerSection> = ({ id, settings, blocks, type }) => {
  switch (settings.style) {
    case "slider":
      return <LogoBannerSlider {...{ id, settings, blocks, type }} />;
    case "grid":
      return <LogoBannerGrid {...{ id, settings, blocks, type }} />;
  }
};

export const LogoBannerGrid: FC<LogoBannerSection> = ({ id, settings, blocks, type }) => {
  const [tooltip, setTooltip] = useTooltipStore();
  const products = settings.collection?.products ?? settings.products ?? [];

  return (
    <Wrapper
      maxWidth="xl"
      overflowHidden
      spacing={settings.spacing}
      spacingTop={settings.spacing_top}
      spacingBottom={settings.spacing_bottom}
    >
      <section>
        <header className="mb-4">
          <h3 className="mb-1 font-semibold text-gray-700 dark:text-gray-300">{settings.title}</h3>
        </header>
        <main
          className="grid border-t border-l border-gray-200 dark:border-gray-800"
          style={{
            gridTemplateColumns: `repeat(auto-fit, minmax(min(100%/${settings.minItems}, max(160px, 100%/${settings.maxItems})), 1fr)`,
          }}
        >
          {products
            ?.filter((p) => p.metafields["logo"] || p.metafields["logo_dark"] || p.featured_media)
            ?.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-center border-b border-r border-gray-200 dark:border-gray-800"
                style={{ padding: `${settings.paddingY * 4}px ${settings.paddingX * 4}px` }}
              >
                <LogoBannerSliderItem
                  height={settings.height}
                  title={product.title}
                  image={
                    (product.metafields.logo as _Metafield_liquid_file_reference_image) ??
                    product.featured_media
                  }
                  darkImage={product.metafields.logo_dark as _Metafield_liquid_file_reference_image}
                />
              </div>
            ))}
          {blocks.map((block) => {
            switch (block.type) {
              case "manual-image":
                return block.settings.image
                  ? <LogoBannerSliderItem
                      key={block.id}
                      height={settings.height}
                      title={block.settings.title}
                      image={block.settings.image}
                    />
                  : null;
              case "manual-svg":
                return (
                  <figure
                    key={block.id}
                    dangerouslySetInnerHTML={{ __html: cleanSvgIds(block.settings.svg, block.id) }}
                  />
                );
            }
          })}
        </main>
      </section>
    </Wrapper>
  );
};

export const LogoBannerSlider: FC<LogoBannerSection> = ({ id, settings, blocks, type }) => {
  const [tooltip, setTooltip] = useTooltipStore();
  const containerRef = useRef<HTMLDivElement>();
  const bannerRef = useRef<HTMLDivElement>();
  const animationContainerRef = useRef<HTMLDivElement>();
  const [animate, setAnimate] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (settings.animate && bannerRef.current?.clientWidth >= containerRef.current?.clientWidth) {
      setAnimate(true);
    }
    if (!settings.animate || bannerRef.current?.clientWidth < containerRef.current?.clientWidth) {
      animationContainerRef.current?.classList?.remove("md:animate-slide");
      setTimeout(
        () => {
          animationContainerRef.current?.classList?.add("md:animate-slide");
        },
        2
      );
      setAnimate(false);
    }
  }, [settings.animate, width]);

  return (
    <Wrapper
      maxWidth="xl"
      overflowHidden
      spacing={settings.spacing}
      spacingTop={settings.spacing_top}
      spacingBottom={settings.spacing_bottom}
    >
      <section>
        <header className="mb-4">
          <h3 className="mb-1 font-semibold text-gray-700 dark:text-gray-300">{settings.title}</h3>
        </header>
        <main
          ref={containerRef}
          className="relative flex overflow-hidden sm:left-1/2 sm:-ml-[50vw] sm:w-screen sm:pl-[max(32px,calc((100vw-80rem)/2+32px))]"
          onMouseEnter={() => {
            setTooltip(true);
          }}
          onMouseLeave={(e) => {
            setTooltip(false);
            setTimeout(() => setTooltip(true), 50);
          }}
        >
          <div
            ref={animationContainerRef}
            className="scrollbar-none s cale-100 flex overflow-x-scroll whitespace-nowrap transition-all hfa:animation-pause md:animate-slide md:overflow-visible"
            style={{
              animationDuration: `${settings.animation_duration}s`,
              animationPlayState: animate ? "" : "paused",
            }}
          >
            <LogoBannerSliderRow settings={settings} blocks={blocks} ref={bannerRef} />
            {animate
              ? <LogoBannerSliderRow
                  settings={settings}
                  blocks={blocks}
                  className="ml-12 !hidden md:!grid"
                />
              : null}
          </div>
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[max(16px,calc((100vw-80rem)/2+16px))] bg-gradient-to-r from-transparent to-white dark:to-dark-bg sm:w-[max(32px,calc((100vw-80rem)/2+32px))] sm:from-transparent sm:via-white sm:to-white dark:sm:via-dark-bg dark:sm:to-dark-bg"></div>
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[max(16px,calc((100vw-80rem)/2+16px))] bg-gradient-to-l from-transparent dark:to-dark-bg sm:w-[max(32px,calc((100vw-80rem)/2+32px))] sm:from-transparent sm:via-white sm:to-white dark:sm:via-dark-bg dark:sm:to-dark-bg"></div>
        </main>
      </section>
    </Wrapper>
  );
};

export const LogoBannerSliderRow = forwardRef<
  HTMLDivElement,
  Omit<LogoBannerSection, "id" | "type"> & { className?: string }
>(({ settings, blocks, className }, ref) => {
  const products = settings.collection?.products ?? settings.products ?? [];
  return (
    <div className={clsx("grid auto-cols-max grid-flow-col-dense gap-12", className)} ref={ref}>
      {products
        ?.filter((p) => p.metafields["logo"] || p.metafields["logo_dark"] || p.featured_media)
        ?.map((product) => (
          <LogoBannerSliderItem
            key={product.id}
            height={settings.height}
            title={product.title}
            image={
              (product.metafields.logo as _Metafield_liquid_file_reference_image) ??
              product.featured_media
            }
            darkImage={product.metafields.logo_dark as _Metafield_liquid_file_reference_image}
          />
        ))}
      {blocks.map((block) => {
        switch (block.type) {
          case "manual-image":
            return block.settings.image
              ? <LogoBannerSliderItem
                  key={block.id}
                  height={settings.height}
                  title={block.settings.title}
                  image={block.settings.image}
                />
              : null;
          case "manual-svg":
            return (
              <figure
                key={block.id}
                dangerouslySetInnerHTML={{ __html: cleanSvgIds(block.settings.svg, block.id) }}
              />
            );
        }
      })}
    </div>
  );
});

export const LogoBannerSliderItem: FC<{
  height: number;
  image: _Image_liquid | _Media_liquid | _Metafield_liquid_file_reference_image;
  title: string;
  darkImage?: _Image_liquid | _Media_liquid | _Metafield_liquid_file_reference_image;
}> = ({ title, image, height, darkImage }) => {
  return (
    <figure
      className="relative flex w-full cursor-pointer justify-center opacity-60 grayscale transition-all hfa:opacity-100 hfa:grayscale-0 dark:opacity-80 dark:brightness-125 dark:contrast-150 dark:hfa:opacity-100 dark:hfa:contrast-100"
      data-tip={title}
      style={{
        height: `${height}px`,
        width: `${image?.aspect_ratio * height}px`,
      }}
    >
      {image && darkImage
        ? <>
            <Image
              className="h-full object-contain dark:hidden"
              src={`${image?.src}`}
              width={image?.width}
              height={image?.height}
              alt={title}
              maxHeight={height}
            />
            <Image
              className="hidden h-full object-contain dark:block"
              src={`${darkImage?.src}`}
              width={darkImage?.width}
              height={darkImage?.height}
              alt={title}
              maxHeight={height}
            />
          </>
        : <Image
            className="h-full object-contain"
            src={`${image?.src}`}
            width={image?.width}
            height={image?.height}
            alt={title}
            maxHeight={height}
          />}
    </figure>
  );
};
