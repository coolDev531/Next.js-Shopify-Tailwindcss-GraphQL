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
    /* inline-flex justify-center rounded-lg bg-gray-900 py-3 px-4 text-sm font-semibold text-white hover:bg-gray-700*/
    return (
      <Link
        {...props}
        className={clsx(
          "inline-flex items-center whitespace-nowrap rounded-md border py-3 px-4 text-sm",
          "f:outline-none f:ring-2 f:ring-sky-400 f:ring-offset-2",
          "transition-all duration-100",
          "font-medium leading-4",
          secondary
            ? "border-sky-200 bg-white/20 h:border-sky-300 h:backdrop-blur-sm h:backdrop-saturate-200 dark:border-sky-700 dark:bg-dark-bg/20 dark:h:border-sky-400"
            : "border-sky-500 bg-sky-500 shadow-lg shadow-sky-500/25 h:bg-sky-400 dark:bg-sky-800 dark:h:bg-sky-700",
          secondary
            ? "text-sky-700/90 h:text-sky-600 dark:text-sky-400 dark:h:text-sky-300"
            : "text-white"
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
          "inline-flex items-center whitespace-nowrap rounded-md border py-3 px-4 text-sm",
          "f:outline-none f:ring-2 f:ring-sky-400 f:ring-offset-2",
          "transition-all duration-100",
          "font-medium leading-4",
          secondary
            ? "border-sky-200 bg-white/20 h:border-sky-300 h:backdrop-blur-sm h:backdrop-saturate-200"
            : "border-sky-500 bg-sky-500 h:bg-sky-400",
          secondary ? "text-sky-700/90 h:text-sky-600" : "text-white"
        )}
      >
        {children}
      </button>
    );
  }
};
