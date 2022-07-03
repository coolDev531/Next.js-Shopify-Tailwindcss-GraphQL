import { Image } from "_client/image";
import { Wrapper } from "_client/layout/wrapper";
import { useTooltipStore } from "_client/stores/tooltip-store";
import { FC } from "react";
import { LogoBannerSection } from "types/sections";

export const LogoBanner: FC<LogoBannerSection> = ({ id, settings, blocks, type }) => {
  const [tooltip, setTooltip] = useTooltipStore();

  return (
    <Wrapper maxWidth="xl" paddingY="base">
      <div className="-mt-12 mb-16">
        <section>
          <header className="mb-4">
            <h3 className="mb-1 font-semibold text-slate-700">{settings.title}</h3>
          </header>
          <main
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
              className="scrollbar-none flex scale-100 overflow-x-scroll whitespace-nowrap transition-all hfa:animation-pause md:animate-slide md:overflow-visible"
              style={{
                animationDuration: `${settings.animation_duration}s`,
                animationPlayState: !settings.animate ? "paused" : "",
              }}
            >
              <div className="grid auto-cols-max grid-flow-col-dense gap-12">
                {settings.logo_items
                  .filter((p) => p.featured_media)
                  .map((product) => (
                    <LogoBannerItem
                      key={product.id}
                      height={settings.height}
                      title={product.title}
                      image={product.featured_media}
                    />
                  ))}
                {blocks.map((block) => {
                  switch (block.type) {
                    case "manual-image":
                      return block.settings.image
                        ? <LogoBannerItem
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
                          dangerouslySetInnerHTML={{ __html: block.settings.svg }}
                        />
                      );
                  }
                })}
              </div>
              <div className="ml-12 hidden auto-cols-max grid-flow-col-dense gap-12 md:grid">
                {settings.logo_items
                  .filter((p) => p.featured_media)
                  .map((product) => {
                    return (
                      <figure
                        key={product.id}
                        className="relative w-full cursor-pointer opacity-60 grayscale transition-all hfa:opacity-100  hfa:grayscale-0"
                        data-tip={product.title}
                        style={{
                          height: `${settings.height}px`,
                          width: `${product.featured_media.aspect_ratio * settings.height}px`,
                          /*backgroundImage: `url('${product.featured_media.src}')`
                      backgroundSize: "contain"*/
                        }}
                      >
                        <LogoBannerItem
                          key={product.id}
                          height={settings.height}
                          title={product.title}
                          image={product.featured_media}
                        />
                      </figure>
                    );
                  })}
                {blocks.map((block) => {
                  switch (block.type) {
                    case "manual-image":
                      return block.settings.image
                        ? <figure
                            key={block.id}
                            className="relative w-full"
                            style={{ height: `${settings.height}px` }}
                          >
                            <LogoBannerItem
                              key={block.id}
                              height={settings.height}
                              title={block.settings.title}
                              image={block.settings.image}
                            />
                          </figure>
                        : null;
                    case "manual-svg":
                      return (
                        <figure
                          key={block.id}
                          dangerouslySetInnerHTML={{ __html: block.settings.svg }}
                        />
                      );
                  }
                })}
              </div>
            </div>
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[max(16px,calc((100vw-80rem)/2+16px))] bg-gradient-to-r from-transparent to-white sm:w-[max(32px,calc((100vw-80rem)/2+32px))] sm:from-transparent sm:via-white sm:to-white"></div>
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[max(16px,calc((100vw-80rem)/2+16px))] bg-gradient-to-l from-transparent to-white sm:w-[max(32px,calc((100vw-80rem)/2+32px))] sm:from-transparent sm:via-white sm:to-white"></div>
          </main>
        </section>
      </div>
    </Wrapper>
  );
};

export const LogoBannerItem = ({ title, image, height }) => {
  return (
    <figure
      className="relative w-full cursor-pointer opacity-60 grayscale transition-all hfa:opacity-100  hfa:grayscale-0"
      data-tip={title}
      style={{
        height: `${height}px`,
        width: `${image.aspect_ratio * height}px`,
      }}
    >
      <Image
        priority
        className="h-full object-contain"
        src={`${image.src}`}
        width={image.width}
        height={image.height}
        alt={title}
        maxHeight={height}
      />
    </figure>
  );
};
