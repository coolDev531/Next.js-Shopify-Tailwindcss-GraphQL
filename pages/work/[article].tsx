import { createSSGHelpers } from "@trpc/react/ssg";
import { useInitShopifyData } from "_client/hooks/use-shopify-data";
import { renderSection } from "_client/sections/_render-section";
import { apiRoutes, transformer } from "_server/settings/api-routes";
import { getAllArticlesByBlogId } from "_server/shopify/get-all-articles-by-blog-id";
import { GetStaticPaths, InferGetStaticPropsType } from "next";

import { useRouter } from "next/router";
import { FC } from "react";

export const Article: FC<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  const router = useRouter();
  const { article } = router.query;

  const { sections, global } = useInitShopifyData<typeof props.global, typeof props.sections>(
    props
  );

  return <>{sections.map((section) => renderSection(section))}</>;
};

export default Article;

export const getStaticPaths: GetStaticPaths = async (context) => {
  const articles = await getAllArticlesByBlogId(
    process.env.SHOPIFY_API_STORE,
    process.env.SHOPIFY_API_ACCESS_TOKEN,
    77191413815 /* HARDCODED: Work Blog Id */
  );

  const paths = articles.map((article) => ({
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

  const data = await ssg.fetchQuery("fetch.shopify-content", `/blogs/work/${params.article}`);

  // console.log('state', ssr.dehydrate());
  return {
    props: {
      trpcState: ssg.dehydrate(),
      ...data,
    },
    revalidate: 150,
  };
};
