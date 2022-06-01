import Shopify from "shopify-typed-node-api";
import { _Page, Metafield, Order, Page } from "shopify-typed-node-api/dist/clients/rest/dataTypes";

export const getAllPages = async (shop: string, accessToken: string, reducer = (p) => p) => {
  const ShopifyRest = new Shopify.Clients.Rest(shop, `${accessToken}`);

  let page_info = null;
  let pages: _Page[] = [];

  for (let i = 0; i < 5000; i++) {
    const { body, headers } = await ShopifyRest.get<Page.Get>({
      path: "pages",
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

    pages = [...pages, ...reducer(body.pages)];

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

  return pages;
};
