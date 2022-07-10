import { GloballyMountedProvider } from "_client/stores/is-globally-mounted-store";
import { PostsProvider } from "_client/stores/posts-store";
import { PreloadedImagesProvider } from "_client/stores/preloaded-images-store";
import { TooltipProvider } from "_client/stores/tooltip-store";
import { FC, PropsWithChildren } from "react";

export const ContextProviders: FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <PostsProvider>
      <PreloadedImagesProvider>
        <GloballyMountedProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </GloballyMountedProvider>
      </PreloadedImagesProvider>
    </PostsProvider>
  );
};
