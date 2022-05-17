import { getAllCustomCollections } from "_server/shopify/get-all-custom-collections";
import { getAllSmartCollections } from "_server/shopify/get-all-smart-collections";
import Shopify from "shopify-typed-node-api";
import { _Collection, SmartCollection } from "shopify-typed-node-api/dist/clients/rest/dataTypes";

export const getAllCollections = async (shop: string, accessToken: string, reducer = (p) => p) => {
  const smartCollections = getAllSmartCollections(shop, accessToken);
  const customCollections = getAllCustomCollections(shop, accessToken);

  return [...(await smartCollections), ...(await customCollections)];
};
