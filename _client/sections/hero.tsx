import Image from "next/image";
import { HeroSection } from "types/sections/hero";

export function Hero({ id, settings, blocks, type }: HeroSection) {
  return (
    <section className="hero">
      <div className="h-screen">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-8 py-32">
          <section className="max-w-lg px-4">
            <header>
              <h2>{settings.pre_title}</h2>
              <h1>{settings.title}</h1>
            </header>
            <main dangerouslySetInnerHTML={{ __html: settings.paragraph }} />
            <footer dangerouslySetInnerHTML={{ __html: settings.list }} />
          </section>
          <section className="px-4">
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
          </section>
        </div>
      </div>
    </section>
  );
}
