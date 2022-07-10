import { createSSGHelpers } from "@trpc/react/ssg";
import { Layout } from "_client/layout/layout";
import { apiRoutes, transformer } from "_server/settings/api-routes";
import * as fs from "fs";
import { InferGetStaticPropsType } from "next";
import { FC } from "react";

type IndexProps = {};

export const _404: FC<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  // console.log(props);
  return <Layout sections={props.sections} global={props.global} />;
};

export default _404;

export const getStaticProps = async ({ params }) => {
  const ssg = createSSGHelpers({
    router: apiRoutes,
    transformer,
    // @ts-ignore
    ctx: { req: {}, res: {} },
  });

  const data = await ssg.fetchQuery("fetch.shopify-content", "/404");
  fs.writeFileSync("./props-data.json", JSON.stringify(data));
  fs.writeFileSync("./ssg.dehydrate.json", JSON.stringify(ssg.dehydrate()));
  // console.log('state', ssr.dehydrate());
  return {
    props: {
      // trpcState: ssg.dehydrate(),
      ...data,
    },
    revalidate: 60,
  };
};
