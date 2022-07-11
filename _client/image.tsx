import usePreloadImage from "_client/hooks/use-preload-image";
import { ImageProps } from "next/dist/client/future/image";
import NextImage from "next/future/image";
import { FC, useEffect } from "react";
import { SetRequired } from "type-fest";

export const Image: FC<
  SetRequired<ImageProps, "width" | "height"> & {
    maxHeight?: number;
    maxWidth?: number;
    pixelDensity?: number;
    preload?: boolean;
  }
> = ({ pixelDensity = 1, preload, ...props }) => {
  const preloadImage = usePreloadImage();

  const { src, width, height, maxWidth, maxHeight, ...rest } = props;

  const aspectRatio = +width / +height;

  useEffect(() => {
    if (src && typeof src === "string" && preload) {
      preloadImage({
        src,
        quality: +props.quality || 75,
        width: maxWidth ? maxWidth : maxHeight ? maxHeight * aspectRatio : +width,
      });
    }
  }, [aspectRatio, maxHeight, maxWidth, preload, preloadImage, props.quality, src, width]);

  if (!src) {
    return null;
  }

  return (
    <NextImage
      {...rest}
      placeholder="blur"
      blurDataURL={
        typeof src === "string"
          ? `/_next/image?url=${encodeURIComponent(src.replace(/^\/\//, "https://"))}&w=32&q=1`
          : undefined
      }
      src={typeof src === "string" ? src.replace(/^\/\//, "https://") : src}
      width={Math.round(
        +(maxWidth ? maxWidth : maxHeight ? maxHeight * aspectRatio : width) * pixelDensity
      )}
      height={Math.round(
        +(maxHeight ? maxHeight : maxWidth ? maxWidth / aspectRatio : height) * pixelDensity
      )}
    />
  );
};
