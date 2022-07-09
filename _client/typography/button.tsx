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
      <Link {...props} className={clsx("button", secondary && "button-secondary")}>
        {children}
      </Link>
    );
  } else {
    return (
      <button {...props} className={clsx("button", secondary && "button-secondary")}>
        {children}
      </button>
    );
  }
};
