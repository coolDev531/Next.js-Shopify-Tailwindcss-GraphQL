import { createSSGHelpers } from "@trpc/react/ssg";
import { useShopifyData } from "_client/hooks/use-shopify-data";
import { renderSection } from "_client/sections/_render-section";
import { apiRoutes, transformer } from "_server/settings/api-routes";
import { getAllArticles } from "_server/shopify/get-all-articles";
import { GetStaticPaths, InferGetStaticPropsType } from "next";

import { useRouter } from "next/router";
import { FC } from "react";

export const Article: FC<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  const router = useRouter();
  const { article } = router.query;

  const { sections, global } = useShopifyData<typeof props.global, typeof props.sections>(props);

  return <>{sections.map((section) => renderSection(section))}</>;
};

export default Article;

export const getStaticPaths: GetStaticPaths = async (context) => {
  const articles = await getAllArticles(
    process.env.SHOPIFY_API_STORE,
    process.env.SHOPIFY_API_ACCESS_TOKEN
  );

  console.log(articles);

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

  console.log({ params });
  const data = await ssg.fetchQuery(
    "fetch.shopify-content",
    `/blogs/${params.blog}/${params.article}`
  );

  // console.log('state', ssr.dehydrate());
  return {
    props: {
      trpcState: ssg.dehydrate(),
      ...data,
    },
    revalidate: 150,
  };
};
