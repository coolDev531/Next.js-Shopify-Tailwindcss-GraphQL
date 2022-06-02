import { createSSGHelpers } from "@trpc/react/ssg";
import { useShopifyData } from "_client/hooks/use-shopify-data";
import { renderSection } from "_client/sections/_render-section";
import { apiRoutes, transformer } from "_server/settings/api-routes";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { FC, useEffect, useState } from "react";

type IndexProps = {};

export const Search: FC<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  const { sections, global } = useShopifyData<typeof props.global, typeof props.sections>(props);

  return <>{sections.map((section) => renderSection(section))}</>;
};

export default Search;

export const getStaticProps = async ({ params }) => {
  const ssg = createSSGHelpers({
    router: apiRoutes,
    transformer,
    // @ts-ignore
    ctx: { req: {}, res: {} },
  });

  const data = await ssg.fetchQuery("fetch.shopify-content", "/search");

  // console.log('state', ssr.dehydrate());
  return {
    props: {
      trpcState: ssg.dehydrate(),
      ...data,
    },
    revalidate: 60,
  };
};
