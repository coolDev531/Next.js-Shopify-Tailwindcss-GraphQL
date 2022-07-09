import clsx from "clsx";
import { FC, useState } from "react";
import { TabsFaqSection } from "types/sections";

export const TabsFaq: FC<TabsFaqSection> = ({ id, settings, blocks, type }) => {
  const [activateTab, setActivateTab] = useState(
    blocks.filter(({ type }) => type === "category")[0]?.id
  );

  return (
    <div className="mx-auto max-w-7xl px-8">
      <section className="mb-8">
        <header>
          <h1>{settings.title}</h1>
        </header>
      </section>
      <div className="flex justify-between gap-16">
        <div className="flex flex-col gap-4">
          {blocks.map((block) => {
            switch (block.type) {
              case "category": {
                return (
                  <button
                    key={`tab-${block.id}`}
                    onClick={() => {
                      setActivateTab(block.id);
                    }}
                    className={clsx(
                      "rounded-lg border border-gray-400 py-2 px-8",
                      activateTab === block.id && "bg-pink-300 text-white"
                    )}
                  >
                    {block.settings.title}
                  </button>
                );
              }
            }
          })}
        </div>

        {blocks.map((block) => {
          switch (block.type) {
            case "category": {
              return (
                <article
                  key={`content-${block.id}`}
                  className={clsx("grid grid-cols-2 gap-8", activateTab !== block.id && "hidden")}
                >
                  {block.settings.faq_items?.products?.map((product) => {
                    return (
                      <section key={`content-${block.id}-block-${product.id}`}>
                        <header>
                          <h2 className="mb-2 font-semibold">{product.title}</h2>
                        </header>
                        <main
                          className="text-sm opacity-75"
                          dangerouslySetInnerHTML={{ __html: product.content }}
                        />
                      </section>
                    );
                  })}
                </article>
              );
            }
          }
        })}
      </div>
    </div>
  );
};
