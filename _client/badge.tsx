import { FC, PropsWithChildren } from "react";

export const Badge: FC<PropsWithChildren<{}>> = ({ children }) => (
  <span className="flex select-none items-center space-x-2 rounded-md bg-gray-100 py-1 px-3 text-xs font-semibold leading-5 h:bg-gray-200 dark:bg-dark-card dark:h:bg-gray-800">
    {children}
  </span>
);
