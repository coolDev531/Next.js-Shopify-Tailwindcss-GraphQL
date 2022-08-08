import { createSSGHelpers } from "@trpc/react/ssg";
import { apiRoutes, transformer } from "_server/settings/api-routes";
import { getAllProducts } from "_server/shopify/get-all-products";
import { GetStaticPaths } from "next";

export const Product = () => <></>;

export default Product;

export const getStaticPaths: GetStaticPaths = async (context) => {
  const products = await getAllProducts(
    process.env.SHOPIFY_API_STORE,
    process.env.SHOPIFY_API_ACCESS_TOKEN
  );

  const paths = products
    .filter((product) => product.status === "active")
    .filter((product) => product.product_type === "Service" || product.product_type === "portfolio")
    .map((product) => ({
      params: { product: `${product.handle}` },
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
    `/products/${params.product}` as string
  );

  return {
    props: {
      // trpcState: ssg.dehydrate(),
      ...data,
    },
    // revalidate: 60 * 60,
  };
};
