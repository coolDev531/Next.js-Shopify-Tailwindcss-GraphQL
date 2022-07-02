import { Wrapper } from "_client/layout/wrapper";
import { useTooltipStore } from "_client/stores/tooltip-store";
import Image from "next/image";
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
                {settings.logo_items?.map((product) => {
                  return (
                    <figure
                      key={product.id}
                      className="relative w-full cursor-pointer opacity-60 grayscale transition-all hfa:opacity-100  hfa:grayscale-0"
                      data-tip={product.title}
                      style={{
                        height: `${settings.height}px`,
                        width: `${product.featured_media.aspect_ratio * settings.height}px`,
                      }}
                    >
                      <Image
                        objectFit="contain"
                        layout="fill"
                        priority
                        src={`${product.featured_media.src}`}
                        alt={product.title}
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
                            <Image
                              objectFit="contain"
                              objectPosition="50% 60%"
                              layout="fill"
                              // width={settings.image.width}
                              // height={settings.image.height}
                              src={`https:${block?.settings?.image?.src}`}
                              alt={block?.settings?.image?.alt}
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
              <div className="ml-12 hidden auto-cols-max grid-flow-col-dense gap-12 md:grid">
                {settings.logo_items?.map((product) => {
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
                      <Image
                        objectFit="contain"
                        layout="fill"
                        priority
                        src={`${product.featured_media.src}`}
                        alt={product.title}
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
                            <Image
                              objectFit="contain"
                              objectPosition="50% 60%"
                              layout="fill"
                              // width={settings.image.width}
                              // height={settings.image.height}
                              src={`https:${block?.settings?.image?.src}`}
                              alt={block?.settings?.image?.alt}
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
