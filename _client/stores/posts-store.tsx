import { makeStore } from "_client/stores/_make-store";

const { Provider, useStore } = makeStore<number[]>([], "Posts");

export const usePostStore = useStore;
export const PostsProvider = Provider;
