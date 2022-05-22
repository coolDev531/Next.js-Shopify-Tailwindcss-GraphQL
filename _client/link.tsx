import { isExternalUrl } from "utils/is-external-url";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { AnchorHTMLAttributes, FC } from "react";

type LinkProps = AnchorHTMLAttributes<any> & NextLinkProps;

export const Link: FC<LinkProps> = ({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale,
  legacyBehavior,
  ...AnchorProps
}) => {
  const nextLinkProps = {
    href,
    as,
    replace,
    scroll,
    shallow,
    passHref,
    prefetch,
    locale,
    legacyBehavior,
  };
  return (
    <>
      {href && !isExternalUrl(href)
        ? <NextLink {...nextLinkProps}>
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
