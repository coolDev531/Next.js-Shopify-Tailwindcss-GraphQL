import { JSONParse } from "_client/utils/json-parse";
import { createRouter } from "_server/settings/create-router";
import axios from "axios";
import { JSDOM } from "jsdom";

export const fetchRouter = createRouter().query("shopify-theme-settings", {
  resolve: async ({}) => {
    const data = await axios({ url: "https://liquix-theme-dev.myshopify.com", method: "Get" });

    const document = new JSDOM(data.data);
    const global = JSONParse(document.window.document.querySelector("[data-global]").textContent);
    const sections = [];
    document.window.document.querySelectorAll("[data-section]").forEach((scriptElement) => {
      sections.push(JSONParse(scriptElement.textContent));
    });
    return { global, sections };
  },
});
