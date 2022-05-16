import { createSSGHelpers } from "@trpc/react/ssg";
import { apiRoutes, transformer } from "_server/settings/api-routes";
import { getAllProducts } from "_server/shopify/get-all-products";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { FC, useEffect, useState } from "react";

type HandleProps = {};

import { useRouter } from "next/router";

export const Product: FC<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  const router = useRouter();
  const { product } = router.query;
  console.log(product);
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

  return (
    <>
      {sections?.map((section) => (
        <div key={section.id}>{section.id}</div>
      ))}
    </>
  );
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

  console.log(paths);
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

  console.log(params);

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
