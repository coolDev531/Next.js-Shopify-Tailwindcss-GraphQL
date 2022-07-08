declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.gif";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

import "react";

declare module "react" {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    global?: boolean;
    jsx?: boolean;
  }
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}
