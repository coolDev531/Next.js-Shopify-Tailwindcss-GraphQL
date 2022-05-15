import { PostsProvider } from "_client/stores/posts-store";
import { FC, PropsWithChildren } from "react";

export const ContextProviders: FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <>
      <PostsProvider>{children} </PostsProvider>
    </>
  );
};
