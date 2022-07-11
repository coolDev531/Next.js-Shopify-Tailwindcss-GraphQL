import { ReactIcon } from "_client/dynamic-react-icon";
import { Link } from "_client/link";
import clsx from "clsx";
import { FC } from "react";

import { TabsProcessStepSection } from "types/sections";

export const TabsProcessStep: FC<TabsProcessStepSection> = ({ id, settings, blocks, type }) => {
  return (
    <div className="mx-auto max-w-7xl overflow-hidden px-8 py-16">
      <div className="grid gap-16" style={{ gridTemplateColumns: "420px 1fr" }}>
        <div>
          <section>
            <header>
              <h2>{settings.pre_title}</h2>
              <h1>{settings.title}</h1>
            </header>
            <main
              className="max-w-prose"
              dangerouslySetInnerHTML={{ __html: settings.paragraph }}
            />
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
          <div className="mt-8 flex flex-col gap-4">
            {blocks.map((block) => {
              switch (block.type) {
                case "step": {
                  return (
                    <button
                      key={`tab-${block.id}`}
                      className="rounded-md bg-gray-100 p-2 text-left shadow"
                    >
                      <h2>{block.settings.tab_title}</h2>
                      <p>{block.settings.tab_paragraph}</p>
                    </button>
                  );
                }
              }
            })}
          </div>
        </div>

        <figure className={clsx("hidden h-full min-h-[480px] w-full ", "lg:block")}>
          <div className="h-full rounded-xl bg-gray-900 p-3 shadow-2xl drop-shadow-2xl d:bg-dark-card">
            <header
              className="mb-3 grid items-center"
              style={{ gridTemplateColumns: "50px 1fr 50px" }}
            >
              <i className="flex gap-1.5">
                <button
                  tabIndex={-1}
                  aria-hidden
                  className="h-3 w-3 rounded-full bg-gray-700 transition-colors h:bg-[#EC6A5F]"
                />
                <button
                  tabIndex={-1}
                  aria-hidden
                  className="h-3 w-3 rounded-full bg-gray-700 transition-colors h:bg-[#F4BF50]"
                />
                <button
                  tabIndex={-1}
                  aria-hidden
                  className="h-3 w-3 rounded-full bg-gray-700 transition-colors h:bg-[#61C454]"
                />
              </i>
              <h4 className="color select-none text-center text-[13px] leading-none tracking-wide text-gray-500"></h4>
              <div className="flex justify-end">
                <button
                  className="transition-colors hf:text-white"
                  onClick={(e) => console.log(e)}
                  type="button"
                >
                  <ReactIcon name="FiCopy" />
                </button>
              </div>
            </header>
            <div className="relative h-[calc(100%-28px)] before:absolute b:pointer-events-none b:bottom-0 b:z-10 b:h-12 b:w-full b:select-none b:bg-gradient-to-b b:from-transparent b:to-gray-900 d:b:to-dark-card">
              <div className="scrollbar-none absolute inset-0 w-auto w-full overflow-y-scroll text-sm">
                {blocks.map((block) => {
                  switch (block.type) {
                    case "step": {
                      return (
                        <section key={`content-${block.id}`} className="mb-8">
                          <header>
                            <h3 className="text-white">{block.settings.title}</h3>
                          </header>
                          <main
                            className="text-gray-400/75"
                            dangerouslySetInnerHTML={{ __html: block.settings.paragraph }}
                          />
                        </section>
                      );
                    }
                  }
                })}
              </div>
            </div>
          </div>
        </figure>
      </div>
    </div>
  );
};
