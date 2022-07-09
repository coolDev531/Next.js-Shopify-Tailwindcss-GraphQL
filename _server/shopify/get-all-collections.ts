import { getAllCustomCollections } from "_server/shopify/get-all-custom-collections";
import { getAllSmartCollections } from "_server/shopify/get-all-smart-collections";

export const getAllCollections = async (shop: string, accessToken: string, reducer = (p) => p) => {
  const smartCollections = getAllSmartCollections(shop, accessToken);
  const customCollections = getAllCustomCollections(shop, accessToken);

  return [...(await smartCollections), ...(await customCollections)];
};
