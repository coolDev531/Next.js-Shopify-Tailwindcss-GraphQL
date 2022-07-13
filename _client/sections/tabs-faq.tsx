import HeroIcon from "_client/dynamic-hero-icon";
import { Wrapper } from "_client/layout/wrapper";
import { Richtext } from "_client/typography/richtext";
import clsx from "clsx";
import { FC, useState } from "react";
import { TabsFaqSection } from "types/sections";
import { _Product_liquid } from "types/shopify";

export const TabsFaq: FC<TabsFaqSection> = ({ id, settings, blocks, type }) => {
  const [activateTab, setActivateTab] = useState(
    blocks.filter(({ type }) => type === "category")[0]?.id
  );

  return (
    <Wrapper maxWidth="xl" paddingY="base">
      <section className="mb-8">
        <header>
          <h2 className="heading-2xl">{settings.title}</h2>
        </header>
      </section>
      <div className="flex flex-col gap-16">
        {blocks.map((block) => (
          <section
            key={`faq-${block.id}`}
            className="relative flex flex-col md:grid md:grid-cols-[240px_1fr] md:gap-8 lg:grid-cols-[320px_1fr] lg:gap-12"
          >
            <aside className="top-24 self-start md:sticky">
              <h3 className="heading-lg">{block.settings.title}</h3>
            </aside>
            <main className="flex max-w-2xl flex-col gap-8">
              {block.settings.faq_items?.products?.map((product) => (
                <FaqItem key={`content-${block.id}-block-${product.id}`} product={product} />
              ))}
            </main>
          </section>
        ))}
      </div>
    </Wrapper>
  );
};

export const FaqItem: FC<{ product: _Product_liquid }> = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="card p-6 text-left">
      <button
        className="relative block w-full text-left"
        onClick={() => {
          setIsOpen((current) => !current);
        }}
      >
        <h4 className="heading-base mb-0 mr-8">{product.title}</h4>
        <i
          className={clsx(
            "absolute right-0 top-0 h-7 w-7 transition-all",
            isOpen ? "rotate-90" : "rotate-0"
          )}
        >
          <HeroIcon name="ChevronRightIcon" className="h-7 w-7" />
        </i>
      </button>
      <main
        className={clsx("overflow-hidden transition-all", isOpen ? "max-h-[600px]" : "max-h-0")}
      >
        <Richtext className="paragraph-base mt-4">{product.content}</Richtext>
      </main>
    </section>
  );
};
