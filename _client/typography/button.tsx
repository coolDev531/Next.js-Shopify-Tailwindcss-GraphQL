import { Link, LinkProps } from "_client/link";
import clsx from "clsx";
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

type ButtonProps = {
  secondary?: boolean;
};
export const Button: FC<
  | PropsWithChildren<LinkProps & ButtonProps>
  | PropsWithChildren<ButtonHTMLAttributes<any> & ButtonProps>
> = ({ children, secondary, ...props }) => {
  if ("href" in props) {
    return (
      <Link
        {...props}
        className={clsx(
          "inline-flex items-center whitespace-nowrap rounded border px-4 py-3 sm:px-8",
          "f:outline-none f:ring-2 f:ring-sky-400 f:ring-offset-2",
          "transition-all duration-100",
          "font-medium leading-4",
          secondary
            ? "border-sky-200 bg-white h:border-sky-500"
            : "border-sky-500 bg-sky-500 h:bg-white",
          secondary ? "text-sky-700/60 h:text-sky-600" : "text-white h:text-sky-600"
        )}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        {...props}
        className={clsx(
          "inline-flex items-center whitespace-nowrap rounded border px-4 py-3 sm:px-8",
          "f:outline-none f:ring-2 f:ring-sky-400 f:ring-offset-2",
          "transition-all duration-100",
          "font-medium leading-4",
          "border ",
          secondary
            ? "border-sky-200 bg-white h:border-sky-500"
            : "border-sky-500 bg-sky-500 h:bg-white",
          secondary ? "text-sky-700/60 h:text-sky-600" : "text-white h:text-sky-600"
        )}
      >
        {children}
      </button>
    );
  }
};
