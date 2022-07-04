import { Wrapper } from "_client/layout/wrapper";
import { BlockHeading } from "_client/sections/block-heading";
import { renderIcon } from "_sections/utils";
import clsx from "clsx";
import { FC, Fragment } from "react";
import { SpecListSection } from "types/sections";

export const SpecList: FC<SpecListSection> = ({ id, blocks, type, settings }) => {
  return (
    <Wrapper
      maxWidth="base"
      paddingY="base"
      background={settings.color_bg}
      bgBlur={settings.blur_bg}
      className={clsx(settings.color_toggle === "light" && "color-slate-inverted")}
    >
      {blocks.map((block) => {
        return block.type === "heading"
          ? <BlockHeading key={`heading-${block.id}`} {...block} />
          : null;
      })}
      <div className="mt-8 flex justify-center">
        <ul className="grid flex-1 justify-center gap-2 gap-y-1 sm:grid-cols-2 lg:grid-cols-[repeat(3,minmax(0,320px))]">
          {blocks.map((block) => {
            if (block.type !== "list") return null;

            return (
              <Fragment key={`list-${block.id}`}>
                {[1, 2, 3, 4, 5, 6].map((_, key) => {
                  if (block.settings[`text${key}`]) {
                    return (
                      <li
                        key={`list-${block.id}-${key}`}
                        className="flex items-center gap-3 overflow-ellipsis whitespace-nowrap px-8 text-slate-700 dark:text-slate-400"
                      >
                        {renderIcon(block.settings[`icon${key}`], "h-4 w-4 min-w-[1rem]")}
                        {block.settings[`text${key}`]}
                      </li>
                    );
                  }
                  return null;
                })}
              </Fragment>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};
