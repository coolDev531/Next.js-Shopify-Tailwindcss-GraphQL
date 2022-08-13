import { Image } from "_client/image";
import { Wrapper } from "_client/layout/wrapper";
import { Link } from "_client/link";
import { BlockHeading } from "_client/sections/block-heading";
import { FC } from "react";
import { TestimonialListSection } from ".shopify-cms/types/sections";
import { _Metafield_liquid_file_reference_force_image } from ".shopify-cms/types/shopify";

export const TestimonialList: FC<TestimonialListSection> = ({ id, blocks, settings, type }) => {
  const { products, ...heading } = settings;

  return (
    <Wrapper
      maxWidth="xl"
      overflowHidden
      spacing={settings.spacing}
      spacingTop={settings.spacing_top}
      spacingBottom={settings.spacing_bottom}
    >
      <BlockHeading settings={heading} />
      <div className="mt-4 flex grid-cols-2 flex-col gap-8 sm:grid">
        {products?.map((product) => {
          const logo = product.metafields.logo;
          const logoDark = product.metafields.logo_dark;
          const testimonial = product.metafields.testimonial;
          const author = product.metafields.contact_person;
          const jobTitle = product.metafields.job_title;

          return (
            <TestimonialListItem
              key={product.id}
              id={id}
              blockId={product.id}
              link={product.url}
              imageAlt={product.title}
              logo={logo}
              logoDark={logoDark}
              testimonial={testimonial}
              author={author}
              jobTitle={jobTitle}
              with_link={settings.with_link}
            />
          );
        })}
        {blocks.map((block) => (
          <TestimonialListItem
            key={block.id}
            id={id}
            blockId={block.id}
            link={block.settings.link}
            logo={block.settings.image}
            imageAlt={block.settings.image?.alt || block.settings.author}
            logoDark={undefined}
            testimonial={block.settings.quote}
            author={block.settings.author}
            jobTitle={block.settings.job_title}
            with_link={settings.with_link}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export const TestimonialListItem = ({
  id,
  blockId,
  link,
  logo,
  logoDark,
  testimonial,
  author,
  jobTitle,
  imageAlt,
  with_link,
}) => {
  return (
    <Link
      id={blockId ? `block--${blockId}` : null}
      href={with_link ? link : undefined}
      key={`testimonial-${id}-${blockId}`}
      className="mb-auto min-w-[220px] select-none rounded-md border border-gray-200 bg-white p-6 transition-[border-color] hfa:border-gray-400/60 dark:border-gray-700/80 dark:bg-dark-card dark:hfa:border-gray-500/80"
    >
      <header>
        <figure className="relative h-10 grayscale-0">
          {logo && logoDark
            ? <>
                <Image
                  src={`${logo?.src}`}
                  className="h-full w-auto object-contain dark:hidden"
                  maxHeight={200}
                  width={logo?.width}
                  height={logo?.height}
                  alt={logo?.alt || imageAlt}
                />
                <Image
                  src={`${logoDark?.src}`}
                  className="hidden h-full w-auto object-contain dark:block"
                  maxHeight={200}
                  width={logoDark?.width}
                  height={logoDark?.height}
                  alt={logoDark?.alt || imageAlt}
                />
              </>
            : logo
            ? <Image
                src={`${logo?.src}`}
                className="h-full w-auto object-contain"
                maxHeight={200}
                width={logo?.width}
                height={logo?.height}
                alt={logo?.alt || imageAlt}
              />
            : null}
        </figure>
      </header>
      <blockquote className="mt-2 dark:text-gray-100">{testimonial}</blockquote>
      <footer className="mt-4 flex items-center gap-2">
        <figure className="relative flex aspect-1 h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-accent/50 text-[13px] font-medium text-white">
          {author?.match(/(\w+[^\w]*)/gi).map((match) => {
            return match.charAt(0).toUpperCase();
          })}
        </figure>
        <div className="flex items-center gap-1 text-[15px] dark:text-gray-300">
          <div className="font-semibold dark:text-gray-100">{author},</div>
          <div className="text-gray-500 dark:text-gray-400">{jobTitle}</div>
        </div>
      </footer>
    </Link>
  );
};
