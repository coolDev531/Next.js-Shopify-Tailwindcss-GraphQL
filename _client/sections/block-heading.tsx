import clsx from "clsx";
import { FC } from "react";
import { HeadingSection } from "types/sections";

export const BlockHeading: FC<HeadingSection> = ({ id, settings }) => {
  return (
    <section className="heading">
      <div className="mx-auto max-w-7xl gap-4 px-8 py-16">
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
            <main
              className="max-w-prose"
              dangerouslySetInnerHTML={{ __html: settings.paragraph }}
            />
          </section>
        </div>
      </div>
    </section>
  );
};

export default BlockHeading;
