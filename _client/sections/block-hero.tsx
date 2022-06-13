import { CheckCircleIcon } from "@heroicons/react/solid";
import { Breadcrumbs } from "_client/layout/breadcrumbs";
import { Section } from "_client/layout/section";
import { Heading } from "_client/typography/heading";
import { Paragraph } from "_client/typography/paragraph";
import { PreHeading } from "_client/typography/pre-heading";
import Image from "next/image";
import { FC } from "react";
import { HeroSection } from "types/sections";

export const BlockHero: FC<HeroSection> = ({ id, settings, type }) => {
  return (
    <Section id={id} type={type} container="xl" padding="base">
      <div className="mx-auto -mt-4 max-w-lg">
        <figure className="relative mx-4 mb-8 aspect-1 lg:hidden">
          <Image
            objectFit="contain"
            objectPosition="50% 60%"
            layout="fill"
            // width={settings.image.width}
            // height={settings.image.height}
            src={`https:${settings.image.src}`}
            alt={settings.image.alt}
          />
        </figure>
      </div>
      <Breadcrumbs />
      <div className="grid-cols-2 gap-8 lg:grid">
        <section className="my-8 lg:pr-10">
          <header>
            <PreHeading heading="h2">{settings.pre_title}</PreHeading>
            <Heading heading="h1">{settings.title}</Heading>
          </header>
          <main>
            <Paragraph>{settings.paragraph}</Paragraph>
            <div className="mt-8">
              <h3 className="mb-1 font-semibold text-slate-700">{settings.list_title}</h3>
              <ul>
                {settings.list
                  .replace(/<\/p>/gi, "")
                  .split("<p>")
                  .filter((li) => li.length > 0)
                  .map((li) => (
                    <li key={li} className="mb-0.5 flex">
                      <span className="mr-2 flex h-6 items-center leading-6 text-sky-500 ">
                        <CheckCircleIcon className="h-5" />
                      </span>
                      <span className="leading-tight">{li}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </main>
          <footer></footer>
        </section>
        <section className="hidden px-4 lg:block">
          {settings.image && (
            <figure className="relative h-full">
              <Image
                objectFit="contain"
                objectPosition="50% 60%"
                layout="fill"
                // width={settings.image.width}
                // height={settings.image.height}
                src={`https:${settings.image.src}`}
                alt={settings.image.alt}
              />
            </figure>
          )}
        </section>
      </div>
    </Section>
  );
};
