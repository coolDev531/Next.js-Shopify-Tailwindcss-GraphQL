import { getAllBlogs } from "_server/shopify/get-all-blogs";
import Shopify from "shopify-typed-node-api";
import { _Article, Article, Blog, Metafield, Order, Page } from "shopify-typed-node-api/dist/clients/rest/dataTypes";

export const getAllArticles = async (shop: string, accessToken: string, reducer = (p) => p) => {
  const ShopifyRest = new Shopify.Clients.Rest(shop, `${accessToken}`);

  const blogs = await getAllBlogs(shop, accessToken);
  let page_info = null;
  let articles: (_Article & { blog: string })[] = [];

  for (let j = 0; j < blogs.length; j++) {
    for (let i = 0; i < 5000; i++) {
      const { body, headers } = await ShopifyRest.get<Article.Get>({
        path: `blogs/${blogs[j].id}/articles`,
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
        ...articles.map((a) => ({ ...a, blog: blogs[j].handle })),
        ...reducer(body.articles.map((a) => ({ ...a, blog: blogs[j].handle }))),
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
  }
  console.log(articles);

  return articles;
};
