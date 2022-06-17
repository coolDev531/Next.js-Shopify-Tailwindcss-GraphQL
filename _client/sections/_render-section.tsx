import { BlockBlockquote } from "_client/sections/block-blockquote";
import { BlockHeading } from "_client/sections/block-heading";
import { BlockHero } from "_client/sections/block-hero";
import { BlockImageText } from "_client/sections/block-image-text";
import { FeatureCarousel } from "_client/sections/feature-carousel";
import { FeatureList } from "_client/sections/feature-list";
import { ImageCarousel } from "_client/sections/image-carousel";
import { ImageGallery } from "_client/sections/image-gallery";
import { InfoCards } from "_client/sections/info-cards";
import { LogoBanner } from "_client/sections/logo-banner";
import { SpecList } from "_client/sections/spec-list";
import { StatsGraph } from "_client/sections/stats-graph";
import { Story } from "_client/sections/story";
import { TabsFaq } from "_client/sections/tabs-faq";
import { TabsImageCard } from "_client/sections/tabs-image-card";
import { TabsProcessStep } from "_client/sections/tabs-process-step";
import { TeamList } from "_client/sections/team-list";
import { TestimonialList } from "_client/sections/testimonial-list";
import { Sections } from "types/sections";

export const renderSection = (section: Sections) => {
  switch (section.type) {
    case "test":
      return (
        <section key={section.id} className={section.type} id={section.id}>
          <div>Section to be developed: {section.type}</div>
        </section>
      );
    case "team-list":
      return (
        <section key={section.id} className={section.type} id={section.id}>
          <TeamList {...section} />
        </section>
      );
    case "testimonial-list":
      return (
        <section key={section.id} className={section.type} id={section.id}>
          <TestimonialList {...section} />
        </section>
      );
    case "tabs-faq":
      return (
        <section key={section.id} className={section.type} id={section.id}>
          <TabsFaq {...section} />
        </section>
      );
    case "tabs-process-step":
      return (
        <section key={section.id} className={section.type} id={section.id}>
          <TabsProcessStep {...section} />
        </section>
      );
    case "image-carousel":
      return (
        <section key={section.id} className={section.type} id={section.id}>
          <ImageCarousel {...section} />
        </section>
      );
    case "feature-carousel":
      return (
        <section key={section.id} className={section.type} id={section.id}>
          <FeatureCarousel {...section} />
        </section>
      );
    case "feature-list":
      return (
        <section key={section.id} className={section.type} id={section.id}>
          <FeatureList {...section} />
        </section>
      );
    case "image-gallery":
      return (
        <section key={section.id} className={section.type} id={section.id}>
          <ImageGallery {...section} />
        </section>
      );
    case "blockquote":
      return (
        <section key={section.id} className={section.type} id={section.id}>
          <BlockBlockquote {...section} />
        </section>
      );
    case "spec-list":
      return (
        <section key={section.id} className={section.type} id={section.id}>
          <SpecList {...section} />
        </section>
      );
    case "tabs-image-card":
      return <TabsImageCard key={section.id} {...section} />;
    case "logo-banner":
      return <LogoBanner key={section.id} {...section} />;
    case "info-cards":
      return <InfoCards key={section.id} {...section} />;
    case "footer":
      return (
        <section key={section.id} className={section.type} id={section.id}>
          <div>Section to be developed: {section.type}</div>
        </section>
      );
    case "header":
      return (
        <section key={section.id} className={section.type} id={section.id}>
          <div>Section to be developed: {section.type}</div>
        </section>
      );
    case "heading":
      return <BlockHeading key={section.id} {...section} />;
    case "hero":
      return <BlockHero key={section.id} {...section} />;

    case "image-text":
      return <BlockImageText key={section.id} {...section} />;
    case "stats-graph":
      return <StatsGraph key={section.id} {...section} />;
    case "story":
      return (
        <section key={section.id} className={section.type} id={section.id}>
          <Story {...section} />
        </section>
      );
    case "template-404":
      return (
        <section key={section.id} className={section.type} id={section.id}>
          <div>Section to be developed: {section.type}</div>
        </section>
      );
    case "template-article":
      return (
        <section key={section.id} className={section.type} id={section.id}>
          <div>Section to be developed: {section.type}</div>
        </section>
      );
    case "template-blog":
      return (
        <section key={section.id} className={section.type} id={section.id}>
          <div>Section to be developed: {section.type}</div>
        </section>
      );
    case "template-cart":
      return (
        <section key={section.id} className={section.type} id={section.id}>
          <div>Section to be developed: {section.type}</div>
        </section>
      );
    case "collection":
      return (
        <section key={section.id} className={section.type} id={section.id}>
          <div>Section to be developed: {section.type}</div>
        </section>
      );
    case "template-list-collections":
      return (
        <section key={section.id} className={section.type} id={section.id}>
          <div>Section to be developed: {section.type}</div>
        </section>
      );
    case "template-page":
      return (
        <section key={section.id} className={section.type} id={section.id}>
          <div>Section to be developed: {section.type}</div>
        </section>
      );
    case "template-password":
      return (
        <section key={section.id} className={section.type} id={section.id}>
          <div>Section to be developed: {section.type}</div>
        </section>
      );
    case "template-product":
      return (
        <section key={section.id} className={section.type} id={section.id}>
          <div>Section to be developed: {section.type}</div>
        </section>
      );
    case "template-search":
      return (
        <section key={section.id} className={section.type} id={section.id}>
          <div>Section to be developed: {section.type}</div>
        </section>
      );
  }
};
