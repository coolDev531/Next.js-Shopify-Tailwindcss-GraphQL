import { useInitShopifyData } from "_client/hooks/use-shopify-data";
import { useIsGloballyMounted } from "_client/stores/is-globally-mounted-store";
import { useTooltipStore } from "_client/stores/tooltip-store";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import { useMount } from "react-use";

export const LoadInitialData: FC<PropsWithChildren<any>> = ({ children }) => {
  const [tooltip] = useTooltipStore();
  const [showTooltip, setShowTooltip] = useState(false);
  const [_, setIsGloballyMounted] = useIsGloballyMounted();

  useInitShopifyData();

  useMount(() => {
    setShowTooltip(true);
    window?.parent?.postMessage(
      {
        source: "theme-content",
        topic: "set-iframe",
        totalHeight: document.body.clientHeight,
      },
      "*"
    );
  });

  useEffect(() => {
    const hideTooltip = () => {
      setTimeout(
        () => {
          setShowTooltip(false);
          setTimeout(
            () => {
              setShowTooltip(true);
            },
            10
          );
        },
        200
      );
    };
    window.addEventListener("scroll", hideTooltip);
    return () => {
      window.removeEventListener("scroll", hideTooltip);
    };
  }, []);

  useEffect(() => {
    setIsGloballyMounted(true);
  }, [setIsGloballyMounted]);

  return (
    <>
      {children}
      {tooltip && showTooltip
        ? <ReactTooltip
            place="bottom"
            effect="solid"
            wrapper="span"
            arrowColor="rgb(var(--color-card))"
            // globalEventOff="hide-global-tooltip"
            // possibleCustomEventsOff="hide-global-tooltip"
            className="relative !border-none !border-transparent !p-0"
            getContent={(content) => {
              return (
                <div className="h-[calc(100%+1px)] w-[calc(100%+1px)] rounded-sm border-card bg-card py-2 px-5 text-slate-700 opacity-100 shadow-xl dark:text-gray-50">
                  {content}
                </div>
              );
            }}
          />
        : null}
    </>
  );
};
