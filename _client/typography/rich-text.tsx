import clsx from "clsx";
import { NodeWithChildren } from "domhandler/lib/node";
import parse, { attributesToProps, domToReact, HTMLReactParserOptions } from "html-react-parser";
import { FC, HTMLAttributes, PropsWithChildren } from "react";

type HtmlTextProps = {
  className?: string;
};

export const RichText: FC<PropsWithChildren<HtmlTextProps>> = ({ children, className }) => {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof NodeWithChildren && domNode.attribs && domNode.parent === null) {
        console.log(domNode);
        const { className: currentClasses, ...props } = attributesToProps(domNode.attribs);

        return (
          <p className={clsx(currentClasses, className)} {...props}>
            {domToReact(domNode.children, options)}
          </p>
        );
      }
      return domNode;
    },
  };

  return <>{typeof children === "string" ? parse(children as string, options) : null}</>;
};
