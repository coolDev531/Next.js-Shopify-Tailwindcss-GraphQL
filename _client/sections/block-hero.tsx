import { CheckCircleIcon } from "@heroicons/react/solid";
import { Breadcrumbs } from "_client/layout/breadcrumbs";
import { Section } from "_client/layout/section";
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
        <section className="my-8">
          <header>
            <h2 className="mb-2 font-semibold text-sky-500 xl:text-lg">{settings.pre_title}</h2>
            <h1 className="mb-3 text-3xl font-bold text-slate-900 lg:mb-4 lg:text-5xl xl:text-6xl">
              {settings.title}
            </h1>
          </header>
          <main>
            <div
              className="mb-12 max-w-md leading-relaxed tracking-tight text-slate-500 xl:max-w-lg xl:text-lg"
              dangerouslySetInnerHTML={{ __html: settings.paragraph }}
            />
            <div>
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
