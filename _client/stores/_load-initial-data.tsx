import { useInitShopifyData } from "_client/hooks/use-shopify-data";
import { useTooltipStore } from "_client/stores/tooltip-store";
import { useRouter } from "next/router";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import { useMount } from "react-use";

export const LoadInitialData: FC<PropsWithChildren<any>> = ({ children }) => {
  const [tooltip] = useTooltipStore();
  const [showTooltip, setShowTooltip] = useState(false);
  const router = useRouter();

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

  return (
    <>
      {children}
      {tooltip && showTooltip
        ? <ReactTooltip
            place="bottom"
            effect="solid"
            wrapper="span"
            arrowColor="#fff"
            // globalEventOff="hide-global-tooltip"
            // possibleCustomEventsOff="hide-global-tooltip"
            className="!bg-white !text-gray-600 !opacity-100 shadow-xl drop-shadow"
          />
        : null}
    </>
  );
};
