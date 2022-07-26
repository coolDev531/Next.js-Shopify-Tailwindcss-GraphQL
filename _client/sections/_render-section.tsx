import { Background } from "_client/sections/background";
import { BlockBlockquote } from "_client/sections/block-blockquote";
import { Hero } from "_client/sections/hero";
import { BlockImageText } from "_client/sections/block-image-text";
import { Contact } from "_client/sections/contact/contact";
import { FeatureCarousel } from "_client/sections/feature-carousel";
import { FeatureList } from "_client/sections/feature-list";
import { Footer } from "_client/sections/footer";
import { Header } from "_client/sections/header/header";
import { SectionHeading } from "_client/sections/heading";
import { HeroWithFeatures } from "_client/sections/hero-with-features";
import { ImageCarousel } from "_client/sections/image-carousel";
import { ImageGallery } from "_client/sections/image-gallery";
import { InfoCards } from "_client/sections/info-cards";
import { LogoBanner } from "_client/sections/logo-banner";
import { Pricing } from "_client/sections/pricing";
import { SpecList } from "_client/sections/spec-list";
import { StatsGraph } from "_client/sections/stats-graph";
import { Story } from "_client/sections/story";
import { TabsFaq } from "_client/sections/tabs-faq";
import { TabsImageCard } from "_client/sections/tabs-image-card";
import { TabsProcessStep } from "_client/sections/tabs-process-step";
import { TeamList } from "_client/sections/team-list";
import { TestimonialList } from "_client/sections/testimonial-list";
import { Sections } from ".shopify-cms/types/sections";

export const renderSection = (section: Sections) => {
  switch (section.type) {
    case "pricing":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}>
          <Pricing {...section} />
        </section>
      );
    case "page-settings":
      return null;
    case "contact":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}>
          <Contact {...section} />
        </section>
      );
    case "hero-with-features":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}>
          <HeroWithFeatures {...section} />
        </section>
      );
    case "background":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}>
          <Background {...section} />
        </section>
      );
    case "test":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}>
          <div>Section to be developed: {section.type}</div>
        </section>
      );
    case "team-list":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}>
          <TeamList {...section} />
        </section>
      );
    case "testimonial-list":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}>
          <TestimonialList {...section} />
        </section>
      );
    case "tabs-faq":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}>
          <TabsFaq {...section} />
        </section>
      );
    case "tabs-process-step":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}>
          <TabsProcessStep {...section} />
        </section>
      );
    case "image-carousel":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}>
          <ImageCarousel {...section} />
        </section>
      );
    case "feature-carousel":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}>
          <FeatureCarousel key={section.id} {...section} />
        </section>
      );
    case "feature-list":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}>
          <FeatureList {...section} />
        </section>
      );
    case "image-gallery":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}>
          <ImageGallery key={section.id} {...section} />
        </section>
      );
    case "blockquote":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}>
          <BlockBlockquote key={section.id} {...section} />
        </section>
      );
    case "spec-list":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}>
          <SpecList key={section.id} {...section} />
        </section>
      );
    case "tabs-image-card":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}>
          <TabsImageCard key={section.id} {...section} />
        </section>
      );
    case "logo-banner":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}>
          <LogoBanner key={section.id} {...section} />
        </section>
      );
    case "info-cards":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}>
          <InfoCards key={section.id} {...section} />
        </section>
      );
    case "footer":
      return (
        <footer key={section.id} className={section.type} id={`section--${section.id}`}>
          <Footer key={section.id} {...section} />
        </footer>
      );
    case "header":
      return (
        <header key={section.id} className={section.type} id={`section--${section.id}`}>
          <Header key={section.id} {...section} />
        </header>
      );
    case "heading":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}>
          <SectionHeading key={section.id} {...section} />
        </section>
      );
    case "hero":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}>
          <Hero key={section.id} {...section} />
        </section>
      );
    case "image-text":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}>
          <BlockImageText key={section.id} {...section} />
        </section>
      );
    case "stats-graph":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}>
          <StatsGraph key={section.id} {...section} />
        </section>
      );
    case "story":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}>
          <Story key={section.id} {...section} />
        </section>
      );
    case "template-404":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}></section>
      );
    case "template-article":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}></section>
      );
    case "template-blog":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}></section>
      );
    case "template-cart":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}></section>
      );
    case "template-collection":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}></section>
      );
    case "template-list-collections":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}></section>
      );
    case "template-page":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}></section>
      );
    case "template-password":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}></section>
      );
    case "template-product":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}></section>
      );
    case "template-search":
      return (
        <section key={section.id} className={section.type} id={`section--${section.id}`}></section>
      );
  }
};
