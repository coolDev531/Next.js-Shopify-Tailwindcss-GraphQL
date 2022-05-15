import { isExternalUrl } from "_client/utils/is-external-url";
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
