import { Section } from "_client/layout/section";
import { Link } from "_client/link";
import { Button } from "_client/typography/button";
import { Heading } from "_client/typography/heading";
import { Paragraph } from "_client/typography/paragraph";
import { PreHeading } from "_client/typography/pre-heading";
import clsx from "clsx";
import { FC } from "react";
import { HeadingSection } from "types/sections";

export const BlockHeading: FC<HeadingSection> = ({ id, settings, type }) => {
  return (
    <Section id={id} type={type} padding="base" container="xl">
      <div
        className={clsx(
          "flex",
          {
            left: "justify-start text-left",
            center: "justify-center text-center",
            right: "justify-end text-right",
          }[settings.position]
        )}
      >
        <section>
          <header className="max-w-2xl">
            <PreHeading>{settings.pre_title}</PreHeading>
            <Heading>{settings.title}</Heading>
          </header>
          <main className="max-w-prose">
            <Paragraph size="xl">{settings.paragraph}</Paragraph>
          </main>
          <footer
            className={clsx(
              {
                left: "justify-start text-left",
                center: "justify-center text-center",
                right: "justify-end text-right",
              }[settings.position],
              ((settings.cta1 && settings.cta1_link) || (settings.cta2 && settings.cta2_link)) &&
                "mt-8 flex gap-4"
            )}
          >
            {settings.cta1 && settings.cta1_link && (
              <Button href={settings.cta1_link}>{settings.cta1}</Button>
            )}
            {settings.cta2 && settings.cta2_link && (
              <Button href={settings.cta2_link} secondary>
                {settings.cta2}
              </Button>
            )}
          </footer>
        </section>
      </div>
    </Section>
  );
};

export default BlockHeading;
