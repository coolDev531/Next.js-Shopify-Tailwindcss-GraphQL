import img2 from "/public/images/bg-gradient-darkpng.png";
import img1 from "/public/images/bg-gradient-light.jpg";
import { Image } from "_client/image";
import { Wrapper } from "_client/layout/wrapper";
import { motion, useInView } from "framer-motion";
import { FC, useRef } from "react";
import { ImageGallerySection } from "types/sections";

export const ImageGallery: FC<ImageGallerySection> = ({ id, type, settings }) => {
  const galleryRef = useRef();
  const inView = useInView(galleryRef, { amount: "some", once: true });

  return (
    <Wrapper maxWidth="fullscreen" paddingY="base">
      <div className="relative -mx-8 flex justify-center overflow-hidden" ref={galleryRef}>
        <figure className="absolute left-1/2 top-16 bottom-16 -z-20 -ml-[50vw] w-screen overflow-hidden bg-top bg-no-repeat">
          <Image
            src={img1}
            width={img1.width}
            height={img1.height}
            alt="background image"
            className="absolute bottom-0 top-0 left-1/2 block h-full min-w-[123.25rem] -translate-x-1/2 dark:hidden"
          />
          <Image
            src={img2}
            width={img2.width}
            height={img2.height}
            alt="background image"
            className="absolute bottom-0 top-0 left-1/2 hidden h-full min-w-[123.25rem] -translate-x-1/2 opacity-60 dark:block"
          />
        </figure>
        <figure className="absolute left-1/2 top-16 bottom-16 -z-10 -ml-[50vw] h-full w-screen bg-grid-gray-900/[0.04] [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-gray-100/[0.05]" />
        <section className="mx-auto w-[80rem] min-w-[80rem] [mask-image:linear-gradient(0deg,transparent_0%,white_45%)]">
          <div className="relative flex items-end gap-8 px-8">
            {/*= =============== Image 1 ================ */}
            <motion.figure
              className="group flex aspect-[1.02118] w-[944px] select-none overflow-hidden rounded shadow-2xl"
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              {settings.image1
                ? <Image
                    className="h-full bg-center object-cover"
                    src={`${settings?.image1?.src}`}
                    width={settings?.image1?.width}
                    height={settings?.image1?.height}
                    alt={settings?.image1?.alt}
                    maxWidth={300}
                  />
                : <Image
                    className="h-full bg-center object-cover"
                    src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-1.png?format=webp"
                    width={1000}
                    height={1000}
                    alt="Placeholder Image"
                  />}
              {settings.title1
                ? <figcaption className="absolute inset-x-0 bottom-0 bg-white/70 px-3 py-3 text-sm font-medium text-slate-500 opacity-0 transition-all group-hfa:opacity-100">
                    {settings.title1}
                  </figcaption>
                : null}
            </motion.figure>
            {/*= =============== Image 2 ================ */}
            <motion.figure
              className="group relative flex aspect-[2.13962] w-[2268px] select-none overflow-hidden rounded shadow-2xl"
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {settings.image2
                ? <Image
                    className="h-full bg-center object-cover"
                    src={`${settings?.image2?.src}`}
                    width={settings?.image2?.width}
                    height={settings?.image2?.height}
                    alt={settings?.image2?.alt}
                    maxWidth={600}
                  />
                : <Image
                    className="h-full bg-center object-cover"
                    src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-lifestyle-2.png?format=webp"
                    width={1000}
                    height={1000}
                    alt="Placeholder Image"
                  />}
              {settings.title2
                ? <figcaption className="absolute inset-x-0 bottom-0 bg-white/70 px-3 py-3 text-sm font-medium text-slate-500 opacity-0 transition-all group-hfa:opacity-100">
                    {settings.title2}
                  </figcaption>
                : null}
            </motion.figure>
            {/*= =============== Image 3 ================ */}
            <motion.figure
              className="group relative flex aspect-[1.41284] w-[1232px] select-none overflow-hidden rounded shadow-2xl"
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {settings.image3
                ? <Image
                    className="h-full bg-center object-cover"
                    src={`${settings?.image3?.src}`}
                    width={settings?.image3?.width}
                    height={settings?.image3?.height}
                    alt={settings?.image3?.alt}
                    maxWidth={350}
                  />
                : <Image
                    className="h-full bg-center object-cover"
                    src="https:///cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-collection-5.png?format=webp"
                    width={1000}
                    height={1000}
                    alt="Placeholder Image"
                  />}
              {settings.title3
                ? <figcaption className="absolute inset-x-0 bottom-0 bg-white/70 px-3 py-3 text-sm font-medium text-slate-500 opacity-0 transition-all group-hfa:opacity-100">
                    {settings.title3}
                  </figcaption>
                : null}
            </motion.figure>
          </div>
          <div className="relative mt-8 flex items-start gap-8">
            {/*= =============== Image 4 ================ */}
            <motion.figure
              className="group relative flex aspect-[1.22279] w-[1888px] select-none overflow-hidden rounded shadow-2xl"
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {settings.image4
                ? <Image
                    className="h-full bg-center object-cover"
                    src={`${settings?.image4?.src}`}
                    width={settings?.image4?.width}
                    height={settings?.image4?.height}
                    alt={settings?.image4?.alt}
                    maxWidth={520}
                  />
                : <Image
                    className="h-full bg-center object-cover"
                    src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-collection-6.png?format=webp"
                    width={1000}
                    height={1000}
                    alt="Placeholder Image"
                  />}
              {settings.title4
                ? <figcaption className="absolute inset-x-0 bottom-0 bg-white/70 px-3 py-3 text-sm font-medium text-slate-500 opacity-0 transition-all group-hfa:opacity-100">
                    {settings.title4}
                  </figcaption>
                : null}
            </motion.figure>
            {/*= =============== Image 5 ================ */}
            <motion.figure
              className="group relative flex aspect-[1.90086] w-[1764px] select-none overflow-hidden rounded shadow-2xl"
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {settings.image5
                ? <Image
                    className="h-full bg-center object-cover"
                    src={`${settings?.image5?.src}`}
                    width={settings?.image5?.width}
                    height={settings?.image5?.height}
                    alt={settings?.image5?.alt}
                    maxWidth={500}
                  />
                : <Image
                    className="h-full bg-center object-cover"
                    src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-lifestyle-1.png?format=webp"
                    width={1000}
                    height={1000}
                    alt="Placeholder Image"
                  />}
              {settings.title5
                ? <figcaption className="absolute inset-x-0 bottom-0 bg-white/70 px-3 py-3 text-sm font-medium text-slate-500 opacity-0 transition-all group-hfa:opacity-100">
                    {settings.title6}
                  </figcaption>
                : null}
            </motion.figure>
            {/*= =============== Image 6 ================ */}
            <motion.figure
              className="group relative flex aspect-[0.86301] w-[1008px] select-none overflow-hidden rounded shadow-2xl"
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              {settings.image6
                ? <Image
                    className="h-full bg-center object-cover"
                    src={`${settings?.image6?.src}`}
                    width={settings?.image6?.width}
                    height={settings?.image6?.height}
                    alt={settings?.image6?.alt}
                    maxWidth={290}
                  />
                : <Image
                    className="h-full bg-center object-cover"
                    src="https:///cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-collection-1.png?format=webp"
                    width={1000}
                    height={1000}
                    alt="Placeholder Image"
                  />}
              {settings.title6
                ? <figcaption className="absolute inset-x-0 bottom-0 bg-white/70 px-3 py-3 text-sm font-medium text-slate-500 opacity-0 transition-all group-hfa:opacity-100">
                    {settings.title6}
                  </figcaption>
                : null}
            </motion.figure>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

/*
export const ImageGallery: FC<ImageGallerySection> = ({ id, blocks, type }) => {
  return (
    <Section id={id} type={type} container="xl" padding="base">
      <div className="mx-auto grid max-w-6xl grid-cols-12 gap-3 px-8 py-16">
        {blocks.map((block) => {
          switch (block.type) {
            case "image": {
              return (
                <figure
                  key={block.id}
                  className="group relative h-[240px] overflow-hidden rounded shadow-2xl"
                  style={{ gridColumn: `span ${block.settings.columns}` }}
                >
                  {block.settings.image
                    ? <Image
                        src={`${block?.settings?.image?.src}`}
                        layout="fill"
                        objectFit="cover"
                        alt={block?.settings?.image?.alt}
                      />
                    : null}
                  {block.settings.hover_effect && (
                    <figcaption
                      className="absolute inset-0 h-full w-full p-8 opacity-0 transition-opacity group-hfa:opacity-100"
                      style={{ background: block.settings.color_overlay }}
                    >
                      <section style={{ color: block.settings.color_text.hex }}>
                        <header>
                          <h1>{block.settings.title}</h1>
                        </header>
                        <main dangerouslySetInnerHTML={{ __html: block.settings.paragraph }} />
                      </section>
                    </figcaption>
                  )}
                </figure>
              );
            }
          }
        })}
      </div>
    </Section>
  );
};
*/
