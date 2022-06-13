import { FC, PropsWithChildren } from "react";

type PreHeadingProps = {
  heading?: "h2" | "h3";
};
export const PreHeading: FC<PropsWithChildren<PreHeadingProps>> = ({
  children,
  heading = "h3",
}) => {
  switch (heading) {
    case "h2": {
      return <h2 className="mb-2 font-semibold text-sky-500 xl:text-lg">{children}</h2>;
    }
    case "h3": {
      return <h3 className="mb-2 font-semibold text-sky-500 xl:text-lg">{children}</h3>;
    }
  }
};
