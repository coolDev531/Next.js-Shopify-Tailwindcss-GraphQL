import { CheckCircleIcon } from "@heroicons/react/solid";
import { Section } from "_client/layout/section";
import { Heading } from "_client/typography/heading";
import { Paragraph } from "_client/typography/paragraph";
import { PreHeading } from "_client/typography/pre-heading";
import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";
import { ImageTextSection } from "types/sections";

export const BlockImageText: FC<ImageTextSection> = ({ id, settings, type }) => {
  return (
    <Section id={id} type={type} padding="base" container="xl">
      <div className="grid grid-cols-2 gap-8">
        <section
          className={clsx(
            "flex max-w-lg flex-col justify-center py-8",
            settings.position === "left" ? "order-2 mr-auto" : "ml-auto text-right"
          )}
        >
          <header>
            <PreHeading>{settings.pre_title}</PreHeading>
            <Heading>{settings.title}</Heading>
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
                    <li
                      key={li}
                      className={clsx(
                        "mb-1 flex",
                        settings.position === "right" && "flex-row-reverse"
                      )}
                    >
                      <span
                        className={clsx(
                          " flex h-6 items-center leading-6 text-sky-500",
                          settings.position === "left" ? "mr-2" : "ml-2"
                        )}
                      >
                        <CheckCircleIcon className="h-5" />
                      </span>
                      <span className="leading-tight text-slate-500">{li}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </main>
        </section>
        {settings.image
          ? <figure className="aspect-w-8 aspect-h-5 relative">
              <Image
                objectFit="cover"
                objectPosition="50% 60%"
                layout="fill"
                // width={settings.image.width}
                // height={settings.image.height}
                src={`https:${settings.image.src}`}
                alt={settings.image.alt}
              />
            </figure>
          : <div />}
      </div>
    </Section>
  );
};
