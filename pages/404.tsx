import { createSSGHelpers } from "@trpc/react/ssg";
import { renderSection } from "_client/sections/_render-section";
import { apiRoutes, transformer } from "_server/settings/api-routes";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { FC, useEffect, useState } from "react";

type IndexProps = {};

export const Index: FC<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
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

export default Index;

export const getStaticProps = async (
  context: GetStaticPropsContext<{ global: any; sections: any[] }>
) => {
  const ssg = createSSGHelpers({
    router: apiRoutes,
    transformer,
    // @ts-ignore
    ctx: { req: {}, res: {} },
  });

  const data = await ssg.fetchQuery("fetch.shopify-content", "/404");

  // console.log('state', ssr.dehydrate());
  return {
    props: {
      trpcState: ssg.dehydrate(),
      ...data,
    },
    revalidate: 60,
  };
};
