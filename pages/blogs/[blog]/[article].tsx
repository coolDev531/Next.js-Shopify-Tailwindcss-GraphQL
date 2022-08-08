import { createSSGHelpers } from "@trpc/react/ssg";
import { apiRoutes, transformer } from "_server/settings/api-routes";
import { getAllArticles } from "_server/shopify/get-all-articles";
import { GetStaticPaths } from "next";

export const Article = () => <></>;

export default Article;

export const getStaticPaths: GetStaticPaths = async (context) => {
  const articles = await getAllArticles(
    process.env.SHOPIFY_API_STORE,
    process.env.SHOPIFY_API_ACCESS_TOKEN
  );

  const paths = articles
    .filter((article) => article.published_at)
    .map((article) => ({
      params: { article: `${article.handle}`, blog: `${article.blog}` },
    }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const ssg = createSSGHelpers({
    router: apiRoutes,
    transformer,
    // @ts-ignore
    ctx: { req: {}, res: {} },
  });

  const data = await ssg.fetchQuery(
    "fetch.shopify-content",
    `/blogs/${params.blog}/${params.article}`
  );

  // console.log('state', ssr.dehydrate());
  return {
    props: {
      // trpcState: ssg.dehydrate(),
      ...data,
    },
    // revalidate: 60 * 60,
  };
};
