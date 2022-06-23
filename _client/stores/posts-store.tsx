import { makeStore } from "_client/stores/_make-store";

const { Provider, useStore } = makeStore<number[]>([], "Posts");

export const usePosts = useStore;
export const PostsProvider = Provider;
