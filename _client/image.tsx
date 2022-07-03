import { Property } from "csstype";
import { ImageProps } from "next/dist/client/future/image";
import NextImage from "next/future/image";
import { FC } from "react";

export const Image: FC<
  ImageProps & { maxHeight?: number; maxWidth?: number; pixelDensity?: number }
> = ({ pixelDensity = 1, ...props }) => {
  const { src, width, height, maxWidth, maxHeight, ...rest } = props;
  const aspectRatio = +width / +height;
  return (
    <NextImage
      {...rest}
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
