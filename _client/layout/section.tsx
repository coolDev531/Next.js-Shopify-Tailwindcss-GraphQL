import clsx from "clsx";
import { Property } from "csstype";
import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { Sections } from "types/sections";

type SectionProps = {
  id: string;
  type: Sections["type"];
  background?: Property.Background<string | number>;
  bgHeight?: Property.Height;
  bgOpacity?: Property.Opacity;
  className?: React.ComponentProps<"div">["className"];
  color?: "dark" | "light";
  container?: "sm" | "base" | "xl" | "fullscreen";
  padding?: "base" | "xl";
  section?: boolean;
};

const getContainerClasses = (container: SectionProps["container"]) => {
  switch (container) {
    case "fullscreen": {
      return "";
    }
    case "sm": {
      return "max-w-4xl px-4 sm:px-8";
    }
    case "base": {
      return "max-w-6xl px-4 sm:px-8";
    }
    case "xl": {
      return "max-w-7xl px-4 sm:px-8";
    }
    default: {
      return "px-4 sm:px-8";
    }
  }
};
const getPaddingClasses = (padding: SectionProps["padding"]) => {
  switch (padding) {
    case "base": {
      return "py-16";
    }
    case "xl": {
      return "py-32";
    }
    default: {
      return "";
    }
  }
};
export const Section: FC<PropsWithChildren<SectionProps>> = ({
  container,
  padding,
  className,
  background,
  bgHeight,
  bgOpacity,
  type,
  id,
  children,
  section = true,
  color = "dark",
}) => {
  if (!section) {
    return <>{children}</>;
  }
  return (
    <section className={clsx(type, "relative", className)} id={id}>
      {background
        ? <div
            className="pointer-events-none absolute left-0 bottom-0 -z-50 h-full w-full select-none"
            style={{ background, height: bgHeight, opacity: bgOpacity }}
          />
        : null}
      <div
        className={clsx(
          "relative mx-auto",
          color === "light" && "color-slate-inverted",
          getContainerClasses(container),
          getPaddingClasses(padding)
        )}
      >
        {children}
      </div>
    </section>
  );
};
