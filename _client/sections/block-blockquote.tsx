import { Wrapper } from "_client/layout/wrapper";
import { Paragraph } from "_client/typography/paragraph";
import clsx from "clsx";
import { FC } from "react";
import { BlockquoteSection } from "types/sections";

export const BlockBlockquote: FC<BlockquoteSection> = ({ id, settings, type }) => {
  return (
    <Wrapper maxWidth="xl" paddingY="base">
      <figure className="relative mx-auto max-w-prose px-4">
        <div className="absolute inset-0 -z-20 flex h-[84%] select-none items-center justify-center">
          <div className="relative aspect-1 h-full rounded-[0_0_100%_0] bg-sky-200/40 dark:bg-gray-800/60">
            <div className="absolute aspect-1 h-[47%] rounded-[0_0_100%_0] bg-white dark:bg-dark-bg"></div>
          </div>
          <div className="relative aspect-1 h-full rounded-[0_0_100%_0] bg-sky-200/40 dark:bg-gray-800/60">
            <div className="absolute aspect-1 h-[47%] rounded-[0_0_100%_0] bg-white dark:bg-dark-bg"></div>
          </div>
        </div>
        <blockquote
          className={clsx(
            "relative mb-3 max-w-xl text-base leading-relaxed tracking-tight text-gray-600 dark:text-gray-300 md:text-lg xl:max-w-2xl",
            settings.quotation_marks && [
              "b:absolute b:-left-3 b:-top-3 b:text-4xl b:open-quote",
              "a:relative a:-bottom-3 a:-right-2 a:text-4xl a:close-quote a:leading-0",
            ]
          )}
        >
          {settings.quote}
        </blockquote>

        <figcaption>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {settings.author}
          </h3>
          <h4 className="text-sm text-gray-400">{settings.job_title}</h4>
        </figcaption>
      </figure>
    </Wrapper>
  );
};
