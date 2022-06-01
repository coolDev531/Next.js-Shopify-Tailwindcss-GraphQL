import { createSSGHelpers } from "@trpc/react/ssg";
import { renderSection } from "_client/sections/_render-section";
import { apiRoutes, transformer } from "_server/settings/api-routes";
import { getAllCollections } from "_server/shopify/get-all-collections";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { FC, useEffect, useState } from "react";

import { useRouter } from "next/router";

export const Collection: FC<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  const router = useRouter();
  const { collection } = router.query;

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
    `/collections/${params.collection}` as string
  );

  // console.log('state', ssr.dehydrate());
  return {
    props: {
      trpcState: ssg.dehydrate(),
      ...data,
    },
  };
};
