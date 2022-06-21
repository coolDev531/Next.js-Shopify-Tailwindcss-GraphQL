import { useTooltipStore } from "_client/stores/tooltip-store";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import { useMount } from "react-use";

export const LoadInitialData: FC<PropsWithChildren<any>> = ({ children }) => {
  const [tooltip] = useTooltipStore();
  const [showTooltip, setShowTooltip] = useState(false);

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
            className="!bg-white !text-slate-600 !opacity-100 shadow-xl drop-shadow"
          />
        : null}
    </>
  );
};
