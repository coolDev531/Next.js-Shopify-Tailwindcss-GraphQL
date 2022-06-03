import clsx from "clsx";
import { FC } from "react";
import { BlockquoteSection } from "types/sections";

export const BlockBlockquote: FC<BlockquoteSection> = ({ id, settings, type }) => {
  return (
    <div className="mx-auto max-w-7xl px-8 pb-12">
      <figure className="mx-auto max-w-prose">
        <blockquote
          className={clsx(
            "mb-3",
            settings.quotation_marks && [
              "relative",
              "b:absolute b:-left-3 b:-top-3 b:text-4xl b:open-quote",
              "a:relative a:-bottom-3 a:-right-2 a:text-4xl a:close-quote a:leading-0",
            ]
          )}
        >
          {settings.quote}
        </blockquote>

        <figcaption className="flex flex-col gap-1">
          <span>{settings.author}</span>
          <span>{settings.job_title}</span>
        </figcaption>
      </figure>
    </div>
  );
};
