import { createSSGHelpers } from "@trpc/react/ssg";
import { apiRoutes, transformer } from "_server/settings/api-routes";
import { getAllArticles } from "_server/shopify/get-all-articles";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { FC, useEffect, useState } from "react";

import { useRouter } from "next/router";

export const Article: FC<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  const router = useRouter();
  const { article } = router.query;

  const [global, setGlobal] = useState(props.global);
  const [sections, setSections] = useState(props.sections);

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

  return (
    <>
      {sections?.map((section) => (
        <div key={section.id}>{section.id}</div>
      ))}
    </>
  );
};

export default Article;

export const getStaticPaths: GetStaticPaths = async (context) => {
  const articles = await getAllArticles(
    process.env.SHOPIFY_API_STORE,
    process.env.SHOPIFY_API_ACCESS_TOKEN
  );

  console.log(articles);

  const paths = articles.map((article) => ({
    params: { article: `${article.handle}`, blog: "news" },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{ global: any; sections: any[] }> = async ({
  params,
}) => {
  const ssg = createSSGHelpers({
    router: apiRoutes,
    transformer,
    // @ts-ignore
    ctx: { req: {}, res: {} },
  });

  console.log({ params });
  const data = await ssg.fetchQuery(
    "fetch.shopify-content",
    `/blogs/${params.blog}/${params.article}` as string
  );

  // console.log('state', ssr.dehydrate());
  return {
    props: {
      trpcState: ssg.dehydrate(),
      ...data,
    },
  };
};
