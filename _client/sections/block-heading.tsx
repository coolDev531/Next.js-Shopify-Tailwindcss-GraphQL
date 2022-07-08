import { Button } from "_client/typography/button";
import { Paragraph } from "_client/typography/paragraph";
import clsx from "clsx";
import { FC } from "react";
import { PartialBy } from "types/index";
import { HeadingSection } from "types/sections";

export const BlockHeading: FC<PartialBy<HeadingSection, "type" | "id">> = ({ settings }) => {
  return (
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
      <section
        className={clsx(
          "flex flex-col",
          {
            left: "items-start text-left",
            center: "items-center text-center",
            right: "items-end text-right",
          }[settings.position]
        )}
      >
        <header className="max-w-2xl">
          <h3 className="heading-pre">{settings.pre_title}</h3>
          <h2 className="heading-xl">{settings.title}</h2>
        </header>
        <main className="max-w-prose">
          <Paragraph size="lg">{settings.paragraph}</Paragraph>
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
  );
};
