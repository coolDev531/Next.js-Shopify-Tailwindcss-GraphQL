import { metafieldDefinitionsQuery } from "_server/shopify/graphql/metafieldDefinitions";
import { MetafieldDefinitionsQuery, MetafieldDefinitionsQueryVariables } from "_server/shopify/types";
import type { NextApiRequest, NextApiResponse } from "next";
import Shopify from "shopify-typed-node-api";
import { Asset } from "shopify-typed-node-api/dist/clients/rest/dataTypes";
import { JSONParse } from "utils/json-parse";

type TestFunction = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

const SHOPIFY_CMS_THEME_ID = process.env.SHOPIFY_CMS_THEME_ID;

export const Test: TestFunction = async (req, res) => {
  const api = new Shopify.Clients.Rest(
    process.env.SHOPIFY_API_STORE,
    `${process.env.SHOPIFY_API_ACCESS_TOKEN}`
  );

  const { body } = await api.get<Asset.Get>({
    path: `themes/${SHOPIFY_CMS_THEME_ID}/assets`,
    tries: 20,
  });

  const files = await Promise.all(
    body.assets
      .filter((file) => /^sections\/.*liquid$/.test(file.key))
      .map((file) =>
        api
          .get<Asset.GetById>({
            path: `themes/${SHOPIFY_CMS_THEME_ID}/assets`,
            query: {
              "asset[key]": file.key,
            },
            tries: 20,
          })
          .then((data) => {
            return data;
          })
          .catch((e) => {
            return null;
          })
      )
  );

  res.status(200).json({
    files: files.map((file) => {
      const replacer = /(.|\n)*\{%-?\s?schema\s?-?%\}((.|\n)*)\{%-?\s?endschema\s?-?%\}(.|\n)*/i;
      return JSONParse(file.body.asset.value?.replace(replacer, "$2"));
    }),
    body,
  });
};

export default Test;
