import clsx from "clsx";
import { Property } from "csstype";
import { FC, PropsWithChildren } from "react";
import { Sections } from "types/sections";

type SectionProps = {
  id: string;
  type: Sections["type"];
  background?: Property.Background<string | number>;
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
  background,
  type,
  id,
  children,
  section = true,
}) => {
  if (!section) {
    return <>{children}</>;
  }
  return (
    <section className={type} id={id} style={{ background }}>
      <div
        className={clsx(
          "relative mx-auto",
          getContainerClasses(container),
          getPaddingClasses(padding)
        )}
      >
        {children}
      </div>
    </section>
  );
};
