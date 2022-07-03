import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

type HeadingProps = {
  heading?: "h1" | "h2" | "h3" | "h4";
  light?: boolean;
};
export const Heading: FC<PropsWithChildren<HeadingProps>> = ({
  children,
  heading = "h2",
  light = false,
}) => {
  switch (heading) {
    case "h1": {
      return (
        <h1
          className={clsx(
            "mb-3 text-3xl font-bold lg:mb-4 lg:text-5xl xl:text-6xl",
            light ? "text-slate-50" : "text-slate-800"
          )}
        >
          {children}
        </h1>
      );
    }
    case "h2": {
      return (
        <h2
          className={clsx(
            "mb-3 text-3xl font-semibold sm:text-4xl lg:mb-4",
            light ? "text-slate-50" : "text-slate-800"
          )}
        >
          {children}
        </h2>
      );
    }
    case "h3": {
      return (
        <h3
          className={clsx("mb-1 text-lg font-semibold", light ? "text-slate-50" : "text-slate-800")}
        >
          {children}
        </h3>
      );
    }

    case "h4": {
      return (
        <h4 className={clsx("mb-1 font-semibold", light ? "text-slate-100" : "text-slate-700")}>
          {children}
        </h4>
      );
    }
  }
};
