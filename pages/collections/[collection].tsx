import { createSSGHelpers } from "@trpc/react/ssg";
import { apiRoutes, transformer } from "_server/settings/api-routes";
import { getAllCollections } from "_server/shopify/get-all-collections";
import { GetStaticPaths } from "next";

export const Collection = () => <></>;

export default Collection;

export const getStaticPaths: GetStaticPaths = async (context) => {
  const collections = await getAllCollections(
    process.env.SHOPIFY_API_STORE,
    process.env.SHOPIFY_API_ACCESS_TOKEN
  );

  const paths = collections.map((collection) => ({
    params: { collection: `${collection.handle}` },
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

  const data = await ssg.fetchQuery(
    "fetch.shopify-content",
    `/collections/${params.collection}` as string
  );

  // console.log('state', ssr.dehydrate());
  return {
    props: {
      // trpcState: ssg.dehydrate(),
      ...data,
    },
  };
};
