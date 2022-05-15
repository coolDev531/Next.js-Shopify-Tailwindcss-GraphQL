import { makeStore } from "_client/stores/_make-store";
import { Post } from ".prisma/client";

const { Provider, useStore } = makeStore<Post[]>([], "Posts");

export const usePostStore = useStore;
export const PostsProvider = Provider;
