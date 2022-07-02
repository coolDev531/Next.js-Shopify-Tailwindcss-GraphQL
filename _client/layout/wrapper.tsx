import clsx from "clsx";
import { Property } from "csstype";
import { FC, HTMLAttributes, PropsWithChildren } from "react";

type SectionProps = {
  maxWidth: "sm" | "base" | "xl" | "fullscreen";
  paddingY: "none" | "base" | "xl";
  background?: Property.Background<string | number>;
  bgHeight?: Property.Height;
  bgOpacity?: Property.Opacity;
  className?: React.ComponentProps<"div">["className"];
};

export const Wrapper: FC<PropsWithChildren<SectionProps>> = ({
  maxWidth,
  paddingY,
  background,
  bgHeight,
  bgOpacity,
  children,
  className,
}) => {
  const getContainerClasses = (container: SectionProps["maxWidth"]) => {
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

  const getPaddingClasses = (padding: SectionProps["paddingY"]) => {
    switch (padding) {
      case "base": {
        return "py-16";
      }
      case "xl": {
        return "py-32";
      }
      case "none": {
        return "";
      }
      default: {
        return "";
      }
    }
  };

  return (
    <>
      {background
        ? <div
            className="pointer-events-none absolute left-0 bottom-0 -z-50 h-full w-full select-none"
            style={{ background, height: bgHeight, opacity: bgOpacity }}
          />
        : null}
      <div
        className={clsx(
          "relative mx-auto",
          getContainerClasses(maxWidth),
          getPaddingClasses(paddingY),
          className
        )}
      >
        {children}
      </div>
    </>
  );
};
