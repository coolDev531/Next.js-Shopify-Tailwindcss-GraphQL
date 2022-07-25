import { HeroIcon } from "_client/dynamic-hero-icon";
import { Wrapper } from "_client/layout/wrapper";
import { Link } from "_client/link";
import clsx from "clsx";
import { figures } from "listr2";
import { FC } from "react";
import { PricingSection } from ".shopify-cms/types/sections";
import { _Color_liquid } from ".shopify-cms/types/shopify";

function mapAccentColors(settings: {
  color_accent?: _Color_liquid;
  color_accent_contrast?: _Color_liquid;
  color_accent_contrast_dark?: _Color_liquid;
  color_accent_dark?: _Color_liquid;
  color_accent_secondary?: _Color_liquid;
  color_accent_secondary_contrast?: _Color_liquid;
  color_accent_secondary_contrast_dark?: _Color_liquid;
  color_accent_secondary_dark?: _Color_liquid;
}) {
  return {
    ["--color-accent"]: settings.color_accent.rgb,
    ["--color-accent-contrast"]: settings.color_accent_contrast.rgb,
    ["--color-accent-secondary"]: settings.color_accent_secondary.rgb,
    ["--color-accent-secondary-contrast"]: settings.color_accent_secondary_contrast.rgb,
    ["--color-accent-dark"]: settings.color_accent_dark.rgb,
    ["--color-accent-contrast-dark"]: settings.color_accent_contrast_dark.rgb,
    ["--color-accent-secondary-dark"]: settings.color_accent_secondary_dark.rgb,
    ["--color-accent-secondary--contrast-dark"]: settings.color_accent_secondary_contrast_dark.rgb,
  };
}

export const Pricing: FC<PricingSection> = ({ id, settings, blocks, type }) => {
  return (
    <Wrapper maxWidth="xl" paddingY="base" overflowHidden>
      <section className="mb-8">
        <header>
          <h3 className="heading-pre">{settings.pre_title}</h3>
          <h2 className="heading-xl">{settings.title}</h2>
        </header>
      </section>
      <div className="flex auto-cols-fr grid-flow-col flex-col gap-8 lg:grid">
        {blocks.map((block) => {
          return (
            <section
              key={block.id}
              className={clsx(
                "relative rounded-xl border border-gray-200 p-8",
                block.settings.shadow && "shadow-xl",
                block.settings.primary &&
                  "border border-transparent [background:linear-gradient(rgb(var(--color-bg)),rgb(var(--color-bg)))_padding-box,linear-gradient(90deg,#ec6192,#ec4c34,#ffbd2b,#ebde56,#57c754,#53a1eb)_border-box]"
              )}
              style={mapAccentColors(block.settings)}
            >
              {block.settings.primary
                ? <figure className="button-secondary absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full border-0 text-white opacity-100 [background:linear-gradient(155deg,#50e3c2,#0070f3)] hfa:text-gray-100">
                    Most popular
                  </figure>
                : null}
              <header className="pb-8 pt-4">
                <h3 className="heading-xl">{block.settings.title}</h3>
                <div className="heading-md -mt-2 mb-2">{block.settings.price}</div>
                <h4 className="heading-sm text-gray-500">{block.settings.subtitle}</h4>
              </header>
              <hr className="-mx-8 border-t border-b-gray-200" />
              <main className="pt-8">
                <ul className="flex flex-col gap-4">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                    <PricingListItem key={i} feature={block.settings[`feature_${i}`]} />
                  ))}
                </ul>
              </main>
              <footer className="flex justify-center gap-8 pt-8">
                {block.settings.cta2
                  ? <Link href={block.settings.cta2_link} className="button-secondary w-full">
                      {block.settings.cta2}
                    </Link>
                  : null}
                {block.settings.cta1
                  ? <Link href={block.settings.cta1_link} className="button w-full">
                      {block.settings.cta1}
                    </Link>
                  : null}
              </footer>
            </section>
          );
        })}
      </div>
    </Wrapper>
  );
};

const PricingListItem = ({ feature }) => {
  return feature
    ? <li className="paragraph-base grid grid-cols-[24px_1fr] gap-4">
        <HeroIcon name="CheckCircleIcon" className="h-7 w-7 text-accent" />
        {feature}
      </li>
    : null;
};
