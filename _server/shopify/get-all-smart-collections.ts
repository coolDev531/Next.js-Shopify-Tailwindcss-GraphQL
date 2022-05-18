import Shopify from "shopify-typed-node-api";
import { _Collection, SmartCollection } from "shopify-typed-node-api/dist/clients/rest/dataTypes";

export const getAllSmartCollections = async (
  shop: string,
  accessToken: string,
  reducer = (p) => p
) => {
  const ShopifyRest = new Shopify.Clients.Rest(shop, `${accessToken}`);

  let page_info = null;
  let smartCollections: _Collection[] = [];

  for (let i = 0; i < 5000; i++) {
    const { body, headers } = await ShopifyRest.get<SmartCollection.Get>({
      path: "smart_collections",
      query: page_info
        ? {
            page_info,
            limit: "250",
          }
        : {
            limit: "250",
          },
      tries: 10,
    });

    smartCollections = [...smartCollections, ...reducer(body.smart_collections)];

    // console.log(headers.raw());
    const link = headers.get("link");
    page_info = link
      ? link
          .split(",")
          .find((str) => /rel="next"/.test(str))
          ?.replace(/.*?page_info=([\w\d]+?)[>&].*/, "$1")
      : undefined;

    if (!page_info) {
      break;
    }
  }

  return smartCollections;
};
