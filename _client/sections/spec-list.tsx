import BlockHeading from "_client/sections/block-heading";
import { renderIcon } from "_sections/utils";
import { FC } from "react";
import { SpecListSection } from "types/sections";

export const SpecList: FC<SpecListSection> = ({ id, blocks, type }) => {
  const count = blocks.filter(({ type }) => type === "list").length;
  return (
    <>
      {blocks.map((block) => {
        return block.type === "heading"
          ? <BlockHeading key={`heading-${block.id}`} {...block} />
          : null;
      })}
      <div className="mx-auto max-w-7xl px-8 pb-12">
        <div
          className="grid justify-center gap-8"
          style={{ gridTemplateColumns: `repeat(${count}, min(240px, 33%))` }}
        >
          {blocks.map((block) => {
            if (block.type !== "list") return null;

            return (
              <ul key={block.id}>
                {[...new Array(6)].map((_, index) => {
                  console.log(index);
                  if (block.settings[`text${index + 1}`]) {
                    return (
                      <li className="flex max-w-[240px] items-center gap-3">
                        {renderIcon(block.settings[`icon${index + 1}`], "h-4 w-4")}
                        {block.settings[`text${index + 1}`]}
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};
