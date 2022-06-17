import { Section } from "_client/layout/section";
import { BlockHeading } from "_client/sections/block-heading";
import { renderIcon } from "_sections/utils";
import { FC, Fragment } from "react";
import { SpecListSection } from "types/sections";

export const SpecList: FC<SpecListSection> = ({ id, blocks, type }) => {
  const count = blocks.filter(({ type }) => type === "list").length;
  return (
    <Section id={id} type={type} container="base" padding="base">
      {blocks.map((block) => {
        return block.type === "heading"
          ? <BlockHeading key={`heading-${block.id}`} {...block} section={false} />
          : null;
      })}
      <div className="mt-8 flex justify-center">
        <ul className="grid flex-1 justify-center gap-2 gap-y-1 sm:grid-cols-2 lg:grid-cols-[repeat(3,minmax(0,320px))]">
          {blocks.map((block) => {
            if (block.type !== "list") return null;

            return (
              <Fragment key={`list-${block.id}`}>
                {[...new Array(6)].map((_, index) => {
                  if (block.settings[`text${index + 1}`]) {
                    return (
                      <li
                        key={`list-${block.id}-${index}`}
                        className="flex items-center gap-3 overflow-ellipsis whitespace-nowrap px-8"
                      >
                        {renderIcon(block.settings[`icon${index + 1}`], "h-4 w-4 min-w-[1rem]")}
                        {block.settings[`text${index + 1}`]}
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
    </Section>
  );
};
