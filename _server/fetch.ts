import { createRouter } from "_server/settings/create-router";
import axios from "axios";
import { JSDOM } from "jsdom";

import { JSONParse } from "utils/json-parse";
import { z } from "zod";
import { Sections } from ".shopify-cms/types/sections";
import { GlobalSettings } from ".shopify-cms/types/shopify";

export const fetchRouter = createRouter().query("shopify-content", {
  input: z.string(),
  resolve: async ({ input }) => {
    const parseShopifyData = (documentString: string) => {
      const document = new JSDOM(documentString);
      const global: GlobalSettings = JSONParse(
        document.window.document.querySelector("[data-global]").textContent
      );
      const sections: Sections[] = [];
      document.window.document.querySelectorAll("[data-section]").forEach((scriptElement) => {
        sections.push(JSONParse(scriptElement.textContent));
      });

      return { global, sections };
    };

    try {
      console.log({ input });
      const data = await (await fetch(`https://liquix-theme-dev.myshopify.com${input}`)).text();

      return parseShopifyData(data);
    } catch (err) {
      console.log(err);
      if (err.response.status === 404 && input === "/404") {
        const { data } = err.response;
        return parseShopifyData(data);
      }
      console.log(err.message);
    }
    return { global: null, sections: null };
  },
});
