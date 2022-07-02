import { useShopifyData } from "_client/stores/shopify-data-store";
import { useCallback, useEffect, useState } from "react";
import { DehydratedState } from "react-query";
import { Sections } from "types/sections";
import { GlobalSettings } from "types/shopify";

export const useInitShopifyData = <G extends GlobalSettings, S extends Sections[]>(props: {
  global: G;
  sections: S;
  trpcState?: DehydratedState;
}) => {
  const [{ global, sections }, setShopifyData] = useShopifyData();

  useEffect(() => {
    setShopifyData({
      global: props.global,
      sections: props.sections,
    });
  }, [props.global, props.sections, setShopifyData]);

  const messageSectionSizes = useCallback(() => {
    window?.parent?.postMessage(
      {
        source: "theme-content",
        topic: "resize",
        totalHeight: document.body.clientHeight,
        sections: sections.map(({ id }) => ({
          id,
          height: document.getElementById(`section--${id}`)?.clientHeight ?? 0,
        })),
      },
      "*"
    );
  }, [sections]);

  const handleMessages = useCallback((e) => {
    if (e?.data?.source === "theme-editor") {
      setShopifyData({ global: e.data.global, sections: e.data.sections });

      if (e.data.topic === "shopify:section:select") {
        const sectionElement = document.getElementById(`section--${e.data.detail.sectionId}`);
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  }, [setShopifyData]);

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
