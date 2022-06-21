import { useCallback, useEffect, useState } from "react";
import { DehydratedState } from "react-query";
import { Sections } from "types/sections";
import { GlobalSettings } from "types/shopify";

export const useShopifyData = <G extends GlobalSettings, S extends Sections[]>(props: {
  global: G;
  sections: S;
  trpcState?: DehydratedState;
}) => {
  const [global, setGlobal] = useState<G>(props.global);
  const [sections, setSections] = useState<S>(props.sections);

  const messageSectionSizes = useCallback(() => {
    console.log("resize");
    window?.parent?.postMessage(
      {
        source: "theme-content",
        topic: "resize",
        totalHeight: document.body.clientHeight,
        sections: sections.map(({ id }) => ({
          id,
          height: document.getElementById(id)?.clientHeight ?? 0,
        })),
      },
      "*"
    );
  }, [sections]);

  const handleMessages = useCallback((e) => {
    if (e?.data?.source === "theme-editor") {
      setSections(e.data.sections);
      setGlobal(e.data.global);
      /*if (e.data.topic === "shopify:section:select") {
        const sectionElement = document.getElementById(e.data.detail.sectionId);
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }*/
    }
  }, []);

  useEffect(() => {
    window.addEventListener("message", handleMessages);
    window.addEventListener("resize", messageSectionSizes);
    return () => {
      window.removeEventListener("message", handleMessages);
      window.removeEventListener("resize", messageSectionSizes);
    };
  }, [handleMessages, messageSectionSizes]);

  return { sections, global };
};
