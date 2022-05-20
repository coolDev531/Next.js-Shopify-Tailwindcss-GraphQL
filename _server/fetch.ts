import { JSONParse } from "_client/utils/json-parse";
import { createRouter } from "_server/settings/create-router";
import axios from "axios";
import { JSDOM } from "jsdom";
import { z } from "zod";

export const fetchRouter = createRouter().query("shopify-content", {
  input: z.string(),
  resolve: async ({ input }) => {
    try {
      const data = await axios({
        url: `https://liquix-theme-dev.myshopify.com${input}`,
        method: "Get",
      });

      const document = new JSDOM(data.data);
      const global = JSONParse(document.window.document.querySelector("[data-global]").textContent);
      const sections = [];
      document.window.document.querySelectorAll("[data-section]").forEach((scriptElement) => {
        sections.push(JSONParse(scriptElement.textContent));
      });

      return { global, sections };
    } catch (err) {
      if (err.response.status === 404 && input === "/404") {
        const { data } = err.response;
        const document = new JSDOM(data);
        const global = JSONParse(
          document.window.document.querySelector("[data-global]").textContent
        );
        const sections = [];
        document.window.document.querySelectorAll("[data-section]").forEach((scriptElement) => {
          sections.push(JSONParse(scriptElement.textContent));
        });
        return { global, sections };
      }
      console.log(err.message);
    }
    return {};
  },
});
