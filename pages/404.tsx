import { createSSGHelpers } from "@trpc/react/ssg";
import { apiRoutes, transformer } from "_server/settings/api-routes";
import * as fs from "fs";

type IndexProps = {};

export const _404 = () => <></>;

export default _404;

export const getStaticProps = async ({ params }) => {
  const ssg = createSSGHelpers({
    router: apiRoutes,
    transformer,
    // @ts-ignore
    ctx: { req: {}, res: {} },
  });

  const data = await ssg.fetchQuery("fetch.shopify-content", "/404");

  return {
    props: {
      // trpcState: ssg.dehydrate(),
      ...data,
    },
    // revalidate: 60,
  };
};
