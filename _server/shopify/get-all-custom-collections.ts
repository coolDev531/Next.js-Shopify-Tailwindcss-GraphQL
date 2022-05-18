import Shopify from "shopify-typed-node-api";
import { _CustomCollection, CustomCollection, SmartCollection } from "shopify-typed-node-api/dist/clients/rest/dataTypes";

export const getAllCustomCollections = async (
  shop: string,
  accessToken: string,
  reducer = (p) => p
) => {
  const ShopifyRest = new Shopify.Clients.Rest(shop, `${accessToken}`);

  let page_info = null;
  let customCollection: _CustomCollection[] = [];

  for (let i = 0; i < 5000; i++) {
    const { body, headers } = await ShopifyRest.get<CustomCollection.Get>({
      path: "custom_collections",
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

    customCollection = [...customCollection, ...reducer(body.custom_collections)];

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

  return customCollection;
};
