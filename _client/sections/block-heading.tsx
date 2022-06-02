import { Link } from "_client/link";
import clsx from "clsx";
import { FC } from "react";
import { HeadingSection } from "types/sections";

export const BlockHeading: FC<HeadingSection> = ({ id, settings }) => {
  return (
    <div className="mx-auto max-w-7xl px-8 py-16">
      <div
        className={clsx(
          "flex",
          settings.position === "left" && "justify-start text-left",
          settings.position === "center" && "justify-center text-center",
          settings.position === "right" && "justify-end text-right"
        )}
      >
        <section>
          <header>
            <h2>{settings.pre_title}</h2>
            <h1>{settings.title}</h1>
          </header>
          <main className="max-w-prose" dangerouslySetInnerHTML={{ __html: settings.paragraph }} />
          <footer
            className={clsx(
              ((settings.cta1 && settings.cta1_link) || (settings.cta2 && settings.cta2_link)) &&
                "mt-8"
            )}
          >
            {settings.cta1 && settings.cta1_link && (
              <Link
                href={settings.cta1_link}
                className="rounded border border-gray-700 bg-white py-2 px-4"
              >
                {settings.cta1}
              </Link>
            )}
            {settings.cta2 && settings.cta2_link && (
              <Link
                href={settings.cta2_link}
                className="ml-8 rounded border border-gray-700 bg-white py-2 px-4"
              >
                {settings.cta2}
              </Link>
            )}
          </footer>
        </section>
      </div>
    </div>
  );
};

export default BlockHeading;
