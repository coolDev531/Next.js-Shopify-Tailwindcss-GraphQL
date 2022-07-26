import clsx from "clsx";
import { Property } from "csstype";
import { FC, PropsWithChildren } from "react";

type SectionProps =
  | {
      maxWidth: "sm" | "base" | "xl" | "fullscreen";
      spacing: "none" | "sm" | "md" | "base" | "lg" | "xl";
      background?: Property.Background<string | number>;
      bgBlur?: boolean;
      bgClassName?: React.ComponentProps<"div">["className"];
      bgHeight?: Property.Height;
      bgOpacity?: Property.Opacity;
      className?: React.ComponentProps<"div">["className"];
      overflowHidden?: boolean;
      spacingBottom?: number;
      spacingTop?: number;
    }
  | {
      maxWidth: "sm" | "base" | "xl" | "fullscreen";
      spacing: "custom";
      spacingBottom: number;
      spacingTop: number;
      background?: Property.Background<string | number>;
      bgBlur?: boolean;
      bgClassName?: React.ComponentProps<"div">["className"];
      bgHeight?: Property.Height;
      bgOpacity?: Property.Opacity;
      className?: React.ComponentProps<"div">["className"];
      overflowHidden?: boolean;
    };

export const Wrapper: FC<PropsWithChildren<SectionProps>> = ({
  maxWidth,
  spacing,
  spacingTop,
  spacingBottom,
  background,
  bgHeight,
  bgBlur,
  bgOpacity,
  children,
  className,
  bgClassName,
  overflowHidden,
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

  const getPaddingClasses = (spacing: SectionProps["spacing"]) => {
    switch (spacing) {
      case "custom": {
        return "";
      }
      case "sm": {
        return "py-8";
      }
      case "base": {
        return "py-16";
      }
      case "md": {
        return "py-16";
      }
      case "lg": {
        return "py-32";
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
      {background || bgClassName
        ? <div
            className={clsx(
              "pointer-events-none absolute left-0 bottom-0 -z-10 h-full w-full select-none",
              bgBlur && "border-y border-gray-200 backdrop-blur-md backdrop-saturate-200",
              bgClassName
            )}
            style={{ background, height: bgHeight, opacity: bgOpacity }}
          />
        : null}
      {overflowHidden
        ? <div className="relative overflow-hidden">
            <div
              className={clsx(
                "relative mx-auto",
                getContainerClasses(maxWidth),
                getPaddingClasses(spacing),
                className
              )}
              style={
                spacing === "custom"
                  ? {
                      paddingTop: `${spacingTop * 4}px`,
                      paddingBottom: `${spacingBottom * 4}px`,
                    }
                  : undefined
              }
            >
              {children}
            </div>
          </div>
        : <div
            className={clsx(
              "relative mx-auto",
              getContainerClasses(maxWidth),
              getPaddingClasses(spacing),
              className
            )}
          >
            {children}
          </div>}
    </>
  );
};
