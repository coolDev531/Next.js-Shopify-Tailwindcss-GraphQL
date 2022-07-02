import clsx from "clsx";
import { createElement, FC, PropsWithChildren } from "react";

type HeadingProps = {
  as?: keyof HTMLElementTagNameMap;
  className?: string;
  heading?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "3xl" | "2xl" | "xl" | "lg" | "base" | "sm" | "xs" | "pre";
};

export const Heading: FC<PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "base",
  as = "h2",
}) => {
  function getHeadingStyles(size: HeadingProps["size"]) {
    switch (size) {
      case "3xl":
        return "heading-3xl";
      case "2xl":
        return "heading-2xl";
      case "xl":
        return "heading-xl";
      case "lg":
        return "heading-lg";
      case "base":
        return "heading-base";
      case "sm":
        return "heading-sm";
      case "xs":
        return "heading-xs";
      case "pre":
        return "heading-pre";
    }
  }

  return <>{createElement(as, { className: clsx(getHeadingStyles(size), className) }, children)}</>;
};
