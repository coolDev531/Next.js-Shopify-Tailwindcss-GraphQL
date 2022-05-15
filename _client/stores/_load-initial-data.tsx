import { fetchOnce, useQuery } from "_client/hooks/_useTRPC";
import { usePostStore } from "_client/stores/posts-store";
import { useSession } from "next-auth/react";
import { FC, PropsWithChildren, useEffect } from "react";

export const LoadInitialData: FC<PropsWithChildren<any>> = ({ children }) => {
  const [posts, setPosts] = usePostStore();
  const { data, isSuccess, isLoading } = useQuery(["posts.getAll"], fetchOnce);
  console.log(posts);

  // useSession();

  useEffect(() => {
    console.log({ data });
    if (isSuccess && Array.isArray(data)) {
      setPosts(data ?? []);
    }
  }, [data, isSuccess, setPosts]);

  return <>{children}</>;
};
