import { createSSGHelpers } from "@trpc/react/ssg";
import { Layout } from "_client/layout/layout";
import { apiRoutes, transformer } from "_server/settings/api-routes";
import { InferGetStaticPropsType } from "next";
import { FC } from "react";

type IndexProps = {};

export const Collection: FC<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return <Layout sections={props.sections} global={props.global} />;
};

export default Collection;

export const getStaticProps = async ({ params }) => {
  const ssg = createSSGHelpers({
    router: apiRoutes,
    transformer,
    // @ts-ignore
    ctx: { req: {}, res: {} },
  });

  const data = await ssg.fetchQuery("fetch.shopify-content", "/collections");

  // console.log('state', ssr.dehydrate());
  return {
    props: {
      // trpcState: ssg.dehydrate(),
      ...data,
    },
    revalidate: 60,
  };
};
