import { makeStore } from "_client/stores/_make-store";

const { Provider, useStore } = makeStore<boolean>(true, "Tooltip");

export const useTooltipStore = useStore;
export const TooltipProvider = Provider;
