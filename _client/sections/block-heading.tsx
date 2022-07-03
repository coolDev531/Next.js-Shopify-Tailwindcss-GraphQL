import { Section } from "_client/layout/section";
import { Button } from "_client/typography/button";
import { RichText } from "_client/typography/rich-text";
import clsx from "clsx";
import { FC } from "react";
import { HeadingSection } from "types/sections";

export const BlockHeading: FC<PartialBy<HeadingSection, "type" | "id"> & { section?: boolean }> = ({
  id,
  settings,
  type,
  section = true,
}) => {
  return (
    <Section id={id} type={type} padding="base" container="xl" section={section}>
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
            <h3 className="pre-heading">{settings.pre_title}</h3>
            <h2 className="heading-xl">{settings.title}</h2>
          </header>
          <main className="max-w-prose">
            <RichText className="paragraph-lg">{settings.paragraph}</RichText>
          </main>
          <footer
            className={clsx(
              {
                left: "justify-start text-left",
                center: "justify-center text-center",
                right: "justify-end text-right",
              }[settings.position],
              ((settings.cta1 && settings.cta1_link) || (settings.cta2 && settings.cta2_link)) &&
                "mt-8 flex flex-wrap gap-4"
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
