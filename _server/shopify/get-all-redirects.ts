import Shopify from "shopify-typed-node-api";
import { Redirect } from "shopify-typed-node-api/dist/clients/rest/request_types";

export const getAllRedirects = async (shop: string, accessToken: string, reducer = (p) => p) => {
  const ShopifyRest = new Shopify.Clients.Rest(shop, `${accessToken}`);

  let page_info = null;
  let metafields = [];

  for (let i = 0; i < 5000; i++) {
    const { body, headers } = await ShopifyRest.get<Redirect.Get>({
      path: "redirects",
      query: {
        page_info,
        limit: "250",
      },
      tries: 10,
    });

    metafields = [...metafields, ...reducer(body.redirects)];

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

  return metafields;
};
