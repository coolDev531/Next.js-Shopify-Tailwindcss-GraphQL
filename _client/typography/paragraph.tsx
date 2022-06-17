import clsx from "clsx";
import parse from "html-react-parser";
import { FC, PropsWithChildren } from "react";

type ParagraphProps = {
  size?: "sm" | "base" | "xl";
};

export const Paragraph: FC<PropsWithChildren<ParagraphProps>> = ({ children, size = "base" }) => {
  return (
    <div
      className={clsx(
        "max-w-xl leading-relaxed tracking-tight text-slate-500 [&>p+p]:mt-4",
        {
          sm: "text-sm",
          base: "text-base",
          xl: "text-base md:text-lg xl:max-w-2xl",
        }[size]
      )}
    >
      {parse(children as string)}
    </div>
  );
};
