import { createSSGHelpers } from "@trpc/react/ssg";
import { apiRoutes, transformer } from "_server/settings/api-routes";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { FC } from "react";
import { createContext } from "_server/settings/context";

type IndexProps = {};

export const Index: FC<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  console.log(props.filter);
  return <>Index</>;
};

export default Index;

export const getStaticProps = async (context: GetStaticPropsContext<{ filter: string }>) => {
  const ssg = createSSGHelpers({
    router: apiRoutes,
    transformer,
    // @ts-ignore
    ctx: { req: {}, res: {} },
  });

  const data = await ssg.fetchQuery("fetch.shopify-theme-settings");

  // console.log('state', ssr.dehydrate());
  return {
    props: {
      trpcState: ssg.dehydrate(),
      filter: data,
    },
  };
};
