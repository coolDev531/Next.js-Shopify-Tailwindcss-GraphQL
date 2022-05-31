import { createSSGHelpers } from "@trpc/react/ssg";
import { renderSection } from "_client/sections/_render-section";
import { apiRoutes, transformer } from "_server/settings/api-routes";
import { getAllProducts } from "_server/shopify/get-all-products";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { FC, useEffect, useState } from "react";

import { useRouter } from "next/router";

export const Product: FC<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  const router = useRouter();
  const { product } = router.query;

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

  return <>{sections.map((section) => renderSection(section))}</>;
};

export default Product;

export const getStaticPaths: GetStaticPaths = async (context) => {
  const products = await getAllProducts(
    process.env.SHOPIFY_API_STORE,
    process.env.SHOPIFY_API_ACCESS_TOKEN
  );

  const paths = products.map((product) => ({
    params: { product: `${product.handle}` },
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

  const data = await ssg.fetchQuery(
    "fetch.shopify-content",
    `/products/${params.product}` as string
  );

  // console.log('state', ssr.dehydrate());
  return {
    props: {
      trpcState: ssg.dehydrate(),
      ...data,
    },
  };
};
