import clsx from "clsx";
import parse from "html-react-parser";
import { FC, PropsWithChildren } from "react";

type ParagraphProps = {
  className?: string;
  size?: "sm" | "base" | "lg";
};

export const Paragraph: FC<PropsWithChildren<ParagraphProps>> = ({
  children,
  size = "base",
  className = "",
}) => {
  function getParagraphStyles(size: ParagraphProps["size"]) {
    switch (size) {
      case "lg":
        return "paragraph-lg";
      case "base":
        return "paragraph-base";
      case "sm":
        return "paragraph-sm";
    }
  }

  return (
    <div className={clsx(getParagraphStyles(size), className)}>
      {typeof children === "string" ? parse(children as string) : null}
    </div>
  );
};
