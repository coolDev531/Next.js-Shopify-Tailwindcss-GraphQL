import Image from "next/image";
import { HeroSection } from "types/sections/hero";

export function Hero({ id, settings, blocks, type }: HeroSection) {
  return (
    <section className="hero">
      <div className="h-screen">
        <div className="mx-auto flex max-w-7xl px-8 py-32">
          <section className="max-w-lg">
            <header>
              <h2>{settings.pre_title}</h2>
              <h1>{settings.title}</h1>
            </header>
            <main dangerouslySetInnerHTML={{ __html: settings.paragraph }} />
            <footer dangerouslySetInnerHTML={{ __html: settings.list }} />
          </section>
          <figure>{/*<Image src={`https:${settings.image}`} alt={settings.image} />*/}</figure>
        </div>
      </div>
    </section>
  );
}
