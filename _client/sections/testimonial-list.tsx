import { Image } from "_client/image";
import { Wrapper } from "_client/layout/wrapper";
import { Link } from "_client/link";
import { BlockHeading } from "_client/sections/block-heading";
import { FC } from "react";
import { TestimonialListSection } from "types/sections";
import { _Metafield_liquid_file_reference_force_image } from "types/shopify";

export const TestimonialList: FC<TestimonialListSection> = ({ id, blocks, settings, type }) => {
  const { products, ...heading } = settings;

  return (
    <Wrapper maxWidth="xl" paddingY="base">
      <BlockHeading settings={heading} />
      <div className="mt-4 grid grid-cols-2 gap-8">
        {products?.map((product) => {
          const logo = product.metafields.find(
            ({ key }) => key === "logo"
          ) as _Metafield_liquid_file_reference_force_image;
          const logoDark = product.metafields.find(
            ({ key }) => key === "logo_dark"
          ) as _Metafield_liquid_file_reference_force_image;
          const testimonial = product.metafields.find(({ key }) => key === "testimonial")
            ?.value as string;
          const author = product.metafields.find(({ key }) => key === "contact_person")
            ?.value as string;
          const jobTitle = product.metafields.find(({ key }) => key === "job_title")
            ?.value as string;

          return (
            <TestimonialListItem
              key={product.id}
              id={id}
              blockId={product.id}
              link={product.url}
              logo={logo}
              logoDark={logoDark}
              testimonial={testimonial}
              author={author}
              jobTitle={jobTitle}
            />
          );
        })}
        {blocks.map((block) => {
          if (block.type !== "testimonial") return null;

          return (
            <TestimonialListItem
              key={block.id}
              id={id}
              blockId={block.id}
              link={block.settings.link}
              logo={block.settings.image}
              logoDark={undefined}
              testimonial={block.settings.quote}
              author={block.settings.author}
              jobTitle={block.settings.job_title}
            />
          );
        })}
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
}) => {
  return (
    <Link
      href={link}
      key={`testimonial-${id}-${blockId}`}
      className="min-w-[220px] select-none rounded-md border border-gray-200 bg-white p-6 transition-all hfa:border-gray-400/60 dark:border-gray-700/80 dark:bg-dark-card dark:hfa:border-gray-500/80"
    >
      <header>
        <figure className="relative h-10 grayscale-0">
          {logo && logoDark
            ? <>
                <Image
                  src={`${logo?.value.src}`}
                  className="h-full w-auto object-contain dark:hidden"
                  maxHeight={200}
                  width={logo?.value.width}
                  height={logo?.value.height}
                  alt={logo?.value.alt}
                />
                <Image
                  src={`${logoDark?.value.src}`}
                  className="hidden h-full w-auto object-contain dark:block"
                  maxHeight={200}
                  width={logoDark?.value.width}
                  height={logoDark?.value.height}
                  alt={logoDark?.value.alt}
                />
              </>
            : logo
            ? <Image
                src={`${logo?.value.src}`}
                className="h-full w-auto object-contain"
                maxHeight={200}
                width={logo?.value.width}
                height={logo?.value.height}
                alt={logo?.value.alt}
              />
            : null}
        </figure>
      </header>
      <blockquote className="mt-2 dark:text-gray-100">{testimonial}</blockquote>
      <footer className="mt-3 flex items-center gap-2">
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
