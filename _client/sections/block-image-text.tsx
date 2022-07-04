import { CheckCircleIcon } from "@heroicons/react/solid";
import { Image } from "_client/image";
import { Wrapper } from "_client/layout/wrapper";
import { Heading } from "_client/typography/heading";
import { Paragraph } from "_client/typography/paragraph";
import clsx from "clsx";
import { FC } from "react";
import { ImageTextSection } from "types/sections";

export const BlockImageText: FC<ImageTextSection & { section?: boolean }> = ({ settings }) => {
  return (
    <Wrapper paddingY="none" maxWidth="xl">
      <div className="flex grid-cols-2 flex-col-reverse gap-8 md:grid">
        {/*= =============== Text Content ================ */}
        <section
          className={clsx(
            "flex max-w-lg flex-col justify-center py-8",
            settings.position === "left" && "md:order-2"
          )}
        >
          <header>
            <Heading as="h3" size="pre">
              {settings.pre_title}
            </Heading>
            <Heading as="h2" size="xl">
              {settings.title}
            </Heading>
          </header>
          <main>
            <Paragraph>{settings.paragraph}</Paragraph>
            <div className="mt-8">
              <h3 className="mb-1 font-semibold text-slate-700">{settings.list_title}</h3>
              <ul>
                {settings?.list
                  .replace(/<\/p>/gi, "")
                  .split("<p>")
                  .filter((li) => li.length > 0)
                  .map((li) => (
                    <li key={li} className="mb-1 flex">
                      <span className="mr-2 flex h-6 items-center leading-6 text-sky-500">
                        <CheckCircleIcon className="h-5" />
                      </span>
                      <span className="leading-tight text-slate-500 dark:text-slate-400">{li}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </main>
        </section>
        {/*= =============== Image Content ================ */}
        {settings.image
          ? <div className={clsx("flex", !settings.fit_height && "items-center")}>
              <figure
                className={clsx(
                  "relative flex-1 overflow-hidden rounded-lg",
                  {
                    auto: "md:aspect-w-none md:aspect-h-none md:h-full",
                    "9-16": "md:aspect-w-9 md:aspect-h-16",
                    "1-1": "md:aspect-w-1 md:aspect-h-1",
                    "4-3": "md:aspect-w-4 md:aspect-h-3",
                    "3-2": "md:aspect-w-3 md:aspect-h-2",
                    "16-9": "md:aspect-w-16 md:aspect-h-9",
                    "21-9": "md:aspect-w-[21] md:aspect-h-9",
                  }[settings.aspect_desktop],
                  {
                    hidden: "aspect-w-none aspect-h-none",
                    "9-16": "aspect-w-9 aspect-h-16",
                    "1-1": "aspect-w-1 aspect-h-1",
                    "4-3": "aspect-w-4 aspect-h-3",
                    "3-2": "aspect-w-3 aspect-h-2",
                    "16-9": "aspect-w-16 aspect-h-9",
                    "21-9": "aspect-w-[21] aspect-h-9",
                  }[settings.aspect_mobile]
                )}
              >
                <Image
                  priority
                  className="h-full object-cover"
                  width={settings.image.width}
                  height={settings.image.height}
                  src={`${settings?.image?.src}`}
                  alt={settings?.image?.alt}
                  maxWidth={512}
                />
              </figure>
            </div>
          : <div />}
      </div>
    </Wrapper>
  );
};
