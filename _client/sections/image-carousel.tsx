import { Image } from "_client/image";
import { Wrapper } from "_client/layout/wrapper";
import { Link } from "_client/link";
import { BlockHeading } from "_client/sections/block-heading";
import clsx from "clsx";
import { useRouter } from "next/router";
import { FC } from "react";
import { ImageCarouselSection } from "types/sections";
import { _Image_liquid, _Media_liquid } from "types/shopify";

export const ImageCarousel: FC<ImageCarouselSection> = ({ id, blocks, settings, type }) => {
  const { position, cta1, cta1_link, cta2, cta2_link, paragraph, pre_title, title } = settings;

  return (
    <Wrapper paddingY="base" maxWidth="xl">
      <BlockHeading
        key={`heading-${id}`}
        settings={{ position, cta1, cta1_link, cta2, cta2_link, paragraph, pre_title, title }}
      />
      <div className="relative left-1/2 -ml-[50vw] w-screen max-w-[100vw]">
        <div
          className="flex transition-all focus-within:animation-pause hfa:animation-pause md:w-fit md:animate-slide"
          style={{
            animationDuration: `${settings.animation_duration}s`,
            animationPlayState: !settings.animate ? "paused" : "running",
          }}
        >
          <ImageCarouselSlider settings={settings} blocks={blocks} />
          <ImageCarouselSlider
            settings={settings}
            blocks={blocks}
            className="-ml-8 !hidden md:!grid"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export const ImageCarouselSlider: FC<
  Omit<ImageCarouselSection, "id" | "type"> & { className?: string }
> = ({ settings, blocks, className }) => {
  const router = useRouter();

  return (
    <div
      className={clsx(
        "scrollbar-none grid flex-1 auto-cols-max grid-flow-col-dense gap-6 overflow-x-scroll px-4 pb-8 transition-all md:overflow-visible md:px-8",
        className
      )}
    >
      {settings?.blog?.articles
        ?.filter((article) => article.url.replace(/\/blogs/gi, "") !== router.asPath.split("?")[0])
        .map((article) => (
          <ImageCarouselItem
            key={`image-${article.id}`}
            href={article.url.replace(/\/blogs/gi, "")}
            image={article.featured_media}
            title={article.title}
          />
        ))}
      {settings?.collection?.products?.map((product) => (
        <ImageCarouselItem
          key={`image-${product.id}`}
          href={product.url}
          image={product.featured_media}
          title={product.title}
        />
      ))}
      {settings?.products?.map((product) => (
        <ImageCarouselItem
          key={`image-${product.id}`}
          href={product.url}
          image={product.featured_media}
          title={product.title}
        />
      ))}
      {blocks.map((block) => {
        if (block.type !== "manual-image") return null;
        return (
          <ImageCarouselItem
            key={`image-${block.id}`}
            href={"#" ?? block.settings.link.replace(/\/blogs/gi, "")}
            image={block.settings.image}
            title={block.settings.title}
          />
        );
      })}
    </div>
  );
};

export const ImageCarouselItem: FC<{
  href: string;
  image: Omit<_Media_liquid, "media_type" | "position" | "preview_image"> | _Image_liquid;
  title: string;
}> = ({ href, image, title }) => {
  return (
    <Link tabIndex={-1} href={href} className="group relative">
      <figure className="relative isolate aspect-1 w-[200px] overflow-hidden rounded shadow-lg transition-shadow group-hfa:shadow">
        {image
          ? <Image
              src={`${image.src}`}
              className="h-full object-cover"
              width={image.width}
              height={image.height}
              alt={image.alt}
              maxWidth={200}
              pixelDensity={1.6}
            />
          : null}
        <div className="absolute inset-x-0 bottom-0 flex h-14 items-center whitespace-nowrap bg-white/70 px-2 font-medium text-slate-900 opacity-0 transition-all group-hfa:opacity-100">
          {title}
        </div>
      </figure>
    </Link>
  );
};
