import { FC, PropsWithChildren } from "react";

type HeadingProps = {
  heading?: "h1" | "h2" | "h3" | "h4";
};
export const Heading: FC<PropsWithChildren<HeadingProps>> = ({ children, heading = "h2" }) => {
  switch (heading) {
    case "h1": {
      return (
        <h1 className="mb-3 text-3xl font-bold text-slate-800 lg:mb-4 lg:text-5xl xl:text-6xl">
          {children}
        </h1>
      );
    }
    case "h2": {
      return (
        <h2 className="mb-3 text-3xl font-semibold text-slate-800 sm:text-4xl lg:mb-4">
          {children}
        </h2>
      );
    }
    case "h3": {
      return <h3 className="mb-1 text-lg font-semibold text-slate-800">{children}</h3>;
    }

    case "h4": {
      return <h4 className="mb-1 font-semibold text-slate-700">{children}</h4>;
    }
  }
};
