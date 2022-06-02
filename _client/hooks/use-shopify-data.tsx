import { useEffect, useState } from "react";
import { DehydratedState } from "react-query";

export const useShopifyData = <G, S>(props: {
  global: G;
  sections: S;
  trpcState?: DehydratedState;
}) => {
  const [global, setGlobal] = useState<G>(props.global);
  const [sections, setSections] = useState<S>(props.sections);

  useEffect(() => {
    const handleMessages = (e) => {
      if (e?.data?.source === "theme-editor") {
        console.log(e.data);
        setSections(e.data.sections);
        setGlobal(e.data.global);
        if (e.data.topic === "shopify:section:select") {
          document
            .getElementById(e.data.detail.sectionId)
            .scrollIntoView({ behavior: "smooth", block: "start" });

          // scrollTo(200, document.getElementById(e.data.detail.sectionId).scrollTop);
        }
      }
    };
    window.addEventListener("message", handleMessages);
    return () => {
      window.removeEventListener("message", handleMessages);
    };
  }, []);
  return { sections, global };
};
