import parse from "html-react-parser";
import { FC, PropsWithChildren } from "react";

export const Paragraph: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="max-w-xl leading-relaxed tracking-tight text-slate-500 md:text-lg xl:max-w-2xl [&>p]:mb-4">
      {parse(children as string)}
    </div>
  );
};
