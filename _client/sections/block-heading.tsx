import { Link } from "_client/link";
import { Richtext } from "_client/typography/richtext";
import clsx from "clsx";
import { FC } from "react";
import { PartialBy } from "types/index";

import { HeadingSection } from ".shopify-cms/types/sections";

export const BlockHeading: FC<PartialBy<HeadingSection, "type" | "id">> = ({ id, settings }) => {
  return (
    <div
      id={`block--${id}`}
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
          <h2 className="heading-pre">{settings.pre_title}</h2>
          <h3 className="heading-xl">{settings.title}</h3>
        </header>
        <main className="max-w-prose">
          <Richtext className="paragraph-lg">{settings.paragraph}</Richtext>
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
            <Link className="button" href={settings.cta1_link}>
              {settings.cta1}
            </Link>
          )}
          {settings.cta2 && settings.cta2_link && (
            <Link className="button-secondary" href={settings.cta2_link}>
              {settings.cta2}
            </Link>
          )}
        </footer>
      </section>
    </div>
  );
};
