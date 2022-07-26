import { createSSGHelpers } from "@trpc/react/ssg";
import { apiRoutes, transformer } from "_server/settings/api-routes";
import { getAllPages } from "_server/shopify/get-all-pages";
import { GetStaticPaths } from "next";

export const Page = () => <></>;

export default Page;

export const getStaticPaths: GetStaticPaths = async (context) => {
  const pages = await getAllPages(
    process.env.SHOPIFY_API_STORE,
    process.env.SHOPIFY_API_ACCESS_TOKEN
  );

  const paths = pages
    .filter((page) => page.published_at)
    .map((page) => ({
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

  // console.log('state', ssr.dehydrate());
  return {
    props: {
      // trpcState: ssg.dehydrate(),
      ...data,
    },
  };
};
