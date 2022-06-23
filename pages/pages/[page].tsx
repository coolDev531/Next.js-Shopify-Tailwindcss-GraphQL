import { createSSGHelpers } from "@trpc/react/ssg";
import { useInitShopifyData } from "_client/hooks/use-shopify-data";
import { renderSection } from "_client/sections/_render-section";
import { apiRoutes, transformer } from "_server/settings/api-routes";
import { getAllPages } from "_server/shopify/get-all-pages";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { FC, useEffect, useState } from "react";

import { useRouter } from "next/router";

export const Page: FC<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  const router = useRouter();
  const { page } = router.query;

  const { sections, global } = useInitShopifyData<typeof props.global, typeof props.sections>(
    props
  );

  return <>{sections.map((section) => renderSection(section))}</>;
};

export default Page;

export const getStaticPaths: GetStaticPaths = async (context) => {
  const pages = await getAllPages(
    process.env.SHOPIFY_API_STORE,
    process.env.SHOPIFY_API_ACCESS_TOKEN
  );

  const paths = pages.map((page) => ({
    params: { page: `${page.handle}` },
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

  const data = await ssg.fetchQuery("fetch.shopify-content", `/pages/${params.page}` as string);
  console.log(data);
  // console.log('state', ssr.dehydrate());
  return {
    props: {
      trpcState: ssg.dehydrate(),
      ...data,
    },
  };
};
