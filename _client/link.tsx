import NextLink from "next/link";
import { AnchorHTMLAttributes, FC } from "react";

type LinkProps = AnchorHTMLAttributes<any>;

export const Link: FC<LinkProps> = ({ children, href, ...AnchorProps }) => {
  return (
    <>
      {href && !isExternalUrl(href)
        ? <NextLink href={href}>
            <a {...AnchorProps}>{children}</a>
          </NextLink>
        : <a
            href={href}
            rel={AnchorProps?.target === "_blank" ? "noopener noreferrer" : undefined}
            {...AnchorProps}
          >
            {children}
          </a>}
    </>
  );
};

export const isExternalUrl = (url: string): boolean => {
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    const host = window?.location?.hostname ?? process.env.NEXT_PUBLIC_HOSTNAME;

    const linkHost = (function (url) {
      if (/^https?:\/\//.test(url)) {
        const anchorElement = document.createElement("a");
        anchorElement.href = url;
        return anchorElement.hostname;
      } else {
        return window?.location?.hostname ?? process.env.NEXT_PUBLIC_HOSTNAME;
      }
    })(url);

    return host !== linkHost;
  }

  const host = process.env.NEXT_PUBLIC_HOSTNAME;

  const linkHost = (function (url) {
    if (/^(https?:)?\/\//.test(url)) {
      return url.replace(/^(https?:)?\/\//gi, "").split(/(\/|\\|\?)/gi)[0];
    } else {
      return process.env.NEXT_PUBLIC_HOSTNAME;
    }
  })(url);

  return host !== linkHost;
};
