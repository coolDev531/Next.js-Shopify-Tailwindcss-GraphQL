import { isExternalUrl } from "utils/is-external-url";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { AnchorHTMLAttributes, FC, useCallback } from "react";

export type LinkProps = AnchorHTMLAttributes<any> & NextLinkProps;

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
  onClick,
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

  const handleClick = useCallback((e) => {
    if (window.self !== window.top) {
      e.preventDefault();
      e.stopPropagation();

      window?.parent?.postMessage(
        {
          source: "theme-content",
          topic: "redirect",
          href: href,
        },
        "*"
      );
    }
    if (onClick) {
      onClick(e);
    }
  }, [href, onClick]);

  return (
    <>
      {href && !isExternalUrl(href)
        ? <NextLink {...nextLinkProps}>
            <a onClick={handleClick} {...AnchorProps}>
              {children}
            </a>
          </NextLink>
        : <a
            href={href}
            rel={AnchorProps?.target === "_blank" ? "noopener noreferrer" : undefined}
            onClick={onClick}
            {...AnchorProps}
          >
            {children}
          </a>}
    </>
  );
};
