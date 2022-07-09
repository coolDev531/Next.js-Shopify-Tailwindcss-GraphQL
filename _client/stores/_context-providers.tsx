import { PostsProvider } from "_client/stores/posts-store";
import { TooltipProvider } from "_client/stores/tooltip-store";
import { FC, PropsWithChildren } from "react";

export const ContextProviders: FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <PostsProvider>
      <TooltipProvider>{children}</TooltipProvider>
    </PostsProvider>
  );
};
