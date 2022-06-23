import { FC, PropsWithChildren } from "react";

export const Badge: FC<PropsWithChildren<{}>> = ({ children }) => (
  <span className="flex select-none items-center space-x-2 rounded-md bg-slate-100 py-1 px-3 text-xs font-semibold leading-5 h:bg-slate-200 dark:bg-gray-800 dark:h:bg-gray-700">
    {children}
  </span>
);
