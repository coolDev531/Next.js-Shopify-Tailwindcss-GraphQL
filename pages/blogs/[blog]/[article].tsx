import { createSSGHelpers } from "@trpc/react/ssg";
import { renderSection } from "_client/sections/_render-section";
import { apiRoutes, transformer } from "_server/settings/api-routes";
import { getAllArticles } from "_server/shopify/get-all-articles";
import { GetStaticPaths, InferGetStaticPropsType } from "next";

import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

export const Article: FC<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  const router = useRouter();
  const { article } = router.query;

  console.log(article);
  const [global, setGlobal] = useState(props.global);
  const [sections, setSections] = useState(props.sections ?? []);

  useEffect(() => {
    const handleMessages = (e) => {
      if (e?.data?.source === "theme-editor") {
        console.log(e);
        setSections(e.data.sections);
        setGlobal(e.data.global);
      }
    };
    window.addEventListener("message", handleMessages);
    return () => {
      window.removeEventListener("message", handleMessages);
    };
  }, []);

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
  };
};
