import Shopify from "shopify-typed-node-api";
import { _Product, Product } from "shopify-typed-node-api/dist/clients/rest/dataTypes";

export const getAllProducts = async (
  shop: string,
  accessToken: string,
  reducer = (p) => p
): Promise<_Product[]> => {
  console.log("getAllProducts");
  console.log(shop, accessToken);
  const ShopifyRest = new Shopify.Clients.Rest(shop, `${accessToken}`);

  let page_info = null;
  let products = [];

  for (let i = 0; i < 5000; i++) {
    console.log(i);
    const { body, headers } = await ShopifyRest.get<Product.Get>({
      path: "products",
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

    console.log({ body });
    products = [...products, ...reducer(body.products)];

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

  return products;
};
