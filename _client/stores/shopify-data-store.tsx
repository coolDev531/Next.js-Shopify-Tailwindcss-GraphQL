import { makeStore } from "_client/stores/_make-store";
import { Sections } from ".shopify-cms/typessections";
import { GlobalSettings } from ".shopify-cms/typesshopify";

const { Provider, useStore } = makeStore<{ global: GlobalSettings; sections: Sections[] }>(
  { global: null, sections: [] },
  "ThemeData"
);

export const useShopifyData = useStore;
export const ShopifyDataProvider = Provider;
