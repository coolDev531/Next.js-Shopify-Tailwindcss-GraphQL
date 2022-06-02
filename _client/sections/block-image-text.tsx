import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";
import { ImageTextSection } from "types/sections";

export const BlockImageText: FC<ImageTextSection> = ({ id, settings, type }) => {
  return (
    <div className="mx-auto max-w-7xl gap-4 px-8 py-16">
      <div className="grid grid-cols-2">
        <section
          className={clsx("max-w-lg px-4", settings.position === "left" ? "order-2" : "text-right")}
        >
          <header>
            <h2>{settings.pre_title}</h2>
            <h1>{settings.title}</h1>
          </header>
          <main dangerouslySetInnerHTML={{ __html: settings.paragraph }} />
        </section>
        <section className="px-4">
          {settings.image && (
            <figure className="aspect-w-8 aspect-h-5 relative">
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
          )}
        </section>
      </div>
    </div>
  );
};
