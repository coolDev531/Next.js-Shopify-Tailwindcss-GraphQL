import Shopify from "shopify-typed-node-api";
import { _Article, Article } from "shopify-typed-node-api/dist/clients/rest/request_types";

export const getAllArticlesByBlogId = async (
  shop: string,
  accessToken: string,
  id,
  reducer = (p) => p
) => {
  const ShopifyRest = new Shopify.Clients.Rest(shop, `${accessToken}`);

  let page_info = null;
  let articles: (_Article & { blog: string })[] = [];

  for (let i = 0; i < 5000; i++) {
    const { body, headers } = await ShopifyRest.get<Article.Get>({
      path: `blogs/${id}/articles`,
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

    articles = [
      ...articles.map((a) => ({ ...a })),
      ...reducer(body.articles.map((a) => ({ ...a }))),
    ];

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

  return articles;
};
