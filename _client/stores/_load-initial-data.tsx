import { useTooltipStore } from "_client/stores/tooltip-store";
import { AppToolTip } from "pages/_app";
import { FC, PropsWithChildren, useEffect } from "react";

export const LoadInitialData: FC<PropsWithChildren<any>> = ({ children }) => {
  const [tooltip] = useTooltipStore();

  console.log({ tooltip });

  return (
    <>
      {children}{" "}
      {tooltip
        ? <AppToolTip
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
